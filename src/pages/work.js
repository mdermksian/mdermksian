import React from "react";
import {css} from "react-emotion";
//import {Link, graphql} from "gatsby";
import Layout from "../components/layout";

const styles = {
	container: css`
		display:flex;
		flex-direction:column;
	`,
	title: css`
		text-align:center;
	`,
	tidbit: css`

	`
}

export default () => (
	<Layout>
		<div className={styles.container}>
			<h1 className={styles.title}>Work</h1>
			<p className={styles.tidbit}>blah blah blah</p>

		</div>
	</Layout>
)