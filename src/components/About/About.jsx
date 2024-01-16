import React from "react";
import korok from "../../../assets/about/korok.png?react";
import lightIcon from "../../../assets/about/lightbulbIcon.svg?react";
import puzzleIcon from "../../../assets/about/puzzle.svg?react";
import desktopIcon from "../../../assets/about/desktopIcon.svg?react";
import styles from "./about.module.css";
import CV from "./CV/CV.pdf";
import cvIcon from "./CV/cvIcon.svg?react";

function About() {
  const openPDF = () => {
    window.open(CV, "_blank");
  };
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={korok}
          alt="Korok from The Legend of Zelda"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={lightIcon} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer </h3>
              <p>
                I'm FrontEnd Developer with experience building responsive and
                optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={puzzleIcon} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3> Problem-Solving </h3>
              <p>Great problem-solving skills </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={desktopIcon} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3> Restful APIS </h3>
              <p>I have experience with Restful APIS </p>
            </div>
          </li>
          <li className={styles.aboutItemCv}>
            <img src={cvIcon} alt="icon" />

            <a href={CV} target="_blank" rel="noopener noreferrer">
              For a detailed look, click here to view my CV!
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
