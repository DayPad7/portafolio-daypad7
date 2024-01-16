import github from "../../../assets/info/github.svg?react";
import linkedin from "../../../assets/info/linkedin.svg?react";
import mail from "../../../assets/info/mail.svg?react";
import styles from "./Info.module.css";

function Info() {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p> You can reach me out here:</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mail} alt="mailIcon" />
          <a href="mailto:dayanapadilla7@gmail.com">
            dayanapadilla7@gmail.com
          </a>{" "}
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="Linkedin Icon" />
          <a
            href="https://www.linkedin.com/in/dayana-padilla-312042272/"
            target="_blank"
          >
            linkedin.com/DayanaPadilla
          </a>{" "}
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github Icon" />
          <a href="https://github.com/DayPad7" target="_blank">
            github.com/DayPad7
          </a>{" "}
        </li>
      </ul>
    </footer>
  );
}

export default Info;
