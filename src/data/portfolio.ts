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
  { title: "Componentização" },
];

export const metrics: Metric[] = [
  { value: "6 anos", label: "De experiência em desenvolvimento web" },
  { value: "Full Stack", label: "Base sólida entre front-end e back-end" },
  { value: "Foco em Front-End", label: "Especialização em interfaces e experiência do usuário" },
  { value: "Projetos diversos", label: "Experiência com sistemas internos, dashboards e produtos digitais" },
];

export const projects: Project[] = [
  {
    title: "ValAuto - Comparador de indicadores veiculares",
    description:
      "Plataforma pensada para explorar, analisar e comparar veículos com base em indicadores como consumo, desempenho, manutenção e custo-benefício, com navegação clara e leitura rápida dos dados.",
    tags: ["Vue 3", "Comparação", "Filtros", "UX de dados"],
    coverSrc: "/projects/valauto-main.png",
    coverAlt: "Tela principal do projeto ValAuto com filtros, cards de veículos e fluxo de comparação.",
    coverPosition: "center top",
    fields: [
      {
        label: "Problema",
        text: "Era necessário apresentar muitos atributos técnicos e financeiros sem deixar a experiência confusa, facilitando a comparação entre veículos de perfis diferentes.",
      },
      {
        label: "Solução",
        text: "Estruturei a interface com filtros por categoria, cards ricos em indicadores, ordenação e fluxo de comparação dedicado, priorizando hierarquia visual e tomada de decisão.",
      },
      {
        label: "Stack",
        text: "Vue 3, arquitetura componentizada, filtros dinâmicos, organização visual de métricas e interface orientada à experiência do usuário.",
      },
      {
        label: "Resultado",
        text: "Uma experiência mais completa para análise veicular, com melhor leitura dos dados, comparação mais intuitiva e maior percepção de valor do produto.",
      },
    ],
  },
  {
    title: "GendAuto - Organizador de custos automotivos",
    description:
      "Dashboard para controle de custos automotivos, consolidando manutenção, combustível, impostos, seguros, lembretes de pagamento e revisões em uma única visão operacional.",
    tags: ["Nuxt 4", "Dashboard", "Custos", "Manutenção"],
    accent: true,
    coverSrc: "/projects/gendauto-main.png",
    coverAlt: "Tela principal do projeto GendAuto com dashboard de custos e agenda de manutenção.",
    coverFit: "contain",
    coverPosition: "center center",
    coverBackground: "#f4efe2",
    fields: [
      {
        label: "Problema",
        text: "O desafio era centralizar diferentes categorias de gastos e compromissos do veículo em uma interface simples de acompanhar no uso recorrente.",
      },
      {
        label: "Solução",
        text: "Desenhei um painel com visão consolidada da frota, cards de indicadores, agenda de manutenção e blocos financeiros para reduzir esforço operacional e facilitar o acompanhamento mensal.",
      },
      {
        label: "Stack",
        text: "Nuxt 4, dashboard administrativo, organização de custos, acompanhamento de serviços e arquitetura voltada a dados operacionais.",
      },
      {
        label: "Resultado",
        text: "Uma visão mais prática dos custos do veículo, com mais previsibilidade de gastos, lembretes organizados e melhor controle das rotinas de manutenção.",
      },
    ],
  },
  {
    title: "Imovius - Busca de imóveis por mapa e região",
    description:
      "Plataforma para localizar imóveis disponíveis para venda e locação com base em regiões, combinando exploração geográfica em mapa com listagem tradicional.",
    tags: ["Mapa interativo", "Busca regional", "Imóveis", "Exploração visual"],
    coverSrc: "/projects/imovius.png",
    coverAlt: "Tela do projeto Imovius com mapa de regiões e agrupamento de imóveis disponíveis.",
    coverFit: "contain",
    coverPosition: "center center",
    coverBackground: "#eef1f7",
    fields: [
      {
        label: "Problema",
        text: "Era importante tornar a descoberta de imóveis mais visual e contextual, evitando uma navegação limitada a listas extensas e filtros pouco intuitivos.",
      },
      {
        label: "Solução",
        text: "Organizei a experiência a partir de um mapa interativo por regiões, com marcadores, agrupamentos e leitura complementar em listagem para apoiar diferentes formas de busca.",
      },
      {
        label: "Stack",
        text: "Front-end orientado a geolocalização, busca regional, filtros visuais e sincronização entre mapa e listagem de imóveis.",
      },
      {
        label: "Resultado",
        text: "Uma navegação mais rica e estratégica, ajudando o usuário a identificar oportunidades por localização com mais rapidez e entendimento espacial.",
      },
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    icon: "code",
    title: "Front-End",
    items: ["Vue 2", "Vue 3", "Nuxt", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Componentização", "Responsividade"],
  },
  {
    icon: "layers",
    title: "UX e qualidade de interface",
    items: ["Hierarquia visual", "Design orientado à usabilidade", "Consistência visual", "Performance percebida", "Acessibilidade", "Experiência do usuário"],
  },
  {
    icon: "task_alt",
    title: "Testes e qualidade",
    items: ["Playwright", "Vitest", "Testes de interface", "Validação de fluxos críticos"],
  },
  {
    icon: "bolt",
    title: "Back-End e apoio técnico",
    accent: true,
    items: ["Java", "Kotlin", "Spring Boot", "APIs REST", "Autenticação", "Integrações", "Docker"],
  },
];

export const highlights: Highlight[] = [
  {
    icon: "trending_up",
    title: "Visão além da interface",
    description:
      "Por ter base full stack, consigo projetar soluções front-end com mais consciência técnica, integração mais eficiente e melhor comunicação com backend.",
  },
  {
    icon: "groups",
    title: "UX aplicada ao desenvolvimento",
    description:
      "Busco criar interfaces que sejam bonitas, mas principalmente claras, intuitivas e alinhadas à forma como o usuário realmente utiliza o produto.",
  },
  {
    icon: "stack",
    title: "Experiência com sistemas complexos",
    description:
      "Já atuei com sistemas corporativos, contextos legados e fluxos operacionais que exigem organização, consistência e responsabilidade técnica.",
  },
  {
    icon: "workspace_premium",
    title: "Equilíbrio entre estética e manutenção",
    description:
      "Valorizo interfaces modernas e bem acabadas, sem abrir mão de componentização, reaproveitamento e escalabilidade.",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Início da jornada",
    description:
      "Entrada no desenvolvimento web com atuação prática em interfaces, manutenção de sistemas e construção de funcionalidades para aplicações internas.",
  },
  {
    title: "Crescimento como full stack",
    description:
      "Expansão da atuação para integrações, regras de negócio, APIs e maior entendimento do ciclo completo de desenvolvimento.",
  },
  {
    title: "Aproximação com produto e experiência",
    description:
      "Maior foco na camada visual, qualidade da interface, clareza dos fluxos e impacto da experiência do usuário no valor percebido do produto.",
  },
  {
    title: "Especialização em Front-End",
    accent: true,
    description:
      "Movimento estratégico para aprofundar atuação em arquitetura front-end, UX, performance, componentização e construção de interfaces premium.",
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
    title: "Estrutura da experiência",
    description:
      "Organizo a informação, defino prioridades visuais e penso na navegação com foco em clareza e uso real.",
  },
  {
    step: "3",
    title: "Implementação com consistência",
    description:
      "Desenvolvo interfaces reutilizáveis, responsivas e preparadas para crescer com o produto.",
  },
  {
    step: "4",
    title: "Refino e evolução contínua",
    description:
      "Ajusto performance, detalhes visuais, comportamento dos componentes e oportunidades de melhoria da experiência.",
  },
];

export const droneCards: DroneCard[] = [
  {
    icon: "photo_camera",
    title: "Iniciando na fotografia aérea",
    description:
      "Recentemente iniciei minha jornada no mundo dos drones, explorando novas perspectivas e capturando momentos únicos do alto. É uma forma de exercitar criatividade, composição visual e atenção aos detalhes.",
    tags: ["DJI Neo 2", "Fotografia aérea"],
  },
  {
    icon: "videocam",
    title: "Equipamento",
    description:
      "Drone compacto e versátil, perfeito para quem está começando a explorar a fotografia e videografia aérea com qualidade profissional.",
    bullets: ["Vídeo 4K de alta qualidade", "Estabilização avançada", "Modos inteligentes de voo"],
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Estrada entre a vegetação",
    description: "Composição vertical destacando o desenho sinuoso da estrada em meio à copa das árvores.",
    tag: "Natureza",
    imageSrc: "/img/drone-1.jpg",
    imageAlt: "Vista aérea de uma estrada sinuosa cercada por vegetação densa.",
  },
  {
    title: "Panorama urbano ao entardecer",
    description: "Registro amplo da malha urbana com montanhas ao fundo e luz suave no horizonte.",
    tag: "Cidade",
    imageSrc: "/img/drone-2.jpg",
    imageAlt: "Vista aérea de uma cidade ao entardecer com montanhas ao fundo.",
  },
  {
    title: "Skyline noturno",
    description: "Captura em luz baixa valorizando vias iluminadas, profundidade urbana e contraste da cidade.",
    tag: "Noturno",
    imageSrc: "/img/drone-3.jpeg",
    imageAlt: "Vista aérea noturna de uma cidade com avenidas iluminadas.",
  },
  {
    title: "Pôr do sol no litoral",
    description: "Cena costeira com reflexo dourado sobre o mar e leitura limpa da linha do horizonte.",
    tag: "Litoral",
    imageSrc: "/img/drone-4.png",
    imageAlt: "Vista aérea de um pôr do sol no litoral com reflexo no mar.",
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
    icon: "photo_camera",
    label: "Instagram",
    value: "@hirata.math",
    href: "https://www.instagram.com/hirata.math",
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
    label: "Localização",
    value: "Birigui - SP",
    href: "https://www.google.com/maps/search/Birigui+-+SP",
  },
];
