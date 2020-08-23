import React from "react";
import {Link} from "gatsby"; 
import {css} from "@emotion/core";

export default (props) => {
	const styles = {
		container:css`
			position:relative;
			width: 250px;
			height: 250px;
			margin: 10px;
			background-image: url(${props.picture});
		`,
		shroud:css`
			position:absolute;
			width:100%;
			height:100%;
			background-color: black;
			opacity: 0.6;
			transition: background-color 0.5s ease-in-out;
			&:hover{
				background-color: #888;
			}
		`,
		textContainer:css`
			display: flex;
			flex-direction: column;
			position:absolute;
			width:100%;
			height:100%;
			padding:10px;
			text-align: center;
			color: white;
			pointer-events: none;
		`
	};

	return (
		<Link to={props.to} css={styles.container}>
			<div css={styles.shroud}></div>
			<div css={styles.textContainer}>
				<h4>{props.title}</h4>
				<p>{props.excerpt}</p>
			</div>
		</Link>
	)

}

