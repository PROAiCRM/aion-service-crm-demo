export const PRODUCT_VERSION = '0.2.0-pilot';
export const STORAGE_KEY = 'aion.repairOffer.pilot.v0.2';
export const BACKUP_FORMAT = 'aion-repair-offer-backup-v1';

export const OFFER_STATUSES = Object.freeze({
  DRAFT: 'draft',
  SENT: 'sent',
  VIEWED_LOCAL: 'viewed_local',
  APPROVED: 'approved',
  QUESTION: 'question',
  DECLINED: 'declined',
  EXPIRED: 'expired',
  CONVERTED: 'converted'
});

export const STATUS_LABELS = Object.freeze({
  draft: 'Черновик',
  sent: 'Отправлено',
  viewed_local: 'Открыто в демо',
  approved: 'Согласовано',
  question: 'Есть вопрос',
  declined: 'Отказ',
  expired: 'Истекло',
  converted: 'Создан черновик ремонта'
});

const DEFAULT_TEMPLATES = [
  {
    id: 'tpl-display-iphone',
    name: 'Замена дисплея iPhone',
    issue: 'Замена разбитого дисплея',
    options: [
      { title: 'Эконом', price: 8900, duration: '2–3 часа', warranty: '30 дней', detail: 'Совместимый дисплей. Основные функции проверяются после установки.' },
      { title: 'Рекомендуемый', price: 12900, duration: '1–2 часа', warranty: '90 дней', detail: 'Проверенная OLED-деталь. Лучший баланс цены, качества и гарантии.', recommended: true },
      { title: 'Премиум', price: 18900, duration: 'до 2 часов', warranty: '180 дней', detail: 'Максимально близкое к оригиналу качество и расширенная гарантия.' }
    ]
  },
  {
    id: 'tpl-battery-iphone',
    name: 'Замена аккумулятора iPhone',
    issue: 'Аккумулятор быстро разряжается',
    options: [
      { title: 'Стандарт', price: 3900, duration: '60–90 минут', warranty: '90 дней', detail: 'Новая совместимая батарея и базовая проверка устройства.' },
      { title: 'Рекомендуемый', price: 5400, duration: '60–90 минут', warranty: '180 дней', detail: 'Проверенная батарея повышенного класса и расширенная диагностика.', recommended: true },
      { title: 'Премиум', price: 6900, duration: 'до 2 часов', warranty: '365 дней', detail: 'Премиальная батарея, диагностика питания и максимальная гарантия.' }
    ]
  },
  {
    id: 'tpl-diagnostics',
    name: 'Диагностика после попадания жидкости',
    issue: 'Диагностика после попадания жидкости',
    options: [
      { title: 'Диагностика', price: 1500, duration: '1 рабочий день', warranty: 'без гарантии на исход', detail: 'Разбор, первичный осмотр и заключение по состоянию устройства.' },
      { title: 'Диагностика + очистка', price: 3500, duration: '1–2 рабочих дня', warranty: '30 дней на выполненные работы', detail: 'Разбор, очистка следов жидкости и проверка основных узлов.', recommended: true },
      { title: 'Комплексное восстановление', price: 6900, duration: '2–4 рабочих дня', warranty: '90 дней на выполненные работы', detail: 'Глубокая очистка, локальный ремонт платы и контрольный прогон.' }
    ]
  }
];

function nowIso() {
  return new Date().toISOString();
}

function randomId(prefix) {
  const uuid = globalThis.crypto?.randomUUID?.();
  if (uuid) return `${prefix}-${uuid}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function cleanText(value, max = 500) {
  return String(value ?? '').trim().slice(0, max);
}

function numericPrice(value) {
  const parsed = Number(String(value ?? '').replace(/[^0-9.,-]/g, '').replace(',', '.'));
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed) : 0;
}

function utf8ToBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToUtf8(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function checksum(input) {
  const text = typeof input === 'string' ? input : JSON.stringify(input);
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

export function createInitialState() {
  return {
    schemaVersion: 2,
    productVersion: PRODUCT_VERSION,
    settings: {
      serviceName: 'PRO.Apple Service',
      phone: '',
      address: '',
      managerName: '',
      defaultValidityDays: 3,
      defaultTerms: 'Стоимость действует до указанной даты. Итог подтверждается после диагностики и до начала дополнительных работ.'
    },
    offers: [],
    templates: structuredCloneSafe(DEFAULT_TEMPLATES),
    importedResponseIds: [],
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function structuredCloneSafe(value) {
  return globalThis.structuredClone ? globalThis.structuredClone(value) : JSON.parse(JSON.stringify(value));
}

export function normalizeState(candidate) {
  const base = createInitialState();
  if (!candidate || typeof candidate !== 'object') return base;
  return {
    ...base,
    ...candidate,
    schemaVersion: 2,
    settings: { ...base.settings, ...(candidate.settings || {}) },
    offers: Array.isArray(candidate.offers) ? candidate.offers : [],
    templates: Array.isArray(candidate.templates) && candidate.templates.length ? candidate.templates : base.templates,
    importedResponseIds: Array.isArray(candidate.importedResponseIds) ? candidate.importedResponseIds : [],
    updatedAt: nowIso()
  };
}

export function createOffer(input, settings = {}) {
  const device = cleanText(input.device, 160);
  const issue = cleanText(input.issue, 500);
  assert(device.length >= 2, 'Укажите устройство');
  assert(issue.length >= 3, 'Опишите проблему или работу');
  assert(Array.isArray(input.options) && input.options.length >= 1 && input.options.length <= 5, 'Добавьте от 1 до 5 вариантов');

  const options = input.options.map((option, index) => {
    const title = cleanText(option.title, 80);
    assert(title.length >= 2, `Укажите название варианта ${index + 1}`);
    return {
      id: randomId('OPT'),
      title,
      price: numericPrice(option.price),
      duration: cleanText(option.duration, 120),
      warranty: cleanText(option.warranty, 120),
      detail: cleanText(option.detail, 700),
      recommended: Boolean(option.recommended)
    };
  });

  if (!options.some(option => option.recommended) && options.length > 1) options[1].recommended = true;
  if (options.filter(option => option.recommended).length > 1) {
    let found = false;
    options.forEach(option => {
      if (option.recommended && !found) found = true;
      else option.recommended = false;
    });
  }

  const createdAt = nowIso();
  const validityDays = Math.min(30, Math.max(1, Number(input.validityDays || settings.defaultValidityDays || 3)));
  const expiresAt = input.expiresAt
    ? new Date(input.expiresAt).toISOString()
    : new Date(Date.now() + validityDays * 86400000).toISOString();

  return {
    id: randomId('RO'),
    publicCode: randomId('AION').split('-').slice(-1)[0].toUpperCase(),
    customerLabel: cleanText(input.customerLabel, 100),
    device,
    issue,
    notes: cleanText(input.notes, 1000),
    terms: cleanText(input.terms || settings.defaultTerms, 2000),
    options,
    status: OFFER_STATUSES.DRAFT,
    createdAt,
    updatedAt: createdAt,
    expiresAt,
    sentAt: null,
    decision: null,
    orderDraft: null,
    events: [{ type: 'created', at: createdAt, label: 'Предложение создано' }]
  };
}

export function refreshExpiry(offer, now = new Date()) {
  if (![OFFER_STATUSES.APPROVED, OFFER_STATUSES.DECLINED, OFFER_STATUSES.CONVERTED].includes(offer.status) && new Date(offer.expiresAt) < now) {
    return appendEvent({ ...offer, status: OFFER_STATUSES.EXPIRED }, 'expired', 'Срок предложения истёк');
  }
  return offer;
}

export function appendEvent(offer, type, label, meta = {}) {
  const at = nowIso();
  return {
    ...offer,
    updatedAt: at,
    events: [...(offer.events || []), { type, label, at, ...meta }]
  };
}

export function markOfferSent(offer) {
  if (offer.status === OFFER_STATUSES.DRAFT || offer.status === OFFER_STATUSES.VIEWED_LOCAL) {
    return appendEvent({ ...offer, status: OFFER_STATUSES.SENT, sentAt: nowIso() }, 'sent', 'Ссылка подготовлена к отправке');
  }
  return offer;
}

export function markOfferViewedLocally(offer) {
  if ([OFFER_STATUSES.DRAFT, OFFER_STATUSES.SENT].includes(offer.status)) {
    return appendEvent({ ...offer, status: OFFER_STATUSES.VIEWED_LOCAL }, 'viewed_local', 'Открыто в клиентском режиме на этом устройстве');
  }
  return offer;
}

export function buildPublicOffer(offer, settings = {}) {
  const publicOffer = {
    version: 1,
    offerId: offer.id,
    publicCode: offer.publicCode,
    service: {
      name: cleanText(settings.serviceName || 'Сервисный центр', 120),
      phone: cleanText(settings.phone, 80),
      address: cleanText(settings.address, 180)
    },
    customerLabel: cleanText(offer.customerLabel, 100),
    device: offer.device,
    issue: offer.issue,
    notes: offer.notes,
    terms: offer.terms,
    options: offer.options.map(({ id, title, price, duration, warranty, detail, recommended }) => ({ id, title, price, duration, warranty, detail, recommended })),
    createdAt: offer.createdAt,
    expiresAt: offer.expiresAt
  };
  return { ...publicOffer, offerChecksum: checksum(publicOffer) };
}

export function createDecision(publicOffer, input) {
  assert(publicOffer && publicOffer.offerId, 'Предложение повреждено');
  const decisionType = input.type;
  assert(['approved', 'question', 'declined'].includes(decisionType), 'Некорректное решение');

  let selectedOption = null;
  if (decisionType === 'approved') {
    selectedOption = publicOffer.options.find(option => option.id === input.selectedOptionId);
    assert(selectedOption, 'Выберите вариант ремонта');
    assert(input.consent === true, 'Подтвердите ознакомление с условиями');
  }

  const decision = {
    version: 1,
    responseId: randomId('RESP'),
    receiptId: randomId('AR'),
    offerId: publicOffer.offerId,
    offerChecksum: publicOffer.offerChecksum,
    type: decisionType,
    selectedOptionId: selectedOption?.id || null,
    selectedOptionSnapshot: selectedOption ? structuredCloneSafe(selectedOption) : null,
    customerNote: cleanText(input.customerNote, 1000),
    consent: decisionType === 'approved' ? true : false,
    createdAt: nowIso()
  };
  return { ...decision, responseChecksum: checksum(decision) };
}

export function applyDecision(offer, response) {
  assert(offer.id === response.offerId, 'Ответ относится к другому предложению');
  if (offer.lastPublicChecksum) assert(offer.lastPublicChecksum === response.offerChecksum, 'Ответ относится к другой версии предложения');
  assert(!offer.events?.some(event => event.responseId === response.responseId), 'Этот ответ уже применён');

  const mappedStatus = {
    approved: OFFER_STATUSES.APPROVED,
    question: OFFER_STATUSES.QUESTION,
    declined: OFFER_STATUSES.DECLINED
  }[response.type];
  assert(mappedStatus, 'Некорректный тип ответа');

  const selectedOption = response.selectedOptionId
    ? offer.options.find(option => option.id === response.selectedOptionId)
    : null;
  if (response.type === 'approved') assert(selectedOption, 'Выбранный вариант отсутствует в текущей версии предложения');

  const next = {
    ...offer,
    status: mappedStatus,
    decision: {
      responseId: response.responseId,
      receiptId: response.receiptId,
      type: response.type,
      selectedOptionId: selectedOption?.id || null,
      selectedOptionSnapshot: response.selectedOptionSnapshot || selectedOption,
      customerNote: cleanText(response.customerNote, 1000),
      consent: Boolean(response.consent),
      createdAt: response.createdAt,
      importedAt: nowIso()
    }
  };
  return appendEvent(next, `decision_${response.type}`, decisionLabel(response.type), { responseId: response.responseId, receiptId: response.receiptId });
}

function decisionLabel(type) {
  return {
    approved: 'Клиент согласовал вариант',
    question: 'Клиент задал вопрос',
    declined: 'Клиент отказался'
  }[type] || 'Получен ответ клиента';
}

export function convertToOrderDraft(offer) {
  assert(offer.status === OFFER_STATUSES.APPROVED, 'Черновик ремонта создаётся только после согласования');
  const selected = offer.options.find(option => option.id === offer.decision?.selectedOptionId) || offer.decision?.selectedOptionSnapshot;
  assert(selected, 'Не найден согласованный вариант');
  const orderDraft = {
    id: randomId('ORDER-DRAFT'),
    offerId: offer.id,
    device: offer.device,
    issue: offer.issue,
    workTitle: selected.title,
    agreedPrice: selected.price,
    warranty: selected.warranty,
    duration: selected.duration,
    createdAt: nowIso(),
    status: 'local_draft_not_synced'
  };
  return appendEvent({ ...offer, status: OFFER_STATUSES.CONVERTED, orderDraft }, 'converted', 'Создан локальный черновик ремонта', { orderDraftId: orderDraft.id });
}

export function encodeEnvelope(kind, payload) {
  const body = { kind, version: 1, payload };
  const envelope = { ...body, checksum: checksum(body) };
  return utf8ToBase64Url(JSON.stringify(envelope));
}

export function decodeEnvelope(encoded, expectedKind) {
  assert(typeof encoded === 'string' && encoded.length > 10, 'Ссылка пуста или повреждена');
  const envelope = JSON.parse(base64UrlToUtf8(encoded));
  assert(envelope.kind === expectedKind, 'Неверный тип ссылки');
  const { checksum: receivedChecksum, ...body } = envelope;
  assert(checksum(body) === receivedChecksum, 'Контрольная сумма не совпала');
  return envelope.payload;
}

export function createBackup(state) {
  const payload = {
    format: BACKUP_FORMAT,
    productVersion: PRODUCT_VERSION,
    exportedAt: nowIso(),
    state: normalizeState(state)
  };
  return { ...payload, checksum: checksum(payload) };
}

export function restoreBackup(candidate) {
  assert(candidate?.format === BACKUP_FORMAT, 'Это не резервная копия AION Repair Offer');
  const { checksum: receivedChecksum, ...payload } = candidate;
  assert(checksum(payload) === receivedChecksum, 'Резервная копия повреждена');
  return normalizeState(payload.state);
}

export function calculateMetrics(offers) {
  const refreshed = offers.map(offer => refreshExpiry(offer));
  const approved = refreshed.filter(offer => [OFFER_STATUSES.APPROVED, OFFER_STATUSES.CONVERTED].includes(offer.status));
  const decided = refreshed.filter(offer => [OFFER_STATUSES.APPROVED, OFFER_STATUSES.CONVERTED, OFFER_STATUSES.DECLINED].includes(offer.status));
  const potentialRevenue = refreshed
    .filter(offer => ![OFFER_STATUSES.DECLINED, OFFER_STATUSES.EXPIRED].includes(offer.status))
    .reduce((sum, offer) => sum + Math.max(0, ...offer.options.map(option => numericPrice(option.price))), 0);
  const agreedRevenue = approved.reduce((sum, offer) => {
    const selected = offer.options.find(option => option.id === offer.decision?.selectedOptionId) || offer.decision?.selectedOptionSnapshot;
    return sum + numericPrice(selected?.price);
  }, 0);
  return {
    total: refreshed.length,
    approved: approved.length,
    waiting: refreshed.filter(offer => [OFFER_STATUSES.SENT, OFFER_STATUSES.VIEWED_LOCAL, OFFER_STATUSES.QUESTION].includes(offer.status)).length,
    potentialRevenue,
    agreedRevenue,
    conversion: decided.length ? Math.round((approved.length / decided.length) * 100) : 0
  };
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[character]);
}

export function money(value) {
  return `${new Intl.NumberFormat('ru-RU').format(numericPrice(value))} ₽`;
}
