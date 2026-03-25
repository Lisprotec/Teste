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
    outdoor: [{ cat: 1 }]
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
  I: {
    1: [], 2: [],
    3: ["Registos de segurança", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    4: ["Registos de segurança", "Procedimentos de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  II: {
    1: ["Registos de segurança", "Procedimentos de prevenção"],
    2: ["Registos de segurança", "Procedimentos de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  III: {
    1: ["Registos de segurança", "Procedimentos de prevenção"],
    2: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  VI: null, VIII: null, IX: null, X: null, XI: null, XII: null,
  IV: {
    '1-no': ["Registos de segurança", "Procedimentos de prevenção"],
    '1-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-no': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
    '2-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
    4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
  },
  V: null,
  VII: null
};
AUTOPROTECAO.VI = AUTOPROTECAO.III;
AUTOPROTECAO.VIII = AUTOPROTECAO.III;
AUTOPROTECAO.IX = AUTOPROTECAO.III;
AUTOPROTECAO.X = AUTOPROTECAO.III;
AUTOPROTECAO.XI = AUTOPROTECAO.III;
AUTOPROTECAO.XII = AUTOPROTECAO.III;
AUTOPROTECAO.V = AUTOPROTECAO.IV;
AUTOPROTECAO.VII = {
  '1-no': ["Registos de segurança", "Procedimentos de prevenção"],
  '1-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
  '2-no': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Ações de sensibilização e formação em SCIE"],
  '2-yes': ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
  3: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"],
  4: ["Registos de segurança", "Plano de prevenção", "Procedimentos em caso de emergência", "Plano de emergência interno", "Ações de sensibilização e formação em SCIE", "Simulacros"]
};

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

const form = document.getElementById('caseForm');
const report = document.getElementById('report');
const loadDemoBtn = document.getElementById('loadDemo');
const clearFormBtn = document.getElementById('clearForm');
const exportPdfBtn = document.getElementById('exportPdf');
const exportJsonBtn = document.getElementById('exportJson');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = readForm();
  const result = analyzeCase(data);
  renderReport(data, result);
  document.getElementById('resultadoSec').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

clearFormBtn.addEventListener('click', () => {
  form.reset();
  report.innerHTML = '<div class="placeholder">Formulário limpo.</div>';
});

loadDemoBtn.addEventListener('click', () => {
  const demo = {
    projectName: 'Armazém Central Demo', entity: 'Empresa Exemplo, Lda.', rs: 'João Silva', ut: 'XII', spaceType: 'building',
    height: 8, belowGradeFloors: 0, occupancy: 35, riskDEOccupancy: 0, area: 1800, fireLoadDensity: 4200,
    warehouseOnly: 'yes', hasRiskDE: 'no', independentExitD: 'no', independentExitE: 'no',
    notes: 'Armazém com receção de mercadorias, zona de picking, área administrativa anexa e circulação de empilhadores.'
  };
  for (const [key, value] of Object.entries(demo)) {
    if (form.elements[key]) form.elements[key].value = value;
  }
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

function analyzeCase(data) {
  const ut = data.ut;
  const category = calculateCategory(data);
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
    basis: describeBasis(data, category),
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
  if ((ut === 'IV' || ut === 'V') && data.hasRiskDE === 'no') {
    rules = rules.map(rule => {
      if (rule.cat === 2 || rule.cat === 3) return { ...rule, occupancy: rule.occupancy * 1.5 };
      return rule;
    });
  }

  for (const rule of rules) {
    if (rule.cat === 4) return 4;
    if (matchesRule(data, ut, rule)) return rule.cat;
  }
  return 4;
}

function matchesRule(data, ut, rule) {
  const tests = [];
  if ('height' in rule) tests.push(data.height <= rule.height);
  if ('below' in rule) tests.push(data.belowGradeFloors <= rule.below);
  if ('occupancy' in rule) tests.push(data.occupancy <= rule.occupancy);
  if ('riskDE' in rule) tests.push(data.riskDEOccupancy <= rule.riskDE);
  if ('area' in rule) tests.push(data.area <= rule.area);
  if ('fld' in rule) tests.push(data.fireLoadDensity <= rule.fld);
  if (rule.requireIndependentD) tests.push(data.independentExitD === 'yes');
  if (rule.requireIndependentE) tests.push(data.independentExitE === 'yes');
  return tests.every(Boolean);
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

function describeBasis(data, category) {
  const points = [
    `Utilização-tipo ${data.ut} · ${LABELS[data.ut]}.`,
    `Categoria apurada: ${category}.ª categoria (${categoryLabel(category)}).`
  ];
  if (['I','III','IV','V','VI','VII','VIII','IX','X','XI'].includes(data.ut)) points.push(`Altura considerada: ${formatNumber(data.height)} m.`);
  if (['I','II','VI','VIII','IX','XI','XII'].includes(data.ut)) points.push(`Pisos abaixo do plano de referência: ${data.belowGradeFloors}.`);
  if (['II'].includes(data.ut)) points.push(`Área considerada: ${formatNumber(data.area)} m².`);
  if (['III','IV','V','VI','VII','VIII','IX','X','XI'].includes(data.ut)) points.push(`Efetivo considerado: ${data.occupancy}.`);
  if (['IV','V','VII'].includes(data.ut)) points.push(`Efetivo em locais de risco D/E: ${data.riskDEOccupancy}.`);
  if (['XI','XII'].includes(data.ut)) points.push(`Densidade de carga de incêndio modificada: ${formatNumber(data.fireLoadDensity)} MJ/m².`);
  if (data.ut === 'XI' || data.ut === 'XII') points.push(data.warehouseOnly === 'yes' ? 'Aplicado fator de limite para utilização exclusivamente de armazém.' : 'Sem aplicação do agravamento próprio de armazém exclusivo.');
  return points;
}

function buildPlans(data, category, autoprotecao) {
  const planos = [];
  if (autoprotecao.includes('Plano de prevenção')) {
    planos.push({
      title: 'Plano de prevenção',
      items: [
        'Identificação da utilização-tipo, entidade exploradora, data de entrada em funcionamento, RS e eventuais delegados.',
        'Plantas 1:100 ou 1:200 com classificação de risco e efetivo previsto por local, vias de evacuação e localização dos equipamentos de SCIE.',
        'Procedimentos de prevenção, exploração, manutenção e controlo de trabalhos perigosos.',
        'Disponibilização permanente de exemplar no posto de segurança.'
      ]
    });
  }
  planos.push({
    title: 'Procedimentos de prevenção',
    items: [
      'Garantir acessibilidade dos meios de socorro e dos hidrantes.',
      'Manter praticáveis as vias de evacuação e acessíveis os meios de alarme e intervenção.',
      'Assegurar limpeza, arrumação, vigilância de espaços de maior risco e segurança no armazenamento de matérias perigosas.',
      'Implementar programa de manutenção com calendários e verificações periódicas.'
    ]
  });
  planos.push({
    title: 'Procedimentos em caso de emergência',
    items: [
      'Alarme, alerta e ativação da resposta interna.',
      'Evacuação rápida e segura dos espaços em risco.',
      'Uso de meios de primeira intervenção adequados.',
      'Receção e encaminhamento dos bombeiros.'
    ]
  });
  if (autoprotecao.includes('Plano de emergência interno')) {
    planos.push({
      title: 'Plano de emergência interno',
      items: [
        'Organização em emergência e organograma do SSI.',
        'Plano de atuação com corte de energias, primeira intervenção, socorro e acolhimento dos bombeiros.',
        'Plano de evacuação com vias, zonas de refúgio, pontos de encontro e apoio a pessoas com mobilidade condicionada.',
        'Instruções de segurança e plantas de emergência por piso.'
      ]
    });
  }
  if (data.hasRiskDE === 'yes') {
    planos.push({
      title: 'Instruções de segurança específicas',
      items: [
        'Afixação obrigatória nos locais de risco C, D, E e F.',
        'Nos locais de risco D e E, anexar planta de emergência simplificada.',
        'Incluir procedimentos de prevenção, alarme, alerta e primeira intervenção.'
      ]
    });
  }
  return planos;
}

function buildProcedures(data) {
  return [
    'Deteção/perceção de incêndio → acionar alarme interno.',
    'Alertar 112 / corpo de bombeiros territorialmente competente.',
    'Desligar fontes de energia e combustíveis quando seguro.',
    'Iniciar evacuação ordenada segundo a hierarquia definida.',
    'Executar primeira intervenção apenas quando o foco for incipiente e sem colocar pessoas em risco.',
    'Confirmar varredura dos espaços e impedir reentrada até autorização.'
  ];
}

function buildOrganization(data, requiresPEI) {
  const base = [
    'Designar formalmente o Responsável de Segurança (RS).',
    'Nomear delegado de segurança quando aplicável e manter identificação atualizada.',
    'Definir equipas e responsabilidades de acordo com a exploração do espaço.'
  ];
  if (requiresPEI) {
    base.push('Implementar Serviço de Segurança contra Incêndio (SSI) com delegado de segurança como chefe de equipa.');
    base.push('Manter posto de segurança permanentemente ocupado durante o funcionamento por, pelo menos, um elemento da equipa.');
  }
  return base;
}

function buildRecords() {
  return [
    'Relatórios de vistoria, inspeção ou fiscalização.',
    'Anomalias detetadas e respetiva reparação.',
    'Ações de manutenção de instalações, equipamentos e sistemas.',
    'Trabalhos perigosos e modificações efetuadas.',
    'Ocorrências, falsos alarmes, princípios de incêndio e intervenções.',
    'Relatórios de formação e simulacros.',
    'Arquivo mínimo de 10 anos, em suporte papel ou digital.'
  ];
}

function buildFormation(data, requiresPEI) {
  const items = [
    'Sensibilização geral para todos os funcionários e colaboradores.',
    'Ações até 60 dias após entrada ao serviço.',
    'Formação específica para pessoal que atua em locais de risco C, D ou F.',
  ];
  if (requiresPEI) items.push('Treino específico para emissão de alerta, evacuação, comandos de segurança, receção dos bombeiros e direção das operações.');
  return items;
}

function buildAnnexes(data, requiresPEI) {
  const annexes = [
    'Plantas 1:100 ou 1:200 com vias de evacuação, equipamentos e classificação de risco.',
    'Lista de contactos internos e externos.',
    'Mapa de manutenção e verificações periódicas.',
    'Modelo de registo de segurança.',
    'Instruções de segurança por local de risco.'
  ];
  if (requiresPEI) annexes.push('Plantas de emergência por piso e esquema organizacional do SSI.');
  if (['XI','XII'].includes(data.ut)) annexes.push('Memória de cálculo da densidade de carga de incêndio modificada e respetivos coeficientes.');
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
      <h3>2. Medidas de autoproteção exigíveis</h3>
      <ul>${autoprotecaoRows}</ul>
      <p><strong>Prazo de submissão:</strong> nos casos de construção nova, alteração, ampliação ou mudança de uso, o processo deve ser entregue até 30 dias antes da entrada em funcionamento.</p>
    </div>

    ${planSections}

    <div class="section">
      <h3>3. Organização da segurança</h3>
      <ul>${result.organization.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>4. Procedimentos gerais em caso de emergência</h3>
      <ul>${result.procedures.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>5. Registos de segurança</h3>
      <ul>${result.records.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>6. Formação e treino</h3>
      <ul>${result.formation.map(item => `<li>${item}</li>`).join('')}</ul>
      <p><strong>Periodicidade dos simulacros aplicável:</strong> ${result.periodicity}.</p>
    </div>

    <div class="section">
      <h3>7. Anexos técnicos a preparar</h3>
      <ul>${result.annexes.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h3>8. Observações do caso</h3>
      <p>${escapeHtml(data.notes || 'Sem observações adicionais.')}</p>
    </div>

    <div class="section">
      <h3>9. Avisos de validação</h3>
      <ul>
        <li>As plantas e esquemas devem ser substituídos ou confirmados com base nas peças desenhadas reais do edifício/recinto.</li>
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
