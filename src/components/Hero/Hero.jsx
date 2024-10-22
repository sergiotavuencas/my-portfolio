import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sérgio</h1>
                <p className={styles.description}>
                    I'm a Back-end developer with nearly 6 months of experience using Java and Spring Boot. 
                    Reach out if you'd like to learn more!
                </p>
                <a className={styles.contactBtn} href="mailto:sergio_tavuencas@outlook.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="He" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
