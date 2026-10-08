"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { daftarPertemuan } from "@/lib/pertemuan";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  // Listen to toggle event from Header
  useEffect(() => {
    function handler() {
      setOpen((v) => !v);
    }
    window.addEventListener("toggleSidebar", handler);
    return () => window.removeEventListener("toggleSidebar", handler);
  }, []);

  // Listen to active heading changes from TableOfContents
  useEffect(() => {
    function headingHandler(e: Event) {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id) {
        setActiveHeadingId(customEvent.detail.id);
      }
    }
    window.addEventListener("activeHeadingChanged", headingHandler);
    return () =>
      window.removeEventListener("activeHeadingChanged", headingHandler);
  }, []);

  // Independent scroll spy for Sidebar (works on all screen sizes)
  useEffect(() => {
    const currentPertemuan = daftarPertemuan.find(
      (p) => `/pertemuan/${p.nomor}` === pathname
    );
    if (!currentPertemuan || !currentPertemuan.subTopik.length) return;

    if (!activeHeadingId && currentPertemuan.subTopik[0]) {
      setActiveHeadingId(currentPertemuan.subTopik[0].id);
    }

    function onScroll() {
      const scrollPos = window.scrollY + 120;
      const subTopik = currentPertemuan?.subTopik || [];
      const positions: { id: string; top: number }[] = [];

      for (const item of subTopik) {
        const el = document.getElementById(item.id);
        if (el) {
          positions.push({
            id: item.id,
            top: el.getBoundingClientRect().top + window.scrollY,
          });
        }
      }

      positions.sort((a, b) => a.top - b.top);

      let found = positions[0]?.id || "";
      for (const pos of positions) {
        if (pos.top <= scrollPos) {
          found = pos.id;
        } else {
          break;
        }
      }

      if (found) {
        setActiveHeadingId(found);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, activeHeadingId]);

  // Reset active heading on page change
  useEffect(() => {
    setOpen(false);
    setActiveHeadingId("");
  }, [pathname]);

  function closeSidebar() {
    setOpen(false);
  }

  function handleSubtopicClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setActiveHeadingId(id);
    } else {
      window.location.hash = id;
    }
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
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
              const isActive = pathname === href || pathname.startsWith(`${href}/`);

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
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.65rem",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            marginTop: "2px",
                            color: "var(--color-text-muted)",
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          Terkunci
                        </span>
                      )}
                    </span>
                  </Link>

                  {/* Subtopik headline utama (terbuka jika pertemuan aktif) */}
                  {isActive && p.subTopik && p.subTopik.length > 0 && (
                    <div
                      className="sidebar-subtopics"
                      aria-label={`Sub-topik Pertemuan ${p.nomor}`}
                    >
                      <div className="sidebar-subtopics-list">
                        {p.subTopik.map((sub) => {
                          const isModuleSubpage = p.nomor === 2; // Pilot testing for Module 2
                          const subHref = isModuleSubpage ? `/pertemuan/${p.nomor}/${sub.id}` : `#${sub.id}`;
                          const isSubActive = isModuleSubpage ? pathname === subHref : activeHeadingId === sub.id;

                          if (isModuleSubpage) {
                            return (
                              <Link
                                key={sub.id}
                                href={subHref}
                                onClick={() => { if (window.innerWidth < 1024) setOpen(false); }}
                                className={`sidebar-subtopic-link${isSubActive ? " active" : ""}`}
                                title={sub.judul}
                              >
                                <span className="sidebar-subtopic-text">{sub.judul}</span>
                              </Link>
                            );
                          }

                          return (
                            <a
                              key={sub.id}
                              href={subHref}
                              onClick={(e) => handleSubtopicClick(e, sub.id)}
                              className={`sidebar-subtopic-link${isSubActive ? " active" : ""}`}
                              title={sub.judul}
                            >
                              <span className="sidebar-subtopic-text">
                                {sub.judul}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
