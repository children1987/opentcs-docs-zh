# openTCS 用户手册（中文版）

[openTCS](https://github.com/openTCS/opentcs) 官方用户手册的简体中文翻译，面向**最终用户**和**部署实施人员**。

> 📦 配套 [openTCS 中文 i18n JAR](https://github.com/children1987/opentcs-i18n-zh) — 丢入 `lib/` 即可使用的中文界面语言包

## 为什么有这个项目

openTCS 官方文档仅有英文版。中文翻译[无法合入官方仓库](https://github.com/openTCS/opentcs/pull/261#issuecomment-4756705300)（核心团队无法维护中文内容），官方建议以独立项目形式发布。这正是本项目所做的。

## 在线阅读

> 🚧 Vercel 部署配置中，上线后在此提供链接

**本地运行**（Node.js ≥ 18）：

```bash
git clone https://github.com/children1987/opentcs-docs-zh.git
cd opentcs-docs-zh
npm install
npm run dev          # 启动开发服务器 → http://localhost:5173
```

## 翻译进度

| 章节 | 原文行数 | 译文字符数 | 状态 |
|------|----------|------------|------|
| 介绍 | 43 | ~2,500 | ✅ |
| 教程 | 340 | ~20,000 | ✅ |
| 操作指南 | 179 | ~10,000 | ✅ |
| 参考文档 | 835 | ~45,000 | ✅ |
| **用户手册合计** | **1,397** | **~77,500** | **✅** |
| 开发者指南 | — | — | ⏳ 待翻译 |

翻译引擎：Agnes AI（`agnes-2.0-flash`），统一术语表确保四章翻译一致。

## 项目结构

```
opentcs-docs-zh/
├── docs/                          ← VitePress 文档站点
│   ├── index.md                   ← 首页
│   ├── users-guide/               ← 用户手册（中文 Markdown）
│   │   ├── introduction.md
│   │   ├── tutorials.md
│   │   ├── howtos.md
│   │   ├── reference.md
│   │   └── images/                ← 截图和示意图（来自 openTCS 官方）
│   ├── developers-guide/          ← 开发者指南（占位）
│   └── .vitepress/                ← VitePress 配置 + 主题
├── upstream/                      ← 官方 AsciiDoc 原文（用于 diff 同步）
│   ├── users-guide-*.adoc
│   └── developers-guide-*.adoc
├── package.json
└── .github/workflows/deploy.yml   ← CI：push → 自动构建 → Vercel 部署
```

## 技术栈

| 工具 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev/) | 文档站点框架，内置搜索、暗色主题、中文本地化 |
| [Vercel](https://vercel.com/) | 免费静态托管，push 自动部署 |
| Agnes AI | 批量翻译引擎，统一术语表 |
| GitHub Actions | CI/CD：构建验证 + 自动部署 |

## 与官方文档同步

上游原文保存在 `upstream/` 目录中。当 openTCS 发布新版本时：

1. 从 [openTCS 官方仓库](https://github.com/openTCS/opentcs) 拉取最新 `opentcs-documentation/src/docs/asciidoc/*.adoc`
2. 覆盖 `upstream/` 目录
3. `git diff upstream/` 查看变更
4. 翻译新增/修改的段落
5. 更新对应的 `docs/users-guide/*.md` 文件
6. 检查截图是否新增（`opentcs-documentation/src/docs/asciidoc/_images/`）

无需 rebase，无需编译 Java 项目，无需处理 Java 依赖冲突。

## 相关项目

| 项目 | 说明 |
|------|------|
| [openTCS 官方](https://github.com/openTCS/opentcs) | 交通控制系统的上游仓库 |
| [opentcs-i18n-zh](https://github.com/children1987/opentcs-i18n-zh) | openTCS 中文界面语言包（JAR，丢入即用） |
| [官方文档（英文）](https://opentcs.org/docs/7/index.html) | 英文原版在线文档 |
| [科聪 openTCS 驱动](https://github.com/children1987/kecong-opentcs-driver) | 科聪 AGV 的 openTCS VehicleCommAdapter 驱动 |

## 许可证

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) — 与 openTCS 官方文档一致。

```
SPDX-FileCopyrightText: The openTCS Authors
SPDX-FileCopyrightText: openTCS 中文文档翻译贡献者
```
