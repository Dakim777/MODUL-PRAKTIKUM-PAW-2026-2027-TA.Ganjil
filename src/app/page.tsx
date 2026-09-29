import type { Metadata } from "next";
import Link from "next/link";
import { daftarPertemuan } from "@/lib/pertemuan";

export const metadata: Metadata = {
  title: "Modul Praktikum PAW 2026/2027 | Teknik Informatika ITERA",
  description:
    "Kumpulan modul praktikum Pengembangan Aplikasi Web (PAW) untuk mahasiswa Teknik Informatika ITERA T.A. 2026/2027.",
};

const infoItems = [
  { label: "Mata Kuliah", value: "Pengembangan Aplikasi Web (PAW)" },
  { label: "Program Studi", value: "Teknik Informatika" },
  { label: "Institusi", value: "Institut Teknologi Sumatera (ITERA)" },
  { label: "Tahun Akademik", value: "2026/2027 (Semester Gasal)" },
  { label: "Total Pertemuan", value: "7 Pertemuan Praktikum" },
  { label: "SKS", value: "1 SKS Praktikum" },
];

export default function HomePage() {
  const tersedia = daftarPertemuan.filter((p) => p.tersedia).length;

  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero" aria-labelledby="hero-heading">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-if-itera.png"
            alt="Logo Teknik Informatika ITERA"
            width={48}
            height={48}
            style={{ objectFit: "contain", borderRadius: "4px", background: "#fff", padding: "3px" }}
          />
          <div className="home-hero-kode">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            PRAKTIKUM · T.A. 2026/2027 GASAL
          </div>
        </div>

        <h1 id="hero-heading">
          Modul Praktikum<br />Pengembangan Aplikasi Web
        </h1>

        <p>
          Dokumentasi dan panduan praktikum resmi mata kuliah Pengembangan Aplikasi Web (PAW)
          Teknik Informatika ITERA. Modul ini mencakup materi teori, studi kasus terpandu, blok kode, dan tugas mandiri.
        </p>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M1 7h14M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <strong>{daftarPertemuan.length} Pertemuan</strong>
          </div>
          <div className="hero-meta-item">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M8 4.5V8l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span>2 × 50 menit per pertemuan</span>
          </div>
          <div className="hero-meta-item">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5.5 8.5l2 2 3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <strong>{tersedia} modul</strong>
            <span>tersedia · {daftarPertemuan.length - tersedia} segera hadir</span>
          </div>
          <div className="hero-meta-item">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M2 12L6 2l4 8 2-4 2 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Teknik Informatika · ITERA</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="home-body">
        {/* Info grid */}
        <section aria-labelledby="info-heading" style={{ marginBottom: "2.5rem" }}>
          <h2 id="info-heading" className="section-title">Informasi Mata Kuliah</h2>
          <div className="info-grid">
            {infoItems.map((item) => (
              <div key={item.label} className="info-box">
                <div className="info-box-label">{item.label}</div>
                <div className="info-box-value">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pertemuan grid */}
        <section aria-labelledby="modul-heading">
          <h2 id="modul-heading" className="section-title">Daftar Modul Pertemuan</h2>
          <div className="pertemuan-grid">
            {daftarPertemuan.map((p) => (
              <Link
                key={p.nomor}
                href={p.tersedia ? `/pertemuan/${p.nomor}` : "#"}
                className={`pertemuan-card${!p.tersedia ? " coming-soon" : ""}`}
                aria-label={`Pertemuan ${p.nomor}: ${p.judul}`}
                tabIndex={!p.tersedia ? -1 : undefined}
              >
                <div className="pertemuan-card-num">
                  PERTEMUAN {String(p.nomor).padStart(2, "0")}
                </div>
                <div className="pertemuan-card-title">{p.judul}</div>
                <div className="pertemuan-card-desc">{p.deskripsi}</div>
                <div className="pertemuan-card-footer">
                  <span className="pertemuan-card-duration">{p.durasi}</span>
                  <span
                    className={`pertemuan-card-status ${
                      p.tersedia ? "available" : "soon"
                    }`}
                  >
                    {p.tersedia ? "Tersedia" : "Segera hadir"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick start note */}
        <div
          className="callout callout-info"
          role="note"
          aria-label="Catatan penggunaan"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}
          >
            <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M10 9v5M10 6.5v.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <div className="callout-body">
            <p>
              Semua 7 modul pertemuan sudah tersedia. Klik kartu pertemuan atau
              gunakan sidebar kiri untuk navigasi. Gunakan search bar di atas
              untuk mencari topik tertentu. Setiap modul berisi tujuan
              pembelajaran, materi teori, langkah praktikum lengkap dengan blok
              kode, dan latihan mandiri.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
