# AION Service CRM — Visual Canon

Status: **OWNER APPROVED / FROZEN**

Canonical implementation: `app-v8-canon.html`
Canonical visual assets: `assets/v8/`

## Approved screens

1. Home / Главная
2. Orders / Заказы
3. Repair / Ремонт
4. Clients / Клиенты
5. More / Ещё
6. New repair overlay
7. Search overlay
8. QR overlay

## Frozen visual rules

- Deep midnight background with controlled blue and violet glow.
- Chrome 3D AION logo and `SERVICE CRM` wordmark.
- One consistent family of metallic 3D icons.
- Canonical card geometry, spacing, typography, hierarchy and navigation dock.
- Home layout remains: Work Zone + EvE, four KPI cards, 3x2 action grid, working queue, five-item dock.
- Canonical action names: Новый ремонт, Найти заказ, Выдать, Прайс и поставщики, QR, Фото.
- Canonical navigation: Главная, Заказы, Ремонт, Клиенты, Ещё.
- No emoji, substitute icon families, arbitrary simplification, color drift or layout reinterpretation.
- Responsive implementation may adapt scale and safe areas, but must not redesign the canon.

## Change control

Any visible deviation from this canon requires explicit owner approval before becoming the main demo.
New ideas must be evaluated separately and must not be merged into the frozen visual canon by default.

## Maturity boundary

The v8 Canon Fidelity implementation is an interactive visual prototype with image-based canonical screens and click/tap hit zones. It is not evidence that backend CRM, real QR decoding, supplier integrations, camera recognition, authentication, database or production business rules are implemented.

## Rollback

Previous prototype files remain in the repository as reversible technical history. They are not the current visual source of truth.
