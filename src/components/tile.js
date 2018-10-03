import React from "react";
import {Link} from "gatsby"; 
import {css} from "react-emotion";

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
			opacity: 0.66;
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
			text-align: center;
			color: white;
			pointer-events: none;
		`
	};

	return (
		<Link to={props.to} className={styles.container}>
			<div className={styles.shroud}></div>
			<div className={styles.textContainer}>
				<h4>{props.title}</h4>
				<p>{props.excerpt}</p>
			</div>
		</Link>
	)

}

