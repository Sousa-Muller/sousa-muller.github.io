/* =====================================================================
   CONTEÚDO DO SITE: edite apenas este arquivo para personalizar.
   ---------------------------------------------------------------------
   • Fonte: currículo de Sousa Müller (set/2026) e análise dos projetos.
   • Textos marcados com *asteriscos* viram ênfase tipográfica (itálico).
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
    about: true,
    services: true,
    projects: true,
    experience: true,
    skills: true,
    process: true,
    testimonials: false, // ligue quando tiver depoimentos reais
    education: true,
    faq: true,
    contact: true,
  },

  profile: {
    name: "Sousa Müller",
    shortName: "Sousa",
    initials: "SM",
    role: "Engenheiro de software freelancer",
    location: "Jundiaí, SP · atendimento remoto para todo o Brasil",
    availability: "Agenda aberta para novos projetos",
    headline: "Integrações, sistemas web e IA *que funcionam em produção.*",
    subheadline:
      "Sou engenheiro de software freelancer, com mais de 10 anos de experiência e passagens por Itaú Unibanco e Globo. Cuido do seu projeto do levantamento à publicação, falando direto com você, sem intermediários.",
    primaryCta: "Conversar sobre um projeto",
    secondaryCta: "Ver projetos",
    stack: ["Node.js", "TypeScript", "React", "AWS", "PostgreSQL", "LLMs · MCP"],
    stats: [
      { value: 10, suffix: "+", label: "anos entregando software em produção" },
      { value: 7, suffix: "", label: "empresas atendidas, incluindo Itaú e Globo" },
      { value: 13, suffix: "", label: "fluxos de integração entregues a um único cliente" },
      { value: 4, suffix: "", label: "ferramentas de IA em uso diário por um time" },
    ],
    photo: "assets/images/retrato.jpg", // proporção 4:5
    photoAlt: "Retrato de Sousa Müller",
  },

  nav: [
    { id: "servicos", label: "Serviços" },
    { id: "projetos", label: "Projetos" },
    { id: "processo", label: "Como trabalho" },
    { id: "sobre", label: "Sobre" },
    { id: "faq", label: "FAQ" },
  ],

  about: {
    label: "Sobre",
    title: "Você fala *com quem faz.*",
    lede: "Atendo empresas e empreendedores como freelancer, trazendo a experiência de grandes operações para projetos de qualquer tamanho.",
    paragraphs: [
      "Sou Sousa Müller, engenheiro de software. Desde 2014 construo sistemas em produção: sites e plataformas de ensino, produtos de educação, funcionalidades do Gshow e do Receitas na Globo e o fluxo de empréstimo consignado no app do Itaú Unibanco.",
      "Como freelancer, cuido do projeto inteiro: entendo o problema, desenho a solução, desenvolvo, publico e acompanho depois da entrega. Foi assim com a integração entre plataforma de projetos e ERP do Grupo Soluto e com o site de pré-venda do Clutch Shooter.",
      "Hoje meu foco está em integrações entre sistemas, backend em nuvem e IA aplicada: LLMs, ferramentas MCP e fluxos com agentes que tiram trabalho repetitivo das pessoas.",
    ],
    principles: [
      { title: "Clareza antes de código", text: "Entendo o problema, os números e as restrições antes de propor qualquer tecnologia." },
      { title: "Simples até provar o contrário", text: "Solução proporcional ao tamanho do problema e do orçamento." },
      { title: "Você não fica dependente", text: "Documentação, decisões registradas e código que outra pessoa consegue manter." },
    ],
    differentials: [
      "Contato direto com quem desenvolve, sem intermediários",
      "Experiência de grandes operações, como Itaú Unibanco e Globo",
      "Do levantamento à publicação: backend, frontend, nuvem e IA",
      "Entregas curtas, cada uma com relatório do que mudou",
    ],
    interests: ["Integrações", "IA aplicada e agentes", "MCP", "Arquitetura serverless", "Sistemas distribuídos", "Observabilidade"],
    milestones: [
      { year: "2014", text: "Primeiros sistemas em produção: sites, sistemas web e Moodle." },
      { year: "2019", text: "Tech Lead na Kroton, com arquitetura de um produto do zero." },
      { year: "2021", text: "Globo: Gshow e Receitas em Node.js, Go e React." },
      { year: "2022", text: "Itaú Unibanco: empréstimo consignado INSS no app." },
      { year: "2025", text: "Primeiro cliente direto: integração do Grupo Soluto." },
      { year: "2026", text: "Clutch Shooter no ar e Domenea, plataforma própria com IA." },
    ],
  },

  services: {
    label: "Serviços",
    title: "Como eu posso *ajudar o seu negócio.*",
    lede: "Cada projeto começa pelo problema que você quer resolver. A tecnologia é consequência.",
    items: [
      {
        icon: "api",
        title: "Integração entre sistemas",
        text: "ERPs, CRMs e plataformas que não conversam entre si passam a trocar dados sozinhos, com retentativa e aviso de falhas.",
        problem: "Dados digitados duas vezes e planilhas fazendo papel de integração.",
        deliverables: ["Sincronização nos dois sentidos", "Webhooks com fila e retentativas", "Painel de execuções e alertas"],
      },
      {
        icon: "web",
        title: "Sites e aplicações web",
        text: "Do site de lançamento ao sistema web completo, com React/Next.js e publicação em nuvem.",
        problem: "Um produto ou serviço que precisa de presença online rápida, bem feita e fácil de manter.",
        deliverables: ["Site ou aplicação publicada", "Formulários integrados (e-mail, WhatsApp)", "Domínio e hospedagem configurados"],
      },
      {
        icon: "ai",
        title: "IA aplicada",
        text: "Integração com LLMs (OpenAI, Anthropic/Claude), ferramentas MCP e fluxos com múltiplos agentes.",
        problem: "Pessoas gastando horas em tarefas repetitivas que um modelo de linguagem pode apoiar com segurança.",
        deliverables: ["Prova de conceito medida", "Revisão humana no fluxo", "Controle de custo e de dados pessoais"],
      },
      {
        icon: "arch",
        title: "Backend e nuvem AWS",
        text: "APIs, microsserviços e arquiteturas serverless ou em contêineres, do tamanho certo para o problema.",
        problem: "Um sistema que cresceu sem desenho e ficou caro, lento de evoluir ou frágil.",
        deliverables: ["Desenho da arquitetura", "Deploy com Docker e CI/CD", "Monitoramento básico"],
      },
      {
        icon: "perf",
        title: "Performance e capacidade",
        text: "Teste de carga com k6 e ajuste de escalonamento automático com base em dados, não em palpite.",
        problem: "Sistema que cai ou fica lento em pico de acesso.",
        deliverables: ["Teste de carga com cenário real", "Diagnóstico de gargalos", "Plano de capacidade"],
      },
      {
        icon: "review",
        title: "Revisão técnica",
        text: "Uma segunda opinião sobre código, pipelines e segurança, com recomendações priorizadas.",
        problem: "Pipelines quebradas, testes ignorados e senhas expostas no código.",
        deliverables: ["Relatório de saúde do projeto", "Varredura de segredos expostos", "Plano de correção priorizado"],
      },
    ],
  },

  projects: {
    label: "Projetos",
    title: "Trabalhos *para clientes.*",
    lede: "Projetos entregues para clientes, um projeto próprio e um exemplo do que construo para times. Cada capa é uma ilustração do que o sistema faz, não um print.",
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
        slug: "domenea",
        name: "Domenea",
        category: "Plataforma com IA · Projeto próprio",
        year: "2026",
        duration: "em andamento",
        client: "Projeto próprio",
        cover: "agents",
        hue: 285,
        image: "",
        summary: "Plataforma que leva um pedido em linguagem natural até software publicado e testado, com agentes de IA especializados e revisão humana.",
        problem: "Entregar software passa por muitas etapas (requisitos, especificação, código, revisão, deploy e QA) e cada passagem perde contexto e tempo.",
        solution: "Fluxo com múltiplos agentes especializados, verificação determinística como autoridade final e aprovação humana antes de seguir.",
        stack: ["TypeScript", "Node.js", "Fastify", "React", "PostgreSQL · pgvector", "MongoDB", "Redis", "Playwright", "Claude API"],
        results: [
          { value: "~130 mil", label: "linhas de TypeScript" },
          { value: "5", label: "agentes especializados" },
          { value: "Ponta a ponta", label: "do pedido ao QA da aplicação publicada" },
        ],
        details: {
          context: "Projeto próprio, idealizado e desenvolvido por mim desde 2026, para acelerar a entrega de software do começo ao fim. É o mesmo método que aplico nos projetos de clientes.",
          goals: [
            "Transformar requisitos em linguagem natural numa especificação baseada no código real",
            "Automatizar execução, code review, deploy e QA da aplicação publicada",
            "Manter custo e confiabilidade sob controle",
          ],
          role: "Idealização, arquitetura e desenvolvimento.",
          architecture: [
            "Agentes especializados: elicitação, arquitetura, desenvolvimento, code review e QA de interface com navegador real",
            "Tool-use e saídas estruturadas, com verificação determinística como autoridade final",
            "Integração direta com a API da Anthropic (Claude) com streaming, e embeddings para memória vetorial (pgvector)",
            "Orçamento de tokens, retentativas e timeouts por capacidade",
          ],
          process: "",
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
          context: "Ferramental interno de uso coletivo de um time de engenharia. Código, telas e dados pertencem à empresa; aqui aparece só o que pode ser divulgado. É um exemplo do tipo de ferramenta de IA que posso construir para o seu time.",
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
    label: "Trajetória",
    title: "A bagagem que *chega ao seu projeto.*",
    lede: "Mais de 10 anos em empresas de grande porte. É essa experiência que aplico nos projetos de clientes.",
    items: [
      {
        company: "Arcotech",
        meta: "Educação · remoto",
        role: "Engenheiro de Software",
        period: "2025 a hoje",
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
    label: "Competências",
    title: "Ferramentas, *com contexto de uso.*",
    lede: "Sem barras de porcentagem: cada grupo mostra onde a experiência foi aplicada.",
    groups: [
      { title: "Linguagens", items: ["JavaScript", "TypeScript", "Go", "PHP", "SQL"], evidence: "TypeScript e Node.js como base; Go na Globo." },
      { title: "Backend e arquitetura", items: ["Node.js", "Express", "APIs REST", "Microsserviços", "TypeORM", "Clean Architecture", "DDD", "Hexagonal"], evidence: "Microsserviços REST em Node.js desde 2019." },
      { title: "Nuvem e DevOps", items: ["AWS Lambda", "ECS/Fargate", "Auto Scaling", "S3 · SQS · SNS", "CloudWatch", "Docker", "GitHub Actions", "Bitbucket Pipelines"], evidence: "Escalonamento dimensionado para picos de 20 mil usuários simultâneos." },
      { title: "Bancos de dados", items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis"], evidence: "Sanitização de ~230 mil usuários em produção." },
      { title: "Testes e qualidade", items: ["Jest", "Playwright", "k6", "TDD", "Chai", "SonarCloud"], evidence: "Pipeline com 1.653 testes restaurada; k6 com 3.000 usuários virtuais." },
      { title: "IA e LLMs", items: ["OpenAI", "Anthropic · Claude", "MCP", "Agentes", "Prompt engineering", "pgvector"], evidence: "4 servidores MCP em uso por um time e uma plataforma multiagente própria." },
      { title: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "styled-components", "Sass"], evidence: "Home do Gshow (Globo), app do Itaú e site do Clutch Shooter." },
      { title: "Segurança e métodos", items: ["OWASP", "PII/LGPD", "Observabilidade", "Scrum", "SAFe"], evidence: "Senhas expostas encontradas em 5 repositórios numa auditoria de CI/CD." },
    ],
  },

  process: {
    label: "Como trabalho",
    title: "Como um projeto *acontece.*",
    lede: "Etapas claras, entregas frequentes e nenhuma surpresa no fim do mês.",
    steps: [
      { title: "Conversa inicial", text: "Você conta o que precisa. Eu faço perguntas, olho o que já existe e defino com você o problema real.", output: "Resumo do problema", time: "sem custo" },
      { title: "Proposta", text: "Escopo, prioridades, riscos e estimativas em faixas, com marcos verificáveis.", output: "Proposta e cronograma", time: "3 a 5 dias" },
      { title: "Desenho da solução", text: "Arquitetura proporcional ao problema, com as decisões registradas.", output: "Diagramas e decisões", time: "1 semana" },
      { title: "Desenvolvimento", text: "Entregas curtas e planejadas, cada uma com relatório do que mudou.", output: "Software funcionando", time: "iterativo" },
      { title: "Validação", text: "Testes automatizados, testes de carga quando fizer sentido e homologação com quem usa.", output: "Relatório de qualidade", time: "contínuo" },
      { title: "Entrega e evolução", text: "Publicação, documentação e suporte após a entrega.", output: "Sistema no ar", time: "suporte combinado" },
    ],
  },

  testimonials: {
    label: "Depoimentos",
    title: "O que dizem *sobre o trabalho.*",
    lede: "",
    items: [
      // Adicione depoimentos reais e ligue `sections.testimonials`.
      // { quote: "...", name: "Nome", role: "Cargo", company: "Empresa", initials: "NN", featured: true },
    ],
  },

  education: {
    label: "Formação",
    title: "Formação e *idiomas.*",
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
    label: "FAQ",
    title: "Perguntas *frequentes.*",
    items: [
      { q: "Quais tipos de projeto você aceita?", a: "Integrações entre sistemas, APIs e backend, sites e aplicações web, automações com IA e revisões técnicas. Funciono melhor em projetos com impacto direto no negócio e em que eu possa participar desde a definição do problema." },
      { q: "Como funciona a contratação?", a: "Começamos com uma conversa, sem custo. Se fizer sentido, envio uma proposta com escopo, faixas de estimativa e marcos de entrega." },
      { q: "Você trabalha por projeto ou por hora?", a: "Os dois. Projetos com escopo claro costumam ser por valor fechado com marcos. Consultorias e reforço de time funcionam melhor em pacotes mensais de horas." },
      { q: "Como são definidos os prazos?", a: "A partir da conversa inicial, com estimativas em faixas e os riscos explícitos. Os prazos são revisados a cada entrega, com transparência." },
      { q: "Você oferece suporte após a entrega?", a: "Sim. O período de suporte e a evolução depois da entrega são combinados na proposta." },
      { q: "Você atende empresas de fora de São Paulo?", a: "Sim. O atendimento é remoto, com reuniões por vídeo e acompanhamento por mensagens." },
      { q: "É possível trabalhar com uma equipe existente?", a: "Sim. Participo das rotinas do time, faço revisões de código e deixo a documentação necessária para que vocês sigam sem dependência." },
    ],
  },

  contact: {
    label: "Contato",
    title: "Vamos conversar sobre *o seu projeto?*",
    text: "Conte em poucas linhas o que você precisa. Respondo com os próximos passos, ou com uma indicação se eu não for a melhor pessoa para ajudar.",
    email: "amuller.sousa@gmail.com",
    whatsapp: {
      number: "5519987114450", // formato internacional, só números
      message: "Olá, Sousa! Vi seu site e gostaria de conversar sobre um projeto.",
      isExample: false,
    },
    subjects: ["Novo projeto", "Integração entre sistemas", "Site ou aplicação web", "IA aplicada", "Revisão técnica", "Outro assunto"],
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sousamuller", handle: "/in/sousamuller" },
      { label: "GitHub", url: "https://github.com/amullersousa", handle: "@amullersousa" },
    ],
  },

  footer: {
    description: "Engenharia de software freelancer: integrações, sistemas web e IA aplicada para empresas que precisam de sistemas confiáveis.",
  },
};
