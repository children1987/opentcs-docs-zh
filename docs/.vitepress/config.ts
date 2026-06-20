import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/opentcs-docs-zh/',
  lang: 'zh-CN',
  title: 'openTCS 用户手册',
  description: 'openTCS 中文用户手册 — 面向最终用户和部署实施人员',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '用户手册', link: '/users-guide/introduction' },
      { text: '开发者指南', link: '/developers-guide/' },
      {
        text: '相关项目',
        items: [
          { text: 'openTCS 官方', link: 'https://github.com/openTCS/opentcs' },
          { text: '中文 i18n JAR', link: 'https://github.com/children1987/opentcs-i18n-zh' },
          { text: '官方文档 (英文)', link: 'https://opentcs.org/docs/7/index.html' },
        ]
      }
    ],

    sidebar: {
      '/users-guide/': [
        {
          text: '用户手册',
          items: [
            { text: '介绍', link: '/users-guide/introduction' },
            { text: '教程', link: '/users-guide/tutorials' },
            { text: '操作指南', link: '/users-guide/howtos' },
            { text: '参考文档', link: '/users-guide/reference' },
          ]
        }
      ],
      '/developers-guide/': [
        {
          text: '开发者指南',
          items: [
            { text: '概述', link: '/developers-guide/' },
            { text: '教程', link: '/developers-guide/tutorials' },
            { text: '操作指南', link: '/developers-guide/howtos' },
            { text: '参考文档', link: '/developers-guide/reference' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/children1987/opentcs-docs-zh' }
    ],

    footer: {
      message: '基于 <a href="https://github.com/openTCS/opentcs">openTCS</a> 官方文档翻译',
      copyright: 'CC-BY-4.0 — The openTCS Authors'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: {
      text: '最后更新'
    }
  }
})
