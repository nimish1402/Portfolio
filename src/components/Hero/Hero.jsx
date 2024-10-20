import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm <br></br>Nimish Selot</h1>
        <p className={styles.description}>
        I'm a machine learning engineer with a strong foundation in algorithms, data processing, and model development. I have experience working on various AI projects, including large language models (LLMs). Eager to apply my knowledge in real-world applications and grow as an ML professional. Reach out if you'd like to collaborate or discuss AI solutions!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/download.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero 
