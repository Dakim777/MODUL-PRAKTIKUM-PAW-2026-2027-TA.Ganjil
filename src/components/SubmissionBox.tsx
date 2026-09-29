import React from "react";

export interface ClassSubmissionLinks {
  ra: string;
  rb: string;
}

interface SubmissionBoxProps {
  pertemuan: number;
  customUrlRA?: string;
  customUrlRB?: string;
  catatan?: string;
}

// URL default pengumpulan tugas per pertemuan untuk Kelas RA dan Kelas RB
// Asisten dapat langsung menyesuaikan URL Google Form/LMS di bawah ini
export const SUBMISSION_LINKS: Record<number, ClassSubmissionLinks> = {
  1: {
    ra: "https://forms.gle/placeholder-pertemuan-1-kelas-ra",
    rb: "https://forms.gle/vHRXZQZJuExcxoiNA",
  },
  2: {
    ra: "https://forms.gle/placeholder-pertemuan-2-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-2-kelas-rb",
  },
  3: {
    ra: "https://forms.gle/placeholder-pertemuan-3-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-3-kelas-rb",
  },
  4: {
    ra: "https://forms.gle/placeholder-pertemuan-4-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-4-kelas-rb",
  },
  5: {
    ra: "https://forms.gle/placeholder-pertemuan-5-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-5-kelas-rb",
  },
  6: {
    ra: "https://forms.gle/placeholder-pertemuan-6-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-6-kelas-rb",
  },
  7: {
    ra: "https://forms.gle/placeholder-pertemuan-7-kelas-ra",
    rb: "https://forms.gle/placeholder-pertemuan-7-kelas-rb",
  },
};

export default function SubmissionBox({
  pertemuan,
  customUrlRA,
  customUrlRB,
  catatan,
}: SubmissionBoxProps) {
  const links = SUBMISSION_LINKS[pertemuan] || {
    ra: "https://forms.gle/placeholder-kelas-ra",
    rb: "https://forms.gle/placeholder-kelas-rb",
  };

  const targetUrlRA = customUrlRA || links.ra;
  const targetUrlRB = customUrlRB || links.rb;

  return (
    <section
      id="link-submission"
      className="submission-section"
      aria-labelledby="submission-heading"
    >
      <h2 id="submission-heading">Pengumpulan Tugas</h2>
      <p className="submission-lead-desc">
        {catatan ||
          "Silakan submit tugas dan laporan praktikum melalui tombol tautan formulir sesuai dengan kelas praktikum Anda:"}
      </p>

      <div className="submission-grid">
        {/* Card Pengumpulan Kelas RA */}
        <div className="submission-box-card kelas-ra">
          <div className="submission-box-header">
            <div className="submission-badge-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="12" />
                <line x1="15" y1="15" x2="12" y2="12" />
              </svg>
            </div>
            <div className="submission-box-info">
              <span className="submission-class-badge ra">Kelas RA</span>
              <h3 className="submission-box-title">Submission Kelas RA</h3>
              <p className="submission-box-desc">
                Pengumpulan tugas & laporan praktikum Pertemuan {pertemuan} untuk mahasiswa <strong>Kelas RA</strong>.
              </p>
            </div>
          </div>

          <div className="submission-card-action">
            <a
              href={targetUrlRA}
              target="_blank"
              rel="noopener noreferrer"
              className="submission-direct-btn ra"
            >
              <span>Submit Tugas RA</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card Pengumpulan Kelas RB */}
        <div className="submission-box-card kelas-rb">
          <div className="submission-box-header">
            <div className="submission-badge-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="12" />
                <line x1="15" y1="15" x2="12" y2="12" />
              </svg>
            </div>
            <div className="submission-box-info">
              <span className="submission-class-badge rb">Kelas RB</span>
              <h3 className="submission-box-title">Submission Kelas RB</h3>
              <p className="submission-box-desc">
                Pengumpulan tugas & laporan praktikum Pertemuan {pertemuan} untuk mahasiswa <strong>Kelas RB</strong>.
              </p>
            </div>
          </div>

          <div className="submission-card-action">
            <a
              href={targetUrlRB}
              target="_blank"
              rel="noopener noreferrer"
              className="submission-direct-btn rb"
            >
              <span>Submit Tugas RB</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
