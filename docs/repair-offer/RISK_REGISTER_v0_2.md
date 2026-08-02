# AION Repair Offer — Risk Register v0.2

| ID | Risk | Severity | Current control | Remaining action |
|---|---|---:|---|---|
| RO-R01 | Personal data placed inside a share link | High | repeated warnings; customer label only | production encryption/tokenization and DLP validation |
| RO-R02 | User assumes pilot consent is a legal signature | High | explicit pilot disclaimer | legal review and separate e-signature decision |
| RO-R03 | Customer does not return the response link | High | clear final instruction and Web Share | shared backend with automatic decision sync |
| RO-R04 | Link is modified or corrupted | Medium | integrity checksum | signed, expiring server tokens |
| RO-R05 | Employee changes price after sending | High | response bound to offer checksum after share | immutable server-side proposal versions |
| RO-R06 | Local browser data is lost | Medium | JSON backup/restore | server persistence and managed backup |
| RO-R07 | One device cannot see another device’s local data | High | response-link transport | PostgreSQL API and authenticated staff sessions |
| RO-R08 | Public demo is mistaken for production CRM | High | visible pilot wording and documentation | separate production domain and release admission gate |
| RO-R09 | Templates create incorrect or misleading prices | Medium | editable values and owner guidance | owner-controlled catalog, versioning, and approval |
| RO-R10 | External messenger previews expose proposal details | Medium | no personal data rule | opaque server token rather than payload-in-URL |
