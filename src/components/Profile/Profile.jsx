import photoAvatar from "../../../assets/profile/foto2.png?react";
import styles from "./profile.module.css";
function Profile() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Dayana</h1>
        <p className={styles.description}>
          I am Junior FrontEnd Develeper. I’ve been working on web applications
          for 1 year on my own and I absolutely love what I've learned. I
          studied Law, when i fall in love with technology.
        </p>
        <p className={styles.description}>
          I learned software development for the curiosity of knowing how things
          work and now I am passionate in Frontend Develepment.
        </p>
        <a href="mailto:dayanapadilla7@gmail.com" className={styles.contactBtn}>
          {" "}
          Contact Me!
        </a>
      </div>
      <img src={photoAvatar} alt="image of me" className={styles.profileImg} />
      <div className={styles.topBlur} />
    </section>
  );
}

export default Profile;
