const QUADROS = {
  I: [
    { cat: 1, height: 9, below: 1 },
    { cat: 2, height: 28, below: 3 },
    { cat: 3, height: 50, below: 5 },
    { cat: 4 }
  ],
  II: {
    building: [
      { cat: 1, height: 9, area: 3200, below: 1 },
      { cat: 2, height: 28, area: 9600, below: 3 },
      { cat: 3, height: 28, area: 32000, below: 5 },
      { cat: 4 }
    ],
    outdoor: [{ cat: 1, outdoorOnly: true }]
  },
  III: [
    { cat: 1, height: 9, occupancy: 100 },
    { cat: 2, height: 28, occupancy: 1000 },
    { cat: 3, height: 50, occupancy: 5000 },
    { cat: 4 }
  ],
  IV: [
    { cat: 1, height: 9, occupancy: 100, riskDE: 25, requireIndependentD: true },
    { cat: 2, height: 9, occupancy: 500, riskDE: 100 },
    { cat: 3, height: 28, occupancy: 1500, riskDE: 400 },
    { cat: 4 }
  ],
  V: [
    { cat: 1, height: 9, occupancy: 100, riskDE: 25, requireIndependentD: true },
    { cat: 2, height: 9, occupancy: 500, riskDE: 100 },
    { cat: 3, height: 28, occupancy: 1500, riskDE: 400 },
    { cat: 4 }
  ],
  VI: {
    building: [
      { cat: 1, height: 9, below: 0, occupancy: 100 },
      { cat: 2, height: 28, below: 1, occupancy: 1000 },
      { cat: 3, height: 28, below: 2, occupancy: 5000 },
      { cat: 4 }
    ],
    outdoor: [
      { cat: 1, occupancy: 1000 },
      { cat: 2, occupancy: 15000 },
      { cat: 3, occupancy: 40000 },
      { cat: 4 }
    ]
  },
  VII: [
    { cat: 1, height: 9, occupancy: 100, riskDE: 50, requireIndependentE: true },
    { cat: 2, height: 28, occupancy: 500, riskDE: 200 },
    { cat: 3, height: 28, occupancy: 1500, riskDE: 800 },
    { cat: 4 }
  ],
  VIII: [
    { cat: 1, height: 9, below: 0, occupancy: 100 },
    { cat: 2, height: 28, below: 1, occupancy: 1000 },
    { cat: 3, height: 28, below: 2, occupancy: 5000 },
    { cat: 4 }
  ],
  IX: {
    building: [
      { cat: 1, height: 9, below: 0, occupancy: 100 },
      { cat: 2, height: 28, below: 1, occupancy: 1000 },
      { cat: 3, height: 28, below: 2, occupancy: 5000 },
      { cat: 4 }
    ],
    outdoor: [
      { cat: 1, occupancy: 1000 },
      { cat: 2, occupancy: 15000 },
      { cat: 3, occupancy: 40000 },
      { cat: 4 }
    ]
  },
  X: [
    { cat: 1, height: 9, occupancy: 100 },
    { cat: 2, height: 28, occupancy: 500 },
    { cat: 3, height: 28, occupancy: 1500 },
    { cat: 4 }
  ],
  XI: [
    { cat: 1, height: 9, below: 0, occupancy: 100, fld: 1000 },
    { cat: 2, height: 28, below: 1, occupancy: 500, fld: 10000 },
    { cat: 3, height: 28, below: 2, occupancy: 1500, fld: 30000 },
    { cat: 4 }
  ],
  XII: {
    building: [
      { cat: 1, below: 0, fld: 500 },
      { cat: 2, below: 1, fld: 5000 },
      { cat: 3, below: 1, fld: 15000 },
      { cat: 4 }
    ],
    outdoor: [
      { cat: 1, fld: 1000 },
      { cat: 2, fld: 10000 },
      { cat: 3, fld: 30000 },
      { cat: 4 }
    ]
  }
};

const AUTOPROTECAO = {
  I: { 1: [], 2: [], 3: ["Registos de segurança", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"], 4: ["Registos de segurança", "Procedimentos de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"] },
  II: { 1: ["Registos de segurança", "Procedimentos de prevenção"], 2: ["Registos de segurança", "Procedimentos de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"], 3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"], 4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"] },
  III: { 1: ["Registos de segurança", "Procedimentos de prevenção"], 2: ["Registos de segurança", "Procedimentos de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"], 3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"], 4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"] },
  IV: {
    '1-no': ["Registos de segurança", "Procedimentos de prevenção"],
    '1-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-no': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  V: null,
  VI: null,
  VII: {
    '1-no': ["Registos de segurança", "Procedimentos de prevenção"],
    '1-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-no': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  VIII: null, IX: null, X: null, XI: null, XII: null
};
AUTOPROTECAO.V = AUTOPROTECAO.IV;
AUTOPROTECAO.VI = AUTOPROTECAO.III;
AUTOPROTECAO.VIII = AUTOPROTECAO.III;
AUTOPROTECAO.IX = AUTOPROTECAO.III;
AUTOPROTECAO.X = AUTOPROTECAO.III;
AUTOPROTECAO.XI = AUTOPROTECAO.III;
AUTOPROTECAO.XII = AUTOPROTECAO.III;

const SIMULACROS = {
  I: { 4: '2 anos' },
  II: { 3: '2 anos', 4: '2 anos' },
  VI: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  IX: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  III: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  VIII: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  X: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  XI: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  XII: { 2: '2 anos', 3: '2 anos', 4: '1 ano' },
  IV: { 2: '1 ano', 3: '1 ano', 4: '1 ano' },
  V: { 2: '1 ano', 3: '1 ano', 4: '1 ano' },
  VII: { 2: '1 ano', 3: '1 ano', 4: '1 ano' }
};

const LABELS = {
  I: 'Habitacionais', II: 'Estacionamentos', III: 'Administrativos', IV: 'Escolares', V: 'Hospitalares e lares de idosos',
  VI: 'Espetáculos e reuniões públicas', VII: 'Hoteleiros e restauração', VIII: 'Comerciais e gares de transportes',
  IX: 'Desportivos e de lazer', X: 'Museus e galerias de arte', XI: 'Bibliotecas e arquivos', XII: 'Industriais, oficinas e armazéns'
};

const FIELD_CONFIG = {
  I: { show: ['height', 'belowGradeFloors'], lock: { spaceType: 'building' } },
  II: { show: ['spaceType', 'height', 'belowGradeFloors', 'area'] },
  III: { show: ['height', 'occupancy'], lock: { spaceType: 'building' } },
  IV: { show: ['height', 'occupancy', 'riskDEOccupancy', 'hasRiskDE', 'independentExitD'], lock: { spaceType: 'building' } },
  V: { show: ['height', 'occupancy', 'riskDEOccupancy', 'hasRiskDE', 'independentExitD'], lock: { spaceType: 'building' } },
  VI: { show: ['spaceType', 'height', 'belowGradeFloors', 'occupancy'] },
  VII: { show: ['height', 'occupancy', 'riskDEOccupancy', 'hasRiskDE', 'independentExitE'], lock: { spaceType: 'building' } },
  VIII: { show: ['height', 'belowGradeFloors', 'occupancy'], lock: { spaceType: 'building' } },
  IX: { show: ['spaceType', 'height', 'belowGradeFloors', 'occupancy'] },
  X: { show: ['height', 'occupancy'], lock: { spaceType: 'building' } },
  XI: { show: ['height', 'belowGradeFloors', 'occupancy', 'fireLoadDensity', 'warehouseOnly'], lock: { spaceType: 'building' } },
  XII: { show: ['spaceType', 'belowGradeFloors', 'fireLoadDensity', 'warehouseOnly'] }
};

const form = document.getElementById('caseForm');
const report = document.getElementById('report');
const loadDemoBtn = document.getElementById('loadDemo');
const clearFormBtn = document.getElementById('clearForm');
const exportPdfBtn = document.getElementById('exportPdf');
const exportJsonBtn = document.getElementById('exportJson');
const utSelect = document.getElementById('utSelect');
const spaceTypeSelect = document.getElementById('spaceType');
const dynamicHint = document.getElementById('dynamicHint');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = readForm();
  const result = analyzeCase(data);
  renderReport(data, result);
  document.getElementById('resultadoSec').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

utSelect.addEventListener('change', syncProgressiveForm);
spaceTypeSelect.addEventListener('change', syncProgressiveForm);
form.elements.hasRiskDE.addEventListener('change', syncProgressiveForm);

clearFormBtn.addEventListener('click', () => {
  form.reset();
  syncProgressiveForm();
  report.innerHTML = '<div class="placeholder">Formulário limpo.</div>';
});

loadDemoBtn.addEventListener('click', () => {
  const demo = {
    projectName: 'Armazém Central Demo', entity: 'Empresa Exemplo, Lda.', rs: 'João Silva', ut: 'XII', spaceType: 'building',
    height: 0, belowGradeFloors: 0, occupancy: 0, riskDEOccupancy: 0, area: 0, fireLoadDensity: 4200,
    warehouseOnly: 'yes', hasRiskDE: 'no', independentExitD: 'no', independentExitE: 'no',
    notes: 'Armazém com receção de mercadorias, zona de picking, área administrativa anexa e circulação de empilhadores.'
  };
  for (const [key, value] of Object.entries(demo)) {
    if (form.elements[key]) form.elements[key].value = value;
  }
  syncProgressiveForm();
});

exportJsonBtn.addEventListener('click', () => {
  const data = readForm();
  const result = analyzeCase(data);
  const blob = new Blob([JSON.stringify({ data, result }, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `${slug(data.projectName || 'scie-map')}.json`);
});

exportPdfBtn.addEventListener('click', async () => {
  if (!report.innerText.trim() || report.querySelector('.placeholder')) {
    alert('Primeiro gere o relatório.');
    return;
  }
  const { jsPDF } = window.jspdf;
  const canvas = await html2canvas(report, { scale: 2, backgroundColor: '#ffffff' });
  const img = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const width = 190;
  const pageHeight = 277;
  const imgHeight = canvas.height * width / canvas.width;
  let remaining = imgHeight;
  let y = 10;
  pdf.addImage(img, 'PNG', 10, y, width, imgHeight);
  remaining -= pageHeight;
  while (remaining > 0) {
    pdf.addPage();
    y = 10 - (imgHeight - remaining);
    pdf.addImage(img, 'PNG', 10, y, width, imgHeight);
    remaining -= pageHeight;
  }
  const name = slug((form.elements.projectName.value || 'dossier-scie')) + '.pdf';
  pdf.save(name);
});

function readForm() {
  const data = Object.fromEntries(new FormData(form).entries());
  ['height','belowGradeFloors','occupancy','riskDEOccupancy','area','fireLoadDensity'].forEach(k => data[k] = Number(data[k] || 0));
  return data;
}

function syncProgressiveForm() {
  const ut = utSelect.value;
  const config = FIELD_CONFIG[ut];
  const visible = new Set(config.show);
  document.querySelectorAll('[data-field]').forEach(node => {
    const key = node.dataset.field;
    const shouldShow = visible.has(key);
    node.classList.toggle('hidden', !shouldShow);
    const input = node.querySelector('input, select, textarea');
    if (input && !shouldShow && ['number'].includes(input.type)) input.value = 0;
  });

  // lock/unlock space type when the law does not provide an outdoor branch for that UT
  if (config.lock?.spaceType) {
    spaceTypeSelect.value = config.lock.spaceType;
    spaceTypeSelect.disabled = true;
  } else {
    spaceTypeSelect.disabled = false;
  }

  const outdoor = spaceTypeSelect.value === 'outdoor';
  const hasRiskDE = form.elements.hasRiskDE.value === 'yes';

  // contextual hiding
  toggleField('height', visible.has('height') && !(outdoor && ['VI','IX'].includes(ut)));
  toggleField('belowGradeFloors', visible.has('belowGradeFloors') && !(outdoor && ['VI','IX'].includes(ut)));
  toggleField('independentExitD', visible.has('independentExitD') && hasRiskDE);
  toggleField('independentExitE', visible.has('independentExitE') && hasRiskDE);
  toggleField('riskDEOccupancy', visible.has('riskDEOccupancy') && hasRiskDE);
  toggleField('occupancy', visible.has('occupancy'));
  if (!hasRiskDE) {
    form.elements.riskDEOccupancy.value = 0;
    form.elements.independentExitD.value = 'no';
    form.elements.independentExitE.value = 'no';
  }
  if (ut === 'II' && outdoor) {
    form.elements.height.value = 0;
    form.elements.belowGradeFloors.value = 0;
  }
  dynamicHint.textContent = buildHint(ut, outdoor, hasRiskDE);
}

function toggleField(name, show) {
  const node = document.querySelector(`[data-field="${name}"]`);
  if (node) node.classList.toggle('hidden', !show);
}

function buildHint(ut, outdoor, hasRiskDE) {
  const parts = [`UT ${ut} · ${LABELS[ut]}.`];
  if (ut === 'II' && outdoor) parts.push('Ao ar livre, o quadro legal conduz diretamente à 1.ª categoria.');
  if (['IV','V','VII'].includes(ut) && !hasRiskDE) parts.push('Os critérios relativos a locais de risco D/E e às respetivas saídas independentes só são avaliados quando esses locais existem.');
  if (['VI', 'IX'].includes(ut) && outdoor) parts.push('Ao ar livre, a classificação depende apenas do efetivo.');
  if (ut === 'XII') parts.push('Na UT XII a classificação depende dos pisos abaixo do plano de referência e da densidade de carga de incêndio modificada.');
  if (ut === 'XI') parts.push('Na UT XI a classificação depende de altura, pisos enterrados, efetivo e densidade de carga de incêndio modificada.');
  if (['IV','V','VII'].includes(ut)) parts.push(hasRiskDE ? 'Mantêm-se ativos os campos de efetivo em locais de risco e saída independente.' : 'Sem locais de risco D/E, só ficam ativos os fatores gerais aplicáveis.');
  return parts.join(' ');
}

function analyzeCase(data) {
  const categoryInfo = calculateCategory(data);
  const category = categoryInfo.category;
  const autoprotecao = getAutoprotectionRequirements(data, category);
  const requiresPEI = autoprotecao.includes('Plano de emergência interno');
  const needsSSI = requiresPEI;
  const competence = category === 1 ? 'Município' : 'ANEPC';
  const periodicity = getSimulacroPeriodicity(data, category, autoprotecao);
  return {
    category,
    riskLabel: categoryLabel(category),
    competence,
    autoprotecao,
    requiresPEI,
    needsSSI,
    periodicity,
    basis: describeBasis(data, category, categoryInfo),
    evaluation: categoryInfo,
    plans: buildPlans(data, category, autoprotecao),
    procedures: buildProcedures(data),
    organization: buildOrganization(data, requiresPEI),
    records: buildRecords(),
    formation: buildFormation(data, requiresPEI),
    annexes: buildAnnexes(data, requiresPEI)
  };
}

function calculateCategory(data) {
  const ut = data.ut;
  const config = QUADROS[ut];
  let rules = Array.isArray(config) ? config : config[data.spaceType] || config.building || config;

  if (ut === 'XI' || ut === 'XII') {
    rules = rules.map(rule => ({ ...rule, fld: adjustWarehouseLimit(rule.fld, data.warehouseOnly === 'yes') }));
  }
  if (ut === 'IV' && data.hasRiskDE === 'no') {
    rules = rules.map(rule => (rule.cat === 2 || rule.cat === 3) ? { ...rule, occupancy: rule.occupancy * 1.5 } : rule);
  }

  const checks = [];
  for (const rule of rules) {
    if (rule.cat === 4) {
      checks.push({ cat: 4, pass: true, details: [] });
      continue;
    }
    const evaluation = evaluateRule(data, ut, rule);
    checks.push(evaluation);
    if (evaluation.pass) {
      return { category: rule.cat, checks, decisiveRule: evaluation };
    }
  }
  return { category: 4, checks, decisiveRule: checks.at(-1) };
}

function evaluateRule(data, ut, rule) {
  const details = [];
  if ('height' in rule) details.push(checkMetric('Altura', data.height, rule.height, '≤', 'm'));
  if ('below' in rule) details.push(checkMetric('Pisos abaixo do plano de referência', data.belowGradeFloors, rule.below, '≤', ''));
  if ('occupancy' in rule) details.push(checkMetric('Efetivo total', data.occupancy, rule.occupancy, '≤', ''));
  const hasRiskDE = data.hasRiskDE === 'yes';
  if ('riskDE' in rule && hasRiskDE) details.push(checkMetric('Efetivo em locais de risco D/E', data.riskDEOccupancy, rule.riskDE, '≤', ''));
  if ('area' in rule) details.push(checkMetric('Área bruta', data.area, rule.area, '≤', 'm²'));
  if ('fld' in rule) details.push(checkMetric('Densidade de carga de incêndio modificada', data.fireLoadDensity, rule.fld, '≤', 'MJ/m²'));
  if (rule.requireIndependentD && hasRiskDE) details.push(checkBoolean('Saída independente direta ao exterior para locais de risco D', data.independentExitD === 'yes'));
  if (rule.requireIndependentE && hasRiskDE) details.push(checkBoolean('Saída independente direta ao exterior para locais de risco E', data.independentExitE === 'yes'));
  if (rule.outdoorOnly) details.push({ label: 'Recinto ao ar livre', pass: data.spaceType === 'outdoor', actual: data.spaceType, limit: 'outdoor' });
  return { cat: rule.cat, pass: details.every(d => d.pass), details, rule };
}

function checkMetric(label, actual, limit, operator, unit) {
  return { label, actual, limit, operator, unit, pass: actual <= limit };
}

function checkBoolean(label, pass) {
  return { label, actual: pass ? 'Sim' : 'Não', limit: 'Sim', operator: '=', unit: '', pass };
}

function getAutoprotectionRequirements(data, category) {
  const table = AUTOPROTECAO[data.ut];
  if (data.ut === 'IV' || data.ut === 'V' || data.ut === 'VII') {
    if (category >= 3) return table[category];
    const key = `${category}-${data.hasRiskDE}`;
    return table[key] || [];
  }
  return table[category] || [];
}

function getSimulacroPeriodicity(data, category, requirements) {
  if (!requirements.includes('Simulacros')) return 'Não exigível pelo quadro de MAP aplicável';
  const map = SIMULACROS[data.ut] || {};
  return map[category] || 'Verificar caso específico';
}

function adjustWarehouseLimit(limit, warehouseOnly) {
  if (!limit) return limit;
  return warehouseOnly ? limit * 10 : limit;
}

function describeBasis(data, category, categoryInfo) {
  const points = [
    `Utilização-tipo ${data.ut} · ${LABELS[data.ut]}.`,
    `Categoria apurada: ${category}.ª categoria (${categoryLabel(category)}).`,
    `A categoria atribuída corresponde à mais baixa que satisfaz integralmente todos os fatores aplicáveis.`
  ];
  if (['I','III','IV','V','VI','VII','VIII','IX','X','XI'].includes(data.ut) && !(data.spaceType === 'outdoor' && ['VI','IX'].includes(data.ut))) points.push(`Altura considerada: ${formatNumber(data.height)} m.`);
  if (['I','II','VI','VIII','IX','XI','XII'].includes(data.ut) && !(data.spaceType === 'outdoor' && ['VI','IX'].includes(data.ut))) points.push(`Pisos abaixo do plano de referência: ${data.belowGradeFloors}.`);
  if (data.ut === 'II' && data.spaceType === 'building') points.push(`Área bruta considerada: ${formatNumber(data.area)} m².`);
  if (['III','IV','V','VI','VII','VIII','IX','X','XI'].includes(data.ut) || (['VI','IX'].includes(data.ut) && data.spaceType === 'outdoor')) points.push(`Efetivo considerado: ${data.occupancy}.`);
  if (['IV','V','VII'].includes(data.ut)) {
    points.push(data.hasRiskDE === 'yes' ? `Efetivo em locais de risco D/E: ${data.riskDEOccupancy}.` : 'Sem locais de risco D/E, pelo que esse fator não foi considerado na classificação.');
  }
  if (['XI','XII'].includes(data.ut)) points.push(`Densidade de carga de incêndio modificada: ${formatNumber(data.fireLoadDensity)} MJ/m².`);
  if (data.ut === 'XI' || data.ut === 'XII') points.push(data.warehouseOnly === 'yes' ? 'Aplicado o agravamento legal de 10× aos limites da densidade de carga de incêndio para utilização exclusivamente de armazém.' : 'Sem aplicação do multiplicador de 10×, por não se tratar de utilização exclusivamente de armazém.');
  if (data.ut === 'IV' && data.hasRiskDE === 'no') points.push('Aplicado o aumento legal de 50% aos limites máximos do efetivo das 2.ª e 3.ª categorias, por inexistência de locais de risco D ou E.');
  const blockers = categoryInfo.checks.filter(c => !c.pass && c.cat < category).map(c => `${c.cat}.ª categoria: ${c.details.filter(d => !d.pass).map(formatFailure).join('; ')}`);
  if (blockers.length) points.push(`Critérios excedidos nas categorias inferiores: ${blockers.join(' | ')}.`);
  return points;
}

function formatFailure(detail) {
  const limit = detail.limit !== undefined ? `${detail.operator} ${formatNumber(detail.limit)}${detail.unit ? ' ' + detail.unit : ''}` : '';
  const actual = typeof detail.actual === 'number' ? `${formatNumber(detail.actual)}${detail.unit ? ' ' + detail.unit : ''}` : String(detail.actual);
  return `${detail.label} = ${actual} (limite ${limit})`;
}

function buildPlans(data, category, autoprotecao) {
  const planos = [];
  if (autoprotecao.includes('Plano de prevenção')) {
    planos.push({
      title: 'Plano de prevenção',
      items: [
        'Identificação formal da utilização-tipo, entidade exploradora, data de entrada em funcionamento, RS e delegados de segurança eventualmente designados.',
        'Plantas à escala 1:100 ou 1:200 com classificação de risco, efetivo previsto por local, vias horizontais e verticais de evacuação e localização dos dispositivos e equipamentos de SCIE.',
        'Integração expressa dos procedimentos de exploração, vigilância, manutenção, controlo de trabalhos perigosos e gestão de alterações.',
        'Atualização sempre que ocorram modificações relevantes na utilização-tipo e manutenção de exemplar disponível no posto de segurança.'
      ]
    });
  }

  planos.push({
    title: 'Procedimentos de prevenção',
    items: [
      'Assegurar a acessibilidade permanente dos meios de socorro, dos hidrantes exteriores e dos caminhos de evacuação.',
      'Garantir a eficácia da compartimentação, do isolamento e da proteção passiva contra incêndio, evitando obstruções, perfurações indevidas ou portas resistentes ao fogo desativadas.',
      'Manter acessíveis os meios de alarme e de intervenção, com vigilância reforçada dos espaços de maior risco ou normalmente desocupados.',
      'Conservar os espaços em condições adequadas de limpeza e arrumação, incluindo regras para resíduos, embalagens, cargas combustíveis e arrumos temporários.',
      'Definir regras de segurança na produção, manipulação e armazenamento de matérias ou substâncias perigosas.',
      'Controlar trabalhos de manutenção, recuperação, beneficiação ou remodelação que agravem o risco de incêndio ou afetem a evacuação e os sistemas de segurança.',
      'Manter programas de manutenção com calendários e listas de verificação periódica para instalações técnicas, equipamentos e sistemas de SCIE.'
    ]
  });

  planos.push({
    title: 'Procedimentos em caso de emergência',
    items: [
      'Definir os procedimentos de alarme a cumprir em caso de deteção ou perceção de incêndio.',
      'Definir os procedimentos de alerta a entidades internas e externas, incluindo o contacto com 112 e corpo de bombeiros competente.',
      'Estabelecer as regras para evacuação rápida e segura dos espaços em risco, total ou parcial, conforme o cenário.',
      'Descrever as técnicas de utilização dos meios de primeira intervenção e de outros meios de atuação em caso de incêndio.',
      'Estabelecer a receção, orientação e encaminhamento dos bombeiros à chegada ao local.'
    ]
  });

  if (autoprotecao.includes('Plano de emergência interno')) {
    planos.push({
      title: 'Plano de emergência interno',
      items: [
        'Definição da organização a adotar em situação de emergência, com organogramas hierárquicos e funcionais do SSI.',
        'Identificação das entidades internas e externas a contactar e respetivas vias de comunicação.',
        'Plano de atuação com procedimentos para alarme, difusão de alerta, coordenação da evacuação, corte de energias, fecho de portas resistentes ao fogo, controlo de fumos, primeira intervenção, primeiros socorros e proteção de pontos nevrálgicos.',
        'Plano de evacuação com referenciação de vias, zonas de refúgio, pontos de encontro, ajuda a pessoas com mobilidade ou perceção limitadas e confirmação final de abandono dos espaços.',
        'Anexo com instruções de segurança e anexo com plantas de emergência por piso, podendo incluir esquemas de emergência.',
        'Atualização sempre que a utilização-tipo sofra alterações relevantes e disponibilidade permanente de exemplar no posto de segurança.'
      ]
    });
  }

  planos.push({
    title: 'Instruções de segurança e afixações',
    items: [
      'Elaborar e afixar instruções de segurança nos locais de risco C, D, E e F, com procedimentos de prevenção e de emergência aplicáveis ao espaço.',
      'Nos locais de risco D e E, acompanhar as instruções com planta de emergência simplificada contendo vias de evacuação, meios de alarme e meios de primeira intervenção.',
      'Quando não existir plano de emergência interno, afixar instruções simplificadas com alarme, alerta e técnicas de utilização dos meios de primeira intervenção.',
      'Garantir a existência de instruções gerais de segurança nas plantas de emergência.'
    ]
  });

  if (['XI', 'XII'].includes(data.ut)) {
    planos.push({
      title: 'Memória técnica da densidade de carga de incêndio modificada',
      items: [
        'Identificação do método de cálculo adotado: determinístico ou probabilístico.',
        'No método probabilístico, discriminar qsi ou qvi, áreas Si, alturas de armazenagem hi quando aplicável, coeficientes de combustibilidade Ci e coeficientes de ativação Rai.',
        'Apresentar o cálculo por compartimento corta-fogo e o valor global ponderado da utilização-tipo.',
        'Identificar expressamente se a utilização é exclusivamente de armazém, para aplicação dos limites majorados legalmente.'
      ]
    });
  }

  return planos;
}

function buildProcedures(data) {
  return [
    'Deteção ou perceção de incêndio → acionar o alarme interno segundo as instruções estabelecidas.',
    'Transmitir o alerta à cadeia interna definida e contactar 112 / bombeiros.',
    'Executar, quando seguro, o corte de energia elétrica, combustíveis ou outros utilitários previstos no plano.',
    'Iniciar evacuação ordenada dos espaços afetados, com prioridade aos ocupantes vulneráveis.',
    'Utilizar apenas meios de primeira intervenção adequados ao foco e sem exposição indevida ao risco.',
    'Receber e encaminhar os bombeiros, fornecendo informação sobre o foco, pessoas em risco, instalações técnicas e substâncias perigosas.',
    'Após a emergência, registar a ocorrência, repor condições de segurança e rever medidas corretivas.'
  ];
}

function buildOrganization(data, requiresPEI) {
  const base = [
    'Designação formal do Responsável de Segurança (RS) e definição da cadeia de substituição.',
    'Nomeação dos elementos das equipas de segurança com atribuições, missões e contactos atualizados.',
    'Dimensionamento das equipas fundamentado nas características de exploração, lotação, horários e riscos específicos da utilização-tipo.'
  ];
  if (requiresPEI) {
    base.push('Implementação de Serviço de Segurança contra Incêndio (SSI), com delegado de segurança a exercer funções de chefe de equipa.');
    base.push('Manutenção do posto de segurança permanentemente ocupado, durante o funcionamento, por pelo menos um elemento da equipa.');
    base.push('Nos estabelecimentos com público, garantir que o delegado de segurança permanece mobilizável e contactável enquanto houver público presente.');
  }
  return base;
}

function buildRecords() {
  return [
    'Relatórios de vistoria, inspeção ou fiscalização das condições de segurança.',
    'Registo de anomalias detetadas em verificações, conservação ou manutenção, com descrição, impacte, data de deteção e data de resolução.',
    'Histórico das ações de manutenção efetuadas em instalações técnicas, equipamentos e sistemas de segurança.',
    'Descrição sumária de modificações, alterações e trabalhos perigosos, com datas de início e conclusão.',
    'Relatórios de ocorrências relacionadas com SCIE, incluindo falsos alarmes, princípios de incêndio e atuação das equipas internas.',
    'Cópias de relatórios de intervenção dos bombeiros.',
    'Relatórios sucintos de ações de formação e simulacros.',
    'Arquivo mínimo de 10 anos, em suporte papel ou digital.'
  ];
}

function buildFormation(data, requiresPEI) {
  const items = [
    'Sensibilização geral para funcionários, colaboradores e demais pessoas que exerçam atividade por mais de 30 dias/ano no espaço.',
    'Programação para que os destinatários frequentem a sensibilização no prazo máximo de 60 dias após a entrada ao serviço.',
    'Conteúdos mínimos: familiarização com os espaços e riscos, prevenção, alarme, atuação em emergência, evacuação e utilização básica de extintores portáteis.',
    'Formação específica para elementos que trabalhem em locais de risco C, D ou F ou em atividades com risco agravado.'
  ];
  if (requiresPEI) {
    items.push('Formação específica das equipas para emissão do alerta, evacuação, manobra de sistemas, receção dos bombeiros, direção das operações e restantes tarefas do PEI.');
  }
  return items;
}

function buildAnnexes(data, requiresPEI) {
  const annexes = [
    'Plantas à escala 1:100 ou 1:200 com classificação de risco, efetivos, vias de evacuação e equipamentos de SCIE.',
    'Contactos internos e externos de emergência.',
    'Mapa de manutenção e listas de verificação periódica.',
    'Minutas de registos de segurança, ocorrências e trabalhos perigosos.',
    'Instruções de segurança específicas por local de risco.'
  ];
  if (requiresPEI) annexes.push('Plantas de emergência por piso e organogramas do SSI.');
  if (['XI','XII'].includes(data.ut)) annexes.push('Memória de cálculo da densidade de carga de incêndio modificada, com coeficientes Ci e Rai e discriminação por zonas/compartimentos.');
  return annexes;
}

function categoryLabel(n) {
  return ({1:'risco reduzido',2:'risco moderado',3:'risco elevado',4:'risco muito elevado'})[n];
}

function renderReport(data, result) {
  const autoprotecaoRows = result.autoprotecao.length
    ? result.autoprotecao.map(item => `<li>${item}</li>`).join('')
    : '<li>Sem medidas de autoproteção exigíveis pelo quadro aplicável para esta combinação.</li>';

  const planSections = result.plans.map(plan => `
    <div class="section">
      <h3>${plan.title}</h3>
      <ul>${plan.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `).join('');

  const evaluationRows = result.evaluation.checks.filter(c => c.cat < 4).map(check => `
    <div class="decision-card ${check.pass ? 'ok' : 'fail'}">
      <h4>${check.cat}.ª categoria</h4>
      <ul>
        ${check.details.map(detail => `<li>${detail.pass ? '✓' : '✗'} ${escapeHtml(detail.label)} — valor: ${escapeHtml(String(typeof detail.actual === 'number' ? formatNumber(detail.actual) : detail.actual))}${detail.unit ? ' ' + detail.unit : ''} · limite ${escapeHtml(detail.operator)} ${escapeHtml(String(typeof detail.limit === 'number' ? formatNumber(detail.limit) : detail.limit))}${detail.unit ? ' ' + detail.unit : ''}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  report.innerHTML = `
    <div class="report-cover section">
      <span class="badge r${result.category}">${result.category}.ª categoria · ${result.riskLabel}</span>
      <h1>${escapeHtml(data.projectName || 'Dossiê MAP')}</h1>
      <p><strong>Entidade:</strong> ${escapeHtml(data.entity || '—')}</p>
      <p><strong>Responsável de Segurança:</strong> ${escapeHtml(data.rs || '—')}</p>
      <p><strong>Utilização-tipo:</strong> ${data.ut} · ${LABELS[data.ut]}</p>
      <p class="small">Documento base gerado automaticamente para apoio à preparação de medidas de autoproteção.</p>
    </div>

    <div class="kpis">
      <div class="kpi"><span class="label">Categoria</span><div class="value">${result.category}.ª</div></div>
      <div class="kpi"><span class="label">Entidade competente</span><div class="value">${result.competence}</div></div>
      <div class="kpi"><span class="label">Plano de emergência interno</span><div class="value">${result.requiresPEI ? 'Sim' : 'Não'}</div></div>
      <div class="kpi"><span class="label">Simulacros</span><div class="value">${result.periodicity}</div></div>
    </div>

    <div class="section">
      <h3>1. Fundamentação da classificação</h3>
      <ul>${result.basis.map(item => `<li>${item}</li>`).join('')}</ul>
      <p>Regra de decisão: a categoria atribuída é a mais baixa que satisfaz integralmente os critérios aplicáveis; excedido um valor, sobe para a categoria seguinte.</p>
    </div>

    <div class="section">
      <h3>2. Grelha de decisão por categoria</h3>
      <div class="decision-grid">${evaluationRows}</div>
    </div>

    <div class="section">
      <h3>3. Medidas de autoproteção exigíveis</h3>
      <ul>${autoprotecaoRows}</ul>
      <p><strong>Prazo de submissão:</strong> em construção nova, alteração, ampliação ou mudança de uso, o processo deve ser entregue até 30 dias antes da entrada em funcionamento.</p>
    </div>

    ${planSections}

    <div class="section">
      <h3>4. Organização da segurança</h3>
      <ul>${result.organization.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>5. Procedimentos gerais em caso de emergência</h3>
      <ul>${result.procedures.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>6. Registos de segurança</h3>
      <ul>${result.records.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>7. Formação e treino</h3>
      <ul>${result.formation.map(item => `<li>${item}</li>`).join('')}</ul>
      <p><strong>Periodicidade dos simulacros aplicável:</strong> ${result.periodicity}.</p>
    </div>

    <div class="section">
      <h3>8. Anexos técnicos a preparar</h3>
      <ul>${result.annexes.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>9. Observações do caso</h3>
      <p>${escapeHtml(data.notes || 'Sem observações adicionais.')}</p>
    </div>

    <div class="section">
      <h3>10. Avisos de validação</h3>
      <ul>
        <li>As plantas e esquemas devem ser confirmados com base nas peças desenhadas reais do edifício ou recinto.</li>
        <li>Nos casos de UT XI e XII, a densidade de carga de incêndio modificada deve ser calculada e documentada de forma técnica.</li>
        <li>Em utilizações mistas, prevalecem as exigências mais gravosas nos espaços comuns.</li>
        <li>Casos de perigosidade atípica exigem solução específica fundamentada e aprovação competente.</li>
      </ul>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatNumber(n) {
  return new Intl.NumberFormat('pt-PT', { maximumFractionDigits: 2 }).format(n || 0);
}

function slug(str) {
  return String(str).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'ficheiro';
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

syncProgressiveForm();
