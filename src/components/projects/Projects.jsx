import React from "react";
import projects from "../../data/projects.json";
import ProjectContainer from "./ProjectContainer";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectContainer key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
