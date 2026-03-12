const WordRoots = [
  {
    id: 1,
    root: "Harness Engineering",
    origin: "核心理念",
    meaning: "在智能体优先的世界中，通过搭建支撑结构让 AI 智能体高效构建软件的工程方法论",
    description: "Harness Engineering（驾驭工程）是 OpenAI 技术人员（Member of the Technical Staff）Ryan Lopopolo 于 2026 年 2 月 11 日发表的实践报告中提出的工程范式。核心思想是「人类掌舵。智能体执行。」（Humans steer. Agents execute.）。团队从 2025 年 8 月下旬开始实验，用约五个月时间，其中没有一行代码是人工编写的——这成为团队的核心理念：不手动编写代码（no manually-written code）。利用 Codex CLI（使用 GPT‑5）构建并发布了一款拥有内部日常活跃用户和外部 Alpha 测试者的完整产品。团队生成了约一百万行代码，合并了约 1,500 个 PR，据估计只用了手工编写代码所需的大约 1/10 的时间。工程师的角色从编写代码转变为设计环境、明确意图和构建反馈回路。构建软件仍然需要纪律，但纪律更多地体现在支撑结构（scaffolding）上——工具、抽象和保持代码库一致性的反馈回路。",
    examples: [
      {
        word: "零人工代码实验",
        meaning: "完全由 AI 智能体生成所有代码的产品开发实验",
        breakdown: { root: "Harness Engineering" },
        explanation: "团队从一个空的 Git 仓库开始，五个月内用 Codex 生成约一百万行代码，合并约 1,500 个 PR，构建速度估计为手写的 10 倍。"
      },
      {
        word: "人类掌舵",
        meaning: "工程师负责设计环境和明确意图，智能体负责执行",
        breakdown: { root: "Harness Engineering" },
        explanation: "原文明确指出：「我们工程团队的主要任务成了协助智能体完成有用的工作。」工程师提供工具、抽象层和内部结构。"
      },
      {
        word: "支撑结构纪律",
        meaning: "工程纪律从编码转向搭建支撑智能体工作的基础设施",
        breakdown: { root: "Harness Engineering" },
        explanation: "最大挑战在于设计环境、反馈回路和控制系统，帮助智能体大规模构建和维护复杂、可靠的软件。"
      }
    ],
    quiz: {
      question: "OpenAI Harness Engineering 的核心理念是什么？",
      options: ["智能体完全自主工作", "人类掌舵，智能体执行", "取消人类工程师", "不手动编写代码"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "智能体优先开发",
    origin: "核心理念",
    meaning: "以 AI 智能体为主要代码生产者的软件开发模式",
    description: "智能体优先开发（Agent-First Development）是 Harness Engineering 的开发模式。人类几乎完全通过提示与系统交互：工程师描述任务，运行智能体，并允许其打开一个 Pull Request。代码库中的所有内容均由 Codex 智能体生成，包括：产品代码和测试、CI 配置和发布工具、内部开发者工具、文档和设计历史、评估体系（evaluation harnesses）、审阅评论和回复、管理代码仓库本身的脚本，甚至生产仪表板定义文件。最初由 3 名工程师驱动 Codex，后增长至 7 名，平均每位工程师每天处理 3.5 个 PR，而且随着团队增长吞吐量有所提升（increased）。据估计，只用了手工编写代码所需的大约 1/10 的时间。",
    examples: [
      {
        word: "全智能体生成",
        meaning: "代码库中的所有内容都由 AI 智能体生成",
        breakdown: { root: "智能体优先开发" },
        explanation: "不仅是产品代码，还包括测试、CI 配置、发布工具、文档、审阅评论甚至管理仓库本身的脚本，全部由 Codex 完成。"
      },
      {
        word: "提示词交互",
        meaning: "人类通过提示词而非代码与系统交互",
        breakdown: { root: "智能体优先开发" },
        explanation: "工程师不再直接编写代码，而是通过精心设计的提示词向 Codex 描述意图，由智能体翻译为可执行代码。"
      },
      {
        word: "10 倍构建速度",
        meaning: "智能体优先模式下构建速度约为手写的 10 倍",
        breakdown: { root: "智能体优先开发" },
        explanation: "3-7 名工程师在五个月内完成约一百万行代码和 1,500 个 PR，效率远超传统手写开发。"
      }
    ],
    quiz: {
      question: "在智能体优先开发中，以下哪项不是由智能体生成的？",
      options: ["CI 配置", "审阅评论", "产品代码", "以上全部都是智能体生成的"],
      correctAnswer: 3
    }
  },
  {
    id: 3,
    root: "深度优先的工作方式",
    origin: "工程方法",
    meaning: "将大目标分解为更小的构建模块，逐步解锁复杂任务",
    description: "深度优先的工作方式（work depth-first）是 Harness Engineering 中指导智能体工作的核心方法。原文描述为「在实践中，这意味着采用深度优先的工作方式：将更大的目标拆解为更小的构建模块（设计、代码、评审、测试等），提示智能体去构建这些模块，并使用它们去解锁更复杂的任务」。当事情进行不顺利时，解决方案基本上再也不会是「再努力一点」，而是人类工程师介入追问：「究竟还需要什么样的能力，我们又该如何让这个能力对智能体来说既清晰可读又可强制执行？」",
    examples: [
      {
        word: "任务拆解",
        meaning: "将复杂功能拆分为可独立执行的小构建模块",
        breakdown: { root: "深度优先的工作方式" },
        explanation: "不是一次性要求智能体完成整个功能，而是拆分为设计文档编写、核心逻辑实现、测试编写、代码评审等独立步骤。"
      },
      {
        word: "构建模块组合",
        meaning: "通过组合小模块逐步解锁复杂能力",
        breakdown: { root: "深度优先的工作方式" },
        explanation: "先让智能体构建基础工具和抽象，再利用这些基础能力处理更复杂的任务，形成能力的递进积累。"
      },
      {
        word: "环境诊断",
        meaning: "当智能体受阻时，诊断环境中缺失了什么",
        breakdown: { root: "深度优先的工作方式" },
        explanation: "原文指出：「因为取得进展的唯一方式是让 Codex 来完成工作，而人类工程师则总是介入这项任务并追问：究竟还需要什么样的能力。」"
      }
    ],
    quiz: {
      question: "当智能体在任务上遇到困难时，正确的做法是什么？",
      options: ["让智能体再努力一点", "诊断环境中缺少了什么能力", "换一个智能体", "放弃这个任务"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "Ralph Wiggum 循环",
    origin: "反馈循环",
    meaning: "智能体自我审核、迭代修复直到所有审核者满意的闭环机制",
    description: "Ralph Wiggum 循环是一种智能体审核闭环机制（名称源自外部链接 ghuntley.com/loop）。原文描述了具体流程：指示 Codex 在本地审核其自身的更改，在本地和云端请求额外的特定智能体审查，对任何人工或智能体给出的反馈做出响应，并循环往复，直到所有智能体审核人员都满意为止。随着时间的推移，团队已将几乎所有的审核工作调整为用「智能体对智能体」（agent-to-agent）模式来处理，大幅减少了人类审核的负担。",
    examples: [
      {
        word: "自我审核",
        meaning: "智能体审核自己生成的代码变更",
        breakdown: { root: "Ralph Wiggum 循环" },
        explanation: "Codex 在提交 PR 前先在本地审核自己的变更，检查代码质量、风格一致性和潜在问题。"
      },
      {
        word: "智能体对智能体审核",
        meaning: "将代码审核工作从人类转移到智能体之间",
        breakdown: { root: "Ralph Wiggum 循环" },
        explanation: "人类可以审核 Pull Request，但并非必须。随着时间推移，几乎所有审核工作已调整为智能体对智能体的方式处理。"
      },
      {
        word: "迭代至满意",
        meaning: "反复修正直到所有审核者（智能体和人类）满意",
        breakdown: { root: "Ralph Wiggum 循环" },
        explanation: "智能体会拉取审核反馈、在行内回复、推送更新，并且经常压缩并合并自己的 PR。"
      }
    ],
    quiz: {
      question: "Ralph Wiggum 循环的最终效果是什么？",
      options: ["取消代码审核", "将审核推向智能体对智能体模式", "只保留人类审核", "加快编码速度"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "提高应用程序的可读性",
    origin: "可读性工程",
    meaning: "让应用的 UI、日志和应用指标对 AI 智能体直接可读",
    description: "「提高应用程序的可读性」（Increasing application legibility）是原文的一个完整章节标题。原文描述：「随着代码吞吐量的增加，我们的瓶颈变成了人类 QA 的能力。由于人类的时间和注意力是固定的约束条件，我们一直在努力通过让应用程序的 UI、日志和应用指标等内容对 Codex 直接可读，从而为智能体增加更多功能。」（Because the fixed constraint has been human time and attention, we've worked to add more capabilities to the agent by making things like the application UI, logs, and app metrics themselves directly legible to Codex.）具体包括三个方面：通过 git worktree 让智能体可以为每次更改启动并驱动一个独立实例；将 Chrome DevTools 协议接入智能体运行时，创建处理 DOM 快照、屏幕截图和导航的技能；通过本地可观测性堆栈将日志、指标和追踪记录暴露给智能体。",
    examples: [
      {
        word: "Git Worktree 启动",
        meaning: "智能体通过 git worktree 为每次更改启动独立实例",
        breakdown: { root: "提高应用程序的可读性" },
        explanation: "每个智能体任务都可以在独立的工作树中启动应用实例，互不干扰，支持并行测试多个更改。"
      },
      {
        word: "Chrome DevTools 协议",
        meaning: "让智能体能够直接与浏览器交互",
        breakdown: { root: "提高应用程序的可读性" },
        explanation: "将 Chrome DevTools 协议接入智能体运行时，创建处理 DOM 快照、屏幕截图和导航的技能，使 Codex 能够复现错误、验证修复并推理 UI 行为。"
      },
      {
        word: "可观测性堆栈",
        meaning: "将日志、指标和追踪记录暴露给智能体",
        breakdown: { root: "提高应用程序的可读性" },
        explanation: "智能体可以使用 LogQL 查询日志、使用 PromQL 查询指标，支持如「确保服务启动在 800ms 内完成」这样的性能验证提示。"
      }
    ],
    quiz: {
      question: "以下哪项不是提高应用程序可读性的组成部分？",
      options: ["Git Worktree 启动", "Chrome DevTools 协议集成", "可观测性堆栈", "模型训练接口"],
      correctAnswer: 3
    }
  },
  {
    id: 6,
    root: "我们将代码仓库设为记录系统",
    origin: "知识管理",
    meaning: "将代码仓库的知识库作为记录系统，让智能体高效获取上下文",
    description: "「我们将代码仓库设为记录系统」（We made repository knowledge the system of record）是原文的一个完整章节标题。原文的核心教训是：「要给 Codex 的是一张地图，而不是一本 1,000 页的说明书」（give Codex a map, not a 1,000-page instruction manual）。团队尝试了「一个大型 AGENTS.md」方法但失败了，因为：上下文是稀缺资源（Context is a scarce resource），巨大的指令文件会挤掉任务和代码；过多指导反而变成了无效指导（Too much guidance becomes non-guidance）；它会立即腐烂（It rots instantly）且难以验证（It's hard to verify）。取而代之的是将 AGENTS.md（约 100 行）视为「内容目录」（the table of contents），指向 docs/ 目录中更深层次的真实信息来源。智能体从一个小而稳定的切入点开始，被指导下一步该去哪里查看，而不是一开始就被淹没。",
    examples: [
      {
        word: "地图策略",
        meaning: "AGENTS.md 作为内容目录指向深层文档，而非巨型百科",
        breakdown: { root: "我们将代码仓库设为记录系统" },
        explanation: "AGENTS.md 保持约 100 行精简，作为地图指向 docs/ 中的 design-docs/、exec-plans/、product-specs/、references/ 等详细文档。"
      },
      {
        word: "渐进式披露",
        meaning: "智能体从小切入点开始，按需查找深层知识",
        breakdown: { root: "我们将代码仓库设为记录系统" },
        explanation: "智能体不需要一次加载所有上下文，而是从切入点出发，被指导下一步该去哪里查看，避免一开始就被淹没。"
      },
      {
        word: "doc-gardening 智能体",
        meaning: "自动扫描和修复过时文档的定期运行智能体",
        breakdown: { root: "我们将代码仓库设为记录系统" },
        explanation: "原文称之为 doc-gardening 智能体，定期扫描不再反映真实代码行为的过时或废弃文档，并发起修复用的 PR。"
      }
    ],
    quiz: {
      question: "OpenAI 团队为什么放弃了「一个大型 AGENTS.md」方法？",
      options: ["技术限制", "上下文是稀缺资源，过多指导反而无效且容易腐烂", "团队规模太小", "Codex 不支持 Markdown"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "目标是智能体的可读性",
    origin: "知识管理",
    meaning: "智能体在运行时无法在上下文中访问的内容，对它来说不存在",
    description: "「目标是智能体的可读性」（Agent legibility is the goal）是原文的一个完整章节标题。原文明确指出：「从智能体的角度来看，它在运行时无法在上下文中访问的任何内容都是不存在的。」因此，知识必须存在于代码仓库本地的、已版本化的工件中——代码、Markdown、模式（schemas）、可执行计划（executable plans）——而不是 Google Docs、聊天记录或人们头脑中（Knowledge that lives in Google Docs, chat threads, or people's heads are not accessible to the system）。团队随着时间推移，将越来越多的上下文推送到仓库中，就像为新入职的团队成员提供引导一样。技术选择上，倾向于可以在仓库内部完全内化和推理的依赖项，偏好「成熟稳定」的技术——可组合、API 稳定、训练集中有代表。",
    examples: [
      {
        word: "版本化工件",
        meaning: "所有知识以代码、Markdown、Schema 等形式存在于仓库中",
        breakdown: { root: "目标是智能体的可读性" },
        explanation: "架构决策、设计讨论、产品规格等都不能只存在于聊天记录或外部文档中，必须版本化存储在代码仓库里。"
      },
      {
        word: "成熟稳定技术偏好",
        meaning: "选择可组合、API 稳定、训练集中有代表的技术",
        breakdown: { root: "目标是智能体的可读性" },
        explanation: "原文用「boring」描述，在技术社区中这是个褒义术语，指成熟稳定、经过验证的技术。智能体对训练数据中常见的技术表现更好，稳定的技术比新潮但冷门的技术更适合。"
      },
      {
        word: "内部重新实现",
        meaning: "智能体重新实现功能子集而非引用不透明的外部库",
        breakdown: { root: "目标是智能体的可读性" },
        explanation: "原文举例：没有引入通用的 p-limit 风格包，而是投入使用了自己的带并发的 map 辅助函数，与 OpenTelemetry 仪表紧密集成。"
      }
    ],
    quiz: {
      question: "「目标是智能体的可读性」原则要求知识存储在哪里？",
      options: ["Google Docs", "聊天记录", "代码仓库本地的版本化工件", "外部 Wiki"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "规范架构与品味",
    origin: "架构强制",
    meaning: "严格分层的代码架构：Types → Config → Repo → Service → Runtime → UI",
    description: "「规范架构与品味」（Enforcing architecture and taste）是原文的一个完整章节标题。原文指出：「仅靠文档本身，是没法保持完全由智能体生成的代码库的连贯性的。」团队围绕一个严格的架构模型构建了该应用。每个业务域都划分为一组固定的层（分层领域架构），依赖方向经过严格验证，并且仅允许有限的一组边。代码只能「向前」依赖（Types → Config → Repo → Service → Runtime → UI）。横切关注点（认证、连接器、遥测、功能标志）通过一个单一的显式接口进入：Providers。这些约束是通过自定义的 linter（由 Codex 生成）和结构测试机械地强制执行的。原文强调：「这通常是你推迟到拥有数百名工程师时才会做的架构。对于编码智能体来说，这是一个早期的先决条件：这些约束是使得速度不下降、架构不漂移的关键。」（the constraints are what allows speed without decay or architectural drift）",
    examples: [
      {
        word: "单向依赖",
        meaning: "代码只能向前依赖，上层依赖下层",
        breakdown: { root: "规范架构与品味" },
        explanation: "UI 层可以依赖 Service 层，但 Service 层不能反向依赖 UI 层，确保代码依赖关系清晰可预测。"
      },
      {
        word: "Providers 接口",
        meaning: "横切关注点通过单一显式接口进入",
        breakdown: { root: "规范架构与品味" },
        explanation: "原文指出横切关注点（认证、连接器、遥测、功能标志）通过 Providers 这个单一的显式接口进入，其他任何方式都不被允许。"
      },
      {
        word: "机械强制执行",
        meaning: "通过自定义 linter 和结构测试自动验证架构规则",
        breakdown: { root: "规范架构与品味" },
        explanation: "不依赖人工审查来保证架构一致性，而是由 Codex 编写的自定义 linter 和结构测试来自动检测违规。"
      }
    ],
    quiz: {
      question: "在规范架构与品味的分层架构中，以下哪个依赖方向是正确的？",
      options: ["Types 依赖 UI", "Service 依赖 Runtime", "UI 依赖 Service", "Config 依赖 Repo"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "品味不变式",
    origin: "架构强制",
    meaning: "将代码品味和风格规范编码为可自动验证的不变式",
    description: "品味不变式（taste invariants）是「规范架构与品味」（Enforcing architecture and taste）章节中保持代码库一致性的方法。原文说的是「通过自定义的代码检查器和结构测试来强制执行这些规则，并辅以一小组品味不变式」。核心思想是：「通过强制执行不变量，而非对实施过程进行微观管理，我们让智能体快速交付的同时不损害基础。」（By enforcing invariants, not micromanaging implementations, we let agents ship fast without undermining the foundation.）静态强制执行的内容包括：结构化日志记录、模式和类型的命名约定、文件大小限制，以及特定平台的可靠性要求。关键创新在于：由于 lint 是自定义的，错误信息被编写为在智能体上下文中注入修复指令——这意味着当智能体违反规则时，它会自动获得如何修复的指导。权衡策略是「在中央层面强制执行边界，在本地层面允许自主权」。",
    examples: [
      {
        word: "lint 修复指令",
        meaning: "lint 错误消息中嵌入智能体可读的修复指导",
        breakdown: { root: "品味不变式" },
        explanation: "自定义 linter 的错误消息不仅描述问题，还包含具体的修复指令，智能体看到错误后可以直接修复，无需人工干预。"
      },
      {
        word: "中央强制局部自治",
        meaning: "在核心边界严格执行，细节允许灵活",
        breakdown: { root: "品味不变式" },
        explanation: "原文类比为「领导一个大型工程平台组织：在中央层面强制执行边界，在本地层面允许自主权」。"
      },
      {
        word: "效能放大效应",
        meaning: "规则一旦编码，立即应用于所有地方",
        breakdown: { root: "品味不变式" },
        explanation: "原文指出：「在以人为本的工作流程中，这些规则可能让人感到迂腐。有了智能体，它们就成了效能放大器（multiplier）：一旦编码，就能立即应用于所有地方。」"
      }
    ],
    quiz: {
      question: "品味不变式中 lint 错误消息的独特设计是什么？",
      options: ["只显示错误行号", "在智能体上下文中注入修复指令", "自动删除违规代码", "发送邮件通知人类"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "Docs 目录结构",
    origin: "知识管理",
    meaning: "结构化的代码仓库文档体系，作为智能体的知识来源",
    description: "Docs 目录结构是「我们将代码仓库设为记录系统」章节中的具体实现。原文展示了完整的文档布局：AGENTS.md（约 100 行的地图）、ARCHITECTURE.md、docs/ 目录下包括 design-docs/（设计文档，含 core-beliefs.md 核心理念）、exec-plans/（活跃计划、已完成计划、技术债务跟踪器 tech-debt-tracker.md）、generated/（如 db-schema.md 数据库模式）、product-specs/（产品规格说明）、references/（设计系统引用、工具引用如 nixpacks、uv）。此外还有 DESIGN.md、FRONTEND.md、PLANS.md、PRODUCT_SENSE.md、QUALITY_SCORE.md、RELIABILITY.md、SECURITY.md 等专题文档。",
    examples: [
      {
        word: "design-docs/",
        meaning: "存储设计文档和核心理念的目录",
        breakdown: { root: "Docs 目录结构" },
        explanation: "包含 index.md 索引和 core-beliefs.md 核心理念，定义了智能体优先的操作原则，并含验证状态。"
      },
      {
        word: "exec-plans/",
        meaning: "存储执行计划和技术债务跟踪的目录",
        breakdown: { root: "Docs 目录结构" },
        explanation: "原文称「计划被视为一流的工件」，包含活跃计划（active/）、已完成计划（completed/）和技术债务跟踪器，附带进度和决策日志。"
      },
      {
        word: "CI 验证文档",
        meaning: "使用 CI 自动验证文档的时效性和正确性",
        breakdown: { root: "Docs 目录结构" },
        explanation: "原文明确提到「专职的 linter 和 CI 作业会验证知识库的更新状况、是否已交叉链接且结构正确」，防止文档腐烂。"
      }
    ],
    quiz: {
      question: "以下哪个不是 OpenAI 团队 docs/ 目录下的标准子目录？",
      options: ["design-docs/", "exec-plans/", "product-specs/", "training-data/"],
      correctAnswer: 3
    }
  },
  {
    id: 11,
    root: "上下文即存在",
   origin: "可读性工程",
   meaning: "优先为智能体优化代码的可读性，使其可以直接从代码仓库推理业务领域",
   description: "上下文即存在是从「目标是智能体的可读性」（Agent legibility is the goal）章节提炼的核心认知。原文强调：「由于该代码仓库完全由智能体生成，因此我们首先针对 Codex 的可读性进行了优化。」目标是让智能体能够直接从代码仓库推理出完整的业务领域。这一框架明确了许多取舍：倾向于选择可以完全内化在仓库中进行推理的依赖项和抽象。在某些情况下，让智能体重新实现部分功能子集比绕过公共库中不透明的上游行为更便宜——例如团队没有引入通用的 p-limit 风格包，而是投入使用了自己的带并发的 map 辅助函数。",
    examples: [
      {
        word: "仓库内化推理",
        meaning: "选择智能体可以在仓库内部完全理解的技术",
        breakdown: { root: "上下文即存在" },
       explanation: "偏好「成熟稳定」技术（API 稳定、训练集中有代表），避免需要大量外部知识才能理解的新潮框架。"
     },
     {
       word: "上下文入职",
       meaning: "像入职新员工一样持续向仓库注入上下文",
       breakdown: { root: "上下文即存在" },
        explanation: "原文举例：「那次让团队在架构模式上达成一致的 Slack 讨论？如果智能体无法发现它，那么它就会像迟了三个月入职的新员工一样，对其一无所知。」"
      },
      {
        word: "品味同步",
        meaning: "将产品原则、工程规范和团队文化同步给智能体",
        breakdown: { root: "上下文即存在" },
       explanation: "原文指出：「就像你会在产品原则、工程规范和团队文化（包括表情符号偏好）方面为新队友提供引导一样，将这些信息提供给智能体会带来更一致的输出。」"
     }
   ],
   quiz: {
     question: "「上下文即存在」原则的核心含义是什么？",
     options: ["智能体可以访问所有信息", "智能体无法访问的内容对它不存在", "只需写好代码即可", "外部文档更重要"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "可观测性堆栈",
    origin: "可读性工程",
    meaning: "本地可观测性堆栈，让智能体能够查询日志、指标和追踪记录",
    description: "可观测性堆栈是「提高应用程序的可读性」章节中的核心组件之一。原文详细描述：「日志、指标和追踪记录会通过一个本地可观测性堆栈展示给 Codex，对任何给定的工作树来说，该堆栈都是临时的。Codex 在该应用程序的一个完全独立的版本上运行，一旦任务完成，该版本的所有内容，包括日志和指标，都会被删除。」智能体可以使用 LogQL 查询日志，使用 PromQL 查询指标。原文图表展示了应用程序将数据发送到 Vector，再分发到 Victoria Logs/Metrics/Traces 的架构。",
    examples: [
      {
        word: "LogQL 查询",
        meaning: "智能体使用 LogQL 语法查询和分析日志",
        breakdown: { root: "可观测性堆栈" },
        explanation: "Codex 可以直接使用 LogQL 查询日志，定位错误、分析行为模式。"
      },
      {
        word: "PromQL 指标",
        meaning: "智能体使用 PromQL 查询性能指标",
        breakdown: { root: "可观测性堆栈" },
        explanation: "智能体可以通过 PromQL 查询指标，验证如「服务启动时间不超过 800ms」等性能约束。"
      },
      {
        word: "临时可观测性环境",
        meaning: "每个工作树的可观测性堆栈都是临时的",
        breakdown: { root: "可观测性堆栈" },
        explanation: "原文强调 Codex 在完全独立的应用版本上运行，任务完成后所有日志和指标都会被删除，保证环境隔离。"
      }
    ],
    quiz: {
      question: "OpenAI 团队的智能体使用什么语言查询日志？",
      options: ["SQL", "LogQL", "GraphQL", "KQL"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "不断提高的自主水平",
    origin: "自主性提升",
    meaning: "智能体可以端到端地驱动从 Bug 复现到 PR 合并的完整流程",
    description: "「不断提高的自主水平」（Increasing levels of autonomy）是原文的一个完整章节。原文描述：「随着越来越多的开发环节被直接编码到系统中——包括测试、验证、审查、反馈处理和恢复——该代码仓库最近跨过了一个重要门槛。」给定一个提示，智能体现在可以完成完整流程：验证代码库状态、复现已报告的漏洞、录制演示故障的视频、实施修复、通过运行应用来验证修复、录制第二个视频演示解决方案、打开 PR、回应智能体和人类反馈、检测并修复构建故障、仅在需要判断时才交由人工处理、最终合并更改。",
    examples: [
      {
        word: "Bug 复现与视频录制",
        meaning: "智能体自动复现漏洞并录制视频证据",
        breakdown: { root: "不断提高的自主水平" },
        explanation: "智能体通过 Chrome DevTools 协议驱动浏览器复现报告的漏洞，录制展示故障的视频，然后实施修复并录制第二个视频展示解决方案。"
      },
      {
        word: "仅在需要判断时交由人工",
        meaning: "智能体自主处理大部分流程，仅在需要人类判断时升级",
        breakdown: { root: "不断提高的自主水平" },
        explanation: "原文明确列出了完整流程的最后步骤之一是「仅在需要判断时才交由人工处理」，其余全部由智能体自主完成。"
      },
      {
        word: "构建故障自修复",
        meaning: "智能体自动检测并修复 CI 构建故障",
        breakdown: { root: "不断提高的自主水平" },
        explanation: "提交 PR 后如果 CI 构建失败，智能体会自动分析失败原因并推送修复提交，无需人工干预。"
      }
    ],
    quiz: {
      question: "在端到端自主流程中，智能体什么时候需要人类介入？",
      options: ["每次代码审核", "每次构建失败", "仅在需要判断时", "从不需要"],
      correctAnswer: 2
    }
  },
  {
    id: 14,
    root: "吞吐量改变了合并的理念",
    origin: "合并哲学",
    meaning: "高吞吐量下「纠错成本低，等待成本高」的合并策略",
    description: "「吞吐量改变了合并的理念」（Throughput changes the merge philosophy）是原文的一个完整章节标题。原文描述：「随着 Codex 的吞吐量增加，许多常规的工程规范变得适得其反。」（many conventional engineering norms became counterproductive）新策略是：代码仓库在运行过程中尽量减少阻塞合并门；Pull Request 的生命周期很短；测试偶发失败通常通过后续重跑来解决，而不是无限期地阻碍进展。核心认知是「纠错成本低，等待成本高」（corrections are cheap, and waiting is expensive）。原文也注意到：「在低吞吐量环境中，这样做是不负责任的。但在这里，这通常是正确的权衡。」（This would be irresponsible in a low-throughput environment. Here, it's often the right tradeoff.）",
    examples: [
      {
        word: "短生命周期 PR",
        meaning: "PR 快速审核快速合并，不长时间阻塞",
        breakdown: { root: "吞吐量改变了合并的理念" },
        explanation: "智能体生成的 PR 应该快速被审核和合并，避免大量 PR 堆积等待人类审核，阻碍整体开发进度。"
      },
      {
        word: "后续修复策略",
        meaning: "测试偶发失败通过后续重跑解决而非阻塞",
        breakdown: { root: "吞吐量改变了合并的理念" },
        explanation: "原文明确指出「测试偶发失败通常通过后续重跑来解决，而不是无限期地阻碍进展」。"
      },
      {
        word: "纠错成本低等待成本高",
        meaning: "智能体修复 Bug 的成本远低于等待完美的成本",
        breakdown: { root: "吞吐量改变了合并的理念" },
        explanation: "在智能体吞吐量远超人类注意力的系统中，快速合并加后续修正比阻塞等待完美更高效。"
      }
    ],
    quiz: {
      question: "「吞吐量改变了合并的理念」的核心认知是什么？",
      options: ["代码质量最重要", "纠错成本低，等待成本高", "每个 PR 必须完美", "人类审核不可替代"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "熵与垃圾收集",
    origin: "代码维护",
    meaning: "应对智能体生成代码中的模式漂移和技术债务的清理机制",
    description: "「熵与垃圾收集」（Entropy and garbage collection）是原文的一个完整章节。原文指出：「Codex 会复现代码仓库中已存在的模式——甚至包括那些不均衡或不够理想的模式。随着时间的推移，这不可避免地导致漂移。」最初团队每周五花 20% 时间手动清理「AI 残渣」，但这不具备可扩展性。解决方案是将「黄金原则」直接编码到仓库中，并建立循环清理流程。定期运行一组后台 Codex 任务，扫描偏差、更新质量等级，并发起有针对性的重构 PR。大多数可以在一分钟内审查并自动合并。原文比喻：「技术债务就像一笔高息贷款：不断地以小额贷款的方式偿还，总比让债务累积再痛苦地一次解决要好。」",
    examples: [
      {
        word: "黄金原则编码",
        meaning: "将最佳实践直接编码到仓库中",
        breakdown: { root: "熵与垃圾收集" },
        explanation: "原文举了两个例子：(1) 倾向于使用共享的实用程序包，而不是手工编写的辅助工具；(2) 不使用 YOLO 式探测数据，而是验证边界或依赖类型化的 SDK。"
      },
      {
        word: "后台扫描智能体",
        meaning: "后台 Codex 任务扫描代码偏差并自动修复",
        breakdown: { root: "熵与垃圾收集" },
        explanation: "定期运行的后台任务扫描代码库，发现偏离黄金原则的代码，自动发起重构 PR，大多数可在一分钟内审查合并。"
      },
      {
        word: "AI 残渣清理",
        meaning: "原文对智能体产生的低质量代码的形象称呼",
        breakdown: { root: "熵与垃圾收集" },
        explanation: "团队最初每周五花 20% 时间手动清理 AI 残渣，后来改为自动化的后台任务来处理，实现可扩展的清理。"
      }
    ],
    quiz: {
      question: "Codex 代码漂移的原因是什么？",
      options: ["模型退化", "智能体会复现仓库中已存在的模式包括不理想的", "人类干预导致", "外部依赖变化"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "长时间运行的任务",
    origin: "执行模式",
    meaning: "Codex 在单个任务上可连续工作超过六小时",
    description: "长时间运行的任务是 Codex 智能体的一个关键能力特性。原文在「提高应用程序的可读性」章节末尾描述：「我们经常看到单次 Codex 运行在单个任务上持续工作超过六个小时（通常是在人类睡眠时间）。」这种能力使得复杂的、多步骤的工程任务可以在无人监督的情况下完成。结合应用程序可读性（智能体可以查询日志、操作 UI、验证性能指标），长时间运行的任务能够完成从分析问题到验证修复的完整闭环。这从根本上改变了软件开发的节奏——开发不再局限于工作时间。",
    examples: [
      {
        word: "过夜任务",
        meaning: "在工程师休息时智能体持续工作",
        breakdown: { root: "长时间运行的任务" },
        explanation: "工程师下班前提交任务描述，Codex 在夜间持续工作超过六小时，第二天早上工程师审查完成的工作。"
      },
      {
        word: "多步骤闭环",
        meaning: "在一次长运行中完成分析→修复→验证的完整流程",
        breakdown: { root: "长时间运行的任务" },
        explanation: "智能体不是只写代码，而是在一次长运行中完成问题分析、修复实现、测试编写和验证的完整流程。"
      },
      {
        word: "无人监督执行",
        meaning: "智能体自主处理执行过程中的障碍",
        breakdown: { root: "长时间运行的任务" },
        explanation: "长运行中遇到的构建错误、测试失败等问题由智能体自行诊断和修复，仅在需要人类判断时暂停。"
      }
    ],
    quiz: {
      question: "原文提到 Codex 在单个任务上经常持续工作多久？",
      options: ["1 小时", "3 小时", "超过 6 小时", "24 小时"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "机械强制执行",
    origin: "架构强制",
    meaning: "通过自定义 linter、CI 和结构测试机械地强制执行架构规则",
    description: "机械强制执行是 Harness Engineering 中保持代码库连贯性的关键实践，贯穿「规范架构与品味」等多个章节。与依赖人工代码审查不同，团队将所有架构规则、命名约定和质量标准编码为可自动化执行的 linter 规则、CI 作业和结构测试。原文特别指出这些 linter 本身也是由 Codex 生成的（「自定义的 linter——当然是由 Codex 生成的！」）。不仅验证代码，还验证知识库的更新状况、交叉链接和结构正确性。",
    examples: [
      {
        word: "自定义 linter",
        meaning: "编写项目特定的 lint 规则（由 Codex 生成）",
        breakdown: { root: "机械强制执行" },
        explanation: "原文特别注明 linter 也是由 Codex 生成的，针对项目的分层架构、命名约定等编写自定义 lint 规则。"
      },
      {
        word: "结构测试",
        meaning: "测试代码的组织结构是否符合架构规则",
        breakdown: { root: "机械强制执行" },
        explanation: "不仅测试功能正确性，还测试代码文件的依赖方向、模块边界是否符合预定义的架构模式。"
      },
      {
        word: "文档验证 CI",
        meaning: "CI 自动检查文档的时效性和链接有效性",
        breakdown: { root: "机械强制执行" },
        explanation: "原文明确提到「专职的 linter 和 CI 作业会验证知识库的更新状况、是否已交叉链接且结构正确」。"
      }
    ],
    quiz: {
      question: "机械强制执行的核心优势是什么？",
      options: ["减少代码量", "不依赖人工审查即可保证一致性", "提高代码运行速度", "降低开发成本"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "智能体审核流水线",
    origin: "反馈循环",
    meaning: "智能体审核智能体代码的自动化审核流水线",
    description: "智能体审核流水线是 Ralph Wiggum 循环的工程化实现，将代码审核从人类驱动转变为智能体驱动。原文描述了完整流程：工程师描述任务并运行智能体，智能体打开 PR；指示 Codex 在本地审核自身更改（本地智能体审核）；在本地和云端请求额外的特定智能体审查（云端深度审核）；对任何人工或智能体给出的反馈做出响应并迭代修复。Codex 直接使用标准开发工具（gh、本地脚本和嵌入代码仓库的技能）来收集上下文。",
    examples: [
      {
        word: "本地智能体审核",
        meaning: "快速的本地代码质量检查",
        breakdown: { root: "智能体审核流水线" },
        explanation: "在代码提交前，Codex 在本地审核自身的更改，类似于 pre-commit hook 的检查。"
      },
      {
        word: "云端深度审核",
        meaning: "在云端进行更深入的逻辑和架构审核",
        breakdown: { root: "智能体审核流水线" },
        explanation: "提交 PR 后，在云端请求额外的特定智能体审查，进行更全面的审核。"
      },
      {
        word: "自动迭代修复",
        meaning: "智能体根据审核反馈自动修改并重新提交",
        breakdown: { root: "智能体审核流水线" },
        explanation: "智能体会拉取审核反馈、在行内回复、推送更新，直到所有审核者满意后经常压缩并合并自己的 PR。"
      }
    ],
    quiz: {
      question: "智能体审核流水线的最终效果是什么？",
      options: ["完全取消代码审核", "将审核从人类驱动转为智能体驱动", "减少代码量", "提高编译速度"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "Chrome DevTools 协议集成",
    origin: "可读性工程",
    meaning: "将 Chrome DevTools 协议集成到智能体运行时，让智能体能够操作浏览器",
    description: "Chrome DevTools 协议集成是让智能体理解和操作 Web UI 的关键技术，属于「提高应用程序的可读性」章节的内容。原文描述：「我们还将 Chrome DevTools 协议接入智能体运行时，并创建了用于处理 DOM 快照、屏幕截图和导航的技能（skills）。这使 Codex 能够复现错误、验证修复，并直接推理 UI 的行为。」原文图表标题为「Codex 使用 Chrome DevTools MCP 驱动应用程序以验证其工作」，展示了 Codex 选择目标、快照状态、观察运行时事件、应用修复并循环验证的流程。",
    examples: [
      {
        word: "DOM 快照",
        meaning: "获取页面 DOM 树的结构化快照",
        breakdown: { root: "Chrome DevTools 协议集成" },
        explanation: "智能体通过 Chrome DevTools 协议获取页面的完整 DOM 树快照，分析页面结构和元素属性。"
      },
      {
        word: "屏幕截图分析",
        meaning: "智能体截取页面屏幕截图并进行视觉分析",
        breakdown: { root: "Chrome DevTools 协议集成" },
        explanation: "原文明确提到创建了处理「屏幕截图」（screenshots）的技能，智能体可以截图并分析 UI 状态。"
      },
      {
        word: "导航与交互",
        meaning: "智能体通过 CDP 驱动浏览器进行页面导航和交互",
        breakdown: { root: "Chrome DevTools 协议集成" },
        explanation: "原文图表描述 Codex 会「对触发用户界面路径前后的状态进行快照」，通过 Chrome DevTools 观察运行时事件。"
      }
    ],
    quiz: {
      question: "Chrome DevTools 协议集成使智能体获得了什么新能力？",
      options: ["代码编译", "数据库查询", "操作浏览器 UI", "训练模型"],
      correctAnswer: 2
    }
  },
  {
    id: 20,
    root: "黄金原则",
    origin: "代码维护",
    meaning: "编码到仓库中的带主观意见的机械规则，引导智能体生成高质量代码",
    description: "黄金原则是直接编码到代码仓库中的代码质量和设计原则，出自「熵与垃圾收集」章节。原文将其描述为「带有主观意见的机械规则，旨在保持代码库的可读性和一致性，以便将来运行智能体」。原文给出两个具体例子：(1) 倾向于使用共享的实用程序包，而不是手工编写的辅助工具，以便将不变式集中管理；(2) 不使用「YOLO 式」探测数据——验证边界，或依赖类型化的 SDK，这样智能体就不会意外地基于猜测的结构进行构建。黄金原则的独特之处在于它们被后台智能体持续验证和强制执行。",
    examples: [
      {
        word: "共享实用程序偏好",
        meaning: "优先使用共享的工具包而非手工编写的辅助工具",
        breakdown: { root: "黄金原则" },
        explanation: "原文第一条原则：倾向于使用共享的实用程序包，以便将不变式集中管理，避免在每个模块中重复实现。"
      },
      {
        word: "边界验证",
        meaning: "在数据入口处严格验证，而非 YOLO 式探测数据",
        breakdown: { root: "黄金原则" },
        explanation: "原文第二条原则：不使用「YOLO 式」探测数据，而是验证边界或依赖类型化的 SDK，防止智能体基于猜测构建。"
      },
      {
        word: "品味持续应用",
        meaning: "人类的品味一旦被捕捉，就会持续应用于每一行代码",
        breakdown: { root: "黄金原则" },
        explanation: "原文指出：「人类的品味一旦被捕捉，就会持续应用于每一行代码。这也使我们能够每天发现并解决不良模式。」"
      }
    ],
    quiz: {
      question: "黄金原则与普通编码建议的区别是什么？",
      options: ["没有区别", "黄金原则被后台智能体持续验证和强制执行", "黄金原则只是文档", "黄金原则只适用于人类"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "Git Worktree",
    origin: "执行模式",
    meaning: "利用 Git Worktree 让智能体为每次更改启动独立的应用实例",
    description: "Git Worktree 是 Harness Engineering 中实现智能体并行工作的关键技术。原文描述：「我们令应用程序可以根据 git worktree 启动，因此 Codex 可以为每次更改启动并驱动一个实例。」通过 git worktree，每个智能体任务可以在独立的工作目录中运行，互不干扰。原文还提到对应的可观测性堆栈对任何给定的工作树来说都是临时的——「Codex 在该应用程序的一个完全独立的版本上运行，一旦任务完成，该版本的所有内容，包括日志和指标，都会被删除。」",
    examples: [
      {
        word: "独立工作目录",
        meaning: "每个智能体任务运行在独立的 git worktree 中",
        breakdown: { root: "Git Worktree" },
        explanation: "git worktree 允许从同一个仓库创建多个工作目录，每个智能体在自己的目录中操作，互不干扰。"
      },
      {
        word: "并行开发",
        meaning: "多个智能体同时处理不同的任务",
        breakdown: { root: "Git Worktree" },
        explanation: "一个智能体修复前端 Bug，另一个实现后端功能，各自在独立的 worktree 中工作。"
      },
      {
        word: "临时环境隔离",
        meaning: "每个工作树的环境和数据在任务完成后被删除",
        breakdown: { root: "Git Worktree" },
        explanation: "原文明确提到一旦任务完成，该版本的所有内容包括日志和指标都会被删除，保证完全隔离。"
      }
    ],
    quiz: {
      question: "Git Worktree 在 Harness Engineering 中的主要作用是什么？",
      options: ["版本管理", "让多个智能体并行工作且互不干扰", "代码备份", "分支管理"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "质量等级评分",
    origin: "代码维护",
    meaning: "后台智能体持续评估和更新代码库的质量等级",
    description: "质量等级评分是「熵与垃圾收集」章节中提到的评估机制。原文提到：「定期运行一组后台 Codex 任务，扫描偏差、更新质量等级（quality grades），并发起有针对性的重构 PR。」此外，原文还提到存在专门的质量文档：QUALITY_SCORE.md 文件会「对每个产品领域和架构层进行评分，并随着时间的推移追踪差距」。这种机制让团队能够量化代码健康度，识别需要优先重构的区域。",
    examples: [
      {
        word: "自动质量评估",
        meaning: "后台智能体自动评估代码质量并打分",
        breakdown: { root: "质量等级评分" },
        explanation: "后台任务定期扫描代码库，从多个维度评估代码质量，生成量化的质量等级报告。"
      },
      {
        word: "QUALITY_SCORE.md",
        meaning: "对每个产品领域和架构层进行评分的文档",
        breakdown: { root: "质量等级评分" },
        explanation: "原文提到代码仓库中有 QUALITY_SCORE.md 文件，对每个领域和架构层评分并追踪差距。"
      },
      {
        word: "针对性重构",
        meaning: "基于质量等级数据优先重构最需要改进的区域",
        breakdown: { root: "质量等级评分" },
        explanation: "质量等级最低的模块优先被安排重构任务，确保有限的重构资源用在刀刃上。"
      }
    ],
    quiz: {
      question: "质量等级评分机制的直接目的是什么？",
      options: ["加快编码速度", "量化代码健康度并识别重构优先级", "减少智能体数量", "替代人工测试"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "增量债务偿还",
    origin: "代码维护",
    meaning: "以小增量持续偿还技术债务，而非累积后一次性解决",
    description: "增量债务偿还是「熵与垃圾收集」章节中处理技术债务的核心策略。原文用了一个精彩的比喻：「技术债务就像一笔高息贷款：不断地以小额贷款的方式偿还债务，总比让债务不断累积，再痛苦地一次解决要好得多。」在智能体优先模式下，后台 Codex 任务持续扫描代码偏差并发起有针对性的小型重构 PR，大多数可以在一分钟内审查并自动合并。原文强调：「人类的品味一旦被捕捉，就会持续应用于每一行代码。这也使我们能够每天发现并解决不良模式，而不是让它们在代码库中传播数天或数周。」",
    examples: [
      {
        word: "小型重构 PR",
        meaning: "每次只修复一个小的技术债务点",
        breakdown: { root: "增量债务偿还" },
        explanation: "后台智能体发起的重构 PR 范围很小（如统一一个命名约定、提取一个共享函数），大多一分钟内可审查合并。"
      },
      {
        word: "高息贷款比喻",
        meaning: "技术债务就像高息贷款，小额持续偿还优于累积",
        breakdown: { root: "增量债务偿还" },
        explanation: "原文比喻：不断地以小额贷款的方式偿还债务，总比让债务不断累积再痛苦地一次解决要好得多。"
      },
      {
        word: "每日模式修正",
        meaning: "每天发现并解决不良模式",
        breakdown: { root: "增量债务偿还" },
        explanation: "原文强调品味一旦被捕捉就持续应用，使团队能每天修正不良模式，而非让它们在代码库中传播数天或数周。"
      }
    ],
    quiz: {
      question: "增量债务偿还相比传统方式的核心优势是什么？",
      options: ["消除所有技术债务", "避免债务累积后痛苦地一次解决", "减少代码量", "提高运行速度"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "重新定义工程师的角色",
    origin: "核心理念",
    meaning: "工程师角色从编写代码转变为设计环境和搭建支撑结构",
    description: "「重新定义工程师的角色」（Redefining the role of the engineer）是原文的一个完整章节标题。原文描述：「缺乏人类亲手编码，引入了一种不同类型的工程工作，聚焦于系统、支撑结构和效能放大。」（introduced a different kind of engineering work, focused on systems, scaffolding, and leverage）核心工作包括：协助智能体完成有用的工作（enabling the agents to do useful work）、设计环境和反馈回路、将用户反馈转化为验收标准并验证结果。原文还提到一个重要洞察：「当智能体遇到困难时，我们将其视为一个信号：识别缺失的内容——工具、护栏、文档——并将其反馈到代码仓库中，始终由 Codex 自己编写修复。」（identify what is missing—tools, guardrails, documentation—and feed it back into the repository, always by having Codex itself write the fix）人类始终参与其中，但工作的抽象层次与过去不同。",
    examples: [
      {
        word: "环境设计师",
        meaning: "设计智能体高效工作的环境和工具",
        breakdown: { root: "重新定义工程师的角色" },
        explanation: "工程师的核心产出不再是代码，而是让智能体能够高效工作的环境——工具链、文档体系、架构规则和反馈机制。"
      },
      {
        word: "意图明确者",
        meaning: "通过提示词精确描述产品意图",
        breakdown: { root: "重新定义工程师的角色" },
        explanation: "原文描述工程师的主要工作是「设计环境、明确意图和构建反馈回路」，需要精确描述意图而非自己编码。"
      },
      {
        word: "信号诊断者",
        meaning: "将智能体的困难视为信号，诊断环境中的缺失",
        breakdown: { root: "重新定义工程师的角色" },
        explanation: "原文的关键洞察：智能体遇到困难时不是智能体的问题，而是环境中缺少了工具、指导或文档的信号。"
      }
    ],
    quiz: {
      question: "在 Harness Engineering 中，工程师最重要的新技能是什么？",
      options: ["编写更快的代码", "设计智能体高效工作的环境", "学习更多编程语言", "手动测试"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "我们仍在学习的内容",
    origin: "未来探索",
    meaning: "Harness Engineering 中尚待解决的开放性问题",
    description: "「我们仍在学习的内容」（What we're still learning）是原文最后一个章节。原文提出三大核心挑战：(1) 架构连贯性——「我们尚不清楚的是，在一个完全由智能体生成的系统中，架构连贯性会如何随着年份的推移而演变」（how architectural coherence evolves over years）；(2) 人类判断力的效能放大——「我们仍在学习人类的判断力在哪些方面能发挥最大作用，以及如何对这种判断力进行编码，使其产生复利效应」（how to encode that judgment so it compounds）；(3) 模型演进——「我们也不知道，随着时间的推移，模型的功能不断增强，这一系统将如何演变。」原文最后总结：「构建软件仍然需要纪律，但纪律更多地体现在支撑结构上，而不是代码上。」（the discipline shows up more in the scaffolding rather than the code）",
    examples: [
      {
        word: "长期架构连贯性",
        meaning: "智能体生成的代码库能否长期保持架构连贯",
        breakdown: { root: "我们仍在学习的内容" },
        explanation: "目前的实验只有五个月，尚不清楚完全由智能体生成的代码库在更长时间跨度中是否能保持架构连贯性。"
      },
      {
        word: "人类判断力的效能放大",
        meaning: "如何将人类判断力编码为可发挥更大作用的系统",
        breakdown: { root: "我们仍在学习的内容" },
        explanation: "人类在哪些决策点上的介入价值最大？如何对这种判断力进行编码使其发挥复利效应？"
      },
      {
        word: "模型能力演进",
        meaning: "随着模型变强，整个工程系统如何适应",
        breakdown: { root: "我们仍在学习的内容" },
        explanation: "更强的模型可能需要更少的支撑结构或不同的支撑结构，整个方法论需要随模型进化而调整。"
      }
    ],
    quiz: {
      question: "以下哪项不是原文提到的仍在学习的内容？",
      options: ["长期架构连贯性", "人类判断力的效能放大", "模型能力演进", "智能体替代人类工程师"],
      correctAnswer: 3
    }
  }
];
