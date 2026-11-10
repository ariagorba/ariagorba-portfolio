import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  tags,
  category,
  imageSrc,
  imageAlt,
  href = "#",
  target,
  rel,
}) {
  return (
    <Link
      href={href}
      className={styles.card}
      target={target}
      rel={rel}
    >
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, 690px"
          className={styles.cardImage}
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.readMore}>
          Read more <span aria-hidden="true">&rarr;</span>
        </span>
        {category ? (
          <p className={styles.category}>{category}</p>
        ) : tags && tags.length > 0 ? (
          <ul className={styles.tagList} aria-label="Project tags">
            {tags.map((tag, idx) => (
              <li key={idx} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
