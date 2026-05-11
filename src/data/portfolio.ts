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
  { value: "5+ anos", label: "De experiência em desenvolvimento web corporativo" },
  { value: "3 etapas", label: "Evolução profissional de estagiário a analista pleno" },
  { value: "ADS + Pós", label: "Formação em Análise e Desenvolvimento de Sistemas e Engenharia de Software" },
  { value: "Full Stack", label: "Base sólida em front-end, back-end, integrações e dados" },
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
    items: ["HTML", "CSS", "AngularJS", "Vue 2", "Vuetify", "Vue 3", "Tailwind CSS", "Material Design", "JavaScript", "TypeScript"],
  },
  {
    icon: "layers",
    title: "Arquitetura de interface",
    items: ["Nuxt 4", "Componentização", "Responsividade", "WebSocket", "Hierarquia visual", "Design orientado à usabilidade", "Consistência visual", "Experiência do usuário"],
  },
  {
    icon: "task_alt",
    title: "Back-End e integrações",
    items: ["Java", "Kotlin", "Go", "Spring Boot", "APIs REST", "Integrações", "Autenticação", "Fluxos orientados a negócio"],
  },
  {
    icon: "bolt",
    title: "Dados e suporte técnico",
    accent: true,
    items: ["Redis", "Oracle", "PostgreSQL", "Modelagem de dados", "Manutenção evolutiva", "Sistemas corporativos", "Escalabilidade"],
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
    title: "Base técnica com evolução consistente",
    description:
      "Minha trajetória foi construída com progressão contínua de responsabilidades, unindo repertório full stack, formação acadêmica sólida e foco crescente em qualidade de interface.",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Estágio em desenvolvimento web",
    description:
      "Atuação por 10 meses com foco em manutenção de sistemas, construção de interfaces e contato direto com rotinas de desenvolvimento em ambiente corporativo.",
  },
  {
    title: "Promoção para Analista de Desenvolvimento Web Júnior",
    description:
      "Ciclo de 2 anos e 9 meses com ampliação de escopo técnico, participação em integrações, regras de negócio, manutenção evolutiva e desenvolvimento de novas funcionalidades.",
  },
  {
    title: "Consolidação da atuação full stack",
    description:
      "Evolução consistente entre front-end, back-end e dados, com experiência em sistemas internos, produtos digitais, interfaces administrativas e fluxos orientados a operação.",
  },
  {
    title: "Analista de Desenvolvimento Web Pleno",
    accent: true,
    description:
      "Atuação atual há mais de 2 anos, com maior maturidade técnica e foco crescente em arquitetura front-end, experiência do usuário, componentização e construção de interfaces robustas.",
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
