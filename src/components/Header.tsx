"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { daftarPertemuan } from "@/lib/pertemuan";

export default function Header() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim().length >= 2
    ? daftarPertemuan.filter((p) =>
        p.judul.toLowerCase().includes(query.toLowerCase()) ||
        p.deskripsi.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Toggle sidebar event (listened by Sidebar component)
  function toggleSidebar() {
    const event = new CustomEvent("toggleSidebar");
    window.dispatchEvent(event);
  }

  // Breadcrumb
  const isHome = pathname === "/";
  const match = pathname.match(/^\/pertemuan\/(\d+)/);
  const pertemuanNum = match ? parseInt(match[1]) : null;
  const currentPertemuan = pertemuanNum
    ? daftarPertemuan.find((p) => p.nomor === pertemuanNum)
    : null;

  return (
    <header className="site-header">
      {/* Sidebar toggle (mobile) */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Logo */}
      <Link href="/" className="header-logo" style={{ gap: "0.75rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-if-itera.png"
          alt="Logo Teknik Informatika ITERA"
          width={34}
          height={34}
          style={{ objectFit: "contain", flexShrink: 0, borderRadius: "2px" }}
        />
        <div className="header-logo-text">
          <span className="header-logo-title" style={{ fontSize: "0.825rem", letterSpacing: "0.02em" }}>
            PRAKTIKUM PENGEMBANGAN APLIKASI WEB
          </span>
          <span className="header-logo-subtitle">Teknik Informatika · ITERA</span>
        </div>
      </Link>

      {/* Divider + breadcrumb */}
      {!isHome && (
        <>
          <div className="header-divider" />
          <nav className="header-breadcrumb" aria-label="Breadcrumb">
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 2.5L7.5 6l-3 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {currentPertemuan ? (
              <span>Pertemuan {pertemuanNum}: {currentPertemuan.judul}</span>
            ) : (
              <span>{pathname.replace("/", "")}</span>
            )}
          </nav>
        </>
      )}

      {/* Search */}
      <div className="search-wrapper" ref={searchRef} style={{ marginLeft: isHome ? "auto" : undefined }}>
        <svg className="search-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          id="search-modul"
          type="search"
          className="search-input"
          placeholder="Cari modul..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          autoComplete="off"
        />

        {showResults && query.trim().length >= 2 && (
          <div className="search-results-dropdown" role="listbox">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <Link
                  key={p.nomor}
                  href={p.tersedia ? `/pertemuan/${p.nomor}` : "#"}
                  className="search-result-item"
                  onClick={() => { setShowResults(false); setQuery(""); }}
                >
                  <div className="search-result-num">PERTEMUAN {String(p.nomor).padStart(2, "0")}</div>
                  <div className="search-result-title">{p.judul}</div>
                  <div className="search-result-desc">{p.deskripsi}</div>
                </Link>
              ))
            ) : (
              <div className="search-empty">Tidak ada modul yang cocok.</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
