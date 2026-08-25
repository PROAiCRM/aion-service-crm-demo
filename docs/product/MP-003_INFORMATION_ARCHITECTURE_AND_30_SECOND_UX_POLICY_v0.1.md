# MP-003 Owner Pulse — Information Architecture & 30-Second UX Policy v0.1

**Статус:** DESIGNED — OWNER USABILITY EVIDENCE PENDING  
**Дата:** 2026-08-01

## 1. Цель

Спроектировать один короткий управленческий экран, который не повторяет всю CRM и не превращается в тяжёлый BI-dashboard.

## 2. One-screen contract

В пределах первого viewport владелец должен увидеть:

1. время актуальности и data-quality status;
2. «Получено сегодня»;
3. «Готово с долгом»;
4. «Просрочено»;
5. «Ждём клиента»;
6. одно главное действие.

Дополнительные детали доступны через progressive disclosure.

## 3. Visual hierarchy

### Level 1 — Next action

Самая заметная карточка:

- конкретный глагол;
- объект;
- причина;
- severity tier;
- время актуальности;
- одна основная кнопка.

### Level 2 — Four facts

Компактные owner facts без декоративных графиков.

Каждый факт:

- короткое название;
- число/сумма;
- quality indicator;
- delta только если определения и периоды сопоставимы;
- tap target для drill-down.

### Level 3 — Context

- обновлено;
- источник;
- проблема качества;
- объяснение правила;
- переход в заказ/список.

## 4. 30-second rule

Экран проваливает UX gate, если владельцу нужно:

- прокручивать несколько экранов для основных пяти ответов;
- расшифровывать неизвестные термины;
- выбирать период перед первым просмотром;
- настраивать dashboard;
- сравнивать несколько конкурирующих «главных» действий;
- понимать значение только после объяснения разработчика;
- открывать CRM-вкладки для проверки каждого числа.

## 5. Copy rules

Использовать:

- «Получено сегодня»;
- «Готово с долгом»;
- «Просрочено»;
- «Ждём клиента»;
- «Сделайте первым»;
- «Данные обновлены…»;
- «Нужна проверка».

Не использовать без доказательства:

- «Заработано»;
- «Прибыль»;
- «Потеряно ₽»;
- «Эффективность сотрудника»;
- «AI уверен»;
- «Бизнес в норме»;
- абстрактные health scores.

## 6. State design

### Normal

Проверенные свежие факты и одна рекомендация.

### No critical action

Факты отображаются; action card сообщает, что критичных действий нет.

### Partial

Недоступный блок явно маркируется. Общая рекомендация не использует его как достоверный факт.

### Conflict

Первой карточкой становится проверка данных.

### Offline snapshot

Видно точное время последней синхронизации; mutation actions disabled.

### Empty business day

Показываются честные нули только если источники доступны и подтверждают отсутствие операций.

### Unauthorized

Нет частичного рендера и утечки названий/сумм.

## 7. Drill-down

Tap по показателю открывает узкий список только тех объектов, которые составляют число.

Требования:

- count reconciliation;
- сохранение фильтра и semantic definition;
- безопасный order reference;
- сортировка по причине риска;
- возврат на Pulse без потери state;
- никакого нового дублирующего owner dashboard.

## 8. Desktop and mobile

One Core — Multi Platform:

- одна semantic view model;
- мобильный layout для iPhone;
- desktop layout расширяет пространство, но не добавляет другую бизнес-логику;
- Light/Dark не меняют смысл severity;
- Basic presentation сохраняет все facts/actions;
- reduced motion;
- keyboard navigation на desktop;
- large text/accessibility without hiding core facts.

## 9. Notifications boundary

MVP не требует push notifications.

Будущие уведомления:

- не содержат деньги/PII на lock screen;
- не заменяют Owner Pulse;
- ведут к конкретному доказанному действию;
- имеют frequency cap;
- отключаются;
- требуют отдельного Owner Gate.

## 10. Success measurement

- first viewport contains five answers;
- task completion ≤30 seconds;
- comprehension without explanation;
- no horizontal scroll on target iPhone;
- no more one primary action;
- accessibility modes preserve meaning;
- owner can explain each number in own words;
- owner distinguishes zero, unavailable and stale.

## 11. Anti-patterns

- 12 KPI cards;
- pie charts без решения;
- gauge/score без формулы;
- красный цвет для всего;
- carousel скрывающий главный риск;
- разные totals в mobile и desktop;
- «сегодня» на основе часов браузера;
- ranking employees;
- action button, который автоматически меняет бизнес-данные без confirmation;
- gamification владельца или сотрудников.

## 12. Stop criteria

- владелец не понимает экран ≤30 секунд;
- факты не помещаются/не видны в first viewport на target mobile;
- появляется второй dashboard с другой логикой;
- декоративная сложность снижает скорость;
- severity зависит только от цвета;
- drill-down не совпадает с aggregate;
- основной экран требует настройки до первой пользы.
