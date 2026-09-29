export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-if-itera.png"
          alt="Logo IF ITERA"
          width={22}
          height={22}
          style={{ objectFit: "contain" }}
        />
        <p className="footer-text">
          © {year} Modul Praktikum Pengembangan Aplikasi Web ·{" "}
          <a
            href="https://if.itera.ac.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teknik Informatika ITERA
          </a>
        </p>
      </div>
      <p className="footer-text" style={{ textAlign: "right" }}>
        T.A. 2026/2027 Gasal
      </p>
    </footer>
  );
}
