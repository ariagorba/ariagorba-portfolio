import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const selectedWorks = [
  {
    id: "gravion",
    title: "No-Code Rule Builder for Risk & Fraud Teams",
    description:
      "My design approach to cut reduce the complexity of fraud rule creation.",
    category: "Category: UI, UX",
    imageSrc: "/assets/images/home-cards/home-card-gravion.png",
    imageAlt: "No-Code Rule Builder for Risk & Fraud Teams preview",
    href: "/showcase/gravion",
  },
  {
    id: "otoraja",
    title: "Making Enterprise Solution Work for MSME",
    description:
      "Designing intuitiveness through research, driving referrals from 0% to 3%.",
    category: "Category: UI, UX, Research, Product Management",
    imageSrc: "/assets/images/home-cards/home-card-otoraja.png",
    imageAlt: "Making Enterprise Solution Work for MSME preview",
    href: "/showcase/otoraja",
  },
  {
    id: "credit-cards",
    title: "Role-Based Approval Workflow for Credit Cards",
    description:
      "Prototyping a multi-role approval workflow to pitch for credit card business.",
    category: "Category: UI, UX",
    imageSrc: "/assets/images/home-cards/home-card-ccc.png",
    imageAlt: "Role-Based Approval Workflow for Credit Cards preview",
    href: "/showcase/credit-cards",
  },
  {
    id: "lender-portal",
    title: "Rebuilding a Lender Portal Through a Design System",
    description:
      "Leading the revamp and delivery of a P2P lending design system.",
    category: "Category: UI, Product Management",
    imageSrc: "/assets/images/home-cards/home-card-nikel.png",
    imageAlt: "Rebuilding a Lender Portal Through a Design System preview",
    href: "/showcase/lender-portal",
  },
];

const caseStudies = [
  {
    id: "cakap",
    title: "Cakap Upskill",
    badgeText: "PDF",
    badgeVariant: "pdf",
    description:
      "Cakap, an edutech platform, wanted to increase the numbers of active students and the attendance rate of webinars.",
    ctaText: "Read more →",
    imageSrc: "/assets/images/case-studies/cakap-upskill.png",
    imageAlt: "Cakap Upskill case study preview",
    href: "https://drive.google.com/file/d/1Wyl3utuESjcYwiuIXZwwg_IzUDQa63Ex/view?usp=sharing",
  },
  {
    id: "surplus",
    title: "Surplus App",
    badgeText: "PDF",
    badgeVariant: "pdf",
    description:
      "Surplus wanted to scale their business by increasing successful transaction rate of their active users each month.",
    ctaText: "Read more →",
    imageSrc: "/assets/images/case-studies/surplus-app.png",
    imageAlt: "Surplus App case study preview",
    href: "https://drive.google.com/file/d/1dimybBXESxJsyZXyFH8eQrXoNA3u-5jW/view?usp=sharing",
  },
  {
    id: "pasmoku",
    title: "Otoraja Pasmoku",
    badgeText: "PDF",
    badgeVariant: "pdf",
    description:
      "Otoraja wanted to expand into used-motorcycle online market and needed an MVP to validate the business model.",
    ctaText: "Read more →",
    imageSrc: "/assets/images/case-studies/otoraja-pasmoku.png",
    imageAlt: "Otoraja Pasmoku case study preview",
    href: "https://drive.google.com/file/d/1miYjQQ7ZObS3lmvb0JQhG6lS99BVJgB7/view?usp=sharing",
  },
  {
    id: "behance",
    title: "Design Portfolio",
    badgeText: "LINK",
    badgeVariant: "link",
    description:
      "View some of my UI design explorations and older portfolio from my advertising agency days that I’ve uploaded to Behance.",
    ctaText: "See it on Behance →",
    imageSrc: null,
    imageAlt: null,
    href: "https://www.behance.net/ariagorba",
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
            I’m a Product Designer who Aims for Adoption
          </h1>
          <p className={styles.heroBio}>
            “Shipped is good. Used by people is 100x better.” That&apos;s my mantra. I design product and UX through research, product thinking, and judgement based on 9 years in tech and 12 in advertising.
          </p>

          {/* Mobile-only quick links under hero */}
          <div className={styles.mobileHeroLinks}>
            <a
              href="https://drive.google.com/file/d/1jAVojhhTpI2mPongtTrHofMHm8KVAy5n/view?usp=sharing"
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
            {selectedWorks.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* Case Studies & Design Portfolio Section */}
        <section
          className={styles.caseStudiesSection}
          aria-labelledby="case-studies-title"
        >
          <h2 id="case-studies-title" className={styles.sectionTitle}>
            Case Studies &amp; Design Portfolio
          </h2>
          <p className={styles.sectionSubtitle}>
            The following case studies showcase how I approach product design projects with my original thinking. They were real project and design challenge that I did before the AI era.
          </p>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                badgeText={study.badgeText}
                badgeVariant={study.badgeVariant}
                description={study.description}
                ctaText={study.ctaText}
                imageSrc={study.imageSrc}
                imageAlt={study.imageAlt}
                href={study.href}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
