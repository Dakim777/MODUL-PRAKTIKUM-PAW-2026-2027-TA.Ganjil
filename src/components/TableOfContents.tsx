"use client";

import { useEffect, useState } from "react";
import type { SubTopik } from "@/lib/pertemuan";

interface Props {
  subTopik: SubTopik[];
}

export default function TableOfContents({ subTopik }: Props) {
  const [activeId, setActiveId] = useState<string>(subTopik[0]?.id || "");
  const [readProgress, setReadProgress] = useState<number>(0);

  useEffect(() => {
    // 1. Ensure all target heading elements have their IDs
    const headings = Array.from(
      document.querySelectorAll(
        ".article-content h2, .article-content h3, #tujuan-pembelajaran, #tujuan-heading"
      )
    );

    subTopik.forEach((item) => {
      if (document.getElementById(item.id)) return;

      const stepMatch = item.id.match(/langkah-(\d+)/i);
      const stepPattern = stepMatch ? `langkah ${stepMatch[1]}` : null;

      for (const h of headings) {
        const text = (h as HTMLElement).innerText.toLowerCase().trim();
        const itemTitle = item.judul.toLowerCase().trim();

        if (text.includes(itemTitle) || itemTitle.includes(text)) {
          h.id = item.id;
          break;
        }

        if (stepPattern && text.includes(stepPattern)) {
          h.id = item.id;
          break;
        }

        if (item.id === "dasar-teori" && text.includes("dasar teori")) {
          h.id = item.id;
          break;
        }
        if (item.id === "tugas-praktikum" && text.includes("tugas")) {
          h.id = item.id;
          break;
        }
        if (item.id === "format-pengumpulan" && text.includes("pengumpulan")) {
          h.id = item.id;
          break;
        }
        if (item.id === "hasil-praktikum" && text.includes("hasil praktikum")) {
          h.id = item.id;
          break;
        }
        if (
          item.id === "prasyarat-alat" &&
          (text.includes("prasyarat") || text.includes("alat dan bahan"))
        ) {
          h.id = item.id;
          break;
        }
        if (item.id === "alat-bahan" && text.includes("alat")) {
          h.id = item.id;
          break;
        }
        if (item.id === "bonus-react" && text.includes("bonus")) {
          h.id = item.id;
          break;
        }
        if (item.id === "paket-dibutuhkan" && text.includes("paket")) {
          h.id = item.id;
          break;
        }
      }
    });

    // 2. Set scroll-margin-top on all target headings so header doesn't overlap
    const allHeadings = document.querySelectorAll(
      ".article-content h2, .article-content h3, #tujuan-pembelajaran, #tujuan-heading"
    );
    allHeadings.forEach((h) => {
      (h as HTMLElement).style.scrollMarginTop = "80px";
    });

    // 3. Scroll spy logic with passive listener
    function handleScroll() {
      // Calculate reading progress percentage
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, Math.round((window.scrollY / totalHeight) * 100))
        );
        setReadProgress(progress);
      }

      // Detect active heading
      const scrollPosition = window.scrollY + 130;
      const elements: { id: string; top: number }[] = [];

      subTopik.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          elements.push({ id: item.id, top: el.offsetTop });
        }
      });

      // Sort by vertical position
      elements.sort((a, b) => a.top - b.top);

      let currentId = elements[0]?.id || "";
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].top <= scrollPosition) {
          currentId = elements[i].id;
        } else {
          break;
        }
      }

      if (currentId) {
        setActiveId(currentId);
        window.dispatchEvent(
          new CustomEvent("activeHeadingChanged", { detail: { id: currentId } })
        );
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [subTopik]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setActiveId(id);
      window.dispatchEvent(
        new CustomEvent("activeHeadingChanged", { detail: { id } })
      );
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <aside className="toc-sidebar" aria-label="Daftar isi halaman">
      <div className="toc-sticky">
        {/* Header TOC */}
        <div className="toc-header">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 3.5h12M2 8h8M2 12.5h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>PADA HALAMAN INI</span>
        </div>

        {/* Reading Progress Indicator */}
        <div className="toc-progress-wrapper">
          <div className="toc-progress-bar" style={{ width: `${readProgress}%` }} />
        </div>

        {/* List of sections */}
        <nav className="toc-nav">
          {subTopik.map((item) => {
            const isActive = activeId === item.id;
            const isSub = item.level === 3;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className={`toc-link${isActive ? " active" : ""}${isSub ? " toc-sub" : ""}`}
                aria-current={isActive ? "location" : undefined}
                title={item.judul}
              >
                <span className="toc-link-text">{item.judul}</span>
              </a>
            );
          })}
        </nav>

        {/* Back to top button */}
        <button type="button" onClick={scrollToTop} className="toc-back-to-top">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 13V3M3.5 7.5L8 3l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Kembali ke atas</span>
        </button>
      </div>
    </aside>
  );
}
