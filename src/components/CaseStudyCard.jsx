import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudyCard.module.css";

export default function CaseStudyCard({
  title,
  badgeText = "PDF",
  badgeVariant = "pdf", // "pdf" or "link"
  description,
  ctaText = "Read more →",
  imageSrc,
  imageAlt,
  href = "#",
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  const isImageCard = Boolean(imageSrc);

  return (
    <Link
      href={href}
      className={`${styles.card} ${isImageCard ? styles.withImage : styles.textOnly}`}
      target={target}
      rel={rel}
    >
      {isImageCard && (
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className={styles.cardImage}
            priority={false}
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{title}</h3>
          <span
            className={`${styles.badge} ${
              badgeVariant === "link" ? styles.badgeLink : styles.badgePdf
            }`}
          >
            {badgeText}
          </span>
        </div>
        <p className={styles.description}>{description}</p>
        <span className={styles.cta}>
          {ctaText}
        </span>
      </div>
    </Link>
  );
}

