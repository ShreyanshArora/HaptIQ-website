import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="nav-logo">
          <Link href="/">HaptIQ</Link>
        </div>
      </nav>

      <section className="section" style={{ marginTop: "100px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <div className="section-header" style={{ alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-label">Legal</span>
          <h1 className="section-title">Privacy Policy</h1>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "1.1rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}>
          <p>
            This app collects limited information necessary for its core functionality.
          </p>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Data we collect:</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong>In-game name:</strong> A name voluntarily entered by the user for gameplay purposes. This name is not used to identify the user outside the app.</li>
              <li><strong>Gameplay data:</strong> Specifically, the number of taps performed during gameplay, which is used for result validation and game logic.</li>
            </ul>
            <p style={{ marginTop: "12px" }}>We use Firebase to securely store and process this data.</p>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>How we use the data:</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Validating gameplay results</li>
              <li>Displaying game-related information such as scores or outcomes</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Data retention and deletion:</h2>
            <p>
              We do not even collect this data. Any information used during an active game session (including in-game name and tap count) is strictly temporary. Once the game session is completed, this information is automatically discarded and is not retained or used for any further purpose.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Data characteristics:</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>The data collected is non-sensitive</li>
              <li>The data is not used to personally identify users</li>
              <li>The data is not used for tracking or advertising purposes</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Data sharing:</h2>
            <p>
              We do not sell, trade, or share user data with third parties. Data is only processed through Firebase for app functionality.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Data storage and security:</h2>
            <p>
              The only information we store using Firebase services is the in-game room code, which is strictly a game feature used to connect players in the same match. This room code has absolutely no relation to you as a user and cannot be used to identify you in any way.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>User control:</h2>
            <p>
              Since the app does not require account creation, users can stop using the app at any time to discontinue data collection.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "1.5rem" }}>Contact:</h2>
            <p>
              If you have any questions, contact us at: <a href="mailto:anuj69937@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>anuj69937@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer" style={{ marginTop: "40px" }}>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HaptIQ. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
