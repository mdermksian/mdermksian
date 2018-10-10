import React from "react";
import {css} from "react-emotion";
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
	<div className={styles.container}>
		<Link to={'/'} className={styles.item}>Home</Link>
		<Link to={'/work'} className={styles.item}>Work</Link>
		<Link to={'/projects'} className={styles.item}>Projects</Link>
		<Link to={'/hobbies'} className={styles.item}>Hobbies</Link>
	</div>
)