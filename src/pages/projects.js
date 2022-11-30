import React from "react";
import {css} from "@emotion/react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Tile from "../components/tile";
import Seo from "../components/seo";

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

const Projects = ({data}) => (
	<Layout>
		<div css={styles.container}>
			<h1 css={styles.title}>Projects</h1>
			<p css={styles.tidbit}>These are some of the projects I've completed and the lessons I've learned in their completion.</p>
			<div css={styles.tileContainer}>
				{data.allMdx.nodes.map((node) => {
					const picture = node.frontmatter.picture.childImageSharp.resize.src;
					return (
						<Tile
							key={node.id}
							title={node.frontmatter.title}
							excerpt={node.frontmatter.blurb}
							to={`/${node.frontmatter.slug}`}
							picture={picture}
						/>
					)
				})}
			</div>
		</div>
	</Layout>
)

export const Head = () => <Seo title={`Projects`} />

export default Projects;

export const query = graphql`
	query {
		allMdx(sort:{frontmatter: {date: DESC}}, filter:{frontmatter:{category:{eq:"project"}}}){
			nodes {
				id
				frontmatter {
					title
					slug
					date(formatString: "DD MMMM, YYYY")
					blurb
					picture {
						childImageSharp {
							resize(width:250, height:250){
								src
							}
						}
					}
				}
			}
		}
	}
`;