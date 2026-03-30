"use client";

import styles from "./About.module.css";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Full coverage and professional certifications for your peace of mind.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time, Every Time",
    description: "We show up when we say we will and finish on schedule — guaranteed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family Owned",
    description: "A local family business built on relationships, not transactions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Quality Guarantee",
    description: "We stand behind every project with a satisfaction guarantee.",
  },
];

export default function About() {
  return (
    <section className={`${styles.section} padding-section-large`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.about_grid}>
            {/* Left — Image Area */}
            <div className={styles.about_visual}>
              <div className={styles.about_image_main}>
                {/* Placeholder — replace with actual image */}
                <div className={styles.image_placeholder}>
                  <span>Team Photo</span>
                </div>
              </div>
              <div className={styles.about_image_accent}>
                <div className={styles.image_placeholder_sm}>
                  <span>On the Job</span>
                </div>
              </div>
              <div className={styles.about_badge}>
                <span className={styles.badge_number}>15+</span>
                <span className={styles.badge_text}>Years<br />of Excellence</span>
              </div>
            </div>

            {/* Right — Content */}
            <div className={styles.about_content}>
              <span className="text-style-label text-color-accent">About Us</span>
              <div className="spacer-small" />
              <h2 className="heading-style-h2 text-color-primary">
                Built on Hard Work,<br />
                Driven by Pride.
              </h2>
              <div className="spacer-medium" />
              <p className={styles.about_text}>
                Esposito Property Maintenance was founded on a simple principle:
                treat every property like it&apos;s our own. Based in Rockland, MA,
                we&apos;ve grown from a one-man operation into the South Shore&apos;s
                most trusted name in landscape construction and property care.
              </p>
              <div className="spacer-small" />
              <p className={styles.about_text}>
                Gerald Esposito and the team bring decades of combined experience,
                an obsessive attention to detail, and a genuine passion for
                transforming outdoor spaces into something truly special.
              </p>
              <div className="spacer-large" />
              <div className={styles.values_grid}>
                {values.map((v, i) => (
                  <div key={i} className={styles.value_item}>
                    <div className={styles.value_icon}>{v.icon}</div>
                    <div>
                      <h4 className={styles.value_title}>{v.title}</h4>
                      <p className={styles.value_desc}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
