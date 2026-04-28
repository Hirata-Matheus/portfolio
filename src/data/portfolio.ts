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
    title: "Valorauto - Plataforma de avaliação veicular",
    description:
      "Uma aplicação focada em catálogo e avaliação de veículos, pensada para oferecer uma experiência visual moderna, comparações intuitivas e navegação clara.",
    tags: ["Front-End", "UX", "Comparação visual", "Componentização"],
    coverSrc: "/img/project-valorauto.svg",
    coverAlt: "Capa editorial do projeto Valorauto com interface de catálogo e comparação veicular.",
    fields: [
      {
        label: "Problema",
        text: "Era necessário estruturar uma interface que organizasse muitos dados de forma acessível, transmitindo confiança e facilitando a comparação entre veículos.",
      },
      {
        label: "Solução",
        text: "Desenvolvi uma interface responsiva com listagem em cards, filtros por tipo, modal detalhado, comparador visual e organização das informações com foco em clareza e usabilidade.",
      },
      {
        label: "Stack",
        text: "Vue 3, Tailwind CSS, JavaScript, componentização, design orientado à experiência do usuário.",
      },
      {
        label: "Resultado",
        text: "Uma interface mais rica, organizada e com melhor percepção de valor, pronta para futura integração com backend.",
      },
    ],
  },
  {
    title: "OpsVision - Dashboard operacional com SSR",
    description:
      "Dashboard voltado para ambientes corporativos com foco em performance inicial, segurança de integração e organização visual dos dados.",
    tags: ["SSR", "Performance", "Segurança", "Arquitetura"],
    accent: true,
    coverSrc: "/img/project-opsvision.svg",
    coverAlt: "Capa editorial do projeto OpsVision com painéis de dashboard e estrutura orientada a SSR.",
    fields: [
      {
        label: "Problema",
        text: "O desafio era reduzir a exposição de chamadas sensíveis no navegador e melhorar a experiência do usuário no carregamento inicial.",
      },
      {
        label: "Solução",
        text: "Estruturei uma arquitetura front-end com SSR e integração mediada por backend, melhorando a percepção de performance e tornando o fluxo mais robusto do ponto de vista técnico.",
      },
      {
        label: "Stack",
        text: "Nuxt, SSR, TypeScript, autenticação, integração segura, arquitetura front-end.",
      },
      {
        label: "Resultado",
        text: "Uma base mais madura para aplicações corporativas, com melhor carregamento inicial e experiência mais fluida.",
      },
    ],
  },
  {
    title: "LegacyCare - Modernização de sistema legado",
    description:
      "Projeto de evolução de interface em sistema legado, com foco em melhorar experiência, manutenção e consistência visual sem interromper a operação.",
    tags: ["Legado", "Refactor", "UX", "Evolução incremental"],
    coverSrc: "/img/project-legacycare.svg",
    coverAlt: "Capa editorial do projeto LegacyCare com evolução visual de sistema legado.",
    fields: [
      {
        label: "Problema",
        text: "A aplicação possuía inconsistência visual, dependências antigas e dificuldades de manutenção, o que impactava a experiência e a evolução do produto.",
      },
      {
        label: "Solução",
        text: "Atuei na reorganização da interface, melhoria de componentes, refinamento visual e preparação gradual da base para uma evolução tecnológica mais segura.",
      },
      {
        label: "Stack",
        text: "AngularJS, JavaScript, Bootstrap, refatoração gradual, manutenção evolutiva.",
      },
      {
        label: "Resultado",
        text: "Melhor experiência visual, base mais organizada e redução de atrito para futuras melhorias.",
      },
    ],
  },
  {
    title: "FlowDesk - Portal administrativo para operações internas",
    description:
      "Portal administrativo para gestão de processos, permissões e acompanhamento de informações operacionais.",
    tags: ["Dashboard", "UX", "Organização visual", "Produtividade"],
    coverSrc: "/img/project-flowdesk.svg",
    coverAlt: "Capa editorial do projeto FlowDesk com módulos administrativos e fluxos internos.",
    fields: [
      {
        label: "Problema",
        text: "Usuários precisavam executar tarefas recorrentes em uma interface pouco intuitiva, com excesso de informação e baixa hierarquia visual.",
      },
      {
        label: "Solução",
        text: "Redesenhei a organização das áreas, priorizei hierarquia de informação, criei padrões visuais consistentes e simplifiquei a navegação entre fluxos.",
      },
      {
        label: "Stack",
        text: "Vue, TypeScript, Tailwind, design de interface, organização de informação.",
      },
      {
        label: "Resultado",
        text: "Fluxos mais claros, menor esforço cognitivo e aparência mais profissional para uma ferramenta interna de uso frequente.",
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
