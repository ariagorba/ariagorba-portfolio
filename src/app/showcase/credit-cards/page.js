import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CaseStudyLightbox from "@/components/CaseStudyLightbox";
import styles from "@/components/CaseStudy.module.css";

export const metadata = {
  title:
    "Role-Based Approval Workflow for Corporate Credit Cards — Aria Gorba",
  description:
    "Case study on designing a multi-role approval workflow prototype for corporate credit cards in one week.",
};

export default function CreditCardsCaseStudy() {
  return (
    <div className={styles.page}>
      {/* White top navigation bar */}
      <div className={styles.navWrapper}>
        <Navbar showHomeOnMobile={true} />
      </div>

      {/* Hero Header */}
      <header className={styles.heroWrapper} style={{ backgroundColor: "#E9EFF8" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Role-Based Approval Workflow for Corporate Credit Cards
          </h1>

          <p className={styles.subtitle}>
            In one week, I designed the screens and prototype for a multi-role
            approval workflow for corporate credit cards. The pitch received no
            response, and the design was never built.
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
                  Senior UX Designer (UI and screen flows for each user role),
                  working with a Product Manager
                </span>
              </div>
            </div>

            <div className={styles.metaCol}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Product</span>
                <span className={styles.metaValue}>
                  A pitch for corporate credit card onboarding system, shown as a
                  prototype
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>Q1 2024, one week</span>
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
                A pitch for corporate credit card onboarding system, shown as a
                prototype
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>
                Senior UX Designer (UI and screen flows for each user role),
                working with a Product Manager
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>Q1 2024, one week</span>
            </div>
          </div>

          {/* Problem - What I did - Result Summary Card */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Problem</span>
              <span>
                A corporate card application passes through many approvers, so
                each person has to see their own work clearly and trust the
                checks made before theirs.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>What I did</span>
              <span>
                Designed the screens and prototype for each user role in one
                week, from the application through approval.
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Result</span>
              <span>
                The pitch received no response and the design was never built,
                so none of it was tested with real users.
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
              Nikel began as a P2P lending platform and pivoted to selling
              lending technology, such as loan origination and loan management
              systems, to financial institutions. The goal of this project was
              to sell that technology to banks, since credit cards can only be
              issued by banks. The opening was a pitch to a global payments
              network through a partner bank, and we had one week to prepare the
              screens and a prototype.
            </p>
            <p className={styles.paragraph}>
              The team was two people: a Product Manager and me. The Product
              Manager defined how the system should work. I translated those
              requirements into the screens and flows for each user role. This
              project was before the era of AI in product development.
            </p>
          </div>
        </section>

        {/* 2. Brief */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Brief</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Showcasing a robust credit card onboarding system within a week.
            </h2>
            <p className={styles.paragraph}>
              Issuing a credit card requires multiple checking and approvals.
              An operations user fills in the application, a supervisor and
              analysts review it, and the Analyst Manager can approve, push
              back, reject, or escalate it. Approval sends a request to print the
              card. A card creation officer separately handles additional cards
              for existing customers. This showcase follows the standard path,
              where an application does not need special review. The design
              challenge had two parts:
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
                Each role needed to see only the work and information relevant
                to it.
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
                The system needed a clear record of who checked what, and when.
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
              Four decisions shaped the system.
            </h2>
            <p className={styles.paragraph}>
              I focused on four decisions, each tied to the roles in the
              workflow.
            </p>

            {/* Decision 1 */}
            <h3 className={styles.subTitle}>A workbench for each role</h3>
            <p className={styles.paragraph}>
              Every role opens to a workbench with the same structure, adapted
              to what that role acts on, with work needing action first.
              Operations sees drafts and push backs, and the supervisor sees
              applications to review and push backs. Below that, a snapshot for
              the default period shows totals, approved, rejected, and canceled.
              This follows a common habit in Indonesian companies: a manager
              casually asks for the numbers and expects a verbal answer. This came
              from the Product Manager’s experience.
            </p>

            {/* Desktop Workbench */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img1-workbench-vs-desktop.png"
                alt="Workbench for Operations and Supervisor"
                width={902}
                height={168}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Workbench for different roles: Operations (left) and Supervisor
                (right). Can you spot the difference?
              </div>
            </div>

            {/* Mobile Workbench */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img1-workbench-vs-mobile.png"
                alt="Workbench for Operations and Supervisor"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Workbench for different roles: Operations (left) and Supervisor
                (right). Can you spot the difference?
              </div>
            </div>

            {/* Decision 2 */}
            <h3 className={styles.subTitle}>
              Check marks on required fields only
            </h3>
            <p className={styles.paragraph}>
              Reviewers confirm information by checking required fields, not
              every field. I wanted the checker&apos;s job not to feel daunting,
              so there is less to confirm and less cognitive fatigue. This was a
              design intention, and it was never tested with real reviewers.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img2-form-checkbox.png"
                alt="Supervisor form with check marks on required fields"
                width={902}
                height={598}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Supervisor&apos;s form: check marks appear only beside required
                fields
              </div>
            </div>

            {/* Decision 3 */}
            <h3 className={styles.subTitle}>
              A business rule built into the flow
            </h3>
            <p className={styles.paragraph}>
              On the card template step, the application can&apos;t be submitted
              until the customer has approved the card design. The form tells the
              operations user what to do next. The flow handles the rule, so the
              user doesn&apos;t have to remember it.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img3-card-logo.png"
                alt="Card template step with customer approval block"
                width={902}
                height={489}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Card template step: submission is blocked until the customer
                approves the design
              </div>
            </div>

            {/* Decision 4 */}
            <h3 className={styles.subTitle}>
              Task delegation and notifications
            </h3>
            <p className={styles.paragraph}>
              The Product Manager defined who can delegate to whom, by branch
              and by area. I designed a delegation popup for each role that
              applies those rules. I also designed email notifications for
              approval, push back, rejection, and cancellation, in desktop and
              mobile versions.
            </p>

            <div className={styles.figureGrid}>
              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-visaccc/ccc_img4-delegate.png"
                  alt="Delegation popup for Analyst Manager"
                  width={438}
                  height={162}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  Delegation popup for the Analyst Manager.
                </div>
              </div>

              <div className={styles.figure}>
                <Image
                  src="/assets/images/showcase-visaccc/ccc_img5-notification.png"
                  alt="Approval email notification"
                  width={438}
                  height={218}
                  className={styles.figureImage}
                />
                <div className={styles.caption}>
                  Notification of the approval via email.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Solution */}
        <section className={styles.section}>
          <div className={styles.sectionSidebar}>
            <div className={styles.sectionEyebrow}>
              <Image
                src="/assets/icons/pointing-grey.svg"
                alt="Pointer"
                width={14}
                height={14}
              />
              <span>Solution</span>
            </div>
          </div>

          <div className={styles.sectionMain}>
            <h2 className={styles.sectionTitle}>
              Keeping accountability in check in a working paper.
            </h2>
            <p className={styles.paragraph}>
              I built the first version as a no-code, dropdown-based rule
              builder, directly from what I&apos;d learned in the focus group and
              follow-up interviews. Instead of typing a rule as code, fraud ops
              could construct one by selecting conditions from a set of
              dropdowns. This was aimed at the typing errors and cognitive load
              described in the Problem Statement.
            </p>

            <div className={styles.figure}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img6-working-paper.png"
                alt="Working paper: each role confirmed checks with timestamps"
                width={902}
                height={430}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Working paper: each role&apos;s confirmed checks, with
                timestamps
              </div>
            </div>

            {/* Desktop Modal Decision */}
            <div className={`${styles.figure} ${styles.desktopOnly}`}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img7-modal-decision-desktop.png"
                alt="Decision Action dialogs desktop"
                width={902}
                height={257}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Decision Action dialogs: Jr Analyst (left) and Analyst Manager
                (right)
              </div>
            </div>

            {/* Mobile Modal Decision */}
            <div className={`${styles.figure} ${styles.mobileOnly}`}>
              <Image
                src="/assets/images/showcase-visaccc/ccc_img7-modal-decision-mobile.png"
                alt="Decision Action dialogs mobile"
                width={902}
                height={400}
                className={styles.figureImage}
              />
              <div className={styles.caption}>
                Decision Action dialogs: Jr Analyst (left) and Analyst Manager
                (right)
              </div>
            </div>

            <p className={styles.paragraph}>
              I could deliver the clickable prototype in one week because the
              requirements were focused on a proof of concept, and I reused
              components from the Nikel design system I had created earlier.
            </p>
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
              The pitch received no response.
            </h2>

            <h3 className={styles.subTitle}>Pitch</h3>
            <p className={styles.paragraph}>
              We pitched the prototype to a global payments network through a
              partner bank and never heard back. We don&apos;t know the reason.
            </p>

            <h3 className={styles.subTitle}>Status</h3>
            <p className={styles.paragraph}>
              The design was never built, and it wasn&apos;t tested with real
              users, so it shows the flows I designed, not how they would
              perform in use.
            </p>

            <h3 className={styles.subTitle}>Sample data</h3>
            <p className={styles.paragraph}>
              All names, dates, and numbers in the screens are placeholder data.
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
              It was a pitch, but curious to know what the actual users think
              about it.
            </h2>
            <p className={styles.paragraph}>
              The flows came from the requirements, and with one week there was
              no time to check them with real reviewers. If I did it again, I
              would validate the check-mark approach and the working paper with
              operations staff before designing every role&apos;s screens.
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
