import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header>
          <img src="/pic.jpeg" alt="Falak Pic" />
          <h1>Falak Javed</h1>
          <p>Hi! I'm Falak — Web Developer & UI-ux Designer. I create modern and fast websites.</p>
        </header>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer>
          <h3>Follow Me</h3>
          <div className="icons">
            <img src="/icons/instagram.svg" alt="Instagram" />
            <img src="/icons/tiktok.svg" alt="TikTok" />
            <img src="/icons/facebook.svg" alt="Facebook" />
            <img src="/icons/x.svg" alt="X" />
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </div>
          <p>© {new Date().getFullYear()} Falak Javed — All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
