# openTCS 用户手册（中文版）

[openTCS](https://github.com/openTCS/opentcs) 官方用户手册的简体中文翻译，面向**最终用户**和**部署实施人员**。

> 📦 配套 [openTCS 中文 i18n JAR](https://github.com/children1987/opentcs-i18n-zh) — 丢入即可使用的中文界面语言包

## 为什么有这个项目

openTCS 官方文档仅有英文版。中文翻译[无法合入官方仓库](https://github.com/openTCS/opentcs/pull/261#issuecomment-4756705300)（核心团队无法维护中文内容），因此维护为独立项目。

## 在线阅读

> 待部署 Vercel 后提供链接

本地运行：

```bash
npm install
npm run dev
```

## 翻译进度

| 章节 | 行数 | 状态 |
|------|------|------|
| 介绍 | 43 | ✅ 完成 |
| 教程 | 340 | ✅ 完成 |
| 操作指南 | 179 | ✅ 完成 |
| 参考文档 | 835 | ✅ 完成 |
| 开发者指南 | — | ⏳ 待翻译 |

## 项目结构

```
opentcs-docs-zh/
├── docs/                          ← VitePress 文档站点
│   ├── index.md                   ← 首页
│   ├── users-guide/               ← 用户手册（中文 Markdown）
│   │   ├── introduction.md
│   │   ├── tutorials.md
│   │   ├── howtos.md
│   │   └── reference.md
│   ├── developers-guide/          ← 开发者指南（占位）
│   └── .vitepress/config.ts       ← VitePress 配置
├── upstream/                      ← 官方 AsciiDoc 原文
│   ├── users-guide-*.adoc
│   └── developers-guide-*.adoc
├── package.json
└── .github/workflows/deploy.yml   ← CI 自动部署
```

## 技术栈

- **[VitePress](https://vitepress.dev/)** — 文档站点框架
- **[Vercel](https://vercel.com/)** — 免费托管（待配置）
- **Agnes AI** — 批量翻译引擎

## 与官方文档同步

上游原文保存在 `upstream/` 目录中。当 openTCS 发布新版本时：

1. 从官方仓库拉取最新 `opentcs-documentation/src/docs/asciidoc/*.adoc`
2. 覆盖 `upstream/` 目录
3. `git diff upstream/` 查看变更
4. 翻译新增/修改的段落
5. 更新对应的 `docs/users-guide/*.md` 文件

无需 rebase，无需编译 Java 项目。

## 许可证

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) — 与 openTCS 官方文档一致。

SPDX-FileCopyrightText: The openTCS Authors
