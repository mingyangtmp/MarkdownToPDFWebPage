const translations = {
  en: {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF is a Finder-powered macOS app for turning Markdown files into polished PDFs with profiles, syntax highlighting, math rendering, history, and privacy-first local processing.",
    navPrimaryAria: "Primary navigation",
    langSwitcherLabel: "Language switcher",
    screenSelectorAria: "Application screens",
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
    heroBadge1: "Right-click .md and .markdown files in authorized Finder folders",
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
      "In folders you explicitly authorize, select one file or many, open the context menu, and send your Markdown straight into the conversion queue.",
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
    workflowStep1Title: "Select Markdown in an authorized Finder folder",
    workflowStep1Body:
      "The Finder extension only appears in folders you explicitly authorize, and it targets `.md` and `.markdown` files so the flow starts from a familiar right-click menu.",
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
      "Pick page size, margins, theme, header and footer, table of contents, body font, code font, size, and line height from reusable profiles.",
    feature2Title: "Output rules that stay predictable",
    feature2Body:
      "Choose same-name exports, append dates, or custom patterns, then decide whether to replace files, fail fast, or create copies.",
    feature3Title: "Batch-aware post actions",
    feature3Body:
      "After conversion, the app can do nothing, reveal the PDF in Finder, or open the new file immediately.",
    feature4Title: "Markdown coverage aimed at real documents",
    feature4Body:
      "The app supports headings, ordered lists, unordered lists, task lists, block quotes, fenced code, syntax highlighting, tables, links, images, Mermaid diagrams, math formulas, and typography controls.",
    feature5Title: "Document navigation that carries into PDF",
    feature5Body:
      "Render settings can include table-of-contents navigation, and headings can carry over into PDF outline and bookmark entries for longer documents.",
    feature6Title: "Local-only by design",
    feature6Body:
      "The app is sandboxed, uses user-selected file access, and stores queue state, profiles, settings, and history on device.",
    screensEyebrow: "Screens",
    screensTitle: "A clean desktop surface for queue, history, and settings.",
    screensLead:
      "These images come from the current MarkdownToPDF desktop build and show the major workspaces described in the code and release notes.",
    screenDashboardLabel: "Queue Dashboard",
    screenHistoryLabel: "Conversion History",
    screenOutputLabel: "Output Defaults",
    screenRenderLabel: "Render Defaults",
    screenDashboardTitle: "Queue Dashboard",
    screenDashboardBody:
      "Monitor pending requests, import Markdown files by drag and drop, and start conversions with a single click.",
    screenDashboardAlt: "Queue Dashboard screen",
    screenHistoryTitle: "Conversion History",
    screenHistoryBody:
      "Review successful exports, reopen generated PDFs, reveal files in Finder, and keep a clear record of past runs.",
    screenHistoryAlt: "Conversion History screen",
    screenOutputTitle: "Output Defaults",
    screenOutputBody:
      "Choose naming strategies, overwrite behavior, default save locations, and the Finder folders where the extension should appear.",
    screenOutputAlt: "Output Defaults settings screen",
    screenRenderTitle: "Render Defaults",
    screenRenderBody:
      "Adjust page size, theme, fonts, font size, line height, spacing, margins, and post-conversion behavior from one settings surface.",
    screenRenderAlt: "Render Defaults settings screen",
    renderEyebrow: "Rendered Output",
    renderTitle: "Math, diagrams, and syntax-aware code blocks survive the trip to PDF.",
    renderLead:
      "The current renderer applies theme-aware color palettes, highlights common languages, and typesets TeX formulas offline before export.",
    renderMathTitle: "Offline math rendering",
    renderMathBody:
      "Inline and display formulas are typeset before export with bundled MathJax SVG, so the PDF keeps readable equations instead of raw TeX delimiters.",
    renderMathAlt: "Math rendering sample exported by MarkdownToPDF",
    renderCodeImageTitle: "Code block styling",
    renderCodeImageBody:
      "Exported code blocks keep syntax colors, language labels, and the polished window chrome used by the app's renderer.",
    renderCodeAlt: "Syntax-highlighted code block exported by MarkdownToPDF",
    renderTableTitle: "Table layout and alignment",
    renderTableBody:
      "Exported tables preserve borders, column alignment, and readable spacing so tabular content still feels structured after conversion.",
    renderTableAlt: "Table rendering sample exported by MarkdownToPDF",
    renderCodeTitle: "Syntax highlighting for common languages",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL, and C-like languages get built-in token highlighting. Unknown languages fall back to clean plain code blocks.",
    renderPaletteTitle: "Theme-driven color configuration",
    renderPaletteBody:
      "System, light, sepia, and dark themes affect document colors, code block chrome, and syntax token colors, so exports can match different reading contexts.",
    renderStructureTitle: "Mermaid and document structure",
    renderStructureBody:
      "Mermaid fenced blocks render as diagrams, while table-of-contents navigation and heading-based PDF outline and bookmark entries make long exports easier to browse.",
    supportEyebrow: "Support Matrix",
    supportTitle: "What the app supports in the current release.",
    supportLead:
      "This page is based on the current source code, release notes, support matrix, and repository documentation for MarkdownToPDF.",
    supportGoodTitle: "Available today",
    supportGood1: "Headings, paragraphs, horizontal rules, and block quotes",
    supportGood2: "Ordered lists, unordered lists, task lists, inline code, fenced code blocks, and syntax highlighting",
    supportGood3: "Tables, alignment, links, images, relative asset paths, Mermaid, and offline math rendering",
    supportGood4: "Themes, page sizes, margins, table-of-contents navigation, PDF outline bookmarks, naming rules, and post-export actions",
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
  "zh-Hans": {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF 是一款面向 macOS 的 Finder 扩展应用，可将 Markdown 文件本地转换为精致 PDF，并提供配置模板、语法高亮、数学公式渲染、历史记录、批量队列与隐私优先的处理方式。",
    navPrimaryAria: "主导航",
    langSwitcherLabel: "语言切换",
    screenSelectorAria: "应用界面切换",
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
    heroBadge1: "在你主动授权的 Finder 目录中，可右键 `.md` 与 `.markdown` 文件开始转换",
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
      "在你明确授权的目录中，无论是单文件还是多文件，只需打开右键菜单，就能把 Markdown 送进转换队列。",
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
    workflowStep1Title: "在已授权的 Finder 目录中选择 Markdown",
    workflowStep1Body:
      "Finder 扩展只会出现在你主动授权的目录中，并面向 `.md` 与 `.markdown` 文件，因此流程从熟悉的右键菜单开始。",
    workflowStep2Index: "步骤 2",
    workflowStep2Title: "用队列管理更长的转换任务",
    workflowStep2Body:
      "请求先进入共享队列，再由主应用批量消费、失败重试并保存历史，这样不会拖慢 Finder。",
    workflowStep3Index: "步骤 3",
    workflowStep3Title: "在一个地方统一控制 PDF 输出",
    workflowStep3Body:
      "页面大小、边距、字体、字号、间距、主题、文件命名、覆盖行为，以及导出后的动作，都在主应用里集中管理。",
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
      "应用已支持标题、有序列表、无序列表、任务列表、引用、围栏代码块、代码语法高亮、表格、链接、图片、Mermaid、数学公式与排版控制。",
    feature5Title: "可延续到 PDF 的文档导航",
    feature5Body:
      "渲染设置可以包含目录导航，而标题结构也可以进入 PDF 的 outline 和书签，方便浏览较长文档。",
    feature6Title: "从设计上坚持本地处理",
    feature6Body:
      "应用运行在沙盒中，依赖用户授权的文件访问权限，并把队列状态、模板、设置与历史记录存储在本机。",
    screensEyebrow: "界面截图",
    screensTitle: "为队列、历史和设置而设计的一套干净桌面界面。",
    screensLead:
      "这些截图来自当前的 MarkdownToPDF 桌面版本，对应代码和发布说明里描述的主要工作区。",
    screenDashboardLabel: "队列仪表盘",
    screenHistoryLabel: "转换历史",
    screenOutputLabel: "输出默认值",
    screenRenderLabel: "渲染默认值",
    screenDashboardTitle: "队列仪表盘",
    screenDashboardBody:
      "查看待处理请求，支持拖拽导入 Markdown 文件，并可一键启动转换。",
    screenDashboardAlt: "队列仪表盘界面截图",
    screenHistoryTitle: "转换历史",
    screenHistoryBody:
      "查看成功导出记录，重新打开 PDF，在 Finder 中定位文件，并保留清晰的历史结果。",
    screenHistoryAlt: "转换历史界面截图",
    screenOutputTitle: "输出默认值",
    screenOutputBody:
      "设置命名策略、覆盖行为、默认保存位置，以及 Finder 扩展在哪些目录中显示。",
    screenOutputAlt: "输出默认值设置界面截图",
    screenRenderTitle: "渲染默认值",
    screenRenderBody:
      "在同一个设置界面中调整纸张尺寸、主题、字体、字号、行高、间距、边距与转换后动作。",
    screenRenderAlt: "渲染默认值设置界面截图",
    renderEyebrow: "渲染能力",
    renderTitle: "数学公式、图表和带语义的代码块，都能稳定进入最终 PDF。",
    renderLead:
      "当前渲染器会在导出前应用主题配色、为常见语言添加语法高亮，并使用离线 MathJax 对 TeX 公式进行排版。",
    renderMathTitle: "离线数学公式渲染",
    renderMathBody:
      "行内与块级公式会在导出前通过内置 MathJax SVG 完成排版，因此最终 PDF 里显示的是清晰公式，而不是原始 TeX 定界符。",
    renderMathAlt: "MarkdownToPDF 导出的数学公式示例",
    renderCodeImageTitle: "代码块视觉样式",
    renderCodeImageBody:
      "导出的代码块会保留语法颜色、语言标签，以及渲染器提供的窗口式代码框外观。",
    renderCodeAlt: "MarkdownToPDF 导出的语法高亮代码块示例",
    renderTableTitle: "表格布局与对齐",
    renderTableBody:
      "导出的表格会保留边框、列对齐与清晰间距，让表格内容在转换后依然保持良好结构。",
    renderTableAlt: "MarkdownToPDF 导出的表格渲染示例",
    renderCodeTitle: "常见语言内置语法高亮",
    renderCodeBody:
      "Swift、Bash、Python、JavaScript、TypeScript、JSON、YAML、SQL 与 C-Like 语言都支持内置分词高亮；未知语言会回退为普通代码块。",
    renderPaletteTitle: "主题驱动的颜色配置",
    renderPaletteBody:
      "System、Light、Sepia 与 Dark 主题会共同影响文档配色、代码块外观以及语法 token 颜色，让导出的 PDF 更适合不同阅读场景。",
    renderStructureTitle: "Mermaid 与文档结构",
    renderStructureBody:
      "Mermaid 围栏代码块会渲染为图表，而目录导航与基于标题的 PDF 书签也让长文档更易浏览。",
    supportEyebrow: "支持矩阵",
    supportTitle: "当前正式版本已经支持什么。",
    supportLead:
      "此页面内容来自 MarkdownToPDF 仓库中的源码、发布说明、支持矩阵与仓库文档。",
    supportGoodTitle: "当前已可用能力",
    supportGood1: "标题、段落、分隔线与引用块",
    supportGood2: "有序列表、无序列表、任务列表、行内代码、围栏代码块与语法高亮",
    supportGood3: "表格、对齐、链接、图片、相对资源路径、Mermaid 与离线数学公式渲染",
    supportGood4: "主题、纸张尺寸、边距、目录导航、PDF 书签、命名规则与导出后动作",
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
  "zh-Hant": {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF 是一款面向 macOS 的 Finder 延伸功能 App，可將 Markdown 檔案在本機轉換為精緻 PDF，並提供設定檔、語法高亮、數學公式渲染、歷史記錄、批次佇列與隱私優先的處理方式。",
    navPrimaryAria: "主要導覽",
    langSwitcherLabel: "語言切換",
    screenSelectorAria: "應用介面切換",
    skipLink: "跳至主要內容",
    navFeatures: "功能",
    navWorkflow: "流程",
    navScreens: "介面",
    navPrivacy: "隱私",
    heroEyebrow: "Finder 延伸功能 + 原生 macOS App",
    heroTitle: "不離開 Finder，直接把 Markdown 匯出成精緻 PDF。",
    heroLead:
      "MarkdownToPDF 面向寫作者、工程師與文件團隊，強調本機處理、可重複匯出、批次佇列、設定檔，以及更適合列印與分享的輸出品質。",
    heroPrimary: "查看應用介面",
    heroSecondary: "閱讀隱私政策",
    heroBadge1: "在你主動授權的 Finder 資料夾中，可右鍵 `.md` 與 `.markdown` 檔案開始轉換",
    heroBadge2: "支援批次排隊、失敗重試與結果追蹤",
    heroBadge3: "可調整紙張、邊距、主題、字體與命名規則",
    heroBadge4: "所有處理都盡量保留在本機沙盒內完成",
    metaPlatformLabel: "平台",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "介面語言",
    metaLanguageValue: "內建 8 種語言",
    metaPrivacyLabel: "隱私",
    metaPrivacyValue: "無需帳號，不上傳雲端",
    heroNoteTopLabel: "以佇列為核心",
    heroNoteTopBody:
      "Finder 只負責送出請求，真正的長時間工作交給主 App 處理，穩定性與可管理性都更好。",
    heroNoteBottomLabel: "隱私優先的本機工作流",
    heroNoteBottomBody:
      "應用採用沙盒檔案權限與本機儲存，而不是雲端渲染或登入流程。",
    heroImageAlt: "MarkdownToPDF 佇列儀表板介面",
    signal1Title: "從 Finder 直接開始",
    signal1Body:
      "在你明確授權的資料夾中，不論是單檔還是多檔，只要開啟右鍵選單，就能把 Markdown 送進轉換佇列。",
    signal2Title: "適合重複匯出",
    signal2Body:
      "設定檔、命名規則、覆寫策略與匯出後動作，讓重複匯出維持穩定一致。",
    signal3Title: "歷史記錄清楚可讀",
    signal3Body:
      "成功記錄、失敗工作、重試流程與輸出路徑都留在主介面，而不是藏在選單後面。",
    signal4Title: "App 本身支援多語言",
    signal4Body:
      "桌面應用已內建英文、簡體中文、繁體中文、日文、韓文、德文、法文與義大利文。",
    workflowEyebrow: "工作流程",
    workflowTitle: "讓 Markdown 的重複匯出變得更從容。",
    workflowLead:
      "產品架構刻意讓 Finder 延伸功能保持輕量，把渲染、設定、歷史與診斷能力交給主應用。",
    workflowStep1Index: "步驟 1",
    workflowStep1Title: "在已授權的 Finder 資料夾中選擇 Markdown",
    workflowStep1Body:
      "Finder 延伸功能只會出現在你主動授權的資料夾中，並面向 `.md` 與 `.markdown` 檔案，因此流程可以從熟悉的右鍵選單開始。",
    workflowStep2Index: "步驟 2",
    workflowStep2Title: "用佇列管理較長的轉換工作",
    workflowStep2Body:
      "請求會先進入共用佇列，再由主應用批次處理、失敗重試並保留歷史，避免拖慢 Finder。",
    workflowStep3Index: "步驟 3",
    workflowStep3Title: "在同一個地方統一控制 PDF 輸出",
    workflowStep3Body:
      "頁面大小、邊距、字體、字級、間距、主題、檔名規則、覆寫行為，以及匯出後動作，都能在主應用中集中管理。",
    featuresEyebrow: "輸出控制",
    featuresTitle: "把注意力放在 PDF 成品，而不是反覆修改 Markdown 原始檔。",
    featuresLead:
      "目前正式版本聚焦在本機渲染品質、實用預設值，以及足夠細緻的控制能力，讓多次匯出也能保持一致。",
    feature1Title: "以設定檔驅動渲染",
    feature1Body:
      "可重複使用的設定檔支援紙張尺寸、邊距、主題、頁首頁尾、目錄、正文與程式碼字體、字級和行高。",
    feature2Title: "輸出規則更可預期",
    feature2Body:
      "可選擇同名匯出、附加日期或自訂樣式，再決定要覆蓋現有檔案、直接失敗，或建立副本。",
    feature3Title: "適合批次工作的匯出後動作",
    feature3Body:
      "轉換完成後，你可以選擇不做任何事、在 Finder 中顯示 PDF，或立即開啟新檔。",
    feature4Title: "Markdown 支援面向真實文件場景",
    feature4Body:
      "應用已支援標題、有序清單、無序清單、任務清單、引用、圍欄程式碼區塊、程式碼語法高亮、表格、連結、圖片、Mermaid、數學公式與排版控制。",
    feature5Title: "可延續到 PDF 的文件導覽",
    feature5Body:
      "渲染設定可以包含目錄導覽，而標題結構也可帶入 PDF outline 與書籤，方便瀏覽較長文件。",
    feature6Title: "從設計上堅持本機處理",
    feature6Body:
      "應用運行在沙盒中，依賴使用者授權的檔案存取權限，並把佇列狀態、設定檔、設定與歷史記錄存放在本機。",
    screensEyebrow: "介面截圖",
    screensTitle: "一套為佇列、歷史與設定而設計的乾淨桌面介面。",
    screensLead:
      "這些截圖來自目前的 MarkdownToPDF 桌面版本，對應程式碼與釋出說明中描述的主要工作區。",
    screenDashboardLabel: "佇列儀表板",
    screenHistoryLabel: "轉換歷史",
    screenOutputLabel: "輸出預設值",
    screenRenderLabel: "渲染預設值",
    screenDashboardTitle: "佇列儀表板",
    screenDashboardBody:
      "查看待處理請求，支援拖放匯入 Markdown 檔案，並可一鍵開始轉換。",
    screenDashboardAlt: "佇列儀表板介面截圖",
    screenHistoryTitle: "轉換歷史",
    screenHistoryBody:
      "查看成功匯出記錄、重新開啟 PDF、在 Finder 中定位檔案，並保留清楚的歷史結果。",
    screenHistoryAlt: "轉換歷史介面截圖",
    screenOutputTitle: "輸出預設值",
    screenOutputBody:
      "設定命名策略、覆寫行為、預設儲存位置，以及 Finder 延伸功能在哪些資料夾中顯示。",
    screenOutputAlt: "輸出預設值設定介面截圖",
    screenRenderTitle: "渲染預設值",
    screenRenderBody:
      "在同一個設定介面中調整紙張尺寸、主題、字體、字級、行高、間距、邊距與轉換後動作。",
    screenRenderAlt: "渲染預設值設定介面截圖",
    renderEyebrow: "渲染能力",
    renderTitle: "數學公式、圖表與帶語意的程式碼區塊，都能穩定進入最終 PDF。",
    renderLead:
      "目前渲染器會在匯出前套用主題配色、為常見語言加入語法高亮，並以離線 MathJax 排版 TeX 公式。",
    renderMathTitle: "離線數學公式渲染",
    renderMathBody:
      "行內與區塊公式會在匯出前透過內建 MathJax SVG 完成排版，因此最終 PDF 顯示的是清楚的公式，而不是原始 TeX 定界符。",
    renderMathAlt: "MarkdownToPDF 匯出的數學公式示例",
    renderCodeImageTitle: "程式碼區塊視覺樣式",
    renderCodeImageBody:
      "匯出的程式碼區塊會保留語法顏色、語言標籤，以及渲染器提供的視窗式程式碼框外觀。",
    renderCodeAlt: "MarkdownToPDF 匯出的語法高亮程式碼區塊示例",
    renderTableTitle: "表格版面與對齊",
    renderTableBody:
      "匯出的表格會保留框線、欄位對齊與清楚間距，讓表格內容在轉換後依然維持良好結構。",
    renderTableAlt: "MarkdownToPDF 匯出的表格渲染示例",
    renderCodeTitle: "常見語言內建語法高亮",
    renderCodeBody:
      "Swift、Bash、Python、JavaScript、TypeScript、JSON、YAML、SQL 與 C-Like 語言都支援內建高亮；未知語言會回退為乾淨的純文字程式碼區塊。",
    renderPaletteTitle: "由主題驅動的顏色配置",
    renderPaletteBody:
      "System、Light、Sepia 與 Dark 主題會共同影響文件配色、程式碼區塊外觀與語法 token 顏色，讓匯出的 PDF 更符合不同閱讀情境。",
    renderStructureTitle: "Mermaid 與文件結構",
    renderStructureBody:
      "Mermaid 圍欄程式碼區塊會渲染成圖表，而目錄導覽與基於標題的 PDF 書籤也讓長文件更容易瀏覽。",
    supportEyebrow: "支援矩陣",
    supportTitle: "目前正式版本已支援的內容。",
    supportLead:
      "此頁面內容來自 MarkdownToPDF 倉庫中的原始碼、釋出說明、支援矩陣與相關文件。",
    supportGoodTitle: "目前可用能力",
    supportGood1: "標題、段落、分隔線與引用區塊",
    supportGood2: "有序清單、無序清單、任務清單、行內程式碼、圍欄程式碼區塊與語法高亮",
    supportGood3: "表格、對齊、連結、圖片、相對資源路徑、Mermaid 與離線數學公式渲染",
    supportGood4: "主題、紙張尺寸、邊距、目錄導覽、PDF 書籤、命名規則與匯出後動作",
    privacyEyebrow: "隱私政策",
    privacyTitle: "MarkdownToPDF 的設計目標，是在你的 Mac 上完成處理，而不是把文件送到雲端。",
    privacyLead:
      "以下內容基於 2026 年 4 月 19 日時的目前應用架構、entitlement 檔案與倉庫文件。",
    privacyCard1Title: "應用會存取什麼",
    privacyCard1Body:
      "僅存取你明確選擇的 Markdown 檔案與資料夾，以及本機儲存的應用設定、設定檔、歷史記錄與佇列中繼資料。",
    privacyCard2Title: "應用不需要什麼",
    privacyCard2Body:
      "目前應用不需要建立帳號、不需要訂閱登入、沒有分析 SDK，也沒有文件上傳服務。",
    privacyCard3Title: "資料如何留在本機",
    privacyCard3Body:
      "應用運行在沙盒中，使用使用者授權的檔案權限，並透過 App Group 容器在 Finder 延伸功能與主應用之間傳遞工作。",
    privacyEffectiveLabel: "生效日期",
    privacyEffectiveValue: "2026 年 4 月 19 日",
    policy1Title: "1. 應用處理的資訊",
    policy1Body:
      "MarkdownToPDF 會處理你選擇的來源 Markdown 文件、你指定的輸出位置，以及本機儲存的渲染設定檔、命名預設值、轉換歷史與待處理佇列記錄。",
    policy2Title: "2. 為什麼需要這些資訊",
    policy2Body:
      "這些資訊僅用於產生 PDF、管理轉換佇列、重新開啟或在 Finder 中顯示匯出檔案、記住你的偏好設定，以及在應用內顯示成功或失敗結果。",
    policy3Title: "3. 網路、追蹤與第三方",
    policy3Body:
      "根據目前倉庫原始碼與沙盒權限設定，應用不包含雲端渲染、分析追蹤、廣告 SDK 或帳號系統；在正常使用中，也不會把文件內容上傳到遠端伺服器。",
    policy4Title: "4. 儲存與保留",
    policy4Body:
      "偏好設定、設定檔、佇列狀態與歷史記錄都儲存在你的本機裝置上。產生的 PDF 會保留在你選擇的資料夾中。你可以移除應用、清理記錄，或透過系統與應用設定撤銷資料夾存取權限。",
    policy5Title: "5. 你的控制權",
    policy5Body:
      "你可以決定應用能存取哪些檔案與資料夾、Finder 延伸功能是否啟用、預設輸出位置為何，以及本機歷史記錄是否繼續保留。",
    policy6Title: "6. 政策更新",
    policy6Body:
      "如果未來版本的應用架構發生變化，這份隱私政策也應與釋出說明和網站同步更新，以確保文件描述與實際行為一致。",
    footerBody:
      "本頁面根據目前的 MarkdownToPDF 程式碼庫、釋出說明、支援矩陣與介面截圖製作。",
    footerContactLabel: "聯絡信箱：",
  },
  ja: {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF は、Finder から Markdown ファイルを整った PDF に変換できる macOS アプリです。プロファイル、構文ハイライト、数式レンダリング、履歴、バッチキュー、プライバシー重視のローカル処理に対応しています。",
    navPrimaryAria: "メインナビゲーション",
    langSwitcherLabel: "言語切り替え",
    screenSelectorAria: "アプリ画面の切り替え",
    skipLink: "本文へ移動",
    navFeatures: "機能",
    navWorkflow: "流れ",
    navScreens: "画面",
    navPrivacy: "プライバシー",
    heroEyebrow: "Finder 拡張 + ネイティブ macOS アプリ",
    heroTitle: "Finder を離れずに、Markdown を洗練された PDF に変換。",
    heroLead:
      "MarkdownToPDF は、ローカルで繰り返し使える書き出し、バッチキュー、プロファイル管理、印刷向けのきれいな出力を求めるライター、エンジニア、ドキュメントチーム向けに設計されています。",
    heroPrimary: "アプリ画面を見る",
    heroSecondary: "プライバシーポリシーを読む",
    heroBadge1: "許可した Finder フォルダ内で `.md` と `.markdown` を右クリックして変換開始",
    heroBadge2: "バッチキュー、失敗時の再試行、結果追跡に対応",
    heroBadge3: "用紙サイズ、余白、テーマ、フォント、命名ルールを調整可能",
    heroBadge4: "処理はアプリのサンドボックス内でローカル完結",
    metaPlatformLabel: "対応環境",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "UI 言語",
    metaLanguageValue: "8 言語を内蔵",
    metaPrivacyLabel: "プライバシー",
    metaPrivacyValue: "アカウント不要、クラウド送信なし",
    heroNoteTopLabel: "キュー中心のワークフロー",
    heroNoteTopBody:
      "Finder からの要求はメインアプリに渡されるため、時間のかかる変換でも安定して管理しやすくなります。",
    heroNoteBottomLabel: "プライバシー重視のローカル処理",
    heroNoteBottomBody:
      "アプリはクラウドレンダリングやサインインではなく、サンドボックスのファイル権限とローカル保存を使います。",
    heroImageAlt: "MarkdownToPDF のキューダッシュボード",
    signal1Title: "Finder からすぐ開始",
    signal1Body:
      "明示的に許可したフォルダで、1 ファイルでも複数ファイルでも右クリックメニューから Markdown を変換キューへ送れます。",
    signal2Title: "繰り返し作業に強い",
    signal2Body:
      "プロファイル、命名ルール、上書きポリシー、変換後アクションにより、繰り返しの書き出しも安定します。",
    signal3Title: "見やすい履歴",
    signal3Body:
      "成功した書き出し、失敗ジョブ、再試行の流れ、出力先パスをメニューの奥に隠さず画面上に残します。",
    signal4Title: "アプリ自体が多言語対応",
    signal4Body:
      "デスクトップアプリは英語、簡体字中国語、繁体字中国語、日本語、韓国語、ドイツ語、フランス語、イタリア語に対応しています。",
    workflowEyebrow: "ワークフロー",
    workflowTitle: "Markdown の繰り返し書き出しを、もっと落ち着いて進められる形に。",
    workflowLead:
      "製品アーキテクチャは Finder 拡張を軽く保ち、レンダリング、設定、履歴、診断をメインアプリに任せる構成です。",
    workflowStep1Index: "ステップ 1",
    workflowStep1Title: "許可済み Finder フォルダで Markdown を選択",
    workflowStep1Body:
      "Finder 拡張は明示的に許可したフォルダ内でのみ表示され、`.md` と `.markdown` を対象にするため、慣れた右クリック操作から始められます。",
    workflowStep2Index: "ステップ 2",
    workflowStep2Title: "長い変換はキューで整理",
    workflowStep2Body:
      "リクエストは共有キューを通るため、Finder を重くせずにメインアプリ側で一括処理、再試行、履歴保存ができます。",
    workflowStep3Index: "ステップ 3",
    workflowStep3Title: "PDF 出力を一か所で調整",
    workflowStep3Body:
      "用紙サイズ、余白、フォント、文字サイズ、行間、間隔、テーマ、命名、上書き動作、変換後アクションをメインアプリからまとめて調整できます。",
    featuresEyebrow: "出力コントロール",
    featuresTitle: "Markdown ソースではなく、PDF の仕上がりを整える。",
    featuresLead:
      "現在の正式版は、ローカルレンダリング品質、実用的な初期設定、繰り返しの書き出しでも整った結果を保てる制御性に重点を置いています。",
    feature1Title: "プロファイル駆動のレンダリング",
    feature1Body:
      "再利用可能なプロファイルで、用紙サイズ、余白、テーマ、ヘッダーとフッター、目次、本文フォント、コードフォント、文字サイズ、行間を管理できます。",
    feature2Title: "予測しやすい出力ルール",
    feature2Body:
      "同名出力、日付付加、カスタムパターンを選び、その上で置き換え、失敗終了、または複製作成を決められます。",
    feature3Title: "バッチ処理向けの変換後アクション",
    feature3Body:
      "変換後は何もしない、Finder で PDF を表示する、または新しいファイルをすぐ開く、を選べます。",
    feature4Title: "実用文書向けの Markdown 対応",
    feature4Body:
      "見出し、順序付きリスト、箇条書き、タスクリスト、引用、フェンスコード、構文ハイライト、表、リンク、画像、Mermaid、数式、組版設定に対応しています。",
    feature5Title: "PDF まで引き継がれる文書ナビゲーション",
    feature5Body:
      "レンダリング設定には目次ナビゲーションを含められ、見出し構造は PDF のアウトラインやブックマークにも反映されます。",
    feature6Title: "ローカル前提の設計",
    feature6Body:
      "アプリはサンドボックス上で動作し、ユーザーが選んだファイル権限を使い、キュー状態、プロファイル、設定、履歴を端末上に保存します。",
    screensEyebrow: "画面",
    screensTitle: "キュー、履歴、設定のために整えられたデスクトップ UI。",
    screensLead:
      "これらの画像は現在の MarkdownToPDF デスクトップビルドから取得したもので、コードとリリースノートにある主要ワークスペースを示しています。",
    screenDashboardLabel: "キューダッシュボード",
    screenHistoryLabel: "変換履歴",
    screenOutputLabel: "出力の既定値",
    screenRenderLabel: "レンダリングの既定値",
    screenDashboardTitle: "キューダッシュボード",
    screenDashboardBody:
      "保留中の要求を確認し、Markdown ファイルをドラッグ＆ドロップで読み込み、ワンクリックで変換を開始できます。",
    screenDashboardAlt: "キューダッシュボード画面",
    screenHistoryTitle: "変換履歴",
    screenHistoryBody:
      "成功した書き出しを確認し、生成された PDF を開き直し、Finder で表示し、過去の実行結果をわかりやすく残せます。",
    screenHistoryAlt: "変換履歴画面",
    screenOutputTitle: "出力の既定値",
    screenOutputBody:
      "命名戦略、上書き動作、既定の保存先、Finder 拡張を表示するフォルダを設定できます。",
    screenOutputAlt: "出力の既定値設定画面",
    screenRenderTitle: "レンダリングの既定値",
    screenRenderBody:
      "用紙サイズ、テーマ、フォント、文字サイズ、行間、間隔、余白、変換後の挙動を 1 つの設定画面で調整できます。",
    screenRenderAlt: "レンダリングの既定値設定画面",
    renderEyebrow: "レンダリング",
    renderTitle: "数式、図、意味を保ったコードブロックが、そのまま PDF に残る。",
    renderLead:
      "現在のレンダラーはテーマに応じた配色を適用し、主要言語をハイライトし、TeX 数式をオフラインで組版してから書き出します。",
    renderMathTitle: "オフライン数式レンダリング",
    renderMathBody:
      "インライン数式とディスプレイ数式は、同梱の MathJax SVG で書き出し前に組版されるため、PDF には生の TeX 区切り文字ではなく読みやすい式が残ります。",
    renderMathAlt: "MarkdownToPDF で書き出した数式のサンプル",
    renderCodeImageTitle: "コードブロックの見た目",
    renderCodeImageBody:
      "書き出されたコードブロックは、構文色、言語ラベル、レンダラー由来の整ったウィンドウ風スタイルを維持します。",
    renderCodeAlt: "MarkdownToPDF で書き出した構文ハイライト付きコードブロック",
    renderTableTitle: "表のレイアウトと整列",
    renderTableBody:
      "書き出した表は罫線、列の整列、読みやすい余白を保つため、変換後も表形式の情報が整理されたままです。",
    renderTableAlt: "MarkdownToPDF で書き出した表のサンプル",
    renderCodeTitle: "主要言語向けの構文ハイライト",
    renderCodeBody:
      "Swift、Bash、Python、JavaScript、TypeScript、JSON、YAML、SQL、C 系言語には標準でトークンハイライトが適用されます。未知の言語はプレーンなコードブロックとして表示されます。",
    renderPaletteTitle: "テーマ連動の色設定",
    renderPaletteBody:
      "System、Light、Sepia、Dark の各テーマは、文書色、コードブロックの外観、構文トークン色に影響し、用途に応じた読み心地に合わせられます。",
    renderStructureTitle: "Mermaid と文書構造",
    renderStructureBody:
      "Mermaid のフェンスコードは図として描画され、目次ナビゲーションや見出しベースの PDF アウトラインとブックマークによって長文も追いやすくなります。",
    supportEyebrow: "サポート範囲",
    supportTitle: "現在の正式版で利用できる機能。",
    supportLead:
      "このページは MarkdownToPDF リポジトリの現行ソースコード、リリースノート、サポートマトリクス、関連ドキュメントを元にしています。",
    supportGoodTitle: "現在利用可能",
    supportGood1: "見出し、段落、水平線、引用ブロック",
    supportGood2: "順序付きリスト、箇条書き、タスクリスト、インラインコード、フェンスコード、構文ハイライト",
    supportGood3: "表、整列、リンク、画像、相対アセットパス、Mermaid、オフライン数式レンダリング",
    supportGood4: "テーマ、用紙サイズ、余白、目次ナビゲーション、PDF ブックマーク、命名ルール、変換後アクション",
    privacyEyebrow: "プライバシーポリシー",
    privacyTitle: "MarkdownToPDF は、クラウドではなくあなたの Mac 上で動作するよう設計されています。",
    privacyLead:
      "以下の内容は、2026 年 4 月 19 日時点のアプリ構成、entitlement ファイル、リポジトリ文書を反映しています。",
    privacyCard1Title: "アプリがアクセスするもの",
    privacyCard1Body:
      "明示的に選択した Markdown ファイルとフォルダ、およびローカルのアプリ設定、プロファイル、履歴、キューメタデータのみです。",
    privacyCard2Title: "アプリが必要としないもの",
    privacyCard2Body:
      "アカウント作成、サブスクリプションログイン、分析 SDK、文書アップロードサービスは現在のアプリに含まれていません。",
    privacyCard3Title: "データがローカルに留まる仕組み",
    privacyCard3Body:
      "アプリはサンドボックス内で動作し、ユーザー選択のファイル権限と App Group コンテナを使って Finder 拡張と本体アプリ間でジョブを受け渡します。",
    privacyEffectiveLabel: "施行日",
    privacyEffectiveValue: "2026年4月19日",
    policy1Title: "1. アプリが処理する情報",
    policy1Body:
      "MarkdownToPDF は、選択した元の Markdown 文書、指定した出力先、そしてローカルに保存されたレンダープロファイル、命名既定値、変換履歴、保留中キュー記録を処理します。",
    policy2Title: "2. その情報を使う理由",
    policy2Body:
      "これらの情報は、PDF の生成、キュー変換の管理、生成ファイルの再表示や Finder での表示、設定の記憶、成功・失敗結果の表示のためにのみ使用されます。",
    policy3Title: "3. ネットワーク、追跡、第三者サービス",
    policy3Body:
      "現在のリポジトリとサンドボックス権限に基づく限り、このアプリにはクラウドレンダリング、分析トラッキング、広告 SDK、アカウントシステムは含まれず、通常利用で文書内容を外部サーバーへアップロードすることもありません。",
    policy4Title: "4. 保存と保持",
    policy4Body:
      "設定、プロファイル、キュー状態、履歴は端末上にローカル保存されます。生成された PDF は選択したフォルダに残ります。アプリ削除、記録削除、フォルダ権限の取り消しはシステム設定やアプリ設定から行えます。",
    policy5Title: "5. あなたが管理できること",
    policy5Body:
      "アプリがアクセスできるファイルやフォルダ、Finder 拡張の有効化、出力先、履歴をローカルに保持するかどうかは、あなたが決められます。",
    policy6Title: "6. ポリシー更新",
    policy6Body:
      "将来のリリースでアプリ構成が変わる場合は、このポリシーもリリースノートや Web サイトと合わせて更新し、記載内容と実際の動作が一致するようにすべきです。",
    footerBody:
      "このページは、MarkdownToPDF の現行コードベース、リリースノート、サポートマトリクス、UI スクリーンショットをもとに構成されています。",
    footerContactLabel: "連絡先:",
  },
  ko: {
    pageTitle: "MarkdownToPDF for macOS",
    pageDescription:
      "MarkdownToPDF는 Finder에서 Markdown 파일을 정돈된 PDF로 바꿔 주는 macOS 앱입니다. 프로필, 문법 강조, 수식 렌더링, 기록, 배치 큐, 개인정보 중심의 로컬 처리에 대응합니다.",
    navPrimaryAria: "기본 탐색",
    langSwitcherLabel: "언어 전환",
    screenSelectorAria: "앱 화면 선택",
    skipLink: "본문으로 건너뛰기",
    navFeatures: "기능",
    navWorkflow: "흐름",
    navScreens: "화면",
    navPrivacy: "개인정보",
    heroEyebrow: "Finder 확장 + 네이티브 macOS 앱",
    heroTitle: "Finder를 벗어나지 않고 Markdown을 완성도 높은 PDF로 변환.",
    heroLead:
      "MarkdownToPDF는 로컬에서 반복 가능한 내보내기, 배치 큐, 프로필, 깔끔한 출력 품질이 필요한 작성자, 엔지니어, 문서 팀을 위해 만들어졌습니다.",
    heroPrimary: "앱 화면 보기",
    heroSecondary: "개인정보 처리방침 읽기",
    heroBadge1: "권한을 허용한 Finder 폴더에서 `.md`와 `.markdown` 파일을 우클릭해 변환 시작",
    heroBadge2: "배치 큐, 실패 재시도, 결과 추적 지원",
    heroBadge3: "용지 크기, 여백, 테마, 글꼴, 이름 규칙 조정 가능",
    heroBadge4: "모든 처리는 앱 샌드박스 안에서 로컬로 완료",
    metaPlatformLabel: "플랫폼",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "UI 언어",
    metaLanguageValue: "8개 언어 내장",
    metaPrivacyLabel: "개인정보",
    metaPrivacyValue: "계정 없음, 클라우드 업로드 없음",
    heroNoteTopLabel: "큐 중심 워크플로",
    heroNoteTopBody:
      "Finder 요청은 메인 앱으로 전달되므로 시간이 걸리는 변환도 더 안정적으로 관리할 수 있습니다.",
    heroNoteBottomLabel: "개인정보 중심의 로컬 워크플로",
    heroNoteBottomBody:
      "앱은 클라우드 렌더링이나 로그인 흐름 대신 샌드박스 파일 권한과 로컬 저장소를 사용합니다.",
    heroImageAlt: "MarkdownToPDF 큐 대시보드",
    signal1Title: "Finder에서 바로 시작",
    signal1Body:
      "명시적으로 허용한 폴더에서 파일 하나든 여러 개든 우클릭 메뉴로 Markdown을 변환 큐에 바로 보낼 수 있습니다.",
    signal2Title: "반복 작업에 최적화",
    signal2Body:
      "프로필, 이름 규칙, 덮어쓰기 정책, 변환 후 동작으로 반복 내보내기도 예측 가능하게 유지됩니다.",
    signal3Title: "읽기 쉬운 기록",
    signal3Body:
      "성공한 내보내기, 실패한 작업, 재시도 흐름, 출력 경로가 메뉴 속에 숨지 않고 화면에 남습니다.",
    signal4Title: "앱 자체가 다국어 지원",
    signal4Body:
      "데스크톱 앱은 영어, 중국어 간체, 중국어 번체, 일본어, 한국어, 독일어, 프랑스어, 이탈리아어를 지원합니다.",
    workflowEyebrow: "워크플로",
    workflowTitle: "Markdown 반복 내보내기를 더 차분하게 처리하는 방식.",
    workflowLead:
      "제품 구조는 Finder 확장을 가볍게 유지하고 렌더링, 설정, 기록, 진단은 메인 앱이 맡도록 설계되어 있습니다.",
    workflowStep1Index: "1단계",
    workflowStep1Title: "권한이 있는 Finder 폴더에서 Markdown 선택",
    workflowStep1Body:
      "Finder 확장은 사용자가 명시적으로 허용한 폴더에서만 나타나며 `.md`와 `.markdown` 파일을 대상으로 하므로 익숙한 우클릭 메뉴에서 바로 시작할 수 있습니다.",
    workflowStep2Index: "2단계",
    workflowStep2Title: "긴 변환은 큐로 정리",
    workflowStep2Body:
      "요청은 공용 큐를 거치므로 Finder를 느리게 하지 않으면서 메인 앱이 일괄 처리, 재시도, 기록 보존을 담당할 수 있습니다.",
    workflowStep3Index: "3단계",
    workflowStep3Title: "한 곳에서 PDF 출력 제어",
    workflowStep3Body:
      "용지 크기, 여백, 글꼴, 글자 크기, 줄 높이, 간격, 테마, 파일 이름 규칙, 덮어쓰기 동작, 변환 후 동작을 메인 앱에서 한 번에 조정할 수 있습니다.",
    featuresEyebrow: "출력 제어",
    featuresTitle: "Markdown 원문이 아니라 PDF 결과물을 다듬는 데 집중.",
    featuresLead:
      "현재 정식 버전은 로컬 렌더링 품질, 실용적인 기본값, 반복 내보내기에서도 일관된 결과를 유지할 수 있는 제어 기능에 집중합니다.",
    feature1Title: "프로필 기반 렌더링",
    feature1Body:
      "재사용 가능한 프로필로 용지 크기, 여백, 테마, 머리글과 바닥글, 목차, 본문 글꼴, 코드 글꼴, 글자 크기, 줄 높이를 관리할 수 있습니다.",
    feature2Title: "예측 가능한 출력 규칙",
    feature2Body:
      "같은 이름으로 저장, 날짜 추가, 사용자 지정 패턴 중 하나를 고르고 기존 파일 교체, 빠른 실패, 복사본 생성 중 동작을 정할 수 있습니다.",
    feature3Title: "배치 작업을 위한 변환 후 동작",
    feature3Body:
      "변환 후 아무 동작도 하지 않거나, Finder에서 PDF를 표시하거나, 새 파일을 즉시 열 수 있습니다.",
    feature4Title: "실제 문서 작업을 위한 Markdown 지원",
    feature4Body:
      "제목, 순서 목록, 글머리표 목록, 작업 목록, 인용문, fenced code, 문법 강조, 표, 링크, 이미지, Mermaid, 수식, 타이포그래피 제어를 지원합니다.",
    feature5Title: "PDF까지 이어지는 문서 탐색",
    feature5Body:
      "렌더링 설정에는 목차 탐색을 포함할 수 있고, 제목 구조는 PDF outline과 북마크로 이어져 긴 문서를 더 쉽게 탐색할 수 있습니다.",
    feature6Title: "로컬 우선 설계",
    feature6Body:
      "앱은 샌드박스에서 동작하며, 사용자가 선택한 파일 접근 권한을 사용하고 큐 상태, 프로필, 설정, 기록을 기기에 저장합니다.",
    screensEyebrow: "화면",
    screensTitle: "큐, 기록, 설정을 위해 정리된 데스크톱 인터페이스.",
    screensLead:
      "이 이미지는 현재 MarkdownToPDF 데스크톱 빌드에서 가져온 것으로, 코드와 릴리스 노트에 설명된 주요 작업 공간을 보여 줍니다.",
    screenDashboardLabel: "큐 대시보드",
    screenHistoryLabel: "변환 기록",
    screenOutputLabel: "출력 기본값",
    screenRenderLabel: "렌더링 기본값",
    screenDashboardTitle: "큐 대시보드",
    screenDashboardBody:
      "대기 중인 요청을 확인하고 Markdown 파일을 드래그 앤 드롭으로 가져오며 클릭 한 번으로 변환을 시작할 수 있습니다.",
    screenDashboardAlt: "큐 대시보드 화면",
    screenHistoryTitle: "변환 기록",
    screenHistoryBody:
      "성공한 내보내기를 검토하고, 생성된 PDF를 다시 열고, Finder에서 파일을 표시하며, 지난 실행 결과를 선명하게 남길 수 있습니다.",
    screenHistoryAlt: "변환 기록 화면",
    screenOutputTitle: "출력 기본값",
    screenOutputBody:
      "이름 지정 방식, 덮어쓰기 동작, 기본 저장 위치, Finder 확장이 나타날 폴더를 설정할 수 있습니다.",
    screenOutputAlt: "출력 기본값 설정 화면",
    screenRenderTitle: "렌더링 기본값",
    screenRenderBody:
      "용지 크기, 테마, 글꼴, 글자 크기, 줄 높이, 간격, 여백, 변환 후 동작을 하나의 설정 화면에서 조정할 수 있습니다.",
    screenRenderAlt: "렌더링 기본값 설정 화면",
    renderEyebrow: "렌더링",
    renderTitle: "수식, 다이어그램, 의미를 살린 코드 블록이 그대로 PDF까지 이어집니다.",
    renderLead:
      "현재 렌더러는 테마 기반 색상을 적용하고, 주요 언어를 문법 강조하며, TeX 수식을 오프라인에서 조판한 뒤 내보냅니다.",
    renderMathTitle: "오프라인 수식 렌더링",
    renderMathBody:
      "인라인 수식과 디스플레이 수식은 번들된 MathJax SVG로 내보내기 전에 조판되므로 PDF에는 원시 TeX 구분자가 아니라 읽기 쉬운 수식이 남습니다.",
    renderMathAlt: "MarkdownToPDF가 내보낸 수식 렌더링 예시",
    renderCodeImageTitle: "코드 블록 스타일",
    renderCodeImageBody:
      "내보낸 코드 블록은 문법 색상, 언어 레이블, 렌더러가 제공하는 정돈된 창 형태의 외형을 유지합니다.",
    renderCodeAlt: "MarkdownToPDF가 내보낸 문법 강조 코드 블록 예시",
    renderTableTitle: "표 레이아웃과 정렬",
    renderTableBody:
      "내보낸 표는 테두리, 열 정렬, 읽기 쉬운 간격을 유지해 표 형식의 정보가 변환 후에도 구조적으로 보입니다.",
    renderTableAlt: "MarkdownToPDF가 내보낸 표 렌더링 예시",
    renderCodeTitle: "주요 언어를 위한 문법 강조",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL, C 계열 언어는 기본 토큰 강조를 제공합니다. 알 수 없는 언어는 깔끔한 일반 코드 블록으로 표시됩니다.",
    renderPaletteTitle: "테마 기반 색상 구성",
    renderPaletteBody:
      "System, Light, Sepia, Dark 테마는 문서 색상, 코드 블록 외형, 문법 토큰 색에 영향을 주어 다양한 읽기 맥락에 맞는 PDF를 만들 수 있게 합니다.",
    renderStructureTitle: "Mermaid와 문서 구조",
    renderStructureBody:
      "Mermaid fenced block은 다이어그램으로 렌더링되며, 목차 탐색과 제목 기반 PDF outline 및 북마크로 긴 문서를 더 쉽게 훑어볼 수 있습니다.",
    supportEyebrow: "지원 범위",
    supportTitle: "현재 정식 버전에서 지원하는 내용.",
    supportLead:
      "이 페이지는 MarkdownToPDF 저장소의 현재 소스 코드, 릴리스 노트, 지원 매트릭스, 관련 문서를 기반으로 합니다.",
    supportGoodTitle: "현재 사용 가능",
    supportGood1: "제목, 문단, 가로줄, 인용 블록",
    supportGood2: "순서 목록, 글머리표 목록, 작업 목록, 인라인 코드, fenced code block, 문법 강조",
    supportGood3: "표, 정렬, 링크, 이미지, 상대 리소스 경로, Mermaid, 오프라인 수식 렌더링",
    supportGood4: "테마, 용지 크기, 여백, 목차 탐색, PDF 북마크, 이름 규칙, 변환 후 동작",
    privacyEyebrow: "개인정보 처리방침",
    privacyTitle: "MarkdownToPDF는 클라우드가 아니라 사용자의 Mac에서 동작하도록 설계되었습니다.",
    privacyLead:
      "아래 정책은 2026년 4월 19일 기준 앱 아키텍처, entitlement 파일, 저장소 문서를 반영합니다.",
    privacyCard1Title: "앱이 접근하는 정보",
    privacyCard1Body:
      "사용자가 명시적으로 선택한 Markdown 파일과 폴더, 그리고 로컬 앱 설정, 프로필, 기록, 큐 메타데이터만 접근합니다.",
    privacyCard2Title: "앱에 필요하지 않은 것",
    privacyCard2Body:
      "계정 생성, 구독 로그인, 분석 SDK, 문서 업로드 서비스는 현재 앱에 포함되지 않습니다.",
    privacyCard3Title: "데이터가 로컬에 머무는 방식",
    privacyCard3Body:
      "앱은 샌드박스에서 동작하며 사용자 선택 파일 권한과 App Group 컨테이너를 사용해 Finder 확장과 메인 앱 사이에 작업을 전달합니다.",
    privacyEffectiveLabel: "시행일",
    privacyEffectiveValue: "2026년 4월 19일",
    policy1Title: "1. 앱이 처리하는 정보",
    policy1Body:
      "MarkdownToPDF는 사용자가 선택한 원본 Markdown 문서, 지정한 출력 위치, 그리고 로컬에 저장된 렌더링 프로필, 이름 기본값, 변환 기록, 대기 중인 큐 기록을 처리합니다.",
    policy2Title: "2. 이 정보를 사용하는 이유",
    policy2Body:
      "이 정보는 PDF 렌더링, 큐 변환 관리, 생성 파일 다시 열기 또는 Finder에서 표시하기, 환경설정 기억하기, 앱 안에서 성공 및 실패 결과를 보여 주기 위해서만 사용됩니다.",
    policy3Title: "3. 네트워크, 추적, 제3자",
    policy3Body:
      "현재 저장소와 샌드박스 권한을 기준으로 볼 때, 앱에는 클라우드 렌더링, 분석 추적, 광고 SDK, 계정 시스템이 포함되지 않으며 일반 사용 중 문서 내용을 원격 서버에 업로드하지 않습니다.",
    policy4Title: "4. 저장과 보관",
    policy4Body:
      "환경설정, 프로필, 큐 상태, 기록은 기기에 로컬 저장됩니다. 생성된 PDF는 사용자가 선택한 폴더에 남습니다. 앱 제거, 기록 정리, 폴더 권한 철회는 시스템 및 앱 설정에서 할 수 있습니다.",
    policy5Title: "5. 사용자가 제어하는 항목",
    policy5Body:
      "앱이 접근할 수 있는 파일과 폴더, Finder 확장 활성화 여부, 출력 위치, 기록을 로컬에 유지할지 여부는 사용자가 직접 결정합니다.",
    policy6Title: "6. 정책 업데이트",
    policy6Body:
      "향후 릴리스에서 앱 구조가 바뀌면 이 정책도 릴리스 노트와 웹사이트와 함께 업데이트되어 문서화된 동작이 실제와 일치하도록 해야 합니다.",
    footerBody:
      "이 페이지는 현재 MarkdownToPDF 코드베이스, 릴리스 노트, 지원 매트릭스, 인터페이스 스크린샷을 바탕으로 제작되었습니다.",
    footerContactLabel: "문의:",
  },
  de: {
    pageTitle: "MarkdownToPDF für macOS",
    pageDescription:
      "MarkdownToPDF ist eine macOS-App mit Finder-Integration, die Markdown-Dateien lokal in hochwertige PDFs umwandelt, inklusive Profile, Syntax-Highlighting, Formelsatz, Verlauf, Batch-Warteschlange und datenschutzfreundlicher Verarbeitung.",
    navPrimaryAria: "Hauptnavigation",
    langSwitcherLabel: "Sprachauswahl",
    screenSelectorAria: "App-Ansichten",
    skipLink: "Zum Inhalt springen",
    navFeatures: "Funktionen",
    navWorkflow: "Ablauf",
    navScreens: "Ansichten",
    navPrivacy: "Datenschutz",
    heroEyebrow: "Finder-Erweiterung + native macOS-App",
    heroTitle: "Markdown direkt aus dem Finder in saubere PDFs umwandeln.",
    heroLead:
      "MarkdownToPDF ist für Autor:innen, Entwickler:innen und Dokumentationsteams gedacht, die lokale, wiederholbare Exporte mit Batch-Warteschlangen, Profilen und druckfertiger Ausgabe möchten.",
    heroPrimary: "Oberfläche ansehen",
    heroSecondary: "Datenschutzrichtlinie lesen",
    heroBadge1: "`.md`- und `.markdown`-Dateien in freigegebenen Finder-Ordnern per Rechtsklick umwandeln",
    heroBadge2: "Batch-Warteschlangen und Wiederholungen bei Fehlern",
    heroBadge3: "Papierformat, Ränder, Theme, Schriften und Benennungsregeln anpassen",
    heroBadge4: "Alles bleibt lokal in der App-Sandbox",
    metaPlatformLabel: "Plattform",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "UI-Sprachen",
    metaLanguageValue: "8 integrierte Optionen",
    metaPrivacyLabel: "Datenschutz",
    metaPrivacyValue: "Kein Konto, kein Cloud-Upload",
    heroNoteTopLabel: "Queue-zentrierter Ablauf",
    heroNoteTopBody:
      "Finder-Anfragen werden an die Haupt-App übergeben, damit längere Konvertierungen stabiler bleiben und leichter zu verwalten sind.",
    heroNoteBottomLabel: "Datenschutzfreundlicher lokaler Ablauf",
    heroNoteBottomBody:
      "Die App nutzt Sandbox-Dateizugriff und lokale Speicherung statt Cloud-Rendering oder Anmelde-Flows.",
    heroImageAlt: "MarkdownToPDF Warteschlangen-Dashboard",
    signal1Title: "Direkt aus dem Finder",
    signal1Body:
      "In Ordnern, die du ausdrücklich freigibst, kannst du eine oder mehrere Dateien per Kontextmenü direkt in die Konvertierungs-Warteschlange schicken.",
    signal2Title: "Für wiederkehrende Arbeit gebaut",
    signal2Body:
      "Profile, Benennungsregeln, Überschreibrichtlinien und Nachbearbeitungsaktionen machen wiederholte Exporte verlässlich.",
    signal3Title: "Gut lesbarer Verlauf",
    signal3Body:
      "Erfolgreiche Exporte, fehlgeschlagene Jobs, Wiederholungen und Ausgabepfade bleiben sichtbar, statt in Menüs zu verschwinden.",
    signal4Title: "Lokalisierte App-Oberfläche",
    signal4Body:
      "Die Desktop-App bietet bereits Englisch, vereinfachtes Chinesisch, traditionelles Chinesisch, Japanisch, Koreanisch, Deutsch, Französisch und Italienisch.",
    workflowEyebrow: "Ablauf",
    workflowTitle: "Markdown immer wieder exportieren, aber deutlich entspannter.",
    workflowLead:
      "Die Produktarchitektur hält die Finder-Erweiterung bewusst leicht und überlässt Rendering, Einstellungen, Verlauf und Diagnose der Haupt-App.",
    workflowStep1Index: "Schritt 1",
    workflowStep1Title: "Markdown in einem freigegebenen Finder-Ordner auswählen",
    workflowStep1Body:
      "Die Finder-Erweiterung erscheint nur in Ordnern, die du ausdrücklich freigegeben hast, und arbeitet mit `.md`- und `.markdown`-Dateien. So startet der Ablauf direkt im vertrauten Rechtsklick-Menü.",
    workflowStep2Index: "Schritt 2",
    workflowStep2Title: "Längere Jobs sauber über die Warteschlange organisieren",
    workflowStep2Body:
      "Anfragen laufen durch eine gemeinsame Queue, damit die Haupt-App bündeln, wiederholen und den Verlauf sichern kann, ohne den Finder auszubremsen.",
    workflowStep3Index: "Schritt 3",
    workflowStep3Title: "PDF-Ausgabe zentral steuern",
    workflowStep3Body:
      "Papierformat, Ränder, Schriften, Schriftgröße, Zeilenhöhe, Abstände, Themes, Dateibenennung, Überschreibverhalten und Aktionen nach dem Export werden zentral in der Haupt-App gesteuert.",
    featuresEyebrow: "Steuerung",
    featuresTitle: "Das PDF abstimmen, nicht die Markdown-Quelle verbiegen.",
    featuresLead:
      "Die aktuelle Version konzentriert sich auf lokale Renderqualität, sinnvolle Standards und genügend Kontrolle, damit exportierte PDFs über viele Läufe hinweg konsistent bleiben.",
    feature1Title: "Profilgesteuertes Rendering",
    feature1Body:
      "Wiederverwendbare Profile decken Papierformat, Ränder, Theme, Kopf- und Fußzeile, Inhaltsverzeichnis, Fließtext- und Code-Schrift, Schriftgröße und Zeilenhöhe ab.",
    feature2Title: "Vorhersehbare Ausgaberegeln",
    feature2Body:
      "Wähle gleichnamige Exporte, Datumsanhänge oder eigene Muster und entscheide dann zwischen Ersetzen, schnellem Abbruch oder Kopien.",
    feature3Title: "Aktionen nach der Konvertierung für Batch-Jobs",
    feature3Body:
      "Nach der Konvertierung kann die App nichts tun, das PDF im Finder zeigen oder die neue Datei sofort öffnen.",
    feature4Title: "Markdown-Abdeckung für echte Dokumente",
    feature4Body:
      "Die App unterstützt Überschriften, geordnete und ungeordnete Listen, Task-Listen, Zitate, fenced code, Syntax-Highlighting, Tabellen, Links, Bilder, Mermaid, mathematische Formeln und Typografie-Steuerung.",
    feature5Title: "Dokumentnavigation, die bis ins PDF reicht",
    feature5Body:
      "Render-Einstellungen können eine Inhaltsverzeichnis-Navigation enthalten, und Überschriften lassen sich in PDF-Outline- und Lesezeicheneinträge übernehmen.",
    feature6Title: "Von Grund auf lokal",
    feature6Body:
      "Die App läuft sandboxed, nutzt vom Benutzer gewählte Dateizugriffe und speichert Queue-Status, Profile, Einstellungen und Verlauf lokal auf dem Gerät.",
    screensEyebrow: "Ansichten",
    screensTitle: "Eine aufgeräumte Desktop-Oberfläche für Queue, Verlauf und Einstellungen.",
    screensLead:
      "Diese Bilder stammen aus dem aktuellen MarkdownToPDF-Desktop-Build und zeigen die wichtigsten Bereiche aus Codebasis und Release Notes.",
    screenDashboardLabel: "Queue-Dashboard",
    screenHistoryLabel: "Konvertierungsverlauf",
    screenOutputLabel: "Ausgabe-Standards",
    screenRenderLabel: "Render-Standards",
    screenDashboardTitle: "Queue-Dashboard",
    screenDashboardBody:
      "Ausstehende Anfragen überwachen, Markdown-Dateien per Drag-and-drop importieren und Konvertierungen mit einem Klick starten.",
    screenDashboardAlt: "Ansicht des Queue-Dashboards",
    screenHistoryTitle: "Konvertierungsverlauf",
    screenHistoryBody:
      "Erfolgreiche Exporte prüfen, erzeugte PDFs erneut öffnen, Dateien im Finder anzeigen und vergangene Läufe nachvollziehbar festhalten.",
    screenHistoryAlt: "Ansicht des Konvertierungsverlaufs",
    screenOutputTitle: "Ausgabe-Standards",
    screenOutputBody:
      "Benennungsstrategien, Überschreibverhalten, Standardspeicherorte und die Finder-Ordner festlegen, in denen die Erweiterung erscheinen soll.",
    screenOutputAlt: "Einstellungsansicht für Ausgabe-Standards",
    screenRenderTitle: "Render-Standards",
    screenRenderBody:
      "Papierformat, Theme, Schriften, Schriftgröße, Zeilenhöhe, Abstände, Ränder und Verhalten nach der Konvertierung in einer zentralen Einstellungsansicht anpassen.",
    screenRenderAlt: "Einstellungsansicht für Render-Standards",
    renderEyebrow: "Rendering",
    renderTitle: "Formeln, Diagramme und semantische Codeblöcke überstehen den Weg ins PDF.",
    renderLead:
      "Der aktuelle Renderer wendet themeabhängige Farbpaletten an, hebt gängige Sprachen hervor und setzt TeX-Formeln offline vor dem Export.",
    renderMathTitle: "Offline-Formelsatz",
    renderMathBody:
      "Inline- und Display-Formeln werden vor dem Export mit gebündeltem MathJax-SVG gesetzt, sodass im PDF lesbare Gleichungen statt roher TeX-Begrenzer erscheinen.",
    renderMathAlt: "Beispiel für mathematisches Rendering aus MarkdownToPDF",
    renderCodeImageTitle: "Codeblock-Styling",
    renderCodeImageBody:
      "Exportierte Codeblöcke behalten Syntaxfarben, Sprachlabels und den aufgeräumten Fenster-Look des Renderers.",
    renderCodeAlt: "Beispiel für syntaxhervorgehobenen Codeblock aus MarkdownToPDF",
    renderTableTitle: "Tabellenlayout und Ausrichtung",
    renderTableBody:
      "Exportierte Tabellen behalten Rahmen, Spaltenausrichtung und gut lesbare Abstände, sodass tabellarische Inhalte auch nach der Konvertierung strukturiert bleiben.",
    renderTableAlt: "Beispiel für Tabellen-Rendering aus MarkdownToPDF",
    renderCodeTitle: "Syntax-Highlighting für gängige Sprachen",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL und C-ähnliche Sprachen erhalten integriertes Token-Highlighting. Unbekannte Sprachen fallen auf saubere Plain-Code-Blöcke zurück.",
    renderPaletteTitle: "Theme-gesteuerte Farbkonfiguration",
    renderPaletteBody:
      "System-, Light-, Sepia- und Dark-Themes beeinflussen Dokumentfarben, Codeblock-Chrome und Syntaxfarben, damit Exporte zu unterschiedlichen Lesesituationen passen.",
    renderStructureTitle: "Mermaid und Dokumentstruktur",
    renderStructureBody:
      "Mermaid-Blöcke werden als Diagramme gerendert, während Inhaltsverzeichnis-Navigation sowie PDF-Outline- und Lesezeicheneinträge auf Basis von Überschriften lange Exporte leichter durchsuchbar machen.",
    supportEyebrow: "Support-Matrix",
    supportTitle: "Was die App in der aktuellen Version unterstützt.",
    supportLead:
      "Diese Seite basiert auf dem aktuellen Quellcode, den Release Notes, der Support-Matrix und der Dokumentation im MarkdownToPDF-Repository.",
    supportGoodTitle: "Heute verfügbar",
    supportGood1: "Überschriften, Absätze, horizontale Linien und Zitatblöcke",
    supportGood2: "Geordnete und ungeordnete Listen, Task-Listen, Inline-Code, fenced code und Syntax-Highlighting",
    supportGood3: "Tabellen, Ausrichtung, Links, Bilder, relative Asset-Pfade, Mermaid und Offline-Formelrendering",
    supportGood4: "Themes, Papiergrößen, Ränder, Inhaltsverzeichnis-Navigation, PDF-Lesezeichen, Benennungsregeln und Aktionen nach dem Export",
    privacyEyebrow: "Datenschutzrichtlinie",
    privacyTitle: "MarkdownToPDF ist dafür gedacht, auf deinem Mac zu arbeiten, nicht in der Cloud.",
    privacyLead:
      "Die folgende Richtlinie spiegelt App-Architektur, Entitlement-Dateien und Repository-Dokumentation mit Stand 19. April 2026 wider.",
    privacyCard1Title: "Worauf die App zugreift",
    privacyCard1Body:
      "Nur auf die Markdown-Dateien und Ordner, die du ausdrücklich auswählst, sowie auf lokale App-Einstellungen, Profile, Verlaufsdaten und Queue-Metadaten.",
    privacyCard2Title: "Was die App nicht benötigt",
    privacyCard2Body:
      "Keine Kontoerstellung, kein Abo-Login, kein Analytics-SDK und kein Dokument-Upload-Dienst in der aktuellen App.",
    privacyCard3Title: "Wie Daten lokal bleiben",
    privacyCard3Body:
      "Die App läuft sandboxed und nutzt benutzergewählte Dateiberechtigungen plus einen App-Group-Container für die Übergabe zwischen Finder-Erweiterung und Haupt-App.",
    privacyEffectiveLabel: "Gültig ab",
    privacyEffectiveValue: "19. April 2026",
    policy1Title: "1. Welche Informationen die App verarbeitet",
    policy1Body:
      "MarkdownToPDF verarbeitet die von dir ausgewählten Quelldokumente, die gewählten Ausgabepfade sowie lokal gespeicherte Einstellungen wie Render-Profile, Benennungsstandards, Konvertierungsverlauf und ausstehende Queue-Einträge.",
    policy2Title: "2. Wofür diese Informationen verwendet werden",
    policy2Body:
      "Diese Informationen werden ausschließlich genutzt, um PDFs zu rendern, Konvertierungswarteschlangen zu verwalten, erzeugte Dateien wieder zu öffnen oder im Finder zu zeigen, Einstellungen zu merken und Ergebnisse oder Fehler in der App anzuzeigen.",
    policy3Title: "3. Netzwerk, Tracking und Dritte",
    policy3Body:
      "Basierend auf dem aktuellen Repository und den Sandbox-Entitlements enthält die App kein Cloud-Rendering, kein Analytics-Tracking, keine Werbe-SDKs und keine Kontosysteme. Dokumentinhalte werden bei normaler Nutzung nicht an entfernte Server hochgeladen.",
    policy4Title: "4. Speicherung und Aufbewahrung",
    policy4Body:
      "Einstellungen, Profile, Queue-Status und Verlauf werden lokal auf deinem Gerät gespeichert. Erzeugte PDFs bleiben im von dir gewählten Ordner. Du kannst die App entfernen, Einträge löschen oder Ordnerzugriffe über System- und App-Einstellungen widerrufen.",
    policy5Title: "5. Deine Kontrolle",
    policy5Body:
      "Du entscheidest, auf welche Dateien und Ordner die App zugreifen darf, ob die Finder-Erweiterung aktiviert ist, welcher Ausgabepfad verwendet wird und ob Verlaufsdaten lokal erhalten bleiben.",
    policy6Title: "6. Aktualisierung der Richtlinie",
    policy6Body:
      "Wenn sich die App-Architektur in einer zukünftigen Version ändert, sollte diese Richtlinie zusammen mit den Release Notes und der Website aktualisiert werden, damit die dokumentierte Beschreibung korrekt bleibt.",
    footerBody:
      "Erstellt auf Grundlage der aktuellen MarkdownToPDF-Codebasis, Release Notes, Support-Matrix und Interface-Screenshots.",
    footerContactLabel: "Kontakt:",
  },
  fr: {
    pageTitle: "MarkdownToPDF pour macOS",
    pageDescription:
      "MarkdownToPDF est une application macOS intégrée au Finder qui transforme localement des fichiers Markdown en PDF soignés, avec profils, coloration syntaxique, rendu mathématique, historique, file d'attente par lots et traitement respectueux de la vie privée.",
    navPrimaryAria: "Navigation principale",
    langSwitcherLabel: "Sélecteur de langue",
    screenSelectorAria: "Écrans de l'application",
    skipLink: "Aller au contenu",
    navFeatures: "Fonctionnalités",
    navWorkflow: "Flux",
    navScreens: "Écrans",
    navPrivacy: "Confidentialité",
    heroEyebrow: "Extension Finder + application macOS native",
    heroTitle: "Transformer Markdown en PDF soignés sans quitter Finder.",
    heroLead:
      "MarkdownToPDF s'adresse aux rédacteurs, ingénieurs et équipes de documentation qui veulent des exports locaux, répétables, avec files d'attente, profils et rendu propre prêt à l'impression.",
    heroPrimary: "Voir l'interface",
    heroSecondary: "Lire la politique de confidentialité",
    heroBadge1: "Clic droit sur les fichiers `.md` et `.markdown` dans les dossiers Finder autorisés",
    heroBadge2: "Files d'attente par lots et reprise après échec",
    heroBadge3: "Réglage du format de page, des marges, du thème, des polices et des règles de nommage",
    heroBadge4: "Tout reste local dans le bac à sable de l'application",
    metaPlatformLabel: "Plateforme",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "Langues de l'interface",
    metaLanguageValue: "8 options intégrées",
    metaPrivacyLabel: "Confidentialité",
    metaPrivacyValue: "Aucun compte, aucun envoi vers le cloud",
    heroNoteTopLabel: "Flux centré sur la file",
    heroNoteTopBody:
      "Les demandes du Finder sont confiées à l'application principale, ce qui rend les conversions plus longues plus stables et plus faciles à suivre.",
    heroNoteBottomLabel: "Traitement local d'abord",
    heroNoteBottomBody:
      "L'application utilise des accès fichiers sandboxés et un stockage local plutôt qu'un rendu cloud ou des flux de connexion.",
    heroImageAlt: "Tableau de bord de file d'attente MarkdownToPDF",
    signal1Title: "Directement depuis Finder",
    signal1Body:
      "Dans les dossiers que vous autorisez explicitement, sélectionnez un ou plusieurs fichiers, ouvrez le menu contextuel et envoyez votre Markdown directement dans la file de conversion.",
    signal2Title: "Pensé pour le travail répétitif",
    signal2Body:
      "Profils, règles de nommage, politiques d'écrasement et actions après conversion rendent les exports répétés prévisibles.",
    signal3Title: "Historique lisible",
    signal3Body:
      "Les exports réussis, les échecs, les reprises et les chemins de sortie restent visibles au lieu de disparaître dans un menu.",
    signal4Title: "Interface déjà localisée",
    signal4Body:
      "L'application de bureau propose déjà l'anglais, le chinois simplifié, le chinois traditionnel, le japonais, le coréen, l'allemand, le français et l'italien.",
    workflowEyebrow: "Flux",
    workflowTitle: "Une manière plus sereine d'exporter Markdown, encore et encore.",
    workflowLead:
      "L'architecture garde l'extension Finder légère et laisse à l'application principale le rendu, les réglages, l'historique et le diagnostic.",
    workflowStep1Index: "Étape 1",
    workflowStep1Title: "Sélectionner Markdown dans un dossier Finder autorisé",
    workflowStep1Body:
      "L'extension Finder n'apparaît que dans les dossiers que vous autorisez explicitement, et cible les fichiers `.md` et `.markdown`, pour démarrer depuis un clic droit familier.",
    workflowStep2Index: "Étape 2",
    workflowStep2Title: "Laisser la file organiser les travaux plus longs",
    workflowStep2Body:
      "Les demandes passent par une file partagée, ce qui laisse à l'application principale la place de grouper, relancer et conserver l'historique sans ralentir Finder.",
    workflowStep3Index: "Étape 3",
    workflowStep3Title: "Piloter la sortie PDF depuis un seul endroit",
    workflowStep3Body:
      "Format de page, marges, polices, taille, interlignage, espacements, thèmes, nommage, comportement d'écrasement et actions après export se règlent dans l'application principale.",
    featuresEyebrow: "Contrôle",
    featuresTitle: "Ajuster le PDF, pas la source Markdown.",
    featuresLead:
      "La version actuelle met l'accent sur la qualité du rendu local, des réglages par défaut utiles et suffisamment de contrôle pour garder des PDF cohérents au fil des exports répétés.",
    feature1Title: "Rendu piloté par profils",
    feature1Body:
      "Des profils réutilisables couvrent le format de page, les marges, le thème, l'en-tête et le pied de page, la table des matières, les polices du texte et du code, la taille et l'interligne.",
    feature2Title: "Des règles de sortie prévisibles",
    feature2Body:
      "Choisissez un export au même nom, avec date ajoutée ou selon un motif personnalisé, puis décidez s'il faut remplacer, échouer vite ou créer des copies.",
    feature3Title: "Actions après conversion adaptées aux lots",
    feature3Body:
      "Après conversion, l'application peut ne rien faire, révéler le PDF dans Finder ou ouvrir immédiatement le nouveau fichier.",
    feature4Title: "Une couverture Markdown pensée pour de vrais documents",
    feature4Body:
      "L'application prend en charge les titres, listes ordonnées et non ordonnées, listes de tâches, citations, blocs de code, coloration syntaxique, tableaux, liens, images, Mermaid, formules mathématiques et réglages typographiques.",
    feature5Title: "Une navigation documentaire qui va jusqu'au PDF",
    feature5Body:
      "Les réglages de rendu peuvent inclure une navigation par table des matières, et les titres peuvent être repris dans l'outline et les signets du PDF.",
    feature6Title: "Conçu pour rester local",
    feature6Body:
      "L'application est sandboxée, utilise des accès fichiers choisis par l'utilisateur et stocke file, profils, réglages et historique sur l'appareil.",
    screensEyebrow: "Écrans",
    screensTitle: "Une interface de bureau claire pour la file, l'historique et les réglages.",
    screensLead:
      "Ces images proviennent du build actuel de MarkdownToPDF et montrent les principaux espaces de travail décrits dans le code et les notes de version.",
    screenDashboardLabel: "Tableau de bord",
    screenHistoryLabel: "Historique",
    screenOutputLabel: "Valeurs de sortie",
    screenRenderLabel: "Valeurs de rendu",
    screenDashboardTitle: "Tableau de bord",
    screenDashboardBody:
      "Surveiller les demandes en attente, importer des fichiers Markdown par glisser-déposer et lancer les conversions en un clic.",
    screenDashboardAlt: "Écran du tableau de bord de file",
    screenHistoryTitle: "Historique",
    screenHistoryBody:
      "Revoir les exports réussis, rouvrir les PDF générés, afficher les fichiers dans Finder et garder une trace claire des exécutions passées.",
    screenHistoryAlt: "Écran d'historique de conversion",
    screenOutputTitle: "Valeurs de sortie",
    screenOutputBody:
      "Définir les stratégies de nommage, le comportement d'écrasement, les emplacements par défaut et les dossiers Finder où l'extension doit apparaître.",
    screenOutputAlt: "Écran de réglages des valeurs de sortie",
    screenRenderTitle: "Valeurs de rendu",
    screenRenderBody:
      "Ajuster format de page, thème, polices, taille, interligne, espacements, marges et comportement après conversion depuis une seule surface de réglages.",
    screenRenderAlt: "Écran de réglages des valeurs de rendu",
    renderEyebrow: "Rendu",
    renderTitle: "Les formules, diagrammes et blocs de code conservent leur sens jusqu'au PDF final.",
    renderLead:
      "Le moteur actuel applique des palettes liées au thème, met en évidence les langages courants et compose les formules TeX hors ligne avant l'export.",
    renderMathTitle: "Rendu mathématique hors ligne",
    renderMathBody:
      "Les formules en ligne et en bloc sont composées avant l'export avec MathJax SVG embarqué, pour obtenir un PDF lisible au lieu de délimiteurs TeX bruts.",
    renderMathAlt: "Exemple de rendu mathématique exporté par MarkdownToPDF",
    renderCodeImageTitle: "Style des blocs de code",
    renderCodeImageBody:
      "Les blocs de code exportés conservent les couleurs de syntaxe, les étiquettes de langage et l'habillage soigné de la fenêtre de code.",
    renderCodeAlt: "Exemple de bloc de code coloré exporté par MarkdownToPDF",
    renderTableTitle: "Mise en page et alignement des tableaux",
    renderTableBody:
      "Les tableaux exportés conservent bordures, alignement des colonnes et espacements lisibles, pour que le contenu reste structuré après conversion.",
    renderTableAlt: "Exemple de rendu de tableau exporté par MarkdownToPDF",
    renderCodeTitle: "Coloration syntaxique pour les langages courants",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL et les langages de type C bénéficient d'une coloration intégrée. Les langages inconnus retombent sur des blocs de code simples.",
    renderPaletteTitle: "Configuration de couleurs pilotée par le thème",
    renderPaletteBody:
      "Les thèmes System, Light, Sepia et Dark influencent les couleurs du document, l'habillage des blocs de code et les couleurs des tokens pour adapter l'export à différents contextes de lecture.",
    renderStructureTitle: "Mermaid et structure documentaire",
    renderStructureBody:
      "Les blocs Mermaid sont rendus comme diagrammes, tandis que la navigation par table des matières et les signets PDF basés sur les titres rendent les longs exports plus faciles à parcourir.",
    supportEyebrow: "Matrice de prise en charge",
    supportTitle: "Ce que l'application prend en charge dans la version actuelle.",
    supportLead:
      "Cette page s'appuie sur le code source actuel, les notes de version, la matrice de prise en charge et la documentation du dépôt MarkdownToPDF.",
    supportGoodTitle: "Disponible aujourd'hui",
    supportGood1: "Titres, paragraphes, règles horizontales et blocs de citation",
    supportGood2: "Listes ordonnées, listes non ordonnées, listes de tâches, code en ligne, blocs de code et coloration syntaxique",
    supportGood3: "Tableaux, alignement, liens, images, chemins relatifs, Mermaid et rendu mathématique hors ligne",
    supportGood4: "Thèmes, formats de page, marges, navigation par table des matières, signets PDF, règles de nommage et actions après export",
    privacyEyebrow: "Politique de confidentialité",
    privacyTitle: "MarkdownToPDF est conçu pour fonctionner sur votre Mac, pas dans le cloud.",
    privacyLead:
      "La politique ci-dessous reflète l'architecture actuelle de l'application, les fichiers d'entitlements et la documentation du dépôt au 19 avril 2026.",
    privacyCard1Title: "Ce à quoi l'application accède",
    privacyCard1Body:
      "Uniquement les fichiers et dossiers Markdown que vous choisissez explicitement, ainsi que les réglages locaux, profils, historiques et métadonnées de file.",
    privacyCard2Title: "Ce que l'application ne demande pas",
    privacyCard2Body:
      "Pas de création de compte, pas de connexion d'abonnement, pas de SDK analytique et pas de service d'envoi de documents dans l'application actuelle.",
    privacyCard3Title: "Comment les données restent locales",
    privacyCard3Body:
      "L'application est sandboxée et utilise des permissions de fichiers choisies par l'utilisateur ainsi qu'un conteneur App Group pour le passage des tâches entre Finder et l'application.",
    privacyEffectiveLabel: "Date d'effet",
    privacyEffectiveValue: "19 avril 2026",
    policy1Title: "1. Informations traitées par l'application",
    policy1Body:
      "MarkdownToPDF traite les documents source que vous sélectionnez, les emplacements de sortie que vous choisissez et les réglages stockés localement comme les profils de rendu, règles de nommage, historique de conversion et enregistrements de file en attente.",
    policy2Title: "2. Pourquoi ces informations sont utilisées",
    policy2Body:
      "Ces informations servent uniquement à générer des PDF, gérer les conversions en file, rouvrir ou révéler les fichiers générés, mémoriser vos préférences et afficher les réussites ou les échecs dans l'application.",
    policy3Title: "3. Réseau, suivi et tiers",
    policy3Body:
      "D'après le dépôt actuel et les entitlements sandbox, l'application n'inclut ni rendu cloud, ni suivi analytique, ni SDK publicitaires, ni système de compte, et n'envoie pas le contenu des documents vers des serveurs distants dans le cadre d'un usage normal.",
    policy4Title: "4. Stockage et conservation",
    policy4Body:
      "Préférences, profils, état de la file et historique sont stockés localement sur votre appareil. Les PDF générés restent dans le dossier choisi. Vous pouvez supprimer l'application, effacer les données ou révoquer les accès via les réglages système et application.",
    policy5Title: "5. Vos contrôles",
    policy5Body:
      "Vous contrôlez les fichiers et dossiers auxquels l'application peut accéder, l'activation de l'extension Finder, l'emplacement de sortie utilisé et la conservation locale de l'historique.",
    policy6Title: "6. Mise à jour de la politique",
    policy6Body:
      "Si l'architecture de l'application change dans une future version, cette politique devra être mise à jour en même temps que les notes de version et le site afin que la description reste fidèle au comportement réel.",
    footerBody:
      "Construit à partir du code actuel de MarkdownToPDF, des notes de version, de la matrice de prise en charge et des captures d'écran de l'interface.",
    footerContactLabel: "Contact :",
  },
  it: {
    pageTitle: "MarkdownToPDF per macOS",
    pageDescription:
      "MarkdownToPDF è un'app macOS integrata con Finder che converte localmente file Markdown in PDF curati, con profili, evidenziazione della sintassi, rendering matematico, cronologia, coda batch e trattamento attento alla privacy.",
    navPrimaryAria: "Navigazione principale",
    langSwitcherLabel: "Selettore lingua",
    screenSelectorAria: "Schermate dell'app",
    skipLink: "Vai al contenuto",
    navFeatures: "Funzionalità",
    navWorkflow: "Flusso",
    navScreens: "Schermate",
    navPrivacy: "Privacy",
    heroEyebrow: "Estensione Finder + app macOS nativa",
    heroTitle: "Trasforma Markdown in PDF curati senza uscire da Finder.",
    heroLead:
      "MarkdownToPDF è pensata per scrittori, ingegneri e team di documentazione che vogliono esportazioni locali e ripetibili, con code batch, profili e output puliti pronti per la stampa.",
    heroPrimary: "Esplora l'interfaccia",
    heroSecondary: "Leggi l'informativa sulla privacy",
    heroBadge1: "Clic destro su file `.md` e `.markdown` nelle cartelle Finder autorizzate",
    heroBadge2: "Code batch e ritentativi in caso di errore",
    heroBadge3: "Regola formato pagina, margini, tema, font e regole di naming",
    heroBadge4: "Tutto resta locale nel sandbox dell'app",
    metaPlatformLabel: "Piattaforma",
    metaPlatformValue: "macOS 14+",
    metaLanguageLabel: "Lingue UI",
    metaLanguageValue: "8 opzioni integrate",
    metaPrivacyLabel: "Privacy",
    metaPrivacyValue: "Nessun account, nessun upload sul cloud",
    heroNoteTopLabel: "Flusso centrato sulla coda",
    heroNoteTopBody:
      "Le richieste del Finder vengono passate all'app principale, così le conversioni più lunghe restano stabili e più facili da gestire.",
    heroNoteBottomLabel: "Flusso locale orientato alla privacy",
    heroNoteBottomBody:
      "L'app usa accesso ai file sandboxato e archiviazione locale invece di rendering cloud o flussi di login.",
    heroImageAlt: "Dashboard della coda di MarkdownToPDF",
    signal1Title: "Direttamente da Finder",
    signal1Body:
      "Nelle cartelle che autorizzi esplicitamente, puoi selezionare uno o più file, aprire il menu contestuale e inviare il Markdown direttamente alla coda di conversione.",
    signal2Title: "Pensata per il lavoro ripetitivo",
    signal2Body:
      "Profili, regole di naming, politiche di sovrascrittura e azioni post-conversione rendono prevedibili le esportazioni ripetute.",
    signal3Title: "Cronologia leggibile",
    signal3Body:
      "Esportazioni riuscite, lavori falliti, ritentativi e percorsi di output restano visibili invece di sparire dentro un menu.",
    signal4Title: "Interfaccia già localizzata",
    signal4Body:
      "L'app desktop include già inglese, cinese semplificato, cinese tradizionale, giapponese, coreano, tedesco, francese e italiano.",
    workflowEyebrow: "Flusso",
    workflowTitle: "Un modo più tranquillo di esportare Markdown ancora e ancora.",
    workflowLead:
      "L'architettura del prodotto mantiene leggera l'estensione Finder e lascia all'app principale rendering, impostazioni, cronologia e diagnostica.",
    workflowStep1Index: "Passo 1",
    workflowStep1Title: "Seleziona Markdown in una cartella Finder autorizzata",
    workflowStep1Body:
      "L'estensione Finder appare solo nelle cartelle che autorizzi esplicitamente e lavora su file `.md` e `.markdown`, così il flusso parte dal familiare menu contestuale.",
    workflowStep2Index: "Passo 2",
    workflowStep2Title: "Lascia che la coda organizzi i lavori più lunghi",
    workflowStep2Body:
      "Le richieste passano attraverso una coda condivisa, lasciando all'app principale lo spazio per batch, ritentativi e cronologia senza rallentare Finder.",
    workflowStep3Index: "Passo 3",
    workflowStep3Title: "Controlla l'output PDF da un solo posto",
    workflowStep3Body:
      "Formato pagina, margini, font, dimensione del testo, altezza riga, spaziature, temi, naming, comportamento di sovrascrittura e azioni dopo l'export si regolano dall'app principale.",
    featuresEyebrow: "Controllo",
    featuresTitle: "Regola il PDF, non il sorgente Markdown.",
    featuresLead:
      "La versione attuale si concentra sulla qualità del rendering locale, su impostazioni pratiche e su un controllo sufficiente per mantenere coerenti i PDF esportati nel tempo.",
    feature1Title: "Rendering guidato da profili",
    feature1Body:
      "Profili riutilizzabili coprono formato pagina, margini, tema, intestazione e piè di pagina, indice, font del testo e del codice, dimensione del carattere e altezza riga.",
    feature2Title: "Regole di output prevedibili",
    feature2Body:
      "Scegli esportazioni con lo stesso nome, con data aggiunta o con pattern personalizzati, poi decidi se sostituire, fallire subito o creare copie.",
    feature3Title: "Azioni post-conversione adatte ai batch",
    feature3Body:
      "Dopo la conversione, l'app può non fare nulla, mostrare il PDF nel Finder oppure aprire subito il nuovo file.",
    feature4Title: "Supporto Markdown pensato per documenti reali",
    feature4Body:
      "L'app supporta titoli, liste ordinate e non ordinate, task list, citazioni, blocchi di codice, evidenziazione della sintassi, tabelle, link, immagini, Mermaid, formule matematiche e controlli tipografici.",
    feature5Title: "Navigazione del documento che arriva fino al PDF",
    feature5Body:
      "Le impostazioni di rendering possono includere la navigazione del sommario, e i titoli possono essere trasferiti nell'outline e nei segnalibri del PDF.",
    feature6Title: "Progettata per restare locale",
    feature6Body:
      "L'app è sandboxata, usa accessi ai file scelti dall'utente e salva localmente stato della coda, profili, impostazioni e cronologia.",
    screensEyebrow: "Schermate",
    screensTitle: "Una superficie desktop pulita per coda, cronologia e impostazioni.",
    screensLead:
      "Queste immagini provengono dall'attuale build desktop di MarkdownToPDF e mostrano gli spazi principali descritti nel codice e nelle note di rilascio.",
    screenDashboardLabel: "Dashboard della coda",
    screenHistoryLabel: "Cronologia conversioni",
    screenOutputLabel: "Valori predefiniti output",
    screenRenderLabel: "Valori predefiniti rendering",
    screenDashboardTitle: "Dashboard della coda",
    screenDashboardBody:
      "Monitora le richieste in attesa, importa file Markdown con drag and drop e avvia le conversioni con un solo clic.",
    screenDashboardAlt: "Schermata dashboard della coda",
    screenHistoryTitle: "Cronologia conversioni",
    screenHistoryBody:
      "Rivedi gli export riusciti, riapri i PDF generati, mostra i file nel Finder e mantieni un registro chiaro delle esecuzioni passate.",
    screenHistoryAlt: "Schermata cronologia conversioni",
    screenOutputTitle: "Valori predefiniti output",
    screenOutputBody:
      "Scegli strategie di naming, comportamento di sovrascrittura, posizioni di salvataggio predefinite e le cartelle Finder in cui deve comparire l'estensione.",
    screenOutputAlt: "Schermata impostazioni output predefinito",
    screenRenderTitle: "Valori predefiniti rendering",
    screenRenderBody:
      "Regola formato pagina, tema, font, dimensione del testo, altezza riga, spaziature, margini e comportamento post-conversione da un'unica schermata di impostazioni.",
    screenRenderAlt: "Schermata impostazioni rendering predefinito",
    renderEyebrow: "Rendering",
    renderTitle: "Formule, diagrammi e blocchi di codice mantengono il loro significato fino al PDF finale.",
    renderLead:
      "Il renderer attuale applica palette legate al tema, evidenzia i linguaggi più comuni e compone offline le formule TeX prima dell'export.",
    renderMathTitle: "Rendering matematico offline",
    renderMathBody:
      "Le formule inline e display vengono composte prima dell'export con MathJax SVG integrato, così il PDF conserva equazioni leggibili invece dei delimitatori TeX grezzi.",
    renderMathAlt: "Esempio di rendering matematico esportato da MarkdownToPDF",
    renderCodeImageTitle: "Stile dei blocchi di codice",
    renderCodeImageBody:
      "I blocchi di codice esportati mantengono colori sintattici, etichette del linguaggio e l'aspetto curato a finestra usato dal renderer.",
    renderCodeAlt: "Esempio di blocco di codice con evidenziazione esportato da MarkdownToPDF",
    renderTableTitle: "Layout e allineamento delle tabelle",
    renderTableBody:
      "Le tabelle esportate conservano bordi, allineamento delle colonne e spaziature leggibili, così i contenuti tabellari restano strutturati dopo la conversione.",
    renderTableAlt: "Esempio di rendering tabella esportato da MarkdownToPDF",
    renderCodeTitle: "Evidenziazione della sintassi per i linguaggi più comuni",
    renderCodeBody:
      "Swift, Bash, Python, JavaScript, TypeScript, JSON, YAML, SQL e i linguaggi simili al C ricevono evidenziazione integrata. I linguaggi sconosciuti tornano a blocchi di codice puliti e semplici.",
    renderPaletteTitle: "Configurazione colori guidata dal tema",
    renderPaletteBody:
      "I temi System, Light, Sepia e Dark influenzano colori del documento, aspetto dei blocchi di codice e colori dei token, così gli export possono adattarsi a diversi contesti di lettura.",
    renderStructureTitle: "Mermaid e struttura del documento",
    renderStructureBody:
      "I blocchi Mermaid vengono resi come diagrammi, mentre navigazione del sommario e segnalibri PDF basati sui titoli rendono più facile sfogliare export lunghi.",
    supportEyebrow: "Matrice di supporto",
    supportTitle: "Cosa supporta l'app nella versione attuale.",
    supportLead:
      "Questa pagina si basa sul codice sorgente attuale, sulle note di rilascio, sulla matrice di supporto e sulla documentazione del repository MarkdownToPDF.",
    supportGoodTitle: "Disponibile oggi",
    supportGood1: "Titoli, paragrafi, linee orizzontali e blocchi di citazione",
    supportGood2: "Liste ordinate, liste non ordinate, task list, codice inline, blocchi di codice e evidenziazione della sintassi",
    supportGood3: "Tabelle, allineamento, link, immagini, percorsi relativi, Mermaid e rendering matematico offline",
    supportGood4: "Temi, formati pagina, margini, navigazione del sommario, segnalibri PDF, regole di naming e azioni post-export",
    privacyEyebrow: "Informativa sulla privacy",
    privacyTitle: "MarkdownToPDF è progettata per lavorare sul tuo Mac, non nel cloud.",
    privacyLead:
      "L'informativa seguente riflette l'architettura attuale dell'app, i file di entitlement e la documentazione del repository al 19 aprile 2026.",
    privacyCard1Title: "A cosa accede l'app",
    privacyCard1Body:
      "Solo ai file e alle cartelle Markdown che scegli esplicitamente, oltre a impostazioni locali, profili, cronologia e metadati della coda.",
    privacyCard2Title: "Cosa l'app non richiede",
    privacyCard2Body:
      "Nessuna creazione di account, nessun login in abbonamento, nessun SDK di analytics e nessun servizio di upload documenti nell'app attuale.",
    privacyCard3Title: "Come i dati restano locali",
    privacyCard3Body:
      "L'app è sandboxata e usa permessi ai file scelti dall'utente insieme a un contenitore App Group per il passaggio dei lavori tra estensione Finder e app principale.",
    privacyEffectiveLabel: "Data di efficacia",
    privacyEffectiveValue: "19 aprile 2026",
    policy1Title: "1. Informazioni trattate dall'app",
    policy1Body:
      "MarkdownToPDF tratta i documenti sorgente selezionati, le posizioni di output scelte e le impostazioni salvate localmente come profili di rendering, regole di naming, cronologia delle conversioni e record della coda in attesa.",
    policy2Title: "2. Perché queste informazioni vengono usate",
    policy2Body:
      "Queste informazioni vengono usate solo per generare PDF, gestire le conversioni in coda, riaprire o mostrare i file generati, ricordare le preferenze e mostrare risultati o errori dentro l'app.",
    policy3Title: "3. Rete, tracciamento e terze parti",
    policy3Body:
      "In base al repository attuale e agli entitlement sandbox, l'app non include rendering cloud, tracciamento analitico, SDK pubblicitari o sistemi di account, e non carica il contenuto dei documenti su server remoti durante l'uso normale.",
    policy4Title: "4. Archiviazione e conservazione",
    policy4Body:
      "Preferenze, profili, stato della coda e cronologia sono salvati localmente sul dispositivo. I PDF generati restano nella cartella scelta. Puoi rimuovere l'app, cancellare i dati o revocare l'accesso alle cartelle dalle impostazioni di sistema e dell'app.",
    policy5Title: "5. I tuoi controlli",
    policy5Body:
      "Decidi tu a quali file e cartelle l'app può accedere, se l'estensione Finder è abilitata, quale posizione di output usare e se mantenere localmente le voci della cronologia.",
    policy6Title: "6. Aggiornamenti della policy",
    policy6Body:
      "Se l'architettura dell'app cambia in una futura versione, anche questa informativa dovrebbe essere aggiornata insieme alle note di rilascio e al sito, così la descrizione pubblicata resta accurata.",
    footerBody:
      "Realizzato a partire dall'attuale codebase di MarkdownToPDF, dalle note di rilascio, dalla matrice di supporto e dagli screenshot dell'interfaccia.",
    footerContactLabel: "Contatto:",
  },
};

const languageMeta = {
  en: { htmlLang: "en" },
  "zh-Hans": { htmlLang: "zh-CN" },
  "zh-Hant": { htmlLang: "zh-TW" },
  ja: { htmlLang: "ja" },
  ko: { htmlLang: "ko" },
  de: { htmlLang: "de" },
  fr: { htmlLang: "fr" },
  it: { htmlLang: "it" },
};

const screens = {
  dashboard: {
    src: "pictures/dashboard.png",
    titleKey: "screenDashboardTitle",
    descriptionKey: "screenDashboardBody",
    altKey: "screenDashboardAlt",
  },
  history: {
    src: "pictures/history.png",
    titleKey: "screenHistoryTitle",
    descriptionKey: "screenHistoryBody",
    altKey: "screenHistoryAlt",
  },
  output: {
    src: "pictures/settings-1.png",
    titleKey: "screenOutputTitle",
    descriptionKey: "screenOutputBody",
    altKey: "screenOutputAlt",
  },
  render: {
    src: "pictures/settings-2.png",
    titleKey: "screenRenderTitle",
    descriptionKey: "screenRenderBody",
    altKey: "screenRenderAlt",
  },
};

const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
const screenButtons = document.querySelectorAll(".screen-thumb");
const activeScreenImage = document.getElementById("active-screen-image");
const activeScreenTitle = document.getElementById("active-screen-title");
const activeScreenDescription = document.getElementById("active-screen-description");

const storedLanguage = localStorage.getItem("markdownToPDFWebLanguage");
const normalizedStoredLanguage = storedLanguage === "zh" ? "zh-Hans" : storedLanguage;

let currentLanguage = normalizedStoredLanguage in translations ? normalizedStoredLanguage : "en";
let currentScreen = "dashboard";

function translateKey(language, key) {
  const dictionary = translations[language] || translations.en;

  if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
    return dictionary[key];
  }

  return translations.en[key] || "";
}

function applyLanguage(language) {
  const nextLanguage = language in translations ? language : "en";

  currentLanguage = nextLanguage;
  document.documentElement.lang = languageMeta[nextLanguage]?.htmlLang || "en";
  document.title = translateKey(nextLanguage, "pageTitle");

  if (metaDescription) {
    metaDescription.setAttribute("content", translateKey(nextLanguage, "pageDescription"));
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translateKey(nextLanguage, key);
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;
    node.setAttribute("alt", translateKey(nextLanguage, key));
  });

  ariaLabelNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    node.setAttribute("aria-label", translateKey(nextLanguage, key));
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderScreen(currentScreen);
}

function renderScreen(screenKey) {
  const screen = screens[screenKey];
  if (!screen) return;

  currentScreen = screenKey;

  activeScreenImage.style.opacity = "0.2";
  activeScreenImage.style.transform = "scale(1.015)";

  window.setTimeout(() => {
    activeScreenImage.src = screen.src;
    activeScreenImage.alt = translateKey(currentLanguage, screen.altKey);
    activeScreenTitle.textContent = translateKey(currentLanguage, screen.titleKey);
    activeScreenDescription.textContent = translateKey(currentLanguage, screen.descriptionKey);
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
