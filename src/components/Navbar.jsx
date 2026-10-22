import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.header} aria-label="Main Navigation">
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
          <div className={styles.desktopMenu}>
            <a
              href="https://drive.google.com/file/d/1_SqEmjltjW6XL8qUI2uBgyW4oH1jcvqT/view?usp=drive_link"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/ariagorba"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>

          <a
            href="mailto:aria.hamdani@gmail.com"
            className={styles.primaryBtn}
            aria-label="Get in touch"
          >
            <span className={styles.desktopBtnText}>Get in touch</span>
            <span className={styles.mobileBtnText}>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
