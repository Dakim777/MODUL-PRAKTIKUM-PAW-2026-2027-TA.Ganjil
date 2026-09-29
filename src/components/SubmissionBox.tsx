"use client";

import React, { useState } from "react";

interface SubmissionBoxProps {
  pertemuan: number;
  customUrl?: string;
  catatan?: string;
}

// URL default submission per pertemuan (dapat diubah langsung di sini oleh pengguna)
export const SUBMISSION_LINKS: Record<number, string> = {
  1: "https://forms.gle/placeholder-pengumpulan-pertemuan-1",
  2: "https://forms.gle/placeholder-pengumpulan-pertemuan-2",
  3: "https://forms.gle/placeholder-pengumpulan-pertemuan-3",
  4: "https://forms.gle/placeholder-pengumpulan-pertemuan-4",
  5: "https://forms.gle/placeholder-pengumpulan-pertemuan-5",
  6: "https://forms.gle/placeholder-pengumpulan-pertemuan-6",
  7: "https://forms.gle/placeholder-pengumpulan-pertemuan-7",
};

export default function SubmissionBox({
  pertemuan,
  customUrl,
  catatan,
}: SubmissionBoxProps) {
  const [copied, setCopied] = useState(false);
  const targetUrl = customUrl || SUBMISSION_LINKS[pertemuan] || "https://forms.gle/placeholder-pengumpulan-tugas";

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="link-submission" className="submission-section" aria-labelledby="submission-heading">
      <h2 id="submission-heading">Pengumpulan Tugas</h2>
      <div className="submission-box-card">
        <div className="submission-box-header">
          <div className="submission-badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="12" y2="12" />
              <line x1="15" y1="15" x2="12" y2="12" />
            </svg>
          </div>
          <div>
            <h3 className="submission-box-title">Formulir Pengumpulan Tugas Praktikum Pertemuan {pertemuan}</h3>
            <p className="submission-box-desc">
              {catatan ||
                "Pastikan Anda telah memeriksa format penamaan repository dan kelengkapan kode sebelum mengirimkan formulir submission."}
            </p>
          </div>
        </div>

        <div className="submission-url-wrapper">
          <div className="submission-url-input" title={targetUrl}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.6 }}>
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span className="submission-url-text">{targetUrl}</span>
          </div>

          <div className="submission-actions">
            <button
              type="button"
              onClick={handleCopy}
              className={`submission-action-btn copy ${copied ? "copied" : ""}`}
              title="Salin tautan formulir"
            >
              {copied ? (
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
                  <span>Salin Link</span>
                </>
              )}
            </button>

            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="submission-action-btn primary"
            >
              <span>Kumpulkan Tugas</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

        <div className="submission-box-footer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Tautan di atas dapat disesuaikan langsung pada file komponen atau konfigurasi modul.</span>
        </div>
      </div>
    </section>
  );
}
