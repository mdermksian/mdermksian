import React from "react";
import {Link} from "gatsby"; 
import {css} from "react-emotion";

const styles = {
	container:css`
		display: flex;
		flex-direction: column;
		width: 250px;
		height: 250px;
		margin: 10px;
		background-color: black;
		text-align: center;
		color: white;
		transition: color 0.5s ease-in-out;
	`
};

export default (props) => (
	<Link to={props.to} className={styles.container}>
		<h5>{props.title}</h5>
		<p>{props.excerpt}</p>
	</Link>
)