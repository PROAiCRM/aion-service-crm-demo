import {
  PRODUCT_VERSION, STORAGE_KEY, OFFER_STATUSES, STATUS_LABELS,
  createInitialState, normalizeState, createOffer, refreshExpiry,
  markOfferSent, markOfferViewedLocally, buildPublicOffer, createDecision,
  applyDecision, convertToOrderDraft, encodeEnvelope, decodeEnvelope,
  createBackup, restoreBackup, calculateMetrics, escapeHtml, money
} from './repair-offer-core-v0-2.js';

const app = document.getElementById('app');
const toastNode = document.getElementById('toast');
const backupInput = document.getElementById('backupInput');
let state = loadState();
let activeView = 'home';
let wizard = null;
let clientSelection = null;

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'));
  } catch {
    return createInitialState();
  }
}

function saveState(next = state) {
  state = normalizeState(next);
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

function toast(message) {
  toastNode.textContent = message;
  toastNode.classList.add('show');
  setTimeout(() => toastNode.classList.remove('show'), 1800);
}

function formatDate(value, withTime = false) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat('ru-RU', withTime
    ? { dateStyle: 'short', timeStyle: 'short' }
    : { dateStyle: 'medium' }).format(date);
}

function currentUrlWithoutHash() {
  return `${location.origin}${location.pathname}${location.search}`;
}

function offerShareUrl(offer) {
  const publicOffer = buildPublicOffer(offer, state.settings);
  return `${currentUrlWithoutHash()}#offer=${encodeEnvelope('offer', publicOffer)}`;
}

function responseShareUrl(response) {
  return `${currentUrlWithoutHash()}#response=${encodeEnvelope('response', response)}`;
}

function refreshOffers() {
  let changed = false;
  const offers = state.offers.map(offer => {
    const refreshed = refreshExpiry(offer);
    if (refreshed !== offer) changed = true;
    return refreshed;
  });
  if (changed) saveState({ ...state, offers });
}

function shell(content, view = activeView) {
  const items = [
    ['home', '⌂', 'Главная'],
    ['offers', '≡', 'Предложения'],
    ['templates', '◇', 'Шаблоны'],
    ['settings', '⚙', 'Настройки']
  ];
  const nav = items.map(([id, icon, label]) => `
    <button class="nav-btn ${view === id ? 'active' : ''}" data-nav="${id}">
      <span class="nav-icon">${icon}</span>${label}
    </button>`).join('');
  return `
    <header class="shell-head">
      <div class="brand"><div class="orb"></div><div><strong>AION Repair Offer</strong><small>Согласование ремонта без путаницы</small></div></div>
      <span class="pilot-badge">Pilot ${PRODUCT_VERSION}</span>
    </header>
    <div class="layout">
      <aside class="side">${nav}</aside>
      <main class="content">${content}<div class="footer-note">Пилотная local-first версия. Не является юридически значимой электронной подписью и пока не синхронизирована с production CRM.</div></main>
    </div>
    <nav class="mobile-nav">${nav}</nav>`;
}

function renderHome() {
  refreshOffers();
  activeView = 'home';
  const metrics = calculateMetrics(state.offers);
  const recent = [...state.offers].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 5);
  app.innerHTML = shell(`
    <section class="hero">
      <div class="eyebrow">ПОНЯТНОЕ ПРЕДЛОЖЕНИЕ НА РЕМОНТ</div>
      <h1>Не называйте цену.<br>Помогите клиенту выбрать.</h1>
      <p>Сервис создаёт несколько понятных вариантов ремонта. Клиент открывает ссылку на своём телефоне, выбирает подходящий вариант и возвращает зафиксированное решение.</p>
      <div class="actions no-print">
        <button class="btn primary" data-action="new-offer">＋ Создать предложение</button>
        <button class="btn" data-action="load-demo">Запустить готовый пример</button>
      </div>
    </section>
    <section class="metrics">
      ${metric('Предложений', metrics.total)}
      ${metric('Ждут решения', metrics.waiting)}
      ${metric('Согласовано', metrics.approved)}
      ${metric('Конверсия', `${metrics.conversion}%`)}
      ${metric('Согласовано на', money(metrics.agreedRevenue))}
    </section>
    <section class="grid2">
      <div class="panel">
        <div class="section-head"><h2>Как работает</h2></div>
        <div class="steps">
          <div class="step"><b>1</b><strong>Создайте</strong><div class="offer-meta">Устройство, проблема и 1–5 вариантов ремонта.</div></div>
          <div class="step"><b>2</b><strong>Отправьте</strong><div class="offer-meta">Ссылку можно передать через WhatsApp, Telegram, SMS или QR.</div></div>
          <div class="step"><b>3</b><strong>Получите решение</strong><div class="offer-meta">Клиент возвращает ссылку-ответ, а сервис фиксирует выбор.</div></div>
        </div>
      </div>
      <div class="panel">
        <h2>Что проверяем пилотом</h2>
        <div class="tip"><strong>Главная гипотеза</strong><div class="offer-meta">Понятный выбор из нескольких вариантов повышает доверие и уменьшает число клиентов, которые исчезают после сообщения цены.</div></div>
        <div class="notice" style="margin-top:10px">Для реального теста используйте метку клиента без фамилии, телефона и других персональных данных.</div>
      </div>
    </section>
    <div class="section-head"><h2>Последние предложения</h2><button class="btn ghost" data-nav="offers">Смотреть все</button></div>
    ${recent.length ? recent.map(offerRow).join('') : emptyState()}
  `, 'home');
}

function metric(label, value) {
  return `<div class="metric"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`;
}

function emptyState() {
  return `<div class="empty"><strong>Предложений пока нет</strong><br><br>Создайте первое или запустите готовый пример.</div>`;
}

function offerRow(offer) {
  const refreshed = refreshExpiry(offer);
  const recommended = refreshed.options.find(option => option.recommended) || refreshed.options[0];
  return `<button class="offer-row" data-open-offer="${escapeHtml(refreshed.id)}" style="width:100%;text-align:left;color:inherit">
    <div><h3>${escapeHtml(refreshed.device)} · ${escapeHtml(refreshed.issue)}</h3><div class="offer-meta">${escapeHtml(refreshed.customerLabel || 'Без метки клиента')} · ${formatDate(refreshed.createdAt)} · ориентир ${money(recommended?.price)}</div></div>
    <span class="status-badge ${escapeHtml(refreshed.status)}">${escapeHtml(STATUS_LABELS[refreshed.status] || refreshed.status)}</span>
  </button>`;
}

function renderOffers(search = '') {
  refreshOffers();
  activeView = 'offers';
  const query = search.trim().toLowerCase();
  const offers = [...state.offers]
    .filter(offer => !query || `${offer.device} ${offer.issue} ${offer.customerLabel} ${offer.publicCode}`.toLowerCase().includes(query))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  app.innerHTML = shell(`
    <div class="section-head"><div><div class="eyebrow">РАБОЧИЙ СПИСОК</div><h2>Предложения</h2></div><button class="btn primary" data-action="new-offer">＋ Создать</button></div>
    <div class="searchbar"><input id="offerSearch" class="input" placeholder="Устройство, проблема или код" value="${escapeHtml(search)}"><button class="btn" data-action="search-offers">Найти</button></div>
    <div style="height:8px"></div>
    ${offers.length ? offers.map(offerRow).join('') : emptyState()}
  `, 'offers');
}

function renderTemplates() {
  activeView = 'templates';
  app.innerHTML = shell(`
    <div class="section-head"><div><div class="eyebrow">БЫСТРЫЙ СТАРТ</div><h2>Шаблоны ремонта</h2></div></div>
    <div class="grid3">
      ${state.templates.map(template => `<article class="template"><h3>${escapeHtml(template.name)}</h3><p>${escapeHtml(template.issue)}</p><div class="offer-meta">${template.options.length} варианта · от ${money(Math.min(...template.options.map(option => option.price)))}</div><br><button class="btn primary full" data-use-template="${escapeHtml(template.id)}">Создать по шаблону</button></article>`).join('')}
    </div>
    <div class="panel" style="margin-top:14px"><h3>Почему шаблоны важны</h3><p class="muted">Они уменьшают расхождение цен и условий между сотрудниками. В production-версии шаблоны должны управляться владельцем и иметь историю изменений.</p></div>
  `, 'templates');
}

function renderSettings() {
  activeView = 'settings';
  const settings = state.settings;
  app.innerHTML = shell(`
    <div class="section-head"><div><div class="eyebrow">ПРОФИЛЬ СЕРВИСА</div><h2>Настройки</h2></div></div>
    <form id="settingsForm" class="panel">
      <div class="settings-grid">
        <div class="field"><label>Название сервиса</label><input name="serviceName" value="${escapeHtml(settings.serviceName)}" required></div>
        <div class="field"><label>Имя ответственного</label><input name="managerName" value="${escapeHtml(settings.managerName)}" placeholder="Например, Алексей"></div>
        <div class="field"><label>Телефон сервиса</label><input name="phone" value="${escapeHtml(settings.phone)}" inputmode="tel" placeholder="+7…"></div>
        <div class="field"><label>Адрес</label><input name="address" value="${escapeHtml(settings.address)}"></div>
        <div class="field"><label>Предложение действительно, дней</label><input name="defaultValidityDays" type="number" min="1" max="30" value="${escapeHtml(settings.defaultValidityDays)}"></div>
      </div>
      <div class="field"><label>Условия по умолчанию</label><textarea name="defaultTerms">${escapeHtml(settings.defaultTerms)}</textarea></div>
      <button class="btn primary" type="submit">Сохранить настройки</button>
    </form>
    <section class="grid2" style="margin-top:14px">
      <div class="panel"><h3>Резервная копия</h3><p class="muted">Сохраните предложения, настройки и историю в JSON-файл.</p><div class="actions"><button class="btn" data-action="export-backup">Скачать копию</button><button class="btn" data-action="import-backup">Восстановить</button></div></div>
      <div class="panel"><h3>Очистка пилота</h3><p class="muted">Удаляет данные только в этом браузере. Публичные файлы продукта не затрагиваются.</p><button class="btn danger" data-action="reset-data">Удалить локальные данные</button></div>
    </section>
  `, 'settings');
}

function startWizard(templateId = null) {
  const template = templateId ? state.templates.find(item => item.id === templateId) : null;
  wizard = {
    step: 1,
    customerLabel: '',
    device: template?.name.includes('iPhone') ? 'iPhone 13' : '',
    issue: template?.issue || '',
    notes: '',
    validityDays: state.settings.defaultValidityDays,
    terms: state.settings.defaultTerms,
    options: template ? JSON.parse(JSON.stringify(template.options)) : [
      { title: 'Эконом', price: 0, duration: '', warranty: '30 дней', detail: '', recommended: false },
      { title: 'Рекомендуемый', price: 0, duration: '', warranty: '90 дней', detail: '', recommended: true },
      { title: 'Премиум', price: 0, duration: '', warranty: '180 дней', detail: '', recommended: false }
    ]
  };
  renderWizard();
}

function renderWizard() {
  const dots = [1, 2, 3].map(step => `<span class="${wizard.step >= step ? 'on' : ''}"></span>`).join('');
  let body = '';
  if (wizard.step === 1) {
    body = `<div class="form2"><div class="field"><label>Метка клиента</label><input id="wCustomer" value="${escapeHtml(wizard.customerLabel)}" placeholder="Например, Алексей или заявка 24"></div><div class="field"><label>Устройство</label><input id="wDevice" value="${escapeHtml(wizard.device)}" placeholder="iPhone 13" required></div></div><div class="field"><label>Проблема или работа</label><input id="wIssue" value="${escapeHtml(wizard.issue)}" placeholder="Замена разбитого дисплея" required></div><div class="form2"><div class="field"><label>Срок действия, дней</label><input id="wValidity" type="number" min="1" max="30" value="${escapeHtml(wizard.validityDays)}"></div><div class="field"><label>Внутренняя заметка</label><input id="wNotes" value="${escapeHtml(wizard.notes)}" placeholder="Не добавляйте персональные данные"></div></div>`;
  } else if (wizard.step === 2) {
    body = `<p class="muted">Оставьте только реально доступные варианты. Один вариант можно отметить как рекомендуемый.</p>${wizard.options.map((option, index) => optionEditor(option, index)).join('')}<button class="btn" data-action="add-option">＋ Добавить вариант</button>`;
  } else {
    body = `<div class="notice">Проверьте цены, сроки и гарантию. После отправки клиенту изменение предложения создаст новую смысловую версию.</div><h2>${escapeHtml(wizard.device)}</h2><p class="muted">${escapeHtml(wizard.issue)} · метка ${escapeHtml(wizard.customerLabel || 'не указана')}</p>${wizard.options.map(option => optionPreview(option)).join('')}<div class="field"><label>Условия</label><textarea id="wTerms">${escapeHtml(wizard.terms)}</textarea></div>`;
  }
  const controls = wizard.step === 1
    ? `<button class="btn primary" data-action="wizard-next">Далее: варианты</button>`
    : wizard.step === 2
      ? `<button class="btn" data-action="wizard-back">Назад</button><button class="btn primary" data-action="wizard-next">Далее: проверка</button>`
      : `<button class="btn" data-action="wizard-back">Назад</button><button class="btn success" data-action="wizard-create">Создать предложение</button>`;
  app.innerHTML = shell(`<section class="panel"><div class="wizard-head"><div><div class="eyebrow">ШАГ ${wizard.step} ИЗ 3</div><h2>${['Ремонт и клиент','Варианты решения','Проверка перед созданием'][wizard.step - 1]}</h2></div><div class="wizard-progress">${dots}</div></div>${body}<div class="actions" style="margin-top:16px">${controls}<button class="btn ghost" data-action="wizard-cancel">Отмена</button></div></section>`, activeView);
}

function optionEditor(option, index) {
  return `<div class="option-editor ${option.recommended ? 'recommended' : ''}" data-option-index="${index}">${option.recommended ? '<span class="rec">Рекомендуем</span>' : ''}<div class="form2"><div class="field"><label>Название</label><input data-option-field="title" value="${escapeHtml(option.title)}"></div><div class="field"><label>Цена, ₽</label><input data-option-field="price" inputmode="numeric" value="${escapeHtml(option.price)}"></div><div class="field"><label>Срок</label><input data-option-field="duration" value="${escapeHtml(option.duration)}"></div><div class="field"><label>Гарантия</label><input data-option-field="warranty" value="${escapeHtml(option.warranty)}"></div></div><div class="field"><label>Что входит</label><textarea data-option-field="detail">${escapeHtml(option.detail)}</textarea></div><div class="actions"><button class="btn" data-recommend-option="${index}">${option.recommended ? '✓ Рекомендуемый' : 'Сделать рекомендуемым'}</button>${wizard.options.length > 1 ? `<button class="btn danger" data-remove-option="${index}">Удалить</button>` : ''}</div></div>`;
}

function optionPreview(option, selectable = false, selectedId = null) {
  const selected = selectedId && selectedId === option.id;
  return `<article class="option-card ${option.recommended ? 'recommended' : ''} ${selected ? 'recommended' : ''}" ${selectable ? `data-select-option="${escapeHtml(option.id)}" role="button" tabindex="0"` : ''}>${option.recommended ? '<span class="rec">Рекомендуем</span>' : ''}<div class="option-top"><div><h3>${escapeHtml(option.title)}</h3><div class="offer-meta">${escapeHtml(option.duration || 'Срок уточняется')} · гарантия ${escapeHtml(option.warranty || 'уточняется')}</div></div><div class="price">${money(option.price)}</div></div><p>${escapeHtml(option.detail || 'Описание будет уточнено сотрудником.')}</p>${selectable ? `<div class="chip">${selected ? '✓ Выбрано' : 'Нажмите, чтобы выбрать'}</div>` : ''}</article>`;
}

function captureWizardStep() {
  if (wizard.step === 1) {
    wizard.customerLabel = document.getElementById('wCustomer')?.value.trim() || '';
    wizard.device = document.getElementById('wDevice')?.value.trim() || '';
    wizard.issue = document.getElementById('wIssue')?.value.trim() || '';
    wizard.validityDays = Number(document.getElementById('wValidity')?.value || 3);
    wizard.notes = document.getElementById('wNotes')?.value.trim() || '';
    if (wizard.device.length < 2 || wizard.issue.length < 3) throw new Error('Укажите устройство и проблему');
  } else if (wizard.step === 2) {
    document.querySelectorAll('[data-option-index]').forEach(node => {
      const index = Number(node.dataset.optionIndex);
      node.querySelectorAll('[data-option-field]').forEach(input => {
        wizard.options[index][input.dataset.optionField] = input.dataset.optionField === 'price' ? input.value.replace(/\D/g, '') : input.value.trim();
      });
    });
    if (!wizard.options.every(option => option.title.trim().length >= 2)) throw new Error('У каждого варианта должно быть название');
  } else {
    wizard.terms = document.getElementById('wTerms')?.value.trim() || '';
  }
}

function createFromWizard() {
  captureWizardStep();
  const offer = createOffer(wizard, state.settings);
  saveState({ ...state, offers: [...state.offers, offer] });
  wizard = null;
  renderOfferDetail(offer.id);
  toast('Предложение создано');
}

function loadDemo() {
  const existing = state.offers.find(offer => offer.publicCode === 'DEMO2026');
  if (existing) return renderOfferDetail(existing.id);
  const template = state.templates[0];
  const demo = createOffer({
    customerLabel: 'Алексей · демо',
    device: 'iPhone 13',
    issue: template.issue,
    notes: 'Демонстрационные данные',
    validityDays: 3,
    options: template.options,
    terms: state.settings.defaultTerms
  }, state.settings);
  demo.publicCode = 'DEMO2026';
  saveState({ ...state, offers: [...state.offers, demo] });
  renderOfferDetail(demo.id);
  toast('Демо-предложение готово');
}

function renderOfferDetail(id) {
  refreshOffers();
  const offer = state.offers.find(item => item.id === id);
  if (!offer) return renderOffers();
  activeView = 'offers';
  const selected = offer.options.find(option => option.id === offer.decision?.selectedOptionId) || offer.decision?.selectedOptionSnapshot;
  const url = offerShareUrl(offer);
  const actionButtons = [];
  if (![OFFER_STATUSES.EXPIRED, OFFER_STATUSES.CONVERTED].includes(offer.status)) {
    actionButtons.push(`<button class="btn primary" data-action="share-offer" data-offer-id="${offer.id}">Поделиться ссылкой</button>`);
  }
  actionButtons.push(`<button class="btn" data-action="copy-offer-link" data-offer-id="${offer.id}">Копировать ссылку</button>`);
  actionButtons.push(`<button class="btn" data-action="preview-client" data-offer-id="${offer.id}">Открыть как клиент</button>`);
  actionButtons.push(`<button class="btn" data-action="print-offer">Печать / PDF</button>`);
  if (offer.status === OFFER_STATUSES.APPROVED) actionButtons.push(`<button class="btn success" data-action="convert-order" data-offer-id="${offer.id}">Создать черновик ремонта</button>`);
  app.innerHTML = shell(`
    <div class="section-head"><button class="btn ghost" data-nav="offers">‹ К списку</button><span class="status-badge ${offer.status}">${escapeHtml(STATUS_LABELS[offer.status])}</span></div>
    <section class="detail-grid">
      <div class="panel">
        <div class="eyebrow">ПРЕДЛОЖЕНИЕ ${escapeHtml(offer.publicCode)}</div>
        <h1>${escapeHtml(offer.device)}</h1><p class="muted">${escapeHtml(offer.issue)} · ${escapeHtml(offer.customerLabel || 'Без метки клиента')}</p>
        ${offer.options.map(option => optionPreview(option, false, selected?.id)).join('')}
        <div class="field"><label>Ссылка клиенту</label><div class="link-box">${escapeHtml(url)}</div></div>
        <div class="actions no-print">${actionButtons.join('')}</div>
        <div class="notice" style="margin-top:12px">Ссылка содержит условия предложения, но не должна содержать телефон, фамилию, адрес клиента или другие персональные данные.</div>
      </div>
      <aside>
        ${decisionPanel(offer, selected)}
        ${offer.orderDraft ? orderDraftPanel(offer.orderDraft) : ''}
        <div class="panel" style="margin-top:12px"><h3>История</h3>${[...(offer.events || [])].reverse().map(event => `<div class="event"><span class="dot"></span><div><strong>${escapeHtml(event.label || event.type)}</strong><br><small>${formatDate(event.at, true)}</small></div></div>`).join('')}</div>
      </aside>
    </section>
  `, 'offers');
}

function decisionPanel(offer, selected) {
  if (!offer.decision) {
    return `<div class="panel"><h3>Решение клиента</h3><p class="muted">Ответ ещё не импортирован. На другом телефоне клиент нажмёт «Поделиться решением» и отправит сервису ссылку-ответ.</p><div class="chip">Ждём решение</div></div>`;
  }
  const labels = { approved: 'Клиент согласовал ремонт', question: 'Клиент хочет уточнить', declined: 'Клиент отказался' };
  return `<div class="panel"><h3>${escapeHtml(labels[offer.decision.type] || 'Получен ответ')}</h3>${selected ? `<p><strong>${escapeHtml(selected.title)} · ${money(selected.price)}</strong></p>` : ''}<p class="muted">${escapeHtml(offer.decision.customerNote || 'Без комментария')}<br>${formatDate(offer.decision.createdAt, true)}</p><div class="code-box">Action Receipt: ${escapeHtml(offer.decision.receiptId)}</div></div>`;
}

function orderDraftPanel(orderDraft) {
  return `<div class="panel" style="margin-top:12px"><h3>Черновик ремонта</h3><p><strong>${escapeHtml(orderDraft.workTitle)}</strong><br>${money(orderDraft.agreedPrice)}</p><p class="muted">Локальный черновик создан, но ещё не синхронизирован с CRM.</p><div class="code-box">${escapeHtml(orderDraft.id)}</div></div>`;
}

function renderClient(publicOffer, isLocal = false) {
  activeView = 'client';
  clientSelection = publicOffer.options.find(option => option.recommended)?.id || publicOffer.options[0]?.id || null;
  const expired = new Date(publicOffer.expiresAt) < new Date();
  if (isLocal) {
    const local = state.offers.find(offer => offer.id === publicOffer.offerId);
    if (local) replaceOffer(markOfferViewedLocally(local), false);
  }
  app.innerHTML = `<div class="client-wrap">
    <div class="client-brand"><div class="orb"></div><strong>${escapeHtml(publicOffer.service.name)}</strong><div class="muted">Предложение на ремонт</div></div>
    <section class="panel client-card">
      <div class="eyebrow">ПРЕДЛОЖЕНИЕ ${escapeHtml(publicOffer.publicCode)}</div>
      <h1>${escapeHtml(publicOffer.device)}</h1>
      <p class="muted">${escapeHtml(publicOffer.issue)}${publicOffer.customerLabel ? `<br>Для: ${escapeHtml(publicOffer.customerLabel)}` : ''}<br>Действует до ${formatDate(publicOffer.expiresAt)}</p>
      ${expired ? '<div class="notice">Срок предложения истёк. Свяжитесь с сервисом для обновления цены и наличия.</div>' : ''}
      <div id="clientOptions">${publicOffer.options.map(option => optionPreview(option, !expired, clientSelection)).join('')}</div>
      <div class="field"><label>Комментарий или вопрос сервису</label><textarea id="clientNote" placeholder="Необязательно"></textarea></div>
      <label class="consent"><input id="clientConsent" type="checkbox" ${expired ? 'disabled' : ''}><span>Подтверждаю выбранный вариант, указанную стоимость и условия. Понимаю, что это пилотная фиксация решения, а не квалифицированная электронная подпись.</span></label>
      <div class="actions no-print">
        <button class="btn success full" data-client-decision="approved" ${expired ? 'disabled' : ''}>Согласовать выбранный вариант</button>
        <button class="btn" style="flex:1" data-client-decision="question">Задать вопрос</button>
        <button class="btn danger" style="flex:1" data-client-decision="declined">Отказаться</button>
      </div>
      <hr style="border:0;border-top:1px solid var(--line);margin:18px 0">
      <p class="muted">${escapeHtml(publicOffer.terms || '')}</p>
      ${publicOffer.service.phone ? `<p><strong>Телефон:</strong> ${escapeHtml(publicOffer.service.phone)}</p>` : ''}
      ${publicOffer.service.address ? `<p><strong>Адрес:</strong> ${escapeHtml(publicOffer.service.address)}</p>` : ''}
    </section>
    <div class="footer-note">AION Repair Offer · данные предложения переданы внутри ссылки · не пересылайте её посторонним</div>
  </div>`;
  app.dataset.publicOffer = encodeEnvelope('offer', publicOffer);
  app.dataset.localOffer = isLocal ? '1' : '0';
}

function handleClientDecision(type) {
  const publicOffer = decodeEnvelope(app.dataset.publicOffer, 'offer');
  const note = document.getElementById('clientNote')?.value.trim() || '';
  const consent = document.getElementById('clientConsent')?.checked || false;
  try {
    const response = createDecision(publicOffer, { type, selectedOptionId: clientSelection, customerNote: note, consent });
    const isLocal = app.dataset.localOffer === '1';
    if (isLocal) {
      const offer = state.offers.find(item => item.id === response.offerId);
      if (offer) {
        replaceOffer(applyDecision(offer, response), false);
        return renderClientReceipt(publicOffer, response, true);
      }
    }
    renderClientReceipt(publicOffer, response, false);
  } catch (error) {
    toast(error.message);
  }
}

function renderClientReceipt(publicOffer, response, appliedLocally) {
  const selected = publicOffer.options.find(option => option.id === response.selectedOptionId);
  const responseUrl = responseShareUrl(response);
  const heading = response.type === 'approved' ? 'Ремонт согласован' : response.type === 'question' ? 'Вопрос подготовлен' : 'Отказ зафиксирован';
  app.innerHTML = `<div class="client-wrap"><div class="client-brand"><div class="orb"></div><strong>${escapeHtml(publicOffer.service.name)}</strong></div><section class="panel client-card receipt"><div class="receipt-mark">${response.type === 'approved' ? '✓' : response.type === 'question' ? '?' : '×'}</div><h1>${escapeHtml(heading)}</h1>${selected ? `<p><strong>${escapeHtml(selected.title)} · ${money(selected.price)}</strong><br>${escapeHtml(selected.duration)} · гарантия ${escapeHtml(selected.warranty)}</p>` : ''}<div class="code-box">Action Receipt<br>${escapeHtml(response.receiptId)}<br>${formatDate(response.createdAt, true)}</div><br>${appliedLocally ? `<div class="notice success-note">Решение уже появилось в панели сервиса на этом устройстве.</div><div class="actions" style="margin-top:12px"><button class="btn primary full" data-action="go-offer" data-offer-id="${escapeHtml(response.offerId)}">Вернуться в панель сервиса</button></div>` : `<div class="notice">Последний шаг: отправьте сервису ссылку-ответ. Без общей базы решение не может появиться у сервиса автоматически.</div><div class="actions" style="margin-top:12px"><button class="btn primary full" data-action="share-response" data-response-url="${escapeHtml(responseUrl)}">Поделиться решением</button><button class="btn full" data-action="copy-response" data-response-url="${escapeHtml(responseUrl)}">Копировать ссылку-ответ</button></div>`}</section></div>`;
}

function importResponse(encoded) {
  try {
    const response = decodeEnvelope(encoded, 'response');
    if (state.importedResponseIds.includes(response.responseId)) {
      history.replaceState(null, '', currentUrlWithoutHash());
      const existing = state.offers.find(offer => offer.id === response.offerId);
      if (existing) return renderOfferDetail(existing.id);
      throw new Error('Ответ уже импортирован, но предложение не найдено');
    }
    const offer = state.offers.find(item => item.id === response.offerId);
    if (!offer) throw new Error('На этом устройстве нет исходного предложения');
    const updated = applyDecision(offer, response);
    state.importedResponseIds.push(response.responseId);
    replaceOffer(updated, false);
    history.replaceState(null, '', currentUrlWithoutHash());
    renderOfferDetail(updated.id);
    toast('Решение клиента импортировано');
  } catch (error) {
    app.innerHTML = `<div class="client-wrap"><section class="panel client-card receipt"><div class="receipt-mark">!</div><h1>Не удалось импортировать</h1><p class="muted">${escapeHtml(error.message)}</p><button class="btn full" data-action="go-home">Вернуться в продукт</button></section></div>`;
  }
}

function replaceOffer(updated, rerender = true) {
  const offers = state.offers.map(offer => offer.id === updated.id ? updated : offer);
  saveState({ ...state, offers });
  if (rerender) renderOfferDetail(updated.id);
}

async function shareText(title, text, url) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return true;
    } catch (error) {
      if (error.name === 'AbortError') return false;
    }
  }
  await copyText(url);
  toast('Ссылка скопирована');
  return true;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.append(area);
  area.select();
  document.execCommand('copy');
  area.remove();
}

function markAndShareOffer(id) {
  const offer = state.offers.find(item => item.id === id);
  if (!offer) return;
  const publicOffer = buildPublicOffer(offer, state.settings);
  const updated = { ...markOfferSent(offer), lastPublicChecksum: publicOffer.offerChecksum };
  replaceOffer(updated, false);
  const url = offerShareUrl(updated);
  shareText(`Предложение на ремонт ${updated.device}`, `${state.settings.serviceName}: ${updated.issue}`, url).then(shared => {
    if (shared) renderOfferDetail(updated.id);
  });
}

function copyOfferLink(id) {
  const offer = state.offers.find(item => item.id === id);
  if (!offer) return;
  const publicOffer = buildPublicOffer(offer, state.settings);
  const updated = { ...markOfferSent(offer), lastPublicChecksum: publicOffer.offerChecksum };
  replaceOffer(updated, false);
  copyText(offerShareUrl(updated)).then(() => { toast('Ссылка клиенту скопирована'); renderOfferDetail(updated.id); });
}

function previewClient(id) {
  const offer = state.offers.find(item => item.id === id);
  if (!offer) return;
  renderClient(buildPublicOffer(offer, state.settings), true);
}

function convertOrder(id) {
  const offer = state.offers.find(item => item.id === id);
  if (!offer) return;
  try {
    replaceOffer(convertToOrderDraft(offer));
    toast('Черновик ремонта создан');
  } catch (error) {
    toast(error.message);
  }
}

function saveSettings(form) {
  const data = new FormData(form);
  const settings = {
    ...state.settings,
    serviceName: String(data.get('serviceName') || '').trim().slice(0, 120),
    managerName: String(data.get('managerName') || '').trim().slice(0, 120),
    phone: String(data.get('phone') || '').trim().slice(0, 80),
    address: String(data.get('address') || '').trim().slice(0, 180),
    defaultValidityDays: Math.min(30, Math.max(1, Number(data.get('defaultValidityDays') || 3))),
    defaultTerms: String(data.get('defaultTerms') || '').trim().slice(0, 2000)
  };
  if (!settings.serviceName) return toast('Укажите название сервиса');
  saveState({ ...state, settings });
  toast('Настройки сохранены');
  renderSettings();
}

function exportBackup() {
  const backup = createBackup(state);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `aion-repair-offer-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast('Резервная копия создана');
}

backupInput.addEventListener('change', async () => {
  const file = backupInput.files?.[0];
  if (!file) return;
  try {
    const restored = restoreBackup(JSON.parse(await file.text()));
    saveState(restored);
    renderSettings();
    toast('Резервная копия восстановлена');
  } catch (error) {
    toast(error.message);
  } finally {
    backupInput.value = '';
  }
});

function resetData() {
  if (!confirm('Удалить все локальные предложения, настройки и историю этого пилота?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = createInitialState();
  saveState();
  renderHome();
  toast('Локальные данные удалены');
}

function route() {
  const hash = location.hash;
  if (hash.startsWith('#offer=')) {
    try {
      const publicOffer = decodeEnvelope(hash.slice(7), 'offer');
      const isLocal = state.offers.some(offer => offer.id === publicOffer.offerId);
      renderClient(publicOffer, isLocal);
    } catch (error) {
      app.innerHTML = `<div class="client-wrap"><section class="panel client-card receipt"><div class="receipt-mark">!</div><h1>Ссылка повреждена</h1><p class="muted">${escapeHtml(error.message)}</p></section></div>`;
    }
    return;
  }
  if (hash.startsWith('#response=')) return importResponse(hash.slice(10));
  const appView = new URLSearchParams(hash.replace(/^#/, '')).get('app');
  if (appView === 'offers') return renderOffers();
  if (appView === 'templates') return renderTemplates();
  if (appView === 'settings') return renderSettings();
  renderHome();
}

function navigate(view) {
  history.replaceState(null, '', `${currentUrlWithoutHash()}#app=${view}`);
  if (view === 'offers') renderOffers();
  else if (view === 'templates') renderTemplates();
  else if (view === 'settings') renderSettings();
  else renderHome();
}

app.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]');
  if (nav) return navigate(nav.dataset.nav);
  const open = event.target.closest('[data-open-offer]');
  if (open) return renderOfferDetail(open.dataset.openOffer);
  const template = event.target.closest('[data-use-template]');
  if (template) return startWizard(template.dataset.useTemplate);
  const select = event.target.closest('[data-select-option]');
  if (select) {
    clientSelection = select.dataset.selectOption;
    const publicOffer = decodeEnvelope(app.dataset.publicOffer, 'offer');
    document.getElementById('clientOptions').innerHTML = publicOffer.options.map(option => optionPreview(option, true, clientSelection)).join('');
    return;
  }
  const decision = event.target.closest('[data-client-decision]');
  if (decision) return handleClientDecision(decision.dataset.clientDecision);
  const recommend = event.target.closest('[data-recommend-option]');
  if (recommend) {
    captureWizardStep();
    wizard.options.forEach((option, index) => option.recommended = index === Number(recommend.dataset.recommendOption));
    return renderWizard();
  }
  const remove = event.target.closest('[data-remove-option]');
  if (remove) {
    captureWizardStep();
    wizard.options.splice(Number(remove.dataset.removeOption), 1);
    if (!wizard.options.some(option => option.recommended)) wizard.options[0].recommended = true;
    return renderWizard();
  }
  const actionNode = event.target.closest('[data-action]');
  if (!actionNode) return;
  const action = actionNode.dataset.action;
  if (action === 'new-offer') return startWizard();
  if (action === 'load-demo') return loadDemo();
  if (action === 'search-offers') return renderOffers(document.getElementById('offerSearch')?.value || '');
  if (action === 'wizard-cancel') return navigate(activeView === 'templates' ? 'templates' : 'offers');
  if (action === 'wizard-next') {
    try { captureWizardStep(); wizard.step += 1; renderWizard(); } catch (error) { toast(error.message); }
    return;
  }
  if (action === 'wizard-back') { captureWizardStep(); wizard.step -= 1; return renderWizard(); }
  if (action === 'wizard-create') { try { createFromWizard(); } catch (error) { toast(error.message); } return; }
  if (action === 'add-option') {
    captureWizardStep();
    if (wizard.options.length >= 5) return toast('Не больше пяти вариантов');
    wizard.options.push({ title: `Вариант ${wizard.options.length + 1}`, price: 0, duration: '', warranty: '', detail: '', recommended: false });
    return renderWizard();
  }
  if (action === 'share-offer') return markAndShareOffer(actionNode.dataset.offerId);
  if (action === 'copy-offer-link') return copyOfferLink(actionNode.dataset.offerId);
  if (action === 'preview-client') return previewClient(actionNode.dataset.offerId);
  if (action === 'print-offer') return window.print();
  if (action === 'convert-order') return convertOrder(actionNode.dataset.offerId);
  if (action === 'share-response') return shareText('Решение по ремонту', 'Откройте ссылку в AION Repair Offer, чтобы импортировать решение клиента.', actionNode.dataset.responseUrl);
  if (action === 'copy-response') return copyText(actionNode.dataset.responseUrl).then(() => toast('Ссылка-ответ скопирована'));
  if (action === 'export-backup') return exportBackup();
  if (action === 'import-backup') return backupInput.click();
  if (action === 'reset-data') return resetData();
  if (action === 'go-offer') { history.replaceState(null, '', currentUrlWithoutHash()); return renderOfferDetail(actionNode.dataset.offerId); }
  if (action === 'go-home') { history.replaceState(null, '', currentUrlWithoutHash()); return renderHome(); }
});

app.addEventListener('submit', event => {
  event.preventDefault();
  if (event.target.id === 'settingsForm') saveSettings(event.target);
});

window.addEventListener('hashchange', route);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./repair-offer-sw-v0-2.js').catch(() => {});
}

route();
