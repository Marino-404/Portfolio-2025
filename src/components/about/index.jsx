"use client";
import styles from "./style.module.scss";

export default function About() {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <h1>
          Welcome I'm <span>Juan Marino</span>
        </h1>
        <p>
          Frontend developer, passionate about design and technology. I focus on
          creating interfaces that make interactions effortless and reflect the
          personality of each project.
        </p>
      </div>
    </main>
  );
}
