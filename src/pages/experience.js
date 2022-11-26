import React from "react";
import {css} from "@emotion/react";
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

const Experience = ({data}) => (
	<Layout>
		<div css={styles.container}>
			<h1 css={styles.title}>Work &amp; Education</h1>
			<p css={styles.tidbit}>Here are all my work and schooling experiences, and the lessons I've learned from each</p>
			<div css={styles.tileContainer}>
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

export default Experience;

export const query = graphql`
	query {
		allMarkdownRemark(sort:{frontmatter: {date: DESC}}, filter:{frontmatter:{category:{eq:"experience"}}}){
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