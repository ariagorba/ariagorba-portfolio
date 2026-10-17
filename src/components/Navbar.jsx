import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/assets/images/profile-picture.png"
            alt="Aria Gorba"
            width={38}
            height={38}
            className={styles.avatar}
            priority
          />
          <span>Aria Gorba</span>
        </Link>

        <div className={styles.navRight}>
          <nav className={styles.desktopLinks} aria-label="Main Navigation">
            <a
              href="https://drive.google.com/file/d/1_SqEmjltjW6XL8qUI2uBgyW4oH1jcvqT/view?usp=drive_link"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <span className={styles.divider}>|</span>
            <a
              href="https://www.linkedin.com/in/ariagorba"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </nav>

          <a
            href="mailto:aria.hamdani@gmail.com"
            className={styles.contactBtn}
            aria-label="Get in touch"
          >
            <span className={styles.desktopBtnText}>Get in touch</span>
            <span className={styles.mobileBtnText}>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
