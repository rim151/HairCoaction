import React from "react";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <section
      className={`footer-section ${isVisible ? "fade-in" : ""}`}
      ref={footerRef}
    >
      <h2 className="footer-heading">Why Choose Hair Coaction?</h2>

      <div className="footer-buttons">
        <button className="footer-btn">Watch Demo</button>
        <button className="footer-btn">Learn More</button>
      </div>
    </section>
  );
}

export default Footer;