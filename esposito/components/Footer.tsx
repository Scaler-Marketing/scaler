"use client";

import styles from "./Footer.module.css";

const footerServices = [
  "Landscape Design",
  "Lawn Care",
  "Hardscaping",
  "Excavation",
  "Snow Removal",
  "Irrigation Systems",
  "Tree Services",
  "Spring Cleanup",
];

const footerCompany = [
  "About Us",
  "Projects",
  "Testimonials",
  "Blog",
  "Careers",
  "Contact",
];

const serviceAreas = [
  "Rockland",
  "Hingham",
  "Scituate",
  "Norwell",
  "Duxbury",
  "Marshfield",
  "Hanover",
  "Weymouth",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="padding-global">
        <div className="container-large">
          {/* Top Row */}
          <div className={styles.footer_top}>
            <div className={styles.footer_brand}>
              <a href="#" className={styles.footer_logo} onClick={(e) => e.preventDefault()}>
                <div className={styles.logo_mark}>
                  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="4" fill="currentColor" />
                    <path d="M8 26V14l10-6 10 6v12H8z" fill="none" stroke="#faf8f4" strokeWidth="1.5" />
                    <path d="M13 26V20h4v6" fill="none" stroke="#faf8f4" strokeWidth="1.5" />
                    <path d="M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="none" stroke="#c8a24d" strokeWidth="1.5" />
                    <path d="M6 14l12-8 12 8" fill="none" stroke="#faf8f4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.logo_text}>
                  <span className={styles.logo_name}>Esposito</span>
                  <span className={styles.logo_tagline}>Property Maintenance</span>
                </div>
              </a>
              <div className="spacer-medium" />
              <p className={styles.footer_description}>
                Full-service landscape construction, maintenance, and excavation
                serving the South Shore of Massachusetts. Licensed, insured, and
                committed to excellence.
              </p>
              <div className="spacer-medium" />
              <div className={styles.social_links}>
                <a href="#" className={styles.social_link} aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className={styles.social_link} aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>
                <a href="#" className={styles.social_link} aria-label="Google" onClick={(e) => e.preventDefault()}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
                <a href="#" className={styles.social_link} aria-label="Yelp" onClick={(e) => e.preventDefault()}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.898-4.27c.564-.83 1.9-.436 1.9.562v3.343a.75.75 0 0 1-.627.562zM13.627 15.703l-1.433-4.995c-.276-.96.8-1.74 1.63-1.176l4.27 2.898c.83.564.436 1.9-.562 1.9h-3.343a.75.75 0 0 1-.562-.627z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.footer_columns}>
              <div className={styles.footer_column}>
                <h4 className={styles.footer_column_title}>Services</h4>
                <ul className={styles.footer_list}>
                  {footerServices.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.footer_link} onClick={(e) => e.preventDefault()}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footer_column}>
                <h4 className={styles.footer_column_title}>Company</h4>
                <ul className={styles.footer_list}>
                  {footerCompany.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.footer_link} onClick={(e) => e.preventDefault()}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footer_column}>
                <h4 className={styles.footer_column_title}>Service Areas</h4>
                <ul className={styles.footer_list}>
                  {serviceAreas.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.footer_link} onClick={(e) => e.preventDefault()}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footer_column}>
                <h4 className={styles.footer_column_title}>Contact</h4>
                <ul className={styles.footer_list}>
                  <li>
                    <a href="tel:7818578327" className={styles.footer_link}>
                      (781) 857-8327
                    </a>
                  </li>
                  <li>
                    <a href="mailto:espositoproperty@gmail.com" className={styles.footer_link}>
                      espositoproperty@gmail.com
                    </a>
                  </li>
                  <li className={styles.footer_address}>
                    321 Beech St<br />
                    Rockland, MA 02370
                  </li>
                </ul>
                <div className="spacer-medium" />
                <a href="#" className="button is-accent is-small" onClick={(e) => e.preventDefault()}>
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={styles.footer_bottom}>
            <p className={styles.footer_copyright}>
              &copy; {new Date().getFullYear()} Esposito Property Maintenance LLC. All rights reserved.
            </p>
            <div className={styles.footer_legal}>
              <a href="#" className={styles.footer_legal_link} onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <a href="#" className={styles.footer_legal_link} onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
              <a href="#" className={styles.footer_legal_link} onClick={(e) => e.preventDefault()}>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
