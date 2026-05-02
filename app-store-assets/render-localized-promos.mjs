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
        ["页面", "A4 / Letter / Legal"],
        ["主题", "系统 / 浅色 / 深色"],
        ["排版", "正文 + 代码字体"],
        ["输出", "名称、目录、动作"],
      ],
      footer: "配置模板让 Finder 转换在每份文档中保持一致",
      tokens: ["模板", "主题", "输出"],
      previewTitle: ["渲染默认值", "当前模板样式设置"],
      controlBoxes: [
        ["页面尺寸", "A4"],
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
      codeLabels: ["Finder 右键菜单", "待处理队列", "MarkdownToPDF 应用", "PDF 输出"],
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
        ["頁面", "A4 / Letter / Legal"],
        ["主題", "系統 / 淺色 / 深色"],
        ["排版", "正文 + 程式碼字體"],
        ["輸出", "名稱、資料夾、動作"],
      ],
      footer: "設定檔讓 Finder 轉換在每份文件中保持一致",
      tokens: ["設定檔", "主題", "輸出"],
      previewTitle: ["渲染預設值", "目前設定檔樣式設定"],
      controlBoxes: [
        ["頁面尺寸", "A4"],
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
      codeLabels: ["Finder 右鍵選單", "待處理佇列", "MarkdownToPDF App", "PDF 輸出"],
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
        ["ページ", "A4 / Letter / Legal"],
        ["テーマ", "システム / ライト / ダーク"],
        ["組版", "本文 + コードフォント"],
        ["出力", "名前、フォルダ、動作"],
      ],
      footer: "プロファイルでFinder変換の見た目を文書ごとに統一",
      tokens: ["プロファイル", "テーマ", "出力"],
      previewTitle: ["描画の既定値", "有効なプロファイル設定"],
      controlBoxes: [
        ["用紙サイズ", "A4"],
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
      codeLabels: ["Finderメニュー", "待機キュー", "MarkdownToPDFアプリ", "PDF出力"],
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
        ["페이지", "A4 / Letter / Legal"],
        ["테마", "시스템 / 라이트 / 다크"],
        ["타이포그래피", "본문 + 코드 글꼴"],
        ["출력", "이름, 폴더, 동작"],
      ],
      footer: "프로필은 Finder 변환 결과를 문서마다 일관되게 유지합니다",
      tokens: ["프로필", "테마", "출력"],
      previewTitle: ["렌더 기본값", "활성 프로필 스타일 설정"],
      controlBoxes: [
        ["페이지 크기", "A4"],
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
      codeLabels: ["Finder 메뉴", "대기열", "MarkdownToPDF 앱", "PDF 출력"],
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
        ["Seite", "A4 / Letter / Legal"],
        ["Theme", "System / Hell / Dunkel"],
        ["Typografie", "Text + Code-Schriften"],
        ["Ausgabe", "Name, Ordner, Aktion"],
      ],
      footer: "Profile halten Finder-Konvertierungen über alle Dokumente konsistent",
      tokens: ["Profile", "Themes", "Ausgabe"],
      previewTitle: ["Render-Standards", "Stil des aktiven Profils"],
      controlBoxes: [
        ["Seitengröße", "A4"],
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
      codeLabels: ["Finder-Menü", "Warteschlange", "MarkdownToPDF-App", "PDF-Ausgabe"],
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
        ["Page", "A4 / Letter / Legal"],
        ["Thème", "Système / Clair / Sombre"],
        ["Typographie", "Texte + code"],
        ["Sortie", "Nom, dossier, action"],
      ],
      footer: "Les profils gardent les conversions Finder cohérentes",
      tokens: ["Profils", "Thèmes", "Sortie"],
      previewTitle: ["Réglages de rendu", "Style du profil actif"],
      controlBoxes: [
        ["Format", "A4"],
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
      codeLabels: ["Menu Finder", "File d'attente", "App MarkdownToPDF", "Sortie PDF"],
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
        ["Pagina", "A4 / Letter / Legal"],
        ["Tema", "Sistema / Chiaro / Scuro"],
        ["Tipografia", "Testo + font codice"],
        ["Output", "Nome, cartella, azione"],
      ],
      footer: "I profili mantengono coerenti le conversioni da Finder",
      tokens: ["Profili", "Temi", "Output"],
      previewTitle: ["Predefiniti rendering", "Stile del profilo attivo"],
      controlBoxes: [
        ["Formato pagina", "A4"],
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
      codeLabels: ["Menu Finder", "Coda in attesa", "App MarkdownToPDF", "Output PDF"],
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
  html.promo-locale-long .profile-chip,
  html.promo-locale-long .control-box,
  html.promo-locale-long .mini-row {
    font-size: 24px !important;
    line-height: 1.22 !important;
  }

  html.promo-locale-long .footer-note {
    font-size: 28px !important;
  }
</style>`;

function applyLocalization(payload) {
  const { lang, htmlLang, group, text } = payload;
  document.documentElement.lang = htmlLang;
  document.documentElement.classList.add("promo-locale-localized", `promo-locale-${group}`);
  document.title = `${text.headline} - MarkdownToPDF`;

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
