import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  href = "#",
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className={styles.cardImage}
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tagList} aria-label="Project tags">
          {tags.map((tag, idx) => (
            <li key={idx} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
