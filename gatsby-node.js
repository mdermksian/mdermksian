const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`){
		//console.log(createFilePath({node, getNode, basePath: `pages`}));
		const slug = createFilePath({node, getNode, basePath:`pages`});
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});	
	};
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`
		).then(result => {
			result.data.allMarkdownRemark.edges.forEach(({node}) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve(`./src/templates/blog-post.js`),
					context: {
						slug: node.fields.slug
					}
				})
			});
			resolve();
		})
	})
};