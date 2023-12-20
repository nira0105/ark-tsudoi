// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARK非公式サーバー ARKプレイヤーの集い',
  tagline: 'ARKでともにサバイバルを!',
  url: 'https://playark.jp',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nira0105', // Usually your GitHub org/user name.
  projectName: 'dinosaur-homepage', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ホーム',
        logo: {
          alt: 'My Site Log',
          src: '/img/join/ARK.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'メニュー',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://discord.gg/mW3jzjunhf',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'メニュー',
            items: [
              {
                label: 'サーバー紹介',
                to: '/docs/intro',
              },
              {
                label: 'サーバールール',
                to: '/docs/rule',
              },
              {
                label: 'サーバー設定',
                to: '/docs/ase/setting',
              },
              {
                label: '参加方法',
                to: '/docs/ase/join',
              },
              {
                label: '支援について',
                to: '/docs/Feeling',
              },
              {
                label: '導入MODに関して',
                to: '/docs/ase/MODs',
              },
              {
                label: 'よくある質問',
                to: '/docs/Question',
              },
              {
                label: 'サポートに関して',
                to: '/docs/support',
              },
              {
                label: 'その他',
                to: '/docs/more',
              },
            ],
            
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mW3jzjunhf',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/niranuranura',
              },
            ],
          },
          {
            title: '規約等',
            items: [
              {
                label: '利用規約',
                href: '/docs/law/terms',
              },
              {
                label: '特定商取引法に基づく記載',
                href: '/docs/law/commerce',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nira0105/ark-tsudoi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      metadata: [
        {name: 'keywords', content: 'ARK,ARK非公式サーバ,ARKdiscord,にら鯖,ARKPC版サーバー'},
        {name: 'description', content: 'ARK非公式サーバー「にら鯖」では24時間365日全てのマップを提供しています。初心者から玄人の方までが楽しめるようなサーバーを提供しています。現在3000人程度の日本最大の非公式サーバーですぜひ参加してみてください‼︎'},
      ]
    }),
};

module.exports = config;
