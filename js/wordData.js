const WordRoots = [
  {
    id: 1,
    root: "Evals Framework",
    origin: "核心框架",
    meaning: "OpenAI 开源的 LLM 评估框架，用于系统化测试模型性能",
    description: "Evals 是 OpenAI 开发并开源的评估框架，旨在为大语言模型（LLM）及基于 LLM 构建的系统提供标准化的评估能力。它不仅是一个代码库，还包含一个开源的基准测试注册中心。开发者可以通过提供数据（JSON格式）和参数（YAML格式）来创建评估，甚至无需编写代码。框架支持自定义评估逻辑和完成函数（Completion Functions），使得从简单的模型测试到复杂的多维度评估都成为可能。Evals 的核心理念是让构建评估变得尽可能简单，同时保持灵活性和可扩展性。",
    examples: [
      {
        word: "基础评估",
        meaning: "使用 YAML 模板定义的简单评估任务",
        breakdown: { root: "Evals Framework" },
        explanation: "通过 YAML 文件定义评估参数和数据源，无需编写代码即可运行基础模型测试。例如定义 IT 工单分类任务，指定输入字段和正确标签。"
      },
      {
        word: "自定义评估",
        meaning: "实现自定义评估逻辑的高级用法",
        breakdown: { root: "Evals Framework" },
        explanation: "当基础模板无法满足需求时，开发者可以编写自定义的评估类和完成函数，实现复杂的多步骤评估流程。"
      },
      {
        word: "评估注册中心",
        meaning: "存储和管理评估基准的开源仓库",
        breakdown: { root: "Evals Framework" },
        explanation: "Evals 框架维护了一个开源的基准测试注册中心，包含社区贡献的各类评估数据集和配置，方便开发者复用和对比。"
      }
    ],
    quiz: {
      question: "OpenAI Evals 框架的核心目的是什么？",
      options: ["生成训练数据", "系统化评估 LLM 性能", "部署模型到生产", "优化模型参数"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "Test Harness",
    origin: "核心框架",
    meaning: "自动化测试基础设施，用于执行和管理 AI 模型评估流程",
    description: "Test Harness（测试工具）是一种自动化测试基础设施，负责协调评估的整个生命周期：从数据加载、模型调用、结果收集到评分计算。在 OpenAI 的实践中，Test Harness 支持同步和异步两种执行模式，能够处理大规模的并发评估任务。它集成了数据管理模块、测试标准配置和执行引擎三大核心组件，确保评估流程的灵活性和可扩展性。好的 Test Harness 设计应该让开发者专注于定义评估标准，而非底层执行细节。",
    examples: [
      {
        word: "执行引擎",
        meaning: "协调评估流程的核心组件",
        breakdown: { root: "Test Harness" },
        explanation: "执行引擎负责调度模型调用、收集输出结果并执行评分计算，支持同步和异步两种模式以适应不同规模的评估需求。"
      },
      {
        word: "数据管理模块",
        meaning: "负责评估数据的加载和预处理",
        breakdown: { root: "Test Harness" },
        explanation: "支持多种数据源类型，包括自定义数据集、生产日志和存储的模型响应，确保评估数据的多样性和真实性。"
      },
      {
        word: "测试标准配置",
        meaning: "定义评估指标和通过阈值的配置",
        breakdown: { root: "Test Harness" },
        explanation: "允许开发者定义评估指标（如准确率、召回率）和通过阈值，支持内置评估器和自定义评估逻辑的灵活组合。"
      }
    ],
    quiz: {
      question: "Test Harness 的三大核心组件不包括以下哪个？",
      options: ["数据管理模块", "执行引擎", "测试标准配置", "模型训练模块"],
      correctAnswer: 3
    }
  },
  {
    id: 3,
    root: "Evaluation Metrics",
    origin: "评估方法",
    meaning: "用于量化 LLM 系统性能的评估指标体系",
    description: "评估指标是衡量 LLM 系统表现的量化标准，通常以0-1分的范围进行评分。OpenAI 的评估体系中，指标分为多个维度：准确性（模型输出是否正确）、相关性（输出是否与输入相关）、安全性（是否产生有害内容）、一致性（输出格式是否符合预期）等。核心挑战在于指标的准确性和可靠性——由于 LLM 评估指标通常依赖 LLM 本身来判断（LLM-as-a-judge），容易产生不可靠的结果，需要精心设计的提示工程来确保评分的稳定性。",
    examples: [
      {
        word: "string_check 评分器",
        meaning: "精确匹配模型输出与预期标签",
        breakdown: { root: "Evaluation Metrics" },
        explanation: "最简单的评估方式之一，通过比较模型输出文本与人工标注的正确答案是否完全匹配来评分，适用于分类任务。"
      },
      {
        word: "LLM-as-Judge",
        meaning: "使用 LLM 作为评判者来评估另一个 LLM 的输出",
        breakdown: { root: "Evaluation Metrics" },
        explanation: "当人工评估成本过高时，使用一个更强大的 LLM 作为裁判来评估目标模型的输出质量，需要精心设计评判提示词。"
      },
      {
        word: "多维度评分",
        meaning: "从多个角度综合评估模型表现",
        breakdown: { root: "Evaluation Metrics" },
        explanation: "好的评估不是单一指标，而是从准确性、安全性、可用性、响应速度等多个维度进行综合评估，避免优化单一指标带来的偏差。"
      }
    ],
    quiz: {
      question: "LLM-as-Judge 方法的主要挑战是什么？",
      options: ["计算成本太高", "评判结果的可靠性和稳定性", "无法处理多语言", "只能用于分类任务"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "Prompt Regression Testing",
    origin: "评估方法",
    meaning: "检测提示词修改是否导致模型性能下降的测试方法",
    description: "Prompt Regression Testing 是评估工程中的关键实践，用于在修改提示词或切换模型版本后，系统化地检测性能是否出现回退。这类似于传统软件工程中的回归测试，但针对的是 LLM 的输出质量。每次修改 prompt template 后，都应该运行完整的评估套件，对比修改前后的性能指标。OpenAI 建议将此过程自动化，集成到 CI/CD 流水线中，确保每次变更都经过评估验证，防止在改进某个方面的同时意外降低了其他方面的性能。",
    examples: [
      {
        word: "A/B 评估",
        meaning: "对比两个 prompt 版本的性能差异",
        breakdown: { root: "Prompt Regression Testing" },
        explanation: "使用同一份测试数据集分别运行新旧两个版本的 prompt，对比各项指标的差异，确保新版本在所有关键维度都不低于旧版本。"
      },
      {
        word: "基准锁定",
        meaning: "固定一组基准测试结果作为性能底线",
        breakdown: { root: "Prompt Regression Testing" },
        explanation: "在 prompt 确认有效后，将当时的评估结果锁定为基准线，后续的任何修改都不能低于这个基准，类似于软件测试中的断言。"
      },
      {
        word: "CI/CD 集成",
        meaning: "将评估自动化集成到持续集成流程",
        breakdown: { root: "Prompt Regression Testing" },
        explanation: "使用 Pytest 等测试框架将评估指标的阈值作为测试通过/失败的标准，确保代码合并或部署前模型性能未发生回退。"
      }
    ],
    quiz: {
      question: "Prompt Regression Testing 最类似于传统软件工程中的什么？",
      options: ["单元测试", "回归测试", "压力测试", "安全审计"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "Red Teaming",
    origin: "安全测试",
    meaning: "通过对抗性测试发现 AI 系统的安全漏洞和弱点",
    description: "Red Teaming 是 AI 安全评估的核心方法之一，源自军事和网络安全领域的概念。在 AI 语境下，Red Team 的任务是系统性地寻找模型的漏洞：生成有害内容、绕过安全限制、产生错误信息等。OpenAI 在发布新模型前都会进行大规模的 Red Teaming 活动，邀请内部和外部专家尝试各种攻击手段。2025年8月，OpenAI 与 Anthropic 首次进行了联合安全测试，互相测试对方的模型，这种跨实验室协作标志着 AI 安全评估的新阶段。",
    examples: [
      {
        word: "越狱测试",
        meaning: "尝试绕过模型的安全限制",
        breakdown: { root: "Red Teaming" },
        explanation: "通过精心构造的提示词尝试让模型生成被禁止的内容，测试安全防线的鲁棒性，常见手段包括角色扮演、多步引导等。"
      },
      {
        word: "跨实验室测试",
        meaning: "不同 AI 公司互相测试对方模型的安全性",
        breakdown: { root: "Red Teaming" },
        explanation: "OpenAI 与 Anthropic 的联合安全评估是典范，每家公司使用自己的内部安全协议测试对方的模型，发现各自评估中的盲点。"
      },
      {
        word: "自动化 Red Teaming",
        meaning: "使用 AI 自动生成攻击性测试用例",
        breakdown: { root: "Red Teaming" },
        explanation: "利用一个 LLM 系统化地生成可能触发目标模型不当行为的测试输入，大幅提升测试覆盖面和效率。"
      }
    ],
    quiz: {
      question: "2025年 OpenAI 与哪家公司进行了首次联合安全测试？",
      options: ["Google DeepMind", "Meta AI", "Anthropic", "Microsoft"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    root: "Benchmark Design",
    origin: "评估方法",
    meaning: "设计科学、全面的 AI 能力评估基准",
    description: "Benchmark Design 是评估工程的基石，决定了评估结果的可信度和实用性。OpenAI 在 PaperBench 等项目中展示了先进的基准设计方法论：将复杂任务分层分解为具有明确评分标准的较小子任务，由领域专家参与评分标准的制定以确保准确性。好的基准设计需要平衡多个维度——覆盖面（测试足够多的场景）、难度梯度（从简单到困难）、真实性（反映实际使用场景）和公正性（避免数据泄漏或偏见）。",
    examples: [
      {
        word: "PaperBench",
        meaning: "评估 AI 复现科研论文能力的基准",
        breakdown: { root: "Benchmark Design" },
        explanation: "OpenAI 开发的基准测试，要求 AI Agent 从头复制 20 篇 ICML 2024 顶会论文，包含 8316 个可单独评分的子任务，评分标准与论文作者共同开发。"
      },
      {
        word: "HealthBench",
        meaning: "评估 AI 在医疗健康领域能力的基准",
        breakdown: { root: "Benchmark Design" },
        explanation: "由来自60个国家的262名医生参与创建，包含5000段核心测试对话和48562个医生编写的评分标准，覆盖紧急情况、全球健康等多个维度。"
      },
      {
        word: "分层评分标准",
        meaning: "将复杂任务分解为可独立评分的子任务",
        breakdown: { root: "Benchmark Design" },
        explanation: "好的基准不是单一的通过/失败判断，而是将任务分层分解，让每个子任务都有明确的评分标准，从而提供细粒度的能力分析。"
      }
    ],
    quiz: {
      question: "PaperBench 包含多少个可单独评分的子任务？",
      options: ["1000", "5000", "8316", "48562"],
      correctAnswer: 2
    }
  },
  {
    id: 7,
    root: "Data Source Config",
    origin: "核心框架",
    meaning: "定义评估数据的模式和来源的配置",
    description: "Data Source Config 是 OpenAI Evals 框架中定义测试数据结构的配置层。它规定了数据集中每一项必须包含哪些字段及其类型。数据通常使用 JSONL（JSON Lines）格式存储，每行一条测试数据。通过 API 或 Dashboard 上传数据时，需要设置 purpose 为 'evals'。良好的数据源配置确保评估数据的一致性和可验证性，是构建可复用评估流程的基础。",
    examples: [
      {
        word: "JSONL 数据格式",
        meaning: "每行一条 JSON 记录的数据格式",
        breakdown: { root: "Data Source Config" },
        explanation: "评估数据使用 JSONL 格式，每行包含一个完整的测试用例，便于流式处理和大规模数据的增量更新。"
      },
      {
        word: "Schema 定义",
        meaning: "数据字段的类型和结构约束",
        breakdown: { root: "Data Source Config" },
        explanation: "通过 schema 定义确保每条测试数据都包含必要的字段，如输入文本、期望输出、分类标签等，防止数据不一致导致评估失败。"
      },
      {
        word: "数据上传 API",
        meaning: "通过 API 上传评估数据的接口",
        breakdown: { root: "Data Source Config" },
        explanation: "使用 OpenAI 的 /v1/files 端点上传 JSONL 文件，设置 purpose 为 'evals'，即可在评估运行中引用该数据集。"
      }
    ],
    quiz: {
      question: "OpenAI Evals 默认使用什么数据格式？",
      options: ["CSV", "XML", "JSONL", "Parquet"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "Testing Criteria",
    origin: "核心框架",
    meaning: "定义评估通过标准和评分规则的配置",
    description: "Testing Criteria 是 Evals 框架中定义评估标准的核心概念。它规定了如何评判模型的输出是否正确或优质。OpenAI 提供了多种内置评分器（Grader），如 string_check（精确匹配）、model_graded（模型评分）等，开发者也可以实现自定义评分逻辑。Testing Criteria 使用模板语法（{{ sample.output_text }}）引用模型输出，与数据中的基准真值进行比较。通过阈值的设定让评估结果可以自动化判定通过或失败。",
    examples: [
      {
        word: "string_check",
        meaning: "精确字符串匹配的评分器",
        breakdown: { root: "Testing Criteria" },
        explanation: "最基础的评分方式，将模型输出与预期标签进行精确比较，支持 eq（完全相等）、contains（包含）等操作符。"
      },
      {
        word: "model_graded",
        meaning: "使用 LLM 进行评分的评分器",
        breakdown: { root: "Testing Criteria" },
        explanation: "对于开放式输出，使用另一个 LLM 作为评判者，根据预定义的评分标准对模型输出进行打分，适用于主观性较强的任务。"
      },
      {
        word: "阈值设定",
        meaning: "定义评估通过的最低分数线",
        breakdown: { root: "Testing Criteria" },
        explanation: "为每个评估指标设定通过阈值，如准确率不低于95%，使得评估结果可以自动化判定，集成到 CI/CD 流程中。"
      }
    ],
    quiz: {
      question: "以下哪个不是 OpenAI Evals 内置的评分器类型？",
      options: ["string_check", "model_graded", "neural_compare", "custom grader"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "Synthetic Data Generation",
    origin: "数据工程",
    meaning: "使用 AI 自动生成评估测试数据集",
    description: "Synthetic Data Generation（合成数据生成）是解决评估数据集创建瓶颈的关键技术。手动创建涵盖所有边缘情况的测试用例既耗时又困难，而使用 LLM 基于给定上下文自动生成输入-输出对，可以大幅提升评估数据的覆盖面和多样性。OpenAI 建议使用高质量模型（如 GPT-4）来生成期望输出，以减少幻觉。合成数据不仅可以扩充测试集，还可以系统化地生成边缘案例和对抗性输入。",
    examples: [
      {
        word: "黄金数据生成",
        meaning: "使用 LLM 生成高质量的标注数据",
        breakdown: { root: "Synthetic Data Generation" },
        explanation: "基于给定的上下文和主题，利用高质量 LLM 生成标准的输入-输出对，作为评估的基准真值（Ground Truth）。"
      },
      {
        word: "边缘案例生成",
        meaning: "自动生成极端和异常的测试输入",
        breakdown: { root: "Synthetic Data Generation" },
        explanation: "指示 LLM 生成各种边缘情况的测试输入，如超长文本、多语言混合、特殊字符等，提升评估的覆盖面。"
      },
      {
        word: "对抗性数据增强",
        meaning: "生成旨在触发模型错误的测试数据",
        breakdown: { root: "Synthetic Data Generation" },
        explanation: "系统化地生成可能导致模型犯错的测试输入，如误导性问题、歧义表述等，帮助发现模型的薄弱环节。"
      }
    ],
    quiz: {
      question: "使用合成数据生成评估集时，OpenAI 建议用什么生成期望输出？",
      options: ["规则引擎", "小型模型", "高质量大模型", "人工标注"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "Safety Evaluation Hub",
    origin: "安全测试",
    meaning: "OpenAI 的安全评估结果公示平台",
    description: "Safety Evaluation Hub 是 OpenAI 推出的安全评估中心，是一个公开的网页平台，展示模型在各种安全测试中的得分，包括有害内容生成、越狱攻击抵御和幻觉检测等维度。OpenAI 承诺持续更新该平台，在每次重大模型更新时发布最新的安全测试结果。这种透明化的做法旨在推动 AI 安全标准的建立，让公众和监管机构能够了解模型的安全特性和局限性。",
    examples: [
      {
        word: "安全评分看板",
        meaning: "展示模型安全指标的可视化面板",
        breakdown: { root: "Safety Evaluation Hub" },
        explanation: "以直观的方式展示模型在各安全维度上的得分，帮助用户和开发者快速了解模型的安全特性。"
      },
      {
        word: "持续更新机制",
        meaning: "随模型更新同步发布安全测试结果",
        breakdown: { root: "Safety Evaluation Hub" },
        explanation: "每次重大模型更新后，OpenAI 会重新运行完整的安全测试套件，并在 Hub 上更新结果，确保信息的时效性。"
      },
      {
        word: "透明化报告",
        meaning: "公开分享安全测试的方法和结果",
        breakdown: { root: "Safety Evaluation Hub" },
        explanation: "不仅公布测试结果，还分享测试方法论和评估标准，推动行业建立统一的 AI 安全评估标准。"
      }
    ],
    quiz: {
      question: "Safety Evaluation Hub 主要评估哪些维度？",
      options: ["模型速度和成本", "有害内容、越狱和幻觉", "代码生成准确率", "多语言翻译质量"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "LLM Test Case",
    origin: "数据工程",
    meaning: "LLM 评估的基本数据单元，包含输入、输出和上下文",
    description: "LLM Test Case 是评估框架的基础数据结构，定义了评估一个 LLM 系统所需的所有信息。必需参数包括 input（用户输入）和 actual_output（系统实际输出），可选参数包括 expected_output（期望输出）、context（原始上下文/真值）和 retrieval_context（RAG系统检索到的文本块）。这种标准化的数据结构使得不同的评估指标可以在统一的接口上工作，提高了评估流程的一致性和可复用性。",
    examples: [
      {
        word: "必需参数",
        meaning: "input 和 actual_output 是每个测试用例必须包含的",
        breakdown: { root: "LLM Test Case" },
        explanation: "input 是用户的输入查询，actual_output 是 LLM 系统的实际响应，这两个是评估的最基本要素。"
      },
      {
        word: "RAG 上下文",
        meaning: "retrieval_context 记录 RAG 系统检索到的文本",
        breakdown: { root: "LLM Test Case" },
        explanation: "对于 RAG 系统，需要额外记录检索环节返回的文本块，用于评估检索质量、上下文相关性等指标。"
      },
      {
        word: "期望输出",
        meaning: "expected_output 是人工标注的正确答案",
        breakdown: { root: "LLM Test Case" },
        explanation: "并非所有评估都需要期望输出，但对于有明确正确答案的任务（如分类、抽取），它是计算准确率的必要条件。"
      }
    ],
    quiz: {
      question: "LLM Test Case 中哪些是必需参数？",
      options: ["input 和 expected_output", "input 和 actual_output", "context 和 retrieval_context", "全部都是必需的"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "Async Evaluation",
    origin: "工程实践",
    meaning: "异步执行评估任务以提升大规模测试效率",
    description: "Async Evaluation（异步评估）是处理大规模评估任务的关键技术。当测试数据集包含数千个用例时，串行执行会导致评估过程耗时数小时。通过异步编程（如Python的asyncio），可以并发执行多个模型调用和评分计算，将评估时间从小时级缩短到分钟级。OpenAI 的 Evals API 原生支持异步执行，评估运行提交后在后台异步进行，开发者可以通过 API 轮询状态或配置 Webhook 接收完成通知。",
    examples: [
      {
        word: "并发模型调用",
        meaning: "同时发起多个模型推理请求",
        breakdown: { root: "Async Evaluation" },
        explanation: "使用 asyncio.gather 同时发起多个 API 调用，充分利用 API 的并发限制，大幅缩短等待时间。"
      },
      {
        word: "Webhook 通知",
        meaning: "评估完成后自动触发回调",
        breakdown: { root: "Async Evaluation" },
        explanation: "订阅 eval.run.succeeded 等事件，评估完成后自动收到通知，无需持续轮询状态，适合生产环境的自动化流程。"
      },
      {
        word: "批量处理",
        meaning: "将测试用例分批提交执行",
        breakdown: { root: "Async Evaluation" },
        explanation: "对于超大规模数据集，将用例分批提交，每批异步执行，既保证效率又避免超过 API 速率限制。"
      }
    ],
    quiz: {
      question: "异步评估的主要优势是什么？",
      options: ["提高评分准确性", "减少 API 费用", "大幅缩短评估时间", "简化代码逻辑"],
      correctAnswer: 2
    }
  },
  {
    id: 13,
    root: "Hallucination Detection",
    origin: "安全测试",
    meaning: "检测 AI 模型生成虚假或不真实信息的评估方法",
    description: "Hallucination Detection（幻觉检测）是 AI 安全评估的核心挑战之一。LLM 可能生成看似合理但实际上不真实的信息，这在医疗、法律、金融等高风险领域尤其危险。评估幻觉的方法包括：事实核查（与已知事实对照）、忠实度评估（输出是否忠于提供的上下文）、自洽性检查（多次生成的答案是否一致）。OpenAI 的 Safety Evaluation Hub 将幻觉检测作为三大核心安全维度之一，体现了其在模型发布流程中的重要性。",
    examples: [
      {
        word: "事实核查",
        meaning: "将模型输出与已知事实进行对照验证",
        breakdown: { root: "Hallucination Detection" },
        explanation: "使用可靠的知识库或搜索引擎验证模型声称的事实是否正确，是最直接的幻觉检测方式。"
      },
      {
        word: "忠实度评估",
        meaning: "检查输出是否忠于提供的上下文信息",
        breakdown: { root: "Hallucination Detection" },
        explanation: "对于 RAG 系统，评估模型的回答是否只基于检索到的上下文，没有添加虚构信息，常用于文档问答场景。"
      },
      {
        word: "自洽性检查",
        meaning: "多次查询同一问题检查答案一致性",
        breakdown: { root: "Hallucination Detection" },
        explanation: "如果模型对同一个问题多次给出不同的答案，说明它可能在某些回答中产生了幻觉，一致性越低幻觉风险越高。"
      }
    ],
    quiz: {
      question: "以下哪种不是常见的幻觉检测方法？",
      options: ["事实核查", "忠实度评估", "自洽性检查", "响应速度测试"],
      correctAnswer: 3
    }
  },
  {
    id: 14,
    root: "Completion Functions",
    origin: "核心框架",
    meaning: "Evals 框架中封装模型调用逻辑的可插拔组件",
    description: "Completion Functions 是 OpenAI Evals 框架的核心抽象之一，它将模型调用逻辑封装为可插拔的组件。通过这种抽象，开发者可以轻松切换底层模型（GPT-3.5、GPT-4、自定义模型等），而无需修改评估逻辑。自定义 Completion Functions 允许在模型调用前后添加预处理和后处理逻辑，如提示词模板填充、输出格式化、多步推理链等。这种设计模式实现了评估逻辑与模型实现的解耦。",
    examples: [
      {
        word: "模型切换",
        meaning: "通过配置轻松切换不同的底层模型",
        breakdown: { root: "Completion Functions" },
        explanation: "只需修改配置中的模型名称，即可在 GPT-3.5、GPT-4 等不同模型间切换运行同一评估，方便横向对比。"
      },
      {
        word: "预处理管道",
        meaning: "在模型调用前对输入进行处理",
        breakdown: { root: "Completion Functions" },
        explanation: "在发送到模型之前，自动填充提示词模板、添加系统指令、格式化输入数据等，确保每次调用的一致性。"
      },
      {
        word: "多步推理",
        meaning: "在 Completion Function 中实现链式调用",
        breakdown: { root: "Completion Functions" },
        explanation: "自定义的 Completion Function 可以实现 Chain-of-Thought 等多步推理策略，先分析再回答，提升输出质量。"
      }
    ],
    quiz: {
      question: "Completion Functions 的核心设计目的是什么？",
      options: ["提升模型速度", "实现评估逻辑与模型实现的解耦", "降低 API 费用", "自动优化提示词"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "Context Relevancy",
    origin: "RAG评估",
    meaning: "衡量检索到的上下文与用户查询的相关程度",
    description: "Context Relevancy（上下文相关性）是 RAG（检索增强生成）系统评估的核心指标之一。它衡量检索模块返回的文档片段与用户原始查询的相关程度。计算方法通常是：遍历 retrieval_context 中的每个节点，使用 LLM 判断每个节点是否与输入相关，然后计算分数 = 相关节点数 / 总节点数。这个指标直接影响 RAG 系统的输出质量——如果检索到的上下文不相关，模型即使再强也难以给出好的回答。",
    examples: [
      {
        word: "节点级评估",
        meaning: "逐个评估每个检索到的文档片段",
        breakdown: { root: "Context Relevancy" },
        explanation: "不是整体打分，而是对检索结果中的每个文档片段独立判断其与查询的相关性，提供更细粒度的评估。"
      },
      {
        word: "上下文精确度",
        meaning: "考虑检索结果排序的高级指标",
        breakdown: { root: "Context Relevancy" },
        explanation: "不仅评估相关性，还考虑相关文档在检索结果中的排名位置，越靠前越好，类似于信息检索中的 NDCG 指标。"
      },
      {
        word: "检索噪声分析",
        meaning: "识别降低 RAG 性能的不相关检索结果",
        breakdown: { root: "Context Relevancy" },
        explanation: "通过分析不相关文档的特征，帮助优化检索策略，如调整向量搜索的相似度阈值或改进文档分块策略。"
      }
    ],
    quiz: {
      question: "Context Relevancy 的计算公式是什么？",
      options: ["正确答案数/总问题数", "相关节点数/总节点数", "检索时间/基准时间", "输出长度/输入长度"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "Evaluation Dataset",
    origin: "数据工程",
    meaning: "用于评估的结构化测试数据集合",
    description: "Evaluation Dataset 是评估工程的数据基础，包含了一组结构化的测试用例，每个用例对应一个待评估的场景。创建全面的评估数据集是最耗时的环节之一——需要覆盖正常场景、边缘情况和对抗性输入。OpenAI 建议将评估数据按功能维度分组（如安全性、准确性、格式合规性），并持续从生产环境的日志中补充新的测试用例。数据集的质量直接决定了评估结果的可信度。",
    examples: [
      {
        word: "分维度数据集",
        meaning: "按评估维度组织的测试数据",
        breakdown: { root: "Evaluation Dataset" },
        explanation: "将测试用例按功能维度（准确性、安全性、格式合规性等）分组管理，便于针对性地评估和改进特定维度的性能。"
      },
      {
        word: "生产日志采集",
        meaning: "从真实用户交互中提取评估数据",
        breakdown: { root: "Evaluation Dataset" },
        explanation: "从生产环境的用户查询日志中提取有代表性的案例，确保评估数据反映真实使用场景，而非仅靠人工假设。"
      },
      {
        word: "增量更新",
        meaning: "持续补充和更新评估数据集",
        breakdown: { root: "Evaluation Dataset" },
        explanation: "评估数据集不是一次性创建的，应该随着产品迭代和用户反馈持续补充新的测试用例，保持评估的时效性。"
      }
    ],
    quiz: {
      question: "创建评估数据集时最重要的原则是什么？",
      options: ["数据量越大越好", "只用合成数据", "覆盖正常场景、边缘情况和对抗性输入", "只关注准确性"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "Model Comparison",
    origin: "评估方法",
    meaning: "在相同评估标准下对比不同模型的性能表现",
    description: "Model Comparison 是评估工程的核心应用场景之一。当新模型版本发布（如从 GPT-4 到 GPT-4o）或考虑切换模型供应商时，需要在完全相同的评估条件下对比它们的性能。OpenAI 的 Evals API 支持在同一评估定义下使用不同模型运行，返回标准化的结果指标供对比。关键注意点包括：使用相同的测试数据集、控制随机性（temperature设置）、对比多个维度而非单一指标、考虑成本和延迟等非功能性指标。",
    examples: [
      {
        word: "横向对比",
        meaning: "在同一数据集上对比不同模型的表现",
        breakdown: { root: "Model Comparison" },
        explanation: "使用完全相同的评估数据集和评分标准，分别运行不同模型，对比各项指标，确保比较的公平性。"
      },
      {
        word: "版本迭代对比",
        meaning: "对比同一模型不同版本的性能变化",
        breakdown: { root: "Model Comparison" },
        explanation: "模型更新后，对比新旧版本在所有关键指标上的表现，确保升级带来整体提升而非某些维度的退步。"
      },
      {
        word: "成本效益分析",
        meaning: "综合考虑性能和成本的对比评估",
        breakdown: { root: "Model Comparison" },
        explanation: "不仅比较输出质量，还考虑 Token 消耗、响应延迟和 API 费用，找到性能与成本的最优平衡点。"
      }
    ],
    quiz: {
      question: "进行模型对比时，以下哪项不是必要条件？",
      options: ["使用相同的测试数据集", "控制随机性参数", "使用相同的硬件环境", "对比多个维度"],
      correctAnswer: 2
    }
  },
  {
    id: 18,
    root: "Caching & Error Handling",
    origin: "工程实践",
    meaning: "评估过程中的结果缓存和错误恢复机制",
    description: "在大规模评估中，Caching（缓存）和 Error Handling（错误处理）是保证评估流程鲁棒性的关键。当数千个测试用例中某一个失败时，不应该重新运行整个评估——需要设计自动缓存机制，存储成功运行的测试用例结果，仅重试失败的任务。同时，try-catch 错误处理确保单个用例的失败不会导致整个评估流程崩溃。这些工程实践看似简单，却是评估系统从实验原型走向生产可用的关键。",
    examples: [
      {
        word: "增量重试",
        meaning: "只重新运行失败的测试用例",
        breakdown: { root: "Caching & Error Handling" },
        explanation: "通过缓存已成功的评估结果，当评估因API错误或超时而部分失败时，只需重试失败的用例，而非从头开始。"
      },
      {
        word: "优雅降级",
        meaning: "单个用例失败不影响整体评估",
        breakdown: { root: "Caching & Error Handling" },
        explanation: "使用 try-catch 包裹每个测试用例的执行，记录失败原因，继续执行后续用例，最后汇总报告中标注失败项。"
      },
      {
        word: "结果持久化",
        meaning: "将评估结果安全地存储到磁盘",
        breakdown: { root: "Caching & Error Handling" },
        explanation: "在评估过程中定期将中间结果写入磁盘，防止进程异常终止导致所有结果丢失，支持从中断点恢复。"
      }
    ],
    quiz: {
      question: "缓存机制在评估中的最大价值是什么？",
      options: ["提升评分准确性", "减少 API 费用", "避免失败后从头重跑", "加快模型推理速度"],
      correctAnswer: 2
    }
  },
  {
    id: 19,
    root: "Hyperparameter Logging",
    origin: "工程实践",
    meaning: "记录和追踪评估过程中使用的超参数配置",
    description: "Hyperparameter Logging 是构建可复现评估流程的关键实践。每次评估运行都应该记录所有相关的超参数配置：使用的模型版本、temperature、max_tokens、提示词模板、评估数据集版本等。通过将评估结果与特定的超参数组合关联起来，开发者可以系统化地确定 LLM 系统的最佳配置。工具如 Weights & Biases（W&B）可以与 Evals 框架集成，提供超参数追踪、实验管理和结果可视化功能。",
    examples: [
      {
        word: "实验追踪",
        meaning: "记录每次评估运行的完整配置",
        breakdown: { root: "Hyperparameter Logging" },
        explanation: "包括模型名称、版本、temperature、max_tokens、system prompt、评估数据集版本等，确保每次实验都可复现。"
      },
      {
        word: "W&B 集成",
        meaning: "使用 Weights & Biases 管理评估实验",
        breakdown: { root: "Hyperparameter Logging" },
        explanation: "OpenAI Evals 原生支持 W&B 集成，自动记录评估配置和结果，提供丰富的可视化和对比功能。"
      },
      {
        word: "配置对比",
        meaning: "比较不同超参数组合的评估效果",
        breakdown: { root: "Hyperparameter Logging" },
        explanation: "通过系统化地对比不同 temperature、prompt template 等配置的评估结果，找到最优的超参数组合。"
      }
    ],
    quiz: {
      question: "OpenAI Evals 框架原生支持与哪个实验追踪工具的集成？",
      options: ["MLflow", "Weights & Biases", "Neptune.ai", "Comet ML"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "Preparedness Framework",
    origin: "安全测试",
    meaning: "OpenAI 的 AI 风险准备和评估框架",
    description: "Preparedness Framework 是 OpenAI 专门用于评估和管理前沿 AI 模型风险的框架体系。它关注四大风险类别：网络安全、生物威胁、说服力和自主行为（模型自主获取资源和规避人类控制的能力）。每个风险类别有从'低'到'关键'的分级评估，OpenAI 承诺不部署风险达到'关键'级别的模型。PaperBench 等基准测试就是在这个框架下开发的。Preparedness 团队持续开发新的评估方法，确保模型发布前经过充分的安全验证。",
    examples: [
      {
        word: "风险分级评估",
        meaning: "从'低'到'关键'的四级风险评估体系",
        breakdown: { root: "Preparedness Framework" },
        explanation: "每个风险维度（网络安全、生物威胁等）都有独立的分级评估，模型必须在所有维度都低于'关键'级才能部署。"
      },
      {
        word: "自主行为评估",
        meaning: "测试模型是否会自主获取资源或规避控制",
        breakdown: { root: "Preparedness Framework" },
        explanation: "评估 AI 模型是否表现出自主寻求更多计算资源、复制自身、或规避人类监督等潜在危险行为。"
      },
      {
        word: "说服力评估",
        meaning: "测试模型的说服和操纵能力",
        breakdown: { root: "Preparedness Framework" },
        explanation: "评估模型是否能有效地说服人类做出违背其利益的决定，防止 AI 被用于大规模社会操纵。"
      }
    ],
    quiz: {
      question: "OpenAI Preparedness Framework 不包含以下哪个风险类别？",
      options: ["网络安全", "生物威胁", "经济危机", "自主行为"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    root: "Eval Template System",
    origin: "核心框架",
    meaning: "使用模板语法动态构建评估提示词",
    description: "Eval Template System 是 Evals 框架中用于动态构建评估提示词的模板机制。使用 {{ item.field_name }} 语法将测试数据中的字段动态注入到提示词中，确保评估覆盖多样化的输入场景。模板系统支持在 input_messages 中定义系统消息和用户消息的模板，可以引用数据源中的任意字段。这种设计让评估配置与数据分离，同一个评估模板可以配合不同的数据集运行，大幅提升了评估的灵活性和可复用性。",
    examples: [
      {
        word: "变量插值",
        meaning: "使用 {{ }} 语法注入测试数据",
        breakdown: { root: "Eval Template System" },
        explanation: "在提示词模板中使用 {{ item.ticket_text }} 等语法，运行时自动替换为实际的测试数据值。"
      },
      {
        word: "消息模板",
        meaning: "定义系统消息和用户消息的模板",
        breakdown: { root: "Eval Template System" },
        explanation: "input_messages 中可以同时定义 system 角色的指令模板和 user 角色的输入模板，实现完整的对话评估。"
      },
      {
        word: "模板复用",
        meaning: "同一模板配合不同数据集运行",
        breakdown: { root: "Eval Template System" },
        explanation: "评估模板与数据分离，同一个分类评估模板可以配合不同领域的数据集（IT工单、客服对话等）运行。"
      }
    ],
    quiz: {
      question: "Evals 模板系统使用什么语法进行变量插值？",
      options: ["${variable}", "{{ variable }}", "{variable}", "%variable%"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "Result Analytics",
    origin: "工程实践",
    meaning: "评估结果的分析、可视化和报告机制",
    description: "Result Analytics 是评估工程的最后一环，将原始的评估数据转化为可操作的洞察。OpenAI Evals API 返回的结果数据包括 result_counts（通过/失败总数）、per_testing_criteria_results（各评估标准的具体通过情况）和 per_model_usage（Token使用情况）。每次评估运行还生成一个 report_url，链接到 OpenAI Dashboard 的可视化报告。好的分析不仅关注整体通过率，还需要深入分析失败案例的模式，找到系统性的薄弱环节。",
    examples: [
      {
        word: "失败模式分析",
        meaning: "识别评估失败案例中的共同模式",
        breakdown: { root: "Result Analytics" },
        explanation: "对所有失败的测试用例进行聚类分析，找出系统性的失败模式（如特定类型的问题总是回答错误），指导针对性优化。"
      },
      {
        word: "Token 成本监控",
        meaning: "追踪评估过程中的 Token 消耗",
        breakdown: { root: "Result Analytics" },
        explanation: "per_model_usage 数据帮助了解不同提示词和模型的 Token 消耗，在优化性能的同时控制评估成本。"
      },
      {
        word: "趋势追踪",
        meaning: "监控评估指标随时间的变化趋势",
        breakdown: { root: "Result Analytics" },
        explanation: "对比多次评估运行的结果，追踪各项指标的变化趋势，及时发现性能退化或改进的效果。"
      }
    ],
    quiz: {
      question: "OpenAI Evals API 的结果中不包含以下哪项？",
      options: ["result_counts", "per_testing_criteria_results", "per_model_usage", "training_loss"],
      correctAnswer: 3
    }
  },
  {
    id: 23,
    root: "Cross-Lab Testing",
    origin: "安全测试",
    meaning: "不同 AI 实验室互相测试对方模型的安全协作机制",
    description: "Cross-Lab Testing（跨实验室测试）是 AI 安全评估领域的重要创新实践。2025年8月，OpenAI 与 Anthropic 首次进行了联合安全测试，每家公司使用自己的内部安全协议测试对方的模型。OpenAI 测试了 Anthropic 的 Claude Opus 4 和 Claude Sonnet 4，Anthropic 则测试了 OpenAI 的 GPT 系列模型。这种协作旨在发现各自内部评估中的盲点。OpenAI 联合创始人 Wojciech Zaremba 认为，这种跨实验室协作在 AI 竞争激烈的时代越来越重要。",
    examples: [
      {
        word: "互评机制",
        meaning: "A 公司测试 B 公司的模型，反之亦然",
        breakdown: { root: "Cross-Lab Testing" },
        explanation: "每家公司使用自己独特的安全测试方法论测试对方的模型，这样可以发现单一视角可能遗漏的安全问题。"
      },
      {
        word: "盲点发现",
        meaning: "通过外部视角发现内部评估的盲区",
        breakdown: { root: "Cross-Lab Testing" },
        explanation: "每个团队都可能在长期评估自家模型时形成惯性思维，外部团队的不同测试思路能有效发现被忽略的安全风险。"
      },
      {
        word: "安全标准对齐",
        meaning: "推动行业建立统一的安全评估标准",
        breakdown: { root: "Cross-Lab Testing" },
        explanation: "通过跨实验室的协作测试，不同公司可以对齐安全评估的方法论和标准，推动整个行业的安全水平提升。"
      }
    ],
    quiz: {
      question: "OpenAI 与 Anthropic 的联合安全测试发生在什么时间？",
      options: ["2024年3月", "2024年12月", "2025年5月", "2025年8月"],
      correctAnswer: 3
    }
  },
  {
    id: 24,
    root: "Eval-Driven Development",
    origin: "方法论",
    meaning: "以评估为驱动的 LLM 应用开发方法论",
    description: "Eval-Driven Development（评估驱动开发）是 OpenAI 推荐的 LLM 应用开发方法论，类似于传统软件工程中的 TDD（测试驱动开发）。核心流程是：先定义评估标准和测试数据，再迭代优化提示词和系统设计。每次修改后都运行评估验证效果，形成「定义 → 测试 → 分析 → 改进」的闭环。这种方法论确保了 LLM 应用的质量可量化、改进可追踪，避免了「凭感觉调 prompt」的低效做法。",
    examples: [
      {
        word: "先写评估再写 Prompt",
        meaning: "在设计提示词之前先定义评估标准",
        breakdown: { root: "Eval-Driven Development" },
        explanation: "类似于 TDD 中先写测试再写代码，先明确什么样的输出是好的，再设计提示词来达成目标。"
      },
      {
        word: "迭代优化循环",
        meaning: "定义→测试→分析→改进的闭环流程",
        breakdown: { root: "Eval-Driven Development" },
        explanation: "每次修改提示词后立即运行评估，对比指标变化，基于数据做决策而非主观判断，形成科学的优化循环。"
      },
      {
        word: "质量量化",
        meaning: "用数字衡量 LLM 应用的输出质量",
        breakdown: { root: "Eval-Driven Development" },
        explanation: "避免「这个输出看起来还不错」的主观判断，用明确的评估指标（准确率、相关性、安全性得分）量化质量。"
      }
    ],
    quiz: {
      question: "Eval-Driven Development 最类似于传统软件工程中的什么方法？",
      options: ["敏捷开发", "瀑布模型", "TDD（测试驱动开发）", "极限编程"],
      correctAnswer: 2
    }
  },
  {
    id: 25,
    root: "Git-LFS for Eval Data",
    origin: "数据工程",
    meaning: "使用 Git Large File Storage 管理大规模评估数据",
    description: "Git-LFS（Git Large File Storage）是 OpenAI Evals 框架中管理评估数据的关键基础设施。评估数据集通常体量巨大，直接存储在 Git 仓库中会导致仓库膨胀和克隆缓慢。Evals 框架使用 Git-LFS 将大型数据文件存储在专门的服务器上，Git 仓库中只保留指针文件。开发者克隆仓库后需要运行 git lfs pull 来获取实际的评估数据。这种方式保持了代码和数据的版本同步，同时避免了仓库体积过大的问题。",
    examples: [
      {
        word: "数据版本管理",
        meaning: "将评估数据纳入版本控制",
        breakdown: { root: "Git-LFS for Eval Data" },
        explanation: "评估数据的变更（新增测试用例、修正标签错误等）与代码变更一起记录在 Git 历史中，确保可追溯性。"
      },
      {
        word: "指针文件",
        meaning: "Git 仓库中只存储指向实际数据的引用",
        breakdown: { root: "Git-LFS for Eval Data" },
        explanation: "Git-LFS 将大文件替换为小型指针文件，保持仓库轻量化，实际数据存储在 LFS 服务器上按需拉取。"
      },
      {
        word: "按需下载",
        meaning: "只下载当前需要的评估数据",
        breakdown: { root: "Git-LFS for Eval Data" },
        explanation: "克隆仓库时默认不下载 LFS 数据，开发者可以选择性地拉取需要的数据集，节省带宽和存储空间。"
      }
    ],
    quiz: {
      question: "使用 Git-LFS 管理评估数据的主要好处是什么？",
      options: ["提升数据质量", "加密敏感数据", "避免仓库体积过大", "自动生成测试报告"],
      correctAnswer: 2
    }
  }
];
