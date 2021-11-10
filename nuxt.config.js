export default {
	ssr: true,
	target: 'static',
	components: true,
	head: {
		title: 'Custom Cursor JS',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ title: 'Custom Cursor JS' },
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: `custom-cursor.js a libaray that enables the creation and
			customization of javascript based cursors. Makes custom cursors easy.`
			}
		],
		link: [
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=block'
			},
			{ rel: 'apple-touch-icon', sizes: '180x180', href: 'favicons/apple-touch-icon.png' },
			{ rel: 'icon', sizes: '32x32', href: 'favicons/favicon-16x16.png' },
			{ rel: 'icon', sizes: '16x16', href: 'favicons/favicon-32x32.png' },
			{ rel: 'manifest', href: '/favicons/site.webmanifest' }
		]
	},
	modules: ['@nuxtjs/style-resources'],
	styleResources: {
		scss: ['~/assets/styles/main.scss']
	},
	css: [{ src: '~/assets/styles/main.scss', lang: 'scss' }]
}
