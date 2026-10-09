/* =====================================================================
   CONTEÚDO DO SITE: edite apenas este arquivo para personalizar.
   ---------------------------------------------------------------------
   • Fonte: currículo de Sousa Müller (set/2026) e análise dos projetos.
   • Para ocultar uma seção, defina false em `sections`.
   • Imagens: coloque arquivos em assets/images/ e informe o caminho
     relativo (ex.: "assets/images/retrato.jpg"). Campos vazios exibem
     um placeholder elegante.
   • Estilo do texto: não usar travessão (—). Prefira ponto, vírgula,
     dois-pontos ou "·".
   ===================================================================== */

window.SITE = {
  meta: {
    // Exibe pequenos avisos "dados de demonstração". Defina true só para testes com conteúdo fictício.
    showDemoNotices: false,
    demoLabel: "Dados de demonstração",
  },

  sections: {
    experience: true,
    projects: true,
    services: true,
    skills: true,
    about: true,
    testimonials: false, // ligue quando tiver depoimentos reais
    education: true,
    faq: true,
    contact: true,
  },

  profile: {
    name: "Sousa Müller",
    shortName: "Sousa",
    initials: "SM",
    role: "Engenheiro de software",
    location: "Jundiaí, SP · trabalho remoto",
    availability: "Disponível para posições PJ ou CLT",
    headline: "Backend, integrações e IA aplicada, em produção desde 2014.",
    subheadline:
      "Engenheiro de software com mais de 10 anos de experiência, passagens por Itaú Unibanco, Globo e Kroton e atuação recente como lead técnico. Disponível para posições PJ ou CLT.",
    primaryCta: "Entrar em contato",
    secondaryCta: "LinkedIn",
    secondaryCtaHref: "https://www.linkedin.com/in/sousamuller",
    stack: ["Node.js", "TypeScript", "React", "AWS", "PostgreSQL", "LLMs · MCP"],
    stats: [
      { value: "10+", label: "anos com software em produção" },
      { value: "4 de 5", label: "projetos do último ciclo com liderança técnica" },
      { value: "20 mil", label: "usuários simultâneos após ajuste de escalonamento" },
      { value: "~230 mil", label: "cadastros saneados em produção" },
    ],
    photo: "assets/images/retrato.jpg", // proporção 4:5
    photoAlt: "Retrato de Sousa Müller",
  },

  nav: [
    { id: "experiencia", label: "Experiência" },
    { id: "projetos", label: "Projetos" },
    { id: "atuacao", label: "Atuação" },
    { id: "sobre", label: "Sobre" },
    { id: "faq", label: "FAQ" },
  ],

  about: {
    title: "Sobre mim",
    lede: "Engenheiro de software desde 2014, hoje com foco em backend, integrações e IA aplicada.",
    paragraphs: [
      "Sou Sousa Müller, engenheiro de software. Desde 2014 construo sistemas em produção: sites e plataformas de ensino, produtos de educação, funcionalidades do Gshow e do Receitas na Globo e o fluxo de empréstimo consignado no app do Itaú Unibanco.",
      "Na Arcotech, de 2025 a setembro de 2026, fui lead técnico em 4 dos 5 projetos do último ciclo, com integrações, integridade de dados e ferramentas de IA para o time. Em paralelo, entreguei projetos para clientes diretos, como a integração entre plataforma de projetos e ERP do Grupo Soluto e o site de pré-venda do Clutch Shooter.",
      "Gosto de trabalhar perto do produto: entender o problema, propor uma solução do tamanho certo, entregar em partes pequenas e deixar o caminho documentado para quem vem depois. Procuro uma posição, PJ ou CLT, em que eu faça isso dentro de um time.",
    ],
    principles: [
      { title: "Clareza antes de código", text: "Entendo o problema, os números e as restrições antes de propor qualquer tecnologia." },
      { title: "Simples até provar o contrário", text: "Solução proporcional ao tamanho do problema." },
      { title: "Conhecimento fica no time", text: "Documentação, decisões registradas e código que outra pessoa consegue manter." },
    ],
    differentials: [
      "Lead técnico em 4 dos 5 projetos do último ciclo na Arcotech",
      "Experiência em grandes operações, como Itaú Unibanco e Globo",
      "Atuação de ponta a ponta: backend, frontend, nuvem e IA",
      "Entregas curtas, cada uma com relatório do que mudou",
    ],
    interests: ["Integrações", "IA aplicada e agentes", "MCP", "Arquitetura serverless", "Sistemas distribuídos", "Observabilidade"],
    milestones: [
      { year: "2014", text: "Primeiros sistemas em produção: sites, sistemas web e Moodle." },
      { year: "2019", text: "Tech Lead na Kroton, com arquitetura de um produto do zero." },
      { year: "2021", text: "Globo: Gshow e Receitas em Node.js, Go e React." },
      { year: "2022", text: "Itaú Unibanco: empréstimo consignado INSS no app." },
      { year: "2025", text: "Arcotech, como lead técnico, e integração para o Grupo Soluto." },
      { year: "2026", text: "Clutch Shooter no ar e Squad, minha equipe de agentes de IA." },
    ],
  },

  services: {
    title: "Áreas de atuação",
    lede: "Onde eu mais contribuo num time de produto, com exemplos de onde isso já foi aplicado.",
    items: [
      {
        icon: "api",
        title: "Backend e integrações",
        text: "APIs REST, microsserviços, webhooks e filas em Node.js e TypeScript, com retentativa, registro de execuções e erros tratados.",
        problem: "13 fluxos de sincronização entre WayV e Omie, nos dois sentidos, em produção desde 2025.",
        deliverables: ["Node.js, TypeScript e Go", "Clean Architecture, DDD e hexagonal", "PostgreSQL, MySQL, MongoDB e Redis"],
      },
      {
        icon: "arch",
        title: "Nuvem AWS e performance",
        text: "Arquiteturas serverless e em contêineres, CI/CD e escalonamento dimensionado com teste de carga, não com palpite.",
        problem: "Teste de carga com k6 e ajuste do escalonamento automático para picos de 20 mil usuários na Arcotech.",
        deliverables: ["Lambda, ECS/Fargate, SQS e SNS", "Docker, GitHub Actions e Bitbucket Pipelines", "k6 e CloudWatch"],
      },
      {
        icon: "ai",
        title: "IA aplicada",
        text: "Integração com LLMs, servidores MCP e fluxos com agentes, sempre com revisão humana, controle de custo e proteção de dados pessoais.",
        problem: "4 servidores MCP em uso diário por um time e uma equipe própria de 7 agentes que leva demandas do board até o deploy.",
        deliverables: ["OpenAI e Anthropic · Claude", "MCP e Claude Agent SDK", "LGPD: ofuscação e acesso somente leitura"],
      },
      {
        icon: "web",
        title: "Frontend",
        text: "Interfaces em React, Next.js e Angular, de páginas de produto a fluxos críticos dentro de app de banco.",
        problem: "Funcionalidades na home do Gshow (Globo) e o fluxo de consignado INSS no app do Itaú.",
        deliverables: ["React, Next.js e Angular", "Micro-frontends", "Tailwind CSS e Sass"],
      },
      {
        icon: "review",
        title: "Liderança técnica",
        text: "Conduzo projetos do refinamento ao deploy, reviso código e registro as decisões para o time seguir sem depender de uma pessoa só.",
        problem: "Lead técnico em 4 dos 5 projetos do último ciclo na Arcotech e Tech Lead na Kroton.",
        deliverables: ["Refinamento e estimativa", "Code review e padrões de código", "Decisões técnicas documentadas"],
      },
      {
        icon: "perf",
        title: "Qualidade e segurança",
        text: "Testes automatizados, pipelines saudáveis e revisão de segurança, com correções priorizadas pelo risco.",
        problem: "Pipeline com 1.653 testes restaurada e senhas expostas encontradas em 5 repositórios numa auditoria de CI/CD.",
        deliverables: ["Jest, Playwright e TDD", "SonarCloud", "OWASP e varredura de segredos"],
      },
    ],
  },

  projects: {
    title: "Projetos",
    lede: "Dois projetos para clientes diretos, um projeto próprio e um ferramental interno feito para um time de engenharia.",
    items: [
      {
        slug: "soluto-integracoes",
        name: "Integração WayV ⇄ Omie",
        category: "Integração de sistemas · Consultoria regulatória",
        year: "2025 a 2026",
        duration: "11 meses, com evolução contínua",
        client: "Grupo Soluto · inteligência regulatória e qualidade",
        cover: "flow",
        flow: {
          left: ["WayV · formulários", "webhooks", "aprovação de faturamento"],
          hub: "sync",
          hubNote: "com retentativa",
          right: ["Omie · ERP", "clientes e projetos", "ordens de serviço"],
        },
        hue: 200,
        image: "",
        summary: "Sincronização automática entre a plataforma de projetos (WayV) e o ERP (Omie) de uma consultoria regulatória, além de melhorias no site institucional.",
        problem: "Clientes, projetos, serviços e faturamentos eram mantidos em dois sistemas, com digitação duplicada e risco de divergência.",
        solution: "Integração nos dois sentidos, com webhooks, agendamento, retentativas e painel de execuções.",
        stack: ["TypeScript", "Node.js", "Express", "Sequelize", "SQLite", "Docker", "Traefik"],
        results: [
          { value: "13", label: "fluxos de sincronização" },
          { value: "2 sentidos", label: "WayV → Omie e Omie → WayV" },
          { value: "3 gatilhos", label: "webhook, agendamento e disparo manual" },
        ],
        details: {
          context: "O Grupo Soluto atende empresas do mercado regulado (farmacêutico, cosméticos, alimentos, entre outros). A operação usa o WayV para projetos e formulários de faturamento e o Omie como ERP. Sem integração, a equipe replicava os dados à mão.",
          goals: [
            "Eliminar a digitação duplicada entre WayV e Omie",
            "Automatizar o caminho da aprovação de faturamento até o registro no ERP",
            "Dar visibilidade de cada execução e avisar falhas por e-mail",
          ],
          role: "Cliente direto. Levantei os fluxos com a equipe, desenhei a arquitetura, desenvolvi e publiquei a integração e evoluí o sistema ao longo de 23 entregas planejadas. Também desenvolvi melhorias no site institucional.",
          architecture: [
            "Padrão Bridge: cada direção de cada entidade é uma classe isolada, escolhida por uma tabela de configuração",
            "Webhooks do WayV gravados numa fila no próprio banco e processados por um worker com retentativas",
            "Os mesmos fluxos disparados por agendamento (configurável em tela), por endpoint protegido ou manualmente",
            "Erros tratados como valor (Result), registrados por execução e exibidos num painel",
            "Deploy em Docker com Traefik e HTTPS via Cloudflare",
          ],
          process: "Trabalho organizado em planos curtos, cada um com relatório de entrega: 23 planos concluídos entre set/2025 e ago/2026.",
          learnings: "",
        },
        links: [{ label: "Site do cliente", url: "https://www.gruposoluto.com.br/" }],
        note: "Código privado do cliente, sem link de repositório.",
      },
      {
        slug: "clutch-shooter",
        name: "Clutch Shooter",
        category: "Site de pré-venda · Esporte",
        year: "2026",
        duration: "",
        client: "Clutch Shooter · dispositivo de treino de arremesso de basquete",
        cover: "landing",
        hue: 45,
        image: "",
        summary: "Site de lançamento e pré-venda de um dispositivo patenteado para treino de arremesso de basquete.",
        problem: "Apresentar um produto físico e técnico, ainda em pré-venda, e captar pedidos sem montar uma loja virtual.",
        solution: "Site de página única com a tecnologia explicada, ficha técnica, FAQ e formulário de reserva que envia o pedido pronto para o WhatsApp.",
        stack: ["React", "Vite", "Tailwind CSS", "Motion", "Vercel"],
        results: [
          { value: "1 página", label: "da apresentação ao pedido" },
          { value: "WhatsApp", label: "pedido chega pronto para atendimento" },
          { value: "Vercel", label: "publicado com domínio próprio" },
        ],
        details: {
          context: "Produto físico com pedido de modelo de utilidade depositado no INPI, em fase de pré-venda. O desafio era explicar uma mecânica de treino pouco conhecida, inclusive para o basquete em cadeira de rodas, e transformar interesse em pedido.",
          goals: [
            "Explicar a tecnologia de forma visual e direta",
            "Captar reservas de pré-venda sem checkout",
            "Boa experiência no celular",
          ],
          role: "Desenvolvi e publiquei o site de ponta a ponta: estrutura das seções, interface, animações, formulário de reserva, domínio e deploy.",
          architecture: [
            "Aplicação de página única em React, com build Vite e estilos em Tailwind CSS",
            "Animações com Motion e ícones Lucide",
            "Formulário de reserva (nome, WhatsApp, estado e CEP) que monta a mensagem e abre a conversa no WhatsApp, sem backend",
            "Hospedagem na Vercel com CDN e domínio próprio",
          ],
          process: "",
          learnings: "",
        },
        links: [{ label: "Ver site", url: "https://clutchshooter.com/" }],
      },
      {
        slug: "squad",
        name: "Squad",
        category: "Equipe de agentes de IA · Projeto próprio",
        year: "2026",
        duration: "em uso diário",
        client: "Projeto próprio",
        cover: "agents",
        agents: {
          title: "squad / #projeto--squad",
          rows: [
            ["Lara · refinamento", "ok", "tarefas criadas"],
            ["Marina · plano", "ok", "aprovado"],
            ["Ana · execução", "ok", "concluída"],
            ["Elis · prova na tela", "warn", "pergunta ao PO"],
            ["Caio · entrega", "", "na fila"],
          ],
        },
        hue: 285,
        image: "",
        summary: "Uma equipe de agentes de IA com sete papéis definidos, que leva cada demanda do board até o deploy e conversa comigo pelo Slack.",
        problem: "Coordenar planejamento, desenvolvimento, testes e entrega de vários projetos ao mesmo tempo consome o dia com tarefas repetitivas e trocas de contexto.",
        solution: "Um orquestrador que conduz cada demanda por etapas com donos diferentes e só chama uma pessoa quando a decisão exige alguém de verdade.",
        stack: ["TypeScript", "Node.js", "Claude Agent SDK", "Slack (Bolt)", "Trello", "Playwright", "Vitest"],
        results: [
          { value: "7", label: "agentes, cada um com seu papel no Slack" },
          { value: "7", label: "projetos atendidos ao mesmo tempo" },
          { value: "1.000+", label: "testes automatizados no orquestrador" },
        ],
        details: {
          context: "Projeto próprio. A Squad é a forma como organizo a entrega de software: uma equipe de agentes de IA, cada um com um ofício (tech lead, frontend, backend, devops, infraestrutura, QA e analista de produto), que trabalha pelo Slack e só me chama quando precisa de uma decisão.",
          goals: [
            "Levar uma demanda do board até o deploy sem trabalho manual entre as etapas",
            "Separar quem faz de quem valida: quem implementa não aprova o próprio trabalho",
            "Chamar uma pessoa só para decisões de produto, riscos e ações irreversíveis",
          ],
          role: "Idealização, arquitetura e desenvolvimento. Na operação, ocupo os dois papéis humanos da squad: dono do produto (prioridade, escopo e prazo) e autoridade técnica (riscos e aprovações).",
          architecture: [
            "Etapas com donos fixos: refinamento da demanda, plano, execução pelo especialista da área, validação da tech lead, prova na interface real com Playwright e entrega (branch, PR, merge e deploy)",
            "Cada etapa roda numa sessão própria do Claude Agent SDK, com a persona e o modelo adequados à tarefa",
            "Escada de decisão: especialista, depois tech lead, depois uma pessoa. Perguntas com opção recomendada são respondidas sozinhas; o resto vira pergunta com botões no Slack",
            "Uma app Slack por persona, canais separados por projeto (execução, negócio e técnico) e uma thread por plano",
            "Demandas entram por um board no Trello, que pode ser compartilhado com o cliente, e toda decisão automática fica registrada em arquivo",
          ],
          process: "Roda como serviço sempre ligado e puxa sozinha a próxima tarefa do board. O custo e o tempo de cada rodada são medidos e servem de base para estimar prazo e custo de novos projetos.",
          learnings: "",
        },
        links: [],
      },
      {
        slug: "ferramental-mcp",
        name: "Ferramental MCP para engenharia",
        category: "IA aplicada · Projeto confidencial",
        year: "2025 a 2026",
        duration: "",
        client: "Empresa de educação (confidencial)",
        cover: "mcp",
        hue: 155,
        image: "",
        confidential: true,
        summary: "Quatro servidores MCP em TypeScript que dão aos assistentes de IA de um time acesso seguro a bancos de dados, testes E2E e memória técnica.",
        problem: "Assistentes de IA precisavam consultar dados e rodar testes sem risco para a produção e sem expor dados pessoais.",
        solution: "Servidores MCP com produção somente leitura, ofuscação de dados pessoais, executor de testes E2E e memória técnica compartilhada.",
        stack: ["TypeScript", "MCP", "Playwright", "PostgreSQL", "MySQL"],
        results: [
          { value: "4", label: "servidores MCP em uso pelo time" },
          { value: "62", label: "investigações na memória técnica" },
          { value: "SHA-256", label: "ofuscação de dados pessoais (LGPD)" },
        ],
        details: {
          context: "Ferramental interno de uso coletivo de um time de engenharia. Código, telas e dados pertencem à empresa; aqui aparece só o que pode ser divulgado. Mostra o tipo de ferramenta de IA que construo dentro de um time de produto.",
          goals: [
            "Dar aos assistentes de IA acesso útil aos dados sem risco para a produção",
            "Proteger dados pessoais (LGPD)",
            "Guardar o conhecimento das investigações para o time inteiro",
          ],
          role: "Construí as ferramentas e as mantenho para uso do time.",
          architecture: [
            "Acesso a vários bancos, com produção somente leitura",
            "Ofuscação de dados pessoais com SHA-256",
            "Executor de testes E2E declarativo sobre Playwright",
            "Memória técnica com 62 investigações documentadas",
          ],
          process: "",
          learnings: "",
        },
        links: [],
        note: "Projeto confidencial, sem código, telas ou links públicos.",
      },
    ],
  },

  experience: {
    title: "Experiência",
    lede: "Mais de 10 anos entre educação, mídia e banco, de programador a lead técnico.",
    items: [
      {
        company: "Arcotech",
        meta: "Educação · remoto",
        role: "Engenheiro de Software",
        period: "2025 a 2026",
        summary: "Integrações, integridade de dados e ferramentas de IA para o time do produto Portal Plus.",
        contributions: [
          "Lead técnico de 4 dos 5 projetos do último ciclo",
          "Teste de carga com k6 e correção do escalonamento automático para picos de 20 mil usuários",
          "Sanitização de dados com a inativação de ~230 mil usuários em produção",
        ],
        impact: [],
        stack: ["Node.js", "TypeScript", "PostgreSQL", "React", "AWS", "MCP"],
      },
      {
        company: "Itaú Unibanco",
        meta: "Banco · São Paulo, SP",
        role: "Engenheiro de Software",
        period: "2022 a 2024",
        summary: "Fluxo de empréstimo consignado INSS no aplicativo do Itaú, com participação na nova arquitetura em micro-frontends.",
        contributions: [],
        impact: [],
        stack: ["Angular", "Sass", "Micro-frontends"],
      },
      {
        company: "Globo",
        meta: "Mídia · Rio de Janeiro, RJ",
        role: "Desenvolvedor Sênior",
        period: "2021 a 2022",
        summary: "Funcionalidades do Gshow e do Receitas, várias ainda na home do Gshow, com TDD e testes automatizados.",
        contributions: [],
        impact: [],
        stack: ["Node.js", "Go", "React", "Docker", "Redis"],
      },
      {
        company: "Kroton",
        meta: "Educação · Valinhos, SP",
        role: "Analista de Sistemas Sênior · Tech Lead",
        period: "2019 a 2021",
        summary: "Tech Lead por um período. Arquitetura de um produto de curadoria de conteúdo do zero e microsserviços REST em Node.js.",
        contributions: [],
        impact: [],
        stack: ["Node.js", "Angular", "MySQL", "MongoDB"],
      },
      {
        company: "Início da carreira",
        meta: "PLUS-IT, LUXFACTA e União Central Brasileira da IASD",
        role: "Programador e Analista Desenvolvedor",
        period: "2014 a 2019",
        summary: "Sites e sistemas web em PHP e JavaScript, telas em Angular e personalização da plataforma de ensino Moodle.",
        contributions: [],
        impact: [],
        stack: ["PHP", "JavaScript", "Angular", "Moodle"],
      },
    ],
  },

  skills: {
    title: "Competências",
    lede: "Ferramentas que uso, agrupadas por área, com um exemplo de onde cada grupo foi aplicado.",
    groups: [
      { title: "Linguagens", items: ["JavaScript", "TypeScript", "Go", "PHP", "SQL"], evidence: "TypeScript e Node.js como base; Go na Globo." },
      { title: "Backend e arquitetura", items: ["Node.js", "Express", "APIs REST", "Microsserviços", "TypeORM", "Clean Architecture", "DDD", "Hexagonal"], evidence: "Microsserviços REST em Node.js desde 2019." },
      { title: "Nuvem e DevOps", items: ["AWS Lambda", "ECS/Fargate", "Auto Scaling", "S3 · SQS · SNS", "CloudWatch", "Docker", "GitHub Actions", "Bitbucket Pipelines"], evidence: "Escalonamento dimensionado para picos de 20 mil usuários simultâneos." },
      { title: "Bancos de dados", items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis"], evidence: "Sanitização de ~230 mil usuários em produção." },
      { title: "Testes e qualidade", items: ["Jest", "Playwright", "k6", "TDD", "Chai", "SonarCloud"], evidence: "Pipeline com 1.653 testes restaurada; k6 com 3.000 usuários virtuais." },
      { title: "IA e LLMs", items: ["OpenAI", "Anthropic · Claude", "MCP", "Agentes", "Prompt engineering", "pgvector"], evidence: "4 servidores MCP em uso por um time e uma equipe própria de 7 agentes de IA." },
      { title: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "styled-components", "Sass"], evidence: "Home do Gshow (Globo), app do Itaú e site do Clutch Shooter." },
      { title: "Segurança e métodos", items: ["OWASP", "PII/LGPD", "Observabilidade", "Scrum", "SAFe"], evidence: "Senhas expostas encontradas em 5 repositórios numa auditoria de CI/CD." },
    ],
  },

  testimonials: {
    title: "Depoimentos",
    lede: "",
    items: [
      // Adicione depoimentos reais e ligue `sections.testimonials`.
      // { quote: "...", name: "Nome", role: "Cargo", company: "Empresa", initials: "NN", featured: true },
    ],
  },

  education: {
    title: "Formação e idiomas",
    groups: [
      {
        title: "Formação acadêmica",
        items: [
          { name: "Tecnologia em Desenvolvimento de Sistemas para Internet", org: "UNASP · Centro Universitário Adventista de São Paulo", year: "2012 a 2015" },
        ],
      },
      {
        title: "Idiomas",
        items: [
          { name: "Português", org: "Nativo", year: "" },
          { name: "Inglês", org: "Intermediário (leitura técnica)", year: "" },
        ],
      },
    ],
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Quais modelos de contratação você aceita?", a: "PJ ou CLT. O formato pode ser conversado junto com o escopo da posição e o momento do time." },
      { q: "Que tipo de posição você procura?", a: "Engenheiro de software sênior ou lead técnico, com foco em backend, integrações, nuvem ou IA aplicada. Rendo mais em times de produto, perto de quem decide o que construir." },
      { q: "Você trabalha remoto?", a: "Sim, trabalho em formato remoto, com reuniões por vídeo e boa parte da comunicação por escrito. Moro em Jundiaí, SP." },
      { q: "Já liderou times?", a: "Sim. Fui Tech Lead na Kroton, com a arquitetura de um produto do zero, e lead técnico em 4 dos 5 projetos do último ciclo na Arcotech." },
      { q: "Como você usa IA no dia a dia?", a: "Como ferramenta de engenharia, com revisão humana em todo resultado. Construí servidores MCP usados por um time e a Squad, minha equipe de agentes que leva demandas do board até o deploy." },
      { q: "Qual o seu nível de inglês?", a: "Intermediário. Leio documentação, issues e código em inglês no dia a dia." },
    ],
  },

  contact: {
    title: "Vamos conversar?",
    text: "Se a sua empresa procura um engenheiro de software para uma posição PJ ou CLT, me escreva contando a vaga, o modelo de contratação e um pouco sobre o time.",
    email: "amuller.sousa@gmail.com",
    whatsapp: {
      number: "5519987114450", // formato internacional, só números
      message: "Olá, Sousa! Vi seu portfólio e gostaria de conversar sobre uma vaga.",
      isExample: false,
    },
    subjects: ["Vaga CLT", "Vaga PJ", "Projeto pontual", "Outro assunto"],
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sousamuller", handle: "/in/sousamuller" },
      { label: "GitHub", url: "https://github.com/amullersousa", handle: "@amullersousa" },
    ],
  },

  footer: {
    description: "Engenheiro de software com foco em backend, integrações, nuvem AWS e IA aplicada. Disponível para posições PJ ou CLT.",
  },
};
