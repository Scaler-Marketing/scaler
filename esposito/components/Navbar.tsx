"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const servicesDropdown = [
  {
    category: "Landscaping",
    items: [
      { label: "Landscape Design", description: "Custom plans tailored to your property" },
      { label: "Planting & Gardens", description: "Seasonal color and perennial beds" },
      { label: "Sod & Seed Installation", description: "Lush, green lawns from scratch" },
      { label: "Landscape Lighting", description: "Illuminate your outdoor spaces" },
    ],
  },
  {
    category: "Maintenance",
    items: [
      { label: "Lawn Care", description: "Mowing, fertilization, and weed control" },
      { label: "Spring & Fall Cleanup", description: "Seasonal debris removal and prep" },
      { label: "Mulching & Edging", description: "Clean, defined beds year-round" },
      { label: "Pruning & Trimming", description: "Healthy, shaped shrubs and trees" },
    ],
  },
  {
    category: "Hardscaping",
    items: [
      { label: "Patios & Walkways", description: "Pavers, flagstone, and natural stone" },
      { label: "Retaining Walls", description: "Functional beauty and erosion control" },
      { label: "Outdoor Living", description: "Fire pits, kitchens, and gathering spaces" },
      { label: "Driveways", description: "Durable, eye-catching entryways" },
    ],
  },
  {
    category: "Specialty",
    items: [
      { label: "Excavation", description: "Grading, drainage, and site work" },
      { label: "Snow Removal", description: "Reliable winter property management" },
      { label: "Irrigation Systems", description: "Efficient watering solutions" },
      { label: "Tree Services", description: "Removal, stump grinding, and care" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topbar}>
        <div className={`padding-global ${styles.topbar_inner}`}>
          <div className={`container-large ${styles.topbar_container}`}>
            <div className={styles.topbar_left}>
              <a href="tel:7818578327" className={styles.topbar_link}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (781) 857-8327
              </a>
              <span className={styles.topbar_divider} />
              <a href="mailto:espositoproperty@gmail.com" className={styles.topbar_link}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                espositoproperty@gmail.com
              </a>
            </div>
            <div className={styles.topbar_right}>
              <span className={styles.topbar_text}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Serving the South Shore, MA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.is_scrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={`padding-global ${styles.navbar_inner}`}>
          <div className={`container-large ${styles.navbar_container}`}>
            {/* Logo */}
            <a href="#" className={styles.navbar_logo} aria-label="Esposito Property Maintenance Home">
              <div className={styles.logo_mark}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Desktop Navigation */}
            <div className={styles.navbar_menu}>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className={styles.navbar_item}
                  onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.label) : undefined}
                  onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                >
                  <a
                    href={link.href}
                    className={`${styles.navbar_link} ${activeDropdown === link.label ? styles.is_active : ""}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        className={`${styles.dropdown_chevron} ${activeDropdown === link.label ? styles.is_rotated : ""}`}
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </a>

                  {/* Mega Dropdown */}
                  {link.hasDropdown && (
                    <div
                      ref={dropdownRef}
                      className={`${styles.mega_dropdown} ${activeDropdown === link.label ? styles.is_visible : ""}`}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={styles.mega_dropdown_inner}>
                        <div className={styles.mega_grid}>
                          {servicesDropdown.map((group) => (
                            <div key={group.category} className={styles.mega_column}>
                              <span className={styles.mega_category}>{group.category}</span>
                              <div className={styles.mega_items}>
                                {group.items.map((item) => (
                                  <a
                                    key={item.label}
                                    href="#"
                                    className={styles.mega_link}
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <span className={styles.mega_link_label}>{item.label}</span>
                                    <span className={styles.mega_link_desc}>{item.description}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={styles.mega_footer}>
                          <div className={styles.mega_footer_content}>
                            <span className={styles.mega_footer_text}>
                              Not sure what you need? Let us assess your property.
                            </span>
                            <a href="#" className="button is-accent is-small" onClick={(e) => e.preventDefault()}>
                              Free Consultation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className={styles.navbar_cta}>
              <a
                href="#"
                className="button is-primary"
                onClick={(e) => e.preventDefault()}
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${isMobileOpen ? styles.is_open : ""}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <span className={styles.hamburger_line} />
              <span className={styles.hamburger_line} />
              <span className={styles.hamburger_line} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobile_overlay} ${isMobileOpen ? styles.is_visible : ""}`}>
        <div className={styles.mobile_menu}>
          <div className={`padding-global ${styles.mobile_menu_inner}`}>
            {navLinks.map((link) => (
              <div key={link.label} className={styles.mobile_item}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className={`${styles.mobile_link} ${activeMobileSubmenu === link.label ? styles.is_active : ""}`}
                      onClick={() => toggleMobileSubmenu(link.label)}
                    >
                      {link.label}
                      <svg
                        className={`${styles.dropdown_chevron} ${activeMobileSubmenu === link.label ? styles.is_rotated : ""}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className={`${styles.mobile_submenu} ${activeMobileSubmenu === link.label ? styles.is_visible : ""}`}
                    >
                      {servicesDropdown.map((group) => (
                        <div key={group.category} className={styles.mobile_submenu_group}>
                          <span className={styles.mobile_submenu_category}>{group.category}</span>
                          {group.items.map((item) => (
                            <a
                              key={item.label}
                              href="#"
                              className={styles.mobile_submenu_link}
                              onClick={(e) => e.preventDefault()}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={styles.mobile_link}
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className={styles.mobile_cta}>
              <a href="#" className="button is-primary is-large" style={{ width: "100%" }} onClick={(e) => e.preventDefault()}>
                Get a Free Quote
              </a>
              <a href="tel:7818578327" className="button is-secondary is-large" style={{ width: "100%" }}>
                Call (781) 857-8327
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
