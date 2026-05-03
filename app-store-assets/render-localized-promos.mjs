#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const chromePath =
  process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const htmlLang = {
  en: "en",
  "zh-Hans": "zh-CN",
  "zh-Hant": "zh-TW",
  ja: "ja",
  ko: "ko",
  de: "de",
  fr: "fr",
  it: "it",
};

const defaultLanguages = ["zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "it"];

const promos = [
  {
    key: "auto-toc",
    html: "auto-toc-promo.html",
    outputBase: "mac-app-store-auto-toc-promo",
  },
  {
    key: "batch-history",
    html: "batch-history-promo.html",
    outputBase: "mac-app-store-batch-history-promo",
  },
  {
    key: "code-block",
    html: "code-block-promo.html",
    outputBase: "mac-app-store-code-block-promo",
  },
  {
    key: "data-formula",
    html: "data-formula-promo.html",
    outputBase: "mac-app-store-data-formula-promo",
  },
  {
    key: "export-profiles",
    html: "export-profiles-promo.html",
    outputBase: "mac-app-store-export-profiles-promo",
  },
  {
    key: "header-footer",
    html: "header-footer-promo.html",
    outputBase: "mac-app-store-header-footer-promo",
  },
  {
    key: "mermaid-diagram",
    html: "mermaid-diagram-promo.html",
    outputBase: "mac-app-store-mermaid-diagram-promo",
  },
  {
    key: "table-corner-radius",
    html: "table-corner-radius-promo.html",
    outputBase: "mac-app-store-table-corner-radius-promo",
  },
];

const copy = {
  "zh-Hans": {
    "batch-history": {
      eyebrow: "批量转换",
      headline: "一次排队多个 Markdown 文件",
      lead: "拖入应用或从 Finder 转换，再从待处理队列到完成历史追踪每一份 PDF。",
      panelTop: ["转换来源", "3 种方式"],
      sourceRows: [
        ["Finder 右键菜单", "右键"],
        ["拖放批量队列", "批量"],
        ["手动导入", "控制"],
      ],
      footer: "直接在 Finder 中打开 PDF 或显示已完成的导出文件",
      tokens: ["Finder", "队列", "历史"],
      statusTitle: "追踪每次转换",
      statusBody: "待处理请求、成功记录、重试动作和输出位置都清晰可见。",
    },
    "code-block": {
      eyebrow: "代码块导出",
      headline: "每份 PDF 都有精致代码块",
      lead: "保留语法高亮、语言标签和窗口式代码样式，让 Markdown 转成 PDF 后依然清晰好读。",
      badges: ["Swift / Bash / Python / JS", "本地渲染，不上传云端", "批量转换与历史记录", "面向技术文档"],
      footer: "在 Finder 中选择 Markdown，一键导出精致 PDF",
      tokens: ["语法", "本地", "PDF"],
      exportTitle: "导出完成",
      exportBody: "代码块已保留到 PDF",
    },
    "data-formula": {
      eyebrow: "数据与公式导出",
      headline: "让数据和公式精准进入 PDF",
      lead: "Markdown 转为 PDF 时，表格保持对齐，公式保持清晰，计算说明依然易读。",
      panelTop: ["导出质量", "适合 PDF"],
      miniRows: [
        ["表格", "对齐"],
        ["公式", "清晰"],
        ["注释", "易读"],
      ],
      footer: "导出包含表格、公式与技术说明的完整报告",
      tokens: ["数据", "公式", "PDF"],
      paperTitle: "季度绩效模型",
      paperSubtitle: "Markdown 表格渲染为清晰 PDF 报告",
      formulaPill: "LaTeX 风格公式",
      tableHeaders: ["指标", "Q1", "Q2", "公式"],
      tableRows: ["收入", "增长", "利润率"],
      equationLabels: ["展示公式", "加权评分", "预测模型"],
      insightTitle: "理解公式的导出",
      insightBody: "表格保持对齐，公式在最终 PDF 中依然锐利清晰。",
    },
    "export-profiles": {
      eyebrow: "导出配置模板",
      headline: "转换前调好每一份 PDF",
      lead: "保存可复用设置：纸张、主题、字体、边距、表格形状、命名和导出后动作。",
      panelTop: ["当前模板", "默认"],
      profileChips: [
        ["页面", "A4 / A5 / Letter / Legal"],
        ["主题", "系统 / 浅色 / 深色"],
        ["排版", "正文 + 代码字体"],
        ["输出", "名称、目录、动作"],
      ],
      footer: "配置模板让 Finder 转换在每份文档中保持一致",
      tokens: ["模板", "主题", "输出"],
      previewTitle: ["渲染默认值", "当前模板样式设置"],
      controlBoxes: [
        ["页面尺寸", "A4 / A5"],
        ["主题", "系统"],
        ["正文字体", "Avenir Next"],
        ["代码字体", "Menlo"],
      ],
      sliderLabels: ["字号 12.0", "行高 1.60", "边距 24 / 16 pt", "PDF 页脚"],
      sampleCards: [
        ["预览", "示例文本 Aa 123"],
        ["代码示例", "let title = \"Preview\""],
        ["成功后", "打开 PDF"],
      ],
      calloutTitle: "可复用导出模板",
      calloutBody: "选择一次模板，即可把同一版式应用到 Finder 和应用内转换。",
    },
    "mermaid-diagram": {
      eyebrow: "Mermaid 图表导出",
      headline: "把 Markdown 图表变成 PDF 视觉内容",
      lead: "导出前渲染 Mermaid 代码块中的流程图，让文档保留图表而不是原始代码。",
      panelTop: ["图表流程", "离线"],
      formatRows: [
        ["Mermaid 围栏代码块", "解析"],
        ["渲染 SVG 图表", "绘制"],
        ["清晰 PDF 输出", "导出"],
      ],
      footer: "Mermaid 与 MathJax 资源已内置，可本地渲染",
      tokens: ["Mermaid", "本地", "PDF"],
      diagramTitle: ["转换流程", "导出的 PDF 中保留已渲染图表"],
      nodes: ["Markdown 文件", "待处理队列", "本地渲染器", "PDF 输出", "历史记录"],
      codeLabels: ["Finder 右键菜单", "待处理队列", "MarkdownToPDF PRO 应用", "PDF 输出"],
      calloutTitle: "图表保持可视化",
      calloutBody: "流程图会在生成 PDF 前完成渲染，让技术文档继续清晰可读。",
    },
    "table-corner-radius": {
      eyebrow: "表格样式",
      headline: "方角或圆角 PDF 表格",
      lead: "导出清晰 Markdown 表格，并调整圆角半径，让样式匹配你的文档。",
      panelTop: ["圆角半径", "12 pt"],
      scale: ["0 pt", "最大"],
      footer: "导出 PDF 前设置表格圆角数值",
      switchLabels: ["矩形", "圆角"],
      cardLabels: ["标准矩形", "圆角矩形"],
      calloutTitle: "用户可控圆角",
      calloutBody: "技术报告可用锐利方角，精致讲义可用更柔和的圆角。",
    },
  },
  "zh-Hant": {
    "batch-history": {
      eyebrow: "批次轉換",
      headline: "一次排入多個 Markdown 檔",
      lead: "拖入 App 或從 Finder 轉換，並從待處理佇列到完成歷史追蹤每一份 PDF。",
      panelTop: ["轉換來源", "3 種方式"],
      sourceRows: [
        ["Finder 右鍵選單", "右鍵"],
        ["拖放批次佇列", "批次"],
        ["手動匯入", "控制"],
      ],
      footer: "直接在 Finder 中開啟 PDF 或顯示已完成的匯出檔",
      tokens: ["Finder", "佇列", "歷史"],
      statusTitle: "追蹤每次轉換",
      statusBody: "待處理請求、成功記錄、重試動作與輸出位置都清楚可見。",
    },
    "code-block": {
      eyebrow: "程式碼區塊匯出",
      headline: "每份 PDF 都有精緻程式碼",
      lead: "保留語法高亮、語言標籤與視窗式程式碼樣式，讓 Markdown 轉成 PDF 後依然清楚好讀。",
      badges: ["Swift / Bash / Python / JS", "本機渲染，不上傳雲端", "批次轉換與歷史記錄", "面向技術文件"],
      footer: "在 Finder 中選擇 Markdown，一鍵匯出精緻 PDF",
      tokens: ["語法", "本機", "PDF"],
      exportTitle: "匯出完成",
      exportBody: "程式碼區塊已保留到 PDF",
    },
    "data-formula": {
      eyebrow: "資料與公式匯出",
      headline: "讓資料與公式精準進入 PDF",
      lead: "Markdown 轉為 PDF 時，表格維持對齊，公式保持清晰，計算說明依然易讀。",
      panelTop: ["匯出品質", "適合 PDF"],
      miniRows: [
        ["表格", "對齊"],
        ["公式", "清晰"],
        ["註解", "易讀"],
      ],
      footer: "匯出包含表格、公式與技術說明的完整報告",
      tokens: ["資料", "公式", "PDF"],
      paperTitle: "季度績效模型",
      paperSubtitle: "Markdown 表格渲染為清楚 PDF 報告",
      formulaPill: "LaTeX 風格公式",
      tableHeaders: ["指標", "Q1", "Q2", "公式"],
      tableRows: ["收入", "成長", "利潤率"],
      equationLabels: ["展示公式", "加權評分", "預測模型"],
      insightTitle: "理解公式的匯出",
      insightBody: "表格維持對齊，公式在最終 PDF 中依然銳利清楚。",
    },
    "export-profiles": {
      eyebrow: "匯出設定檔",
      headline: "轉換前調好每一份 PDF",
      lead: "保存可重複使用的紙張、主題、字體、邊距、表格形狀、命名與匯出後動作。",
      panelTop: ["目前設定檔", "預設"],
      profileChips: [
        ["頁面", "A4 / A5 / Letter / Legal"],
        ["主題", "系統 / 淺色 / 深色"],
        ["排版", "正文 + 程式碼字體"],
        ["輸出", "名稱、資料夾、動作"],
      ],
      footer: "設定檔讓 Finder 轉換在每份文件中保持一致",
      tokens: ["設定檔", "主題", "輸出"],
      previewTitle: ["渲染預設值", "目前設定檔樣式設定"],
      controlBoxes: [
        ["頁面尺寸", "A4 / A5"],
        ["主題", "系統"],
        ["正文字體", "Avenir Next"],
        ["程式碼字體", "Menlo"],
      ],
      sliderLabels: ["字級 12.0", "行高 1.60", "邊距 24 / 16 pt", "PDF 頁尾"],
      sampleCards: [
        ["預覽", "示例文字 Aa 123"],
        ["程式碼示例", "let title = \"Preview\""],
        ["成功後", "開啟 PDF"],
      ],
      calloutTitle: "可重複使用的匯出模板",
      calloutBody: "選擇一次設定檔，即可把同一版式套用到 Finder 與 App 內轉換。",
    },
    "mermaid-diagram": {
      eyebrow: "Mermaid 圖表匯出",
      headline: "把 Markdown 圖表變成 PDF 視覺內容",
      lead: "匯出前渲染 Mermaid 程式碼區塊中的流程圖，讓文件保留圖表而不是原始碼。",
      panelTop: ["圖表流程", "離線"],
      formatRows: [
        ["Mermaid 圍欄程式碼", "解析"],
        ["渲染 SVG 圖表", "繪製"],
        ["清楚 PDF 輸出", "匯出"],
      ],
      footer: "Mermaid 與 MathJax 資源已內建，可本機渲染",
      tokens: ["Mermaid", "本機", "PDF"],
      diagramTitle: ["轉換流程", "匯出的 PDF 中保留已渲染圖表"],
      nodes: ["Markdown 檔案", "待處理佇列", "本機渲染器", "PDF 輸出", "歷史記錄"],
      codeLabels: ["Finder 右鍵選單", "待處理佇列", "MarkdownToPDF PRO App", "PDF 輸出"],
      calloutTitle: "圖表保持視覺化",
      calloutBody: "流程圖會在產生 PDF 前完成渲染，讓技術文件繼續清楚可讀。",
    },
    "table-corner-radius": {
      eyebrow: "表格樣式",
      headline: "方角或圓角 PDF 表格",
      lead: "匯出清晰 Markdown 表格，並調整圓角半徑，讓樣式符合你的文件。",
      panelTop: ["圓角半徑", "12 pt"],
      scale: ["0 pt", "最大"],
      footer: "匯出 PDF 前設定表格圓角數值",
      switchLabels: ["矩形", "圓角"],
      cardLabels: ["標準矩形", "圓角矩形"],
      calloutTitle: "使用者可控圓角",
      calloutBody: "技術報告可用銳利方角，精緻講義可用更柔和的圓角。",
    },
  },
  ja: {
    "batch-history": {
      eyebrow: "一括変換",
      headline: "Markdownをまとめてキューへ",
      lead: "アプリへドロップ、またはFinderから変換。PDFごとに待機中から履歴まで追跡できます。",
      panelTop: ["変換元", "3つの方法"],
      sourceRows: [
        ["Finderのコンテキストメニュー", "右クリック"],
        ["ドラッグ＆ドロップキュー", "一括"],
        ["手動インポート", "制御"],
      ],
      footer: "完成したPDFをFinderで開く、または表示できます",
      tokens: ["Finder", "キュー", "履歴"],
      statusTitle: "すべての変換を追跡",
      statusBody: "待機中の要求、成功記録、再試行、出力先が見える状態で残ります。",
    },
    "code-block": {
      eyebrow: "コードブロック書き出し",
      headline: "PDFに映えるコードブロック",
      lead: "構文ハイライト、言語ラベル、コードウィンドウの見た目を保ったままMarkdownをPDFへ。",
      badges: ["Swift / Bash / Python / JS", "ローカル描画、クラウド送信なし", "一括変換と履歴", "技術文書向け"],
      footer: "FinderでMarkdownを選び、整ったPDFをワンクリックで書き出し",
      tokens: ["構文", "ローカル", "PDF"],
      exportTitle: "書き出し完了",
      exportBody: "コードブロックをPDFに保持",
    },
    "data-formula": {
      eyebrow: "データと数式の書き出し",
      headline: "データと数式を正確にPDFへ",
      lead: "MarkdownをPDFにしても、表は整列し、数式は鮮明で、計算メモも読みやすく残ります。",
      panelTop: ["書き出し品質", "PDF対応"],
      miniRows: [
        ["表", "整列"],
        ["数式", "鮮明"],
        ["メモ", "明瞭"],
      ],
      footer: "表、数式、技術メモを保ったレポートを書き出し",
      tokens: ["データ", "数式", "PDF"],
      paperTitle: "四半期パフォーマンスモデル",
      paperSubtitle: "Markdown表をきれいなPDFレポートに描画",
      formulaPill: "LaTeX風の数式",
      tableHeaders: ["指標", "Q1", "Q2", "数式"],
      tableRows: ["売上", "成長", "利益率"],
      equationLabels: ["表示数式", "加重スコア", "予測モデル"],
      insightTitle: "数式を意識した書き出し",
      insightBody: "表は整列し、数式は最終PDFでもくっきり表示されます。",
    },
    "export-profiles": {
      eyebrow: "書き出しプロファイル",
      headline: "変換前にPDFを整える",
      lead: "用紙、テーマ、フォント、余白、表の形、命名、変換後アクションを再利用できます。",
      panelTop: ["有効なプロファイル", "既定"],
      profileChips: [
        ["ページ", "A4 / A5 / Letter / Legal"],
        ["テーマ", "システム / ライト / ダーク"],
        ["組版", "本文 + コードフォント"],
        ["出力", "名前、フォルダ、動作"],
      ],
      footer: "プロファイルでFinder変換の見た目を文書ごとに統一",
      tokens: ["プロファイル", "テーマ", "出力"],
      previewTitle: ["描画の既定値", "有効なプロファイル設定"],
      controlBoxes: [
        ["用紙サイズ", "A4 / A5"],
        ["テーマ", "システム"],
        ["本文フォント", "Avenir Next"],
        ["コードフォント", "Menlo"],
      ],
      sliderLabels: ["文字サイズ 12.0", "行間 1.60", "余白 24 / 16 pt", "PDFフッター"],
      sampleCards: [
        ["プレビュー", "サンプルテキスト Aa 123"],
        ["コード例", "let title = \"Preview\""],
        ["成功後", "PDFを開く"],
      ],
      calloutTitle: "再利用できる書き出しテンプレート",
      calloutBody: "一度選んだプロファイルをFinder変換にもアプリ内変換にも適用できます。",
    },
    "mermaid-diagram": {
      eyebrow: "Mermaid図の書き出し",
      headline: "Markdown図をPDFのビジュアルへ",
      lead: "Mermaidコードブロックを先に描画し、文書に生コードではなく図を残します。",
      panelTop: ["図のパイプライン", "オフライン"],
      formatRows: [
        ["Mermaidコードブロック", "解析"],
        ["SVG図として描画", "描画"],
        ["きれいなPDF出力", "出力"],
      ],
      footer: "MermaidとMathJaxはローカル描画用に同梱",
      tokens: ["Mermaid", "ローカル", "PDF"],
      diagramTitle: ["変換フロー", "書き出したPDF内の描画済み図"],
      nodes: ["Markdownファイル", "待機キュー", "ローカル描画", "PDF出力", "履歴記録"],
      codeLabels: ["Finderメニュー", "待機キュー", "MarkdownToPDF PROアプリ", "PDF出力"],
      calloutTitle: "図はビジュアルのまま",
      calloutBody: "PDF生成前にフローチャートを描画し、技術文書を読みやすく保ちます。",
    },
    "table-corner-radius": {
      eyebrow: "テーブルスタイル",
      headline: "角丸も四角もPDF表で",
      lead: "Markdown表をきれいに書き出し、文書の雰囲気に合わせて角丸を調整できます。",
      panelTop: ["角丸半径", "12 pt"],
      scale: ["0 pt", "最大"],
      footer: "PDFを書き出す前に表の角丸値を設定",
      switchLabels: ["四角", "角丸"],
      cardLabels: ["標準の四角", "角丸の四角"],
      calloutTitle: "角丸を自由に調整",
      calloutBody: "技術レポートはシャープに、配布資料はやわらかく仕上げられます。",
    },
  },
  ko: {
    "batch-history": {
      eyebrow: "배치 변환",
      headline: "Markdown 파일을 한 번에 대기열로",
      lead: "앱에 드롭하거나 Finder에서 변환하고, 대기열부터 완료 기록까지 모든 PDF를 추적합니다.",
      panelTop: ["변환 소스", "3가지 방법"],
      sourceRows: [
        ["Finder 컨텍스트 메뉴", "우클릭"],
        ["드래그 앤 드롭 대기열", "배치"],
        ["수동 가져오기", "제어"],
      ],
      footer: "완료된 PDF를 Finder에서 바로 열거나 표시할 수 있습니다",
      tokens: ["Finder", "대기열", "기록"],
      statusTitle: "모든 변환 추적",
      statusBody: "대기 요청, 성공 기록, 재시도 작업, 출력 위치가 계속 보입니다.",
    },
    "code-block": {
      eyebrow: "코드 블록 내보내기",
      headline: "PDF 속 깔끔한 코드 블록",
      lead: "Markdown을 PDF로 바꿀 때 문법 강조, 언어 라벨, 코드 창 스타일을 그대로 유지합니다.",
      badges: ["Swift / Bash / Python / JS", "로컬 렌더링, 클라우드 업로드 없음", "배치 변환과 기록", "기술 문서에 최적"],
      footer: "Finder에서 Markdown을 선택하고 한 번에 PDF로 내보내세요",
      tokens: ["문법", "로컬", "PDF"],
      exportTitle: "내보내기 완료",
      exportBody: "코드 블록이 PDF에 유지됨",
    },
    "data-formula": {
      eyebrow: "데이터와 수식 내보내기",
      headline: "데이터와 수식을 정확히 PDF로",
      lead: "Markdown이 PDF가 되어도 표는 정렬되고, 수식은 선명하며, 계산 메모도 읽기 쉽습니다.",
      panelTop: ["내보내기 품질", "PDF 준비"],
      miniRows: [
        ["표", "정렬"],
        ["수식", "선명"],
        ["메모", "명확"],
      ],
      footer: "표, 수식, 기술 메모가 유지된 보고서를 내보내세요",
      tokens: ["데이터", "수식", "PDF"],
      paperTitle: "분기 성과 모델",
      paperSubtitle: "Markdown 표를 깔끔한 PDF 보고서로 렌더링",
      formulaPill: "LaTeX 스타일 수식",
      tableHeaders: ["지표", "Q1", "Q2", "수식"],
      tableRows: ["매출", "성장", "마진"],
      equationLabels: ["표시 수식", "가중 점수", "예측 모델"],
      insightTitle: "수식 인식 내보내기",
      insightBody: "표는 정렬되고 수식은 최종 PDF에서도 선명하게 유지됩니다.",
    },
    "export-profiles": {
      eyebrow: "내보내기 프로필",
      headline: "변환 전에 PDF를 조정",
      lead: "용지, 테마, 글꼴, 여백, 표 모양, 이름, 변환 후 동작을 반복 사용할 수 있습니다.",
      panelTop: ["활성 프로필", "기본값"],
      profileChips: [
        ["페이지", "A4 / A5 / Letter / Legal"],
        ["테마", "시스템 / 라이트 / 다크"],
        ["타이포그래피", "본문 + 코드 글꼴"],
        ["출력", "이름, 폴더, 동작"],
      ],
      footer: "프로필은 Finder 변환 결과를 문서마다 일관되게 유지합니다",
      tokens: ["프로필", "테마", "출력"],
      previewTitle: ["렌더 기본값", "활성 프로필 스타일 설정"],
      controlBoxes: [
        ["페이지 크기", "A4 / A5"],
        ["테마", "시스템"],
        ["본문 글꼴", "Avenir Next"],
        ["코드 글꼴", "Menlo"],
      ],
      sliderLabels: ["글자 크기 12.0", "줄 높이 1.60", "여백 24 / 16 pt", "PDF 푸터"],
      sampleCards: [
        ["미리보기", "샘플 텍스트 Aa 123"],
        ["코드 예시", "let title = \"Preview\""],
        ["성공 후", "PDF 열기"],
      ],
      calloutTitle: "재사용 가능한 내보내기 템플릿",
      calloutBody: "프로필을 한 번 선택하면 Finder와 앱 안 변환에 같은 레이아웃을 적용할 수 있습니다.",
    },
    "mermaid-diagram": {
      eyebrow: "Mermaid 다이어그램 내보내기",
      headline: "Markdown 도표를 PDF 시각 자료로",
      lead: "내보내기 전에 Mermaid 코드 블록의 플로우차트를 렌더링해 원시 코드 대신 도표를 유지합니다.",
      panelTop: ["다이어그램 흐름", "오프라인"],
      formatRows: [
        ["Mermaid 코드 블록", "파싱"],
        ["SVG 다이어그램 렌더링", "그리기"],
        ["깔끔한 PDF 출력", "내보내기"],
      ],
      footer: "Mermaid와 MathJax 자산은 로컬 렌더링용으로 번들됩니다",
      tokens: ["Mermaid", "로컬", "PDF"],
      diagramTitle: ["변환 흐름", "내보낸 PDF 안의 렌더링된 도표"],
      nodes: ["Markdown 파일", "대기열", "로컬 렌더러", "PDF 출력", "기록"],
      codeLabels: ["Finder 메뉴", "대기열", "MarkdownToPDF PRO 앱", "PDF 출력"],
      calloutTitle: "도표는 시각적으로 유지",
      calloutBody: "PDF 생성 전에 플로우차트를 렌더링해 기술 문서를 읽기 쉽게 유지합니다.",
    },
    "table-corner-radius": {
      eyebrow: "표 스타일",
      headline: "각진 표와 둥근 PDF 표",
      lead: "깔끔한 Markdown 표를 내보내고 문서 스타일에 맞게 모서리 반경을 조정하세요.",
      panelTop: ["모서리 반경", "12 pt"],
      scale: ["0 pt", "최대"],
      footer: "PDF로 내보내기 전에 표 모서리 값을 설정하세요",
      switchLabels: ["직사각형", "둥근 모서리"],
      cardLabels: ["표준 직사각형", "둥근 직사각형"],
      calloutTitle: "사용자가 조절하는 반경",
      calloutBody: "기술 보고서는 날카롭게, 배포 자료는 더 부드럽게 만들 수 있습니다.",
    },
  },
  de: {
    "batch-history": {
      eyebrow: "Batch-Konvertierung",
      headline: "Mehrere Markdown-Dateien bündeln",
      lead: "Dateien in die App ziehen oder aus dem Finder konvertieren und jedes PDF bis zum Verlauf verfolgen.",
      panelTop: ["Quellen", "3 Wege"],
      sourceRows: [
        ["Finder-Kontextmenü", "Rechtsklick"],
        ["Drag-and-drop-Warteschlange", "Batch"],
        ["Manueller Import", "Kontrolle"],
      ],
      footer: "Fertige PDFs direkt im Finder öffnen oder anzeigen",
      tokens: ["Finder", "Queue", "Verlauf"],
      statusTitle: "Jede Konvertierung verfolgen",
      statusBody: "Offene Anfragen, Erfolge, Wiederholungen und Ausgabeorte bleiben sichtbar.",
    },
    "code-block": {
      eyebrow: "Codeblock-Export",
      headline: "Schöne Codeblöcke im PDF",
      lead: "Syntaxfarben, Sprachlabels und Codefenster-Stil bleiben erhalten, wenn Markdown zu PDF wird.",
      badges: ["Swift / Bash / Python / JS", "Lokal gerendert, kein Cloud-Upload", "Batch-Konvertierung und Verlauf", "Für technische Dokumente"],
      footer: "Markdown im Finder wählen und saubere PDFs mit einem Klick exportieren",
      tokens: ["Syntax", "Lokal", "PDF"],
      exportTitle: "Export abgeschlossen",
      exportBody: "Codeblöcke bleiben im PDF erhalten",
    },
    "data-formula": {
      eyebrow: "Daten- und Formel-Export",
      headline: "Daten und Formeln präzise im PDF",
      lead: "Tabellen bleiben ausgerichtet, Gleichungen scharf und Rechennotizen lesbar.",
      panelTop: ["Exportqualität", "PDF-bereit"],
      miniRows: [
        ["Tabellen", "ausgerichtet"],
        ["Formeln", "scharf"],
        ["Notizen", "klar"],
      ],
      footer: "Berichte mit Tabellen, Formeln und technischen Notizen exportieren",
      tokens: ["Daten", "Formel", "PDF"],
      paperTitle: "Quartalsmodell",
      paperSubtitle: "Markdown-Tabelle als sauberer PDF-Bericht",
      formulaPill: "LaTeX-Formeln",
      tableHeaders: ["Metrik", "Q1", "Q2", "Formel"],
      tableRows: ["Umsatz", "Wachstum", "Marge"],
      equationLabels: ["Anzeigeformel", "Gewichteter Score", "Prognosemodell"],
      insightTitle: "Formelbewusster Export",
      insightBody: "Tabellen bleiben ausgerichtet, Formeln im finalen PDF scharf.",
    },
    "export-profiles": {
      eyebrow: "Exportprofile",
      headline: "Jedes PDF vorab abstimmen",
      lead: "Wiederverwendbare Einstellungen für Format, Theme, Schriften, Ränder, Tabellenform, Namen und Aktionen.",
      panelTop: ["Aktives Profil", "Standard"],
      profileChips: [
        ["Seite", "A4 / A5 / Letter / Legal"],
        ["Theme", "System / Hell / Dunkel"],
        ["Typografie", "Text + Code-Schriften"],
        ["Ausgabe", "Name, Ordner, Aktion"],
      ],
      footer: "Profile halten Finder-Konvertierungen über alle Dokumente konsistent",
      tokens: ["Profile", "Themes", "Ausgabe"],
      previewTitle: ["Render-Standards", "Stil des aktiven Profils"],
      controlBoxes: [
        ["Seitengröße", "A4 / A5"],
        ["Theme", "System"],
        ["Textschrift", "Avenir Next"],
        ["Codeschrift", "Menlo"],
      ],
      sliderLabels: ["Schriftgröße 12.0", "Zeilenhöhe 1.60", "Ränder 24 / 16 pt", "PDF-Fußzeile"],
      sampleCards: [
        ["Vorschau", "Beispieltext Aa 123"],
        ["Codebeispiel", "let title = \"Preview\""],
        ["Nach Erfolg", "PDF öffnen"],
      ],
      calloutTitle: "Wiederverwendbare Exportvorlagen",
      calloutBody: "Ein Profil wählen und dasselbe Layout für Finder- und App-Konvertierungen nutzen.",
    },
    "mermaid-diagram": {
      eyebrow: "Mermaid-Diagramm-Export",
      headline: "Markdown-Diagramme als PDF-Grafik",
      lead: "Flowcharts aus Mermaid-Blöcken vor dem Export rendern, damit Dokumente Grafiken statt Rohcode behalten.",
      panelTop: ["Diagramm-Pipeline", "offline"],
      formatRows: [
        ["Mermaid-Codeblöcke", "parsen"],
        ["SVG-Diagramme rendern", "zeichnen"],
        ["Saubere PDF-Ausgabe", "exportieren"],
      ],
      footer: "Mermaid- und MathJax-Assets sind für lokales Rendering gebündelt",
      tokens: ["Mermaid", "Lokal", "PDF"],
      diagramTitle: ["Konvertierungsfluss", "Gerendertes Diagramm im exportierten PDF"],
      nodes: ["Markdown-Dateien", "Warteschlange", "Lokaler Renderer", "PDF-Ausgabe", "Verlauf"],
      codeLabels: ["Finder-Menü", "Warteschlange", "MarkdownToPDF PRO-App", "PDF-Ausgabe"],
      calloutTitle: "Diagramme bleiben visuell",
      calloutBody: "Flowcharts werden vor der PDF-Erzeugung gerendert und bleiben lesbar.",
    },
    "table-corner-radius": {
      eyebrow: "Tabellenstil",
      headline: "Eckige oder runde PDF-Tabellen",
      lead: "Markdown-Tabellen sauber exportieren und den Eckenradius passend zum Dokument wählen.",
      panelTop: ["Eckenradius", "12 pt"],
      scale: ["0 pt", "Max"],
      footer: "Eckenwerte vor dem PDF-Export festlegen",
      switchLabels: ["Eckig", "Gerundet"],
      cardLabels: ["Standardrechteck", "Abgerundetes Rechteck"],
      calloutTitle: "Vom Nutzer gesteuerter Radius",
      calloutBody: "Scharfe Ecken für Reports oder weichere Ecken für polierte Handouts.",
    },
  },
  fr: {
    "batch-history": {
      eyebrow: "Conversion par lots",
      headline: "Mettre plusieurs Markdown en file",
      lead: "Déposez des fichiers dans l'app ou convertissez depuis Finder, puis suivez chaque PDF jusqu'à l'historique.",
      panelTop: ["Sources", "3 façons"],
      sourceRows: [
        ["Menu contextuel Finder", "clic droit"],
        ["File par glisser-déposer", "lot"],
        ["Import manuel", "contrôle"],
      ],
      footer: "Ouvrez ou révélez les PDF terminés directement dans Finder",
      tokens: ["Finder", "File", "Historique"],
      statusTitle: "Suivre chaque conversion",
      statusBody: "Demandes, réussites, reprises et emplacements de sortie restent visibles.",
    },
    "code-block": {
      eyebrow: "Export des blocs de code",
      headline: "Des blocs de code soignés",
      lead: "Conservez coloration, libellés de langage et style de fenêtre quand Markdown devient PDF.",
      badges: ["Swift / Bash / Python / JS", "Rendu local, aucun cloud", "Conversion par lots et historique", "Pensé pour la doc technique"],
      footer: "Choisissez Markdown dans Finder et exportez un PDF soigné en un clic",
      tokens: ["Syntaxe", "Local", "PDF"],
      exportTitle: "Export terminé",
      exportBody: "Blocs de code conservés dans le PDF",
    },
    "data-formula": {
      eyebrow: "Export données et formules",
      headline: "Données et formules précises",
      lead: "Les tableaux restent alignés, les équations nettes et les notes de calcul lisibles.",
      panelTop: ["Qualité d'export", "prêt PDF"],
      miniRows: [
        ["Tableaux", "alignés"],
        ["Équations", "nettes"],
        ["Notes", "claires"],
      ],
      footer: "Exportez des rapports avec tableaux, formules et notes techniques",
      tokens: ["Données", "Formule", "PDF"],
      paperTitle: "Modèle de performance trimestriel",
      paperSubtitle: "Table Markdown rendue en rapport PDF propre",
      formulaPill: "Formules style LaTeX",
      tableHeaders: ["Mesure", "T1", "T2", "Formule"],
      tableRows: ["Revenu", "Croissance", "Marge"],
      equationLabels: ["Équation affichée", "Score pondéré", "Modèle prévisionnel"],
      insightTitle: "Export adapté aux formules",
      insightBody: "Les tableaux restent alignés et les équations nettes dans le PDF final.",
    },
    "export-profiles": {
      eyebrow: "Profils d'export",
      headline: "Réglez chaque PDF avant conversion",
      lead: "Enregistrez format, thème, polices, marges, forme des tableaux, nommage et actions.",
      panelTop: ["Profil actif", "Défaut"],
      profileChips: [
        ["Page", "A4 / A5 / Letter / Legal"],
        ["Thème", "Système / Clair / Sombre"],
        ["Typographie", "Texte + code"],
        ["Sortie", "Nom, dossier, action"],
      ],
      footer: "Les profils gardent les conversions Finder cohérentes",
      tokens: ["Profils", "Thèmes", "Sortie"],
      previewTitle: ["Réglages de rendu", "Style du profil actif"],
      controlBoxes: [
        ["Format", "A4 / A5"],
        ["Thème", "Système"],
        ["Police texte", "Avenir Next"],
        ["Police code", "Menlo"],
      ],
      sliderLabels: ["Taille 12.0", "Interligne 1.60", "Marges 24 / 16 pt", "Pied PDF"],
      sampleCards: [
        ["Aperçu", "Texte exemple Aa 123"],
        ["Exemple code", "let title = \"Preview\""],
        ["Après succès", "Ouvrir PDF"],
      ],
      calloutTitle: "Modèles d'export réutilisables",
      calloutBody: "Choisissez un profil et appliquez le même rendu depuis Finder ou l'app.",
    },
    "mermaid-diagram": {
      eyebrow: "Export de diagrammes Mermaid",
      headline: "Des diagrammes Markdown en PDF",
      lead: "Rendez les flowcharts Mermaid avant l'export pour garder des visuels au lieu du code brut.",
      panelTop: ["Pipeline diagramme", "hors ligne"],
      formatRows: [
        ["Blocs Mermaid clôturés", "parser"],
        ["Diagrammes SVG rendus", "dessiner"],
        ["Sortie PDF propre", "exporter"],
      ],
      footer: "Mermaid et MathJax sont intégrés pour un rendu local",
      tokens: ["Mermaid", "Local", "PDF"],
      diagramTitle: ["Flux de conversion", "Diagramme rendu dans le PDF exporté"],
      nodes: ["Fichiers Markdown", "File d'attente", "Rendu local", "Sortie PDF", "Historique"],
      codeLabels: ["Menu Finder", "File d'attente", "App MarkdownToPDF PRO", "Sortie PDF"],
      calloutTitle: "Les diagrammes restent visuels",
      calloutBody: "Les flowcharts sont rendus avant la génération PDF pour rester lisibles.",
    },
    "table-corner-radius": {
      eyebrow: "Style de tableau",
      headline: "Tableaux PDF carrés ou arrondis",
      lead: "Exportez des tableaux Markdown propres et ajustez le rayon d'angle selon votre document.",
      panelTop: ["Rayon d'angle", "12 pt"],
      scale: ["0 pt", "Max"],
      footer: "Réglez les coins du tableau avant l'export PDF",
      switchLabels: ["Rectangle", "Arrondi"],
      cardLabels: ["Rectangle standard", "Rectangle arrondi"],
      calloutTitle: "Rayon contrôlé par l'utilisateur",
      calloutBody: "Coins nets pour rapports techniques, coins doux pour supports soignés.",
    },
  },
  it: {
    "batch-history": {
      eyebrow: "Conversione batch",
      headline: "Metti in coda più file Markdown",
      lead: "Trascina i file nell'app o converti da Finder, poi segui ogni PDF fino alla cronologia.",
      panelTop: ["Origini", "3 modi"],
      sourceRows: [
        ["Menu contestuale Finder", "clic destro"],
        ["Coda drag and drop", "batch"],
        ["Importazione manuale", "controllo"],
      ],
      footer: "Apri o mostra i PDF completati direttamente in Finder",
      tokens: ["Finder", "Coda", "Cronologia"],
      statusTitle: "Traccia ogni conversione",
      statusBody: "Richieste, successi, ritentativi e cartelle di output restano visibili.",
    },
    "code-block": {
      eyebrow: "Export dei blocchi di codice",
      headline: "Blocchi di codice eleganti",
      lead: "Mantieni evidenziazione, etichette dei linguaggi e stile a finestra quando Markdown diventa PDF.",
      badges: ["Swift / Bash / Python / JS", "Rendering locale, niente cloud", "Conversione batch e cronologia", "Per documenti tecnici"],
      footer: "Scegli Markdown in Finder ed esporta PDF curati con un clic",
      tokens: ["Sintassi", "Locale", "PDF"],
      exportTitle: "Export completato",
      exportBody: "Blocchi di codice preservati nel PDF",
    },
    "data-formula": {
      eyebrow: "Export dati e formule",
      headline: "Dati e formule precisi nel PDF",
      lead: "Le tabelle restano allineate, le equazioni nitide e le note di calcolo leggibili.",
      panelTop: ["Qualità export", "pronto PDF"],
      miniRows: [
        ["Tabelle", "allineate"],
        ["Equazioni", "nitide"],
        ["Note", "chiare"],
      ],
      footer: "Esporta report con tabelle, formule e note tecniche intatte",
      tokens: ["Dati", "Formula", "PDF"],
      paperTitle: "Modello trimestrale",
      paperSubtitle: "Tabella Markdown resa come report PDF pulito",
      formulaPill: "Formule stile LaTeX",
      tableHeaders: ["Metrica", "Q1", "Q2", "Formula"],
      tableRows: ["Ricavi", "Crescita", "Margine"],
      equationLabels: ["Equazione", "Punteggio pesato", "Modello previsivo"],
      insightTitle: "Export attento alle formule",
      insightBody: "Le tabelle restano allineate e le equazioni nitide nel PDF finale.",
    },
    "export-profiles": {
      eyebrow: "Profili di export",
      headline: "Regola ogni PDF prima",
      lead: "Salva formato, tema, font, margini, forma tabella, nomi e azioni dopo la conversione.",
      panelTop: ["Profilo attivo", "Default"],
      profileChips: [
        ["Pagina", "A4 / A5 / Letter / Legal"],
        ["Tema", "Sistema / Chiaro / Scuro"],
        ["Tipografia", "Testo + font codice"],
        ["Output", "Nome, cartella, azione"],
      ],
      footer: "I profili mantengono coerenti le conversioni da Finder",
      tokens: ["Profili", "Temi", "Output"],
      previewTitle: ["Predefiniti rendering", "Stile del profilo attivo"],
      controlBoxes: [
        ["Formato pagina", "A4 / A5"],
        ["Tema", "Sistema"],
        ["Font testo", "Avenir Next"],
        ["Font codice", "Menlo"],
      ],
      sliderLabels: ["Dimensione 12.0", "Interlinea 1.60", "Margini 24 / 16 pt", "Footer PDF"],
      sampleCards: [
        ["Anteprima", "Testo esempio Aa 123"],
        ["Esempio codice", "let title = \"Preview\""],
        ["Dopo successo", "Apri PDF"],
      ],
      calloutTitle: "Modelli di export riutilizzabili",
      calloutBody: "Scegli un profilo e applica lo stesso layout da Finder o dall'app.",
    },
    "mermaid-diagram": {
      eyebrow: "Export diagrammi Mermaid",
      headline: "Diagrammi Markdown in PDF",
      lead: "Renderizza i flowchart Mermaid prima dell'export, così restano visuali invece del codice.",
      panelTop: ["Pipeline diagramma", "offline"],
      formatRows: [
        ["Blocchi Mermaid", "parse"],
        ["Diagrammi SVG renderizzati", "disegno"],
        ["Output PDF pulito", "export"],
      ],
      footer: "Mermaid e MathJax sono inclusi per il rendering locale",
      tokens: ["Mermaid", "Locale", "PDF"],
      diagramTitle: ["Flusso di conversione", "Diagramma renderizzato nel PDF esportato"],
      nodes: ["File Markdown", "Coda in attesa", "Renderer locale", "Output PDF", "Cronologia"],
      codeLabels: ["Menu Finder", "Coda in attesa", "App MarkdownToPDF PRO", "Output PDF"],
      calloutTitle: "I diagrammi restano visuali",
      calloutBody: "I flowchart vengono renderizzati prima del PDF e restano leggibili.",
    },
    "table-corner-radius": {
      eyebrow: "Stile tabella",
      headline: "Tabelle PDF squadrate o arrotondate",
      lead: "Esporta tabelle Markdown pulite e regola il raggio degli angoli in base al documento.",
      panelTop: ["Raggio angolo", "12 pt"],
      scale: ["0 pt", "Max"],
      footer: "Imposta gli angoli della tabella prima dell'export PDF",
      switchLabels: ["Rettangolare", "Arrotondata"],
      cardLabels: ["Rettangolo standard", "Rettangolo arrotondato"],
      calloutTitle: "Raggio controllato dall'utente",
      calloutBody: "Angoli netti per report tecnici o più morbidi per dispense curate.",
    },
  },
};

const newPromoCopy = {
  "zh-Hans": {
    "auto-toc": {
      eyebrow: "自动目录",
      headline: "自动生成 PDF 目录页",
      lead: "从 H2-H3 标题生成导航列表，在导出时替换已有目录，并保持 Markdown 源文件不变。",
      panelTop: ["导出行为", "自动"],
      tocRows: [
        ["扫描 H2-H3 标题", "大纲"],
        ["替换已有目录", "清理"],
        ["Markdown 保持不变", "安全"],
      ],
      footer: "生成的目录只会插入到导出的 PDF 中。",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# 季度回顾",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- 导出时生成 -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## 执行摘要", "## 产品更新", "## 发布清单"],
      markdownH3s: ["### 收入亮点", "### 渲染默认值"],
      tocPage: ["目录", "根据 Markdown 标题生成"],
      tocEntries: ["执行摘要", "收入亮点", "产品更新", "渲染默认值", "发布清单"],
      tocMarker: "## 目录",
      sourceTitle: "源文件保持整洁",
      sourceBody: "应用会更新导出的 PDF 视图，不会重写原始 Markdown 文档。",
      sourceBadges: ["不改源文件", "目录刷新", "仅导出"],
      calloutTitle: "转换时自动生成",
      calloutBody: "标题会变成带页码的精致目录页，出现在最终 PDF 中。",
    },
    "header-footer": {
      eyebrow: "页眉与页脚",
      headline: "每页 PDF 都可添加自定义页眉页脚",
      lead: "添加标题、日期、文件名、页码和总页数，并控制对齐、颜色、字号和透明度。",
      panelTop: ["模板字段", "5 个占位符"],
      placeholderChips: [
        ["文档", "{title}"],
        ["来源", "{fileName}"],
        ["日期", "{date}"],
        ["页码", "{page}/{pageCount}"],
      ],
      footer: "页眉和页脚会绘制到每一页导出的 PDF 上。",
      tokens: ["标题", "日期", "页码"],
      settingsTitle: "页眉/页脚设置",
      headerFooterSections: [
        {
          title: "启用页眉",
          contentLabel: "页眉内容",
          alignment: "左对齐",
          alignments: ["左对齐", "居中", "右对齐"],
        },
        {
          title: "启用页脚",
          contentLabel: "页脚内容",
          alignment: "右对齐",
          alignments: ["左对齐", "居中", "右对齐"],
        },
      ],
      templateBoxes: ["{title} | {date}", "第 {page} 页 / 共 {pageCount} 页"],
      styleBoxes: [
        ["字体", "Helvetica Neue"],
        ["颜色", "#24628F"],
        ["透明度", "100%"],
      ],
      previewSidebar: ["页眉/页脚预览", "导出前预览共享样式。"],
      pdfHeader: "季度回顾 | 2026-05-02",
      pdfFooter: "第 2 页 / 共 5 页",
      pdfTitle: "季度回顾",
      calloutTitle: "可复用页面模板",
      calloutBody: "组合文档元数据和页码计数，无需编辑 Markdown 源文件。",
    },
  },
  "zh-Hant": {
    "auto-toc": {
      eyebrow: "自動目錄",
      headline: "自動生成 PDF 目錄頁",
      lead: "從 H2-H3 標題生成導覽列表，在匯出時取代既有目錄，並保持 Markdown 原始檔不變。",
      panelTop: ["匯出行為", "自動"],
      tocRows: [
        ["掃描 H2-H3 標題", "大綱"],
        ["取代既有目錄", "清理"],
        ["Markdown 保持不變", "安全"],
      ],
      footer: "生成的目錄只會插入到匯出的 PDF 中。",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# 季度回顧",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- 匯出時生成 -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## 執行摘要", "## 產品更新", "## 發布清單"],
      markdownH3s: ["### 收入亮點", "### 渲染預設值"],
      tocPage: ["目錄", "根據 Markdown 標題生成"],
      tocEntries: ["執行摘要", "收入亮點", "產品更新", "渲染預設值", "發布清單"],
      tocMarker: "## 目錄",
      sourceTitle: "原始檔保持整潔",
      sourceBody: "App 會更新匯出的 PDF 視圖，不會重寫原始 Markdown 文件。",
      sourceBadges: ["不改原始檔", "目錄刷新", "僅匯出"],
      calloutTitle: "轉換時自動生成",
      calloutBody: "標題會變成帶頁碼的精緻目錄頁，出現在最終 PDF 中。",
    },
    "header-footer": {
      eyebrow: "頁眉與頁腳",
      headline: "每頁 PDF 都能加入自訂頁眉頁腳",
      lead: "加入標題、日期、檔名、頁碼與總頁數，並控制對齊、顏色、字級與透明度。",
      panelTop: ["模板欄位", "5 個佔位符"],
      placeholderChips: [
        ["文件", "{title}"],
        ["來源", "{fileName}"],
        ["日期", "{date}"],
        ["頁碼", "{page}/{pageCount}"],
      ],
      footer: "頁眉和頁腳會繪製到每一頁匯出的 PDF 上。",
      tokens: ["標題", "日期", "頁碼"],
      settingsTitle: "頁眉/頁腳設定",
      headerFooterSections: [
        {
          title: "啟用頁眉",
          contentLabel: "頁眉內容",
          alignment: "靠左",
          alignments: ["靠左", "置中", "靠右"],
        },
        {
          title: "啟用頁腳",
          contentLabel: "頁腳內容",
          alignment: "靠右",
          alignments: ["靠左", "置中", "靠右"],
        },
      ],
      templateBoxes: ["{title} | {date}", "第 {page} 頁 / 共 {pageCount} 頁"],
      styleBoxes: [
        ["字體", "Helvetica Neue"],
        ["顏色", "#24628F"],
        ["透明度", "100%"],
      ],
      previewSidebar: ["頁眉/頁腳預覽", "匯出前預覽共用樣式。"],
      pdfHeader: "季度回顧 | 2026-05-02",
      pdfFooter: "第 2 頁 / 共 5 頁",
      pdfTitle: "季度回顧",
      calloutTitle: "可重用頁面模板",
      calloutBody: "組合文件中繼資料與頁碼計數，無需編輯 Markdown 原始檔。",
    },
  },
  ja: {
    "auto-toc": {
      eyebrow: "自動目次",
      headline: "PDF目次ページを自動生成",
      lead: "H2-H3見出しからナビゲーションを作成し、書き出し時に既存の目次を置き換え、Markdown原稿は変更しません。",
      panelTop: ["書き出し動作", "自動"],
      tocRows: [
        ["H2-H3見出しを読み取り", "アウトライン"],
        ["既存の目次を置換", "整理"],
        ["Markdownはそのまま", "安全"],
      ],
      footer: "生成した目次は書き出したPDFにだけ挿入されます。",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# 四半期レビュー",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- 書き出し時に生成 -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## エグゼクティブサマリー", "## 製品アップデート", "## ローンチ確認"],
      markdownH3s: ["### 収益ハイライト", "### レンダリング既定値"],
      tocPage: ["目次", "Markdown見出しから生成"],
      tocEntries: ["エグゼクティブサマリー", "収益ハイライト", "製品アップデート", "レンダリング既定値", "ローンチ確認"],
      tocMarker: "## 目次",
      sourceTitle: "原稿ファイルはそのまま",
      sourceBody: "アプリは書き出しPDFの表示だけを更新し、元のMarkdown文書を書き換えません。",
      sourceBadges: ["原稿を保持", "目次更新", "書き出しのみ"],
      calloutTitle: "変換時に自動作成",
      calloutBody: "見出しがページ番号付きの整った目次として最終PDFに入ります。",
    },
    "header-footer": {
      eyebrow: "ヘッダーとフッター",
      headline: "PDFの各ページにヘッダーとフッター",
      lead: "タイトル、日付、ファイル名、ページ番号、総ページ数を追加し、配置、色、サイズ、透明度を調整できます。",
      panelTop: ["テンプレート項目", "5個のトークン"],
      placeholderChips: [
        ["文書", "{title}"],
        ["ソース", "{fileName}"],
        ["日付", "{date}"],
        ["ページ", "{page}/{pageCount}"],
      ],
      footer: "ヘッダーとフッターは書き出したPDFの各ページに描画されます。",
      tokens: ["タイトル", "日付", "ページ"],
      settingsTitle: "ヘッダー/フッター設定",
      headerFooterSections: [
        {
          title: "ヘッダーを含める",
          contentLabel: "ヘッダー内容",
          alignment: "左寄せ",
          alignments: ["左寄せ", "中央", "右寄せ"],
        },
        {
          title: "フッターを含める",
          contentLabel: "フッター内容",
          alignment: "右寄せ",
          alignments: ["左寄せ", "中央", "右寄せ"],
        },
      ],
      templateBoxes: ["{title} | {date}", "{page} / {pageCount} ページ"],
      styleBoxes: [
        ["フォント", "Helvetica Neue"],
        ["カラー", "#24628F"],
        ["透明度", "100%"],
      ],
      previewSidebar: ["ヘッダー/フッター プレビュー", "書き出し前に共通スタイルを確認できます。"],
      pdfHeader: "四半期レビュー | 2026-05-02",
      pdfFooter: "2 / 5 ページ",
      pdfTitle: "四半期レビュー",
      calloutTitle: "再利用できるページテンプレート",
      calloutBody: "Markdown原稿を編集せず、文書情報とページ番号を組み合わせられます。",
    },
  },
  ko: {
    "auto-toc": {
      eyebrow: "자동 목차",
      headline: "PDF 목차 페이지 자동 생성",
      lead: "H2-H3 제목에서 탐색 목록을 만들고, 내보낼 때 기존 목차를 교체하며 Markdown 원본은 그대로 둡니다.",
      panelTop: ["내보내기 동작", "자동"],
      tocRows: [
        ["H2-H3 제목 스캔", "개요"],
        ["기존 목차 교체", "정리"],
        ["Markdown 유지", "안전"],
      ],
      footer: "생성된 목차는 내보낸 PDF에만 삽입됩니다.",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# 분기 리뷰",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- 내보낼 때 생성 -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## 요약", "## 제품 업데이트", "## 출시 체크리스트"],
      markdownH3s: ["### 매출 하이라이트", "### 렌더링 기본값"],
      tocPage: ["목차", "Markdown 제목에서 생성"],
      tocEntries: ["요약", "매출 하이라이트", "제품 업데이트", "렌더링 기본값", "출시 체크리스트"],
      tocMarker: "## 목차",
      sourceTitle: "원본 파일은 깔끔하게",
      sourceBody: "앱은 내보낸 PDF 보기만 업데이트하고 원본 Markdown 문서는 다시 쓰지 않습니다.",
      sourceBadges: ["원본 유지", "목차 갱신", "내보내기만"],
      calloutTitle: "변환 중 자동 생성",
      calloutBody: "제목이 페이지 번호가 있는 정돈된 목차로 최종 PDF에 들어갑니다.",
    },
    "header-footer": {
      eyebrow: "머리글과 바닥글",
      headline: "모든 PDF 페이지에 머리글과 바닥글",
      lead: "제목, 날짜, 파일명, 페이지 번호와 전체 페이지 수를 추가하고 정렬, 색상, 크기, 투명도를 조절합니다.",
      panelTop: ["템플릿 필드", "토큰 5개"],
      placeholderChips: [
        ["문서", "{title}"],
        ["원본", "{fileName}"],
        ["날짜", "{date}"],
        ["페이지", "{page}/{pageCount}"],
      ],
      footer: "머리글과 바닥글은 내보낸 PDF의 모든 페이지에 그려집니다.",
      tokens: ["제목", "날짜", "페이지"],
      settingsTitle: "머리글/바닥글 설정",
      headerFooterSections: [
        {
          title: "머리글 포함",
          contentLabel: "머리글 내용",
          alignment: "왼쪽",
          alignments: ["왼쪽", "가운데", "오른쪽"],
        },
        {
          title: "바닥글 포함",
          contentLabel: "바닥글 내용",
          alignment: "오른쪽",
          alignments: ["왼쪽", "가운데", "오른쪽"],
        },
      ],
      templateBoxes: ["{title} | {date}", "{page} / {pageCount} 페이지"],
      styleBoxes: [
        ["글꼴", "Helvetica Neue"],
        ["색상", "#24628F"],
        ["투명도", "100%"],
      ],
      previewSidebar: ["머리글/바닥글 미리보기", "내보내기 전에 공통 스타일을 확인합니다."],
      pdfHeader: "분기 리뷰 | 2026-05-02",
      pdfFooter: "2 / 5 페이지",
      pdfTitle: "분기 리뷰",
      calloutTitle: "재사용 가능한 페이지 템플릿",
      calloutBody: "Markdown 원본을 편집하지 않고 문서 정보와 페이지 번호를 조합합니다.",
    },
  },
  de: {
    "auto-toc": {
      eyebrow: "Automatisches Inhaltsverzeichnis",
      headline: "PDF-Inhalt automatisch erstellen",
      lead: "Erstellt aus H2-H3-Überschriften eine Navigation, ersetzt vorhandene TOC-Bereiche beim Export und lässt Markdown unverändert.",
      panelTop: ["Exportverhalten", "automatisch"],
      tocRows: [
        ["H2-H3-Überschriften scannen", "Gliederung"],
        ["Vorhandenes TOC ersetzen", "sauber"],
        ["Markdown bleibt unverändert", "sicher"],
      ],
      footer: "Generierte Inhalte werden nur in exportierte PDFs eingefügt.",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# Quartalsbericht",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- beim Export generiert -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## Zusammenfassung", "## Produktupdates", "## Launch-Checkliste"],
      markdownH3s: ["### Umsatz-Highlights", "### Render-Vorgaben"],
      tocPage: ["Inhaltsverzeichnis", "Aus Markdown-Überschriften erzeugt"],
      tocEntries: ["Zusammenfassung", "Umsatz-Highlights", "Produktupdates", "Render-Vorgaben", "Launch-Checkliste"],
      tocMarker: "## Inhaltsverzeichnis",
      sourceTitle: "Quelldatei bleibt sauber",
      sourceBody: "Die App aktualisiert nur die exportierte PDF-Ansicht und schreibt das Markdown-Dokument nicht um.",
      sourceBadges: ["Quelle bleibt", "TOC aktualisiert", "nur Export"],
      calloutTitle: "Beim Konvertieren erstellt",
      calloutBody: "Überschriften werden im finalen PDF zu einem Inhaltsverzeichnis mit Seitenzahlen.",
    },
    "header-footer": {
      eyebrow: "Kopf- und Fußzeilen",
      headline: "Kopf- und Fußzeilen pro PDF-Seite",
      lead: "Füge Titel, Datum, Dateiname, Seitenzahl und Seitenanzahl hinzu und steuere Ausrichtung, Farbe, Größe und Deckkraft.",
      panelTop: ["Vorlagenfelder", "5 Tokens"],
      placeholderChips: [
        ["Dokument", "{title}"],
        ["Quelle", "{fileName}"],
        ["Datum", "{date}"],
        ["Seiten", "{page}/{pageCount}"],
      ],
      footer: "Kopf- und Fußzeilen werden auf jede exportierte PDF-Seite gezeichnet.",
      tokens: ["Titel", "Datum", "Seiten"],
      settingsTitle: "Kopf-/Fußzeilen",
      headerFooterSections: [
        {
          title: "Kopfzeile aktivieren",
          contentLabel: "Kopfzeileninhalt",
          alignment: "Links",
          alignments: ["Links", "Mitte", "Rechts"],
        },
        {
          title: "Fußzeile aktivieren",
          contentLabel: "Fußzeileninhalt",
          alignment: "Rechts",
          alignments: ["Links", "Mitte", "Rechts"],
        },
      ],
      templateBoxes: ["{title} | {date}", "Seite {page} von {pageCount}"],
      styleBoxes: [
        ["Schrift", "Helvetica Neue"],
        ["Farbe", "#24628F"],
        ["Deckkraft", "100%"],
      ],
      previewSidebar: ["Kopf-/Fußzeilen-Vorschau", "Gemeinsame Stile vor dem Export prüfen."],
      pdfHeader: "Quartalsbericht | 2026-05-02",
      pdfFooter: "Seite 2 von 5",
      pdfTitle: "Quartalsbericht",
      calloutTitle: "Wiederverwendbare Seitenvorlagen",
      calloutBody: "Dokumentdaten und Seitenzähler kombinieren, ohne die Markdown-Quelle zu bearbeiten.",
    },
  },
  fr: {
    "auto-toc": {
      eyebrow: "Table des matières auto",
      headline: "Créer la table des matières PDF",
      lead: "Génère une navigation depuis les titres H2-H3, remplace les sections TOC existantes à l'export et garde le Markdown intact.",
      panelTop: ["Comportement d'export", "auto"],
      tocRows: [
        ["Analyse des titres H2-H3", "plan"],
        ["Remplace le TOC existant", "propre"],
        ["Markdown inchangé", "sûr"],
      ],
      footer: "La table générée est insérée uniquement dans les PDF exportés.",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# Revue trimestrielle",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- généré à l'export -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## Résumé exécutif", "## Mises à jour produit", "## Liste de lancement"],
      markdownH3s: ["### Temps forts revenus", "### Préréglages rendu"],
      tocPage: ["Table des matières", "Générée depuis les titres Markdown"],
      tocEntries: ["Résumé exécutif", "Temps forts revenus", "Mises à jour produit", "Préréglages rendu", "Liste de lancement"],
      tocMarker: "## Table des matières",
      sourceTitle: "Le fichier source reste propre",
      sourceBody: "L'app met à jour la vue PDF exportée sans réécrire le document Markdown original.",
      sourceBadges: ["source intacte", "TOC rafraîchi", "export seul"],
      calloutTitle: "Créée pendant la conversion",
      calloutBody: "Les titres deviennent une table soignée avec numéros de page dans le PDF final.",
    },
    "header-footer": {
      eyebrow: "En-têtes et pieds de page",
      headline: "En-têtes et pieds de page pour chaque PDF",
      lead: "Ajoutez titre, date, nom de fichier, numéro et total de pages, avec alignement, couleur, taille et opacité.",
      panelTop: ["Champs modèle", "5 jetons"],
      placeholderChips: [
        ["Document", "{title}"],
        ["Source", "{fileName}"],
        ["Date", "{date}"],
        ["Pages", "{page}/{pageCount}"],
      ],
      footer: "Les en-têtes et pieds de page sont dessinés sur chaque page PDF exportée.",
      tokens: ["Titre", "Date", "Pages"],
      settingsTitle: "En-têtes/Pieds",
      headerFooterSections: [
        {
          title: "Inclure l'en-tête",
          contentLabel: "Contenu en-tête",
          alignment: "Gauche",
          alignments: ["Gauche", "Centre", "Droite"],
        },
        {
          title: "Inclure le pied",
          contentLabel: "Contenu pied",
          alignment: "Droite",
          alignments: ["Gauche", "Centre", "Droite"],
        },
      ],
      templateBoxes: ["{title} | {date}", "Page {page} sur {pageCount}"],
      styleBoxes: [
        ["Police", "Helvetica Neue"],
        ["Couleur", "#24628F"],
        ["Opacité", "100%"],
      ],
      previewSidebar: ["Aperçu en-têtes/pieds", "Prévisualisez le style partagé avant l'export."],
      pdfHeader: "Revue trimestrielle | 2026-05-02",
      pdfFooter: "Page 2 sur 5",
      pdfTitle: "Revue trimestrielle",
      calloutTitle: "Modèles de page réutilisables",
      calloutBody: "Combinez métadonnées et compteurs de pages sans modifier la source Markdown.",
    },
  },
  it: {
    "auto-toc": {
      eyebrow: "Indice automatico",
      headline: "Crea automaticamente l'indice PDF",
      lead: "Genera una navigazione dai titoli H2-H3, sostituisce i TOC esistenti all'export e lascia invariato il Markdown.",
      panelTop: ["Comportamento export", "automatico"],
      tocRows: [
        ["Scansiona titoli H2-H3", "schema"],
        ["Sostituisce TOC esistente", "pulito"],
        ["Markdown invariato", "sicuro"],
      ],
      footer: "L'indice generato viene inserito solo nei PDF esportati.",
      tokens: ["H2", "H3", "PDF"],
      markdownTitle: "# Revisione trimestrale",
      markdownComments: [
        "<!-- markdown-to-pdf:auto-toc:start -->",
        "<!-- generato all'export -->",
        "<!-- markdown-to-pdf:auto-toc:end -->",
      ],
      markdownH2s: ["## Riepilogo esecutivo", "## Aggiornamenti prodotto", "## Checklist lancio"],
      markdownH3s: ["### Ricavi in evidenza", "### Predefiniti rendering"],
      tocPage: ["Indice", "Generato dai titoli Markdown"],
      tocEntries: ["Riepilogo esecutivo", "Ricavi in evidenza", "Aggiornamenti prodotto", "Predefiniti rendering", "Checklist lancio"],
      tocMarker: "## Indice",
      sourceTitle: "Il sorgente resta pulito",
      sourceBody: "L'app aggiorna solo la vista PDF esportata senza riscrivere il documento Markdown originale.",
      sourceBadges: ["sorgente intatto", "TOC aggiornato", "solo export"],
      calloutTitle: "Creato durante la conversione",
      calloutBody: "I titoli diventano un indice curato con numeri di pagina nel PDF finale.",
    },
    "header-footer": {
      eyebrow: "Intestazioni e piè di pagina",
      headline: "Intestazioni e piè di pagina su ogni PDF",
      lead: "Aggiungi titolo, data, nome file, numero e totale pagine, con allineamento, colore, dimensione e opacità.",
      panelTop: ["Campi modello", "5 token"],
      placeholderChips: [
        ["Documento", "{title}"],
        ["Sorgente", "{fileName}"],
        ["Data", "{date}"],
        ["Pagine", "{page}/{pageCount}"],
      ],
      footer: "Intestazioni e piè di pagina vengono disegnati su ogni pagina PDF esportata.",
      tokens: ["Titolo", "Data", "Pagine"],
      settingsTitle: "Intestazioni/Piè",
      headerFooterSections: [
        {
          title: "Includi intestazione",
          contentLabel: "Contenuto intestazione",
          alignment: "Sinistra",
          alignments: ["Sinistra", "Centro", "Destra"],
        },
        {
          title: "Includi piè",
          contentLabel: "Contenuto piè",
          alignment: "Destra",
          alignments: ["Sinistra", "Centro", "Destra"],
        },
      ],
      templateBoxes: ["{title} | {date}", "Pagina {page} di {pageCount}"],
      styleBoxes: [
        ["Font", "Helvetica Neue"],
        ["Colore", "#24628F"],
        ["Opacità", "100%"],
      ],
      previewSidebar: ["Anteprima intestazioni/piè", "Controlla lo stile condiviso prima dell'export."],
      pdfHeader: "Revisione trimestrale | 2026-05-02",
      pdfFooter: "Pagina 2 di 5",
      pdfTitle: "Revisione trimestrale",
      calloutTitle: "Modelli pagina riutilizzabili",
      calloutBody: "Combina metadati e contatori pagina senza modificare il sorgente Markdown.",
    },
  },
};

for (const [lang, entries] of Object.entries(newPromoCopy)) {
  Object.assign(copy[lang], entries);
}

const exportProfilesEditorCopy = {
  "zh-Hans": {
    eyebrow: "编辑渲染配置",
    headline: "用一个编辑器塑造每份 PDF",
    lead: "导出前配置页面尺寸、边距、排版、代码字体、表格样式、主题和自动目录。",
    panelTop: ["活动配置", "默认"],
    profileChips: [
      ["页面", "A4 / A5 / Letter / Legal"],
      ["主题", "系统 / 浅色 / 护眼 / 深色"],
      ["表格", "圆角 + 首行加粗"],
      ["目录", "自动生成目录"],
    ],
    footer: "配置让 Finder 和应用内转换在每份文档中保持一致。",
    tokens: ["页面", "表格", "目录"],
    previewTitle: ["渲染默认值", "活动配置样式设置"],
    controlBoxes: [
      ["页面尺寸", "A4 / A5"],
      ["主题", "系统"],
      ["正文字体", "PingFang SC"],
      ["代码字体", "Menlo"],
    ],
    sliderLabels: ["字号 12.0", "行高 1.60", "字号 12.0", "行高 1.60", "边距 24 / 16 pt", "自动目录"],
    sampleCards: [
      ["页面", "支持 A5 纵向"],
      ["代码示例", "let title = \"Preview\""],
    ],
    calloutTitle: "一个编辑器掌控 PDF 细节",
    calloutBody: "保存可复用渲染配置，并应用到 Finder 和应用内转换。",
    editorWindowTitle: "渲染配置",
    toolbarPills: ["返回", "活动"],
    editorHero: ["编辑渲染配置", "导出 PDF 时使用的渲染配置。", "返回渲染配置"],
    editorSectionHeadings: [
      ["渲染配置名称", "显示在渲染配置列表和选择器中。"],
      ["页面设置", "配置纸张尺寸和可打印边距。"],
      ["段落设置", "配置正文排版和间距。"],
      ["导出范围", "让活动配置在不同转换入口保持一致。"],
    ],
    editorSettingRows: [
      ["名称", "默认渲染配置", "文本字段"],
      ["主题", "系统", "系统"],
      ["页面尺寸", "A4 纵向", "A4 / A5"],
      ["边距 (pt)", "24 / 16 / 24 / 16"],
      ["正文字体", "PingFang SC", "预览"],
      ["默认渲染配置", "默认", "活动"],
      ["使用位置", "Finder + 应用内转换", "开启"],
    ],
    marginInputs: ["上", "右", "下", "左"],
    matrixCards: [
      ["代码设置", "带语言示例预览的代码字体。", "Menlo"],
      ["表格设置", "圆角矩形、10 pt 半径、首行加粗。", "开启"],
      ["目录", "从 H2-H3 标题生成导航列表。", "自动"],
    ],
  },
  "zh-Hant": {
    eyebrow: "編輯渲染設定",
    headline: "用一個編輯器塑造每份 PDF",
    lead: "匯出前設定頁面尺寸、邊距、排版、程式碼字體、表格樣式、主題與自動目錄。",
    panelTop: ["目前設定", "預設"],
    profileChips: [
      ["頁面", "A4 / A5 / Letter / Legal"],
      ["主題", "系統 / 淺色 / 護眼 / 深色"],
      ["表格", "圓角 + 首列加粗"],
      ["目錄", "自動生成目錄"],
    ],
    footer: "設定檔讓 Finder 與 App 內轉換在每份文件中保持一致。",
    tokens: ["頁面", "表格", "目錄"],
    previewTitle: ["渲染預設值", "目前設定檔樣式"],
    controlBoxes: [
      ["頁面尺寸", "A4 / A5"],
      ["主題", "系統"],
      ["正文字體", "PingFang SC"],
      ["程式碼字體", "Menlo"],
    ],
    sliderLabels: ["字級 12.0", "行高 1.60", "字級 12.0", "行高 1.60", "邊距 24 / 16 pt", "自動目錄"],
    sampleCards: [
      ["頁面", "支援 A5 直向"],
      ["程式碼示例", "let title = \"Preview\""],
    ],
    calloutTitle: "一個編輯器掌控 PDF 細節",
    calloutBody: "保存可重用渲染設定，並套用到 Finder 與 App 內轉換。",
    editorWindowTitle: "渲染設定",
    toolbarPills: ["返回", "啟用中"],
    editorHero: ["編輯渲染設定", "匯出 PDF 時使用的渲染設定。", "返回渲染設定"],
    editorSectionHeadings: [
      ["渲染設定名稱", "顯示在設定列表與選擇器中。"],
      ["頁面設定", "設定紙張尺寸與可列印邊距。"],
      ["段落設定", "設定正文排版與間距。"],
      ["匯出範圍", "讓目前設定在不同轉換入口保持一致。"],
    ],
    editorSettingRows: [
      ["名稱", "預設渲染設定", "文字欄位"],
      ["主題", "系統", "系統"],
      ["頁面尺寸", "A4 直向", "A4 / A5"],
      ["邊距 (pt)", "24 / 16 / 24 / 16"],
      ["正文字體", "PingFang SC", "預覽"],
      ["預設渲染設定", "預設", "啟用"],
      ["使用位置", "Finder + App 內轉換", "開啟"],
    ],
    marginInputs: ["上", "右", "下", "左"],
    matrixCards: [
      ["程式碼設定", "帶語言示例預覽的程式碼字體。", "Menlo"],
      ["表格設定", "圓角矩形、10 pt 半徑、首列加粗。", "開啟"],
      ["目錄", "從 H2-H3 標題生成導覽列表。", "自動"],
    ],
  },
  ja: {
    eyebrow: "レンダー設定を編集",
    headline: "1つの編集画面でPDFを整える",
    lead: "書き出し前に用紙サイズ、余白、組版、コードフォント、表スタイル、テーマ、自動目次を設定できます。",
    panelTop: ["有効な設定", "既定"],
    profileChips: [
      ["ページ", "A4 / A5 / Letter / Legal"],
      ["テーマ", "システム / ライト / セピア / ダーク"],
      ["表", "角丸 + 先頭行を太字"],
      ["目次", "自動生成目次"],
    ],
    footer: "設定でFinder変換とアプリ内変換を文書ごとに統一できます。",
    tokens: ["ページ", "表", "目次"],
    previewTitle: ["レンダー既定値", "有効な設定のスタイル"],
    controlBoxes: [
      ["用紙サイズ", "A4 / A5"],
      ["テーマ", "システム"],
      ["本文フォント", "PingFang SC"],
      ["コードフォント", "Menlo"],
    ],
    sliderLabels: ["文字サイズ 12.0", "行間 1.60", "文字サイズ 12.0", "行間 1.60", "余白 24 / 16 pt", "自動目次"],
    sampleCards: [
      ["ページ", "A5縦向き対応"],
      ["コード例", "let title = \"Preview\""],
    ],
    calloutTitle: "PDFの細部を1画面で調整",
    calloutBody: "再利用できるレンダー設定を保存し、Finderとアプリ内変換に適用できます。",
    editorWindowTitle: "レンダー設定",
    toolbarPills: ["戻る", "有効"],
    editorHero: ["レンダー設定を編集", "PDF書き出しに使うレンダー設定です。", "レンダー設定へ戻る"],
    editorSectionHeadings: [
      ["レンダー設定名", "設定一覧と選択メニューに表示されます。"],
      ["ページ設定", "用紙サイズと印刷余白を設定します。"],
      ["段落設定", "本文の組版と間隔を設定します。"],
      ["書き出し範囲", "有効な設定を各変換入口で統一します。"],
    ],
    editorSettingRows: [
      ["名前", "既定のレンダー設定", "入力欄"],
      ["テーマ", "システム", "システム"],
      ["用紙サイズ", "A4 縦向き", "A4 / A5"],
      ["余白 (pt)", "24 / 16 / 24 / 16"],
      ["本文フォント", "PingFang SC", "プレビュー"],
      ["既定のレンダー設定", "既定", "有効"],
      ["使用場所", "Finder + アプリ内変換", "オン"],
    ],
    marginInputs: ["上", "右", "下", "左"],
    matrixCards: [
      ["コード設定", "言語サンプル付きでコードフォントを確認。", "Menlo"],
      ["表設定", "角丸矩形、半径10 pt、先頭行を太字。", "オン"],
      ["目次", "H2-H3見出しからナビゲーションを生成。", "自動"],
    ],
  },
  ko: {
    eyebrow: "렌더 구성 편집",
    headline: "하나의 편집기에서 PDF 조정",
    lead: "내보내기 전에 페이지 크기, 여백, 타이포그래피, 코드 글꼴, 표 스타일, 테마, 자동 목차를 설정합니다.",
    panelTop: ["활성 구성", "기본값"],
    profileChips: [
      ["페이지", "A4 / A5 / Letter / Legal"],
      ["테마", "시스템 / 라이트 / 세피아 / 다크"],
      ["표", "둥근 모서리 + 첫 행 굵게"],
      ["목차", "자동 생성 목차"],
    ],
    footer: "구성은 Finder와 앱 안 변환을 문서마다 일관되게 유지합니다.",
    tokens: ["페이지", "표", "목차"],
    previewTitle: ["렌더 기본값", "활성 구성 스타일"],
    controlBoxes: [
      ["페이지 크기", "A4 / A5"],
      ["테마", "시스템"],
      ["본문 글꼴", "PingFang SC"],
      ["코드 글꼴", "Menlo"],
    ],
    sliderLabels: ["글자 크기 12.0", "줄 높이 1.60", "글자 크기 12.0", "줄 높이 1.60", "여백 24 / 16 pt", "자동 목차"],
    sampleCards: [
      ["페이지", "A5 세로 지원"],
      ["코드 예시", "let title = \"Preview\""],
    ],
    calloutTitle: "PDF 세부 설정을 한 편집기에서",
    calloutBody: "재사용 가능한 렌더 구성을 저장하고 Finder와 앱 안 변환에 적용합니다.",
    editorWindowTitle: "렌더 구성",
    toolbarPills: ["뒤로", "활성"],
    editorHero: ["렌더 구성 편집", "PDF 내보내기에 사용하는 렌더 구성입니다.", "렌더 구성으로 돌아가기"],
    editorSectionHeadings: [
      ["렌더 구성 이름", "구성 목록과 선택기에 표시됩니다."],
      ["페이지 설정", "용지 크기와 인쇄 여백을 설정합니다."],
      ["문단 설정", "본문 타이포그래피와 간격을 설정합니다."],
      ["내보내기 범위", "활성 구성을 모든 변환 진입점에 일관되게 적용합니다."],
    ],
    editorSettingRows: [
      ["이름", "기본 렌더 구성", "텍스트 필드"],
      ["테마", "시스템", "시스템"],
      ["페이지 크기", "A4 세로", "A4 / A5"],
      ["여백 (pt)", "24 / 16 / 24 / 16"],
      ["본문 글꼴", "PingFang SC", "미리보기"],
      ["기본 렌더 구성", "기본값", "활성"],
      ["사용 위치", "Finder + 앱 안 변환", "켬"],
    ],
    marginInputs: ["위", "오른쪽", "아래", "왼쪽"],
    matrixCards: [
      ["코드 설정", "언어 예시로 코드 글꼴을 미리 봅니다.", "Menlo"],
      ["표 설정", "둥근 사각형, 10 pt 반경, 첫 행 굵게.", "켬"],
      ["목차", "H2-H3 제목에서 탐색 목록을 생성합니다.", "자동"],
    ],
  },
  de: {
    eyebrow: "Renderkonfiguration bearbeiten",
    headline: "Ein Editor für jedes PDF",
    lead: "Format, Ränder, Typografie, Codeschrift, Tabellenstil, Theme und Inhaltsverzeichnis vor dem Export einstellen.",
    panelTop: ["Aktives Profil", "Standard"],
    profileChips: [
      ["Seite", "A4 / A5 / Letter / Legal"],
      ["Theme", "System / Hell / Sepia / Dunkel"],
      ["Tabellen", "Rund + erste Zeile fett"],
      ["Inhalt", "Automatisches Verzeichnis"],
    ],
    footer: "Profile halten Finder- und App-Konvertierungen konsistent.",
    tokens: ["Seite", "Tabellen", "Inhalt"],
    previewTitle: ["Render-Standards", "Stil des aktiven Profils"],
    controlBoxes: [
      ["Seitengröße", "A4 / A5"],
      ["Theme", "System"],
      ["Textschrift", "PingFang SC"],
      ["Codeschrift", "Menlo"],
    ],
    sliderLabels: [
      "Schriftgröße 12.0",
      "Zeilenhöhe 1.60",
      "Schriftgröße 12.0",
      "Zeilenhöhe 1.60",
      "Ränder 24 / 16 pt",
      "Auto-Inhalt",
    ],
    sampleCards: [
      ["Seite", "A5-Hochformat bereit"],
      ["Codebeispiel", "let title = \"Preview\""],
    ],
    calloutTitle: "Ein Editor für PDF-Details",
    calloutBody: "Wiederverwendbare Renderprofile speichern und für Finder und App nutzen.",
    editorWindowTitle: "Renderprofile",
    toolbarPills: ["Zurück", "Aktiv"],
    editorHero: ["Renderkonfiguration bearbeiten", "Einstellungen für den PDF-Export.", "Zurück zu Renderprofilen"],
    editorSectionHeadings: [
      ["Name der Renderkonfiguration", "Wird in Liste und Auswahl angezeigt."],
      ["Seiteneinstellungen", "Papierformat und Druckränder einstellen."],
      ["Absatzeinstellungen", "Typografie und Abstand festlegen."],
      ["Exportbereich", "Aktives Profil über alle Einstiege beibehalten."],
    ],
    editorSettingRows: [
      ["Name", "Standard-Renderprofil", "Textfeld"],
      ["Theme", "System", "System"],
      ["Seitengröße", "A4 Hochformat", "A4 / A5"],
      ["Ränder (pt)", "24 / 16 / 24 / 16"],
      ["Textschrift", "PingFang SC", "Vorschau"],
      ["Standard-Renderprofil", "Standard", "Aktiv"],
      ["Verwendet von", "Finder + App-Konvertierung", "Ein"],
    ],
    marginInputs: ["Oben", "Rechts", "Unten", "Links"],
    matrixCards: [
      ["Codeeinstellungen", "Codeschrift mit Sprachvorschau.", "Menlo"],
      ["Tabelleneinstellungen", "Rund, 10 pt Radius, erste Zeile fett.", "Ein"],
      ["Inhaltsverzeichnis", "Navigation aus H2-H3-Überschriften.", "Auto"],
    ],
  },
  fr: {
    eyebrow: "Modifier la configuration de rendu",
    headline: "Un éditeur pour chaque PDF",
    lead: "Réglez format, marges, typographie, police code, style de tableau, thème et sommaire avant l'export.",
    panelTop: ["Profil actif", "Défaut"],
    profileChips: [
      ["Page", "A4 / A5 / Letter / Legal"],
      ["Thème", "Système / Clair / Sépia / Sombre"],
      ["Tableaux", "Arrondis + première ligne en gras"],
      ["Sommaire", "Table automatique"],
    ],
    footer: "Les profils gardent les conversions Finder et app cohérentes.",
    tokens: ["Page", "Tableaux", "Sommaire"],
    previewTitle: ["Réglages de rendu", "Style du profil actif"],
    controlBoxes: [
      ["Format", "A4 / A5"],
      ["Thème", "Système"],
      ["Police texte", "PingFang SC"],
      ["Police code", "Menlo"],
    ],
    sliderLabels: ["Taille 12.0", "Interligne 1.60", "Taille 12.0", "Interligne 1.60", "Marges 24 / 16 pt", "Table auto"],
    sampleCards: [
      ["Page", "A5 portrait prêt"],
      ["Exemple code", "let title = \"Preview\""],
    ],
    calloutTitle: "Un éditeur pour les détails PDF",
    calloutBody: "Enregistrez des configurations réutilisables pour Finder et l'app.",
    editorWindowTitle: "Configurations de rendu",
    toolbarPills: ["Retour", "Actif"],
    editorHero: ["Modifier la configuration", "Réglages utilisés pour exporter les PDF.", "Retour aux configurations"],
    editorSectionHeadings: [
      ["Nom de configuration", "Affiché dans la liste et le sélecteur."],
      ["Réglages de page", "Format papier et marges imprimables."],
      ["Réglages de paragraphe", "Typographie et espacement du texte."],
      ["Portée d'export", "Même profil actif dans tous les accès."],
    ],
    editorSettingRows: [
      ["Nom", "Configuration par défaut", "Champ texte"],
      ["Thème", "Système", "Système"],
      ["Format", "A4 portrait", "A4 / A5"],
      ["Marges (pt)", "24 / 16 / 24 / 16"],
      ["Police texte", "PingFang SC", "Aperçu"],
      ["Configuration par défaut", "Défaut", "Actif"],
      ["Utilisé par", "Finder + conversion app", "On"],
    ],
    marginInputs: ["Haut", "Droite", "Bas", "Gauche"],
    matrixCards: [
      ["Réglages code", "Police code avec aperçu du langage.", "Menlo"],
      ["Réglages tableau", "Arrondi 10 pt, première ligne en gras.", "On"],
      ["Sommaire", "Navigation depuis les titres H2-H3.", "Auto"],
    ],
  },
  it: {
    eyebrow: "Modifica configurazione rendering",
    headline: "Un editor per ogni PDF",
    lead: "Regola formato, margini, tipografia, font codice, stile tabella, tema e indice prima dell'export.",
    panelTop: ["Profilo attivo", "Default"],
    profileChips: [
      ["Pagina", "A4 / A5 / Letter / Legal"],
      ["Tema", "Sistema / Chiaro / Seppia / Scuro"],
      ["Tabelle", "Angoli + prima riga grassetto"],
      ["Indice", "Indice automatico"],
    ],
    footer: "I profili mantengono coerenti le conversioni da Finder e app.",
    tokens: ["Pagina", "Tabelle", "Indice"],
    previewTitle: ["Predefiniti rendering", "Stile del profilo attivo"],
    controlBoxes: [
      ["Formato pagina", "A4 / A5"],
      ["Tema", "Sistema"],
      ["Font testo", "PingFang SC"],
      ["Font codice", "Menlo"],
    ],
    sliderLabels: [
      "Dimensione 12.0",
      "Interlinea 1.60",
      "Dimensione 12.0",
      "Interlinea 1.60",
      "Margini 24 / 16 pt",
      "Indice auto",
    ],
    sampleCards: [
      ["Pagina", "A5 verticale pronto"],
      ["Esempio codice", "let title = \"Preview\""],
    ],
    calloutTitle: "Un editor per i dettagli PDF",
    calloutBody: "Salva configurazioni riutilizzabili per Finder e conversioni nell'app.",
    editorWindowTitle: "Configurazioni rendering",
    toolbarPills: ["Indietro", "Attivo"],
    editorHero: ["Modifica configurazione", "Impostazioni usate per esportare PDF.", "Torna alle configurazioni"],
    editorSectionHeadings: [
      ["Nome configurazione", "Mostrato nella lista e nel selettore."],
      ["Impostazioni pagina", "Formato carta e margini stampabili."],
      ["Impostazioni paragrafo", "Tipografia e spaziatura del testo."],
      ["Ambito export", "Profilo attivo coerente in ogni ingresso."],
    ],
    editorSettingRows: [
      ["Nome", "Configurazione predefinita", "Campo testo"],
      ["Tema", "Sistema", "Sistema"],
      ["Formato pagina", "A4 verticale", "A4 / A5"],
      ["Margini (pt)", "24 / 16 / 24 / 16"],
      ["Font testo", "PingFang SC", "Anteprima"],
      ["Configurazione predefinita", "Default", "Attivo"],
      ["Usato da", "Finder + conversione app", "On"],
    ],
    marginInputs: ["Alto", "Destra", "Basso", "Sinistra"],
    matrixCards: [
      ["Impostazioni codice", "Font codice con anteprima lingua.", "Menlo"],
      ["Impostazioni tabella", "Raggio 10 pt, prima riga in grassetto.", "On"],
      ["Indice", "Navigazione dai titoli H2-H3.", "Auto"],
    ],
  },
};

for (const [lang, text] of Object.entries(exportProfilesEditorCopy)) {
  Object.assign(copy[lang]["export-profiles"], text);
}

const localeStyle = `
<style>
  html.promo-locale-localized h1 {
    overflow-wrap: normal;
  }

  html.promo-locale-cjk h1 {
    font-size: 100px !important;
    line-height: 1.1 !important;
  }

  html.promo-locale-cjk .lead {
    font-size: 39px !important;
  }

  html.promo-locale-long h1 {
    font-size: 88px !important;
    line-height: 1.08 !important;
  }

  html.promo-locale-long .lead {
    font-size: 36px !important;
  }

  html.promo-locale-long .badge,
  html.promo-locale-long .source-row,
  html.promo-locale-long .format-row,
  html.promo-locale-long .toc-list-row,
  html.promo-locale-long .profile-chip,
  html.promo-locale-long .control-box,
  html.promo-locale-long .mini-row,
  html.promo-locale-long .placeholder-chip {
    font-size: 24px !important;
    line-height: 1.22 !important;
  }

  html.promo-locale-long .section-title strong,
  html.promo-locale-long .style-box strong {
    font-size: 23px !important;
  }

  html.promo-locale-long .toggle-row,
  html.promo-locale-long .template-box {
    font-size: 19px !important;
  }

  html.promo-locale-long .align-chip {
    font-size: 16px !important;
  }

  html.promo-locale-long .toc-entry {
    font-size: 24px !important;
  }

  html.promo-locale-long .toc-entry.sub {
    font-size: 21px !important;
  }

  html.promo-locale-long .source-card span {
    font-size: 22px !important;
  }

  html.promo-locale-long .window-title {
    font-size: 19px !important;
    letter-spacing: 2px !important;
  }

  html.promo-locale-long .hero-title strong {
    font-size: 29px !important;
  }

  html.promo-locale-long .hero-title span,
  html.promo-locale-long .section-heading span {
    font-size: 18px !important;
  }

  html.promo-locale-long .back-button {
    font-size: 15px !important;
  }

  html.promo-locale-long .section-heading strong,
  html.promo-locale-long .matrix-card strong {
    font-size: 21px !important;
  }

  html.promo-locale-long .setting-row strong,
  html.promo-locale-long .control-box strong,
  html.promo-locale-long .sample-card strong {
    font-size: 20px !important;
  }

  html.promo-locale-long .matrix-card span {
    font-size: 16px !important;
  }

  html.promo-locale-long .footer-note {
    font-size: 28px !important;
  }
</style>`;

function applyLocalization(payload) {
  const { lang, htmlLang, group, text } = payload;
  document.documentElement.lang = htmlLang;
  document.documentElement.classList.add("promo-locale-localized", `promo-locale-${group}`);
  document.title = `${text.headline} - MarkdownToPDF PRO`;

  const set = (selector, value, root = document) => {
    if (value === undefined) return;
    const element = root.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setAll = (selector, values, root = document) => {
    if (!Array.isArray(values)) return;
    root.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  };

  set(".eyebrow", text.eyebrow);
  set("h1", text.headline);
  set(".lead", text.lead);
  set(".footer-note", text.footer);
  setAll(".token", text.tokens);

  if (Array.isArray(text.badges)) {
    document.querySelectorAll(".badge").forEach((badge, index) => {
      const mark = badge.querySelector("mark");
      badge.textContent = "";
      if (mark) badge.append(mark);
      badge.append(text.badges[index] || "");
    });
  }

  if (Array.isArray(text.panelTop)) {
    set(".panel-top span", text.panelTop[0]);
    set(".panel-title span", text.panelTop[0]);
    set(".panel-top strong", text.panelTop[1]);
    set(".panel-title strong", text.panelTop[1]);
  }

  if (Array.isArray(text.placeholderChips)) {
    document.querySelectorAll(".placeholder-chip").forEach((chip, index) => {
      const values = text.placeholderChips[index];
      if (!values) return;
      set("span", values[0], chip);
      set("strong", values[1], chip);
    });
  }

  if (Array.isArray(text.tocRows)) {
    document.querySelectorAll(".toc-list-row").forEach((row, index) => {
      const values = text.tocRows[index];
      if (!values) return;
      set(":scope > span:nth-child(2)", values[0], row);
      set(".toc-badge", values[1], row);
    });
  }

  if (Array.isArray(text.sourceRows)) {
    document.querySelectorAll(".source-row").forEach((row, index) => {
      const values = text.sourceRows[index];
      if (!values) return;
      set(":scope > span:nth-child(2)", values[0], row);
      set(".source-badge", values[1], row);
    });
  }

  if (Array.isArray(text.formatRows)) {
    document.querySelectorAll(".format-row").forEach((row, index) => {
      const values = text.formatRows[index];
      if (!values) return;
      set(":scope > span:nth-child(2)", values[0], row);
      set(".format-badge", values[1], row);
    });
  }

  if (Array.isArray(text.miniRows)) {
    document.querySelectorAll(".mini-row").forEach((row, index) => {
      const values = text.miniRows[index];
      if (!values) return;
      set(":scope > span:first-child", values[0], row);
      set(":scope > strong", values[1], row);
    });
  }

  if (Array.isArray(text.profileChips)) {
    document.querySelectorAll(".profile-chip").forEach((chip, index) => {
      const values = text.profileChips[index];
      if (!values) return;
      set("span", values[0], chip);
      set("strong", values[1], chip);
    });
  }

  if (Array.isArray(text.previewTitle)) {
    set(".preview-title strong", text.previewTitle[0]);
    set(".preview-title span", text.previewTitle[1]);
  }

  if (Array.isArray(text.controlBoxes)) {
    document.querySelectorAll(".control-box").forEach((box, index) => {
      const values = text.controlBoxes[index];
      if (!values) return;
      set("span", values[0], box);
      set("strong", values[1], box);
    });
  }

  setAll(".slider-label span", text.sliderLabels);

  if (Array.isArray(text.sampleCards)) {
    document.querySelectorAll(".sample-card").forEach((card, index) => {
      const values = text.sampleCards[index];
      if (!values) return;
      set("span", values[0], card);
      set("strong", values[1], card);
    });
  }

  set(".window-title", text.editorWindowTitle);
  setAll(".toolbar-pill", text.toolbarPills);
  if (Array.isArray(text.editorHero)) {
    set(".hero-title strong", text.editorHero[0]);
    set(".hero-title span", text.editorHero[1]);
    set(".back-button", text.editorHero[2]);
  }

  if (Array.isArray(text.editorSectionHeadings)) {
    document.querySelectorAll(".section-card .section-heading").forEach((heading, index) => {
      const values = text.editorSectionHeadings[index];
      if (!values) return;
      set("strong", values[0], heading);
      set("span", values[1], heading);
    });
  }

  if (Array.isArray(text.editorSettingRows)) {
    document.querySelectorAll(".editor-body .setting-row").forEach((row, index) => {
      const values = text.editorSettingRows[index];
      if (!values) return;
      set(":scope > div:first-child span", values[0], row);
      set(":scope > div:first-child strong", values[1], row);
      const control = row.querySelector(".picker, .toggle");
      if (control && values[2] !== undefined) control.textContent = values[2];
    });
  }

  setAll(".mini-inputs em", text.marginInputs);

  if (Array.isArray(text.matrixCards)) {
    document.querySelectorAll(".matrix-card").forEach((card, index) => {
      const values = text.matrixCards[index];
      if (!values) return;
      set("strong", values[0], card);
      set(":scope > span:not(.toggle)", values[1], card);
      set(".toggle", values[2], card);
    });
  }

  set(".status-card strong", text.statusTitle);
  set(".status-card span", text.statusBody);
  set(".export-card strong", text.exportTitle);
  set(".export-card span", text.exportBody);

  if (Array.isArray(text.paperTitle)) {
    set(".paper-title strong", text.paperTitle[0]);
    set(".paper-title span", text.paperTitle[1]);
  } else {
    set(".paper-title strong", text.paperTitle);
    set(".paper-title span", text.paperSubtitle);
  }

  set(".formula-pill", text.formulaPill);
  setAll("thead th", text.tableHeaders);
  if (Array.isArray(text.tableRows)) {
    document.querySelectorAll("tbody tr").forEach((row, index) => {
      set("td:first-child", text.tableRows[index], row);
    });
  }
  setAll(".equation span", text.equationLabels);
  set(".insight-card strong", text.insightTitle);
  set(".insight-card span", text.insightBody);

  if (Array.isArray(text.diagramTitle)) {
    set(".diagram-title strong", text.diagramTitle[0]);
    set(".diagram-title span", text.diagramTitle[1]);
  }
  setAll(".node", text.nodes);
  setAll(".label", text.codeLabels);
  set(".callout-card strong", text.calloutTitle);
  set(".callout-card span", text.calloutBody);

  set(".window-header strong", text.settingsTitle);
  setAll(".template-box", text.templateBoxes);
  if (Array.isArray(text.headerFooterSections)) {
    document.querySelectorAll(".settings-section").forEach((section, index) => {
      const values = text.headerFooterSections[index];
      if (!values) return;
      set(".section-title strong", values.title, section);
      set(".toggle-row span:first-child", values.contentLabel, section);
      set(".toggle-row span:nth-child(2)", values.alignment, section);
      setAll(".align-chip", values.alignments, section);
    });
  }
  if (Array.isArray(text.styleBoxes)) {
    document.querySelectorAll(".style-box").forEach((box, index) => {
      const values = text.styleBoxes[index];
      if (!values) return;
      set("span", values[0], box);
      set("strong", values[1], box);
    });
  }
  if (Array.isArray(text.previewSidebar)) {
    set(".preview-sidebar strong", text.previewSidebar[0]);
    set(".preview-sidebar span", text.previewSidebar[1]);
  }
  set(".header-band", text.pdfHeader);
  set(".footer-band", text.pdfFooter);
  set(".pdf-page h2", text.pdfTitle);

  set(".md-title", text.markdownTitle);
  setAll(".md-comment", text.markdownComments);
  setAll(".md-h2", text.markdownH2s);
  setAll(".md-h3", text.markdownH3s);
  if (Array.isArray(text.tocPage)) {
    set(".pdf-page h2", text.tocPage[0]);
    set(".pdf-page .subtitle", text.tocPage[1]);
  }
  if (Array.isArray(text.tocEntries)) {
    document.querySelectorAll(".toc-entry").forEach((entry, index) => {
      set(":scope > span:first-child", text.tocEntries[index], entry);
    });
  }
  set(".toc-marker", text.tocMarker);
  set(".source-card strong", text.sourceTitle);
  set(".source-card span", text.sourceBody);
  setAll(".source-badges em", text.sourceBadges);

  setAll(".scale span", text.scale);
  setAll(".mini-switch span", text.switchLabels);
  if (Array.isArray(text.cardLabels)) {
    document.querySelectorAll(".card-label").forEach((label, index) => {
      set("strong", text.cardLabels[index], label);
    });
  }
  set(".callout strong", text.calloutTitle);
  set(".callout span", text.calloutBody);

  document.body.dataset.promoLanguage = lang;
}

function parseArgs() {
  const args = process.argv.slice(2);
  let languages = defaultLanguages;
  let promoKeys = promos.map((promo) => promo.key);

  for (const arg of args) {
    if (arg === "--include-en") {
      languages = ["en", ...defaultLanguages];
    } else if (arg.startsWith("--lang=")) {
      languages = arg
        .slice("--lang=".length)
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
    } else if (arg.startsWith("--promo=")) {
      promoKeys = arg
        .slice("--promo=".length)
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
    }
  }

  return { languages, promoKeys };
}

function ensureKnownInputs(languages, promoKeys) {
  if (!existsSync(chromePath)) {
    throw new Error(`Chrome was not found at ${chromePath}. Set CHROME_PATH to override.`);
  }

  for (const lang of languages) {
    if (lang === "en") continue;
    if (!copy[lang]) throw new Error(`Unknown language: ${lang}`);
  }

  for (const promoKey of promoKeys) {
    if (!promos.some((promo) => promo.key === promoKey)) {
      throw new Error(`Unknown promo: ${promoKey}`);
    }
  }
}

function localizedHtml(baseHtml, promo, lang) {
  if (lang === "en") return baseHtml;

  const text = copy[lang][promo.key];
  if (!text) throw new Error(`Missing ${lang} copy for ${promo.key}`);

  const group = ["zh-Hans", "zh-Hant", "ja", "ko"].includes(lang) ? "cjk" : "long";
  const payload = JSON.stringify({
    lang,
    htmlLang: htmlLang[lang],
    group,
    text,
  }).replace(/</g, "\\u003c");
  const script = `<script>(${applyLocalization.toString()})(${payload});</script>`;

  return baseHtml.replace("</head>", `${localeStyle}\n  </head>`).replace("</body>", `    ${script}\n  </body>`);
}

function captureScreenshot(sourceFile, outputFile) {
  const profileDir = path.join(os.tmpdir(), `mtp-promo-chrome-${process.pid}-${Date.now()}`);
  const child = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--disable-background-networking",
      "--disable-extensions",
      "--disable-sync",
      "--hide-scrollbars",
      "--no-default-browser-check",
      "--no-first-run",
      "--allow-file-access-from-files",
      `--user-data-dir=${profileDir}`,
      "--force-device-scale-factor=1",
      "--timeout=2000",
      "--window-size=2880,1800",
      `--screenshot=${outputFile}`,
      pathToFileURL(sourceFile).href,
    ],
    {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  return new Promise((resolve, reject) => {
    let stderr = "";
    let stdout = "";
    let settled = false;

    const cleanup = () => {
      clearInterval(pollTimer);
      clearTimeout(timeoutTimer);
      try {
        rmSync(profileDir, { force: true, maxRetries: 10, recursive: true, retryDelay: 200 });
      } catch {
        // Chrome may still be releasing cache files after the screenshot is written.
      }
    };

    const finish = (error) => {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    };

    const stopChrome = () => {
      if (child.exitCode === null && !child.killed) child.kill("SIGTERM");
      setTimeout(() => {
        if (child.exitCode === null) child.kill("SIGKILL");
      }, 1_000).unref();
    };

    const screenshotIsWritten = () =>
      existsSync(outputFile) && /bytes written to file|written to file/i.test(`${stdout}\n${stderr}`);

    const finishAfterScreenshot = () => {
      if (!screenshotIsWritten()) return;
      stopChrome();
      finish();
    };

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
      finishAfterScreenshot();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      finishAfterScreenshot();
    });

    child.on("error", (error) => {
      finish(error);
    });

    child.on("exit", (code) => {
      if (existsSync(outputFile)) {
        finish();
        return;
      }

      finish(new Error(`Chrome failed for ${sourceFile} with code ${code}\n${stderr || stdout}`));
    });

    const pollTimer = setInterval(() => {
      finishAfterScreenshot();
    }, 250);

    const timeoutTimer = setTimeout(() => {
      stopChrome();
      finish(new Error(`Timed out while rendering ${sourceFile}\n${stderr || stdout}`));
    }, 45_000);
  });
}

async function main() {
  const { languages, promoKeys } = parseArgs();
  ensureKnownInputs(languages, promoKeys);

  const tempFiles = [];

  for (const staleFile of [
    ...promos.flatMap((promo) => languages.map((lang) => path.join(__dirname, `.localized-${promo.key}-${lang}.html`))),
  ]) {
    rmSync(staleFile, { force: true });
  }

  try {
    for (const promo of promos.filter((candidate) => promoKeys.includes(candidate.key))) {
      const sourcePath = path.join(__dirname, promo.html);
      const baseHtml = readFileSync(sourcePath, "utf8");

      for (const lang of languages) {
        const html = localizedHtml(baseHtml, promo, lang);
        const tempHtml = path.join(__dirname, `.localized-${promo.key}-${lang}.html`);
        const outputName = `${promo.outputBase}-2880x1800.png`;
        const outputDir = lang === "en" ? __dirname : path.join(__dirname, "localized", lang);
        mkdirSync(outputDir, { recursive: true });
        const outputPath = path.join(outputDir, outputName);

        tempFiles.push(tempHtml);
        writeFileSync(tempHtml, html);
        await captureScreenshot(tempHtml, outputPath);
        console.log(`Rendered ${path.relative(repoRoot, outputPath)}`);
      }
    }
  } finally {
    for (const tempFile of tempFiles) {
      rmSync(tempFile, { force: true });
    }
  }
}

await main();
