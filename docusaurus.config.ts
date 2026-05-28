import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Memo',
  tagline: 'Parce que pourquoi pas',
  favicon: 'icons/logo128.png',

  url: 'https://memo.ripoul.fr',
  baseUrl: '/',

  organizationName: 'ripoul',
  projectName: 'memo',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    './plugins/tagsData.js',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {tagName: 'link', rel: 'icon', href: '/icons/logo128.png'},
          {tagName: 'link', rel: 'manifest', href: '/manifest.json'},
          {tagName: 'meta', name: 'theme-color', content: '#3eaf7c'},
        ],
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Memo',
      logo: {
        alt: 'Memo Logo',
        src: 'icons/logo128.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developmentSidebar',
          position: 'left',
          label: 'Développement',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cuisineSidebar',
          position: 'left',
          label: 'Cuisine',
        },
        {
          href: 'https://github.com/ripoul/memo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `MIT Licensed | Copyright © 2020-${new Date().getFullYear()} Jules LE BRIS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
