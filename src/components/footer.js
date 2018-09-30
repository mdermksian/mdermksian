import React from "react";
import {css} from "react-emotion";
import linkedinIcon from "../images/linkedin.svg";
import emailIcon from "../images/email.svg"
import {Link, graphql, navigate} from "gatsby";

const styles = {
	container: css`
		bottom: 0px;
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		justify-content: center;
	`,
	linkedin: css`
		background-image: url(${linkedinIcon});
		width: 40px;
		height: 40px;
		background-size: cover;
		margin-right:20px;
	`,
	email: css`
		background-image: url(${emailIcon});
		width: 40px;
		height: 40px;
		background-size: cover;
	`
}

export default () => (
	<div className={styles.container}>
		<div onClick={() => navigate('https://www.linkedin.com/in/michael-dermksian/')} className={styles.linkedin}></div>
		<div onClick={() => navigate('mailto:mdermksian@gmail.com')} className={styles.email}></div>
	</div>
)