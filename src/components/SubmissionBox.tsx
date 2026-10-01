import React from "react";

export interface ClassSubmissionLinks {
  ra: string;
  rb: string;
}

interface ClassConfig {
  url: string;
  /** ISO 8601 — kapan submission dibuka untuk kelas ini */
  openDate: string;
  /** ISO 8601 — batas akhir pengumpulan (deadline) */
  deadline: string;
}

interface PertemuanConfig {
  ra: ClassConfig;
  rb: ClassConfig;
}

interface SubmissionBoxProps {
  pertemuan: number;
  catatan?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Konfigurasi Submission Per Pertemuan & Per Kelas
// Sesuaikan openDate dan deadline setiap kali pertemuan baru dimulai.
// Format: ISO 8601, zona waktu WIB (UTC+7) → gunakan +07:00
// ─────────────────────────────────────────────────────────────────────────────
export const SUBMISSION_CONFIG: Record<number, PertemuanConfig> = {
  // ─── Pertemuan 1 ───────────────────────────────────────────────────────────
  // RB: praktikum hari ini (Kamis, 1 Okt 2026) → deadline Rabu 7 Okt 2026
  // RA: praktikum minggu depan (Kamis, 8 Okt 2026) → deadline Sabtu 17 Okt 2026
  1: {
    rb: {
      url: "https://forms.gle/vHRXZQZJuExcxoiNA",
      openDate: "2026-10-01T00:00:00+07:00",
      deadline: "2026-10-07T23:59:00+07:00",
    },
    ra: {
      url: "https://forms.gle/J1dJrxXPGy1dtSs58",
      openDate: "2026-10-08T00:00:00+07:00",
      deadline: "2026-10-17T23:59:00+07:00",
    },
  },
  // ─── Pertemuan 2–7 (terkunci) ──────────────────────────────────────────────
  2: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
  3: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
  4: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
  5: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
  6: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
  7: {
    rb: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
    ra: { url: "", openDate: "2099-01-01T00:00:00+07:00", deadline: "2099-01-01T23:59:00+07:00" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function formatDeadline(isoString: string): string {
  const d = new Date(isoString);
  return d.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  }) + " WIB";
}

function isOpen(cfg: ClassConfig): boolean {
  return new Date() >= new Date(cfg.openDate);
}

function isPastDeadline(cfg: ClassConfig): boolean {
  return new Date() > new Date(cfg.deadline);
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-komponen: SubmissionCard (untuk satu kelas)
// ─────────────────────────────────────────────────────────────────────────────
interface SubmissionCardProps {
  kelas: "ra" | "rb";
  pertemuan: number;
  cfg: ClassConfig;
}

function SubmissionCard({ kelas, pertemuan, cfg }: SubmissionCardProps) {
  const open = isOpen(cfg);
  const expired = isPastDeadline(cfg);
  const kelasLabel = kelas === "ra" ? "Kelas RA" : "Kelas RB";

  // Icon dokumen SVG
  const DocIcon = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="12" y2="12" />
      <line x1="15" y1="15" x2="12" y2="12" />
    </svg>
  );

  // Icon gembok
  const LockIcon = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  // Icon panah keluar
  const ArrowIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );

  // Icon jam/clock (inline, bukan komponen)
  const clockSvg = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "inline", verticalAlign: "middle", marginRight: "0.3rem", flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  return (
    <div className={`submission-box-card kelas-${kelas}${!open ? " locked" : ""}`}>
      <div className="submission-box-header">
        <div className="submission-badge-icon">
          {open ? DocIcon : LockIcon}
        </div>
        <div className="submission-box-info">
          <span className={`submission-class-badge ${kelas}`}>{kelasLabel}</span>
          <h3 className="submission-box-title">Submission {kelasLabel}</h3>
          <p className="submission-box-desc">
            Pengumpulan tugas &amp; laporan praktikum Pertemuan {pertemuan} untuk mahasiswa{" "}
            <strong>{kelasLabel}</strong>.
          </p>
        </div>
      </div>

      {/* Deadline info */}
      <div className={`submission-deadline-row ${expired ? "expired" : open ? "active" : "upcoming"}`}>
        {!open ? (
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexWrap: "wrap" }}>
            {clockSvg}
            Dibuka: <strong>{formatDeadline(cfg.openDate)}</strong>
          </span>
        ) : expired ? (
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexWrap: "wrap" }}>
            {clockSvg}
            Deadline telah berakhir: <strong>{formatDeadline(cfg.deadline)}</strong>
          </span>
        ) : (
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexWrap: "wrap" }}>
            {clockSvg}
            Deadline: <strong>{formatDeadline(cfg.deadline)}</strong>
          </span>
        )}
      </div>


      <div className="submission-card-action">
        {!open ? (
          /* Locked state */
          <div className="submission-locked-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ flexShrink: 0 }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Belum Terbuka</span>
          </div>
        ) : expired ? (
          /* Expired state */
          <div className="submission-expired-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>Deadline Telah Berakhir</span>
          </div>
        ) : (
          /* Open & active state */
          <a
            href={cfg.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`submission-direct-btn ${kelas}`}
          >
            <span>Submit Tugas {kelasLabel.split(" ")[1]}</span>
            {ArrowIcon}
          </a>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Komponen utama
// ─────────────────────────────────────────────────────────────────────────────
export default function SubmissionBox({ pertemuan, catatan }: SubmissionBoxProps) {
  const config = SUBMISSION_CONFIG[pertemuan];

  if (!config) return null;

  return (
    <section id="link-submission" className="submission-section" aria-labelledby="submission-heading">
      <h2 id="submission-heading">Pengumpulan Tugas</h2>
      <p className="submission-lead-desc">
        {catatan ||
          "Silakan submit tugas dan laporan praktikum melalui tombol tautan formulir sesuai dengan kelas praktikum Anda:"}
      </p>

      <div className="submission-grid">
        <SubmissionCard kelas="ra" pertemuan={pertemuan} cfg={config.ra} />
        <SubmissionCard kelas="rb" pertemuan={pertemuan} cfg={config.rb} />
      </div>
    </section>
  );
}
