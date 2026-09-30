/* =====================================================================
   CONTEÚDO DO SITE — edite apenas este arquivo para personalizar.
   ---------------------------------------------------------------------
   • Fonte: currículo de Alex Müller (set/2026) e análise dos projetos.
   • Textos marcados com *asteriscos* viram ênfase tipográfica (itálico).
   • Para ocultar uma seção, defina false em `sections`.
   • Imagens: coloque arquivos em assets/images/ e informe o caminho
     relativo (ex.: "assets/images/retrato.jpg"). Campos vazios exibem
     um placeholder elegante.
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
    name: "Alex Müller",
    shortName: "Alex",
    initials: "AM",
    role: "Engenheiro de Software Sênior",
    location: "Jundiaí, SP · atendimento remoto",
    availability: "Aberto a projetos de consultoria e desenvolvimento",
    headline: "Backend que aguenta produção *e IA aplicada de verdade.*",
    subheadline:
      "Mais de 10 anos em backend, APIs e sistemas distribuídos, com passagens por Itaú Unibanco e Globo. Hoje construo integrações, arquiteturas em AWS e ferramentas com LLMs e agentes.",
    primaryCta: "Conversar sobre um projeto",
    secondaryCta: "Ver projetos",
    stack: ["Node.js", "TypeScript", "AWS", "PostgreSQL", "React", "LLMs · MCP"],
    stats: [
      { value: 10, suffix: "+", label: "anos com software em produção" },
      { value: 7, suffix: "", label: "empresas, incluindo Itaú e Globo" },
      { value: 4, suffix: "", label: "de 5 projetos como lead técnico no último ciclo" },
      { value: 102, suffix: "", label: "issues concluídas no último ciclo" },
    ],
    photo: "", // ex.: "assets/images/retrato.jpg" (proporção 4:5)
    photoAlt: "Retrato de Alex Müller",
  },

  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "competencias", label: "Competências" },
    { id: "faq", label: "FAQ" },
  ],

  about: {
    label: "Sobre",
    title: "Engenharia com *os pés em produção.*",
    lede: "De sites em PHP a app de banco, plataforma de mídia e ferramentas com IA — sempre com ênfase em backend.",
    paragraphs: [
      "Sou Alex Müller de Jesus Sousa. Comecei em 2014 desenvolvendo sites, sistemas e a plataforma de EAD Moodle. Depois passei por consultoria e pela Kroton, onde fui Tech Lead e liderei a migração de um produto de Polymer para Angular.",
      "Na Globo, desenvolvi funcionalidades do Gshow e do Receitas — várias seguem na home do Gshow. No Itaú Unibanco, trabalhei no fluxo de empréstimo consignado INSS do aplicativo. Hoje, na Arcotech, sou referência técnica em integrações e integridade de dados e construo ferramentas de IA aplicada à engenharia.",
      "Em paralelo, atendo clientes diretamente — como o Grupo Soluto e o Clutch Shooter — e desenvolvo o Domenea, uma plataforma própria de entrega de software assistida por IA.",
    ],
    principles: [
      { title: "Clareza antes de código", text: "Entendo o problema, os números e as restrições antes de propor qualquer tecnologia." },
      { title: "Simples até provar o contrário", text: "Arquitetura proporcional ao tamanho do problema — sem microsserviços por moda." },
      { title: "Deixar o time mais forte", text: "Documentação, decisões registradas e ferramentas que o time inteiro usa." },
    ],
    differentials: [
      "Experiência em empresas de grande porte: Itaú Unibanco, Globo e Kroton",
      "Lead técnico em 4 dos 5 projetos do último ciclo",
      "Do banco de dados à interface: backend, cloud e frontend",
      "IA aplicada com cuidado com dados pessoais (LGPD)",
    ],
    interests: ["Sistemas distribuídos", "IA aplicada e agentes", "MCP", "Integrações", "Arquitetura serverless", "Observabilidade"],
    milestones: [
      { year: "2014", text: "Primeiro emprego como programador: sites, sistemas e Moodle." },
      { year: "2019", text: "Kroton: Tech Lead e arquitetura de um produto do zero." },
      { year: "2021", text: "Globo: Gshow e Receitas em Node.js, Go e React." },
      { year: "2022", text: "Itaú Unibanco: empréstimo consignado INSS no app." },
      { year: "2025", text: "Arcotech: integrações, dados e ferramental de IA." },
      { year: "2026", text: "Domenea: plataforma própria de entrega com IA." },
    ],
  },

  services: {
    label: "Serviços",
    title: "Onde eu *gero mais valor.*",
    lede: "Cada frente começa pelo problema de negócio. A tecnologia é consequência.",
    items: [
      {
        icon: "api",
        title: "Integração entre sistemas",
        text: "ERPs, CRMs e plataformas que não conversam entre si passam a trocar dados sozinhos, com retentativa e rastreio de falhas.",
        problem: "Dados digitados duas vezes e planilhas fazendo papel de integração.",
        deliverables: ["Sincronização nos dois sentidos", "Webhooks com fila e retentativas", "Painel de execuções e alertas"],
      },
      {
        icon: "web",
        title: "Sites e aplicações web",
        text: "Do site de lançamento ao produto web completo, com React/Next.js e publicação em nuvem.",
        problem: "Um produto ou serviço que precisa de presença online rápida, bem feita e fácil de manter.",
        deliverables: ["Site ou aplicação publicada", "Formulários integrados (e-mail, WhatsApp)", "Domínio e hospedagem configurados"],
      },
      {
        icon: "ai",
        title: "IA aplicada",
        text: "Integração com LLMs (OpenAI, Anthropic/Claude), servidores MCP e fluxos com múltiplos agentes.",
        problem: "Times gastando horas em tarefas repetitivas que um modelo de linguagem pode apoiar com segurança.",
        deliverables: ["Prova de conceito medida", "Revisão humana no fluxo", "Controle de custo e de dados pessoais"],
      },
      {
        icon: "arch",
        title: "Backend e arquitetura em AWS",
        text: "APIs REST, microsserviços e arquiteturas serverless ou em contêineres, proporcionais ao problema.",
        problem: "Um sistema que cresceu sem desenho e ficou caro, lento de evoluir ou frágil.",
        deliverables: ["Desenho da arquitetura", "Deploy com Docker e CI/CD", "Observabilidade básica"],
      },
      {
        icon: "perf",
        title: "Performance e capacidade",
        text: "Teste de carga com k6 e ajuste de autoscaling com base em dados, não em palpite.",
        problem: "Sistema que cai ou fica lento em pico de acesso.",
        deliverables: ["Teste de carga com cenário real", "Diagnóstico de gargalos", "Plano de capacidade"],
      },
      {
        icon: "review",
        title: "Revisão técnica e CI/CD",
        text: "Auditoria de código, pipelines e segurança, com recomendações priorizadas.",
        problem: "Pipelines quebradas, testes ignorados e segredos expostos no código.",
        deliverables: ["Relatório de saúde do CI/CD", "Varredura de segredos expostos", "Plano de correção priorizado"],
      },
    ],
  },

  projects: {
    label: "Projetos",
    title: "Trabalhos *em destaque.*",
    lede: "Projetos para clientes diretos e um projeto próprio. Cada capa é uma ilustração do que o sistema faz, não um print. Trabalhos feitos como CLT aparecem só com o detalhe que consta no currículo.",
    items: [
      {
        slug: "soluto-integracoes",
        name: "Integração WayV ⇄ Omie",
        category: "Integração de sistemas · Consultoria regulatória",
        year: "2025 — 2026",
        duration: "11 meses, com evolução contínua",
        client: "Grupo Soluto — inteligência regulatória e qualidade",
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
        solution: "Backend de integração nos dois sentidos, com webhooks, agendamento, retentativas e painel de execuções.",
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
        note: "Código privado do cliente — sem link de repositório.",
      },
      {
        slug: "clutch-shooter",
        name: "Clutch Shooter",
        category: "Site de pré-venda · Esporte",
        year: "2026",
        duration: "",
        client: "Clutch Shooter — dispositivo de treino de arremesso de basquete",
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
          context: "Produto físico com pedido de modelo de utilidade depositado no INPI, em fase de pré-venda. O desafio era explicar uma mecânica de treino pouco conhecida — inclusive para o basquete em cadeira de rodas — e transformar interesse em pedido.",
          goals: [
            "Explicar a tecnologia de forma visual e direta",
            "Captar reservas de pré-venda sem checkout",
            "Boa experiência no celular",
          ],
          role: "Desenvolvi e publiquei o site de ponta a ponta: estrutura das seções, interface, animações, formulário de reserva, domínio e deploy.",
          architecture: [
            "Aplicação de página única em React, com build Vite e estilos em Tailwind CSS",
            "Animações com Motion e ícones Lucide",
            "Formulário de reserva (nome, WhatsApp, estado e CEP) que monta a mensagem e abre a conversa no WhatsApp — sem backend",
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
        problem: "Entregar software passa por muitas etapas — requisitos, especificação, código, revisão, deploy e QA — e cada passagem perde contexto e tempo.",
        solution: "Fluxo com múltiplos agentes especializados, verificação determinística como autoridade final e aprovação humana antes de seguir.",
        stack: ["TypeScript", "Node.js", "Fastify", "React", "PostgreSQL · pgvector", "MongoDB", "Redis", "Playwright", "Claude API"],
        results: [
          { value: "~130 mil", label: "linhas de TypeScript" },
          { value: "5", label: "agentes especializados" },
          { value: "Ponta a ponta", label: "do pedido ao QA da aplicação publicada" },
        ],
        details: {
          context: "Projeto pessoal, idealizado e desenvolvido por mim desde 2026, para acelerar a entrega de software do começo ao fim.",
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
        year: "2025 — 2026",
        duration: "",
        client: "Arcotech (CLT) — detalhes internos confidenciais",
        cover: "mcp",
        hue: 155,
        image: "",
        confidential: true,
        summary: "Quatro servidores MCP em TypeScript que dão aos assistentes de IA do time acesso seguro a bancos de dados, testes E2E e memória técnica.",
        problem: "Assistentes de IA precisavam consultar dados e rodar testes sem risco para a produção e sem expor dados pessoais.",
        solution: "Servidores MCP com produção somente leitura, ofuscação de dados pessoais, executor de testes E2E e memória técnica compartilhada.",
        stack: ["TypeScript", "MCP", "Playwright", "PostgreSQL", "MySQL"],
        results: [
          { value: "4", label: "servidores MCP em uso pelo time" },
          { value: "62", label: "investigações na memória técnica" },
          { value: "SHA-256", label: "ofuscação de dados pessoais (LGPD)" },
        ],
        details: {
          context: "Ferramental interno, de uso coletivo do time de Integração e Portfólio. Código, telas e dados pertencem à empresa; aqui aparece só o que consta no currículo.",
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
        note: "Projeto confidencial — sem código, telas ou links públicos.",
      },
    ],
  },

  experience: {
    label: "Experiência",
    title: "Trajetória *em produção.*",
    lede: "Diferentes níveis de responsabilidade — sempre com o pé no código.",
    items: [
      {
        company: "Arcotech",
        meta: "Educação · remoto",
        role: "Engenheiro de Software",
        period: "fev 2025 — hoje",
        summary: "Full-stack com ênfase em backend no time de Integração e Portfólio (4 devs), responsável pelo produto Portal Plus.",
        contributions: [
          "Lead técnico de 4 dos 5 projetos do último ciclo, com ~15 deploys aprovados sem ressalvas",
          "4 servidores MCP em TypeScript de uso coletivo: multi-banco com produção read-only e ofuscação de PII, executor E2E e memória técnica",
          "Liderei a sanitização da base para o tombamento de 200 escolas, com a inativação de ~230 mil usuários em produção",
          "Teste de carga com k6 (3.000 usuários virtuais) e correção do autoscaling de dois serviços para picos de 20 mil usuários",
          "Auditoria de CI/CD em 28 repositórios: pipeline principal restaurada (1.653 testes) e tokens expostos encontrados em 5 repositórios",
        ],
        impact: [{ value: "102", label: "issues no último ciclo" }, { value: "~230 mil", label: "usuários sanitizados" }],
        stack: ["Node.js", "TypeScript", "Express", "TypeORM", "PostgreSQL", "MySQL", "React", "Next.js", "AWS ECS/Fargate", "Docker"],
      },
      {
        company: "Itaú Unibanco",
        meta: "Banco · São Paulo, SP",
        role: "Engenheiro de Software",
        period: "ago 2022 — nov 2024",
        summary: "Aplicativo do Itaú, na área de empréstimo consignado.",
        contributions: [
          "Desenvolvi o fluxo de empréstimo consignado INSS",
          "Ajudei a construir o fluxo de layout do produto com Angular e Sass",
          "Participei da concepção da nova arquitetura do produto, baseada em micro-frontends",
        ],
        impact: [],
        stack: ["Angular", "Sass", "Micro-frontends"],
      },
      {
        company: "Globo",
        meta: "Mídia · Rio de Janeiro, RJ",
        role: "Desenvolvedor Sênior",
        period: "fev 2021 — ago 2022",
        summary: "Produtos de entretenimento Gshow e Receitas.",
        contributions: [
          "Desenvolvi funcionalidades do Gshow e do Receitas — várias seguem na home do Gshow",
          "Apliquei TDD e SOLID, com testes automatizados em Chai",
        ],
        impact: [],
        stack: ["Node.js", "Go", "React", "Sass", "Docker", "Redis"],
      },
      {
        company: "Kroton",
        meta: "Educação · Valinhos, SP",
        role: "Analista de Sistemas Sênior · Tech Lead",
        period: "fev 2019 — fev 2021",
        summary: "Tech Lead por um período, como referência técnica e de produto; cobri o Scrum Master em dois momentos.",
        contributions: [
          "Produto de curadoria de conteúdo do zero: idealizei a arquitetura e liderei a migração do frontend de Polymer para Angular",
          "Refatoração de toda a estrutura do produto Sistema de Pontos",
          "Microsserviços REST em Node.js para a Avaliação Continuada, com MySQL e MongoDB",
        ],
        impact: [],
        stack: ["Node.js", "Angular", "MySQL", "MongoDB", "Jest", "SAFe"],
      },
      {
        company: "PLUS-IT Consulting",
        meta: "Consultoria · alocado na Kroton",
        role: "Analista Desenvolvedor Pleno",
        period: "out 2017 — fev 2019",
        summary: "Telas e funcionalidades em Angular 4 no projeto Captação de Autores, consumindo serviços REST.",
        contributions: [],
        impact: [],
        stack: ["Angular", "REST", "Scrum"],
      },
      {
        company: "LUXFACTA",
        meta: "Soluções de TI · Rio Claro, SP",
        role: "Analista Pleno",
        period: "ago 2016 — out 2017",
        summary: "Sites e sistemas web a partir das definições da equipe de análise.",
        contributions: [],
        impact: [],
        stack: ["PHP", "Knockout.js", "AngularJS", "Sass"],
      },
      {
        company: "União Central Brasileira da IASD",
        meta: "Engenheiro Coelho, SP",
        role: "Programador",
        period: "set 2014 — mai 2016",
        summary: "Sites e sistemas web e desktop; personalização da plataforma de EAD Moodle (temas e plugins), com foco em segurança e desempenho.",
        contributions: [],
        impact: [],
        stack: ["PHP", "JavaScript", "Moodle"],
      },
    ],
  },

  skills: {
    label: "Competências",
    title: "Ferramentas, *com contexto de uso.*",
    lede: "Sem barras de porcentagem — cada grupo mostra onde a experiência foi aplicada.",
    groups: [
      { title: "Linguagens", items: ["JavaScript", "TypeScript", "Go", "PHP", "SQL"], evidence: "TypeScript e Node.js como base; Go na Globo." },
      { title: "Backend e arquitetura", items: ["Node.js", "Express", "APIs REST", "Microsserviços", "TypeORM", "Clean Architecture", "DDD", "Hexagonal"], evidence: "Microsserviços REST em Node.js desde 2019." },
      { title: "Cloud e DevOps", items: ["AWS Lambda", "ECS/Fargate", "Auto Scaling", "S3 · SQS · SNS", "CloudWatch", "Docker", "GitHub Actions", "Bitbucket Pipelines"], evidence: "Autoscaling dimensionado para picos de 20 mil usuários simultâneos." },
      { title: "Bancos de dados", items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis"], evidence: "Sanitização de ~230 mil usuários em produção." },
      { title: "Testes e qualidade", items: ["Jest", "Playwright", "k6", "TDD", "Chai", "SonarCloud"], evidence: "Pipeline com 1.653 testes restaurada; k6 com 3.000 usuários virtuais." },
      { title: "IA e LLMs", items: ["OpenAI", "Anthropic · Claude", "MCP", "Agentes", "Prompt engineering", "pgvector"], evidence: "4 servidores MCP em uso pelo time e uma plataforma multiagente própria." },
      { title: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "styled-components", "Sass"], evidence: "Home do Gshow (Globo) e app do Itaú." },
      { title: "Segurança e métodos", items: ["OWASP", "PII/LGPD", "Observabilidade", "Scrum", "SAFe"], evidence: "Tokens expostos encontrados em 5 repositórios numa auditoria de CI/CD." },
    ],
  },

  process: {
    label: "Processo",
    title: "Como um projeto *acontece.*",
    lede: "Etapas claras, entregas frequentes e nenhuma surpresa no fim do mês.",
    steps: [
      { title: "Descoberta", text: "Conversas com as pessoas envolvidas, leitura do que já existe e definição do problema real.", output: "Resumo do problema", time: "1–2 semanas" },
      { title: "Escopo e plano", text: "Prioridades, riscos e estimativas em faixas, com marcos verificáveis.", output: "Proposta e cronograma", time: "3–5 dias" },
      { title: "Arquitetura", text: "Desenho da solução proporcional ao problema, com decisões registradas.", output: "Diagramas e decisões", time: "1 semana" },
      { title: "Desenvolvimento", text: "Entregas curtas e planejadas, cada uma com relatório do que mudou.", output: "Software funcionando", time: "iterativo" },
      { title: "Validação", text: "Testes automatizados, testes de carga quando fizer sentido e homologação com quem usa.", output: "Relatório de qualidade", time: "contínuo" },
      { title: "Entrega e evolução", text: "Documentação, transferência de conhecimento e suporte após a entrega.", output: "Handover completo", time: "suporte combinado" },
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
          { name: "Tecnologia em Desenvolvimento de Sistemas para Internet", org: "UNASP — Centro Universitário Adventista de São Paulo", year: "2012 — 2015" },
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
      { q: "Como são definidos os prazos?", a: "A partir da descoberta, com estimativas em faixas e os riscos explícitos. Os prazos são revisados a cada entrega, com transparência." },
      { q: "Você oferece suporte após a entrega?", a: "Sim. O período de suporte e a evolução depois da entrega são combinados na proposta." },
      { q: "É possível trabalhar com uma equipe existente?", a: "Sim. Participo das rotinas do time, faço revisões de código e deixo a documentação necessária para que vocês sigam sem dependência." },
    ],
  },

  contact: {
    label: "Contato",
    title: "Vamos conversar sobre *o seu projeto?*",
    text: "Conte em poucas linhas o que você precisa. Respondo com os próximos passos — ou com uma indicação, se eu não for a melhor pessoa para ajudar.",
    email: "amuller.sousa@gmail.com",
    whatsapp: {
      number: "5519987114450", // formato internacional, só números
      message: "Olá, Alex! Vi seu portfólio e gostaria de conversar sobre um projeto.",
      isExample: false,
    },
    subjects: ["Novo projeto", "Integração entre sistemas", "IA aplicada", "Consultoria ou revisão técnica", "Outro assunto"],
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sousamuller", handle: "/in/sousamuller" },
      { label: "GitHub", url: "https://github.com/amullersousa", handle: "@amullersousa" },
    ],
  },

  footer: {
    description: "Engenharia de software, integrações e IA aplicada para empresas que precisam de sistemas confiáveis.",
  },
};
