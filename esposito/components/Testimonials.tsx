"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Esposito completely transformed our backyard. From the initial design consultation to the final walkthrough, they were professional, communicative, and clearly passionate about their craft. Our neighbors can't stop complimenting the new patio.",
    name: "Sarah M.",
    location: "Hingham, MA",
    service: "Landscape Design & Hardscaping",
    rating: 5,
  },
  {
    quote:
      "We've used several landscaping companies over the years, and none come close to the level of care and attention Esposito provides. They treat our property like it's their own. Highly recommend for anyone on the South Shore.",
    name: "Michael R.",
    location: "Scituate, MA",
    service: "Lawn Maintenance",
    rating: 5,
  },
  {
    quote:
      "Gerald and his crew did an incredible job with our drainage issues. They diagnosed the problem quickly, proposed an elegant solution, and executed flawlessly. The grading work solved years of basement flooding — wish we'd called them sooner.",
    name: "Tom & Linda K.",
    location: "Norwell, MA",
    service: "Excavation & Drainage",
    rating: 5,
  },
  {
    quote:
      "After a brutal nor'easter, Esposito had our entire commercial lot cleared before 6 AM. They're reliable, responsive, and their pricing is fair. They've been handling our snow removal for three winters now — wouldn't dream of switching.",
    name: "David P.",
    location: "Rockland, MA",
    service: "Snow Removal",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`${styles.section} padding-section-large`}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.testimonials_layout}>
            <div className={styles.testimonials_header}>
              <span className="text-style-label" style={{ color: "rgba(250,248,244,0.5)" }}>
                Testimonials
              </span>
              <div className="spacer-small" />
              <h2 className="heading-style-h2 text-color-inverse">
                What Our Clients Say
              </h2>
              <div className="spacer-medium" />
              <p className={styles.testimonials_subtitle}>
                Don&apos;t take our word for it — hear from the homeowners and
                businesses who trust us with their properties.
              </p>
            </div>

            <div className={styles.testimonials_slider}>
              <div className={styles.testimonial_card}>
                <div className={styles.testimonial_stars}>
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color--accent)" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div className="spacer-medium" />
                <blockquote className={styles.testimonial_quote}>
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                <div className="spacer-large" />
                <div className={styles.testimonial_author}>
                  <div className={styles.author_avatar}>
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <span className={styles.author_name}>
                      {testimonials[activeIndex].name}
                    </span>
                    <span className={styles.author_meta}>
                      {testimonials[activeIndex].location} — {testimonials[activeIndex].service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className={styles.slider_controls}>
                <div className={styles.slider_dots}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.slider_dot} ${i === activeIndex ? styles.is_active : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className={styles.slider_arrows}>
                  <button className={styles.slider_arrow} onClick={goPrev} aria-label="Previous testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button className={styles.slider_arrow} onClick={goNext} aria-label="Next testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
