"use client";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "Hingham Estate Renovation",
    category: "Landscape Design",
    description: "Complete backyard transformation with natural stone patio, custom plantings, and landscape lighting.",
    size: "large",
  },
  {
    title: "Scituate Coastal Garden",
    category: "Planting & Gardens",
    description: "Salt-tolerant perennial garden with native grasses and stone pathways.",
    size: "small",
  },
  {
    title: "Norwell Commercial Campus",
    category: "Hardscaping",
    description: "Multi-phase commercial hardscape with permeable pavers and drainage systems.",
    size: "small",
  },
  {
    title: "Duxbury Waterfront Property",
    category: "Full Service",
    description: "Comprehensive property overhaul including excavation, retaining walls, and irrigation.",
    size: "large",
  },
  {
    title: "Marshfield Pool Deck",
    category: "Outdoor Living",
    description: "Bluestone pool surround with built-in planters and outdoor kitchen.",
    size: "medium",
  },
  {
    title: "Rockland Town Center",
    category: "Snow Removal",
    description: "Year-round commercial maintenance contract including snow and ice management.",
    size: "medium",
  },
];

export default function Projects() {
  return (
    <section className={`${styles.section} padding-section-large`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.section_header}>
            <div className={styles.header_left}>
              <span className="text-style-label text-color-accent">Our Work</span>
              <div className="spacer-small" />
              <h2 className="heading-style-h2 text-color-primary">Featured Projects</h2>
            </div>
            <a href="#" className="button is-secondary" onClick={(e) => e.preventDefault()}>
              View All Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="spacer-xlarge" />

          <div className={styles.projects_grid}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.project_card} ${styles[`is_${project.size}`]}`}
              >
                <div className={styles.project_image}>
                  {/* Placeholder — replace with real images */}
                  <div className={styles.project_placeholder} />
                  <div className={styles.project_overlay}>
                    <span className={styles.project_category}>{project.category}</span>
                    <h3 className={styles.project_title}>{project.title}</h3>
                    <p className={styles.project_desc}>{project.description}</p>
                    <span className={styles.project_cta}>
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
