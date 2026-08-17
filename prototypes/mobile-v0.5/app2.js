const screens={};
screens.home=()=>`
<div class="homeCards">
<button class="homeTile glass" data-go="tasks"><span class="iconWell">${ico('i-clipboard','xl')}</span><span class="rtitle">${lang==='ru'?'Текущие задачи':'Current tasks'}</span><span class="chev">${ico('i-chevron')}</span></button>
<button class="homeTile glass" data-act="new-empty"><span class="iconWell">${ico('i-plus','xl')}</span><span class="rtitle">${lang==='ru'?'Новый ремонт':'New repair'}</span><span class="chev">${ico('i-chevron')}</span></button>
<button class="homeTile glass" data-go="stock"><span class="iconWell">${ico('i-box','xl')}</span><span class="rtitle">${lang==='ru'?'Склад / поставщики':'Stock / suppliers'}</span><span class="chev">${ico('i-chevron')}</span></button>
<section class="freeZone glass" id="freeZone"><div class="freeHead"><b>${lang==='ru'?'Свободная зона':'Free zone'}</b><small>6–8 ${lang==='ru'?'иконок':'icons'}</small></div><div class="shortcuts" id="shortcuts"></div></section>
</div>`;

screens.tasks=()=>`
<div class="tabs"><button class="tab active">Задачи</button><button class="tab" data-go="notifications">Уведомления</button></div>
${[
 ['Позвонить клиенту','Иванов И. · 09:00','client'],['Проверить деталь','Заказ №000125 · 10:00','part'],
 ['Принять оплату','Петров П. · 11:00','payment'],['QC проверка','Заказ №000124 · 13:00','qc'],['Выдать клиенту','Сидоров С. · 15:00','issue']
].map(x=>row('i-clipboard',x[0],x[1],x[2])).join('')}
${btn('Заказы','', 'orders','primary')}`;

screens.notifications=()=>`
<div class="tabs"><button class="tab" data-go="tasks">Задачи</button><button class="tab active">Уведомления</button></div>
${[
 ['Заказ №000125 · QC пройден','09:10','order'],['Поставка детали · OLED экран','10:25','suppliers'],
 ['Оплата получена · 14 000 ₽','11:40','finance'],['Задача просрочена · Заказ №000123','12:15','tasks'],['Комментарий клиента · Иванов И.','14:05','client']
].map(x=>row('i-bell',x[0],x[1],x[2])).join('')}`;

screens.clients=()=>`${searchBox('Поиск по ФИО, телефону','clientSearch')}<div id="clientList">${
 clients.map((x,i)=>row('i-user',x[0],x[1],'client','','select-client:'+i)).join('')}</div>`;

screens.client=()=>`
${hero('Иванов Иван Иванович','+7 (900) 123-45-67')}
<div class="btnRow">${btn(`${ico('i-call','sm')} Позвонить`,'call')} ${btn(`${ico('i-message','sm')} Написать`,'message')}</div>
<div class="tabs"><button class="tab active" data-go="devices">Устройства</button><button class="tab" data-go="client_history">История</button><button class="tab" data-go="client_docs">Документы</button></div>
${btn('+ Новый ремонт','new-client-repair','','primary')}`;

screens.devices=()=>`${devices.map((x,i)=>row('i-phone',x[0],x[1],'device','','select-device:'+i)).join('')}${btn('+ Добавить устройство','demo')}`;

screens.device=()=>`
${hero('iPhone 13','IMEI 356789012345678')}
${section('Связанные данные',
 row('i-history','История ремонтов','3 заказа','repair_history')+
 row('i-shield','Гарантия','До 12.05.2027','warranty')+
 row('i-clipboard','Текущий заказ','№ 000125 · В работе','order')
)}
${btn('+ Новый ремонт','new-device-repair','','primary')}
<div class="btnRow">${btn('Найти деталь','', 'stock')} ${btn('Найти услугу / прайс','', 'services')}</div>`;

screens.client_history=()=>`
${[
 ['№ 00012345','12.05.2026 · iPhone 13 · В работе'],['№ 00011987','28.02.2026 · Samsung S21 · Выдан'],['№ 00011234','15.11.2025 · MacBook Air · Закрыт'],['№ 00010567','02.08.2025 · iPhone 13 · Закрыт']
].map(x=>row('i-history',x[0],x[1],'order')).join('')}
${btn('+ Новый ремонт','new-client-repair','','primary')}`;

screens.client_docs=()=>`
${[
 ['Гарантийные','2','warranty'],['Товарный чек','3','doc_group'],['Диагностические','4','doc_group'],['Квитанции','5','receipt'],['История работ','3','repair_history']
].map(x=>row('i-doc',x[0],`${x[1]} документов`,x[2])).join('')}
${btn('+ Новый ремонт','new-client-repair','','primary')}`;

screens.doc_group=()=>`
${hero('Документы клиента','Связаны с клиентом, устройством и заказом.')}
${row('i-doc','Документ №1','12.05.2026','receipt')}
${row('i-doc','Документ №2','28.02.2026','act')}
${btn('+ Новый ремонт','new-client-repair','','primary')}`;

screens.warranty=()=>`
${row('i-shield','№ G-2026-00124','iPhone 13 · 12.05.2026','warranty_case','Одобрено')}
${row('i-shield','№ G-2025-00098','Samsung S21 · 28.02.2026','warranty_case','Одобрено')}
${row('i-shield','№ G-2024-00056','Apple Watch S6 · 18.09.2025','warranty_case','Отказано')}
${btn('+ Новый ремонт','new-device-repair','','primary')}`;

screens.warranty_case=()=>`${hero('№ G-2026-00124','iPhone 13 · Одобрено')}${info('Дата','12.05.2026')}${info('Статус','Одобрено','money')}<div class="btnRow">${btn('Открыть устройство','', 'device')}${btn('+ Новый ремонт','new-device-repair','','primary')}</div>`;

screens.services=()=>`${searchBox('Поиск услуг','serviceSearch')}<div id="serviceList">${
 services.map((x,i)=>row('i-tag',x[0],x[1],'service',x[2],'select-service:'+i)).join('')}</div><div class="note">Нажмите на услугу → карточка услуги → Новый ремонт / Добавить в ремонт.</div>`;

screens.service=()=>`
${hero(state.context.service||'Замена дисплея','iPhone 13')}
${section('Параметры',info('Цена работы',state.context.price||'5 000 ₽')+info('Время','60 мин')+info('Совместимость / Модель','iPhone 13'))}
<div class="btnRow">${btn('+ Новый ремонт','service-new','','primary')}${btn('+ Добавить в ремонт','service-add')}</div>`;

screens.stock=()=>`${searchBox('Поиск деталей','partSearch')}<div id="partList">${
 parts.map((x,i)=>row('i-box',x[0],`${x[1]} · ${x[2]}`,'part',x[3],'select-part:'+i)).join('')}</div>${btn('Не найдено → ручной ввод','', 'manual_part')}`;

screens.part=()=>`
${hero(state.context.part||'Дисплей','iPhone 13')}
${section('Параметры',info('Совместимость','iPhone 13')+info('Остаток на складе','12 шт')+info('Цена',state.context.price||'3 200 ₽'))}
${btn('+ Новый ремонт','part-new','','primary')}
<div class="btnRow">${btn('+ Добавить в текущий ремонт','part-add')}${btn('Найти поставщика','', 'suppliers')}</div>`;

screens.suppliers=()=>`${searchBox('Поиск поставщиков','supplierSearch')}${
 suppliers.map((x,i)=>row('i-cart',x[0],`${x[2]} · ${x[3]}`,'',x[1],'choose-supplier:'+i)).join('')}${btn('Не найдено → ручной ввод','', 'manual_part')}`;

screens.manual_part=()=>`
${hero('Ручной режим','Если нужная позиция не найдена, внесите справочные данные вручную.')}
<input class="input" id="manualName" placeholder="Название">
<input class="input" id="manualPrice" placeholder="Цена">
<input class="input" id="manualSupplier" placeholder="Поставщик (ручной)">
<textarea class="textarea" id="manualComment" placeholder="Комментарий"></textarea>
${btn('+ Добавить в ремонт','manual-add','','primary')}`;
