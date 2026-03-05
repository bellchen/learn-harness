const WordRoots = [
  {
    id: 1,
    root: "Harness Engineering",
    origin: "核心理念",
    meaning: "在 Agent-First 世界中，通过搭建脚手架让 AI 代理高效构建软件的工程方法论",
    description: "Harness Engineering 是 OpenAI 提出的全新工程范式，核心思想是「人类掌舵，代理执行」（Humans steer, agents execute）。OpenAI 工程团队用 5 个月时间、0 行手写代码，利用 Codex 构建并发布了一个拥有内部日常用户和外部 Alpha 测试者的完整产品。团队生成了约 100 万行代码，合并了约 1,500 个 PR。工程师的角色从编写代码转变为设计环境、指定意图和构建反馈循环。构建软件仍然需要纪律，但这种纪律更多体现在脚手架（scaffolding）上——工具、抽象和保持代码库连贯的反馈循环。",
    examples: [
      {
        word: "零手写代码实验",
        meaning: "完全由 AI 代理生成所有代码的产品开发实验",
        breakdown: { root: "Harness Engineering" },
        explanation: "OpenAI 团队在 5 个月内用 Codex 生成约 100 万行代码，合并约 1,500 个 PR，构建速度估计为手写的 10 倍。"
      },
      {
        word: "人类掌舵",
        meaning: "工程师负责设计环境和意图，代理负责执行",
        breakdown: { root: "Harness Engineering" },
        explanation: "工程师的核心工作不再是写代码，而是使代理能够完成有用的工作——提供工具、抽象概念和内部结构。"
      },
      {
        word: "脚手架纪律",
        meaning: "工程纪律从编码转向搭建支撑代理工作的基础设施",
        breakdown: { root: "Harness Engineering" },
        explanation: "最大挑战在于设计环境、反馈循环和控制系统，帮助代理大规模构建和维护复杂、可靠的软件。"
      }
    ],
    quiz: {
      question: "OpenAI Harness Engineering 的核心理念是什么？",
      options: ["代理完全自主工作", "人类掌舵，代理执行", "取消人类工程师", "用规则引擎替代AI"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "Agent-First Development",
    origin: "核心理念",
    meaning: "以 AI 代理为主要代码生产者的软件开发模式",
    description: "Agent-First Development 是 Harness Engineering 的开发模式，人类几乎完全通过提示词与系统交互。在这种模式下，代码库中的所有内容均由 Codex 代理生成，包括：产品代码和测试、CI 配置和发布工具、内部开发工具、文档和设计历史、评估工具、审查评论和回复、管理仓库本身的脚本，甚至生产仪表板定义文件。最初由 3 名工程师驱动 Codex，后增长至 7 名，平均每位工程师每天处理 3.5 个 PR。",
    examples: [
      {
        word: "全代理生成",
        meaning: "代码库中的所有内容都由 AI 代理生成",
        breakdown: { root: "Agent-First Development" },
        explanation: "不仅是产品代码，还包括测试、CI配置、发布工具、文档、审查评论甚至管理仓库本身的脚本，全部由 Codex 完成。"
      },
      {
        word: "提示词交互",
        meaning: "人类通过提示词而非代码与系统交互",
        breakdown: { root: "Agent-First Development" },
        explanation: "工程师不再直接编写代码，而是通过精心设计的提示词向 Codex 描述意图，由代理翻译为可执行代码。"
      },
      {
        word: "10倍构建速度",
        meaning: "Agent-First 模式下构建速度约为手写的 10 倍",
        breakdown: { root: "Agent-First Development" },
        explanation: "3-7 名工程师在 5 个月内完成约 100 万行代码和 1500 个 PR，效率远超传统手写开发。"
      }
    ],
    quiz: {
      question: "在 Agent-First Development 中，以下哪项不是由代理生成的？",
      options: ["CI 配置", "审查评论", "产品代码", "以上全部都是代理生成的"],
      correctAnswer: 3
    }
  },
  {
    id: 3,
    root: "Deep-First Decomposition",
    origin: "工程方法",
    meaning: "将大目标分解为更小的构建块，逐步解锁复杂任务",
    description: "Deep-First Decomposition（深度优先分解）是 Harness Engineering 中指导代理工作的核心方法。工程师将大的产品目标分解为更小的构建块——设计、代码、审查、测试等——然后指示代理构建这些模块。通过组合这些小模块，逐步解锁更复杂的任务。这种方法确保每个代理任务的范围足够小且明确，避免代理在过大的任务空间中迷失方向，同时通过模块的组合实现复杂功能。",
    examples: [
      {
        word: "任务分解",
        meaning: "将复杂功能拆分为可独立执行的小任务",
        breakdown: { root: "Deep-First Decomposition" },
        explanation: "不是一次性要求代理完成整个功能，而是拆分为设计文档编写、核心逻辑实现、测试编写、代码审查等独立步骤。"
      },
      {
        word: "构建块组合",
        meaning: "通过组合小模块逐步解锁复杂能力",
        breakdown: { root: "Deep-First Decomposition" },
        explanation: "先让代理构建基础工具和抽象，再利用这些基础能力处理更复杂的任务，形成能力的递进积累。"
      },
      {
        word: "明确范围控制",
        meaning: "确保每个代理任务的范围足够小且明确",
        breakdown: { root: "Deep-First Decomposition" },
        explanation: "代理在范围明确的任务上表现最好，过大的任务会导致输出质量下降，需要工程师精心控制每次任务的边界。"
      }
    ],
    quiz: {
      question: "Deep-First Decomposition 的核心原则是什么？",
      options: ["一次完成所有工作", "将大目标分解为小构建块", "只关注测试", "让代理自由发挥"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "Ralph Wiggum Loop",
    origin: "反馈循环",
    meaning: "代理自我审查、迭代修复直到所有审查者满意的闭环机制",
    description: "Ralph Wiggum Loop 是 OpenAI 团队命名的一种代理审查闭环机制。流程是：指示 Codex 在本地审查自己的更改，请求特定的代理审查（本地和云端），然后根据反馈进行迭代，直到所有审查者满意。这种机制将大部分审查工作推向了「代理对代理」（agent-to-agent）模式，大幅减少了人类审查的负担。关键在于代理不仅能生成代码，还能审查代码并根据审查反馈自我修正，形成自驱动的质量保证循环。",
    examples: [
      {
        word: "自我审查",
        meaning: "代理审查自己生成的代码变更",
        breakdown: { root: "Ralph Wiggum Loop" },
        explanation: "Codex 在提交 PR 前先在本地审查自己的变更，检查代码质量、风格一致性和潜在问题。"
      },
      {
        word: "代理对代理审查",
        meaning: "将代码审查工作从人类转移到代理之间",
        breakdown: { root: "Ralph Wiggum Loop" },
        explanation: "一个代理生成代码，另一个代理审查并提出修改意见，生成者再根据反馈迭代修正，最大限度减少人类审查负担。"
      },
      {
        word: "迭代至满意",
        meaning: "反复修正直到所有审查者（代理和人类）满意",
        breakdown: { root: "Ralph Wiggum Loop" },
        explanation: "不是一次性提交就完成，而是根据审查反馈持续迭代改进，直到代码达到所有审查标准后才合并。"
      }
    ],
    quiz: {
      question: "Ralph Wiggum Loop 的最终目标是什么？",
      options: ["取消代码审查", "将审查推向代理对代理模式", "只保留人类审查", "加快编码速度"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "Application Legibility",
    origin: "可读性工程",
    meaning: "让应用的 UI、日志和指标对 AI 代理直接可读",
    description: "Application Legibility（应用可读性）是突破人类 QA 容量瓶颈的关键策略。OpenAI 团队致力于让应用的 UI、日志和指标对 Codex 直接「可读」。这包括三个方面：通过 Git Worktree 让代理可以为每次更改启动独立的应用实例；将 Chrome DevTools Protocol 接入代理运行时，创建处理 DOM 快照、截图和导航的技能；通过本地可观测性堆栈将日志、指标和追踪暴露给代理。这使得代理可以复现 Bug、验证修复并直接推理 UI 行为。",
    examples: [
      {
        word: "Git Worktree 启动",
        meaning: "代理通过 git worktree 为每次更改启动独立实例",
        breakdown: { root: "Application Legibility" },
        explanation: "每个代理任务都可以在独立的工作树中启动应用实例，互不干扰，支持并行测试多个更改。"
      },
      {
        word: "Chrome DevTools Protocol",
        meaning: "让代理能够直接与浏览器交互",
        breakdown: { root: "Application Legibility" },
        explanation: "将 CDP 接入代理运行时，创建处理 DOM 快照、截图和导航的技能，使 Codex 可以复现 Bug、验证修复并推理 UI 行为。"
      },
      {
        word: "可观测性集成",
        meaning: "将日志、指标和追踪暴露给代理",
        breakdown: { root: "Application Legibility" },
        explanation: "代理可以使用 LogQL 查询日志、PromQL 查询指标，支持如「确保服务启动在 800ms 内完成」这样的性能验证提示。"
      }
    ],
    quiz: {
      question: "以下哪项不是 Application Legibility 的组成部分？",
      options: ["Git Worktree 启动", "Chrome DevTools Protocol 集成", "可观测性集成", "模型训练接口"],
      correctAnswer: 3
    }
  },
  {
    id: 6,
    root: "Repository Knowledge",
    origin: "知识管理",
    meaning: "将仓库知识作为系统记录（System of Record），让代理高效获取上下文",
    description: "Repository Knowledge 是 Harness Engineering 中的上下文管理策略，核心思想是「地图而非百科全书」（Maps, not encyclopedias）。团队避免使用单一的大型 AGENTS.md 指令文件，因为它会占用稀缺的上下文资源、导致指导失效、容易腐烂且难以验证。取而代之的是将 AGENTS.md（约 100 行）作为「目录」，指向 docs/ 目录中更深层次的事实来源。代理从一个小而稳定的入口点开始，被教导下一步去哪里查找，而不是一开始就被信息淹没。",
    examples: [
      {
        word: "地图策略",
        meaning: "AGENTS.md 作为目录指向深层文档，而非巨型百科",
        breakdown: { root: "Repository Knowledge" },
        explanation: "AGENTS.md 保持约 100 行精简，作为入口目录指向 docs/ 中的 design-docs/、exec-plans/、product-specs/ 等详细文档。"
      },
      {
        word: "渐进式披露",
        meaning: "代理从小入口开始，按需查找深层知识",
        breakdown: { root: "Repository Knowledge" },
        explanation: "代理不需要一次加载所有上下文，而是从入口文件出发，根据当前任务需要逐步发现和加载相关文档。"
      },
      {
        word: "文档园艺代理",
        meaning: "自动扫描和修复过时文档的后台代理",
        breakdown: { root: "Repository Knowledge" },
        explanation: "专门的代理任务会扫描过时或不再反映实际代码行为的文档，并自动打开修复 PR，确保文档始终与代码同步。"
      }
    ],
    quiz: {
      question: "OpenAI 团队为什么避免使用单一的大型 AGENTS.md？",
      options: ["技术限制", "占用上下文资源且容易失效", "团队规模太小", "Codex 不支持 Markdown"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "Context as Existence",
    origin: "知识管理",
    meaning: "代理无法在上下文中访问的内容，对它来说不存在",
    description: "Context as Existence（上下文即存在）是 Agent-First 开发的核心认知。代理在运行时无法在上下文中访问的内容，对它来说实际上不存在。因此，知识必须存在于仓库本地的版本化产物中——代码、Markdown、Schema、可执行计划——而不是 Google Docs 或聊天记录中。团队随着时间推移，将更多上下文（如架构模式的对齐讨论）推入仓库，就像入职新团队成员一样。技术选择上，偏好可以在仓库内部完全内化和推理的依赖项，倾向于「无聊」的技术——可组合、API 稳定、训练集中有代表。",
    examples: [
      {
        word: "版本化产物",
        meaning: "所有知识以代码、Markdown、Schema 等形式存在于仓库中",
        breakdown: { root: "Context as Existence" },
        explanation: "架构决策、设计讨论、产品规格等都不能只存在于聊天记录或外部文档中，必须版本化存储在代码仓库里。"
      },
      {
        word: "无聊技术偏好",
        meaning: "选择可组合、API 稳定、训练集中有代表的技术",
        breakdown: { root: "Context as Existence" },
        explanation: "代理对训练数据中常见的技术表现更好，「无聊」但稳定的技术比新潮但冷门的技术更适合 Agent-First 开发。"
      },
      {
        word: "上下文入职",
        meaning: "像入职新员工一样持续向仓库注入上下文",
        breakdown: { root: "Context as Existence" },
        explanation: "随着项目推进，不断将架构讨论、设计决策等隐性知识显性化并存入仓库，让代理可以在任务中访问。"
      }
    ],
    quiz: {
      question: "「Context as Existence」原则要求知识存储在哪里？",
      options: ["Google Docs", "聊天记录", "仓库本地的版本化产物", "外部Wiki"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "Layered Architecture",
    origin: "架构强制",
    meaning: "严格分层的代码架构：Types → Config → Repo → Service → Runtime → UI",
    description: "Layered Architecture 是 OpenAI 团队在 Harness Engineering 中强制执行的代码架构模式。每个业务领域分为固定层：Types → Config → Repo → Service → Runtime → UI，代码只能「向前」依赖（即上层只能依赖下层），横切关注点通过单一接口进入。这些规则通过自定义 linter 和结构测试机械地强制执行。代理在具有严格边界和可预测结构的环境中效果最好，这种分层架构为代理提供了清晰的代码组织框架。",
    examples: [
      {
        word: "单向依赖",
        meaning: "代码只能向前依赖，上层依赖下层",
        breakdown: { root: "Layered Architecture" },
        explanation: "UI 层可以依赖 Service 层，但 Service 层不能反向依赖 UI 层，确保代码依赖关系清晰可预测。"
      },
      {
        word: "横切关注点",
        meaning: "通过单一接口统一处理跨层关注点",
        breakdown: { root: "Layered Architecture" },
        explanation: "日志、监控、认证等横切关注点不散布在各层中，而是通过统一的接口注入，减少代码耦合。"
      },
      {
        word: "机械强制执行",
        meaning: "通过自定义 linter 和结构测试自动验证架构规则",
        breakdown: { root: "Layered Architecture" },
        explanation: "不依赖人工审查来保证架构一致性，而是编写自动化规则检测违规的依赖关系和代码组织。"
      }
    ],
    quiz: {
      question: "在分层架构中，以下哪个依赖方向是正确的？",
      options: ["Types 依赖 UI", "Service 依赖 Runtime", "UI 依赖 Service", "Config 依赖 Repo"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "Taste Invariants",
    origin: "架构强制",
    meaning: "将代码品味和风格规范编码为可自动验证的不变量",
    description: "Taste Invariants（品味不变量）是 Harness Engineering 中保持代码库一致性的方法。团队不做微观管理，而是通过强制执行不变量来保持连贯性。静态强制执行的内容包括：结构化日志、Schema 和类型的命名约定、文件大小限制以及平台特定的可靠性要求。关键创新在于，lint 错误消息被编写为向代理上下文注入修复指令——这意味着当代理违反规则时，它会自动获得如何修复的指导。权衡策略是在中心边界强制执行，允许局部自治。",
    examples: [
      {
        word: "Lint 修复指令",
        meaning: "lint 错误消息中嵌入代理可读的修复指导",
        breakdown: { root: "Taste Invariants" },
        explanation: "自定义 linter 的错误消息不仅描述问题，还包含具体的修复指令，代理看到错误后可以直接修复，无需人工干预。"
      },
      {
        word: "中心强制局部自治",
        meaning: "在核心边界严格执行，细节允许灵活",
        breakdown: { root: "Taste Invariants" },
        explanation: "架构层级、命名约定等核心规则严格强制执行，但代码风格等细节允许代理自由发挥，只要输出正确且可维护。"
      },
      {
        word: "结构化日志",
        meaning: "强制所有日志使用结构化格式",
        breakdown: { root: "Taste Invariants" },
        explanation: "通过 lint 规则要求所有日志输出使用结构化格式，便于代理通过 LogQL 查询和分析日志内容。"
      }
    ],
    quiz: {
      question: "Taste Invariants 中 lint 错误消息的独特设计是什么？",
      options: ["只显示错误行号", "嵌入代理可读的修复指令", "自动删除违规代码", "发送邮件通知人类"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "Docs Structure",
    origin: "知识管理",
    meaning: "结构化的仓库文档体系，作为代理的知识来源",
    description: "Docs Structure 是仓库知识管理的具体实现。OpenAI 团队将文档按功能组织在 docs/ 目录下，包括：design-docs/（设计文档、核心信念）、exec-plans/（活动计划、已完成计划、技术债务跟踪器）、generated/（如数据库模式）、product-specs/（产品规格说明）、references/（设计系统引用、工具引用如 nixpacks、uv）。此外还有 DESIGN.md、FRONTEND.md、QUALITY_SCORE.md、RELIABILITY.md、SECURITY.md 等专题文档。使用专用 linter 和 CI 作业验证知识库的更新、交叉链接和结构正确性。",
    examples: [
      {
        word: "design-docs/",
        meaning: "存储设计文档和核心信念的目录",
        breakdown: { root: "Docs Structure" },
        explanation: "记录架构决策、设计理念和核心原则，代理在进行架构相关任务时首先参考这些文档。"
      },
      {
        word: "exec-plans/",
        meaning: "存储执行计划和技术债务跟踪的目录",
        breakdown: { root: "Docs Structure" },
        explanation: "包含当前活动计划、已完成计划的归档和技术债务跟踪器，帮助代理了解项目的优先级和待处理事项。"
      },
      {
        word: "CI 验证文档",
        meaning: "使用 CI 自动验证文档的时效性和正确性",
        breakdown: { root: "Docs Structure" },
        explanation: "专用的 linter 和 CI 作业检查文档是否过时、交叉链接是否有效、结构是否正确，防止文档腐烂。"
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
    root: "Agent Readability",
    origin: "可读性工程",
    meaning: "优先为代理优化代码的可读性，而非人类审美偏好",
    description: "Agent Readability（代理可读性）是 Harness Engineering 的核心设计目标。既然代码库完全由代理生成，就应该首先优化 Codex 的可读性。这意味着技术选择偏好可以在仓库内部完全内化和推理的依赖项和抽象。有时让代理重新实现子集功能比绕过公共库的不透明上游行为更便宜——例如团队实现了自己的 map-with-concurrency 辅助工具，而不是使用通用的 p-limit 包，以便与 OpenTelemetry 集成。代码风格可能不总是符合人类偏好，只要输出正确、可维护且对未来代理运行可读即可。",
    examples: [
      {
        word: "内部重新实现",
        meaning: "代理重新实现功能子集而非引用不透明的外部库",
        breakdown: { root: "Agent Readability" },
        explanation: "团队实现了自己的 map-with-concurrency 工具替代 p-limit，因为内部实现对代理来说更透明可推理，且更易与 OpenTelemetry 集成。"
      },
      {
        word: "代理优先可读",
        meaning: "代码首先优化代理的理解能力",
        breakdown: { root: "Agent Readability" },
        explanation: "代码组织、命名和结构优先考虑代理能否高效理解和修改，人类美学偏好退居其次。"
      },
      {
        word: "仓库内化推理",
        meaning: "选择代理可以在仓库内部完全理解的技术",
        breakdown: { root: "Agent Readability" },
        explanation: "偏好「无聊」技术（API 稳定、训练集中有代表），避免需要大量外部知识才能理解的新潮框架。"
      }
    ],
    quiz: {
      question: "为什么团队选择自己实现 map-with-concurrency 而非使用 p-limit？",
      options: ["p-limit 有 Bug", "内部实现对代理更透明可推理", "p-limit 性能差", "团队不允许使用开源库"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "Observability Stack",
    origin: "可读性工程",
    meaning: "本地可观测性堆栈，让代理能够查询日志、指标和追踪",
    description: "Observability Stack（可观测性堆栈）是 Application Legibility 的核心组件之一。OpenAI 团队搭建了本地的可观测性基础设施，将日志、指标和追踪暴露给 Codex 代理。代理可以使用 LogQL 查询日志、使用 PromQL 查询指标，支持诸如「确保服务启动在 800ms 内完成」或「关键用户旅程的任何 span 不超过 2 秒」这样的性能验证提示。这使得代理不仅能写代码，还能验证代码的运行时行为是否符合性能要求。",
    examples: [
      {
        word: "LogQL 查询",
        meaning: "代理使用 LogQL 语法查询和分析日志",
        breakdown: { root: "Observability Stack" },
        explanation: "Codex 可以直接使用 LogQL 查询日志，定位错误、分析行为模式，就像人类工程师使用 Grafana 一样。"
      },
      {
        word: "PromQL 指标",
        meaning: "代理使用 PromQL 查询性能指标",
        breakdown: { root: "Observability Stack" },
        explanation: "代理可以通过 PromQL 查询 Prometheus 指标，验证如「服务启动时间不超过 800ms」等性能约束。"
      },
      {
        word: "性能验证提示",
        meaning: "用自然语言描述性能要求，代理自动验证",
        breakdown: { root: "Observability Stack" },
        explanation: "工程师可以用提示词描述性能目标，如「关键用户旅程的任何 span 不超过 2 秒」，代理自动查询指标验证。"
      }
    ],
    quiz: {
      question: "OpenAI 团队的代理使用什么语言查询日志？",
      options: ["SQL", "LogQL", "GraphQL", "KQL"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "End-to-End Autonomy",
    origin: "自主性提升",
    meaning: "代理可以端到端地驱动从 Bug 复现到 PR 合并的完整流程",
    description: "End-to-End Autonomy（端到端自主性）是 Harness Engineering 追求的里程碑。随着开发循环的更多部分被直接编码到系统中，Codex 达到了一个重要里程碑：给定一个提示，代理可以完成完整流程——验证代码库状态、复现 Bug、录制失败视频、实施修复、验证修复、录制成功视频、打开 PR、响应审查反馈、检测并修复构建失败、仅在需要判断时升级给人类、最终合并更改。这展示了 AI 代理在软件工程中的最高自主级别。",
    examples: [
      {
        word: "Bug 复现与视频录制",
        meaning: "代理自动复现 Bug 并录制视频证据",
        breakdown: { root: "End-to-End Autonomy" },
        explanation: "代理通过 CDP 驱动浏览器复现报告的 Bug，录制展示失败的视频作为证据，然后实施修复并录制第二个视频展示解决结果。"
      },
      {
        word: "人类升级机制",
        meaning: "仅在需要判断时才升级给人类",
        breakdown: { root: "End-to-End Autonomy" },
        explanation: "代理在整个流程中自主决策，只有在遇到需要产品判断或权衡取舍的决策时，才将问题升级给人类工程师。"
      },
      {
        word: "构建失败自修复",
        meaning: "代理自动检测并修复 CI 构建失败",
        breakdown: { root: "End-to-End Autonomy" },
        explanation: "提交 PR 后如果 CI 构建失败，代理会自动分析失败原因并推送修复提交，无需人工干预。"
      }
    ],
    quiz: {
      question: "在端到端自主流程中，代理什么时候需要人类介入？",
      options: ["每次代码审查", "每次构建失败", "仅在需要判断时", "从不需要"],
      correctAnswer: 2
    }
  },
  {
    id: 14,
    root: "Throughput Philosophy",
    origin: "合并哲学",
    meaning: "高吞吐量下「修正便宜，等待昂贵」的合并策略",
    description: "Throughput Philosophy 是 Codex 高吞吐量带来的合并哲学变革。随着代理产出速度远超人类审查能力，传统的工程规范变得适得其反。新哲学是：PR 存活时间短，测试错误通常通过后续运行解决而不是无限期阻塞进度。核心认知是「修正便宜，等待昂贵」（Fixes are cheap; waiting is expensive）——在代理吞吐量远超人类注意力的系统中，快速合并加后续修正比阻塞等待完美更高效。",
    examples: [
      {
        word: "短存活 PR",
        meaning: "PR 快速审查快速合并，不长时间阻塞",
        breakdown: { root: "Throughput Philosophy" },
        explanation: "代理生成的 PR 应该快速被审查和合并，避免大量 PR 堆积等待人类审查，阻碍整体开发进度。"
      },
      {
        word: "后续修复策略",
        meaning: "测试错误通过后续代理运行解决而非阻塞",
        breakdown: { root: "Throughput Philosophy" },
        explanation: "小的测试错误不阻塞 PR 合并，而是在下一个代理任务中作为修复目标，保持开发流水线的持续流动。"
      },
      {
        word: "修正便宜等待昂贵",
        meaning: "代理修复 Bug 的成本远低于等待完美的成本",
        breakdown: { root: "Throughput Philosophy" },
        explanation: "代理可以在几分钟内完成修复，而阻塞一个 PR 等待人类审查可能浪费数小时的代理产能。"
      }
    ],
    quiz: {
      question: "Throughput Philosophy 的核心认知是什么？",
      options: ["代码质量最重要", "修正便宜，等待昂贵", "每个 PR 必须完美", "人类审查不可替代"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "Entropy & Garbage Collection",
    origin: "代码维护",
    meaning: "应对代理生成代码中的模式漂移和技术债务的清理机制",
    description: "Entropy & Garbage Collection（熵与垃圾回收）是 Harness Engineering 中应对完全代理自主性引入的新问题。Codex 会复制仓库中现有的模式——包括不优化的模式——导致代码漂移（drift）。解决方案是将「黄金原则」（如偏好共享实用程序包、验证边界而不是 YOLO-style 探测数据）直接编码到仓库中，并建立定期的清理过程。后台 Codex 任务扫描偏差，更新质量等级，打开针对性的重构 PR。大多数可以在一分钟内审查并自动合并，实现技术债务的持续小增量偿还。",
    examples: [
      {
        word: "黄金原则编码",
        meaning: "将最佳实践直接编码到仓库中",
        breakdown: { root: "Entropy & Garbage Collection" },
        explanation: "如「偏好共享实用程序包」「验证边界而不是 YOLO-style 探测数据」等原则写入文档，代理生成代码时自动遵守。"
      },
      {
        word: "后台扫描代理",
        meaning: "后台 Codex 任务扫描代码偏差并自动修复",
        breakdown: { root: "Entropy & Garbage Collection" },
        explanation: "专门的后台任务定期扫描代码库，发现偏离黄金原则的代码，自动打开重构 PR，大多数可在一分钟内审查合并。"
      },
      {
        word: "持续增量偿还",
        meaning: "以小增量连续偿还技术债务",
        breakdown: { root: "Entropy & Garbage Collection" },
        explanation: "不让技术债务累积并在痛苦的爆发中解决，而是通过后台代理任务持续地、小增量地偿还，保持代码库健康。"
      }
    ],
    quiz: {
      question: "Codex 代码漂移的原因是什么？",
      options: ["模型退化", "代理复制仓库中现有的模式包括不优化的", "人类干预导致", "外部依赖变化"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "Long-Running Tasks",
    origin: "执行模式",
    meaning: "Codex 在单个任务上可连续工作长达 6 小时",
    description: "Long-Running Tasks 是 Codex 代理的一个关键能力特性。Codex 可以在单个任务上连续工作长达 6 小时，通常在人类睡眠时执行。这种能力使得复杂的、多步骤的工程任务可以在无人监督的情况下完成。结合 Application Legibility（代理可以查询日志、操作 UI、验证性能指标），长时间运行的任务能够完成从分析问题到验证修复的完整闭环。这从根本上改变了软件开发的节奏——开发不再局限于工作时间。",
    examples: [
      {
        word: "过夜任务",
        meaning: "在工程师休息时代理持续工作",
        breakdown: { root: "Long-Running Tasks" },
        explanation: "工程师下班前提交任务描述，Codex 在夜间持续工作 6 小时，第二天早上工程师审查完成的工作。"
      },
      {
        word: "多步骤闭环",
        meaning: "在一次长运行中完成分析→修复→验证的完整流程",
        breakdown: { root: "Long-Running Tasks" },
        explanation: "代理不是只写代码，而是在一次长运行中完成问题分析、修复实现、测试编写和验证的完整流程。"
      },
      {
        word: "无人监督执行",
        meaning: "代理自主处理执行过程中的障碍",
        breakdown: { root: "Long-Running Tasks" },
        explanation: "长运行中遇到的构建错误、测试失败等问题由代理自行诊断和修复，仅在需要人类判断时暂停。"
      }
    ],
    quiz: {
      question: "Codex 在单个任务上最长可以连续工作多久？",
      options: ["1小时", "3小时", "6小时", "24小时"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "Mechanical Enforcement",
    origin: "架构强制",
    meaning: "通过自定义 linter、CI 和结构测试机械地强制执行架构规则",
    description: "Mechanical Enforcement（机械强制）是 Harness Engineering 中保持代码库连贯性的关键实践。与依赖人工代码审查不同，团队将所有架构规则、命名约定和质量标准编码为可自动化执行的 linter 规则、CI 作业和结构测试。这些规则涵盖：分层架构的依赖方向、Schema 和类型的命名约定、文件大小限制、结构化日志格式以及平台特定的可靠性要求。不仅验证代码，还验证知识库的时效性、交叉链接和结构正确性。",
    examples: [
      {
        word: "自定义 Linter",
        meaning: "编写项目特定的 lint 规则",
        breakdown: { root: "Mechanical Enforcement" },
        explanation: "针对项目的分层架构、命名约定等编写自定义 lint 规则，在代码提交时自动检查，违规代码无法通过 CI。"
      },
      {
        word: "结构测试",
        meaning: "测试代码的组织结构是否符合架构规则",
        breakdown: { root: "Mechanical Enforcement" },
        explanation: "不仅测试功能正确性，还测试代码文件的组织方式、依赖关系和模块边界是否符合预定义的架构模式。"
      },
      {
        word: "文档验证 CI",
        meaning: "CI 自动检查文档的时效性和链接有效性",
        breakdown: { root: "Mechanical Enforcement" },
        explanation: "专用的 CI 作业验证 docs/ 中的文档是否过时、交叉链接是否有效、结构是否正确，防止文档腐烂。"
      }
    ],
    quiz: {
      question: "Mechanical Enforcement 的核心优势是什么？",
      options: ["减少代码量", "不依赖人工审查即可保证一致性", "提高代码运行速度", "降低开发成本"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "Agent Review Pipeline",
    origin: "反馈循环",
    meaning: "代理审查代理代码的自动化审查流水线",
    description: "Agent Review Pipeline 是 Ralph Wiggum Loop 的工程化实现，将代码审查从人类驱动转变为代理驱动。流程包括：本地代理审查（快速检查语法、风格和明显错误）、云端代理审查（更深入的逻辑和架构审查）、以及基于反馈的自动迭代。代理不仅能识别问题，还能根据审查意见自动修改代码并重新提交。这种「代理对代理」的审查模式大幅减少了人类的审查负担，使得每天处理 3.5 个 PR/人成为可能。",
    examples: [
      {
        word: "本地代理审查",
        meaning: "快速的本地代码质量检查",
        breakdown: { root: "Agent Review Pipeline" },
        explanation: "在代码提交前，本地代理快速检查代码风格、lint 规则合规性和明显的逻辑错误，类似于本地 pre-commit hook。"
      },
      {
        word: "云端深度审查",
        meaning: "在云端进行更深入的逻辑和架构审查",
        breakdown: { root: "Agent Review Pipeline" },
        explanation: "提交 PR 后，云端代理进行更全面的审查，包括架构合规性、安全风险、性能影响等深层分析。"
      },
      {
        word: "自动迭代修复",
        meaning: "代理根据审查反馈自动修改并重新提交",
        breakdown: { root: "Agent Review Pipeline" },
        explanation: "收到审查意见后，生成代码的代理自动理解问题、修改代码并推送新提交，无需人类中转。"
      }
    ],
    quiz: {
      question: "Agent Review Pipeline 的最终效果是什么？",
      options: ["完全取消代码审查", "将审查从人类驱动转为代理驱动", "减少代码量", "提高编译速度"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "CDP Integration",
    origin: "可读性工程",
    meaning: "将 Chrome DevTools Protocol 集成到代理运行时，让代理能够操作浏览器",
    description: "CDP Integration（Chrome DevTools Protocol 集成）是让代理理解和操作 Web UI 的关键技术。OpenAI 团队将 Chrome DevTools Protocol 接入 Codex 的代理运行时，创建了处理 DOM 快照、截图和导航的技能（skills）。通过这种集成，Codex 可以像人类 QA 工程师一样操作浏览器——复现 Bug、点击按钮、填写表单、检查页面元素、截取页面截图并分析 UI 行为。这彻底打破了代理只能操作代码而无法理解 UI 的局限。",
    examples: [
      {
        word: "DOM 快照",
        meaning: "获取页面 DOM 树的结构化快照",
        breakdown: { root: "CDP Integration" },
        explanation: "代理通过 CDP 获取页面的完整 DOM 树快照，分析页面结构和元素属性，用于验证 UI 是否正确渲染。"
      },
      {
        word: "截图分析",
        meaning: "代理截取页面截图并进行视觉分析",
        breakdown: { root: "CDP Integration" },
        explanation: "代理可以截取页面的屏幕截图，结合视觉理解能力分析 UI 布局、颜色和交互状态是否符合设计规范。"
      },
      {
        word: "导航与交互",
        meaning: "代理通过 CDP 驱动浏览器进行页面导航和交互",
        breakdown: { root: "CDP Integration" },
        explanation: "代理可以点击按钮、填写表单、滚动页面等，模拟真实用户的操作流程来验证功能正确性。"
      }
    ],
    quiz: {
      question: "CDP Integration 使代理获得了什么新能力？",
      options: ["代码编译", "数据库查询", "操作浏览器 UI", "训练模型"],
      correctAnswer: 2
    }
  },
  {
    id: 20,
    root: "Golden Rules",
    origin: "代码维护",
    meaning: "编码到仓库中的最佳实践原则，引导代理生成高质量代码",
    description: "Golden Rules（黄金原则）是直接编码到仓库中的代码质量和设计原则。这些原则以代理可读的格式存储，在代理生成代码时提供指导。例如：偏好共享实用程序包而非重复实现、验证边界（validate boundaries）而不是 YOLO-style 探测数据。黄金原则的独特之处在于它们不是建议，而是被后台代理持续验证和强制执行的硬性要求。偏离黄金原则的代码会被后台扫描代理发现并自动修复。",
    examples: [
      {
        word: "共享实用程序偏好",
        meaning: "优先使用共享的工具包而非重复实现",
        breakdown: { root: "Golden Rules" },
        explanation: "当需要通用功能时，代理应该使用已有的共享实用程序包，而非在每个模块中重复实现相同的逻辑。"
      },
      {
        word: "边界验证",
        meaning: "在数据入口处严格验证，而非到处做防御性检查",
        breakdown: { root: "Golden Rules" },
        explanation: "validate boundaries 而不是 YOLO-style 探测数据——在边界处验证输入，内部代码可以信任数据的正确性。"
      },
      {
        word: "持续自动验证",
        meaning: "后台代理持续检查代码是否遵守黄金原则",
        breakdown: { root: "Golden Rules" },
        explanation: "不依赖人类发现违规，后台代理定期扫描代码库，发现偏离原则的代码后自动打开修复 PR。"
      }
    ],
    quiz: {
      question: "Golden Rules 与普通编码建议的区别是什么？",
      options: ["没有区别", "Golden Rules 被后台代理持续验证和强制执行", "Golden Rules 只是文档", "Golden Rules 只适用于人类"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "Git Worktree",
    origin: "执行模式",
    meaning: "利用 Git Worktree 让代理为每次更改启动独立的应用实例",
    description: "Git Worktree 是 Harness Engineering 中实现代理并行工作的关键技术。通过 git worktree，每个代理任务可以在独立的工作目录中运行，互不干扰。这使得多个代理可以同时处理不同的 Bug 修复或功能开发，每个代理都有自己独立的应用实例可以测试。结合 Application Legibility，代理可以在自己的 worktree 中启动应用、运行测试、验证修复，完全不影响其他正在进行的开发工作。",
    examples: [
      {
        word: "独立工作目录",
        meaning: "每个代理任务运行在独立的 git worktree 中",
        breakdown: { root: "Git Worktree" },
        explanation: "git worktree 允许从同一个仓库创建多个工作目录，每个代理在自己的目录中操作，互不干扰。"
      },
      {
        word: "并行开发",
        meaning: "多个代理同时处理不同的任务",
        breakdown: { root: "Git Worktree" },
        explanation: "一个代理修复前端 Bug，另一个实现后端功能，各自在独立的 worktree 中工作，可以同时启动各自的应用实例。"
      },
      {
        word: "隔离验证",
        meaning: "每个代理在独立环境中验证自己的更改",
        breakdown: { root: "Git Worktree" },
        explanation: "代理可以在自己的 worktree 中启动应用实例、运行测试，确保更改的正确性，不受其他开发分支影响。"
      }
    ],
    quiz: {
      question: "Git Worktree 在 Harness Engineering 中的主要作用是什么？",
      options: ["版本管理", "让多个代理并行工作且互不干扰", "代码备份", "分支管理"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "Quality Grading",
    origin: "代码维护",
    meaning: "后台代理持续评估和更新代码库的质量等级",
    description: "Quality Grading（质量等级）是 Entropy & Garbage Collection 体系中的评估机制。后台 Codex 任务不仅扫描代码偏差，还会更新代码库各部分的质量等级。这种机制让团队能够量化代码健康度，识别需要优先重构的区域。质量等级可能涵盖多个维度：架构合规性、测试覆盖率、文档完整性、性能指标合规性等。通过将质量等级可视化，团队可以在宏观层面监控代码库的健康趋势。",
    examples: [
      {
        word: "自动质量评估",
        meaning: "后台代理自动评估代码质量并打分",
        breakdown: { root: "Quality Grading" },
        explanation: "后台任务定期扫描代码库，从多个维度评估代码质量，生成量化的质量等级报告。"
      },
      {
        word: "针对性重构",
        meaning: "基于质量等级数据优先重构最需要改进的区域",
        breakdown: { root: "Quality Grading" },
        explanation: "质量等级最低的模块优先被安排重构任务，确保有限的重构资源用在刀刃上。"
      },
      {
        word: "健康趋势监控",
        meaning: "追踪代码库质量等级随时间的变化趋势",
        breakdown: { root: "Quality Grading" },
        explanation: "对比多次扫描的质量等级数据，监控代码库健康度是在提升还是退化，及时发现恶化趋势。"
      }
    ],
    quiz: {
      question: "Quality Grading 机制的直接目的是什么？",
      options: ["加快编码速度", "量化代码健康度并识别重构优先级", "减少代理数量", "替代人工测试"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "Incremental Debt Repayment",
    origin: "代码维护",
    meaning: "以小增量持续偿还技术债务，而非累积后爆发式解决",
    description: "Incremental Debt Repayment（增量债务偿还）是 Harness Engineering 中处理技术债务的核心策略。传统方式是让技术债务累积到不可忍受时集中解决，这会导致痛苦的大规模重构。而在 Agent-First 模式下，后台 Codex 任务持续扫描代码偏差并打开针对性的小型重构 PR，大多数可以在一分钟内审查并自动合并。这种方式将技术债务的偿还转变为一个持续的、低成本的日常活动，类似于编程语言中的增量式垃圾回收。",
    examples: [
      {
        word: "小型重构 PR",
        meaning: "每次只修复一个小的技术债务点",
        breakdown: { root: "Incremental Debt Repayment" },
        explanation: "后台代理打开的重构 PR 范围很小（如统一一个命名约定、提取一个共享函数），大多一分钟内可审查合并。"
      },
      {
        word: "持续偿还",
        meaning: "技术债务的偿还作为日常持续活动",
        breakdown: { root: "Incremental Debt Repayment" },
        explanation: "不等到积累成问题才集中处理，而是每天都有后台代理在做小的代码优化和重构。"
      },
      {
        word: "增量式 GC",
        meaning: "类比编程语言中增量垃圾回收的思想",
        breakdown: { root: "Incremental Debt Repayment" },
        explanation: "就像增量式 GC 将垃圾回收分散到程序运行的各个时刻，增量债务偿还将重构分散到每天的开发流程中。"
      }
    ],
    quiz: {
      question: "Incremental Debt Repayment 相比传统方式的核心优势是什么？",
      options: ["消除所有技术债务", "避免痛苦的大规模重构", "减少代码量", "提高运行速度"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "Role Transformation",
    origin: "核心理念",
    meaning: "工程师角色从编写代码转变为设计环境和搭建脚手架",
    description: "Role Transformation（角色转型）描述了 Harness Engineering 时代工程师角色的根本性变化。在无手写代码的环境下，工程师的工作重心从编码转向系统搭建——使代理能够完成有用的工作。核心工作包括：提供工具和抽象概念、设计反馈循环和控制系统、定义架构边界和不变量、构建可观测性基础设施、管理仓库知识。工程师成为了代理的「教练」和「架构师」，而非「执行者」。",
    examples: [
      {
        word: "环境设计师",
        meaning: "设计代理高效工作的环境和工具",
        breakdown: { root: "Role Transformation" },
        explanation: "工程师的核心产出不再是代码，而是让代理能够高效工作的环境——工具链、文档体系、架构规则和反馈机制。"
      },
      {
        word: "意图指定者",
        meaning: "通过提示词精确描述产品意图",
        breakdown: { root: "Role Transformation" },
        explanation: "工程师需要培养精确描述意图的能力——用提示词清晰传达想要什么，而非自己写代码实现。"
      },
      {
        word: "反馈循环建设者",
        meaning: "构建让代理自我改进的反馈系统",
        breakdown: { root: "Role Transformation" },
        explanation: "设计审查流程、CI/CD 管线、质量监控等反馈机制，让代理在循环中不断提升输出质量。"
      }
    ],
    quiz: {
      question: "在 Harness Engineering 中，工程师最重要的新技能是什么？",
      options: ["编写更快的代码", "设计代理高效工作的环境", "学习更多编程语言", "手动测试"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "Open Frontiers",
    origin: "未来探索",
    meaning: "Harness Engineering 中尚待解决的开放性问题",
    description: "Open Frontiers 代表了 Harness Engineering 中团队仍在探索的未解问题。三大核心挑战：1）长期架构一致性——尚不知道在完全代理生成的系统中，架构一致性如何在几年内演变；2）人类判断力的杠杆——仍在学习人类判断力在哪里能增加最大杠杆，以及如何编码这种判断力使其产生复利；3）模型演进——不知道随着模型变得更强，整个系统将如何演进。这些问题的答案将塑造 Agent-First 软件工程的未来。",
    examples: [
      {
        word: "长期架构一致性",
        meaning: "代理生成的代码库能否在数年内保持架构连贯",
        breakdown: { root: "Open Frontiers" },
        explanation: "目前的实验只有 5 个月，尚不清楚完全由代理生成的代码库在更长时间跨度中是否能保持架构一致性。"
      },
      {
        word: "人类判断力杠杆",
        meaning: "如何将人类判断力编码为可复利的系统",
        breakdown: { root: "Open Frontiers" },
        explanation: "人类在哪些决策点上的介入价值最大？如何将这些判断力固化为代理可遵循的规则和原则？"
      },
      {
        word: "模型能力演进",
        meaning: "随着模型变强，整个工程系统如何适应",
        breakdown: { root: "Open Frontiers" },
        explanation: "更强的模型可能需要更少的脚手架或不同的脚手架，整个 Harness Engineering 方法论需要随模型进化而调整。"
      }
    ],
    quiz: {
      question: "以下哪项不是 OpenAI 提到的 Open Frontiers？",
      options: ["长期架构一致性", "人类判断力的杠杆", "模型能力演进", "代理替代人类工程师"],
      correctAnswer: 3
    }
  }
];
