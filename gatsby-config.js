module.exports = {
	siteMetadata: {
		title:`Michael Dermksian`
	},
	plugins: [
		{
			resolve:`gatsby-plugin-manifest`,
			options: {
				name:"Michael Dermksian",
				short_name: "mdermksian",
				start_url: "/",
				background_color: "#FFFFFF",
				theme_color: "#FFFFFF",
				display: "minimal-ui",
				icon: "src/images/skiing-square.jpg"
			}
		},
		{
			resolve:`gatsby-source-filesystem`,
			options:{
				name:`src`,
				path:`${__dirname}/src/`
			}
		},
		{
			resolve:`gatsby-source-filesystem`,
			options:{
				name:`images`,
				path: `${__dirname}/src/images`,
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins:[
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth:550
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-emotion`
		},
		{
			resolve: `gatsby-plugin-typography`,
			options:{
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
			  trackingId: `UA-180654740-1`,
			},
		  },
		`gatsby-plugin-offline`
	],
}