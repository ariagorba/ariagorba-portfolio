"use client";

import Image from "next/image";
import styles from "./CaseStudy.module.css";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.backToTopContainer}>
      <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
        <span>Back to top</span>
        <Image
          src="/assets/icons/fast-arrow-up.svg"
          alt="Arrow up"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
