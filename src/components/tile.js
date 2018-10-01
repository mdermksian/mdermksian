import React from "react";
import {css} from "react-emotion";

const styles = {
	container:css`
		display: flex;
		flex-direction: column;
		width: 250px;
		height: 250px;
		margin: 10px;
		background-color: red;
		text-align: center;
		color: white;
	`
};

export default (props) => (
	<div className={styles.container}>
		<h5>{props.title}</h5>
		<p>{props.excerpt}</p>
	</div>
)