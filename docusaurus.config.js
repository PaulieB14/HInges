// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hinges',
  tagline: 'Dinosaurs are cool',
  url: 'https://paulieb14@github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paulieb14', // Usually your GitHub org/user name.
  projectName: 'Hinges-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
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
        title: 'Hinges',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Hinges.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/hedgeplus-io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://hinges.io/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: null,
            items: [
              {
                html: `
                <div class="footer-left">
                  <a class="footer-logo" href="https://www.hinges.io/" target="_blank" rel="noopener noreferrer" title="Hinges">
                  <svg width="100%" height="100%" viewBox="0 0 302 77" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.5781 26.9531C30.5781 22.1094 34.0625 18.625 38.9062 18.625C43.75 18.625 47.2344 22.1094 47.2344 26.9531C47.2344 31.7969 43.75 35.2812 38.9062 35.2812C34.0625 35.2812 30.5781 31.7969 30.5781 26.9531ZM49.6406 26.9531C49.6406 19.7344 44.7188 14.8125 37.5 14.8125H24.2656V39.0938H37.5C44.7188 39.0938 49.6406 34.1719 49.6406 26.9531ZM21.2031 14.8125V39.0938H12.6406V14.8125H21.2031ZM55.3125 14.8125C64.6562 14.8125 71.6562 21.8125 71.6562 31.1562C71.6562 40.5 64.6562 47.5 55.3125 47.5C45.9688 47.5 38.9688 40.5 38.9688 31.1562C38.9688 21.8125 45.9688 14.8125 55.3125 14.8125ZM55.3125 24.6406C52.1094 24.6406 49.6406 27.1094 49.6406 30.3125C49.6406 33.5156 52.1094 36 55.3125 36C58.5156 36 61 33.5156 61 30.3125C61 27.1094 58.5156 24.6406 55.3125 24.6406Z" fill="currentColor"/>
                  <path d="M83.375 14.8125H92.2188V35.2812H112.5V39.0938H83.375V14.8125Z" fill="currentColor"/>
                  <path d="M151.688 14.8125C160.234 14.8125 166.766 21.3281 166.766 30C166.766 38.6719 160.234 45.1875 151.688 45.1875C143.141 45.1875 136.609 38.6719 136.609 30C136.609 21.3281 143.141 14.8125 151.688 14.8125ZM151.688 24.6406C148.484 24.6406 146.016 27.1094 146.016 30.                
                  </a>
                  <div class="copyright">
                    <p class="copyright-text">© 2023 Hinges</p>
                    <div class="copyright-links">
                  </div>
                </div>
                `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                  <p class="right">
                    <nav class="social-links">
                        <a class="social-link" href="https://github.com/hedgeplus-io" target="_blank" rel="noopener noreferrer" title="Github">
                         <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47514 0 0 4.47514 0 10C0 14.4199 2.86679 18.1645 6.83855 19.4905C7.33579 19.5826 7.51995 19.2756 7.51995 19.0055C7.51995 18.7661 7.51381 18.14 7.50767 17.3051C4.72683 17.9067 4.13751 15.9668 4.13751 15.9668C3.68324 14.8128 3.0264 14.5058 3.0264 14.5058C2.11786 13.8858 3.09392 13.8981 3.09392 13.8981C4.09454 13.9718 4.62861 14.9294 4.62861 14.9294C5.51872 16.4579 6.96746 16.016 7.53837 15.7581C7.63045 15.1136 7.88827 14.6716 8.17066 14.4199C5.94843 14.1682 3.61571 13.3088 3.61571 9.47821C3.61571 8.38551 4.00246 7.4954 4.64702 6.79558C4.54266 6.54389 4.19889 5.52486 4.74524 4.14978C4.74524 4.14978 5.58625 3.87968 7.4954 5.17495C8.29343 4.95396 9.14672 4.84346 10 4.83732C10.8471 4.83732 11.7066 4.95396 12.5046 5.17495C14.4137 3.87968 15.2548 4.14978 15.2548 4.14978C15.8011 5.52486 15.4573 6.54389 15.353 6.79558C15.9914 7.4954 16.3781 8.38551 16.3781 9.47821C16.3781 13.3211 14.0393 14.1621 11.8109 14.4137C12.167 14.7207 12.4923 15.3346 12.4923 16.2676C12.4923 17.6059 12.48 18.6802 12.48 19.0117C12.48 19.2818 12.6581 19.5887 13.1676 19.4905C17.1393 18.1645 20 14.4199 20 10.0061C20 4.47514 15.5249 0 10 0Z" fill="currentColor"/></svg>
                        </a>
                        <a class="social-link" href="https://discord.gg/6nTkjb6y" target="_blank" rel="noopener noreferrer" title="Discord">
                          <svg width="100%" height="100%" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h71v55H0z"/></clipPath></defs></svg>
                        </a>
                        <a class="social-link" href="https://twitter.com/hingesHQ" target="_blank" rel="noopener noreferrer" title="Twitter">
                          <svg width="100%" height="100%" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.013a9.395 9.395 0 0 1-2.593.676A4.348 4.348 0 0 0 21.392.314a9.341 9.341 0 0 1-2.866 1.042A4.62 4.62 0 0 0 15.232 0c-2.493 0-4.514 1.922-4.514 4.292 0 .336.04.664.117.978C7.083 5.09 3.758 3.382 1.532.786A4.115 4.115 0 0 0 .92 2.944c0 1.489.796 2.802 2.007 3.571A4.669 4.669 0 0 1 .884 5.98v.053c0 2.08 1.555 3.815 3.62 4.209a4.744 4.744 0 0 1-2.038.074c.574 1.705 2.241 2.945 4.216 2.98a9.358 9.358 0 0 1-5.605 1.837c-.365 0-.724-.02-1.077-.06A13.257 13.257 0 0 0 6.918 17c8.303 0 12.843-6.54 12.843-12.21 0-.187-.004-.372-.013-.556A8.929 8.929 0 0 0 22 2.013Z" fill="currentColor"/></svg>
                        </a>
                    </nav>
                  </p>
              `,
              },
            ],
          },
        ],
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;