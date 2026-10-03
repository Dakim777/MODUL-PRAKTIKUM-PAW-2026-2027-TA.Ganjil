"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { daftarPertemuan } from "@/lib/pertemuan";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Listen to toggle event from Header
  useEffect(() => {
    function handler() {
      setOpen((v) => !v);
    }
    window.addEventListener("toggleSidebar", handler);
    return () => window.removeEventListener("toggleSidebar", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function closeSidebar() {
    setOpen(false);
  }



  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay${open ? " open" : ""}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        className={`sidebar${open ? " open" : ""}`}
        aria-label="Navigasi modul"
      >
        <div className="sidebar-inner">
          {/* Home link */}
          <div style={{ padding: "0 1rem 0.75rem" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                padding: "0.4rem 0.5rem",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                transition: "color 0.1s ease, background 0.1s ease",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 15V9h4v6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              Halaman Utama
            </Link>
          </div>

          <div className="sidebar-section-label">Daftar Pertemuan</div>

          <nav>
            {daftarPertemuan.map((p) => {
              const href = `/pertemuan/${p.nomor}`;
              const isActive = pathname === href;

              return (
                <div key={p.nomor} className="sidebar-pertemuan-group">
                  <Link
                    href={p.tersedia ? href : "#"}
                    className={`sidebar-nav-item${isActive ? " active" : ""}${!p.tersedia ? " coming-soon" : ""}`}
                    style={!p.tersedia ? { opacity: 0.5, cursor: "default" } : {}}
                    tabIndex={!p.tersedia ? -1 : undefined}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="sidebar-badge">
                      {String(p.nomor).padStart(2, "0")}
                    </span>
                    <span style={{ flex: 1, lineHeight: 1.35 }}>
                      {p.judul}
                      {!p.tersedia && (
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.65rem",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            marginTop: "1px",
                            color: "var(--color-text-muted)",
                          }}
                        >
                          Segera hadir
                        </span>
                      )}
                    </span>
                  </Link>


                </div>
              );
            })}
          </nav>

          {/* Bottom info */}
          <div
            style={{
              margin: "1.5rem 1.25rem 0",
              padding: "0.875rem",
              background: "var(--color-surface-alt)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p
              style={{
                fontSize: "0.725rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <strong
                style={{
                  color: "var(--color-text-secondary)",
                  fontWeight: 600,
                }}
              >
                PAW 2026/2027
              </strong>
              <br />
              T.A. Ganjil · 7 Pertemuan
              <br />
              Teknik Informatika · ITERA
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
