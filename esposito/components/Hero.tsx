"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_background}>
        <div className={styles.hero_overlay} />
        {/* Placeholder gradient — replace with actual hero image */}
        <div className={styles.hero_image} />
      </div>

      <div className={`padding-global ${styles.hero_content}`}>
        <div className="container-large">
          <div className={styles.hero_layout}>
            <div className={styles.hero_text}>
              <span className={`tag ${styles.hero_tag}`}>South Shore&apos;s Trusted Experts</span>
              <div className="spacer-small" />
              <h1 className={styles.hero_heading}>
                Your Property, <br />
                <span className={styles.hero_heading_accent}>Perfected.</span>
              </h1>
              <div className="spacer-medium" />
              <p className={styles.hero_paragraph}>
                Full-service landscape design, construction, and maintenance for
                residential and commercial properties across the South Shore.
                We don&apos;t just maintain your property — we transform it.
              </p>
              <div className="spacer-large" />
              <div className={styles.hero_buttons}>
                <a href="#" className="button is-accent is-large" onClick={(e) => e.preventDefault()}>
                  Get a Free Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#" className="button is-white is-large" onClick={(e) => e.preventDefault()}>
                  View Our Work
                </a>
              </div>
            </div>

            <div className={styles.hero_stats}>
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>15+</span>
                <span className={styles.hero_stat_label}>Years Experience</span>
              </div>
              <div className={styles.hero_stat_divider} />
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>500+</span>
                <span className={styles.hero_stat_label}>Projects Completed</span>
              </div>
              <div className={styles.hero_stat_divider} />
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>100%</span>
                <span className={styles.hero_stat_label}>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
