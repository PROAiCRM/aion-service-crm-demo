import assert from 'node:assert/strict';
import {
  createInitialState, createOffer, buildPublicOffer, createDecision, applyDecision,
  encodeEnvelope, decodeEnvelope, createBackup, restoreBackup, calculateMetrics,
  markOfferSent, convertToOrderDraft, OFFER_STATUSES, checksum
} from './repair-offer-core-v0-2.js';

const settings = createInitialState().settings;
const offer = createOffer({
  customerLabel: 'Тест 24',
  device: 'iPhone 13',
  issue: 'Замена дисплея',
  validityDays: 3,
  options: [
    { title: 'Эконом', price: 8900, duration: '2 часа', warranty: '30 дней', detail: 'Совместимая деталь' },
    { title: 'Рекомендуемый', price: 12900, duration: '1 час', warranty: '90 дней', detail: 'OLED', recommended: true }
  ]
}, settings);
assert.equal(offer.status, OFFER_STATUSES.DRAFT);
assert.equal(offer.options.length, 2);
assert.equal(offer.options.filter(option => option.recommended).length, 1);

const sent = markOfferSent(offer);
assert.equal(sent.status, OFFER_STATUSES.SENT);
const publicOffer = buildPublicOffer(sent, settings);
const encodedOffer = encodeEnvelope('offer', publicOffer);
const decodedOffer = decodeEnvelope(encodedOffer, 'offer');
assert.equal(decodedOffer.offerId, offer.id);
assert.equal(decodedOffer.offerChecksum, publicOffer.offerChecksum);

const response = createDecision(decodedOffer, {
  type: 'approved',
  selectedOptionId: decodedOffer.options[1].id,
  customerNote: 'Согласовано',
  consent: true
});
const sentWithChecksum = { ...sent, lastPublicChecksum: publicOffer.offerChecksum };
const approved = applyDecision(sentWithChecksum, response);
assert.equal(approved.status, OFFER_STATUSES.APPROVED);
assert.equal(approved.decision.selectedOptionId, offer.options[1].id);
assert.equal(approved.decision.consent, true);

const order = convertToOrderDraft(approved);
assert.equal(order.status, OFFER_STATUSES.CONVERTED);
assert.equal(order.orderDraft.agreedPrice, 12900);

const responseEnvelope = encodeEnvelope('response', response);
assert.equal(decodeEnvelope(responseEnvelope, 'response').responseId, response.responseId);
assert.throws(() => decodeEnvelope(`${responseEnvelope.slice(0, -1)}A`, 'response'));

const state = { ...createInitialState(), offers: [order] };
const backup = createBackup(state);
const restored = restoreBackup(backup);
assert.equal(restored.offers[0].id, order.id);
assert.equal(calculateMetrics(restored.offers).approved, 1);
assert.equal(calculateMetrics(restored.offers).agreedRevenue, 12900);

assert.throws(() => createDecision(decodedOffer, {
  type: 'approved', selectedOptionId: decodedOffer.options[0].id, consent: false
}), /ознакомление/);
assert.throws(() => applyDecision(sentWithChecksum, { ...response, offerId: 'OTHER' }), /другому предложению/);
assert.equal(checksum({ a: 1 }), checksum({ a: 1 }));

console.log('PASS create offer');
console.log('PASS cross-device offer envelope');
console.log('PASS approval and Action Receipt');
console.log('PASS response import contract');
console.log('PASS conversion to local repair draft');
console.log('PASS backup and restore');
console.log('PASS integrity and validation guards');
