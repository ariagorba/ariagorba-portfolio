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
      {/* White top navigation bar */}
      <div className={styles.navWrapper}>
        <Navbar showHomeOnMobile={true} />
      </div>

      {/* Hero Header */}
      <header className={styles.heroWrapper} style={{ backgroundColor: "#E8F0F0" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Rebuilding a Lender Portal on a Design System
          </h1>

          <p className={styles.subtitle}>
            In four sprints, I designed a 27-component design system for a
            lender portal and led its delivery. An engineering vendor built it as
            a reusable component library.
          </p>

          <hr className={styles.heroDivider} />

          {/* Desktop Metadata Grid */}
          <div className={`${styles.metaSection} ${styles.desktopOnly}`}>
            <div className={styles.metaCol}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Company</span>
                <span className={styles.metaValue}>Nikel</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>
                  Senior UX Designer, also acting as Product Manager and Project
                  Manager
                </span>
              </div>
            </div>

            <div className={styles.metaCol}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Product</span>
                <span className={styles.metaValue}>
                  The lender-facing portal of a loan platform
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>
                  22 May to 16 July 2023, four sprints
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Metadata List */}
          <div className={`${styles.metaSection} ${styles.mobileOnly}`}>
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

          {/* Problem - What I did - Result Summary Card */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Problem</span>
              <span>
                The portal&apos;s UI was built without reusable components, so
                each page was built separately.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>What I did</span>
              <span>
                Designed a system of 27 components across 15 pages, kept the
                brand&apos;s look and the placement of navigation elements, and
                led delivery with FPT, an engineering vendor.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Result</span>
              <span>
                The vendor built it as a reusable component library. An end user
                and her manager at one partner said the refresh made navigation
                easier.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className={styles.articleBody}>
        {/* 1. Background */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Background</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <p className={styles.paragraph}>
              Nikel was a lending platform that connected lenders (or
              &ldquo;funders&rdquo; in Nikel&apos;s terminology) to corporate
              borrowers. This portal is where funders review loan requests,
              manage their capital pool, and track loans through approval,
              disbursement, and repayment.
            </p>
            <p className={styles.paragraph}>
              The platform&apos;s engineering was handled by a vendor, FPT, and
              I was the Senior UX Designer.
            </p>
          </div>
        </section>

        {/* 2. Problem */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Problem</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Every page was built on its own.
            </h2>
            <p className={styles.paragraph}>
              The portal’s UI was hard coded, with no reusable components. That
              wasn’t an issue while building new features. But when specifications
              changed, because of improvements or regulatory requirements,
              every affected page had to be changed separately, which was slow
              and made them harder to keep consistent.
            </p>

            {/* Desktop Dashboard */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img1-dashboard-desktop.png"
                alt="Dashboard before and after design system implementation"
                width={902}
                height={222}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                The home page’s dashboard, before and after the new design
                system implementation.
              </div>
            </div>

            {/* Mobile Dashboard */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img1-dashboard-mobile.png"
                alt="Dashboard before and after design system implementation"
                width={902}
                height={380}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                The home page’s dashboard, before and after the new design
                system implementation.
              </div>
            </div>
          </div>
        </section>

        {/* 3. Approach */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Approach</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              I changed the structure and kept the portal familiar.
            </h2>
            <p className={styles.paragraph}>
              Existing users already knew the portal, so I set one constraint
              for myself: keep the brand&apos;s look and feel and where
              navigation elements, such as buttons, are placed. The aim was a
              refresh people could adopt without relearning.
            </p>

            {/* Foundations */}
            <h3 className={styles.subTitle}>Foundations</h3>
            <p className={styles.paragraph}>
              The base layer covers typography, colors, buttons, and fields.
            </p>

            {/* Desktop Foundations */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img2-foundations-desktop.png"
                alt="Typography and color foundations desktop"
                width={902}
                height={311}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Typography and color foundations.
              </div>
            </div>

            {/* Mobile Foundations */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img2-foundations-mobile.png"
                alt="Typography and color foundations mobile"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Typography and color foundations.
              </div>
            </div>

            {/* Components */}
            <h3 className={styles.subTitle}>Components</h3>
            <p className={styles.paragraph}>
              On top of the foundations are 27 components, including the top
              navigation bar, side menu, dashboard, cards, lists, tabs, and
              forms, used across 15 pages.
            </p>

            {/* Desktop Components */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img3-components-desktop.png"
                alt="Navigation bar, breadcrumb, cards, and tabs desktop"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Navigation bar and breadcrumb, home cards, and tabs.
              </div>
            </div>

            {/* Mobile Components */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img3-components-mobile.png"
                alt="Navigation bar, breadcrumb, cards, and tabs mobile"
                width={902}
                height={450}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Navigation bar and breadcrumb, home cards, and tabs.
              </div>
            </div>

            {/* Before and After */}
            <h2 className={styles.sectionTitle} style={{ marginTop: "3.5rem" }}>
              Before and after
            </h2>
            <p className={styles.paragraph}>
              Here are 2 comparisons of the refreshed pages. I kept the familiar
              layout and brand look.
            </p>

            {/* List Page Desktop */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img4-list-page-desktop.png"
                alt="List page before and after desktop"
                width={902}
                height={298}
                className={styles.figureImage}
              />
              <div className={styles.caption}>List page, before and after.</div>
            </div>

            {/* List Page Mobile */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img4-list-page-mobile.png"
                alt="List page before and after mobile"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>List page, before and after.</div>
            </div>

            {/* Form Page Desktop */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img5-form-page-desktop.png"
                alt="Form page before and after desktop"
                width={902}
                height={271}
                className={styles.figureImage}
              />
              <div className={styles.caption}>Form page, before and after.</div>
            </div>

            {/* Form Page Mobile */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img5-form-page-mobile.png"
                alt="Form page before and after mobile"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>Form page, before and after.</div>
            </div>
          </div>
        </section>

        {/* 4. Delivery */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Delivery</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Three design batches, three roles.
            </h2>
            <p className={styles.paragraph}>
              The project ran four sprints, from 22 May to 16 July 2023. I
              designed the design system in three batches across three bi-weekly
              sprints. The fourth sprint was fully implementation and I stayed
              available to resolve technical issues as they came up. I worked in
              three roles:
            </p>

            <h3 className={styles.subTitle}>Designer</h3>
            <p className={styles.paragraph}>
              I designed the design system and the screens.
            </p>

            <h3 className={styles.subTitle}>Product Manager</h3>
            <p className={styles.paragraph}>
              I wrote some of the development tickets, and FPT&apos;s business
              analyst wrote the more technical ones. I also talked with
              FPT&apos;s engineers to clarify requirements and solve technical
              limits, so we kept to the timeline.
            </p>

            <h3 className={styles.subTitle}>Project Manager</h3>
            <p className={styles.paragraph}>
              I managed the timeline and delivery against the work breakdown
              structure, sent periodic reports to stakeholders, and managed
              their expectations.
            </p>

            <p className={styles.paragraph}>
              When FPT ran into technical limits in how some components could
              behave, we agreed on solutions and documented them. None of the
              solutions changed the design.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-nikel/nkl_img6-wbs-sheet.png"
                alt="The project WBS sheet"
                width={902}
                height={465}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                The project’s WBS sheet: 4 total sprints of design and
                implementation.
              </div>
            </div>
          </div>
        </section>

        {/* 5. Outcome */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Outcome</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Delivered a reusable component library that goes beyond Nikel.
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
          </div>
        </section>

        {/* 6. Reflection */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Reflection</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              I would plan how to measure adoption from the start.
            </h2>
            <p className={styles.paragraph}>
              The only outcome evidence I have is one interview. If I did it
              again, I would set up a simple before and after measure at launch,
              such as how long it takes a funder to find a loan, so the effect of
              the refresh could be shown with numbers.
            </p>
          </div>
        </section>

        {/* Back to top */}
        <div className={styles.backToTopContainer}>
          <BackToTop />
        </div>
      </main>

      <Footer />
    </div>
  );
}
