import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import {
  certifications,
  education,
  experiences,
  interests,
  localize,
  person,
  projects,
  skillCategories,
  training,
} from "../src/resources/portfolio-data.ts";

const root = resolve(
  dirname(new URL(import.meta.url).pathname.replace(/^\/(.:)/, "$1")),
  "..",
);
const outputDir = join(root, "public", "resume");
const tempDir = join(tmpdir(), "nam-woo-hyun-resume");
const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

const browser = browserCandidates.find(existsSync);
if (!browser) {
  throw new Error(
    "A Chromium-based browser is required to generate the résumé PDFs.",
  );
}

mkdirSync(outputDir, { recursive: true });
mkdirSync(tempDir, { recursive: true });

const fontRegular = pathToFileURL(
  join(root, "src", "resources", "fonts", "Pretendard-Regular.otf"),
).href;
const fontSemiBold = pathToFileURL(
  join(root, "src", "resources", "fonts", "Pretendard-SemiBold.otf"),
).href;
const profile = pathToFileURL(
  join(root, "public", "images", "profile.png"),
).href;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function renderResume(locale) {
  const ko = locale === "ko";
  const labels = ko
    ? {
        summary: "소개",
        experience: "경력",
        skills: "기술",
        projects: "주요 프로젝트",
        education: "학력 · 교육",
        certifications: "자격 · 어학",
        interests: "관심 분야",
      }
    : {
        summary: "Summary",
        experience: "Experience",
        skills: "Skills",
        projects: "Selected Projects",
        education: "Education & Training",
        certifications: "Certifications & Language Tests",
        interests: "Professional Interests",
      };

  const selectedProjects = projects.slice(0, 5);
  const html = `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(person.name[locale])} · Resume</title>
<style>
@font-face{font-family:Pretendard;src:url('${fontRegular}') format('opentype');font-weight:400}
@font-face{font-family:Pretendard;src:url('${fontSemiBold}') format('opentype');font-weight:600}
*{box-sizing:border-box} @page{size:A4;margin:13mm 15mm}
body{margin:0;color:#18201d;font-family:Pretendard,Arial,sans-serif;font-size:9.5pt;line-height:1.55;-webkit-print-color-adjust:exact;print-color-adjust:exact}
h1,h2,h3,p,ul{margin:0} h1{font-size:27pt;letter-spacing:-.045em} h2{margin:9mm 0 3mm;padding-bottom:2mm;border-bottom:1px solid #cfe0d9;color:#147a5c;font-size:12pt;letter-spacing:.02em} h3{font-size:10.5pt} ul{padding-left:5mm} li{margin:1.2mm 0}.header{display:grid;grid-template-columns:1fr 25mm;gap:7mm;align-items:center;padding-bottom:6mm;border-bottom:2px solid #2fa97e}.role{margin-top:1mm;color:#247f64;font-size:13pt;font-weight:600}.contact{display:flex;flex-wrap:wrap;gap:2mm 5mm;margin-top:3mm;color:#53645e;font-size:8.5pt}.portrait{width:23mm;height:31mm;border-radius:5mm;object-fit:cover;border:1px solid #cfe0d9}.summary{display:grid;gap:2mm}.item{break-inside:avoid;margin-bottom:5mm}.item-head{display:flex;justify-content:space-between;gap:5mm}.meta{color:#64736d;font-size:8.5pt}.sub{margin:1mm 0 2mm;color:#247f64;font-weight:600}.chips{display:flex;flex-wrap:wrap;gap:1.4mm;margin-top:2mm}.chip{padding:.8mm 2mm;border-radius:99px;background:#e7f5ef;color:#176b52;font-size:7.8pt}.grid{display:grid;grid-template-columns:1fr 1fr;gap:4mm}.project{padding:3.5mm;border:1px solid #d8e5e0;border-radius:3mm;break-inside:avoid}.project.featured{border-color:#67bea0;background:#f3fbf8}.muted{color:#61716b}.footer{margin-top:8mm;padding-top:3mm;border-top:1px solid #d8e5e0;color:#71817b;font-size:7.5pt;text-align:center}
</style>
</head>
<body>
<header class="header"><section><h1>${escapeHtml(person.name[locale])}</h1><p class="role">${escapeHtml(person.role[locale])}</p><p class="contact"><span>${escapeHtml(person.email)}</span><span>${escapeHtml(person.github)}</span><span>${escapeHtml(person.location[locale])}</span></p></section><img class="portrait" src="${profile}" alt="" /></header>
<main>
<h2>${labels.summary}</h2><section class="summary">${person.summary.map((item) => `<p>${escapeHtml(localize(item, locale))}</p>`).join("")}</section>
<h2>${labels.experience}</h2>${experiences.map((experience) => `<article class="item"><header class="item-head"><section><h3>${escapeHtml(localize(experience.company, locale))}</h3><p class="sub">${escapeHtml(localize(experience.role, locale))}</p></section><p class="meta">${escapeHtml(localize(experience.period, locale))}</p></header><ul>${experience.achievements.map((achievement) => `<li>${escapeHtml(localize(achievement, locale))}</li>`).join("")}</ul></article>`).join("")}
<h2>${labels.skills}</h2><section class="grid">${skillCategories.map((category) => `<article class="project"><h3>${escapeHtml(localize(category.title, locale))}</h3><p class="chips">${category.skills.map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`).join("")}</p></article>`).join("")}</section>
<h2>${labels.projects}</h2><section class="grid">${selectedProjects
    .map(
      (project) =>
        `<article class="project${project.featured ? " featured" : ""}"><div class="item-head"><h3>${escapeHtml(localize(project.title, locale))}</h3><span class="meta">${escapeHtml(localize(project.period, locale))}</span></div><p class="sub">${escapeHtml(localize(project.role, locale))}</p><p>${escapeHtml(localize(project.summary, locale))}</p><p class="chips">${project.technologies
          .slice(0, 7)
          .map(
            (technology) =>
              `<span class="chip">${escapeHtml(technology)}</span>`,
          )
          .join("")}</p></article>`,
    )
    .join("")}</section>
<h2>${labels.education}</h2><section class="grid">${[...education, ...training].map((item) => `<article class="project"><div class="item-head"><h3>${escapeHtml(localize(item.institution, locale))}</h3><span class="meta">${escapeHtml(item.period)}</span></div><p class="muted">${escapeHtml(localize(item.program, locale))}</p></article>`).join("")}</section>
<h2>${labels.certifications}</h2><section class="grid">${certifications.map((item) => `<article class="project"><h3>${escapeHtml(localize(item.name, locale))}</h3><p class="muted">${escapeHtml(localize(item.detail, locale))}</p></article>`).join("")}</section>
<h2>${labels.interests}</h2><ul>${interests.map((item) => `<li>${escapeHtml(localize(item, locale))}</li>`).join("")}</ul>
</main>
<footer class="footer">${escapeHtml(person.name[locale])} · ${escapeHtml(person.email)} · ${escapeHtml(person.github)}</footer>
</body></html>`;
  return html;
}

for (const locale of ["ko", "en"]) {
  const htmlPath = join(tempDir, `resume-${locale}.html`);
  const outputPath = join(outputDir, `nam-woo-hyun-${locale}.pdf`);
  const browserProfile = join(tempDir, `browser-${locale}`);
  writeFileSync(htmlPath, renderResume(locale), "utf8");
  rmSync(outputPath, { force: true });
  rmSync(browserProfile, { recursive: true, force: true });
  const result = spawnSync(
    browser,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-software-rasterizer",
      "--no-pdf-header-footer",
      `--user-data-dir=${browserProfile}`,
      `--print-to-pdf=${outputPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { encoding: "utf8", windowsHide: true },
  );
  if (result.status !== 0 || !existsSync(outputPath)) {
    throw new Error(
      `Failed to generate ${locale} résumé PDF: ${result.stderr}`,
    );
  }
  console.log(`Generated ${outputPath}`);
}
