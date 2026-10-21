import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import styles from "@/components/CaseStudy.module.css";

export const metadata = {
  title: "Rebuilding a Lender Portal on a Design System — Aria Gorba",
  description:
    "Case study on designing a 27-component design system for a lender portal across four sprints.",
};

export default function LenderPortalCaseStudy() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Header */}
      <header
        className={styles.heroHeader}
        style={{ backgroundColor: "#ECF4F0" }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Rebuilding a Lender Portal on a Design System
          </h1>
          <p className={styles.subtitle}>
            In four sprints, I designed a 27-component design system for a
            lender portal and led its delivery. An engineering vendor built it as
            a reusable component library.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Company</span>
              <span className={styles.metaValue}>Nikel</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Product</span>
              <span className={styles.metaValue}>
                The lender-facing portal of a loan platform
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>
                Senior UX Designer, also acting as Product Manager and Project
                Manager
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>
                22 May to 16 July 2023, four sprints
              </span>
            </div>
          </div>

          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <strong>Problem:</strong> The portal&apos;s UI was built without
              reusable components, so each page was built separately.
            </div>
            <div className={styles.summaryRow}>
              <strong>What I did:</strong> Designed a system of 27 components
              across 15 pages, kept the brand&apos;s look and the placement of
              navigation elements, and led delivery with FPT, an engineering
              vendor.
            </div>
            <div className={styles.summaryRow}>
              <strong>Result:</strong> The vendor built it as a reusable
              component library. An end user and her manager at one partner said
              the refresh made navigation easier.
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className={styles.articleBody}>
        {/* Background */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Background</span>
          </div>
          <p className={styles.paragraph}>
            Nikel was a lending platform that connected lenders (or &quot;funders&quot; in
            Nikel&apos;s terminology) to corporate borrowers. This portal is where
            funders review loan requests, manage their capital pool, and track
            loans through approval, disbursement, and repayment.
          </p>
          <p className={styles.paragraph}>
            The platform&apos;s engineering was handled by a vendor, FPT, and I was
            the Senior UX Designer.
          </p>
        </section>

        {/* Problem */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Problem</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Every page was built on its own.
          </h2>
          <p className={styles.paragraph}>
            The portal&apos;s UI was hard coded, with no reusable components. That
            wasn&apos;t an issue while building new features. But when specifications
            changed, because of improvements or regulatory requirements, every
            affected page had to be changed separately, which was slow and made
            them harder to keep consistent.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img1-dashboard-desktop.png"
              alt="The home page before and after"
              width={1200}
              height={700}
              className={`${styles.figureImage} ${styles.desktopOnly}`}
            />
            <Image
              src="/assets/images/showcase-nikel/nkl_img1-dashboard-mobile.png"
              alt="The home page before and after"
              width={600}
              height={900}
              className={`${styles.figureImage} ${styles.mobileOnly}`}
            />
            <div className={styles.caption}>
              The home page before (top) and after (bottom)
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Approach</span>
          </div>
          <h2 className={styles.sectionTitle}>
            I changed the structure and kept the portal familiar.
          </h2>
          <p className={styles.paragraph}>
            Existing users already knew the portal, so I set one constraint for
            myself: keep the brand&apos;s look and feel and where navigation
            elements, such as buttons, are placed. The aim was a refresh people
            could adopt without relearning.
          </p>

          <h3 className={styles.subTitle}>1. Foundations</h3>
          <p className={styles.paragraph}>
            The base layer covers typography, colors, buttons, and fields.
          </p>

          <h3 className={styles.subTitle}>2. Components</h3>
          <p className={styles.paragraph}>
            On top of the foundations are 27 components, including the top
            navigation bar, side menu, dashboard, cards, lists, tabs, and forms,
            used across 15 pages.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img2-foundations-desktop.png"
              alt="Typography and color foundations"
              width={1200}
              height={700}
              className={`${styles.figureImage} ${styles.desktopOnly}`}
            />
            <Image
              src="/assets/images/showcase-nikel/nkl_img2-foundations-mobile.png"
              alt="Typography and color foundations"
              width={600}
              height={900}
              className={`${styles.figureImage} ${styles.mobileOnly}`}
            />
            <div className={styles.caption}>
              Typography (top) and color foundations (bottom)
            </div>
          </div>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img3-components-desktop.png"
              alt="Navigation bar, breadcrumb, home cards, and tabs"
              width={1200}
              height={700}
              className={`${styles.figureImage} ${styles.desktopOnly}`}
            />
            <Image
              src="/assets/images/showcase-nikel/nkl_img3-components-mobile.png"
              alt="Navigation bar, breadcrumb, home cards, and tabs"
              width={600}
              height={900}
              className={`${styles.figureImage} ${styles.mobileOnly}`}
            />
            <div className={styles.caption}>
              Navigation bar and breadcrumb, home cards, and tabs
            </div>
          </div>

          <h3 className={styles.subTitle}>Before and after</h3>
          <p className={styles.paragraph}>
            Side by side, the refreshed pages keep the familiar layout and brand
            look.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img4-list-page-desktop.png"
              alt="List page, before and after"
              width={1200}
              height={700}
              className={`${styles.figureImage} ${styles.desktopOnly}`}
            />
            <Image
              src="/assets/images/showcase-nikel/nkl_img4-list-page-mobile.png"
              alt="List page, before and after"
              width={600}
              height={900}
              className={`${styles.figureImage} ${styles.mobileOnly}`}
            />
            <div className={styles.caption}>List page, before and after</div>
          </div>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img5-form-page-desktop.png"
              alt="Form page, before and after"
              width={1200}
              height={700}
              className={`${styles.figureImage} ${styles.desktopOnly}`}
            />
            <Image
              src="/assets/images/showcase-nikel/nkl_img5-form-page-mobile.png"
              alt="Form page, before and after"
              width={600}
              height={900}
              className={`${styles.figureImage} ${styles.mobileOnly}`}
            />
            <div className={styles.caption}>Form page, before and after</div>
          </div>
        </section>

        {/* Delivery */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Delivery</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Three design batches, three sprints, and three roles.
          </h2>
          <p className={styles.paragraph}>
            The project ran four sprints, from 22 May to 16 July 2023. I designed
            the design system in three batches across three bi-weekly sprints.
            The fourth sprint was fully implementation and I stayed available to
            resolve technical issues as they came up. I worked in three roles:
          </p>
          <p className={styles.paragraph}>
            <strong>1. Designer</strong>: I designed the design system and the
            screens.
          </p>
          <p className={styles.paragraph}>
            <strong>2. Product Manager</strong>: I wrote some of the development
            tickets, and FPT&apos;s business analyst wrote the more technical ones. I
            also talked with FPT&apos;s engineers to clarify requirements and solve
            technical limits, so we kept to the timeline.
          </p>
          <p className={styles.paragraph}>
            <strong>3. Project manager</strong>: I managed the timeline and
            delivery against the work breakdown structure, sent periodic
            reports to stakeholders, and managed their expectations.
          </p>
          <p className={styles.paragraph}>
            When FPT ran into technical limits in how some components could
            behave, we agreed on solutions and documented them. None of the
            solutions changed the design.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-nikel/nkl_img6-wbs-sheet.png"
              alt="Project WBS sheet"
              width={1200}
              height={600}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              The project&apos;s WBS sheet: 4 total sprints of design and
              implementation.
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Outcome</span>
          </div>
          <h2 className={styles.sectionTitle}>
            FPT built a reusable component library, and one partner liked the
            refresh.
          </h2>

          <h3 className={styles.subTitle}>Implementation</h3>
          <p className={styles.paragraph}>
            FPT implemented the design as a component library for all future
            development of the platform.
          </p>

          <h3 className={styles.subTitle}>Ownership</h3>
          <p className={styles.paragraph}>
            After launch, I owned the system until responsibility passed to
            another designer in 2024. Later pages, such as the breadcrumb and
            universal search, were designed with the same system.
          </p>

          <h3 className={styles.subTitle}>Feedback</h3>
          <p className={styles.paragraph}>
            In one interview, an end user and her manager at a partner company
            said they appreciated the refresh and found it easier to navigate.
            That is one partner and two people, so it is qualitative feedback,
            not a measured result.
          </p>
        </section>

        {/* Reflection */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Reflection</span>
          </div>
          <h2 className={styles.sectionTitle}>
            I would plan how to measure adoption from the start.
          </h2>
          <p className={styles.paragraph}>
            The only outcome evidence I have is one interview. If I did it
            again, I would set up a simple before and after measure at launch,
            such as how long it takes a funder to find a loan, so the effect of
            the refresh could be shown with numbers.
          </p>

          <BackToTop />
        </section>
      </main>

      <Footer />
    </div>
  );
}
