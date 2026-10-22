import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import styles from "@/components/CaseStudy.module.css";

export const metadata = {
  title: "A No–Code Rule Builder for Risk & Fraud Teams — Aria Gorba",
  description:
    "Case study on designing a no-code fraud rule builder estimated to cut rule creation from 10 minutes to 2 minutes.",
};

export default function GravionCaseStudy() {
  return (
    <div className={styles.page}>
      {/* Hero Header with seamless top navbar */}
      <div
        className={styles.heroWrapper}
        style={{ backgroundColor: "#EDEBF4" }}
      >
        <Navbar showHomeOnMobile={true} />
        <header className={styles.heroContent}>
          <h1 className={styles.title}>
            A No–Code Rule Builder for Risk &amp; Fraud Teams
          </h1>
          <p className={styles.subtitle}>
            Using this design approach, our in-house risk expert estimated would
            cut fraud rule creation from ~10 minutes to ~2, with no engineering
            needed for most rules.
          </p>

          <div className={styles.metaCard}>
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
                  Gravion - Fraud Detection System
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

          <div className={styles.summaryBox}>
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
        </header>
      </div>

      {/* Article Content */}
      <main className={styles.articleBody}>
        {/* Background */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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
              client of Nikel&apos;s. In 2025, Nikel split into two companies: Gravion
              (fraud detection) and Ulysses Two (lending technology). The FDS
              development continued at Gravion to broaden its capabilities, which
              expanded what the rule builder needed to do. For both phases, the
              primary users were fraud ops / risk teams at financial
              institutions.
            </p>
            <p className={styles.paragraph}>Gravion shut down before launch.</p>
          </div>
        </section>

        {/* Discovery */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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
                src="/assets/icons/idea.svg"
                alt="Idea icon"
                width={20}
                height={20}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                Writing a fraud rule takes time before it can be implemented.
                Things to consider are rule complexity, testing, and approval
                process.
              </div>
            </div>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/idea.svg"
                alt="Idea icon"
                width={20}
                height={20}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                Fraud ops teams couldn&apos;t act independently on rule changes.
                Rule implementation requires involvement of the engineering
                team.
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

        {/* Define */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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
              In a mature environment, the fraud rule is submitted as an .md
              file, which offers strong version control and is engineer-friendly,
              but requires the rule to be validated manually.
            </p>
            <p className={styles.paragraph}>
              If the org uses a low-code rule engine, the specification is
              submitted as a .json or .yaml file. It&apos;s easily tested, and
              the rule engine reads the file and deploys the change instantly, but
              there&apos;s a code breakage risk if the file isn&apos;t written
              correctly.
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
                Example of a fraud rule written in .json format to detect Account
                Take Over patterns.
              </div>
            </div>

            <p className={styles.paragraph}>
              I leaned toward the low-code method, since the rule engine handles
              implementation automatically, directly solving the engineering
              bottleneck from Discovery. That shifted the real problem: the rule
              still had to be written correctly by hand, and that&apos;s where
              risk opened up.
            </p>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/info.svg"
                alt="Info icon"
                width={20}
                height={20}
                className={styles.calloutIcon}
              />
              <div className={styles.calloutText}>
                <div className={styles.calloutTitle}>Problem Statement</div>
                Fraud operations analysts are prone to typographical errors when
                crafting complex rules. We assumed a text-heavy input interface
                adds to their cognitive load.
              </div>
            </div>

            <div className={styles.callout}>
              <Image
                src="/assets/icons/chat-question.svg"
                alt="Question icon"
                width={20}
                height={20}
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

        {/* Develop */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Develop</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              The first version put the idea in front of real users.
            </h2>
            <p className={styles.paragraph}>
              I built the first version as a no-code, dropdown-based rule builder,
              directly from what I&apos;d learned in the focus group and
              follow-up interviews. Instead of typing a rule as code, fraud ops
              could construct one by selecting conditions from a set of dropdowns.
              This was aimed at the typing errors and cognitive load described in
              the Problem Statement.
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
                  V1 rule builder setup allows the user to write fraud rule without
                  coding.
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
                  What the fraud rule looked like in V1 after it has been
                  implemented.
                </div>
              </div>
            </div>

            <h3 className={styles.subTitle}>The second version scaled it.</h3>
            <p className={styles.paragraph}>
              At Gravion, our Product Manager was also our subject matter
              expert: a former risk and fraud manager and Certified Risk
              Management Professional. He benchmarked other fraud detection
              platforms and recommended expanding what the FDS could do. For the
              rule builder, that meant handling more complex rule logic and
              combinations of existing rules. My design challenge was keeping the
              dropdown flow simple as the rules got more complex. The Product
              Manager&apos;s PRDs showed me what the UI needed to achieve.
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
                  The rule testing in V2 was integrated into the creation process
                  compared to separated in V1.
                </div>
              </div>
            </div>

            <p className={styles.paragraph}>
              Before launch, our Product Manager and a software implementor
              reviewed the tool and gave positive feedback on its usability. The
              Product Manager&apos;s walkthrough of the rule creation flow gave
              us our first time estimate, which I cover in the Outcome section.
            </p>
          </div>
        </section>

        {/* Deliver */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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
              This case study focuses on the rule creation UI. Approval and
              deployment flows aren&apos;t covered here.
            </p>
            <p className={styles.paragraph}>
              The final rule builder replaces hand-typed queries with a guided
              flow. Analysts select each part of a rule from dropdowns, so the
              structure of the rule is valid before it is saved. A rule starts with
              basic information and base conditions. The analyst can then add
              advanced rules, which need further setup, and finish with a time
              frame, a decisioning method, and an automated response.
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
                Gravion&apos;s rule creation screen for Velocity logic, a
                complex expanded capability of the FDS.
              </div>
            </div>

            <p className={styles.paragraph}>
              Because the builder only offers valid options, it is designed to
              prevent the typing errors and repeated testing cycles described in
              the Problem Statement. Rules of supported types can be implemented
              without a handoff to engineering.
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
                  A new addition to V2 was the &quot;Group By&quot; drop down with
                  multi-select and pre-defined options.
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

        {/* Outcome */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-gravion/grv_img9-before-after.jpeg"
                alt="Expert estimate before and after"
                width={1200}
                height={600}
                className={styles.figureImage}
              />
              <div className={styles.caption}>Expert estimate, pre-launch</div>
            </div>

            <h3 className={styles.subTitle}>V1 (ALTO)</h3>
            <p className={styles.paragraph}>
              ALTO&apos;s fraud ops team used the first version through the end
              of the project. No usability issues were reported during the
              handover feedback loop, and I don&apos;t know whether they kept
              using it afterward.
            </p>

            <h3 className={styles.subTitle}>V2 (Gravion)</h3>
            <p className={styles.paragraph}>
              Our Product Manager, a former risk and fraud manager, estimated
              that a simple rule could be built in about 2 minutes, compared with
              roughly 10 minutes manually. This was an in-house expert estimate,
              not a production result.
            </p>

            <h3 className={styles.subTitle}>Scope</h3>
            <p className={styles.paragraph}>
              The builder covers most rule types, not all. When a new fraud
              pattern falls outside what the interface supports, engineering
              still has to help.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-right.svg"
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
              time a few analysts writing rules by hand, so the 10-minute baseline
              would be a measurement, not an estimate. This goes for both version
              of the FDS.
            </p>

            <BackToTop />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
