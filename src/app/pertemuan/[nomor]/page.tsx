import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarPertemuan, getPrevNext } from "@/lib/pertemuan";
import PertemuanContent from "@/components/PertemuanContent";
import TableOfContents from "@/components/TableOfContents";

interface Props {
  params: Promise<{ nomor: string }>;
}

export async function generateStaticParams() {
  return daftarPertemuan.map((p) => ({ nomor: String(p.nomor) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nomor } = await params;
  const p = daftarPertemuan.find((x) => x.nomor === parseInt(nomor));
  if (!p) return {};
  return {
    title: `Pertemuan ${p.nomor}: ${p.judul}`,
    description: p.deskripsi,
  };
}

export default async function PertemuanPage({ params }: Props) {
  const { nomor } = await params;
  const nomorInt = parseInt(nomor);
  const pertemuan = daftarPertemuan.find((p) => p.nomor === nomorInt);

  if (!pertemuan || !pertemuan.tersedia) notFound();

  const { prev, next } = getPrevNext(nomorInt);

  return (
    <div className="pertemuan-page-container">
      {/* Kolom Konten Utama */}
      <div className="main-content">
        {/* Header pertemuan */}
        <div className="pertemuan-header">
          <div className="pertemuan-num-label">
            PERTEMUAN {String(pertemuan.nomor).padStart(2, "0")}
          </div>
          <h1 className="pertemuan-title">{pertemuan.judul}</h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            {pertemuan.subjudul}
          </p>
          <div className="pertemuan-meta">
            <span className="pertemuan-meta-badge">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 4.5V8l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {pertemuan.durasi}
            </span>
            <span className="pertemuan-meta-badge">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {pertemuan.tujuan.length} Tujuan Pembelajaran
            </span>
          </div>
        </div>

        {/* Tujuan Pembelajaran */}
        <div className="article-content">
          <section id="tujuan-pembelajaran" aria-labelledby="tujuan-heading">
            <h2 id="tujuan-heading">Tujuan Pembelajaran</h2>
            <ul>
              {pertemuan.tujuan.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          {/* Konten utama modul */}
          <PertemuanContent nomor={nomorInt} />

          {/* Navigasi prev/next */}
          <nav className="pertemuan-nav" aria-label="Navigasi pertemuan">
            {prev ? (
              <Link
                href={`/pertemuan/${prev.nomor}`}
                className="pertemuan-nav-btn prev"
              >
                <span className="pertemuan-nav-label">← Modul Sebelumnya</span>
                <span className="pertemuan-nav-title">
                  Pertemuan {prev.nomor}: {prev.judul}
                </span>
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/pertemuan/${next.nomor}`}
                className="pertemuan-nav-btn next"
              >
                <span className="pertemuan-nav-label">Modul Selanjutnya →</span>
                <span className="pertemuan-nav-title">
                  Pertemuan {next.nomor}: {next.judul}
                </span>
              </Link>
            ) : null}
          </nav>
        </div>
      </div>

      {/* Kolom Kanan: On This Page / Table of Contents */}
      <TableOfContents subTopik={pertemuan.subTopik} />
    </div>
  );
}
