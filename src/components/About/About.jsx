import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I'm a Back-end developer with nearly 6 months of experience
                using Java and Spring Boot. Reach out if you'd like to learn
                more!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I'm a Back-end developer with nearly 6 months of experience
                using Java and Spring Boot. Reach out if you'd like to learn
                more!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I'm a Back-end developer with nearly 6 months of experience
                using Java and Spring Boot. Reach out if you'd like to learn
                more!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
