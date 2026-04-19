const translations = {
  en: {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF is a Finder-powered macOS app for turning Markdown files into polished PDFs with profiles, syntax highlighting, math rendering, history, and privacy-first local processing.",
    skipLink: "Skip to content",
    navFeatures: "Features",
    navWorkflow: "Workflow",
    navScreens: "Screens",
    navPrivacy: "Privacy",
    heroEyebrow: "Finder extension + native macOS app",
    heroTitle: "Turn Markdown into polished PDFs without leaving Finder.",
    heroLead:
      "MarkdownToPDF is built for writers, engineers, and documentation teams who want local, repeatable exports with batch queues, profiles, and clean print-ready output.",
    heroPrimary: "Explore the interface",
    heroSecondary: "Read privacy policy",
    heroBadge1: "Right-click .md and .markdown files in Finder",
    heroBadge2: "Queue batch jobs and retry failures",
    heroBadge3: "Tune page size, margins, theme, fonts, and naming rules",
    heroBadge4: "Keep everything local inside the app sandbox",
    metaPlatformLabel: "Platform",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "UI Languages",
    metaLanguageValue: "8 built-in options",
    metaPrivacyLabel: "Privacy",
    metaPrivacyValue: "No account, no cloud upload",
    heroNoteTopLabel: "Queue-first workflow",
    heroNoteTopBody:
      "Finder requests are handed to the main app, so longer conversions stay stable and easier to manage.",
    heroNoteBottomLabel: "Privacy-first local workflow",
    heroNoteBottomBody:
      "The app uses sandboxed file access and local storage instead of cloud rendering or sign-in flows.",
    heroImageAlt: "MarkdownToPDF queue dashboard",
    signal1Title: "Right from Finder",
    signal1Body:
      "Select one file or many, open the context menu, and send your Markdown straight into the conversion queue.",
    signal2Title: "Built for repeat work",
    signal2Body:
      "Profiles, naming rules, overwrite policies, and post-conversion actions make repeated exports predictable.",
    signal3Title: "Readable history",
    signal3Body:
      "Successful exports, failed jobs, retry flows, and output paths stay visible instead of disappearing into a menu.",
    signal4Title: "Localized app UI",
    signal4Body:
      "The desktop app already ships with English, Simplified Chinese, Traditional Chinese, Japanese, Korean, German, French, and Italian.",
    workflowEyebrow: "Workflow",
    workflowTitle: "A calmer way to export Markdown over and over again.",
    workflowLead:
      "The product architecture keeps the Finder extension light and lets the main app handle rendering, settings, history, and diagnostics.",
    workflowStep1Index: "Step 1",
    workflowStep1Title: "Select Markdown where you already work",
    workflowStep1Body:
      "The Finder extension targets `.md` and `.markdown` files, so the flow starts from a familiar right-click menu instead of a separate import screen.",
    workflowStep2Index: "Step 2",
    workflowStep2Title: "Let the queue keep long jobs organized",
    workflowStep2Body:
      "Requests move through a shared queue, giving the main app room to batch, retry, and preserve history without slowing Finder down.",
    workflowStep3Index: "Step 3",
    workflowStep3Title: "Control the PDF output in one place",
    workflowStep3Body:
      "Adjust page size, margins, fonts, themes, file naming, overwrite behavior, and what happens after export from the main app.",
    featuresEyebrow: "Control",
    featuresTitle: "Tune the PDF, not the Markdown source.",
    featuresLead:
      "The current release focuses on local rendering quality, practical defaults, and enough controls to keep exported PDFs consistent across repeated runs.",
    feature1Title: "Profile-driven rendering",
    feature1Body:
      "Pick page size, margins, theme, header/footer, table of contents, body font, code font, size, and line height from reusable profiles.",
    feature2Title: "Output rules that stay predictable",
    feature2Body:
      "Choose same-name exports, append dates, or custom patterns, then decide whether to replace files, fail fast, or create copies.",
    feature3Title: "Batch-aware post actions",
    feature3Body:
      "After conversion, the app can do nothing, reveal the PDF in Finder, or open the new file immediately.",
    feature4Title: "Markdown coverage aimed at real documents",
    feature4Body:
      "The app supports headings, lists, block quotes, fenced code, syntax highlighting, tables, links, images, Mermaid diagrams, math formulas, and typography controls.",
    feature5Title: "Known compatibility boundaries",
    feature5Body:
      "Task lists, footnotes, and emoji shortcodes are still incomplete, and some custom TeX macros, rare AMS cases, or deeply nested mixed layouts can still hit edge cases.",
    feature6Title: "Local-only by design",
    feature6Body:
      "The app is sandboxed, uses user-selected file access, and stores queue state, profiles, settings, and history on device.",
    renderEyebrow: "Rendered Output",
    renderTitle: "Math, diagrams, and syntax-aware code blocks survive the trip to PDF.",
    renderLead:
      "The current renderer applies theme-aware color palettes, highlights common languages, and typesets TeX formulas offline before export.",
    renderMathTitle: "Offline math rendering",
    renderMathBody:
      "Inline and display formulas are typeset before export with bundled MathJax SVG, so the PDF keeps readable equations instead of raw TeX delimiters.",
    renderMathAlt: "Math rendering sample exported by MarkdownToPDF",
    renderCodeTitle: "Syntax highlighting for common languages",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL, and C-like languages get built-in token highlighting. Unknown languages fall back to clean plain code blocks.",
    renderPaletteTitle: "Theme-driven color configuration",
    renderPaletteBody:
      "System, light, sepia, and dark themes affect document colors, code block chrome, and syntax token colors, so exports can match different reading contexts.",
    renderStructureTitle: "Mermaid and document structure",
    renderStructureBody:
      "Mermaid fenced blocks render as diagrams, and headings can become PDF outline and bookmark entries for easier navigation in long documents.",
    screensEyebrow: "Screens",
    screensTitle: "A clean desktop surface for queue, history, and settings.",
    screensLead:
      "These images come from the current MarkdownToPDF desktop build and show the major workspaces described in the code and release notes.",
    screenDashboardLabel: "Queue Dashboard",
    screenHistoryLabel: "Conversion History",
    screenOutputLabel: "Output Defaults",
    screenRenderLabel: "Render Defaults",
    supportEyebrow: "Support Matrix",
    supportTitle: "What the app supports in the current release.",
    supportLead:
      "This page is based on the current source code, release notes, support matrix, and known issues in the MarkdownToPDF repository.",
    supportGoodTitle: "Available today",
    supportGood1: "Headings, paragraphs, horizontal rules, and block quotes",
    supportGood2: "Ordered and unordered lists, inline code, fenced code blocks, and syntax highlighting",
    supportGood3: "Tables, alignment, links, images, relative asset paths, Mermaid, and offline math rendering",
    supportGood4: "Themes, page sizes, margins, outline bookmarks, naming rules, and post-export actions",
    supportLimitTitle: "Known compatibility boundaries",
    supportLimit1: "Task lists, footnotes, and emoji shortcodes are not fully implemented yet",
    supportLimit2: "Custom TeX macros, external extensions, and rare AMS scenarios can still need fallback",
    supportLimit3: "The table of contents setting is saved, but it does not generate a visible TOC page yet",
    supportLimit4: "Header and footer settings currently render the document footer only, and very large images can still miss the render window",
    privacyEyebrow: "Privacy Policy",
    privacyTitle: "MarkdownToPDF is designed to work on your Mac, not in the cloud.",
    privacyLead:
      "The policy below reflects the current app architecture, entitlement files, and repository documentation as of April 19, 2026.",
    privacyCard1Title: "What the app accesses",
    privacyCard1Body:
      "Only the Markdown files and folders you explicitly choose, plus local app settings, profiles, history records, and queue metadata.",
    privacyCard2Title: "What the app does not require",
    privacyCard2Body:
      "No account creation, no subscription login, no analytics SDK, and no document upload service in the current app.",
    privacyCard3Title: "How data stays local",
    privacyCard3Body:
      "The app is sandboxed and uses user-selected file permissions plus an App Group container for Finder-to-app job handoff.",
    privacyEffectiveLabel: "Effective date",
    privacyEffectiveValue: "April 19, 2026",
    policy1Title: "1. Information the app processes",
    policy1Body:
      "MarkdownToPDF processes the source documents you select, the output locations you choose, and locally stored settings such as render profiles, naming defaults, conversion history, and pending queue records.",
    policy2Title: "2. Why that information is used",
    policy2Body:
      "That information is used only to render PDFs, manage queued conversions, reopen or reveal generated files, remember your preferences, and show conversion results or failures inside the app.",
    policy3Title: "3. Network, tracking, and third parties",
    policy3Body:
      "Based on the current repository and sandbox entitlements, the app does not include cloud rendering, analytics tracking, advertising SDKs, or account systems, and it does not upload document content to remote servers as part of normal use.",
    policy4Title: "4. Storage and retention",
    policy4Body:
      "Preferences, profiles, queue state, and history are stored locally on your device. Generated PDFs remain in the folder you choose. You can remove the app, clear records, or revoke folder access through system and app settings.",
    policy5Title: "5. Your controls",
    policy5Body:
      "You control which files and folders the app can access, whether the Finder extension is enabled, which output location is used, and whether history entries remain stored locally.",
    policy6Title: "6. Policy updates",
    policy6Body:
      "If the app architecture changes in a future release, this policy should be updated together with the release notes and website so the documented behavior stays accurate.",
    footerBody:
      "Built from the current MarkdownToPDF codebase, release notes, support matrix, and interface screenshots.",
    footerContactLabel: "Contact:",
  },
  zh: {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF 是一款面向 macOS 的 Finder 扩展应用，可将 Markdown 文件本地转换为精致 PDF，并提供配置模板、语法高亮、数学公式渲染、历史记录、批量队列与隐私优先的处理方式。",
    skipLink: "跳转到正文",
    navFeatures: "功能",
    navWorkflow: "流程",
    navScreens: "界面",
    navPrivacy: "隐私",
    heroEyebrow: "Finder 扩展 + 原生 macOS 应用",
    heroTitle: "不离开 Finder，把 Markdown 直接导出成精致 PDF。",
    heroLead:
      "MarkdownToPDF 面向写作者、工程师和文档团队，强调本地处理、可重复导出、批量队列、配置模板，以及更适合打印与分享的输出效果。",
    heroPrimary: "查看应用界面",
    heroSecondary: "阅读隐私政策",
    heroBadge1: "在 Finder 中右键 `.md` 与 `.markdown` 文件即可开始",
    heroBadge2: "支持批量排队、失败重试与结果追踪",
    heroBadge3: "可配置纸张、边距、主题、字体与命名规则",
    heroBadge4: "所有处理都尽量保留在本地沙盒内完成",
    metaPlatformLabel: "平台",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "界面语言",
    metaLanguageValue: "内置 8 种语言",
    metaPrivacyLabel: "隐私",
    metaPrivacyValue: "无需账号，不上传云端",
    heroNoteTopLabel: "以队列为核心",
    heroNoteTopBody:
      "Finder 只负责触发请求，真正的长任务交给主应用处理，稳定性和可管理性都更好。",
    heroNoteBottomLabel: "隐私优先的本地工作流",
    heroNoteBottomBody:
      "应用采用沙盒文件权限与本地存储，而不是云端渲染或登录流程。",
    heroImageAlt: "MarkdownToPDF 队列仪表盘界面",
    signal1Title: "从 Finder 直接开始",
    signal1Body:
      "无论是单文件还是多文件，只需打开右键菜单，就能把 Markdown 送进转换队列。",
    signal2Title: "适合重复性导出",
    signal2Body:
      "配置模板、命名规则、覆盖策略和导出后动作，让重复导出保持稳定一致。",
    signal3Title: "历史记录清晰可读",
    signal3Body:
      "成功记录、失败任务、重试流程和输出路径都留在主界面里，而不是藏在菜单之后。",
    signal4Title: "应用本身支持多语言",
    signal4Body:
      "桌面应用已内置英文、简体中文、繁体中文、日语、韩语、德语、法语和意大利语。",
    workflowEyebrow: "工作流程",
    workflowTitle: "让 Markdown 重复导出这件事变得更从容。",
    workflowLead:
      "产品架构刻意让 Finder 扩展保持轻量，把渲染、设置、历史与诊断能力交给主应用。",
    workflowStep1Index: "步骤 1",
    workflowStep1Title: "在你原本工作的地方选择 Markdown",
    workflowStep1Body:
      "Finder 扩展面向 `.md` 与 `.markdown` 文件，因此流程从熟悉的右键菜单开始，而不是额外的导入页面。",
    workflowStep2Index: "步骤 2",
    workflowStep2Title: "用队列管理更长的转换任务",
    workflowStep2Body:
      "请求先进入共享队列，再由主应用批量消费、失败重试并保存历史，这样不会拖慢 Finder。",
    workflowStep3Index: "步骤 3",
    workflowStep3Title: "在一个地方统一控制 PDF 输出",
    workflowStep3Body:
      "页面大小、边距、字体、主题、文件命名、覆盖行为，以及导出后的动作，都在主应用里集中管理。",
    featuresEyebrow: "输出控制",
    featuresTitle: "把精力放在 PDF 成品，而不是反复折腾 Markdown 源文件。",
    featuresLead:
      "当前正式版本聚焦本地渲染质量、实用默认值，以及足够细的控制能力，让多次导出也能保持一致。",
    feature1Title: "以配置模板驱动渲染",
    feature1Body:
      "可复用的模板支持纸张尺寸、边距、主题、页眉页脚、目录、正文与代码字体、字号和行高。",
    feature2Title: "输出规则更可预测",
    feature2Body:
      "可选择同名导出、追加日期或自定义模式，再决定是替换现有文件、直接失败，还是创建副本。",
    feature3Title: "适合批量任务的导出后动作",
    feature3Body:
      "转换完成后，你可以选择不执行任何动作、在 Finder 中显示 PDF，或直接打开新文件。",
    feature4Title: "Markdown 支持面向真实文档场景",
    feature4Body:
      "应用已支持标题、列表、引用、围栏代码块、代码语法高亮、表格、链接、图片、Mermaid、数学公式与排版控制。",
    feature5Title: "限制写得足够明确",
    feature5Body:
      "任务列表、脚注与 emoji shortcode 仍未完整实现；部分自定义 TeX 宏、少见 AMS 场景和深层混合嵌套排版仍可能遇到边界情况。",
    feature6Title: "从设计上坚持本地处理",
    feature6Body:
      "应用运行在沙盒中，依赖用户授权的文件访问权限，并把队列状态、模板、设置与历史记录存储在本机。",
    renderEyebrow: "渲染能力",
    renderTitle: "数学公式、图表和带语义的代码块，都能稳定进入最终 PDF。",
    renderLead:
      "当前渲染器会在导出前应用主题配色、为常见语言添加语法高亮，并使用离线 MathJax 对 TeX 公式进行排版。",
    renderMathTitle: "离线数学公式渲染",
    renderMathBody:
      "行内与块级公式会在导出前通过内置 MathJax SVG 完成排版，因此最终 PDF 里显示的是清晰公式，而不是原始 TeX 定界符。",
    renderMathAlt: "MarkdownToPDF 导出的数学公式示例",
    renderCodeTitle: "常见语言内置语法高亮",
    renderCodeBody:
      "Swift、Bash、Python、JavaScript、TypeScript、JSON、YAML、SQL 与 C-Like 语言都支持内置分词高亮；未知语言会回退为普通代码块。",
    renderPaletteTitle: "主题驱动的颜色配置",
    renderPaletteBody:
      "System、Light、Sepia 与 Dark 主题会共同影响文档配色、代码块外观以及语法 token 颜色，让导出的 PDF 更适合不同阅读场景。",
    renderStructureTitle: "Mermaid 与文档结构",
    renderStructureBody:
      "Mermaid fenced block 会渲染为图表，标题还可以进入 PDF 的 outline / 书签，方便长文档导航。",
    screensEyebrow: "界面截图",
    screensTitle: "为队列、历史和设置而设计的一套干净桌面界面。",
    screensLead:
      "这些截图来自当前的 MarkdownToPDF 桌面版本，对应代码和发布说明里描述的主要工作区。",
    screenDashboardLabel: "队列仪表盘",
    screenHistoryLabel: "转换历史",
    screenOutputLabel: "输出默认值",
    screenRenderLabel: "渲染默认值",
    supportEyebrow: "支持矩阵",
    supportTitle: "当前正式版本已经支持什么。",
    supportLead:
      "此页面内容来自 MarkdownToPDF 仓库中的源码、发布说明、支持矩阵与已知问题文档。",
    supportGoodTitle: "当前已可用能力",
    supportGood1: "标题、段落、分隔线与引用块",
    supportGood2: "有序/无序列表、行内代码、围栏代码块与语法高亮",
    supportGood3: "表格、对齐、链接、图片、相对资源路径、Mermaid 与离线数学公式渲染",
    supportGood4: "主题、纸张尺寸、边距、PDF 书签、命名规则与导出后动作",
    supportLimitTitle: "当前已知兼容性边界",
    supportLimit1: "任务列表、脚注与 emoji shortcode 仍未完整实现",
    supportLimit2: "自定义 TeX 宏、外部扩展与少见 AMS 场景仍可能需要回退处理",
    supportLimit3: "目录页设置目前会保存，但还不会生成可见的 TOC 页面",
    supportLimit4: "页眉页脚设置目前只会输出页脚；超大图片在加载过慢时仍可能错过渲染窗口",
    privacyEyebrow: "隐私政策",
    privacyTitle: "MarkdownToPDF 的设计目标，是在你的 Mac 上完成处理，而不是把文档送到云端。",
    privacyLead:
      "以下内容基于 2026 年 4 月 19 日时的当前应用架构、entitlement 文件与仓库文档。",
    privacyCard1Title: "应用会访问什么",
    privacyCard1Body:
      "仅访问你明确选择的 Markdown 文件和目录，以及本地保存的应用设置、模板、历史记录和队列元数据。",
    privacyCard2Title: "应用不需要什么",
    privacyCard2Body:
      "当前应用不需要创建账号、不需要订阅登录、没有分析 SDK，也没有文档上传服务。",
    privacyCard3Title: "数据如何保留在本地",
    privacyCard3Body:
      "应用运行在沙盒中，使用用户授权的文件权限，并通过 App Group 容器在 Finder 扩展与主应用之间传递任务。",
    privacyEffectiveLabel: "生效日期",
    privacyEffectiveValue: "2026 年 4 月 19 日",
    policy1Title: "1. 应用处理的信息",
    policy1Body:
      "MarkdownToPDF 会处理你选择的源 Markdown 文档、你指定的输出位置，以及本地存储的渲染模板、命名默认值、转换历史和待处理队列记录。",
    policy2Title: "2. 为什么需要这些信息",
    policy2Body:
      "这些信息仅用于生成 PDF、管理转换队列、重新打开或在 Finder 中显示导出文件、记住你的偏好设置，以及在应用内部展示成功或失败结果。",
    policy3Title: "3. 网络、追踪与第三方",
    policy3Body:
      "根据当前仓库代码与沙盒权限配置，应用不包含云端渲染、分析追踪、广告 SDK 或账号系统；在正常使用中，也不会把文档内容上传到远程服务器。",
    policy4Title: "4. 存储与保留",
    policy4Body:
      "偏好设置、模板、队列状态与历史记录都存储在你的本地设备上。生成的 PDF 会保留在你选择的目录中。你可以删除应用、清理记录，或通过系统和应用设置撤销目录访问权限。",
    policy5Title: "5. 你的控制权",
    policy5Body:
      "你可以决定应用能访问哪些文件与目录、Finder 扩展是否启用、默认输出位置是什么，以及本地历史记录是否继续保留。",
    policy6Title: "6. 政策更新",
    policy6Body:
      "如果未来版本的应用架构发生变化，这份隐私政策也应与发布说明和官网一起更新，以保证文档描述与实际行为保持一致。",
    footerBody:
      "本页面基于当前 MarkdownToPDF 代码库、发布说明、支持矩阵与界面截图制作。",
    footerContactLabel: "联系邮箱：",
  },
};

const screens = {
  dashboard: {
    src: "pictures/dashboard.png",
    title: {
      en: "Queue Dashboard",
      zh: "队列仪表盘",
    },
    description: {
      en: "Monitor pending requests, import Markdown files by drag and drop, and start conversions with a single click.",
      zh: "查看待处理请求，支持拖拽导入 Markdown 文件，并可一键启动转换。",
    },
    alt: {
      en: "Queue Dashboard screen",
      zh: "队列仪表盘界面截图",
    },
  },
  history: {
    src: "pictures/history.png",
    title: {
      en: "Conversion History",
      zh: "转换历史",
    },
    description: {
      en: "Review successful exports, reopen generated PDFs, reveal files in Finder, and keep a clear record of past runs.",
      zh: "查看成功导出记录，重新打开 PDF，在 Finder 中定位文件，并保留清晰的历史结果。",
    },
    alt: {
      en: "Conversion History screen",
      zh: "转换历史界面截图",
    },
  },
  output: {
    src: "pictures/settings-1.png",
    title: {
      en: "Output Defaults",
      zh: "输出默认值",
    },
    description: {
      en: "Choose naming strategies, overwrite behavior, default save locations, and the Finder folders where the extension should appear.",
      zh: "设置命名策略、覆盖行为、默认保存位置，以及 Finder 扩展在哪些目录中显示。",
    },
    alt: {
      en: "Output Defaults settings screen",
      zh: "输出默认值设置界面截图",
    },
  },
  render: {
    src: "pictures/settings-2.png",
    title: {
      en: "Render Defaults",
      zh: "渲染默认值",
    },
    description: {
      en: "Adjust page size, theme, fonts, line height, margins, and post-conversion behavior from one settings surface.",
      zh: "在同一个设置界面中调整纸张尺寸、主题、字体、行高、边距与转换后动作。",
    },
    alt: {
      en: "Render Defaults settings screen",
      zh: "渲染默认值设置界面截图",
    },
  },
};

const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const screenButtons = document.querySelectorAll(".screen-thumb");
const activeScreenImage = document.getElementById("active-screen-image");
const activeScreenTitle = document.getElementById("active-screen-title");
const activeScreenDescription = document.getElementById("active-screen-description");

let currentLanguage = localStorage.getItem("markdownToPDFWebLanguage") === "zh" ? "zh" : "en";
let currentScreen = "dashboard";

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.pageTitle;
  if (metaDescription) metaDescription.setAttribute("content", dictionary.pageDescription);

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (dictionary[key]) node.setAttribute("alt", dictionary[key]);
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderScreen(currentScreen);
}

function renderScreen(screenKey) {
  const screen = screens[screenKey];
  if (!screen) return;

  currentScreen = screenKey;
  const language = currentLanguage in translations ? currentLanguage : "en";

  activeScreenImage.style.opacity = "0.2";
  activeScreenImage.style.transform = "scale(1.015)";

  window.setTimeout(() => {
    activeScreenImage.src = screen.src;
    activeScreenImage.alt = screen.alt[language];
    activeScreenTitle.textContent = screen.title[language];
    activeScreenDescription.textContent = screen.description[language];
    activeScreenImage.style.opacity = "1";
    activeScreenImage.style.transform = "scale(1)";
  }, 120);

  screenButtons.forEach((button) => {
    const isActive = button.dataset.screen === screenKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = button.dataset.lang || "en";
    localStorage.setItem("markdownToPDFWebLanguage", nextLanguage);
    applyLanguage(nextLanguage);
  });
});

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextScreen = button.dataset.screen;
    renderScreen(nextScreen);
  });
});

applyLanguage(currentLanguage);
