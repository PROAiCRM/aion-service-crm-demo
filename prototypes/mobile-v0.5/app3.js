screens.capture=()=>`
<div class="cameraBox"><div class="scanFrame"></div></div>
<div class="btnRow">${btn(`${ico('i-camera','sm')} Фото`,'scan','','primary')}${btn(`${ico('i-qr','sm')} QR`,'scan')}</div>
${btn('Ручной ввод номера заявки / квитанции','', 'manual_number')}
<div class="note">Фото и QR — единый блок. QR может привести к устройству, статусу/заказу или ручному вводу номера.</div>`;

screens.recognition=()=>`
${hero('Результат распознавания','Данные извлечены в демонстрационном режиме.')}
${section('Распознано',info('Модель','iPhone 13')+info('IMEI','356789012345678')+info('SN','F17...')+info('Клиент','Иванов И.И.')+info('Устройство','iPhone 13')+info('Статус','—'))}
<div class="btnRow">${btn('Исправить вручную','', 'verify')}${btn('Подтвердить','recognition-confirm','','primary')}</div>`;

screens.verify=()=>`
${hero('Проверка данных','Поля можно исправить вручную.')}
<input class="input" id="vModel" value="iPhone 13">
<input class="input" id="vImei" value="356789012345678">
<input class="input" id="vSn" value="F17...">
<input class="input" id="vClient" value="Иванов И.И.">
<input class="input" id="vDevice" value="iPhone 13">
<div class="btnRow">${btn('Исправить','verify-edit')}${btn('Подтвердить','verify-confirm','','primary')}</div>`;

screens.search=()=>`
${searchBox('Введите запрос','globalSearch')}
<div class="bigMic" id="micBtn" data-act="voice">${ico('i-mic','xl')}</div>
<div style="text-align:center;color:var(--muted);font-size:13px" id="micText">или нажмите микрофон</div>
${btn('Найти','do-search','','primary')}
${btn('Ручной ввод номера','', 'manual_number')}
<div class="note">Поиск и голосовой ввод работают на одной поверхности команд.</div>`;

screens.search_results=()=>`
${hero('Результаты поиска','Нажмите на объект, чтобы открыть его.')}
${row('i-phone','iPhone 13','IMEI 356... · Клиент: Иванов И.И.','device')}
${row('i-clipboard','Заказ №12345','Статус: в работе','order')}
${row('i-wrench','Ремонт №67890','Статус: согласовано','work')}
${btn('Показать ещё','demo')}
<div class="btnRow">${btn('+ Новый ремонт','search-new','','primary')}${btn('Ручная корректировка','', 'manual_correction')}</div>`;

screens.manual_correction=()=>`
<input class="input" id="cModel" value="iPhone 13" placeholder="Модель">
<input class="input" id="cImei" value="356..." placeholder="IMEI">
<input class="input" id="cSn" value="F17..." placeholder="S/N">
<input class="input" id="cClient" value="Иванов И.И." placeholder="Клиент">
<input class="input" id="cDevice" value="iPhone 13" placeholder="Устройство">
${btn('Сохранить','correction-save','','primary')}`;

screens.manual_number=()=>`
${hero('Ручной ввод номера','Введите номер заявки или квитанции.')}
<input class="input" id="manualNumber" placeholder="№ заявки / квитанции">
${btn('Найти','manual-find','','primary')}`;

screens.draft=()=>`
${hero('Новый ремонт (черновик)','Порядок заполнения не фиксирован. Заполняйте в любом порядке.')}
<section class="card glass infoGrid">
${contextBtn('client','Клиент')}${contextBtn('device','Устройство')}${contextBtn('service','Услуга')}${contextBtn('part','Деталь')}${contextBtn('supplier','Поставщик')}${contextBtn('comment','Комментарий')}${contextBtn('price','Цена')}
</section>
${(()=>{let n=['client','device','service'].filter(k=>state.context[k]).length;return n>=3?`<div class="btnRow">${btn('Создать ремонт','create-repair','','primary')}${btn('Создать заказ','create-order')}</div>`:`<div class="note">Дозаполните известный контекст. Кнопки создания появляются, когда данных достаточно.</div>`})()}
<div class="btnRow">${btn('Фото / QR','', 'capture')}${btn('Поиск / Голос','', 'search')}</div>`;

screens.diagnostics=()=>`
${hero('Диагностика','Чек-лист диагностических записей')}
<section class="card glass" id="diagList">${
 state.diagnostics.map((v,i)=>`<div class="checkLine" data-act="diag:${i}"><span class="checkbox ${v?'on':''}">${v?ico('i-check','sm'):''}</span><span class="grow">Диагностическая запись ${i+1}</span><small>—</small></div>`).join('')
}</section>
${btn('+ Добавить запись','diag-add')}${btn('Стоимость / услуги →','', 'cost','primary')}`;

screens.cost=()=>`
${section('Услуги / детали',
 `<div class="listLine"><span class="grow">Замена дисплея</span><b>1 500 ₽</b></div><div class="listLine"><span class="grow">Дисплей iPhone 13</span><b>2 000 ₽</b></div>`)}
${btn('+ Добавить услугу / деталь','cost-add')}
${section('Итого',`<div style="display:flex;justify-content:space-between;align-items:center"><span>Итого</span><b class="money" style="font-size:24px">3 500 ₽</b></div>`)}
${btn('Согласование →','', 'approval','primary')}`;

screens.approval=()=>`
${section('Клиент',info('Клиент','Иванов И.И.')+info('Статус',state.approval||'На согласовании'))}
<textarea class="textarea" placeholder="Комментарий клиента"></textarea>
<div class="btnRow">${btn('Согласовать','approve','','success')}${btn('Отклонить','decline','','danger')}</div>`;

screens.signature=()=>`
${hero('Подпись','Подпишите пальцем в поле ниже.')}
<div class="signature" id="sig"><canvas id="sigCanvas"></canvas><div class="sigHint" id="sigHint">Проведите пальцем</div></div>
<div class="btnRow">${btn('Очистить','sig-clear')}${btn('Подтвердить','sig-confirm','','primary')}</div>`;
