# 🔬 Harness Engineering 工坊

> 系统学习 Agent-First 世界中的 Harness Engineering 方法论，25 个核心概念掌握「人类掌舵，智能体执行」（Humans steer. Agents execute.）的新工程范式。

基于 OpenAI 技术人员 Ryan Lopopolo 于 2026 年 2 月 11 日发表的实践报告 [*Harness Engineering*](https://openai.com/index/harness-engineering/)，系统梳理 Agent-First 软件开发的核心概念——从环境设计到智能体自主性，从代码可读性到技术债务管理。

🌐 **在线体验**: [https://learn-harness.vercel.app](https://learn-harness.vercel.app)

## 功能特性

- **渐进式学习** — 25 个核心概念逐步学习，每个概念包含详细解释、实践案例和测验
- **闪卡复习** — 支持筛选（全部/已掌握/未掌握/随机），键盘快捷键翻转
- **概念索引** — 全部概念一览，搜索筛选，按分类浏览
- **学习进度** — 分类统计、测试正确率、学习建议、建议复习
- **数据管理** — 学习数据导出/导入/清除，跨设备迁移
- **PWA 支持** — 可添加到主屏幕，支持离线访问
- **SEO 优化** — 完整的 Open Graph、Twitter Card、canonical、sitemap

## 概念覆盖

涵盖 11 大主题 25 个核心概念：

| 主题 | 概念 |
|------|------|
| 核心理念 | Harness Engineering、智能体优先开发（Agent-First Development）、角色转变（Redefining the role of the engineer） |
| 工程方法 | 深度优先的工作方式（Work depth-first） |
| 反馈循环 | Ralph Wiggum 循环（Ralph Wiggum Loop）、智能体审核流水线（Agent Review Pipeline） |
| 知识管理 | 我们将代码仓库设为记录系统（We made repository knowledge the system of record）、目标是智能体的可读性（Agent legibility is the goal）、Docs 目录结构 |
| 架构强制 | 规范架构与品味（Enforcing architecture and taste）、品味不变式（Taste Invariants）、机械强制执行（Mechanical Enforcement） |
| 可读性工程 | 提高应用程序的可读性（Increasing application legibility）、情境即存在（Context as Existence）、可观测性堆栈（Observability Stack）、CDP 集成 |
| 自主性提升 | 不断提高的自主水平（Increasing levels of autonomy） |
| 合并哲学 | 吞吐量改变了合并的理念（Throughput changes the merge philosophy） |
| 代码维护 | 熵与垃圾收集（Entropy and garbage collection）、黄金原则（Golden Principles）、质量等级（Quality Grading）、增量偿还技术债务 |
| 执行模式 | 长时间运行的任务（Long-Running Tasks）、Git Worktree |
| 未来探索 | 我们仍在学习的内容（What we're still learning） |

## 技术栈

- 纯 HTML/CSS/JavaScript（零框架依赖）
- CSS 变量 + 响应式设计
- Service Worker 离线缓存
- LocalStorage 数据持久化

## 本地运行

```bash
# 使用任意静态文件服务器
npx http-server -p 8080 -c-1

# 或使用 Python
python3 -m http.server 8080
```

访问 `http://localhost:8080` 即可。

## 项目结构

```
learn-harness/
├── index.html          # 首页（概念预览卡片）
├── learn.html          # 渐进式学习页
├── flashcard.html      # 闪卡复习页
├── roots.html          # 概念索引页
├── root-detail.html    # 概念详情页
├── progress.html       # 学习进度页
├── css/
│   └── minimal.css     # 全局样式
├── js/
│   ├── siteConfig.js   # 站点配置
│   ├── wordData.js     # 25个概念数据
│   └── storage.js      # 数据存储管理
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker
├── robots.txt          # 爬虫协议
└── sitemap.xml         # 站点地图
```

## 部署

本项目已部署到 Vercel，推送到 `main` 分支即自动部署。

## License

MIT
