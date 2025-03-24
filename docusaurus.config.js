// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "The Soya Project",
	tagline: "Smart, Simple, Soya",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.jpeg",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Chopsticks", // Usually your GitHub org/user name.
	projectName: "The Soya Project", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//editUrl: "https://github.com/AKoreanDumpling/soyaprojectweb",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "The Soya Project",
				logo: {
					alt: "Soya Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation",
					},
					{
						href: "https://AKoreanDumpling.vercel.app",
						label: "About Me",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						label: "Github",
						href: "https://github.com/AKoreanDumpling/Soya",
					},
					{
						label: "Twitter",
						href: "https://twitter.com/AKoreanDumpling",
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Chopsticks. Built with Docusaurus.`,
			},
			prism: {
				theme: lightTheme,
				darkTheme: darkTheme,
			},
		}),
};

module.exports = {
	plugins: ["@gracefullight/docusaurus-plugin-vercel-analytics"],
	presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
};
