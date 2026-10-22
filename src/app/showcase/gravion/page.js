import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CaseStudyLightbox from "@/components/CaseStudyLightbox";
import styles from "@/components/CaseStudy.module.css";

export const metadata = {
  title: "A No–Code Rule Builder for Risk & Fraud Teams — Aria Gorba",
  description:
    "Case study on designing a no-code fraud rule builder estimated to cut rule creation from ~10 minutes to ~2 minutes.",
};

export default function GravionCaseStudy() {
  return (
    <div className={styles.page}>
      {/* White top navigation bar */}
      <div className={styles.navWrapper}>
        <Navbar showHomeOnMobile={true} />
      </div>

      {/* Hero Header */}
      <header className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            A No–Code Rule Builder for Risk &amp; Fraud Teams
          </h1>

          {/* Desktop Subtitle */}
          <p className={`${styles.subtitle} ${styles.desktopOnly}`}>
            Using this design approach, our in-house risk expert estimated would
            cut fraud rule creation from ~10 minutes to ~2, with no engineering
            needed for most rules.
          </p>

          {/* Mobile Subtitle */}
          <p className={`${styles.subtitle} ${styles.mobileOnly}`}>
            A no-code rule builder that our in-house risk expert estimated would
            cut fraud rule creation from ~10 minutes to ~2, with no engineering
            needed for most rules.
          </p>

          <hr className={styles.heroDivider} />

          {/* Desktop Metadata Grid */}
          <div className={`${styles.metaSection} ${styles.desktopOnly}`}>
            <div className={styles.metaCol}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Company</span>
                <span className={styles.metaValue}>Gravion</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>Senior UX Designer</span>
              </div>
            </div>

            <div className={styles.metaCol}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Product</span>
                <span className={styles.metaValue}>
                  FDS (Fraud Detection System)
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <ul className={styles.metaList}>
                  <li>Phase 1: 2023 (3 months)</li>
                  <li>Phase 2: 2025 - 2026 (6 months)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Metadata List */}
          <div className={`${styles.metaSection} ${styles.mobileOnly}`}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Company</span>
              <span className={styles.metaValue}>Gravion</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Product</span>
              <span className={styles.metaValue}>
                FDS (Fraud Detection System)
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Senior UX Designer</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <ul className={styles.metaList}>
                <li>Phase 1: 2023 (3 months)</li>
                <li>Phase 2: 2025 - 2026 (6 months)</li>
              </ul>
            </div>
          </div>

          {/* Problem - What I did - Result White Card */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Problem</span>
              <span>
                Fraud analysts had to hand-type rules, then wait on engineering
                to implement them.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>What I did</span>
              <span>
                Designed a no-code, dropdown-based rule builder for ALTO, then
                expanded it for Gravion.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Result</span>
              <span>
                Our in-house risk expert estimated rule creation would drop from
                about 10 minutes to about 2. Gravion shut down before launch, so
                this was never tested with production users.
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
              The no-code rule builder began in 2023 as a project for ALTO, a
              client of Nikel&apos;s. In 2025, Nikel split into two companies and
              the FDS development continued at Gravion which expanded its
              capabilities, including the rule builder. The primary users were
              always the fraud ops / risk teams at financial institutions.
              Gravion shut down before launch.
            </p>
            <p className={styles.paragraph}>
              This case study focuses on the rule creation UI. Approval and
              deployment flows aren&apos;t covered here.
            </p>
          </div>
        </section>

        {/* 2. Discovery */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Discovery</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Fraud rules took too long to reach production.
            </h2>
            <p className={styles.paragraph}>
              Fraud detection was completely new to me. So, I started by meeting
              the people who lived the problem daily. I ran a focus group
              discussion (FGD) with ALTO&apos;s fraud ops team, and across the
              sessions, two pain points came up consistently from every team
              member:
            </p>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/alert-orange.svg"
                alt="Alert"
                width={22}
                height={22}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                Writing a fraud rule takes time before it can be implemented.
              </div>
            </div>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/alert-orange.svg"
                alt="Alert"
                width={22}
                height={22}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                Implementation of rule change requires involvement of the
                engineering team.
              </div>
            </div>

            <p className={styles.paragraph}>
              We prioritized these two for the first iteration, since{" "}
              <strong>
                removing this friction was the clearest path to adoption
              </strong>
              .
            </p>
          </div>
        </section>

        {/* 3. Define */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Define</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Exploring fraud rule writing and implementation methods.
            </h2>
            <p className={styles.paragraph}>
              In mature environments, fraud rules are submitted as .md files,
              offering better version control but requiring manual validation. In
              low-code environments, .json files can be tested and deployed
              instantly through the rule engine, but incorrect formatting risks
              breaking the system.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-gravion/grv_img1-rule_ato_json.png"
                alt="Example rule spec in JSON"
                width={1200}
                height={700}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Example of Account Take Over fraud rule written in .json format.
              </div>
            </div>

            <p className={styles.paragraph}>
              I leaned toward low-code method, since the rule engine can handle
              the implementation, directly solving the engineering bottleneck
              from Discovery. That shifted the real problem: the rule still had
              to be written correctly by hand, and that&apos;s where risk opened
              up.
            </p>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/info.svg"
                alt="Info"
                width={22}
                height={22}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                <div className={styles.calloutTitle}>Problem Statement</div>
                Fraud analysts are prone to typographical errors when crafting
                complex rules.
              </div>
            </div>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/chat-question-blue.svg"
                alt="Question"
                width={22}
                height={22}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                <div className={styles.calloutTitle}>HMW Question</div>
                How might we simplify the construction of complex rules so that
                manual typing is minimized or eliminated?
              </div>
            </div>

            <h3 className={styles.subTitle}>Timeline constraint.</h3>
            <p className={styles.paragraph}>
              The project needed a working demo within three months. Requirement
              gathering and initial documentation left little time to explore the
              UI, so I extended the existing Bootstrap component library instead
              of designing new components.
            </p>
          </div>
        </section>

        {/* 4. Develop */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Develop</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              The first version of the no-code rule builder.
            </h2>
            <p className={styles.paragraph}>
              Based on the focus group and follow-up interviews, I designed the
              first version by focusing to reduce input. I used a dropdown-based
              query builder component as the base and extended it&apos;s
              functionality to cater fraud rule building.
            </p>

            <div className={styles.figureGrid}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img2-example-rule-selector.png"
                  alt="V1 rule builder"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  V1 rule builder allowed users to write fraud rule with minimum
                  input and reduce typing mistake.
                </div>
              </div>

              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img3-example-rule-implemented.png"
                  alt="Implemented rule in V1"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  What the V1 fraud rule looked like after being configured using
                  the dropdowns.
                </div>
              </div>
            </div>

            <h3 className={styles.subTitle}>The second version at Gravion scaled it.</h3>
            <p className={styles.paragraph}>
              Our PM was also our SME: a former risk and fraud manager and
              Certified Risk Management Professional. He prioritized current fraud
              scenarios that expanded the FDS capabilities. The rule builder
              must handle more advanced rule logics compared to V1. My design
              challenge was keeping the dropdown flow simple as the rules got
              more complex. The PM&apos;s PRDs guided me on what the UI needed to
              achieve.
            </p>

            <div className={styles.figureGrid}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img4-rule-logic-comparison.png"
                  alt="Expanded logic in V2"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  An expanded capability in V2 was to detect fraud pattern by
                  using Event Comparison logic.
                </div>
              </div>

              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img5-rule-test-result.png"
                  alt="Integrated rule testing"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  The rule testing in V2 was integrated into the creation
                  process compared to separated in V1.
                </div>
              </div>
            </div>

            <p className={styles.paragraph}>
              Before launch, our PM and a software implementor reviewed the tool
              and gave positive feedback on its usability. The PM&apos;s
              walkthrough of the rule creation flow gave us our first time
              estimate, which I cover in the Outcome section.
            </p>
          </div>
        </section>

        {/* 5. Deliver */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Deliver</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              More choosing and less typing.
            </h2>
            <p className={styles.paragraph}>
              My design approach provided a guided flow for analysts, so the
              structure of the rule is valid before it is saved. The Advanced
              Rule is where V2’s capability became challenging. I had to make a
              UI that changed when a specific option in the dropdown is
              selected. The decision was made along side the PM and FE Engineer
              to provide the best clarity for the users.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-gravion/grv_img6-real-config-percentile.png"
                alt="Velocity logic full screen"
                width={1200}
                height={700}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                <span className={styles.desktopOnly}>
                  Gravion&apos;s rule creation screen for Velocity logic, a
                  complex expanded capability of the FDS.
                </span>
                <span className={styles.mobileOnly}>
                  Gravion&apos;s full rule creation screen for Velocity logic, a
                  complex expanded capability of the FDS.
                </span>
              </div>
            </div>

            <p className={styles.paragraph}>
              Since the builder only offers valid options, the users do test
              cycles quickly and frequently. Then, the rules can be sent for
              approvals and later implemented without a handoff to engineering.
            </p>

            <div className={styles.figureGrid}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img7-dropdown-groupby.png"
                  alt="Group By drop down"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  A new addition to V2 was the &ldquo;Group By&rdquo; drop down
                  with multi-select and pre-defined options.
                </div>
              </div>

              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img8-approval-request.png"
                  alt="Approval request screen"
                  width={600}
                  height={400}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  Once the Fraud Manager approves a rule spec, the fraud rule is
                  automatically implemented.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Outcome */}
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
              80% faster rule creation, from 10 to 2 mins, estimated by a risk
              expert.
            </h2>

            {/* Desktop position for Before/After figure (directly under title) */}
            <div className={styles.desktopOnly}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img9-before-after.jpeg"
                  alt="Expert estimate before and after"
                  width={1200}
                  height={600}
                  className={styles.figureImage}
                />
              </div>
            </div>

            <h4 className={styles.h4}>V1 (ALTO)</h4>
            <p className={styles.paragraph}>
              ALTO&apos;s fraud ops team used the first version through the end
              of the project. No usability issues were reported during the
              handover feedback loop, and I don&apos;t know whether they kept
              using it afterward.
            </p>

            <h4 className={styles.h4}>V2 (Gravion)</h4>
            <p className={styles.paragraph}>
              Our Product Manager, a former risk and fraud manager, estimated
              that a simple rule could be built in about 2 minutes, compared with
              roughly 10 minutes manually. This was an in-house expert estimate,
              not a production result.
            </p>

            {/* Mobile position for Before/After figure (after V2 Gravion) */}
            <div className={styles.mobileOnly}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-gravion/grv_img9-before-after.jpeg"
                  alt="Expert estimate before and after"
                  width={1200}
                  height={600}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  Expert estimate, pre-launch
                </div>
              </div>
            </div>

            <h4 className={styles.h4}>Scope</h4>
            <p className={styles.paragraph}>
              The builder covers most rule types, not all. When a new fraud
              pattern falls outside what the interface supports, engineering
              still has to help.
            </p>
          </div>
        </section>

        {/* 7. Reflection */}
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
              Subject matter expert and independent testing.
            </h2>
            <p className={styles.paragraph}>
              A subject matter expert on the team let us validate decisions much
              faster. The trade-off is that he also shaped the requirements, so I
              would pair that speed with testing by analysts outside the team.
            </p>
            <p className={styles.paragraph}>
              If I did it again, I would ask for explicit usability feedback and
              time a few analysts writing rules by hand, so the 10-minute
              baseline would be a measurement, not an estimate. This goes for
              both version of the FDS.
            </p>
          </div>
        </section>

        {/* Back to top */}
        <div className={styles.backToTopContainer}>
          <BackToTop />
        </div>
      </main>

      <CaseStudyLightbox />
      <Footer />
    </div>
  );
}
