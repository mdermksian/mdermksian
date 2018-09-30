import React from "react";
//import { Link, graphql } from "gatsby"
import { css } from "react-emotion";
//import { rhythm } from "../utils/typography"
import Layout from "../components/layout";
import headshot from "../images/headshot.jpg";

const styles = {
	container:css`
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		margin-top:15px;
	`,
	title:css`
		margin-top:20px;
		text-align:center;
	`,
	hsWrapper:css`
		width:30%;
		margin-right: 4%;
	`,
	headshot:css`
		display:block;
		height:auto;
		border-radius:15px;
		min-width: 230px;
	`,
	aboutMe:css`
		width:66%;
	`
}

export default () => {
	return(
		<Layout>
			<div className={styles.container}>
				
				<div className={styles.hsWrapper}>
					<img src={headshot} className={styles.headshot}/>
				</div>
				<div className={styles.aboutMe}>
					<h1 className={styles.title}>Michael Dermksian</h1>
					<p>I'm a trained mechanical and biomedical engineer who's fascinated with medical devices, robotics, and 
					any technology that synthesizes the two. I'm always in pursuit of unsolved problems, impactful solutions, 
					and a team of driven people to help bridge the gap.
					</p>
					<p>Come take a look at the things I've done and get a sense for who I am. Shoot me an email, connect with me
					on LinkedIn, and lets build something awesome together.</p>
				</div>
			</div>
		</Layout>
	)
}

/*export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Michael Dermksian
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
	          <Link
	          	to={node.fields.slug}
	          	className={css`
	          		text-decoration:none;
	          		color:inherit;
	          	`}
	          >
	            <h3
	              className={css`
	                margin-bottom: ${rhythm(1 / 4)};
	              `}
	            >
	              {node.frontmatter.title}{" "}
	              <span
	                className={css`
	                  color: #bbb;
	                `}
	              >
	                — {node.frontmatter.date}
	              </span>
	            </h3>
	            <p>{node.excerpt}</p>
	          </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
          	slug
          }
          excerpt
        }
      }
    }
  }
`*/