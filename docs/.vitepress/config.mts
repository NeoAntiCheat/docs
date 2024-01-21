import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  title: "NeoAntiCheat | Powerful AntiCheat Solutions",
  description: "One of the most powerful AntiCheat solutions for Nukkit",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    outline: [2, 6],
    logo: "/logo.png",
    siteTitle: "NeoAntiCheat",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getting-started/introduction' },
      { text: 'API', link: '/for-developers/yuki-api' },
      { text: 'Pricing', link: '/getting-started/pricing' },
      { text: 'ToS', link: '/terms-of-use/terms-of-service' },
      
    ],

    footer: {
      message: 'Made with ❤️ by Shiiyuko. ',
    },

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' },
          { text: 'Commands', link: '/getting-started/commands' },
          { text: 'Environment', link: '/getting-started/environment' },
          { text: 'Pricing', link: '/getting-started/pricing' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'General', link: '/configuration/general'},
          { text: 'KillAura', link: '/configuration/killaura'},
          { text: 'Aimbot', link: '/configuration/aimbot'},
          { text: 'AutoClicker', link: '/configuration/autoclicker'},
          { text: 'Reach', link: '/configuration/Reach'},
          { text: 'NoFall', link: '/configuration/NoFall'},
          { text: 'Spammer', link: '/configuration/Spammer'},
          { text: 'Timer', link: '/configuration/Timer'},
          { text: 'Velocity', link: '/configuration/Velocity'},
        ]
      },
      {
        text: 'For developers',
        items: [
          { text: 'Yuki APIs', link: '/for-developers/yuki-api'},
          { text: 'Yuki Events', link: '/for-developers/events'},
        ]
      },
      {
        text: 'Terms of Use',
        items: [
          { text: 'Privacy Collections', link: '/terms-of-use/privacy-collections'},
          { text: 'Terms of Service', link: '/terms-of-use/terms-of-service'},
          
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoAntiCheat' }
    ],

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
