// AION Service CRM v0.6 — schema logic correction for QC-disabled issue gate.
// The schema says QC is mandatory before payment/issue only when it is enabled in Settings.
screens.issue=()=>{
 const qcOk=!state.qcMandatory||state.qcPassed;
 const ok=qcOk&&(state.paymentOk||state.debtAllowed);
 const qcLabel=state.qcMandatory?(state.qcPassed?'✓ QC пройден':'× QC не пройден'):'QC отключён настройкой';
 return `${section('Условия для выдачи',
 `<div class="chips"><span class="chip ${qcOk?'ok':'bad'}">${qcLabel}</span><span class="chip ${state.paymentOk?'ok':'warn'}">${state.paymentOk?'✓ Оплата OK':'Оплата не подтверждена'}</span>${state.debtAllowed?'<span class="chip warn">Разрешён долг</span>':''}</div>`)}
${btn('Выдать клиенту',ok?'issue-client':'issue-blocked','',ok?'primary':'')}
${!state.paymentOk?btn(state.debtAllowed?'Отменить разрешение долга':'Разрешить долг (исключение)','toggle-debt','',''):''}
${btn('Документы','', 'documents')}`;
};
