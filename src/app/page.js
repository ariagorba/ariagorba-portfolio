import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const projects = [
  {
    id: "gravion",
    title: "A No–Code Rule Builder for Risk & Fraud Teams",
    description:
      "My design approach cut rule creation from around 10 to about 2 minutes per expert’s estimation.",
    tags: ["UI", "UX"],
    imageSrc: "/assets/images/home-cards/home-card-gravion.png",
    imageAlt: "A No-Code Rule Builder for Risk & Fraud Teams preview",
    href: "/showcase/gravion",
  },
  {
    id: "otoraja",
    title: "Making ERP & POS work for MSME Workshop Owners",
    description:
      "Improving intuitiveness through research-based design. Inbound demo requests rose from 0% to 3%.",
    tags: ["UI", "UX", "Research", "Product Management"],
    imageSrc: "/assets/images/home-cards/home-card-otoraja.png",
    imageAlt: "Making ERP & POS work for MSME Workshop Owners preview",
    href: "/showcase/otoraja",
  },
  {
    id: "credit-cards",
    title: "Role–Based Approval Workflow for Corporate Credit Cards",
    description:
      "In 1 week, I designed a Figma prototype to pitch a multi-role approval workflow for credit cards to a bank.",
    tags: ["UI", "UX"],
    imageSrc: "/assets/images/home-cards/home-card-ccc.png",
    imageAlt: "Role-Based Approval Workflow for Corporate Credit Cards preview",
    href: "/showcase/credit-cards",
  },
  {
    id: "lender-portal",
    title: "Rebuilding a Lender Portal on a Design System",
    description:
      "I led the design system for P2P lending and its delivery, keeping the familiar look for smoother adoption.",
    tags: ["UI", "Design System", "Product Management"],
    imageSrc: "/assets/images/home-cards/home-card-nikel.png",
    imageAlt: "Rebuilding a Lender Portal on a Design System preview",
    href: "/showcase/lender-portal",
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      <main className={styles.contentWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <h1 id="hero-title" className={styles.heroTitle}>
            Designing Products People Actually Use.
          </h1>
          <p className={styles.heroBio}>
            Shipped is good. Adopted is better. I design product and UX through research, product thinking, and judgement based on 9 years in tech and 12 in advertising.
          </p>

          {/* Mobile-only quick links under hero */}
          <div className={styles.mobileHeroLinks}>
            <a
              href="https://drive.google.com/file/d/1_SqEmjltjW6XL8qUI2uBgyW4oH1jcvqT/view?usp=drive_link"
              className={styles.mobileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume <span>&rarr;</span>
            </a>
            <span className={styles.linkDivider}>|</span>
            <a
              href="https://www.linkedin.com/in/ariagorba"
              className={styles.mobileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <span>&rarr;</span>
            </a>
          </div>
        </section>

        {/* Selected Works Section */}
        <section className={styles.worksSection} aria-labelledby="works-title">
          <h2 id="works-title" className={styles.sectionTitle}>
            Selected Works
          </h2>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* Links Section */}
        <section className={styles.linksSection} aria-labelledby="links-title">
          <h2 id="links-title" className={styles.sectionTitle}>
            Links
          </h2>
          <ul className={styles.linksList}>
            <li className={styles.linksListItem}>
              See how I approach UX design work in my case study decks (
              <a
                href="https://drive.google.com/drive/folders/1Bwu4-byNcKuTbtVeNiIkUSFFhLlOuhLu?usp=sharing"
                className={styles.inlineLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Drive
              </a>
              ).
            </li>
            <li className={styles.linksListItem}>
              My earlier portfolio, before this website (
              <a
                href="https://www.behance.net/ariagorba"
                className={styles.inlineLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
              ).
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
