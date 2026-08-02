# AION Service CRM — Canon UI Kit v1

Status: **OWNER APPROVED VISUAL DIRECTION / IMPLEMENTATION SPEC**

## Source of truth

The owner-approved dark 3D reference screens are the only visual source of truth for:

- Home
- Orders
- Repair
- Clients
- More

No independent visual reinterpretation is allowed without owner approval.

## Canon tokens

- Canvas: `#030814` → `#071021`
- Card surface: `#0A1529` / `#111D35`
- Default border: `#203D68`
- Active border: `#3B8CFF`
- Primary text: `#F7F9FF`
- Secondary text: `#8190AA`
- Success: `#45DB85`
- Danger: `#FF7458`
- Purple accent: `#9A55FF`
- Radius: 20 px
- Motion: 180–220 ms, `cubic-bezier(.2,.8,.2,1)`

## Typography

Use the system Apple stack first:

`-apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, "Segoe UI", sans-serif`

No decorative fonts are allowed in the working UI. The metallic appearance belongs to the logo and 3D assets, not to body text.

## 3D asset system

All icons must use the same material vocabulary:

1. silver-blue metallic gradient;
2. deep navy internal surfaces;
3. one cold blue edge light;
4. one deep drop shadow;
5. optional blue glow only for active or primary states;
6. no emoji, icon-font glyphs, or unrelated outline icons.

Required assets:

- AION logo
- theme
- settings
- EvE
- new repair
- find order
- hand over smartphone
- price and suppliers
- QR
- photo
- new / in work / ready / revenue
- orders / repair / clients / more
- notifications / profile / warehouse / reports

## Interaction states

- Idle: metallic depth, no strong halo.
- Active: blue edge + 20–26 px halo + slight lift.
- Pressed: scale `0.985`, reduced brightness.
- Focus: same border as active, no layout shift.
- Disabled: 45% opacity, no glow.

## Screen calibration

- Mobile design width: 390–430 px.
- Main action grid: 3 × 2.
- KPI grid: 4 columns.
- Bottom navigation: 5 equal tabs.
- All screen margins, gaps, and radii must be derived from shared tokens.
- Browser safe areas and PWA safe areas must be handled separately.

## Maturity boundary

This UI kit is a designed and implemented visual system. It is not proof of backend, QR decoding, camera recognition, supplier integrations, or commercial validation.
