import React from "react";
import {css} from "react-emotion";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Tile from "../components/tile";

const styles = {
	container: css`
		display:flex;
		flex-direction:column;
	`,
	title: css`
		text-align:center;
	`,
	tidbit: css`
		text-align:center;
	`,
	tileContainer: css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	`
};

export default ({data}) => (
	<Layout>
		<div className={styles.container}>
			<h1 className={styles.title}>Work</h1>
			<p className={styles.tidbit}>These articles describe the places I've worked and the lessons I've learned while working at each job.</p>
			<div className={styles.tileContainer}>	
				{data.allMarkdownRemark.edges.map(({node}) => {
					const picture = node.frontmatter.picture.childImageSharp.resize.src;
					return (
						<Tile
							key={node.id}
							title={node.frontmatter.title}
							excerpt={node.frontmatter.blurb}
							to={node.fields.slug}
							picture={picture}
						/>
					)
				})}
			</div>
		</div>
	</Layout>
)

export const query = graphql`
	query {
		allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}, filter:{frontmatter:{category:{eq:"work"}}}){
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						blurb
						picture {
							childImageSharp{
								resize(width:250, height:250){
									src
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;