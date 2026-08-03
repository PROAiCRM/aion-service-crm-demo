# MP-003 Owner Pulse — Owner View Privacy & Role Boundary v0.1

**Статус:** DESIGNED — SECURITY REVIEW REQUIRED BEFORE PILOT  
**Дата:** 2026-08-01

## 1. Цель

Определить, кто имеет право видеть Owner Pulse, какие данные разрешены на первом экране и как исключить превращение управленческого продукта в инструмент скрытого наблюдения за сотрудниками.

## 2. Roles

### Owner

Может видеть организационные агрегаты, денежные факты, списки проблемных заказов и объяснение приоритетного действия в пределах своего tenant.

### Manager

Получает только те показатели и объекты, которые разрешены политикой организации. Денежные суммы, долги и исключения могут быть ограничены.

### Employee

Не получает Owner Pulse по умолчанию. Рабочее место сотрудника использует отдельную ролевую проекцию и не показывает owner-only aggregates.

### Platform support / admin

Не получает бизнес-данные клиента автоматически. Доступ возможен только через отдельную support-процедуру, минимальные права, срок, причину и audit receipt.

## 3. Первый экран

Разрешены:

- агрегаты текущего tenant;
- количество заказов по утверждённым категориям;
- сумма полученных платежей, если роль имеет право;
- безопасный номер заказа и device label в drill-down;
- reason code и timestamp;
- data-quality state.

По умолчанию запрещены:

- телефон и полное имя клиента на overview;
- IMEI, серийный номер, passcode;
- полный текст жалобы;
- внутренние заметки мастера;
- supplier cost и margin без отдельной permission;
- домашние адреса;
- персональные рейтинги сотрудников;
- скрытая история действий пользователя;
- cross-tenant aggregates.

PII открывается только при переходе в заказ и наличии обычного permission на этот заказ.

## 4. Employee boundary

Owner Pulse не должен отображать:

- «худший сотрудник»;
- вероятность мошенничества человека;
- автоматический guilt score;
- сравнение скорости без контекста сложности;
- денежный ущерб, приписанный человеку без доказанного события;
- санкцию или рекомендацию наказания.

Если факт связан с действием сотрудника, формулировка описывает процесс:

- «у заказа отсутствует подтверждённое согласование»;
- «платёж и выдача требуют проверки»;
- «данные расходятся».

Не: «сотрудник украл», «мастер виноват», «низкая эффективность».

## 5. Tenant isolation

- tenant определяется серверной authenticated principal/session boundary;
- organization ID не принимается как доверенный параметр от клиента;
- RLS/least privilege проверяются executable tests;
- aggregates и drill-down используют одинаковую tenant boundary;
- cache keys содержат tenant identity безопасным образом и не смешивают организации;
- exports в MVP отсутствуют;
- screenshots/Evidence используют только synthetic data.

## 6. Mobile privacy

Owner Pulse может содержать чувствительные финансовые показатели. Поэтому:

- не показывать сумму на lock-screen notifications;
- не включать данные в push payload по умолчанию;
- не сохранять page snapshot в analytics;
- no-store для чувствительных HTTP responses, если применимо;
- не сохранять полный payload в service worker Cache Storage;
- при background/return рассмотреть privacy blur после отдельного UX/security решения;
- logout и session expiry должны закрывать экран;
- скриншот-блокировка не считается универсальной защитой и не обещается без platform proof.

## 7. Audit

Audit требуется для:

- открытия owner-only financial view, если политика это требует;
- изменения role permissions;
- support access;
- dismiss/complete приоритетного действия;
- экспорта, когда он появится;
- изменения metric/rule versions.

Audit не должен сохранять полный экран, клиентские тексты и секреты.

## 8. Test matrix

- owner sees own tenant;
- manager sees only allowed fields;
- employee receives denial;
- support receives denial without explicit support grant;
- cross-tenant aggregate and drill-down denied;
- overview HTML/API/logs contain no forbidden PII;
- session expiry invalidates view;
- browser cache/service worker do not retain sensitive responses;
- synthetic notification contains no money/PII;
- no employee ranking fields exist in payload;
- authorization denial is audited without payload leakage.

## 9. Owner Gates

Explicit approval required before:

- showing money to manager role;
- enabling remote/public access outside trusted deployment boundary;
- adding notifications with operational details;
- adding employee comparisons;
- support access to real tenant data;
- exporting financial or order lists;
- cross-branch or multi-business consolidated view.

## 10. Stop criteria

- any cross-tenant visibility;
- owner-only totals visible to unauthorized role;
- PII appears in overview logs/cache/Evidence;
- screen becomes employee surveillance tool;
- support can access without bounded grant;
- tenant isolation differs between aggregate and drill-down.
