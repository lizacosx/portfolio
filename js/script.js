(() => {
  const splash = document.getElementById("site-splash");
  if (!splash) return;
  let alreadyShown = false;
  try { alreadyShown = sessionStorage.getItem("portfolio-splash-seen") === "1"; } catch { }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (alreadyShown || reduceMotion) { splash.hidden = true; return; }
  try { sessionStorage.setItem("portfolio-splash-seen", "1"); } catch { }
  window.setTimeout(() => splash.classList.add("is-leaving"), 1150);
  window.setTimeout(() => { splash.hidden = true; }, 1700);
})();
document.querySelectorAll(".project-link[data-project-url]").forEach((link) => {
  const url = link.dataset.projectUrl.trim();
  if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; link.removeAttribute("aria-disabled"); link.removeAttribute("tabindex"); link.setAttribute("aria-label", "Abrir projeto em nova aba"); }
});
document.querySelectorAll(".social-link[data-social-url]").forEach((link) => {
  const url = link.dataset.socialUrl.trim();
  if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; link.removeAttribute("aria-disabled"); link.removeAttribute("tabindex"); link.setAttribute("aria-label", link.title); }
});
const languageCopy = {
  "pt-BR": {
    brand: "Elisa Costa", presentation: "Apresentação", socialsLabel: "Redes sociais e contato", splashLabel: "Carregando portfólio", projectLinkLabel: "Abrir projeto em nova aba", nav: ["Trabalhos", "Sobre", "Contato"], talk: "VAMOS CONVERSAR ↗", role: "DESENVOLVEDORA FRONT-END · PORTFÓLIO 2026", aboutMe: "Sobre mim · 2026",
    profileTitle: "Oi, eu sou <em>Elisa Costa.</em><br>Desenvolvedora front-end.", profileCopy: "Gosto de transformar ideias em experiências digitais. Aqui você vai encontrar meus projetos, meu processo e um pouco do que me inspira a criar com código.", photo: "Espaço reservado para sua foto ou avatar", viewProjects: "Ver projetos", heroIndex: "01 / PROJETOS EM BREVE",
    projectsTitle: "Projetos<br>em breve<span style=\"color:var(--red)\">.</span>", projectsNote: "MEU PORTFÓLIO ESTÁ GANHANDO FORMA · 2026", projectSoon: "PROJETO EM BREVE", browserNotes: ["HTML · CSS · CÓDIGO", "INTERFACE WEB", "WEB MOBILE", "FRONT-END"], browserTitles: ["Uma nova<br><em>experiência</em>", "Uma nova<br>ideia vem aí", "Feito para<br><em>funcionar</em>", "&lt; ideias<br><em>em código /&gt;</em>"], workTypes: ["Desenvolvimento front-end", "Interface responsiva", "Experiência digital", "Desenvolvimento web"],
    aboutLabels: ["02 / meu GitHub", "TECNOLOGIAS QUE USO"], githubTitle: "Linguagens no GitHub ↗", githubNote: "Repositórios públicos · atualização diária", techTitle: "Linguagens e tecnologias<span style=\"color:var(--red)\">.</span>", techCards: ["Estrutura web", "Estilo e layout", "JavaScript"],
    contactEyebrow: "03 / vamos conversar", contactTitle: "Tem uma ideia?<br>Vamos criar <em>juntos.</em>", contactCopy: "Aberta a oportunidades, projetos e boas conversas.", footer: "© 2026 SEU NOME · DESENVOLVEDORA FRONT-END", footerLinks: ["VOLTAR AO TOPO ↑", "CONTATO ↗"], social: ["Instagram", "GitHub", "E-mail", "LinkedIn"], langButton: "EN", langLabel: "Switch to English", darkOn: "Ativar modo escuro", lightOn: "Ativar modo claro", splashRole: "DESENVOLVEDORA FRONT-END"
  },
  en: {
    brand: "Elisa Costa", presentation: "Introduction", socialsLabel: "Social media and contact", splashLabel: "Loading portfolio", projectLinkLabel: "Open project in a new tab", nav: ["Work", "About", "Contact"], talk: "LET'S TALK ↗", role: "FRONT-END DEVELOPER · PORTFOLIO 2026", aboutMe: "About me · 2026",
    profileTitle: "Hi, I'm <em>Elisa Costa.</em><br>Front-end developer.", profileCopy: "I turn ideas into digital experiences. Here you'll find my projects, my process, and a little about what inspires me to build with code.", photo: "Space reserved for your photo or avatar", viewProjects: "View projects", heroIndex: "01 / PROJECTS COMING SOON",
    projectsTitle: "Projects<br>coming soon<span style=\"color:var(--red)\">.</span>", projectsNote: "MY PORTFOLIO IS TAKING SHAPE · 2026", projectSoon: "PROJECT COMING SOON", browserNotes: ["HTML · CSS · CODE", "WEB INTERFACE", "MOBILE WEB", "FRONT-END"], browserTitles: ["A new<br><em>experience</em>", "A new<br>idea is coming", "Made to<br><em>work</em>", "&lt; ideas<br><em>in code /&gt;</em>"], workTypes: ["Front-end development", "Responsive interface", "Digital experience", "Web development"],
    aboutLabels: ["02 / my GitHub", "TECH I USE"], githubTitle: "Languages on GitHub ↗", githubNote: "Public repositories · daily update", techTitle: "Languages and technologies<span style=\"color:var(--red)\">.</span>", techCards: ["Web structure", "Styling and layout", "JavaScript"],
    contactEyebrow: "03 / let's talk", contactTitle: "Got an idea?<br>Let's build <em>together.</em>", contactCopy: "Open to opportunities, projects, and good conversations.", footer: "© 2026 YOUR NAME · FRONT-END DEVELOPER", footerLinks: ["BACK TO TOP ↑", "CONTACT ↗"], social: ["Instagram", "GitHub", "Email", "LinkedIn"], langButton: "PT", langLabel: "Mudar para português (Brasil)", darkOn: "Enable dark mode", lightOn: "Enable light mode", splashRole: "FRONT-END DEVELOPER"
  }
};
function readSetting(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
let currentLanguage = readSetting("portfolio-language", "pt-BR") === "en" ? "en" : "pt-BR";
let currentTheme = readSetting("portfolio-theme", "light") === "dark" ? "dark" : "light";
const languageButton = document.getElementById("language-toggle");
const themeButton = document.getElementById("theme-toggle");
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191b18" : "#f4eee5";
  themeButton.textContent = theme === "dark" ? "☀" : "☾";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.setAttribute("aria-label", theme === "dark" ? languageCopy[currentLanguage].lightOn : languageCopy[currentLanguage].darkOn);
  themeButton.title = themeButton.getAttribute("aria-label");
  try { localStorage.setItem("portfolio-theme", theme); } catch { }
}
function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "pt-BR";
  const t = languageCopy[currentLanguage];
  document.querySelector(".brand").innerHTML = `${t.brand}<span>✳</span>`;
  document.querySelector(".splash-name").innerHTML = `${t.brand}<span>✳</span>`;
  document.querySelector(".site-splash").setAttribute("aria-label", t.splashLabel);
  document.querySelector(".hero").setAttribute("aria-label", t.presentation);
  document.querySelector(".social-links").setAttribute("aria-label", t.socialsLabel);
  document.querySelector(".hero-avatar span").textContent = currentLanguage === "en" ? "YOUR PHOTO / AVATAR" : "SUA FOTO / AVATAR";
  document.querySelectorAll(".project-link").forEach((item) => item.setAttribute("aria-label", t.projectLinkLabel));
  const navItems = document.querySelectorAll(".nav a");
  navItems.forEach((item, index) => { item.textContent = t.nav[index]; });
  document.querySelector(".nav").setAttribute("aria-label", currentLanguage === "en" ? "Main navigation" : "Navegação principal");
  document.querySelector(".contact-pill").textContent = t.talk;
  document.querySelector(".hero-kicker").textContent = t.role;
  document.querySelector(".profile-header .eyebrow").textContent = t.aboutMe;
  document.querySelector(".hero-profile h2").innerHTML = t.profileTitle;
  document.querySelector(".hero-profile p").textContent = t.profileCopy;
  document.querySelector(".hero-avatar").setAttribute("aria-label", t.photo);
  document.querySelector(".round-link").setAttribute("aria-label", t.viewProjects);
  document.querySelector(".hero-index").textContent = t.heroIndex;
  document.querySelector("#trabalhos .section-head h2").innerHTML = t.projectsTitle;
  document.querySelector("#trabalhos .section-head p").textContent = t.projectsNote;
  document.querySelectorAll("#trabalhos .demo-tag").forEach((item) => { item.textContent = t.projectSoon; });
  document.querySelectorAll("#trabalhos .browser-content small").forEach((item, index) => { item.textContent = t.browserNotes[index]; });
  document.querySelectorAll("#trabalhos .browser-content strong").forEach((item, index) => { item.innerHTML = t.browserTitles[index]; });
  document.querySelectorAll("#trabalhos .work-meta h3").forEach((item) => { item.textContent = t.projectSoon[0] + t.projectSoon.slice(1).toLowerCase(); });
  document.querySelectorAll("#trabalhos .work-meta span").forEach((item, index) => { item.textContent = t.workTypes[index]; });
  document.querySelectorAll("#sobre .about-label").forEach((item, index) => { item.textContent = t.aboutLabels[index]; });
  document.querySelector(".github-panel-head a").textContent = t.githubTitle;
  document.querySelector(".github-panel-head small").textContent = t.githubNote;
  document.querySelector(".tech-title").innerHTML = t.techTitle;
  document.querySelectorAll(".tech-card span").forEach((item, index) => { item.textContent = t.techCards[index]; });
  document.querySelector("#contato .eyebrow").textContent = t.contactEyebrow;
  document.querySelector("#contato h2").innerHTML = t.contactTitle;
  document.querySelector(".contact-row p").textContent = t.contactCopy;
  document.querySelector(".footer > span").textContent = t.footer;
  document.querySelectorAll(".footer-links a").forEach((item, index) => { item.textContent = t.footerLinks[index]; });
  document.querySelectorAll(".social-link").forEach((item, index) => { item.title = t.social[index]; item.setAttribute("aria-label", t.social[index]); });
  document.querySelector(".splash-role").textContent = t.splashRole;
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en" ? "Your Name — Front-end Developer" : "Seu Nome — Desenvolvedora Front-end";
  document.querySelector('meta[name="description"]').content = currentLanguage === "en" ? "Front-end developer portfolio — creative, responsive interfaces and digital experiences." : "Portfólio de desenvolvedora front-end — interfaces criativas, responsivas e experiências digitais.";
  languageButton.textContent = t.langButton;
  languageButton.setAttribute("aria-label", t.langLabel);
  languageButton.title = t.langLabel;
  themeButton.setAttribute("aria-label", currentTheme === "dark" ? t.lightOn : t.darkOn);
  themeButton.title = themeButton.getAttribute("aria-label");
  const cached = readGithubCache();
  if (cached && typeof showGithubLanguages === "function") showGithubLanguages(cached.data, cached.fetchedAt);
  else if (languageChart.querySelector(".github-loading")) languageChart.querySelector(".github-loading").textContent = currentLanguage === "en" ? "Loading GitHub languages…" : "Carregando linguagens do GitHub…";
}
languageButton.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "pt-BR" : "en"));
themeButton.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
const githubLogin = "lizacosx";
const githubCacheKey = `portfolio-github-languages-${githubLogin}`;
const githubCacheAge = 24 * 60 * 60 * 1000;
const githubColors = { JavaScript: "#e5b844", TypeScript: "#3178c6", HTML: "#e34c26", CSS: "#663399", Python: "#3572a5", Java: "#b07219", Vue: "#41b883", PHP: "#4f5d95", Ruby: "#701516", Go: "#00add8", Rust: "#dea584", Swift: "#f05138" };
const languageChart = document.getElementById("github-language-chart");
const languageUpdated = document.getElementById("github-language-updated");
function readGithubCache() {
  try { const value = JSON.parse(localStorage.getItem(githubCacheKey) || "null"); return value && value.data && value.fetchedAt ? value : null; }
  catch { return null; }
}
function showGithubLanguages(counts, fetchedAt) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const inEnglish = currentLanguage === "en";
  languageChart.replaceChildren();
  if (!entries.length) {
    const empty = document.createElement("p"); empty.className = "github-empty"; empty.textContent = inEnglish ? "No public repositories with a detected language yet." : "Ainda não há repositórios públicos com linguagem identificada."; languageChart.append(empty);
    languageUpdated.textContent = inEnglish ? "GITHUB · NO PUBLIC DATA TO DISPLAY" : "GITHUB · SEM DADOS PÚBLICOS PARA EXIBIR";
    return;
  }
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  entries.forEach(([language, count], index) => {
    const row = document.createElement("div"); row.className = "github-language";
    const label = document.createElement("div"); label.className = "github-language-label";
    const name = document.createElement("strong"); name.textContent = language;
    const amount = document.createElement("span"); amount.textContent = `${count} ${inEnglish ? (count === 1 ? "repo" : "repos") : (count === 1 ? "repositório" : "repositórios")}`;
    label.append(name, amount);
    const track = document.createElement("div"); track.className = "github-track"; track.setAttribute("role", "img"); track.setAttribute("aria-label", `${language}: ${Math.round(count / total * 100)}% ${inEnglish ? "of public repositories" : "dos repositórios públicos"}`);
    const bar = document.createElement("i"); bar.style.setProperty("--bar-width", `${Math.max(4, count / total * 100)}%`); bar.style.setProperty("--language-color", githubColors[language] || ["#5356d9", "#e7472f", "#7c8d52", "#a66cc5"][index % 4]); track.append(bar);
    row.append(label, track); languageChart.append(row);
  });
  const date = new Date(fetchedAt);
  languageUpdated.textContent = inEnglish ? `UPDATED ${date.toLocaleDateString("en-US")} · ${total} PUBLIC REPOSITORIES` : `ATUALIZADO EM ${date.toLocaleDateString("pt-BR")} · ${total} REPOSITÓRIOS PÚBLICOS`;
}
async function fetchGithubLanguages() {
  const counts = {};
  for (let page = 1; page <= 10; page++) {
    const response = await fetch(`https://api.github.com/users/${githubLogin}/repos?type=owner&sort=pushed&per_page=100&page=${page}`, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);
    const repos = await response.json();
    for (const repo of repos) if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    if (repos.length < 100) break;
  }
  return counts;
}
async function updateGithubLanguages() {
  const cached = readGithubCache();
  if (cached) showGithubLanguages(cached.data, cached.fetchedAt);
  if (cached && Date.now() - cached.fetchedAt < githubCacheAge) return;
  try {
    const data = await fetchGithubLanguages();
    const fetchedAt = Date.now();
    try { localStorage.setItem(githubCacheKey, JSON.stringify({ data, fetchedAt })); } catch { }
    showGithubLanguages(data, fetchedAt);
  } catch {
    if (!cached) {
      languageChart.replaceChildren();
      const error = document.createElement("p"); error.className = "github-error"; error.textContent = currentLanguage === "en" ? "I couldn't load the chart right now. Please try again later." : "Não consegui carregar o gráfico agora. Tente novamente mais tarde."; languageChart.append(error);
      languageUpdated.textContent = currentLanguage === "en" ? "SOURCE: github.com/lizacosx" : "FONTE: github.com/lizacosx";
    } else languageUpdated.textContent += currentLanguage === "en" ? " · SHOWING LAST SAVED DATA" : " · MOSTRANDO A ÚLTIMA CÓPIA SALVA";
  }
}
applyTheme(currentTheme);
applyLanguage(currentLanguage);
updateGithubLanguages();
