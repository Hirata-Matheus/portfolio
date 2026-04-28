import type {
  ContactItem,
  DroneCard,
  GalleryItem,
  Highlight,
  Metric,
  ProcessStep,
  Project,
  SkillBadge,
  StackGroup,
  TimelineItem,
} from "../types/portfolio";

export const heroBadges: SkillBadge[] = [
  { title: "Vue / Nuxt" },
  { title: "TypeScript" },
  { title: "UX" },
  { title: "Performance" },
  { title: "Componentizacao" },
];

export const metrics: Metric[] = [
  { value: "6 anos", label: "De experiencia em desenvolvimento web" },
  { value: "Full Stack", label: "Base solida entre front-end e back-end" },
  { value: "Foco em Front-End", label: "Especializacao em interfaces e experiencia do usuario" },
  { value: "Projetos diversos", label: "Experiencia com sistemas internos, dashboards e produtos digitais" },
];

export const projects: Project[] = [
  {
    title: "Valorauto - Plataforma de avaliacao veicular",
    description:
      "Uma aplicacao focada em catalogo e avaliacao de veiculos, pensada para oferecer uma experiencia visual moderna, comparacoes intuitivas e navegacao clara.",
    tags: ["Front-End", "UX", "Comparacao visual", "Componentizacao"],
    fields: [
      {
        label: "Problema",
        text: "Era necessario estruturar uma interface que organizasse muitos dados de forma acessivel, transmitindo confianca e facilitando a comparacao entre veiculos.",
      },
      {
        label: "Solucao",
        text: "Desenvolvi uma interface responsiva com listagem em cards, filtros por tipo, modal detalhado, comparador visual e organizacao das informacoes com foco em clareza e usabilidade.",
      },
      {
        label: "Stack",
        text: "Vue 3, Tailwind CSS, JavaScript, componentizacao, design orientado a experiencia do usuario.",
      },
      {
        label: "Resultado",
        text: "Uma interface mais rica, organizada e com melhor percepcao de valor, pronta para futura integracao com backend.",
      },
    ],
  },
  {
    title: "OpsVision - Dashboard operacional com SSR",
    description:
      "Dashboard voltado para ambientes corporativos com foco em performance inicial, seguranca de integracao e organizacao visual dos dados.",
    tags: ["SSR", "Performance", "Seguranca", "Arquitetura"],
    accent: true,
    fields: [
      {
        label: "Problema",
        text: "O desafio era reduzir a exposicao de chamadas sensiveis no navegador e melhorar a experiencia do usuario no carregamento inicial.",
      },
      {
        label: "Solucao",
        text: "Estruturei uma arquitetura front-end com SSR e integracao mediada por backend, melhorando a percepcao de performance e tornando o fluxo mais robusto do ponto de vista tecnico.",
      },
      {
        label: "Stack",
        text: "Nuxt, SSR, TypeScript, autenticacao, integracao segura, arquitetura front-end.",
      },
      {
        label: "Resultado",
        text: "Uma base mais madura para aplicacoes corporativas, com melhor carregamento inicial e experiencia mais fluida.",
      },
    ],
  },
  {
    title: "LegacyCare - Modernizacao de sistema legado",
    description:
      "Projeto de evolucao de interface em sistema legado, com foco em melhorar experiencia, manutencao e consistencia visual sem interromper a operacao.",
    tags: ["Legado", "Refactor", "UX", "Evolucao incremental"],
    fields: [
      {
        label: "Problema",
        text: "A aplicacao possuia inconsistencia visual, dependencias antigas e dificuldades de manutencao, o que impactava a experiencia e a evolucao do produto.",
      },
      {
        label: "Solucao",
        text: "Atuei na reorganizacao da interface, melhoria de componentes, refinamento visual e preparacao gradual da base para uma evolucao tecnologica mais segura.",
      },
      {
        label: "Stack",
        text: "AngularJS, JavaScript, Bootstrap, refatoracao gradual, manutencao evolutiva.",
      },
      {
        label: "Resultado",
        text: "Melhor experiencia visual, base mais organizada e reducao de atrito para futuras melhorias.",
      },
    ],
  },
  {
    title: "FlowDesk - Portal administrativo para operacoes internas",
    description:
      "Portal administrativo para gestao de processos, permissoes e acompanhamento de informacoes operacionais.",
    tags: ["Dashboard", "UX", "Organizacao visual", "Produtividade"],
    fields: [
      {
        label: "Problema",
        text: "Usuarios precisavam executar tarefas recorrentes em uma interface pouco intuitiva, com excesso de informacao e baixa hierarquia visual.",
      },
      {
        label: "Solucao",
        text: "Redesenhei a organizacao das areas, priorizei hierarquia de informacao, criei padroes visuais consistentes e simplifiquei a navegacao entre fluxos.",
      },
      {
        label: "Stack",
        text: "Vue, TypeScript, Tailwind, design de interface, organizacao de informacao.",
      },
      {
        label: "Resultado",
        text: "Fluxos mais claros, menor esforco cognitivo e aparencia mais profissional para uma ferramenta interna de uso frequente.",
      },
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    icon: "code",
    title: "Front-End",
    items: ["Vue 2", "Vue 3", "Nuxt", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Componentizacao", "Responsividade"],
  },
  {
    icon: "layers",
    title: "UX e qualidade de interface",
    items: ["Hierarquia visual", "Design orientado a usabilidade", "Consistencia visual", "Performance percebida", "Acessibilidade", "Experiencia do usuario"],
  },
  {
    icon: "task_alt",
    title: "Testes e qualidade",
    items: ["Playwright", "Vitest", "Testes de interface", "Validacao de fluxos criticos"],
  },
  {
    icon: "bolt",
    title: "Back-End e apoio tecnico",
    accent: true,
    items: ["Java", "Kotlin", "Spring Boot", "APIs REST", "Autenticacao", "Integracoes", "Docker"],
  },
];

export const highlights: Highlight[] = [
  {
    icon: "trending_up",
    title: "Visao alem da interface",
    description:
      "Por ter base full stack, consigo projetar solucoes front-end com mais consciencia tecnica, integracao mais eficiente e melhor comunicacao com backend.",
  },
  {
    icon: "groups",
    title: "UX aplicada ao desenvolvimento",
    description:
      "Busco criar interfaces que sejam bonitas, mas principalmente claras, intuitivas e alinhadas a forma como o usuario realmente utiliza o produto.",
  },
  {
    icon: "stack",
    title: "Experiencia com sistemas complexos",
    description:
      "Ja atuei com sistemas corporativos, contextos legados e fluxos operacionais que exigem organizacao, consistencia e responsabilidade tecnica.",
  },
  {
    icon: "workspace_premium",
    title: "Equilibrio entre estetica e manutencao",
    description:
      "Valorizo interfaces modernas e bem acabadas, sem abrir mao de componentizacao, reaproveitamento e escalabilidade.",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Inicio da jornada",
    description:
      "Entrada no desenvolvimento web com atuacao pratica em interfaces, manutencao de sistemas e construcao de funcionalidades para aplicacoes internas.",
  },
  {
    title: "Crescimento como full stack",
    description:
      "Expansao da atuacao para integracoes, regras de negocio, APIs e maior entendimento do ciclo completo de desenvolvimento.",
  },
  {
    title: "Aproximacao com produto e experiencia",
    description:
      "Maior foco na camada visual, qualidade da interface, clareza dos fluxos e impacto da experiencia do usuario no valor percebido do produto.",
  },
  {
    title: "Especializacao em Front-End",
    accent: true,
    description:
      "Movimento estrategico para aprofundar atuacao em arquitetura front-end, UX, performance, componentizacao e construcao de interfaces premium.",
  },
];

export const steps: ProcessStep[] = [
  {
    step: "1",
    title: "Entendimento do problema",
    description:
      "Busco compreender o contexto do produto, o fluxo principal e o que realmente precisa ser resolvido.",
  },
  {
    step: "2",
    title: "Estrutura da experiencia",
    description:
      "Organizo a informacao, defino prioridades visuais e penso na navegacao com foco em clareza e uso real.",
  },
  {
    step: "3",
    title: "Implementacao com consistencia",
    description:
      "Desenvolvo interfaces reutilizaveis, responsivas e preparadas para crescer com o produto.",
  },
  {
    step: "4",
    title: "Refino e evolucao continua",
    description:
      "Ajusto performance, detalhes visuais, comportamento dos componentes e oportunidades de melhoria da experiencia.",
  },
];

export const droneCards: DroneCard[] = [
  {
    icon: "photo_camera",
    title: "Iniciando na fotografia aerea",
    description:
      "Recentemente iniciei minha jornada no mundo dos drones, explorando novas perspectivas e capturando momentos unicos do alto. E uma forma de exercitar criatividade, composicao visual e atencao aos detalhes.",
    tags: ["DJI Neo 2", "Fotografia Aerea"],
  },
  {
    icon: "videocam",
    title: "Equipamento",
    description:
      "Drone compacto e versatil, perfeito para quem esta comecando a explorar a fotografia e videografia aerea com qualidade profissional.",
    bullets: ["Video 4K de alta qualidade", "Estabilizacao avancada", "Modos inteligentes de voo"],
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Vista Aerea Urbana",
    description: "Exploracao de perspectivas arquitetonicas da cidade",
    tag: "Urbano",
    className: "shot-urban",
  },
  {
    title: "Natureza em Movimento",
    description: "Capturas de paisagens naturais e formacoes",
    tag: "Natureza",
    className: "shot-river",
  },
  {
    title: "Por do Sol Costeiro",
    description: "Registros de momentos unicos sobre o litoral",
    tag: "Paisagem",
    className: "shot-coast",
  },
  {
    title: "Detalhes Arquitetonicos",
    description: "Angulos unicos de estruturas e construcoes",
    tag: "Arquitetura",
    className: "shot-architecture",
  },
];

export const contactItems: ContactItem[] = [
  {
    icon: "business_center",
    label: "LinkedIn",
    value: "linkedin.com/in/matheus-hirata-b15487149",
    href: "https://www.linkedin.com/in/matheus-hirata-b15487149",
  },
  {
    icon: "code_blocks",
    label: "GitHub",
    value: "github.com/Hirata-Matheus",
    href: "https://github.com/Hirata-Matheus",
  },
  {
    icon: "mail",
    label: "E-mail",
    value: "matheushirata2001@outlook.com",
    href: "mailto:matheushirata2001@outlook.com",
    isEmail: true,
  },
  {
    icon: "location_on",
    label: "Localizacao",
    value: "Birigui - SP",
    href: "https://www.google.com/maps/search/Birigui+-+SP",
  },
];
