module.exports = {
	siteMetadata: {
		title:`Pandas Eating Lots`
	},
	plugins: [
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
		`gatsby-plugin-sharp`,
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
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-typography`,
			options:{
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}