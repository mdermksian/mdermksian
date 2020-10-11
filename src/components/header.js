import React from "react";
import {css} from "@emotion/core";
import {Link} from "gatsby";

const styles = {
	container: css`
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		justify-content:center;
		font-family: 'Raleway', sans-serif;
	`,
	item: css`
		margin:0px;
		padding:10px;
		transition: color 0.5s ease-in-out;
	`
}

export default () => (
	<div css={styles.container}>
		<Link to={'/'} css={styles.item}>Home</Link>
		<Link to={'/experience'} css={styles.item}>Experience</Link>
		<Link to={'/projects'} css={styles.item}>Projects</Link>
		<Link to={'/hobbies'} css={styles.item}>Hobbies</Link>
	</div>
)