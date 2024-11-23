import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  title: "Asterism | Powerful AntiCheat Solutions",
  description: "One of the most powerful AntiCheat solutions for Nukkit",
  head: [["link", { rel: "icon", href: "/logo.png" }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/getting-started/introduction' },
          { text: 'API', link: '/zh/for-developers/yuki-api' },
          { text: '价格', link: '/zh/getting-started/pricing' },
          { text: '服务条款', link: '/zh/terms-of-use/terms-of-service' },
        ],
        sidebar: [
          {
            text: '开始使用',
            items: [
              { text: '介绍', link: '/zh/getting-started/introduction' },
              { text: '安装', link: '/zh/getting-started/installation' },
              { text: '配置', link: '/zh/getting-started/configuration' },
              { text: '命令', link: '/zh/getting-started/commands' },
              { text: '环境要求', link: '/zh/getting-started/environment' },
              { text: '价格', link: '/zh/getting-started/pricing' },
              { text: '常见问题', link: '/zh/getting-started/faq' },
            ]
          },
          {
            text: '配置详解',
            items: [
              { text: '通用配置', link: '/zh/configuration/general'},
              { text: '反作弊配置', link: '/zh/configuration/anticheat'},
            ]
          },
          {
            text: '开发者专区',
            items: [
              { text: 'Yuki API', link: '/zh/for-developers/yuki-api'},
              { text: 'Yuki 事件', link: '/zh/for-developers/events'},
            ]
          },
          {
            text: '使用条款',
            items: [
              { text: '隐私收集', link: '/zh/terms-of-use/privacy-collections'},
              { text: '服务条款', link: '/zh/terms-of-use/terms-of-service'},
            ]
          },
        ],
        footer: {
          message: '由 Shiiyuko 用 ❤️ 制作',
        },
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "没有找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      }
    }
  },

  themeConfig: {
    outline: [2, 6],
    logo: "/logo.png",
    siteTitle: "Asterism",
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Documentation', link: '/en/getting-started/introduction' },
      { text: 'API', link: '/en/for-developers/yuki-api' },
      { text: 'Pricing', link: '/en/getting-started/pricing' },
      { text: 'ToS', link: '/en/terms-of-use/terms-of-service' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/en/getting-started/introduction' },
          { text: 'Installation', link: '/en/getting-started/installation' },
          { text: 'Configuration', link: '/en/getting-started/configuration' },
          { text: 'Commands', link: '/en/getting-started/commands' },
          { text: 'Environment', link: '/en/getting-started/environment' },
          { text: 'Pricing', link: '/en/getting-started/pricing' },
          { text: 'FAQ', link: '/en/getting-started/faq' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'General', link: '/en/configuration/general'},
          { text: 'AntiCheat', link: '/en/configuration/anticheat'},
        ]
      },
      {
        text: 'For developers',
        items: [
          { text: 'Yuki APIs', link: '/en/for-developers/yuki-api'},
          { text: 'Yuki Events', link: '/en/for-developers/events'},
        ]
      },
      {
        text: 'Terms of Use',
        items: [
          { text: 'Privacy Collections', link: '/en/terms-of-use/privacy-collections'},
          { text: 'Terms of Service', link: '/en/terms-of-use/terms-of-service'},
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoAntiCheat' }
    ],
    footer: {
      message: 'Made with ❤️ by Shiiyuko. ',
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search Documents",
            buttonAriaLabel: "Search Documents",
          },
          modal: {
            noResultsText: "No results could be found",
            resetButtonTitle: "Clear query conditions",
            footer: {
              selectText: "Select",
              navigateText: "Switch",
            },
          },
        },
      },
    },
  }
})