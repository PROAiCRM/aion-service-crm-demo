# MP-002 Mobile Express Intake — Camera Assist Privacy Policy v0.1

**Статус:** PRIVACY DESIGN — CAMERA IMPLEMENTATION NOT VERIFIED  
**Дата:** 2026-08-01  
**Применяется к:** MP-002 Mobile Express Intake

## 1. Цель

Разрешить сотруднику быстрее определить устройство с помощью камеры, не превращая вспомогательную функцию в скрытую систему фотографирования клиентов и устройств.

Главный принцип:

> Камера предлагает варианты. Человек подтверждает модель. Изображение не сохраняется и не покидает устройство без отдельного явного решения.

## 2. Product boundary

Camera Assist используется только для:

- определения вероятного бренда/линейки/модели;
- подсказки нескольких похожих вариантов;
- ускорения ручного поиска каталога устройств.

Camera Assist не используется в MVP для:

- распознавания лица;
- идентификации клиента;
- чтения переписки/экрана;
- автоматического извлечения паролей;
- фиксации юридического состояния устройства;
- скрытого контроля сотрудника;
- биометрии;
- обучения внешней модели на клиентских фото;
- окончательной диагностики неисправности.

## 3. Запуск камеры

Камера открывается только после отдельного нажатия:

`Определить модель камерой`

До открытия показывается короткое объяснение:

> «Камера поможет найти похожие модели. Снимок не сохраняется. Модель подтвердит сотрудник.»

Запрещено:

- запускать камеру при открытии формы;
- запрашивать постоянный доступ;
- скрывать системный permission prompt;
- блокировать ручной путь при отказе;
- использовать фронтальную камеру по умолчанию;
- записывать видео дольше необходимого.

## 4. Рекомендуемая техническая модель пилота

### Предпочтительный вариант A — local/on-device assist

- кадр существует в памяти браузера;
- обработка выполняется локально доступными средствами;
- результатом является список вероятных model IDs/labels;
- изображение уничтожается после анализа или закрытия;
- сеть не используется.

### Допустимый fallback B — визуальный guided search без AI

- сотруднику показываются подсказки по корпусу, камерам и размерам;
- он выбирает вариант вручную;
- фото не создаётся.

### Вариант C — server inference

Заблокирован до отдельного Owner Gate.

Требует:

- Data Protection Review;
- описания сервера/провайдера;
- TLS и authentication boundary;
- запрета retention;
- договора с провайдером;
- региональной политики данных;
- удаления metadata;
- явного текста пользователю;
- cost model;
- failure/timeout policy;
- доказательства, что данные не используются для обучения.

## 5. Capture boundary

Для распознавания модели предпочтительно:

- краткоживущий frame;
- ограниченное разрешение;
- кадр только устройства;
- отсутствие лица и документов;
- отсутствие фонового сохранения;
- отсутствие записи в Files/Photos;
- отсутствие upload в analytics/logs/Evidence.

Если в кадр попали лицо, документ, экран с персональными данными или серийный номер, обработка должна минимизировать область и не сохранять исходник.

## 6. Результат распознавания

Результат имеет структуру:

- список 1–5 вариантов;
- confidence band: высокий/средний/низкий;
- признаки, объясняющие совпадение в безопасной форме;
- действие `Подтвердить`;
- действие `Не подходит — найти вручную`.

Запрещено:

- автоматически создавать устройство;
- показывать ложную точность `99.9%` без калибровки;
- скрывать альтернативы;
- считать confidence юридическим доказательством;
- записывать guessed model как verified.

## 7. Подтверждение человеком

До создания заказа employee обязан:

- выбрать вариант;
- визуально сверить устройство;
- при необходимости уточнить память/версию/регион;
- подтвердить или оставить `модель уточняется`.

В данных различаются:

- `ASSISTED_GUESS`;
- `EMPLOYEE_CONFIRMED`;
- `MANUAL_SELECTED`;
- `UNKNOWN_PENDING`.

## 8. Data retention

### По умолчанию

- raw image: 0 секунд долговременного хранения;
- browser memory: только активная операция;
- result candidates: можно сохранить без изображения для UX/качества;
- confidence: можно сохранить агрегированно;
- analytics: только безопасные счётчики.

### Запрещённые места

- localStorage;
- service worker Cache Storage;
- URL/query;
- application logs;
- error tracking payload;
- GitHub Evidence;
- immutable intake receipt;
- public status page;
- external AI history.

## 9. Privacy-minimal events

Допустимы:

- `camera_assist_opened`;
- `permission_granted/denied`;
- `analysis_completed/failed`;
- `candidate_confirmed/manual_fallback`;
- duration bucket;
- confidence band;
- verified mismatch flag.

Недопустимы:

- image;
- image hash, если он позволяет корреляцию;
- serial/IMEI;
- phone;
- customer name;
- full model free text, если он содержит PII;
- browser fingerprint;
- location.

## 10. Security boundary

- camera page requires authenticated employee session;
- permission проверяется сервером для сохранения результата в заказ;
- client cannot submit tenant/actor;
- media stream tracks stop on close/background/navigation;
- canvas/blob очищаются;
- no third-party scripts on capture surface;
- CSP and dependency review required;
- no debug capture in production/pilot;
- error messages do not include frame data;
- camera API failure does not corrupt draft.

## 11. Performance and usability

Target:

- camera opens without long blocking;
- result or fallback appears within a pilot-defined limit;
- low-memory mode avoids large frames;
- reduced resource profile remains available;
- manual search is always visible;
- employee can continue if lighting is poor;
- no repeated permission prompts after denial within one flow.

Camera Assist is rejected from MVP if it saves less time than it costs or reduces accuracy.

## 12. Accuracy measurement

На пилоте измеряются:

- доля sessions, где камера использована;
- доля полученных вариантов;
- top-1 и top-3 agreement с employee-confirmed model;
- время camera path vs manual path;
- mismatch corrections;
- device families with low accuracy;
- permission-denial rate;
- failure rate;
- влияние на полное время приёмки.

Нельзя считать accuracy по guessed labels без человеческого подтверждения.

## 13. Failure modes

### Permission denied

Показать ручной поиск. Не повторять навязчиво.

### Camera unavailable

Показать причину простым языком и ручной путь.

### Low confidence

Показать варианты или `не удалось определить`.

### Wrong suggestion

Сотрудник выбирает другой вариант; mismatch фиксируется безопасным событием.

### Network/server failure

Для server mode — fail closed в manual search, кадр не ставится в бесконечную очередь.

### App backgrounded

Остановить stream, удалить frame, сохранить только безопасный form draft.

## 14. Threats and controls

| Угроза | Контроль |
|---|---|
| Скрытое фото клиента | rear camera, инструкция кадра, no retention |
| Утечка устройства/экрана | crop/minimize, local processing, no logs |
| Внешний провайдер сохраняет фото | server mode blocked до договора и Evidence |
| Неверная модель | human confirmation, unknown state |
| Камера замедляет поток | manual fallback и pilot timing |
| Сотрудник считает AI фактом | confidence labels и обязательное подтверждение |
| Фото попадает в receipt/status | explicit schema deny-list |
| Media stream остаётся включён | stop tracks on every exit path |

## 15. Acceptance criteria

- камера не открывается автоматически;
- ручной путь доступен всегда;
- raw frame отсутствует в storage/logs/network для local mode;
- stream останавливается после выхода;
- модель не считается подтверждённой без employee action;
- low confidence не создаёт ложный результат;
- camera failure не теряет draft;
- iPhone Safari permission/close/background проверены;
- Android Chrome проверен позже как отдельная матрица;
- privacy inspection подтверждает отсутствие кадров;
- никакие реальные клиентские изображения не используются до Owner Gate.

## 16. Owner Gates

Требуется отдельное решение владельца для:

1. включения camera assist в friendly pilot;
2. server/external inference;
3. хранения любого изображения;
4. использования фото как доказательства состояния;
5. внешнего AI-провайдера;
6. cross-customer model improvement;
7. реальных клиентских данных.

## 17. Stop criteria

Остановить camera slice, если:

- кадры невозможно надёжно исключить из storage/logs;
- provider требует retention/training;
- точность низкая;
- ручной путь быстрее;
- функция увеличивает ошибки модели;
- старые устройства/браузеры нестабильны;
- поддержка стоит больше пользы;
- клиенты или сотрудники не доверяют функции.

## 18. Maturity

- product policy: **designed**;
- local processing architecture: **not selected/verified**;
- source implementation: **not proven**;
- privacy runtime evidence: **none**;
- accuracy evidence: **none**;
- real image use: **not authorized**.