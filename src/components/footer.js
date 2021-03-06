import React from "react";
import {css} from "@emotion/core";
import linkedinIcon from "../images/linkedin.svg";
import emailIcon from "../images/email.svg"

const styles = {
	container: css`
		bottom: 0px;
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		margin-top: 50px;
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
	<div css={styles.container}>
		<a href='https://www.linkedin.com/in/michael-dermksian/' css={styles.linkedin} target = "_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html:'' }} />
		<a href='mailto:mdermksian@gmail.com' css={styles.email} dangerouslySetInnerHTML={{ __html:'' }} />
	</div>
)