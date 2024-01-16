import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../../utils";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p> {skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
