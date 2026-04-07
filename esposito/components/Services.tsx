"use client";

import styles from "./Services.module.css";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Landscape Design",
    description:
      "Custom landscape plans that bring your vision to life — from concept to installation, every detail is considered.",
    features: ["3D Renderings", "Custom Plans", "Plant Selection"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 21c.5-4.5 2.5-8 7-10" />
        <path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9 0 1 0 3 2 5h3z" />
      </svg>
    ),
    title: "Lawn & Garden Care",
    description:
      "Year-round maintenance that keeps your property looking its best — mowing, fertilization, seasonal cleanups, and more.",
    features: ["Weekly Service", "Fertilization", "Weed Control"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    title: "Hardscaping",
    description:
      "Patios, walkways, retaining walls, and outdoor living spaces built to last with premium materials and expert craftsmanship.",
    features: ["Natural Stone", "Pavers", "Retaining Walls"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
        <path d="M6 12V7a6 6 0 0 1 12 0v5" />
        <path d="M12 12v4" />
      </svg>
    ),
    title: "Excavation & Grading",
    description:
      "Professional site work including grading, drainage solutions, and foundation preparation for any scale project.",
    features: ["Site Grading", "Drainage", "Foundation Prep"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    title: "Snow Removal",
    description:
      "Reliable winter property management — commercial and residential plowing, sanding, and ice treatment when you need it most.",
    features: ["24/7 Response", "Commercial", "Residential"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
    title: "Irrigation Systems",
    description:
      "Smart irrigation design, installation, and maintenance to keep your landscape healthy while conserving water.",
    features: ["Smart Controls", "Installation", "Maintenance"],
  },
];

export default function Services() {
  return (
    <section className={`${styles.section} padding-section-large`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.section_header}>
            <span className="text-style-label text-color-accent">What We Do</span>
            <div className="spacer-small" />
            <h2 className="heading-style-h2 text-color-primary">
              Complete Property Solutions
            </h2>
            <div className="spacer-small" />
            <p className={styles.section_description}>
              From first sketch to finished project, we handle every aspect of
              your outdoor space with care, precision, and craftsmanship.
            </p>
          </div>

          <div className="spacer-xlarge" />

          <div className={styles.services_grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.service_card}>
                <div className={styles.service_icon}>{service.icon}</div>
                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>{service.title}</h3>
                  <div className="spacer-xsmall" />
                  <p className={styles.service_description}>
                    {service.description}
                  </p>
                  <div className="spacer-small" />
                  <div className={styles.service_features}>
                    {service.features.map((feat, i) => (
                      <span key={i} className={styles.service_feature}>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.service_arrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7 7 10 10" />
                    <path d="M17 7v10H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
