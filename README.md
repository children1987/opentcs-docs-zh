# openTCS 文档中文翻译

[openTCS](https://www.opentcs.org/)（open Transport Control System）是一个开源的运输控制系统平台。本项目是 openTCS 官方文档的中文翻译版本。

## 内容

本项目包含以下官方文档的中文翻译：

- **用户手册** ([users-guide.html](users-guide.html)) — openTCS 使用指南
- **开发者指南** ([developers-guide.html](developers-guide.html)) — openTCS 二次开发与集成指南
- **API 文档** — 位于 [api-base/](api-base/) 和 [api-injection/](api-injection/) 目录
- **Web API 文档** — 位于 [service-web-api-v1/](service-web-api-v1/) 目录
- **贡献者指南** ([contributors.html](contributors.html))
- **变更日志** ([changelog.html](changelog.html))

## 在线浏览

文档为 Asciidoctor 生成的静态 HTML，可直接在浏览器中打开对应的 `.html` 文件查看。

也可通过 GitHub Pages 在线浏览：

```
https://children1987.github.io/opentcs-docs-zh/
```

## 构建

原文使用 Asciidoctor 构建。

```bash
# 安装 Asciidoctor
gem install asciidoctor

# 构建 HTML
asciidoctor <源文件>.adoc
```

## 翻译说明

- 翻译基于 openTCS 官方文档的 Asciidoctor HTML 输出
- 在保留原始 HTML 结构的前提下，将英文内容替换为中文
- 翻译工作以文本节点级别进行，最大程度保持格式与样式不变

## 开源许可

本项目翻译内容遵循 [openTCS MIT License](https://github.com/opentcs/opentcs/blob/develop/LICENSE)。原文版权归 openTCS 原作者所有。

## 相关链接

- [openTCS 官方网站](https://www.opentcs.org/)
- [openTCS GitHub](https://github.com/opentcs/opentcs)
- [Asciidoctor](https://asciidoctor.org/)
