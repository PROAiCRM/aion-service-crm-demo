screens.orders=()=>`${searchBox('Поиск по номеру, клиенту, устройству','orderSearch')}<div id="orderList">${
 orders.map(x=>row('i-clipboard',`${x[0]} · ${x[1]}`,`${x[2]} · ${x[3]}`,'order',x[4])).join('')}</div>`;

screens.order=()=>`
${section('Order Context',info('Клиент','Иванов Иван')+info('Устройство','iPhone 13')+info('SN','ABCD1234EFGH')+info('Статус','В работе')+info('Сумма','12 500 ₽','money')+info('Баланс клиента','−2 000 ₽ (долг)','money')+info('Следующее действие','Завершить ремонт'))}
${btn('Завершить ремонт → Приёмка','', 'intake','primary')}
<div class="sectionTitle">Быстрые действия</div>
<div class="action4">
<button class="actionTiny" data-act="call">${ico('i-call')}Позвонить</button>
<button class="actionTiny" data-act="message">${ico('i-message')}Написать</button>
<button class="actionTiny" data-go="documents">${ico('i-doc')}Документы</button>
<button class="actionTiny" data-act="order-new">${ico('i-plus')}Новый ремонт</button>
</div>`;

screens.intake=()=>`
${hero('Приёмка','Заказ №000125')}
${section('Внешний вид',`<button class="btn" data-go="capture">${ico('i-camera','sm')} Добавить фото</button>`)}
<textarea class="textarea" placeholder="Дефекты"></textarea>
<input class="input" placeholder="Комплект">
<textarea class="textarea" placeholder="Комментарий"></textarea>
${btn('Принять в ремонт','accept-intake','','primary')}`;

screens.work=()=>`
<textarea class="textarea" placeholder="Диагностика">Дисплей не работает, требуется замена.</textarea>
<textarea class="textarea" placeholder="Работа">Замена дисплейного модуля.</textarea>
<textarea class="textarea" placeholder="Комментарий"></textarea>
${btn('Сохранить','work-save','','primary')}`;

screens.order_part=()=>`
<input class="input" value="Дисплей iPhone 13" placeholder="Необходимая деталь">
<input class="input" value="FixParts" placeholder="Поставщик">
<input class="input" value="3 050 ₽" placeholder="Цена">
<input class="input" value="1–2 дня" placeholder="Срок">
${btn('Заказать','order-part','','primary')}
${btn('Выбрать другого поставщика','', 'suppliers')}`;

screens.ready_qc=()=>`${hero('✓ Ремонт завершён','Заказ №000125')}<textarea class="textarea" placeholder="Комментарий">Работы выполнены, устройство готово к проверке.</textarea>${btn('Передать на QC','to-qc','','primary')}`;

screens.qc=()=>`
${section('Чек-лист QC',[
 'Функции устройства','Дисплей / тачскрин','Связь / сеть','Камера / микрофон','Звук / динамики','Зарядка / аккумулятор','Внешний вид','Комплектность'
].map((x,i)=>`<div class="checkLine" data-act="qc-check:${i}"><span class="checkbox ${state.checks[i]?'on':''}">${state.checks[i]?ico('i-check','sm'):''}</span><span>${x}</span></div>`).join(''))}
<textarea class="textarea" placeholder="Комментарий"></textarea>
<div class="btnRow">${btn('QC пройден','qc-pass','','success')}${btn('QC не пройден','qc-fail','','danger')}</div>`;

screens.payment=()=>`
${section('Оплата',info('Итоговая сумма','12 500 ₽','money')+info('Баланс клиента','−2 000 ₽ (долг)','money')+info('К оплате','14 500 ₽','money'))}
<select class="select" id="payMethod"><option value="">Способ оплаты</option><option>Карта</option><option>Наличные</option><option>СБП</option></select>
<div class="note">Истина оплаты берётся из кассы / финансов. Ручная корректировка не используется для подтверждения оплаты.</div>
${btn('Принять оплату','pay','','primary')}`;

screens.issue=()=>{
 const ok=state.qcPassed&&(state.paymentOk||state.debtAllowed);
 return `${section('Условия для выдачи',
 `<div class="chips"><span class="chip ${state.qcPassed?'ok':'bad'}">${state.qcPassed?'✓':'×'} QC пройден</span><span class="chip ${state.paymentOk?'ok':'warn'}">${state.paymentOk?'✓ Оплата OK':'Оплата не подтверждена'}</span>${state.debtAllowed?'<span class="chip warn">Разрешён долг</span>':''}</div>`)}
${btn('Выдать клиенту',ok?'issue-client':'issue-blocked','',ok?'primary':'')}
${!state.paymentOk?btn(state.debtAllowed?'Отменить разрешение долга':'Разрешить долг (исключение)','toggle-debt','',''):''}
${btn('Документы','', 'documents')}`;
};

screens.documents=()=>`
${row('i-doc','Квитанция','Заказ №000125','receipt')}
${row('i-doc','Акт выполненных работ','Заказ №000125','act')}
${row('i-shield','Гарантийный талон','До 12.05.2027','warranty_doc')}
${row('i-qr','QR-статус','Открыть статус','qr_status')}
${row('i-history','История ремонта','Хронология заказа','repair_history')}`;

screens.receipt=()=>`${doc('Квитанция №000125',`<b>Иванов Иван · iPhone 13</b><div class="line"></div><p>Работы: замена дисплея</p><p>Итого: <b>12 500 ₽</b></p><div class="line"></div><small>Демонстрационный документ прототипа</small>`)}${btn('+ Новый ремонт','new-client-repair','','primary')}`;
screens.act=()=>`${doc('Акт выполненных работ',`<b>Заказ №000125</b><div class="line"></div><p>Диагностика выполнена.</p><p>Дисплейный модуль заменён.</p><p>QC: пройден.</p><div class="line"></div><small>Демонстрационный документ прототипа</small>`)}${btn('К документам','', 'documents')}`;
screens.warranty_doc=()=>`${doc('Гарантийный талон',`<b>iPhone 13</b><div class="line"></div><p>Гарантия до 12.05.2027</p><p>Связанный заказ: №000125</p><div class="line"></div><small>Демонстрационный документ прототипа</small>`)}${btn('+ Новый ремонт','new-device-repair','','primary')}`;
screens.qr_status=()=>`${hero('QR-статус','Заказ №000125')}<div class="cameraBox" style="height:270px"><div style="font-size:80px;letter-spacing:-12px">▦</div></div>${btn('Открыть заказ','', 'order','primary')}`;
screens.repair_history=()=>`${hero('История ремонта','Заказ №000125')}${section('Хронология',`<div class="listLine"><b>09:10</b><span class="grow">Приёмка</span></div><div class="listLine"><b>10:25</b><span class="grow">Диагностика</span></div><div class="listLine"><b>12:40</b><span class="grow">Работа завершена</span></div><div class="listLine"><b>13:05</b><span class="grow">QC пройден</span></div>`)}${btn('Открыть заказ','', 'order')}`;

screens.finance=()=>`
${hero('Финансы / касса','Авторитетный источник сумм и подтверждённых оплат.')}
<div class="metricGrid"><div class="metric"><b>14 500 ₽</b><span>К оплате по №000125</span></div><div class="metric"><b>${state.paymentOk?'OK':'—'}</b><span>Подтверждение оплаты</span></div></div>
${row('i-money','Платёж №P-00125',state.paymentOk?'14 500 ₽ · подтверждён':'Ожидает подтверждения','payment')}
<div class="note">На этом экране суммы намеренно не редактируются вручную.</div>`;

screens.reports=()=>`
<div class="metricGrid"><button class="metric" data-go="orders"><b>5</b><span>Заказы</span></button><button class="metric" data-go="finance"><b>1</b><span>Оплаты</span></button><button class="metric" data-go="qc"><b>QC</b><span>Проверки</span></button><button class="metric" data-go="history"><b>↻</b><span>История</span></button></div>
${hero('Отчёты','Поддерживающая страница схемы. Каждый блок ведёт в конкретный объект / действие.')}`;

screens.history=()=>`${row('i-history','Заказ №000125','Сегодня · iPhone 13','order')}${row('i-history','Клиент Иванов Иван','Изменено сегодня','client')}${row('i-history','Платёж №P-00125','Финансы','finance')}`;

screens.settings=()=>`
${section('Операционные правила',
 `<div class="info"><label>QC обязателен</label><button class="switch ${state.qcMandatory?'on':''}" data-act="toggle-qc"><i></i></button></div>`+
 `<div class="info"><label>Тема</label><button class="btn" style="min-height:38px" data-act="theme">Переключить</button></div>`+
 `<div class="info"><label>Язык</label><button class="btn" style="min-height:38px" data-act="language">RU / EN</button></div>`)}
<div class="note">QC включён по умолчанию. Это настройка прототипа, не изменение production-конфигурации.</div>`;

screens.help=()=>`
${hero('Жесты и навигация','Все механики из схемы доступны в этом прототипе.')}
${section('Жесты',`<div class="listLine"><b>→</b><span class="grow">Меню выезжает справа</span></div><div class="listLine"><b>↕</b><span class="grow">Меню прокручивается</span></div><div class="listLine"><b>drag</b><span class="grow">Иконка меню → Свободная зона Home</span></div><div class="listLine"><b>↑</b><span class="grow">Свайп вверх по ярлыку → убрать с Home</span></div><div class="listLine"><b>↑ / ↓</b><span class="grow">Нижняя панель открыть / скрыть</span></div>`)}
${btn('Фото / QR','', 'capture')}${btn('Поиск / Голос','', 'search')}`;
