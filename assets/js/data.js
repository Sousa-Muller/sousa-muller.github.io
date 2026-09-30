/* =====================================================================
   CONTEÚDO DO SITE — edite apenas este arquivo para personalizar.
   ---------------------------------------------------------------------
   • Todo o conteúdo abaixo é FICTÍCIO (demonstração).
   • Textos marcados com *asteriscos* viram ênfase tipográfica (itálico).
   • Para ocultar uma seção, defina false em `sections`.
   • Imagens: coloque arquivos em assets/images/ e informe o caminho
     relativo (ex.: "assets/images/retrato.jpg"). Campos vazios exibem
     um placeholder elegante.
   ===================================================================== */

window.SITE = {
  meta: {
    // Exibe pequenos avisos "dados de demonstração". Defina false quando o conteúdo for real.
    showDemoNotices: true,
    demoLabel: "Dados de demonstração",
  },

  sections: {
    about: true,
    services: true,
    projects: true,
    experience: true,
    skills: true,
    process: true,
    testimonials: true,
    education: true, // seção opcional
    faq: true,
    contact: true,
  },

  profile: {
    name: "Rafael Moura",
    shortName: "Rafael",
    initials: "RM",
    role: "Software Engineer & Technical Consultant",
    location: "São Paulo, Brasil · atendimento remoto",
    availability: "Agenda aberta para novos projetos a partir de novembro",
    headline: "Sistemas que continuam de pé *quando o seu negócio cresce.*",
    subheadline:
      "Projeto, construo e reviso aplicações web, APIs e arquiteturas distribuídas para empresas que precisam de tecnologia confiável — sem ter que montar um time inteiro para isso.",
    primaryCta: "Conversar sobre um projeto",
    secondaryCta: "Ver projetos",
    stack: ["TypeScript", "Go", "Python", "PostgreSQL", "AWS", "Kubernetes"],
    stats: [
      { value: 12, suffix: "", label: "anos com software em produção" },
      { value: 40, suffix: "+", label: "projetos entregues" },
      { value: 9, suffix: "", label: "setores atendidos" },
      { value: 4, suffix: "", label: "países, 100% remoto" },
    ],
    photo: "", // ex.: "assets/images/retrato.jpg" (proporção 4:5)
    photoAlt: "Retrato de Rafael Moura",
  },

  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "processo", label: "Processo" },
    { id: "faq", label: "FAQ" },
  ],

  about: {
    label: "Sobre",
    title: "Engenharia com *contexto de negócio.*",
    lede: "Doze anos entre startups, fintechs e operações logísticas me ensinaram que o código é só metade do trabalho.",
    paragraphs: [
      "Comecei escrevendo um ERP para distribuidoras de bebidas no interior de São Paulo — um sistema que precisava funcionar com internet instável, estoque físico divergente e vendedores que odiavam telas complicadas. Foi ali que entendi que software bom é o que sobrevive à realidade de quem usa.",
      "Depois disso, liderei times de plataforma em uma empresa de logística e fui Staff Engineer em uma fintech de pagamentos, onde desenhei sistemas que processavam milhões de transações por dia. Desde 2023 atuo de forma independente, ajudando empresas a tirar projetos críticos do papel ou a destravar sistemas que pararam de acompanhar o negócio.",
    ],
    principles: [
      { title: "Clareza antes de código", text: "Entendo o problema, os números e as restrições antes de propor qualquer tecnologia." },
      { title: "Simples até provar o contrário", text: "Arquitetura proporcional ao tamanho do problema — sem microsserviços por moda." },
      { title: "Deixar o time mais forte", text: "Documentação, decisões registradas e pareamento para que o conhecimento fique com vocês." },
    ],
    differentials: [
      "Experiência de ponta a ponta: do discovery ao plantão em produção",
      "Comunicação direta com liderança técnica e de negócio",
      "Estimativas com faixas de risco explícitas, não números mágicos",
      "Histórico de sistemas que continuam em operação anos depois",
    ],
    interests: ["Sistemas distribuídos", "Observabilidade", "Modelagem de domínio", "LLMs aplicados", "Developer experience", "Bancos de dados"],
    milestones: [
      { year: "2014", text: "Primeiro sistema em produção: um ERP offline-first para distribuidoras." },
      { year: "2017", text: "Tech Lead do time de plataforma em uma operação logística nacional." },
      { year: "2020", text: "Staff Engineer em pagamentos: 3M+ transações/dia, 99,98% de disponibilidade." },
      { year: "2023", text: "Início da atuação independente como engenheiro e consultor técnico." },
    ],
  },

  services: {
    label: "Serviços",
    title: "Onde eu *gero mais valor.*",
    lede: "Cada frente começa pelo problema de negócio. A tecnologia é consequência.",
    items: [
      {
        icon: "web",
        title: "Aplicações web",
        text: "Produtos web completos, do primeiro protótipo navegável à versão que aguenta tráfego real.",
        problem: "Uma ideia validada que precisa virar produto rápido, sem virar dívida técnica.",
        deliverables: ["MVP em produção", "Design system básico", "CI/CD e ambientes"],
      },
      {
        icon: "api",
        title: "APIs e integrações",
        text: "APIs bem documentadas e integrações resilientes entre sistemas que não foram feitos para conversar.",
        problem: "Dados duplicados, processos manuais e planilhas fazendo papel de integração.",
        deliverables: ["API versionada (OpenAPI)", "Filas e retentativas", "Monitoramento de falhas"],
      },
      {
        icon: "arch",
        title: "Arquitetura e sistemas distribuídos",
        text: "Desenho de sistemas que escalam por partes, com fronteiras claras e custos previsíveis.",
        problem: "Um monólito que trava a cada release ou uma arquitetura fragmentada demais.",
        deliverables: ["Mapa de domínios", "ADRs documentadas", "Plano de migração gradual"],
      },
      {
        icon: "review",
        title: "Consultoria e revisão técnica",
        text: "Diagnóstico independente de código, infraestrutura e processos, com recomendações priorizadas.",
        problem: "Decisões importantes sem uma segunda opinião técnica experiente.",
        deliverables: ["Relatório de diagnóstico", "Matriz risco × esforço", "Sessão com a liderança"],
      },
      {
        icon: "perf",
        title: "Performance e escalabilidade",
        text: "Investigação orientada a dados para reduzir latência, custo de nuvem e incidentes.",
        problem: "Sistema lento em horário de pico e fatura de cloud crescendo mais que a receita.",
        deliverables: ["Perfil de gargalos", "Otimizações medidas", "Metas de SLO"],
      },
      {
        icon: "ai",
        title: "IA e automação",
        text: "Automação de fluxos com modelos de linguagem, sempre com avaliação, custos e limites claros.",
        problem: "Equipes gastando horas em triagem, classificação e tarefas repetitivas.",
        deliverables: ["Prova de conceito avaliada", "Pipeline com revisão humana", "Painel de custos"],
      },
    ],
  },

  projects: {
    label: "Projetos",
    title: "Trabalhos *em destaque.*",
    lede: "Uma seleção de projetos com contextos diferentes. Nomes, clientes e números são fictícios.",
    items: [
      {
        slug: "ledgerly",
        name: "Ledgerly",
        category: "Plataforma SaaS · Fintech",
        year: "2025",
        duration: "7 meses",
        client: "Startup de gestão financeira (fictícia)",
        cover: "saas",
        hue: 155,
        image: "", // opcional: substitui a capa ilustrativa
        summary: "Conciliação financeira automática para pequenas e médias empresas.",
        problem: "Contadores gastavam dias por mês cruzando extratos bancários com notas e planilhas.",
        solution: "Motor de conciliação com regras configuráveis e aprendizado a partir das correções do usuário.",
        stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
        results: [
          { value: "−68%", label: "tempo de fechamento mensal" },
          { value: "1,2M", label: "transações conciliadas/mês" },
          { value: "−22%", label: "churn após 6 meses" },
        ],
        details: {
          context: "A empresa tinha tração, mas o produto dependia de um processo semiautomático que não escalava: cada novo cliente exigia horas de configuração manual.",
          goals: ["Automatizar pelo menos 80% das conciliações", "Reduzir o onboarding de dias para horas", "Preparar a base para 10× mais volume"],
          role: "Arquiteto e desenvolvedor principal, trabalhando com um time de 3 pessoas do cliente. Conduzi o discovery, a arquitetura e a implementação do motor de conciliação.",
          architecture: ["Ingestão de extratos via filas com processamento idempotente", "Motor de regras versionado por cliente", "PostgreSQL particionado por período e índices parciais", "Trilha de auditoria imutável para cada decisão automática"],
          process: "Entregas quinzenais com um grupo de 12 clientes-piloto. Cada regra nova era medida contra um conjunto de conciliações reais anonimizadas.",
          learnings: "A maior melhoria não veio do algoritmo, mas de mostrar ao usuário por que cada sugestão foi feita — a confiança aumentou a adoção.",
        },
        links: { demo: "", repo: "" }, // deixe vazio para exibir "a definir"
      },
      {
        slug: "frota-viva",
        name: "Frota Viva",
        category: "Sistema de gestão · Logística",
        year: "2024",
        duration: "9 meses",
        client: "Transportadora regional (fictícia)",
        cover: "fleet",
        hue: 250,
        image: "",
        summary: "Gestão de frota, rotas e manutenção para 380 veículos.",
        problem: "Informações espalhadas em três sistemas legados e um grupo de mensagens.",
        solution: "Painel operacional único com rastreamento, ordens de manutenção e alertas.",
        stack: ["Go", "React", "PostgreSQL", "PostGIS", "Kafka"],
        results: [
          { value: "−31%", label: "veículos parados por manutenção" },
          { value: "4 → 1", label: "sistemas operacionais" },
          { value: "R$ 2,1M", label: "economia anual estimada" },
        ],
        details: {
          context: "A operação crescia 30% ao ano, mas a gestão da frota ainda dependia de ligações e planilhas. Manutenções preventivas eram esquecidas com frequência.",
          goals: ["Centralizar o status da frota em tempo real", "Automatizar a manutenção preventiva", "Integrar com o ERP financeiro existente"],
          role: "Tech lead de um time misto (2 devs do cliente + 1 designer). Responsável pela arquitetura, integrações e pela migração dos dados legados.",
          architecture: ["Telemetria dos veículos via Kafka com consumidores em Go", "Consultas geoespaciais com PostGIS", "Integração com ERP por eventos, sem acoplamento direto", "Migração em fases com execução paralela aos sistemas antigos"],
          process: "Começamos pela manutenção, onde a dor era maior. Cada módulo entrou em produção antes do próximo começar.",
          learnings: "Passar dois dias no pátio com os mecânicos mudou completamente o desenho das ordens de serviço.",
        },
        links: { demo: "", repo: "" },
      },
      {
        slug: "ponte",
        name: "Ponte",
        category: "Integração de serviços · Varejo",
        year: "2024",
        duration: "4 meses",
        client: "Rede varejista de moda (fictícia)",
        cover: "flow",
        hue: 75,
        image: "",
        summary: "Hub de integração entre e-commerce, marketplaces, lojas e um ERP legado.",
        problem: "Estoque divergente entre canais gerava cancelamentos e retrabalho diário.",
        solution: "Camada de integração orientada a eventos com reconciliação automática de estoque.",
        stack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Docker"],
        results: [
          { value: "−92%", label: "cancelamentos por falta de estoque" },
          { value: "< 40s", label: "sincronização entre canais" },
          { value: "0", label: "planilhas de conciliação" },
        ],
        details: {
          context: "Cada canal de venda tinha sua própria integração ponto a ponto com o ERP, escrita por fornecedores diferentes ao longo de oito anos.",
          goals: ["Uma fonte única de verdade para o estoque", "Adicionar novos canais em dias, não meses", "Visibilidade de falhas em tempo real"],
          role: "Consultor e desenvolvedor, desenhando a arquitetura de integração e implementando os conectores principais com o time interno.",
          architecture: ["Padrão outbox para publicar mudanças do ERP", "Conectores isolados por canal com contrato comum", "Fila de mensagens com dead-letter e reprocessamento manual", "Painel de saúde por canal"],
          process: "Substituímos uma integração por vez, começando pelo marketplace de maior volume.",
          learnings: "Integração é, antes de tudo, um problema de contrato e responsabilidade entre times.",
        },
        links: { demo: "", repo: "" },
      },
      {
        slug: "norte-insights",
        name: "Norte Insights",
        category: "Dashboard analítico · Saúde",
        year: "2023",
        duration: "5 meses",
        client: "Rede de clínicas (fictícia)",
        cover: "dashboard",
        hue: 300,
        image: "",
        summary: "Indicadores operacionais e financeiros para 22 unidades de atendimento.",
        problem: "Diretoria tomava decisões com relatórios mensais atrasados e inconsistentes.",
        solution: "Pipeline de dados e painéis diários com métricas definidas junto às áreas.",
        stack: ["Python", "dbt", "BigQuery", "Metabase", "Airflow"],
        results: [
          { value: "30 → 1", label: "dias para ter os indicadores" },
          { value: "+14%", label: "ocupação das agendas" },
          { value: "38", label: "métricas padronizadas" },
        ],
        details: {
          context: "Cada unidade calculava seus números de um jeito. Comparar desempenho entre clínicas era praticamente impossível.",
          goals: ["Um dicionário único de métricas", "Dados atualizados diariamente", "Acesso por perfil e unidade"],
          role: "Engenheiro de dados e consultor, conduzindo workshops com as áreas e construindo o pipeline.",
          architecture: ["Extração incremental dos sistemas de agenda e faturamento", "Modelagem em camadas com dbt e testes de qualidade", "Controle de acesso por unidade no BI", "Alertas automáticos para quebras de dados"],
          process: "Workshops semanais para definir cada métrica antes de qualquer gráfico.",
          learnings: "Quando todos concordam com a definição de uma métrica, metade das reuniões deixa de existir.",
        },
        links: { demo: "", repo: "" },
      },
      {
        slug: "triagem",
        name: "Triagem",
        category: "Automação com IA · Atendimento",
        year: "2025",
        duration: "3 meses",
        client: "Empresa de software B2B (fictícia)",
        cover: "automation",
        hue: 200,
        image: "",
        summary: "Classificação e roteamento automático de chamados de suporte com modelos de linguagem.",
        problem: "Chamados levavam horas para chegar ao time certo e a fila crescia toda segunda-feira.",
        solution: "Pipeline de classificação com limiar de confiança e revisão humana nos casos incertos.",
        stack: ["Python", "LLM APIs", "PostgreSQL", "pgvector", "OpenTelemetry"],
        results: [
          { value: "−74%", label: "tempo até a primeira resposta" },
          { value: "91%", label: "acerto na classificação (avaliação)" },
          { value: "US$ 0,003", label: "custo médio por chamado" },
        ],
        details: {
          context: "O time de suporte classificava manualmente cerca de 1.800 chamados por semana em 14 categorias.",
          goals: ["Rotear automaticamente os casos claros", "Nunca esconder um chamado urgente", "Custos previsíveis por chamado"],
          role: "Desenvolvedor e consultor de IA aplicada, do conjunto de avaliação à operação em produção.",
          architecture: ["Conjunto de avaliação com 2.000 chamados rotulados", "Classificação com exemplos recuperados por similaridade", "Limiar de confiança com fila de revisão humana", "Rastreamento de custo e latência por requisição"],
          process: "Duas semanas só construindo a avaliação. Cada mudança de prompt ou modelo era comparada contra ela.",
          learnings: "Um bom conjunto de avaliação vale mais que qualquer ajuste de prompt.",
        },
        links: { demo: "", repo: "" },
      },
    ],
  },

  experience: {
    label: "Experiência",
    title: "Trajetória *em produção.*",
    lede: "Diferentes níveis de responsabilidade — sempre com o pé no código.",
    items: [
      {
        company: "Independente",
        meta: "Consultoria e desenvolvimento",
        role: "Software Engineer & Technical Consultant",
        period: "2023 — hoje",
        summary: "Atendo empresas de 10 a 800 pessoas em projetos de produto, integração e arquitetura.",
        contributions: ["Mais de 15 projetos entregues em 4 países", "Revisões de arquitetura para times de até 60 engenheiros", "Mentoria técnica para lideranças recém-promovidas"],
        impact: [{ value: "15+", label: "projetos" }, { value: "92%", label: "clientes recorrentes" }],
        stack: ["TypeScript", "Go", "Python", "AWS", "LLMs"],
      },
      {
        company: "Trilha Pagamentos",
        meta: "Fintech · 450 pessoas",
        role: "Staff Software Engineer",
        period: "2019 — 2023",
        summary: "Referência técnica da plataforma de pagamentos, responsável por arquitetura e confiabilidade.",
        contributions: ["Desenhei a migração do monólito de pagamentos para serviços por domínio", "Criei o programa de SLOs e revisão de incidentes", "Reduzi o custo de infraestrutura sem perda de disponibilidade"],
        impact: [{ value: "−41%", label: "custo de infraestrutura" }, { value: "99,98%", label: "disponibilidade" }],
        stack: ["Go", "Kafka", "PostgreSQL", "Kubernetes", "AWS"],
      },
      {
        company: "Onda Logística",
        meta: "Logística · 1.200 pessoas",
        role: "Senior Engineer → Tech Lead",
        period: "2016 — 2019",
        summary: "Liderei o time de plataforma responsável por roteirização e rastreamento de entregas.",
        contributions: ["Formei e liderei um time de 6 engenheiros", "Reescrevi o motor de roteirização com ganho de eficiência de rotas", "Implantei integração contínua e deploys diários"],
        impact: [{ value: "−18%", label: "quilômetros por entrega" }, { value: "1 → 20", label: "deploys por semana" }],
        stack: ["Java", "Python", "PostgreSQL", "RabbitMQ"],
      },
      {
        company: "Kora Software",
        meta: "Software house · 40 pessoas",
        role: "Desenvolvedor Full Stack",
        period: "2014 — 2016",
        summary: "Desenvolvimento de ERPs e sistemas de gestão para distribuidoras e varejo.",
        contributions: ["Construí o módulo offline-first de vendas externas", "Automatizei a emissão fiscal para 120 clientes"],
        impact: [{ value: "120", label: "clientes atendidos" }],
        stack: ["PHP", "JavaScript", "MySQL"],
      },
    ],
  },

  skills: {
    label: "Competências",
    title: "Ferramentas, *com contexto de uso.*",
    lede: "Sem barras de porcentagem — cada grupo mostra onde a experiência foi aplicada.",
    groups: [
      { title: "Linguagens", items: ["TypeScript", "Go", "Python", "Java", "SQL"], evidence: "Go e TypeScript como linguagens principais nos últimos 6 anos." },
      { title: "Backend e APIs", items: ["Node.js", "FastAPI", "gRPC", "REST", "GraphQL", "OpenAPI"], evidence: "APIs públicas e internas com milhões de requisições por dia." },
      { title: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Design systems", "Acessibilidade"], evidence: "Painéis operacionais e produtos SaaS completos." },
      { title: "Dados e cache", items: ["PostgreSQL", "Redis", "BigQuery", "PostGIS", "dbt"], evidence: "Modelagem, particionamento e tuning de bancos em produção." },
      { title: "Cloud e infraestrutura", items: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes"], evidence: "Infraestrutura como código em todos os projetos desde 2018." },
      { title: "Arquitetura", items: ["Domain-Driven Design", "Event-driven", "Kafka", "RabbitMQ", "Outbox/Saga"], evidence: "Migrações graduais de monólitos para domínios independentes." },
      { title: "DevOps e observabilidade", items: ["GitHub Actions", "OpenTelemetry", "Grafana", "SLOs", "Load testing"], evidence: "Programas de confiabilidade e revisão de incidentes." },
      { title: "IA e ferramentas", items: ["LLM APIs", "RAG", "pgvector", "Avaliação de modelos", "Assistentes de código"], evidence: "Automação com avaliação sistemática e controle de custos." },
    ],
  },

  process: {
    label: "Processo",
    title: "Como um projeto *acontece.*",
    lede: "Etapas claras, entregas frequentes e nenhuma surpresa no fim do mês.",
    steps: [
      { title: "Descoberta", text: "Conversas com as pessoas envolvidas, leitura do que já existe e definição do problema real.", output: "Resumo do problema", time: "1–2 semanas" },
      { title: "Escopo e plano", text: "Prioridades, riscos e estimativas em faixas, com marcos verificáveis.", output: "Proposta e cronograma", time: "3–5 dias" },
      { title: "Arquitetura", text: "Desenho da solução proporcional ao problema, com decisões registradas.", output: "Diagramas e ADRs", time: "1 semana" },
      { title: "Desenvolvimento", text: "Ciclos curtos com demonstrações quinzenais em ambiente real.", output: "Software funcionando", time: "iterativo" },
      { title: "Validação", text: "Testes automatizados, testes de carga e homologação com usuários.", output: "Relatório de qualidade", time: "contínuo" },
      { title: "Entrega e evolução", text: "Documentação, transferência de conhecimento e suporte pós-entrega.", output: "Handover completo", time: "30 dias de suporte" },
    ],
  },

  testimonials: {
    label: "Depoimentos",
    title: "O que dizem *sobre o trabalho.*",
    lede: "",
    items: [
      {
        quote: "O Rafael entendeu nosso negócio antes de escrever uma linha de código. Seis meses depois, o sistema que ele desenhou suporta o triplo de clientes sem nenhum incidente grave.",
        name: "Helena Duarte",
        role: "CEO",
        company: "Ledgerly (fictícia)",
        initials: "HD",
        featured: true,
      },
      {
        quote: "A revisão de arquitetura evitou uma migração que teria custado um ano do nosso time. Direto, técnico e muito claro com a diretoria.",
        name: "Marcos Tavares",
        role: "Head de Engenharia",
        company: "Varejo Sul (fictícia)",
        initials: "MT",
      },
      {
        quote: "Trabalhou lado a lado com nosso time e deixou todo mundo mais forte. A documentação que ficou é usada até hoje no onboarding.",
        name: "Juliana Prates",
        role: "Engineering Manager",
        company: "Norte Saúde (fictícia)",
        initials: "JP",
      },
    ],
  },

  education: {
    label: "Formação",
    title: "Formação e *comunidade.*",
    groups: [
      {
        title: "Formação acadêmica",
        items: [
          { name: "Bacharelado em Ciência da Computação", org: "Universidade de exemplo", year: "2010 — 2014" },
          { name: "Especialização em Arquitetura de Software", org: "Instituição de exemplo", year: "2018" },
        ],
      },
      {
        title: "Certificações e cursos",
        items: [
          { name: "Certificação em arquitetura cloud — nível profissional", org: "Registro de exemplo", year: "2022" },
          { name: "Curso de sistemas distribuídos", org: "Plataforma de exemplo", year: "2020" },
          { name: "Avaliação e operação de LLMs", org: "Plataforma de exemplo", year: "2024" },
        ],
      },
      {
        title: "Comunidade e eventos",
        items: [
          { name: "Palestra: migrando monólitos sem parar a operação", org: "Evento técnico de exemplo", year: "2025" },
          { name: "Mentor voluntário em programa de formação", org: "Comunidade de exemplo", year: "2021 — hoje" },
        ],
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Perguntas *frequentes.*",
    items: [
      { q: "Quais tipos de projeto você aceita?", a: "Aplicações web, APIs, integrações, revisões de arquitetura e automações com IA. Funciono melhor em projetos com impacto direto no negócio e em que eu possa participar desde a definição do problema." },
      { q: "Como funciona a contratação?", a: "Começamos com uma conversa de 30 minutos, sem custo. Se fizer sentido, envio uma proposta com escopo, faixas de estimativa e marcos de entrega. O contrato é simples e pode ser feito via pessoa jurídica." },
      { q: "Você trabalha por projeto ou por hora?", a: "Os dois. Projetos com escopo claro costumam ser por valor fechado com marcos. Consultorias e reforço de time funcionam melhor em pacotes mensais de horas." },
      { q: "Como são definidos os prazos?", a: "A partir da descoberta, com estimativas em faixas (otimista, provável e conservadora) e os riscos explícitos. Os prazos são revisados a cada entrega quinzenal, com transparência total." },
      { q: "Você oferece suporte após a entrega?", a: "Sim. Todo projeto inclui 30 dias de suporte para correções. Depois disso, é possível contratar um plano mensal de evolução e acompanhamento." },
      { q: "É possível trabalhar com uma equipe existente?", a: "É o cenário mais comum. Participo das rotinas do time, faço pareamento e revisões de código, e deixo a documentação necessária para que vocês sigam sem dependência." },
    ],
  },

  contact: {
    label: "Contato",
    title: "Vamos conversar sobre *o seu projeto?*",
    text: "Conte em poucas linhas o que você precisa. Respondo em até um dia útil com os próximos passos — ou com uma indicação, se eu não for a melhor pessoa para ajudar.",
    email: "contato@rafaelmoura.exemplo",
    whatsapp: {
      number: "5511900000000", // formato internacional, só números
      message: "Olá, Rafael! Vi seu portfólio e gostaria de conversar sobre um projeto.",
      isExample: true, // exibe o aviso "número de exemplo"
    },
    subjects: ["Novo projeto", "Consultoria ou revisão de arquitetura", "Reforço para um time existente", "Outro assunto"],
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/seu-usuario", handle: "/in/seu-usuario" },
      { label: "GitHub", url: "https://github.com/seu-usuario", handle: "@seu-usuario" },
      { label: "Blog técnico", url: "#", handle: "em breve" },
    ],
  },

  footer: {
    description: "Engenharia de software e consultoria técnica para empresas que precisam de sistemas confiáveis.",
  },
};
