import { getImageUrl } from "../../../utils";
import styles from "./ProjectC.module.css";

function ProjectContainer({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
