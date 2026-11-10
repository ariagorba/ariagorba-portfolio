import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <p className={styles.disclaimer}>
            I built this portfolio website using a combination of AI and manual
            judgements. Designed in Figma + Claude via MCP, vibe coded with
            Antigravity and Vercel — all free tier.
          </p>
        </div>

        <div className={styles.rightCol}>
          <a
            href="https://drive.google.com/file/d/1_SqEmjltjW6XL8qUI2uBgyW4oH1jcvqT/view?usp=drive_link"
            className={styles.linkItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <span>&rarr;</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ariagorba"
            className={styles.linkItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin <span>&rarr;</span>
          </a>
          <p className={styles.copyright}>&copy; 2026 Aria Gorba</p>
        </div>
      </div>
    </footer>
  );
}
