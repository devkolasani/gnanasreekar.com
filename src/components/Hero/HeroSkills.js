import React from "react";

// Styles
import Skill from "./HeroSkill";
import styles from "./Hero.module.scss";

const Skills = () => {
	return (
		<div className={styles.Skills}>
			<p>What I can do.</p>
			<a
				href="https://play.google.com/store/apps/developer?id=R+G+S"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Skill SkillName="Android Development" />
			</a>
			<a
				href="https://www.youtube.com/c/rgstech"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Skill SkillName="Youtube Production" />
			</a>
		</div>
	);
};

export default Skills;
