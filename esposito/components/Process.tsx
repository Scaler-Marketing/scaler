"use client";

import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We visit your property, listen to your goals, and provide a thorough assessment — completely free, no obligations.",
  },
  {
    number: "02",
    title: "Design & Proposal",
    description:
      "Our team creates a detailed plan with clear scope, timeline, and transparent pricing. No surprises, ever.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Skilled crews execute the plan with precision and care. We keep you informed at every stage and respect your space.",
  },
  {
    number: "04",
    title: "Ongoing Care",
    description:
      "We maintain your investment with seasonal care, monitoring, and adjustments to keep your property looking its best.",
  },
];

export default function Process() {
  return (
    <section className={`${styles.section} padding-section-large`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.section_header}>
            <span className="text-style-label text-color-accent">Our Process</span>
            <div className="spacer-small" />
            <h2 className="heading-style-h2 text-color-primary">
              How We Work
            </h2>
            <div className="spacer-small" />
            <p className={styles.section_description}>
              A straightforward process designed to make your experience seamless
              from first call to finished project.
            </p>
          </div>

          <div className="spacer-xlarge" />

          <div className={styles.process_grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.process_step}>
                <div className={styles.step_number_wrapper}>
                  <span className={styles.step_number}>{step.number}</span>
                  {index < steps.length - 1 && (
                    <div className={styles.step_connector} />
                  )}
                </div>
                <div className={styles.step_content}>
                  <h3 className={styles.step_title}>{step.title}</h3>
                  <div className="spacer-xsmall" />
                  <p className={styles.step_description}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
