import React from "react";
import {css} from "@emotion/core";
import {Link} from "gatsby";
import delIcon from "../images/icons8-delete.svg";
import menuIcon from "../images/icons8-menu.svg";

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
	`,
	test: css`
		height:40px;
		width:40px;
		background-image: url(${delIcon});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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