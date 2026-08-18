# MP-003 Owner Pulse — Data Freshness & Degraded Mode Policy v0.1

**Статус:** DESIGNED — RUNTIME EVIDENCE PENDING  
**Дата:** 2026-08-01

## 1. Цель

Не позволить Owner Pulse показывать старые или неполные данные как текущее состояние бизнеса.

## 2. Principle

Каждый owner fact имеет две независимые характеристики:

- **correctness** — соответствует ли значение источнику истины;
- **freshness** — насколько недавно оно рассчитано или получено.

Точное, но старое значение не считается текущим.

## 3. Required metadata

Для каждого блока:

- `asOf`;
- `sourceVersion`;
- `metricDefinitionVersion`;
- `freshnessState`;
- `dataQualityState`;
- `lastSuccessfulRefreshAt`;
- `refreshFailureCode`, если есть;
- `isComplete`;
- `drillDownCount`.

## 4. Freshness states

- `LIVE` — значение в пределах подтверждённого окна;
- `DELAYED` — значение старше целевого, но ещё пригодно с предупреждением;
- `STALE` — значение нельзя использовать для текущего решения;
- `OFFLINE_SNAPSHOT` — показана последняя синхронизированная версия с явным временем;
- `UNAVAILABLE` — безопасного значения нет.

## 5. Initial freshness windows

Рабочие гипотезы до runtime proof:

| Fact | LIVE | DELAYED | STALE |
|---|---:|---:|---:|
| Полученные платежи | ≤60 сек | 61–180 сек | >180 сек |
| Статусы заказов | ≤120 сек | 121–300 сек | >300 сек |
| Promise/overdue projection | ≤120 сек | 121–300 сек | >300 сек |
| Waiting-client projection | ≤120 сек | 121–300 сек | >300 сек |
| Priority action | пока все входные факты LIVE/DELAYED | пересчёт обязателен | не показывать как актуальное |

Пороги должны быть проверены на локальном сервере, iPhone и слабом Wi‑Fi.

## 6. Degraded modes

### 6.1 One metric unavailable

Остальные факты могут отображаться, но:

- общий status = `PARTIAL`;
- недоступный блок не показывает `0`;
- priority rule не использует отсутствующий fact;
- если отсутствующий fact относится к P0/P1, рекомендация становится «Проверьте данные».

### 6.2 Database unavailable

Показывается только последний безопасный snapshot с:

- временем;
- заметной маркировкой offline;
- запретом mutation actions;
- отсутствием заявления «сейчас».

Если безопасного snapshot нет — экран `UNAVAILABLE`.

### 6.3 One source conflicts with another

- status = `CONFLICT`;
- денежные рекомендации блокируются;
- показывается путь к проверке;
- Evidence не скрывает конфликт.

### 6.4 Browser lost response

Refresh не должен запускать бизнес mutation. Повторный read допустим, но скрытые записи или refresh procedures должны быть вынесены в явный bounded process.

## 7. Snapshot boundary

Offline snapshot может содержать только минимальную owner projection:

- агрегаты;
- safe order references;
- reason codes;
- timestamps;
- no customer phone/name by default;
- no tokens/credentials;
- bounded retention;
- tenant-scoped key.

Service worker не должен кешировать authenticated API responses без отдельной offline security architecture.

## 8. Clock and timezone

- одна утверждённая business timezone организации;
- server timestamps хранятся в unambiguous form;
- операционный день определяется политикой, а не локальными часами браузера;
- переход даты, DST и изменение timezone тестируются;
- device clock не является единственным источником истины.

## 9. Refresh behavior

- manual refresh показывает progress и outcome;
- background refresh не меняет бизнес-состояние;
- не больше одного активного refresh для одного view;
- stale response не перезаписывает более новый;
- response version/timestamp используется для ordering;
- rate limit не должен превращать экран в бесконечный spinner.

## 10. UX wording

Разрешено:

- «Обновлено 40 секунд назад»;
- «Данные частично недоступны»;
- «Последняя синхронизация в 14:32»;
- «Сумма не подтверждена — проверьте платежи».

Запрещено:

- показывать `0 ₽` при ошибке;
- скрывать offline state;
- «всё хорошо» при incomplete data;
- использовать зелёный success state для stale projection.

## 11. Test matrix

- stale threshold transitions;
- partial source outage;
- full database outage;
- offline snapshot boundary;
- stale response after fresh response;
- browser clock differs from server;
- day rollover;
- tenant-specific cache isolation;
- sensitive API response absent from Cache Storage;
- priority action invalidates when source becomes stale;
- zero vs unavailable distinction;
- explicit no-write behavior during refresh.

## 12. Stop criteria

- old data displayed as live;
- `0` used for unavailable;
- authenticated sensitive payload cached without approved design;
- refresh triggers hidden mutations;
- device clock changes business totals;
- stale action remains active after source facts changed.
