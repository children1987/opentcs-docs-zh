---
layout: default
---

# openTCS 用户手册（中文版）

[openTCS](https://github.com/openTCS/opentcs) 官方用户手册的简体中文翻译。

> 📦 配套 [openTCS 中文 i18n JAR](https://github.com/children1987/opentcs-i18n-zh) — 丢入 `lib/` 即可使用的中文界面语言包

## 为什么有这个项目

openTCS 官方文档仅有英文版。中文翻译[无法合入官方仓库](https://github.com/openTCS/opentcs/pull/261#issuecomment-4756705300)，官方建议以独立项目形式发布。

## 目录

{% assign pages = site.pages | where_exp: "p", "p.url contains 'users-guide/'" | sort: 'url' %}
{% for p in pages %}
- [{{ p.title | default: p.name }}]({{ p.url | relative_url }})
{% endfor %}

## 翻译进度

| 章节 | 原文行数 | 译文字符数 | 状态 |
|------|----------|------------|------|
| [介绍](users-guide/introduction) | 43 | ~2,500 | ✅ |
| [教程](users-guide/tutorials) | 340 | ~20,000 | ✅ |
| [操作指南](users-guide/howtos) | 179 | ~10,000 | ✅ |
| [参考文档](users-guide/reference) | 835 | ~45,000 | ✅ |
| **用户手册合计** | **1,397** | **~77,500** | **✅** |
| 开发者指南 | — | — | ⏳ 待翻译 |

## 相关项目

| 项目 | 说明 |
|------|------|
| [openTCS 官方](https://github.com/openTCS/opentcs) | 交通控制系统的上游仓库 |
| [opentcs-i18n-zh](https://github.com/children1987/opentcs-i18n-zh) | 中文界面语言包（JAR，丢入即用） |
| [官方文档（英文）](https://opentcs.org/docs/7/index.html) | 英文原版在线文档 |

## 许可证

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) — 与 openTCS 官方文档一致。
