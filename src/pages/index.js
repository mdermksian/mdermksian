import React from "react";
import { css } from "react-emotion";
import Layout from "../components/layout";
import headshot from "../images/headshot.jpg";

const styles = {
	container:css`
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		margin-top:15px;
	`,
	title:css`
		margin-top:20px;
		text-align:center;
	`,
	headshot:css`
		width:30%;
		display:block;
		height:auto;
		border-radius:10px;
		min-width: 230px;
	`,
	aboutMe:css`
		width:60%;
		min-width: 230px;
	`
}

export default () => {
	return(
		<Layout>
			<div className={styles.container}>
			
				<img src={headshot} className={styles.headshot} alt=''/>
				<div className={styles.aboutMe}>
					<h1 className={styles.title}>Michael Dermksian</h1>
					<p>I'm a mechanical and biomedical engineer who's fascinated with medical devices, robotics, and 
					any technology that synthesizes the two. I'm always in pursuit of unsolved problems, impactful solutions, 
					and a team of driven people to help bridge the gap.
					</p>
					<p>Come take a look at the things I've done and get a sense for who I am. Shoot me an email, connect with me
					on LinkedIn, and lets build something awesome together.</p>
				</div>
			</div>
		</Layout>
	)
}