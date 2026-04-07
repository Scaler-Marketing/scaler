"use client";

import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={`${styles.section} padding-section-medium`}>
      <div className="padding-global">
        <div className="container-medium">
          <div className={styles.cta_card}>
            <div className={styles.cta_background} />
            <div className={styles.cta_content}>
              <span className="text-style-label" style={{ color: "var(--color--accent)" }}>
                Ready to Start?
              </span>
              <div className="spacer-small" />
              <h2 className={styles.cta_heading}>
                Let&apos;s Transform Your Property
              </h2>
              <div className="spacer-medium" />
              <p className={styles.cta_text}>
                Schedule a free on-site consultation. We&apos;ll walk your property,
                discuss your goals, and provide a detailed proposal — no pressure,
                no obligation.
              </p>
              <div className="spacer-large" />
              <div className={styles.cta_buttons}>
                <a href="#" className="button is-accent is-large" onClick={(e) => e.preventDefault()}>
                  Schedule Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:7818578327" className="button is-white is-large">
                  Call (781) 857-8327
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
