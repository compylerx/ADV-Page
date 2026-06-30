export type ServiceSlug =
  | "direito-trabalhista"
  | "direito-previdenciario"
  | "direito-civil";

export type Service = {
  slug: ServiceSlug;
  title: string;
  description: string;
  href: string;
  hero: string;
  overview: string;
  problems: string[];
  support: string[];
  benefits: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    description:
      "Atuacao em verbas rescisorias, vinculo empregaticio, horas extras e defesa de direitos no ambiente de trabalho.",
    href: "/areas/direito-trabalhista",
    hero: "Defesa tecnica e estrategica nas relacoes de trabalho.",
    overview:
      "O Direito Trabalhista protege trabalhadores e empresas em relacoes profissionais que exigem analise cuidadosa, documentacao organizada e estrategia juridica.",
    problems: [
      "Demissao sem pagamento correto das verbas rescisorias",
      "Horas extras, adicionais e intervalos nao pagos",
      "Assedio, acidente de trabalho ou reconhecimento de vinculo",
    ],
    support: [
      "Analise dos documentos e do historico profissional",
      "Orientacao sobre riscos, provas e caminhos possiveis",
      "Atuacao extrajudicial ou judicial com comunicacao clara",
    ],
    benefits: [
      "Atendimento humanizado",
      "Estrategia baseada em provas",
      "Clareza sobre prazos, custos e expectativas",
    ],
    faq: [
      {
        question: "Quando devo procurar um advogado trabalhista?",
        answer:
          "Sempre que houver duvida sobre direitos, demissao, pagamentos, condutas abusivas ou necessidade de defesa em reclamacao trabalhista.",
      },
      {
        question: "Preciso ter todos os documentos?",
        answer:
          "Quanto mais documentos, melhor. Ainda assim, o atendimento inicial ajuda a identificar quais provas podem ser usadas.",
      },
      {
        question: "Empresas tambem podem solicitar atendimento?",
        answer:
          "Sim. O escritorio tambem orienta empresas em prevencao, acordos e demandas trabalhistas.",
      },
    ],
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciario",
    description:
      "Planejamento e requerimentos de aposentadorias, beneficios por incapacidade, pensoes e revisoes previdenciarias.",
    href: "/areas/direito-previdenciario",
    hero: "Seguranca para buscar beneficios previdenciarios com planejamento.",
    overview:
      "O Direito Previdenciario envolve regras, prazos e documentos que impactam diretamente a concessao de beneficios junto ao INSS.",
    problems: [
      "Aposentadoria negada ou calculada de forma desfavoravel",
      "Beneficio por incapacidade indeferido",
      "Duvidas sobre tempo de contribuicao, pensao ou revisao",
    ],
    support: [
      "Conferencia de CNIS, documentos e historico contributivo",
      "Planejamento previdenciario antes do pedido",
      "Acompanhamento de requerimentos administrativos e medidas judiciais",
    ],
    benefits: [
      "Organizacao documental",
      "Reducao de erros no pedido",
      "Orientacao realista sobre viabilidade",
    ],
    faq: [
      {
        question: "Posso pedir aposentadoria sem planejamento?",
        answer:
          "Pode, mas o planejamento evita pedidos prematuros e ajuda a comparar datas, regras e valores.",
      },
      {
        question: "Meu beneficio foi negado. Ainda ha solucao?",
        answer:
          "Em muitos casos sim. E preciso analisar o motivo do indeferimento e os documentos disponiveis.",
      },
      {
        question: "O atendimento pode ser online?",
        answer:
          "Sim. A analise previdenciaria pode ser feita com documentos digitais e reunioes remotas.",
      },
    ],
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    description:
      "Consultoria e atuacao em contratos, indenizacoes, responsabilidade civil, familia patrimonial e conflitos privados.",
    href: "/areas/direito-civil",
    hero: "Solucoes juridicas para conflitos, contratos e interesses civis.",
    overview:
      "O Direito Civil organiza relacoes privadas e exige cuidado para prevenir riscos, resolver disputas e preservar direitos.",
    problems: [
      "Descumprimento de contrato ou cobranca indevida",
      "Danos materiais, morais ou responsabilidade civil",
      "Conflitos patrimoniais e orientacao preventiva",
    ],
    support: [
      "Analise juridica de documentos e fatos",
      "Negociacao, notificacoes e acordos quando viaveis",
      "Atuacao judicial com foco em estrategia e previsibilidade",
    ],
    benefits: [
      "Prevencao de riscos",
      "Comunicacao objetiva",
      "Tratamento sob medida para cada caso",
    ],
    faq: [
      {
        question: "Um contrato verbal tem validade?",
        answer:
          "Pode ter, mas a prova costuma ser mais dificil. A analise do caso indica quais documentos e evidencias ajudam.",
      },
      {
        question: "Toda cobranca indevida gera indenizacao?",
        answer:
          "Nao necessariamente. Depende dos danos, da prova e das circunstancias do caso concreto.",
      },
      {
        question: "E possivel resolver sem processo?",
        answer:
          "Em muitos casos, sim. Notificacoes e negociacoes podem reduzir custos e acelerar a solucao.",
      },
    ],
  },
];

export const serviceOptions = services.map((service) => ({
  value: service.title,
  label: service.title,
}));

export function getService(slug: ServiceSlug) {
  return services.find((service) => service.slug === slug);
}
