"use client";

import React, { useState } from "react";

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
  const [copiedRA, setCopiedRA] = useState(false);
  const [copiedRB, setCopiedRB] = useState(false);

  const links = SUBMISSION_LINKS[pertemuan] || {
    ra: "https://forms.gle/placeholder-kelas-ra",
    rb: "https://forms.gle/placeholder-kelas-rb",
  };

  const targetUrlRA = customUrlRA || links.ra;
  const targetUrlRB = customUrlRB || links.rb;

  const handleCopyRA = () => {
    navigator.clipboard.writeText(targetUrlRA);
    setCopiedRA(true);
    setTimeout(() => setCopiedRA(false), 2000);
  };

  const handleCopyRB = () => {
    navigator.clipboard.writeText(targetUrlRB);
    setCopiedRB(true);
    setTimeout(() => setCopiedRB(false), 2000);
  };

  return (
    <section
      id="link-submission"
      className="submission-section"
      aria-labelledby="submission-heading"
    >
      <h2 id="submission-heading">Pengumpulan Tugas</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginBottom: "0.75rem" }}>
        {catatan ||
          "Silakan pilih dan submit tugas melalui tautan formulir sesuai dengan kelas praktikum Anda (Kelas RA atau Kelas RB)."}
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
            <div>
              <span className="submission-class-badge ra">Kelas RA</span>
              <h3 className="submission-box-title">Submission Kelas RA</h3>
              <p className="submission-box-desc">
                Khusus mahasiswa praktikum <strong>Kelas RA</strong> Pertemuan {pertemuan}.
              </p>
            </div>
          </div>

          <div className="submission-url-wrapper">
            <div className="submission-url-input" title={targetUrlRA}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, opacity: 0.6 }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="submission-url-text">{targetUrlRA}</span>
            </div>

            <div className="submission-actions">
              <button
                type="button"
                onClick={handleCopyRA}
                className={`submission-action-btn copy ${copiedRA ? "copied" : ""}`}
                title="Salin tautan formulir Kelas RA"
              >
                {copiedRA ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Salin</span>
                  </>
                )}
              </button>

              <a
                href={targetUrlRA}
                target="_blank"
                rel="noopener noreferrer"
                className="submission-action-btn primary"
              >
                <span>Submit RA</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
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
            <div>
              <span className="submission-class-badge rb">Kelas RB</span>
              <h3 className="submission-box-title">Submission Kelas RB</h3>
              <p className="submission-box-desc">
                Khusus mahasiswa praktikum <strong>Kelas RB</strong> Pertemuan {pertemuan}.
              </p>
            </div>
          </div>

          <div className="submission-url-wrapper">
            <div className="submission-url-input" title={targetUrlRB}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, opacity: 0.6 }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="submission-url-text">{targetUrlRB}</span>
            </div>

            <div className="submission-actions">
              <button
                type="button"
                onClick={handleCopyRB}
                className={`submission-action-btn copy ${copiedRB ? "copied" : ""}`}
                title="Salin tautan formulir Kelas RB"
              >
                {copiedRB ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Salin</span>
                  </>
                )}
              </button>

              <a
                href={targetUrlRB}
                target="_blank"
                rel="noopener noreferrer"
                className="submission-action-btn primary"
              >
                <span>Submit RB</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="submission-box-footer">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
          Tautan formulir Kelas RA dan Kelas RB di atas dapat disesuaikan langsung di objek <code>SUBMISSION_LINKS</code> pada <code>SubmissionBox.tsx</code>.
        </span>
      </div>
    </section>
  );
}
