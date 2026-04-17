"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ======== CONFIGURE YOUR LINKS HERE ========
const APP_STORE_LINK = "#"; // <-- Replace with your App Store link
const SUPPORT_EMAIL = "support@HaptIQ.app";
// ============================================

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setModalOpen(false);
        setSubmitted(false);
        setEmail("");
        setName("");
      }, 3000);
    }
  };

  const openWaitlist = () => {
    setModalOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-logo">HaptIQ</div>
        <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`} id="nav-links">
          <li><a href="#features" onClick={() => setMobileOpen(false)}>Features</a></li>
          <li><a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a></li>
          <li><a href="#support" onClick={() => setMobileOpen(false)}>Support</a></li>
          <li><a href="#policies" onClick={() => setMobileOpen(false)}>Policies</a></li>
          <li><a href="#terms" onClick={() => setMobileOpen(false)}>Terms</a></li>
        </ul>
        <div className="nav-cta">
          <button className="btn-waitlist-nav" id="btn-waitlist-nav" onClick={openWaitlist}>
            Join Waitlist
          </button>
          <button
            className="mobile-toggle"
            id="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg-glow purple"></div>
        <div className="hero-bg-glow cyan"></div>
        <div className="hero-bg-glow pink"></div>
        <div className="hero-grid"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="dot"></span>
              Now available on iOS
            </div>
            <h1 className="hero-title">
              Feel Every <br />
              <span className="gradient-text">Beat & Touch</span>
            </h1>
            <p className="hero-description">
              HaptIQ is the world&apos;s first haptic feedback game that makes you
              <strong> feel</strong> the gameplay. Every tap, swipe, and hold delivers
              a unique vibration pattern. Your senses are the controller.
            </p>
            <div className="hero-actions">
              <a
                href={APP_STORE_LINK}
                className="btn-appstore"
                id="btn-appstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="appstore-text">
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </a>
              <button className="btn-waitlist" id="btn-waitlist-hero" onClick={openWaitlist}>
                <span>Join Waitlist</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon purple">🎮</div>
              <div className="card-info">
                <span className="card-label">Active Players</span>
                <span className="card-value">12.4K+</span>
              </div>
            </div>
            <div className="phone-mockup">
              <Image
                src="/gameplay1.png"
                alt="HaptIQ Gameplay"
                width={280}
                height={560}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="floating-card card-2">
              <div className="card-icon cyan">⚡</div>
              <div className="card-info">
                <span className="card-label">Haptic Modes</span>
                <span className="card-value">50+ Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Why HaptIQ Hits Different</h2>
          <p className="section-subtitle">
            A game designed from the ground up to use your phone&apos;s haptic engine
            as a core gameplay mechanic.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card" id="feature-haptics">
            <div className="feature-icon">📳</div>
            <h3>Advanced Haptics</h3>
            <p>
              Custom-designed vibration patterns for every interaction. Feel the
              difference between objects, surfaces, and impacts.
            </p>
          </div>
          <div className="feature-card" id="feature-levels">
            <div className="feature-icon">🌀</div>
            <h3>50+ Unique Levels</h3>
            <p>
              Each level introduces new haptic patterns and challenges. Progress
              through increasingly immersive stages.
            </p>
          </div>
          <div className="feature-card" id="feature-audio">
            <div className="feature-icon">🎧</div>
            <h3>Spatial Audio</h3>
            <p>
              Synchronized audio-haptic experience. Sound and touch merge to create
              a truly immersive sensory experience.
            </p>
          </div>
          <div className="feature-card" id="feature-multiplayer">
            <div className="feature-icon">👥</div>
            <h3>Multiplayer Mode</h3>
            <p>
              Challenge friends in real-time haptic duels. Feel your opponent&apos;s
              moves and react instinctively.
            </p>
          </div>
          <div className="feature-card" id="feature-customize">
            <div className="feature-icon">🎨</div>
            <h3>Custom Profiles</h3>
            <p>
              Tune haptic intensity, patterns, and feedback style to match your
              preferences and play style.
            </p>
          </div>
          <div className="feature-card" id="feature-leaderboard">
            <div className="feature-icon">🏆</div>
            <h3>Global Leaderboards</h3>
            <p>
              Compete globally. Climb the ranks and prove your haptic reflexes against
              players worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section gallery" id="gallery">
        <div className="section-header">
          <span className="section-label">Screenshots</span>
          <h2 className="section-title">See HaptIQ in Action</h2>
          <p className="section-subtitle">
            Stunning visuals paired with next-gen haptic feedback.
          </p>
        </div>
        <div className="gallery-scroll">
          <div className="gallery-item" id="screenshot-1">
            <Image
              src="/gameplay1.png"
              alt="HaptIQ Gameplay - Haptic Waves"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="gallery-overlay">
              <span>Haptic Wave Mode</span>
            </div>
          </div>
          <div className="gallery-item" id="screenshot-2">
            <Image
              src="/gameplay2.png"
              alt="HaptIQ Gameplay - Rhythm Mode"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="gallery-overlay">
              <span>Rhythm Challenge</span>
            </div>
          </div>
          <div className="gallery-item" id="screenshot-3">
            <Image
              src="/gameplay3.png"
              alt="HaptIQ Gameplay - Level Select"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="gallery-overlay">
              <span>Level Selection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section" id="download">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Feel the Game?</h2>
          <p className="cta-subtitle">
            Download HaptIQ today and unlock a new dimension of mobile gaming.
          </p>
          <div className="cta-actions">
            <a
              href={APP_STORE_LINK}
              className="btn-appstore"
              id="btn-appstore-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="appstore-text">
                <span>Download on the</span>
                <span>App Store</span>
              </div>
            </a>
            <button className="btn-waitlist" id="btn-waitlist-cta" onClick={openWaitlist}>
              <span>Join Waitlist</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="nav-logo">HaptIQ</div>
            <p>
              The next generation of mobile gaming. Feel every moment with
              advanced haptic feedback technology.
            </p>
          </div>
          <div className="footer-col" id="support">
            <h4>Support</h4>
            <ul>
              <li><a href={`mailto:${SUPPORT_EMAIL}`}>Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Bug Report</a></li>
            </ul>
          </div>
          <div className="footer-col" id="policies">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Data Processing</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
          <div className="footer-col" id="terms">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">EULA</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Attributions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HaptIQ. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Discord">💬</a>
          </div>
        </div>
      </footer>

      {/* ===== WAITLIST MODAL ===== */}
      <div
        className={`modal-overlay ${modalOpen ? "active" : ""}`}
        id="waitlist-modal"
        onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close modal">
            ✕
          </button>
          {!submitted ? (
            <>
              <h2>Join the Waitlist</h2>
              <p>Be the first to know when HaptIQ launches new features and updates.</p>
              <form className="modal-form" onSubmit={handleWaitlist}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="waitlist-name"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="waitlist-email"
                />
                <button type="submit" id="waitlist-submit">Join Waitlist →</button>
              </form>
            </>
          ) : (
            <div className="modal-success active">
              <div className="check-icon">✓</div>
              <h3>You&apos;re on the list!</h3>
              <p>We&apos;ll notify you when exciting things are happening with HaptIQ.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
