/* =====================================================================
   Comportamento do site. O conteúdo vem de assets/js/data.js (window.SITE).
   ===================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var S = window.SITE;
  if (!S) { console.warn("SITE não encontrado: verifique assets/js/data.js"); return; }
  root.classList.add("js");

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var rich = function (v) { return esc(v).replace(/\*(.+?)\*/g, "<em>$1</em>"); };
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var demo = function (label) {
    return S.meta && S.meta.showDemoNotices ? '<span class="demo-note">' + esc(label || S.meta.demoLabel) + "</span>" : "";
  };
  var map = function (arr, fn) { return (arr || []).map(fn).join(""); };

  /* ---------- Section numbering ---------- */
  var ORDER = ["about", "services", "projects", "experience", "skills", "process", "testimonials", "education", "faq", "contact"];
  var enabled = ORDER.filter(function (k) { return S.sections[k] !== false && S[k]; });
  var num = function (key) { return pad(enabled.indexOf(key) + 1); };

  function head(key, id, d, extra) {
    return '<header class="section-head" data-reveal>' +
      '<p class="eyebrow"><span class="eyebrow-num">' + num(key) + '</span><span>' + esc(d.label) + "</span></p>" +
      '<h2 class="section-title" id="' + id + '-title">' + rich(d.title) + "</h2>" +
      (d.lede ? '<p class="section-lede">' + rich(d.lede) + "</p>" : "") + (extra || "") +
      "</header>";
  }

  /* ---------- Icons (formas simples) ---------- */
  var ICONS = {
    web: '<rect x="5" y="9" width="34" height="26" rx="3"/><path d="M5 16h34"/><rect class="fill-accent" x="10" y="21" width="9" height="9"/>',
    api: '<circle cx="11" cy="22" r="5"/><circle cx="33" cy="12" r="5"/><circle cx="33" cy="32" r="5"/><path d="M16 20l12-6M16 24l12 6"/><circle class="fill-accent" cx="11" cy="22" r="2"/>',
    arch: '<rect x="16" y="5" width="12" height="9" rx="2"/><rect x="5" y="30" width="12" height="9" rx="2"/><rect x="27" y="30" width="12" height="9" rx="2"/><path d="M22 14v8M11 30v-8h22v8"/><rect class="fill-accent" x="19.5" y="19.5" width="5" height="5" transform="rotate(45 22 22)"/>',
    review: '<circle cx="19" cy="19" r="11"/><path d="M27 27l11 11"/><path d="M14 19h10"/><circle class="fill-accent" cx="19" cy="19" r="2.5"/>',
    perf: '<path d="M6 36h32"/><path d="M8 30l9-9 6 6 13-15"/><rect class="fill-accent" x="33" y="9" width="6" height="6"/>',
    ai: '<rect x="9" y="9" width="26" height="26" rx="4"/><path d="M15 4v5M22 4v5M29 4v5M15 35v5M22 35v5M29 35v5M4 15h5M4 22h5M4 29h5M35 15h5M35 22h5M35 29h5"/><rect class="fill-accent" x="17" y="17" width="10" height="10"/>',
  };
  var icon = function (k) {
    return '<svg class="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.web) + "</svg>";
  };

  /* ---------- Hero ---------- */
  function renderHero() {
    var p = S.profile;
    document.title = p.name + " — " + p.role;
    $$('[data-bind="name"]').forEach(function (el) { el.textContent = p.name; });
    var b = function (k, v) { var el = $('#hero-copy [data-bind="' + k + '"]'); if (el) el.textContent = v; };
    b("role", p.role); b("subheadline", p.subheadline); b("primaryCta", p.primaryCta); b("secondaryCta", p.secondaryCta);
    $("#hero-title").innerHTML = rich(p.headline);
    $("#hero-stack").innerHTML = "<b>Stack principal</b>" + map(p.stack, function (t) { return "<span>" + esc(t) + "</span>"; });
    $("#hero-stats").innerHTML = map(p.stats, function (s) {
      return '<div><dt>' + esc(s.label) + '</dt><dd data-count="' + s.value + '" data-suffix="' + esc(s.suffix) + '">' + esc(s.value) + esc(s.suffix) + "</dd></div>";
    }) + demo();

    $$(".diagram .wire").forEach(function (w, i) {
      var len = Math.ceil(w.getTotalLength ? w.getTotalLength() : 200);
      w.style.setProperty("--len", len); w.style.setProperty("--i", i);
    });
    $$(".diagram .nodes rect").forEach(function (r, i) { r.style.setProperty("--i", i); });
    $$(".diagram .labels text").forEach(function (t, i) { t.style.setProperty("--i", i); });
  }

  function countUp() {
    if (reduceMotion) return;
    $$("#hero-stats [data-count]").forEach(function (el) {
      var target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || "", start = null, dur = 1400;
      if (!isFinite(target)) return;
      el.textContent = "0" + suffix;
      var step = function (t) {
        if (!start) start = t;
        var k = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * e) + suffix;
        if (k < 1) requestAnimationFrame(step);
      };
      setTimeout(function () { requestAnimationFrame(step); }, 500);
    });
  }

  /* ---------- About ---------- */
  function renderAbout(el) {
    var a = S.about, p = S.profile;
    var photo = p.photo
      ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.photoAlt) + '" width="800" height="1000" loading="lazy" decoding="async" onerror="this.remove()">'
      : "";
    el.innerHTML = '<div class="container">' + head("about", "sobre", a) +
      '<div class="about-grid">' +
        '<div class="about-visual">' +
          '<div class="portrait" data-reveal><div class="placeholder"><span>retrato 4:5 — assets/images/</span></div>' + photo +
            '<div class="portrait-tag"><span>' + esc(p.name) + '</span><small>' + esc(p.location.split("·")[0].trim()) + "</small></div></div>" +
          '<ol class="milestones" data-reveal style="--i:1">' + map(a.milestones, function (m) { return "<li><b>" + esc(m.year) + "</b><span>" + esc(m.text) + "</span></li>"; }) + "</ol>" +
        "</div>" +
        '<div class="about-body">' +
          '<div class="about-text" data-reveal>' + map(a.paragraphs, function (t) { return "<p>" + rich(t) + "</p>"; }) + "</div>" +
          '<div><p class="sub-label" data-reveal>Filosofia de trabalho</p><div class="principles">' +
            map(a.principles, function (x, i) {
              return '<div class="principle" data-reveal style="--i:' + i + '"><span class="principle-num">' + pad(i + 1) + "</span><h3>" + esc(x.title) + "</h3><p>" + esc(x.text) + "</p></div>";
            }) + "</div></div>" +
          '<div class="about-split">' +
            '<div data-reveal><p class="sub-label">Diferenciais</p><ul class="check-list">' + map(a.differentials, function (d) { return "<li>" + esc(d) + "</li>"; }) + "</ul></div>" +
            '<div data-reveal style="--i:1"><p class="sub-label">Interesses técnicos</p><div class="chips">' + map(a.interests, function (t) { return '<span class="chip">' + esc(t) + "</span>"; }) + "</div></div>" +
          "</div>" +
        "</div>" +
      "</div></div>";
  }

  /* ---------- Services ---------- */
  function renderServices(el) {
    var s = S.services;
    el.innerHTML = '<div class="container">' + head("services", "servicos", s) +
      '<div class="services-grid">' + map(s.items, function (x, i) {
        return '<article class="service" data-reveal style="--i:' + (i % 3) + '">' +
          '<div class="service-top">' + icon(x.icon) + '<span class="service-num">' + pad(i + 1) + "</span></div>" +
          "<h3>" + esc(x.title) + "</h3>" +
          '<p class="service-text">' + esc(x.text) + "</p>" +
          '<p class="service-problem"><b>Resolve</b>' + esc(x.problem) + "</p>" +
          '<ul class="service-deliv" aria-label="Principais entregáveis">' + map(x.deliverables, function (d) { return "<li>" + esc(d) + "</li>"; }) + "</ul>" +
        "</article>";
      }) + "</div></div>";
  }

  /* ---------- Project covers (ilustrações em HTML/CSS) ---------- */
  var COVERS = {
    saas: function (p) {
      var rows = [["Banco Aurora · 12/09", "R$ 18.420,00", "ok", "conciliado"], ["NF 3321 · Loja 04", "R$ 2.180,50", "ok", "conciliado"], ["Pix recebido", "R$ 940,00", "warn", "revisar"], ["Boleto 88213", "R$ 5.600,00", "ok", "conciliado"], ["Tarifa bancária", "R$ 34,90", "", "sugerido"]];
      return '<div class="cv-win"><div class="cv-bar"><i></i><i></i><i></i><em>' + esc(p.name.toLowerCase()) + '.app / conciliação</em></div><div class="cv-body">' +
        '<div class="cv-side"><b></b><span class="on"></span><span></span><span></span><span></span><span></span></div>' +
        '<div class="cv-main"><div class="cv-kpis"><div class="cv-kpi"><span>conciliado hoje</span><strong>R$ 1,84M</strong></div><div class="cv-kpi"><span>automático</span><strong>87%</strong></div><div class="cv-kpi"><span>pendências</span><strong>12</strong></div></div>' +
        '<div class="cv-rows">' + map(rows, function (r) { return '<div class="cv-row"><span>' + r[0] + "</span><span>" + r[1] + '</span><span class="cv-pill ' + r[2] + '">' + r[3] + "</span></div>"; }) + "</div></div></div></div>";
    },
    fleet: function () {
      var v = [["VX-2041", "ok", "em rota"], ["VX-1187", "warn", "manutenção"], ["VX-3302", "ok", "em rota"], ["VX-0954", "", "pátio"], ["VX-2210", "ok", "em rota"]];
      return '<div class="cv-win"><div class="cv-bar"><i></i><i></i><i></i><em>frota / operação ao vivo</em></div><div class="cv-body">' +
        '<div class="cv-map"><svg viewBox="0 0 200 160" preserveAspectRatio="none" aria-hidden="true"><path class="road" d="M0 120 L60 100 L110 110 L200 60"/><path class="road" d="M40 0 L60 100 L70 160"/><path class="road" d="M110 110 L140 160"/><path class="route" d="M20 115 L60 100 L110 110 L170 75"/><circle class="pin" cx="60" cy="100" r="4"/><circle class="pin" cx="110" cy="110" r="4"/><circle class="pin hot" cx="170" cy="75" r="5"/><circle class="pin" cx="52" cy="40" r="4"/></svg></div>' +
        '<div class="cv-list">' + map(v, function (x) { return '<div class="cv-veh"><span>' + x[0] + '</span><span class="cv-pill ' + x[1] + '">' + x[2] + "</span></div>"; }) + "</div></div></div>";
    },
    flow: function (p) {
      var node = function (t) { return '<div class="cv-node">' + t + "</div>"; };
      return '<div class="cv-stage"><div class="cv-col l">' + node("e-commerce") + node("marketplace") + node("lojas · PDV") + "</div>" +
        '<div class="cv-hub"><div>' + esc(p.name.toLowerCase()) + "<small>&lt; 40s</small></div></div>" +
        '<div class="cv-col r">' + node("ERP legado") + node("estoque") + node("fiscal") + "</div></div>";
    },
    dashboard: function () {
      var bars = [42, 58, 50, 66, 61, 74, 70, 83, 78, 92];
      return '<div class="cv-win"><div class="cv-bar"><i></i><i></i><i></i><em>insights / visão geral</em></div><div class="cv-dash">' +
        '<div class="cv-kpis"><div class="cv-kpi"><span>ocupação</span><strong>84%</strong></div><div class="cv-kpi"><span>ticket médio</span><strong>R$ 212</strong></div><div class="cv-kpi"><span>no-show</span><strong>6,1%</strong></div><div class="cv-kpi"><span>unidades</span><strong>22</strong></div></div>' +
        '<div class="cv-panel"><span>atendimentos / semana</span><div class="cv-bars">' + map(bars, function (h, i) { return '<i class="' + (i > 7 ? "on" : "") + '" style="height:' + h + '%"></i>'; }) + "</div></div>" +
        '<div class="cv-panel"><span>receita · 12 meses</span><svg viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="49" x2="100" y2="49"/><line x1="0" y1="25" x2="100" y2="25"/><polyline points="0,40 10,38 20,41 30,33 40,35 50,27 60,29 70,20 80,22 90,14 100,10"/></svg></div>' +
        "</div></div>";
    },
    automation: function () {
      var t = [["#4821", "Erro ao emitir nota fiscal", "fiscal", 94], ["#4822", "Como adiciono um usuário?", "conta", 98], ["#4823", "Integração parou de sincronizar", "integração", 88], ["#4824", "Cobrança em duplicidade?", "financeiro", 52], ["#4825", "Lentidão no relatório mensal", "performance", 81]];
      return '<div class="cv-win"><div class="cv-bar"><i></i><i></i><i></i><em>triagem / fila de entrada</em></div><div class="cv-tickets">' +
        map(t, function (x) {
          var low = x[3] < 70;
          return '<div class="cv-ticket"><b>' + x[0] + "</b><span>" + x[1] + '</span><span class="cv-pill ' + (low ? "warn" : "ok") + '">' + (low ? "revisão humana" : x[2]) + '</span><span class="cv-conf' + (low ? " low" : "") + '"><i style="width:' + x[3] + '%"></i></span></div>';
        }) + "</div></div>";
    },
  };
  function cover(p) {
    var inner = p.image
      ? '<img src="' + esc(p.image) + '" alt="Capa do projeto ' + esc(p.name) + '" loading="lazy" decoding="async" onerror="this.remove()">'
      : "";
    return '<div class="cover" style="--h:' + (p.hue || 250) + '" aria-hidden="' + (p.image ? "false" : "true") + '">' +
      '<span class="cover-label">' + esc(p.category.split("·")[0].trim()) + "</span>" +
      (COVERS[p.cover] ? COVERS[p.cover](p) : "") + inner + "</div>";
  }

  /* ---------- Projects ---------- */
  function renderProjects(el) {
    var s = S.projects;
    el.innerHTML = '<div class="container">' + head("projects", "projetos", s) +
      '<div class="projects-grid">' + map(s.items, function (p, i) {
        return '<article class="project" data-reveal style="--i:' + (i % 2) + '">' + cover(p) +
          '<div class="project-body">' +
            '<p class="project-meta"><span>' + esc(p.category) + "</span><span>" + esc(p.year) + "</span></p>" +
            "<h3>" + esc(p.name) + "</h3>" +
            '<p class="project-summary">' + esc(p.summary) + "</p>" +
            '<div class="project-ps"><p><b>Problema</b>' + esc(p.problem) + "</p><p><b>Solução</b>" + esc(p.solution) + "</p></div>" +
            '<div class="chips">' + map(p.stack, function (t) { return '<span class="chip chip-mono">' + esc(t) + "</span>"; }) + "</div>" +
            '<div class="results">' + map(p.results, function (r) { return "<div><strong>" + esc(r.value) + "</strong><span>" + esc(r.label) + "</span></div>"; }) + "</div>" +
            '<div class="project-foot">' + demo("Resultados de demonstração") +
              '<button class="project-open" type="button" data-project="' + esc(p.slug) + '" aria-haspopup="dialog">Ver estudo de caso <span aria-hidden="true">→</span></button></div>' +
          "</div></article>";
      }) + "</div></div>";
  }

  /* ---------- Project dialog ---------- */
  var dialog = $("#project-dialog"), lastFocus = null;
  function openProject(slug, push) {
    var p = (S.projects.items || []).filter(function (x) { return x.slug === slug; })[0];
    if (!p || !dialog) return;
    var d = p.details || {};
    var block = function (title, body) { return body ? '<section class="d-block"><h3>' + title + "</h3><div>" + body + "</div></section>" : ""; };
    var list = function (arr) { return arr && arr.length ? "<ul>" + map(arr, function (x) { return "<li>" + esc(x) + "</li>"; }) + "</ul>" : ""; };
    var link = function (url, label) {
      return url
        ? '<a class="btn btn-ghost" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + ' <span class="arrow" aria-hidden="true">↗</span></a>'
        : '<span class="btn btn-ghost" aria-disabled="true">' + label + " — a definir</span>";
    };
    $("#dialog-content").innerHTML =
      '<div class="dialog-bar"><span>Estudo de caso · ' + esc(p.category) + '</span><button class="dialog-close" type="button" aria-label="Fechar estudo de caso"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13"/></svg></button></div>' +
      '<div class="dialog-hero"><div>' + demo("Projeto fictício de demonstração") + '<h2 id="dialog-title">' + esc(p.name) + "</h2></div><p>" + esc(p.summary) + "</p></div>" +
      '<dl class="dialog-facts"><div><dt>Cliente</dt><dd>' + esc(p.client) + "</dd></div><div><dt>Ano</dt><dd>" + esc(p.year) + "</dd></div><div><dt>Duração</dt><dd>" + esc(p.duration) + "</dd></div><div><dt>Stack</dt><dd>" + esc((p.stack || []).join(", ")) + "</dd></div></dl>" +
      '<div class="dialog-cover">' + cover(p) + "</div>" +
      '<div class="dialog-body">' +
        block("Contexto e desafio", "<p>" + esc(d.context) + "</p><p><b>Problema:</b> " + esc(p.problem) + "</p>") +
        block("Objetivos", list(d.goals)) +
        block("Minha atuação", d.role ? "<p>" + esc(d.role) + "</p>" : "") +
        block("Arquitetura e decisões", list(d.architecture)) +
        block("Processo", d.process ? "<p>" + esc(d.process) + "</p>" : "") +
        block("Resultados", '<div class="results">' + map(p.results, function (r) { return "<div><strong>" + esc(r.value) + "</strong><span>" + esc(r.label) + "</span></div>"; }) + "</div>" + demo("Números fictícios")) +
        block("Aprendizados", d.learnings ? "<p>" + esc(d.learnings) + "</p>" : "") +
        block("Links", '<div class="dialog-links">' + link(p.links && p.links.demo, "Ver aplicação") + link(p.links && p.links.repo, "Ver repositório") + "</div>") +
      "</div>";
    $("#dialog-content").scrollTop = 0;
    lastFocus = document.activeElement;
    if (typeof dialog.showModal === "function") { if (!dialog.open) dialog.showModal(); }
    else dialog.setAttribute("open", "");
    document.body.style.overflow = "hidden";
    $(".dialog-close", dialog).focus();
    if (push !== false) history.replaceState(null, "", "#projeto-" + p.slug);
  }
  function closeProject() {
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close(); else dialog.removeAttribute("open");
  }
  if (dialog) {
    dialog.addEventListener("close", function () {
      document.body.style.overflow = "";
      if (location.hash.indexOf("#projeto-") === 0) history.replaceState(null, "", "#projetos");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest(".dialog-close")) closeProject();
    });
  }

  /* ---------- Experience ---------- */
  function renderExperience(el) {
    var s = S.experience;
    el.innerHTML = '<div class="container">' + head("experience", "experiencia", s) +
      '<ol class="timeline">' + map(s.items, function (j) {
        return '<li class="job" data-reveal>' +
          '<div class="job-when"><p class="job-period">' + esc(j.period) + '</p><p class="job-company">' + esc(j.company) + '</p><p class="job-meta">' + esc(j.meta) + "</p></div>" +
          '<div class="job-main"><h3>' + esc(j.role) + '</h3><p class="job-summary">' + esc(j.summary) + "</p>" +
            '<ul class="job-contrib" aria-label="Principais contribuições">' + map(j.contributions, function (c) { return "<li>" + esc(c) + "</li>"; }) + "</ul>" +
            '<div class="job-side"><div class="impact">' + map(j.impact, function (m) { return "<div><strong>" + esc(m.value) + "</strong><span>" + esc(m.label) + "</span></div>"; }) + "</div>" +
            '<div class="chips">' + map(j.stack, function (t) { return '<span class="chip chip-mono">' + esc(t) + "</span>"; }) + "</div></div>" +
          "</div></li>";
      }) + "</ol></div>";
  }

  /* ---------- Skills ---------- */
  function renderSkills(el) {
    var s = S.skills;
    el.innerHTML = '<div class="container">' + head("skills", "competencias", s) +
      '<div class="skills-grid">' + map(s.groups, function (g, i) {
        return '<section class="skill-group" data-reveal style="--i:' + (i % 4) + '" aria-labelledby="sk-' + i + '">' +
          '<div class="skill-head"><h3 id="sk-' + i + '">' + esc(g.title) + '</h3><span class="count">' + pad(g.items.length) + "</span></div>" +
          '<ul class="chips">' + map(g.items, function (t) { return '<li class="chip">' + esc(t) + "</li>"; }) + "</ul>" +
          (g.evidence ? '<p class="skill-evidence">' + esc(g.evidence) + "</p>" : "") + "</section>";
      }) + "</div></div>";
  }

  /* ---------- Process ---------- */
  function renderProcess(el) {
    var s = S.process;
    el.innerHTML = '<div class="container">' + head("process", "processo", s) +
      '<div class="process" data-reveal data-reveal-keep><ol class="process-list">' + map(s.steps, function (x, i) {
        return '<li class="step" data-reveal style="--i:' + i + '"><span class="step-marker">' + pad(i + 1) + "</span><h3>" + esc(x.title) + "</h3><p>" + esc(x.text) + "</p>" +
          '<p class="step-foot"><b>' + esc(x.output) + "</b><span>" + esc(x.time) + "</span></p></li>";
      }) + "</ol></div></div>";
  }

  /* ---------- Testimonials ---------- */
  function renderTestimonials(el) {
    var s = S.testimonials;
    var items = (s.items || []).slice().sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
    el.innerHTML = '<div class="container">' + head("testimonials", "depoimentos", s) +
      '<div class="quotes">' + map(items, function (t, i) {
        return '<figure class="quote' + (t.featured ? " quote--featured" : "") + '" data-reveal style="--i:' + i + '">' +
          "<blockquote><p>" + esc(t.quote) + "</p></blockquote>" +
          '<div class="quote-foot"><figcaption><span class="avatar" aria-hidden="true">' + esc(t.initials) + '</span><span class="quote-who"><b>' + esc(t.name) + "</b><span>" + esc(t.role) + " · " + esc(t.company) + "</span></span></figcaption>" +
          demo("Depoimento demonstrativo") + "</div></figure>";
      }) + "</div></div>";
  }

  /* ---------- Education ---------- */
  function renderEducation(el) {
    var s = S.education;
    el.innerHTML = '<div class="container">' + head("education", "formacao", s) +
      '<div class="edu-grid">' + map(s.groups, function (g, i) {
        return '<div class="edu-group" data-reveal style="--i:' + i + '"><h3>' + esc(g.title) + "</h3><ul>" +
          map(g.items, function (x) { return "<li><b>" + esc(x.name) + "</b><span>" + esc(x.org) + "<i>" + esc(x.year) + "</i></span></li>"; }) + "</ul></div>";
      }) + "</div></div>";
  }

  /* ---------- FAQ ---------- */
  function renderFaq(el) {
    var s = S.faq;
    el.innerHTML = '<div class="container">' + head("faq", "faq", s) +
      '<div class="faq-layout"><div class="faq-list" data-reveal>' + map(s.items, function (f, i) {
        return '<div class="faq-item"><h3 class="faq-q"><button class="faq-btn" type="button" id="faq-q-' + i + '" aria-expanded="false" aria-controls="faq-a-' + i + '"><span>' + esc(f.q) + '</span><span class="faq-icon" aria-hidden="true"></span></button></h3>' +
          '<div class="faq-a" id="faq-a-' + i + '" role="region" aria-labelledby="faq-q-' + i + '"><div><p>' + esc(f.a) + "</p></div></div></div>";
      }) + "</div></div></div>";
    el.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-btn"); if (!btn) return;
      var item = btn.closest(".faq-item"), open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("is-open", !open);
    });
  }

  /* ---------- Contact ---------- */
  function waUrl() {
    var w = S.contact.whatsapp || {};
    return "https://wa.me/" + String(w.number || "").replace(/\D/g, "") + "?text=" + encodeURIComponent(w.message || "");
  }
  function renderContact(el) {
    var c = S.contact, w = c.whatsapp || {};
    el.classList.add("contact");
    el.innerHTML = '<div class="container">' + head("contact", "contato", c) +
      '<div class="contact-grid">' +
        '<div class="contact-info" data-reveal>' +
          "<p>" + esc(c.text) + "</p>" +
          '<div class="email-row"><a class="email-link" href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a><button class="copy-btn" type="button" data-copy="' + esc(c.email) + '">copiar</button></div>' +
          '<div class="contact-actions"><a class="btn btn-light" href="' + esc(waUrl()) + '" target="_blank" rel="noopener">Conversar pelo WhatsApp <span class="arrow" aria-hidden="true">↗</span></a>' +
            (w.isExample ? '<span class="wa-note">número de exemplo — configure em data.js</span>' : "") + "</div>" +
          '<nav class="socials" aria-label="Redes profissionais">' + map(c.socials, function (s) {
            return '<a href="' + esc(s.url) + '"' + (/^https?:/.test(s.url) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(s.label) + "<span>" + esc(s.handle) + " ↗</span></a>";
          }) + "</nav>" +
          '<div class="meta-list"><span>' + esc(S.profile.location) + "</span><span>" + esc(S.profile.availability) + "</span></div>" +
        "</div>" +
        '<form class="contact-form" id="contact-form" novalidate data-reveal style="--i:1">' +
          field("name", "Nome", '<input id="f-name" name="name" type="text" autocomplete="name" required placeholder="Seu nome">') +
          field("email", "E-mail", '<input id="f-email" name="email" type="email" autocomplete="email" required placeholder="voce@empresa.com">') +
          field("subject", "Assunto", '<select id="f-subject" name="subject" required>' + map(c.subjects, function (s) { return "<option>" + esc(s) + "</option>"; }) + "</select>", true) +
          field("message", "Mensagem", '<textarea id="f-message" name="message" required minlength="20" placeholder="Contexto, objetivo e prazo aproximado do projeto."></textarea>', true) +
          '<div class="form-foot"><p class="form-hint">Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta. Nada é enviado por este site.</p><button class="btn btn-light" type="submit">Preparar mensagem <span class="arrow" aria-hidden="true">→</span></button></div>' +
          '<div class="form-status" id="form-status" role="status" aria-live="polite" hidden></div>' +
        "</form>" +
      "</div></div>";
    bindForm();
  }
  function field(name, label, control, full) {
    return '<div class="field' + (full ? " field--full" : "") + '"><label for="f-' + name + '">' + label + "</label>" + control +
      '<span class="field-error" id="f-' + name + '-err"></span></div>';
  }
  function bindForm() {
    var form = $("#contact-form"); if (!form) return;
    var status = $("#form-status");
    var messages = {
      name: "Informe seu nome.",
      email: "Informe um e-mail válido.",
      message: "Escreva pelo menos 20 caracteres sobre o projeto.",
    };
    var validate = function (input) {
      var ok = input.checkValidity() && input.value.trim().length > 0;
      var err = $("#" + input.id + "-err"), wrap = input.closest(".field");
      wrap.classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      if (err) { err.textContent = ok ? "" : (messages[input.name] || "Campo obrigatório."); input.setAttribute("aria-describedby", err.id); }
      return ok;
    };
    $$("input, textarea", form).forEach(function (i) {
      i.addEventListener("blur", function () { if (i.value) validate(i); });
      i.addEventListener("input", function () { if (i.closest(".has-error")) validate(i); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = $$("input, textarea", form), valid = fields.map(validate).every(Boolean);
      if (!valid) { var bad = $(".has-error input, .has-error textarea", form); if (bad) bad.focus(); return; }
      var d = new FormData(form);
      var subject = "[Portfólio] " + d.get("subject") + " — " + d.get("name");
      var body = d.get("message") + "\n\n—\n" + d.get("name") + "\n" + d.get("email");
      var href = "mailto:" + S.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      status.hidden = false;
      status.innerHTML = "<p><b>Mensagem preparada.</b> Tentamos abrir seu aplicativo de e-mail — o envio só acontece quando você confirmar por lá. Se nada abriu, copie o texto e envie para " + esc(S.contact.email) + ".</p>" +
        '<div class="row"><a class="btn btn-sm btn-light" href="' + esc(href) + '">Abrir e-mail novamente</a><button class="btn btn-sm btn-outline-light" type="button" data-copy-msg>Copiar mensagem</button></div>';
      $("[data-copy-msg]", status).addEventListener("click", function (ev) { copy("Assunto: " + subject + "\n\n" + body, ev.currentTarget, "Copiado"); });
      window.location.href = href;
    });
  }
  function copy(text, btn, done) {
    var original = btn.textContent;
    var ok = function () { btn.textContent = done || "copiado"; setTimeout(function () { btn.textContent = original; }, 1800); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback);
    else fallback();
    function fallback() {
      var t = document.createElement("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); ok(); } catch (e) { btn.textContent = "copie manualmente"; }
      t.remove();
    }
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var f = $("#site-footer"), p = S.profile, c = S.contact || {};
    var navItems = navList();
    f.innerHTML = '<div class="container footer-grid">' +
      '<div class="footer-brand"><a class="brand" href="#inicio"><span class="brand-mark" aria-hidden="true"></span><span>' + esc(p.name) + "</span></a><p>" + esc(S.footer.description) + "</p></div>" +
      '<div class="footer-col"><h2>Navegação</h2>' + map(navItems, function (n) { return '<a href="#' + n.id + '">' + esc(n.label) + "</a>"; }) + "</div>" +
      '<div class="footer-col"><h2>Contato</h2>' + (c.email ? '<a href="mailto:' + esc(c.email) + '">E-mail</a>' : "") +
        map(c.socials, function (s) { return '<a href="' + esc(s.url) + '"' + (/^https?:/.test(s.url) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(s.label) + "</a>"; }) + "</div>" +
      '<div class="footer-bottom"><span>© <span id="year"></span> ' + esc(p.name) + ". Todos os direitos reservados." + (S.meta.showDemoNotices ? " · Conteúdo demonstrativo." : "") + "</span>" +
        '<button class="to-top" type="button" id="to-top">Voltar ao topo <span aria-hidden="true">↑</span></button></div>' +
      "</div>";
    $("#year").textContent = new Date().getFullYear();
    $("#to-top").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      var b = $(".brand"); if (b) b.focus({ preventScroll: true });
    });
  }

  /* ---------- Navigation ---------- */
  function navList() {
    return (S.nav || []).filter(function (n) { var s = document.getElementById(n.id); return s && s.innerHTML.trim(); });
  }
  function renderNav() {
    var items = navList();
    $("#nav-list").innerHTML = map(items, function (n) { return '<li><a href="#' + n.id + '" data-nav="' + n.id + '">' + esc(n.label) + "</a></li>"; });
    $("#mobile-list").innerHTML = map(items, function (n, i) { return '<li><a href="#' + n.id + '" data-nav="' + n.id + '">' + esc(n.label) + "<span>" + pad(i + 1) + "</span></a></li>"; }) +
      '<li><a href="#contato" data-nav="contato">Contato<span>' + pad(items.length + 1) + "</span></a></li>";
  }
  function bindHeader() {
    var header = $("#site-header"), toggle = $(".menu-toggle"), menu = $("#mobile-menu");
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 12); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.classList.toggle("menu-open", open);
      if (open) {
        menu.hidden = false; header.classList.add("is-scrolled");
        requestAnimationFrame(function () { menu.classList.add("is-open"); });
      } else {
        menu.classList.remove("is-open");
        setTimeout(function () { if (toggle.getAttribute("aria-expanded") === "false") menu.hidden = true; }, 300);
        onScroll();
      }
    };
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });
  }
  function bindActiveSection() {
    if (!("IntersectionObserver" in window)) return;
    var links = $$("[data-nav]");
    var ids = links.map(function (a) { return a.dataset.nav; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    var watch = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    // Seções sem link (ex.: competências) herdam o link anterior
    var extra = { competencias: "experiencia", depoimentos: "processo", formacao: "processo" };
    Object.keys(extra).forEach(function (k) { var el = document.getElementById(k); if (el && el.innerHTML.trim()) watch.push(el); });
    var set = function (id) {
      links.forEach(function (a) { var on = a.dataset.nav === id; a.classList.toggle("is-active", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id; set(extra[id] && ids.indexOf(id) === -1 ? extra[id] : id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    watch.forEach(function (s) { io.observe(s); });
    var hero = document.getElementById("inicio");
    if (hero) new IntersectionObserver(function (e) { if (e[0].isIntersecting) set(null); }, { rootMargin: "-45% 0px -50% 0px" }).observe(hero);
  }

  /* ---------- Reveal on scroll ---------- */
  function bindReveal() {
    var els = $$("[data-reveal]");
    var showAll = function () { els.forEach(function (el) { el.classList.add("is-in"); }); };
    if (reduceMotion || !("IntersectionObserver" in window)) { root.classList.add("no-motion"); showAll(); return; }
    try {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      els.forEach(function (el) { io.observe(el); });
    } catch (err) { showAll(); }
  }

  /* ---------- Init ---------- */
  var RENDER = {
    about: renderAbout, services: renderServices, projects: renderProjects, experience: renderExperience,
    skills: renderSkills, process: renderProcess, testimonials: renderTestimonials, education: renderEducation,
    faq: renderFaq, contact: renderContact,
  };
  try {
    renderHero();
    $$("[data-section]").forEach(function (el) {
      var key = el.dataset.section;
      if (enabled.indexOf(key) === -1) { el.remove(); return; }
      try { RENDER[key](el); } catch (err) { console.error("Falha ao renderizar a seção " + key, err); el.innerHTML = ""; }
    });
    renderNav();
    renderFooter();
    bindHeader();
    bindActiveSection();
    bindReveal();
    countUp();

    document.addEventListener("click", function (e) {
      var p = e.target.closest("[data-project]"); if (p) { openProject(p.dataset.project); return; }
      var c = e.target.closest("[data-copy]"); if (c) copy(c.dataset.copy, c, "copiado");
    });
    var m = location.hash.match(/^#projeto-(.+)$/);
    if (m) { var sec = document.getElementById("projetos"); if (sec) window.scrollTo(0, sec.offsetTop); openProject(m[1], false); }
  } catch (err) {
    console.error(err);
    root.classList.remove("js");
  }
})();
