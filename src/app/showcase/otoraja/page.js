import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import styles from "@/components/CaseStudy.module.css";

export const metadata = {
  title: "Make the Product Work the Way Users Already Work — Aria Gorba",
  description:
    "Case study on redesigning POS and ERP for MSME motorcycle workshops around owners' daily habits.",
};

export default function OtorajaCaseStudy() {
  return (
    <div className={styles.page}>
      {/* Hero Header with seamless top navbar */}
      <div
        className={styles.heroWrapper}
        style={{ backgroundColor: "#F5EDE9" }}
      >
        <Navbar />
        <header className={styles.heroContent}>
          <h1 className={styles.title}>
            Make the Product Work the Way Users Already Work
          </h1>
          <p className={styles.subtitle}>
            After each release, existing users gave positive feedback on the
            improvements. In the month after the last release, organic referrals
            rose from 0% to 3% of inbound demo requests.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Company</span>
              <span className={styles.metaValue}>
                Otoraja Network Indonesia
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Product</span>
              <span className={styles.metaValue}>
                Otoraja Biz - ERP and POS for MSME motorcycle workshops
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>
                Senior UX Designer (interim Product Manager for 6 months)
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>Aug 2020 - Mar 2023</span>
            </div>
          </div>

          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <strong>Problem:</strong> Workshop owners were excited to use a
              POS, but found it hard to use, and the ERP wasn&apos;t designed for
              the smartphones they prefer.
            </div>
            <div className={styles.summaryRow}>
              <strong>What I did:</strong> Ran three rounds of in-person visits,
              five workshops per round, and redesigned the POS and ERP around
              owners&apos; daily habits.
            </div>
            <div className={styles.summaryRow}>
              <strong>Result:</strong> Existing users reported improvements
              after each release.
            </div>
          </div>
        </header>
      </div>

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
            Otoraja Biz is a SaaS ERP for MSME motorcycle workshops in Indonesia
            that specialize in Japanese brands. Owners manage the shop in a
            web-based ERP and record sales in an Android POS app. Many owners saw
            the POS as a step up, from running a small kiosk to running a proper
            shop.
          </p>
          <p className={styles.paragraph}>
            Otoraja was a joint venture between Yamaha Motor Corporation and
            Sinar Mas Multiartha. It shut down after missing its signup targets
            over two years.
          </p>
        </section>

        {/* Discovery */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Discovery</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Owners were excited to get a POS, then struggled to use it.
          </h2>
          <p className={styles.paragraph}>
            When I joined, the POS and ERP were already in use, so I visited
            workshops in person to see why owners were struggling. I ran at least
            three rounds of visits, five workshops per round, following NN/g&apos;s
            guidance on sample size for qualitative research. Two problems came
            up across the visits:
          </p>

          <div className={`${styles.callout} ${styles.calloutYellow}`}>
            <Image
              src="/assets/icons/idea.svg"
              alt="Idea icon"
              width={20}
              height={20}
              className={styles.calloutIcon}
            />
            <div className={styles.calloutText}>
              The POS was hard to use for daily work. Inventory input and sales
              operations were the main sticking points.
            </div>
          </div>

          <div className={`${styles.callout} ${styles.calloutYellow}`}>
            <Image
              src="/assets/icons/idea.svg"
              alt="Idea icon"
              width={20}
              height={20}
              className={styles.calloutIcon}
            />
            <div className={styles.calloutText}>
              The ERP wasn&apos;t built for smartphones. It was designed for tablets
              and laptops, but owners preferred their phones.
            </div>
          </div>

          <p className={styles.paragraph}>
            Our sales team&apos;s field reports and my own visits showed something
            that surprised me: owners were comfortable with their phones but not
            with business software. This reinforced the need to design a product
            around the unique context and needs of these users.
          </p>
        </section>

        {/* Define */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Define</span>
          </div>
          <h2 className={styles.sectionTitle}>
            The product didn&apos;t fit how owners already work.
          </h2>
          <p className={styles.paragraph}>
            Otoraja had tried to close the gap by offering Android tablets as a
            middle ground. Usage stayed far below what was intended, because
            owners preferred their own smartphones. Hardware wasn&apos;t the fix. The
            software had to fit the device and the habits owners already had.
          </p>

          <div className={`${styles.callout} ${styles.calloutBlue}`}>
            <Image
              src="/assets/icons/info.svg"
              alt="Info icon"
              width={20}
              height={20}
              className={styles.calloutIcon}
            />
            <div className={styles.calloutText}>
              <div className={styles.calloutTitle}>Problem Statement</div>
              Workshop owners wanted to run their shops with a POS, but inventory
              input and sales operations were hard to do in the app, and the ERP
              wasn&apos;t designed for the smartphones they prefer to use.
            </div>
          </div>

          <div className={`${styles.callout} ${styles.calloutBlue}`}>
            <Image
              src="/assets/icons/chat-question.svg"
              alt="Question icon"
              width={20}
              height={20}
              className={styles.calloutIcon}
            />
            <div className={styles.calloutText}>
              <div className={styles.calloutTitle}>HMW Question</div>
              How might we fit inventory, sales, and shop management into the way
              owners already work, on the device they already use?
            </div>
          </div>
        </section>

        {/* Develop */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Develop</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Each design decision started from something owners already did.
          </h2>
          <p className={styles.paragraph}>
            I focused on three changes, each coming from a finding in the
            visits.
          </p>

          <h3 className={styles.subTitle}>
            1. Product population for onboarding (POS)
          </h3>
          <p className={styles.paragraph}>
            The onboarding process for new workshop owners started with
            populating their inventory into the ERP. The problem was, most of
            them have their inventory written in a physical book. Even with our
            help, it can take a minimum of 1 work day just to convert them into
            a spreadsheet. After we import a spreadsheet into an owner&apos;s
            account, we need at least half a work day to have them checked and
            confirmed by the owner.
          </p>
          <p className={styles.paragraph}>
            We considered using a barcode scanner, but abandoned the idea after
            an owner told me that packaging barcodes can&apos;t be trusted, because
            counterfeit parts often carry the barcode of a different part.
            Other owners confirmed this. So, we decided to provide the owner
            with a list of genuine parts instead, so they can choose and import
            either singular or in bulk. We also gave the ability to create custom
            entries if needed.
          </p>
          <p className={styles.paragraph}>
            The new approach removes the step of converting a paper book into a
            spreadsheet. How much time it saves depends on the workshop&apos;s
            inventory, which ranges from tens of parts to thousands.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img1-onboarding-inventory.png"
              alt="Product population from original parts"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              Product population where the user chose to add from a list of original parts.
            </div>
          </div>

          <h3 className={styles.subTitle}>
            2. Product bundling and a quick price shortcut (POS)
          </h3>
          <p className={styles.paragraph}>
            These features came from habits I saw in the visits: owners sold items
            as packages and changed quoted prices on the spot. I added a product
            package feature and a shortcut to change a quoted price quickly, so
            the app matched what owners did at the counter.
          </p>
          <p className={styles.paragraph}>
            For example, owners often have a special discounted price for
            motorcycle taxi drivers. Without the package feature, owners must
            manually add the items, services, and then change the final quoted
            price. The package feature allows owners to create a pre-defined
            item that they can simply select and automatically populate the POS
            entry. They can still add more items, either single entry or another
            package.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img2-pos-bundling.png"
              alt="Product bundling"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              After iterations, users can see all items within a bundling without needing to open the detail page.
            </div>
          </div>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img3-pos-price-shortcut.png"
              alt="Price shortcut"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              Users must type to change an item&apos;s price. After iteration, they can save it as shortcut to save time.
            </div>
          </div>

          <h3 className={styles.subTitle}>3. Responsive tables (ERP)</h3>
          <p className={styles.paragraph}>
            The ERP&apos;s tables were built for larger screens. Having to scroll a
            table horizontally through that many fields on a smartphone was
            very difficult. Users often got lost on which row they were looking
            at.
          </p>
          <p className={styles.paragraph}>
            So, I converted the table into cards to make the ERP easier to use.
            It eliminates painful horizontal scrolling on a smartphone and users
            can still identify items quickly. The trade-off was not being able to
            see many fields at once as they would with a traditional table.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img4-erp-table2cards.png"
              alt="ERP list page optimized for smartphone"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              ERP list page was optimized for smartphone usage: table (left / before) vs card (right / after).
            </div>
          </div>
        </section>

        {/* Deliver */}
        <section className={styles.section}>
          <div className={styles.sectionEyebrow}>
            <Image
              src="/assets/icons/pointing-right.svg"
              alt="Pointer"
              width={14}
              height={14}
            />
            <span>Deliver</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Released in cycles, checked with owners each time.
          </h2>
          <p className={styles.paragraph}>
            The work ran in cycles over several months. After each round of
            research, I turned the findings into Jira tickets with user stories
            and acceptance criteria. This was part of the six months I spent as
            interim Product Manager.
          </p>
          <p className={styles.paragraph}>
            After each release, our ground sales team gathered feedback from the
            existing users they maintained. The feedback reached me secondhand,
            as direct comments and some observations from the sales team.
          </p>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img5-pos-improvements.png"
              alt="POS improvements"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              Some of the POS improvements were inventory wizard, down payment, and dashboard.
            </div>
          </div>

          <div className={styles.figure}>
            <Image
              src="/assets/images/showcase-otoraja/otj_img6-erp-improvements.png"
              alt="ERP smartphone improvements"
              width={1200}
              height={700}
              className={styles.figureImage}
            />
            <div className={styles.caption}>
              ERP after smartphone-first UX/UI improvements: dashboard, table as cards, and stock taking.
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
            Users reported improvements, and referrals rose.
          </h2>

          <h3 className={styles.subTitle}>Feedback</h3>
          <p className={styles.paragraph}>
            After each release, existing users gave positive feedback, relayed
            through our sales team. This is feedback and observation, not
            measured data.
          </p>

          <h3 className={styles.subTitle}>Referrals</h3>
          <p className={styles.paragraph}>
            In the month after the last release, organic referrals rose from 0%
            to 3% of inbound demo requests. We asked every inbound lead how they
            heard about us, and owners cited word of mouth from other
            workshops. We believe ongoing iterations contributed, including the
            ERP generating accurate financial reports, which is outside the
            scope of this showcase. Other factors may also have played a part.
          </p>

          <h3 className={styles.subTitle}>Shutdown</h3>
          <p className={styles.paragraph}>
            Otoraja shut down after missing its signup targets over two years.
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
            I would want direct feedback from owners, not only relayed feedback.
          </h2>
          <p className={styles.paragraph}>
            Our sales team&apos;s relayed feedback was useful, but it passed through
            one more person before it reached me. If I did it again, I would
            also visit owners myself after each release, and track how each lead
            heard about us from the first day, so the referral change could be
            tied more clearly to specific releases.
          </p>

          <BackToTop />
        </section>
      </main>

      <Footer />
    </div>
  );
}
