import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarPertemuan } from "@/lib/pertemuan";
import PertemuanContent from "@/components/PertemuanContent";
import TableOfContents from "@/components/TableOfContents";

interface Props {
  params: Promise<{ nomor: string; sub_id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nomor, sub_id } = await params;
  const p = daftarPertemuan.find((x) => x.nomor === parseInt(nomor));
  if (!p) return {};
  const sub = p.subTopik.find((s) => s.id === sub_id);
  if (!sub) return { title: `Pertemuan ${p.nomor}` };

  return {
    title: `${sub.judul} | Pertemuan ${p.nomor}`,
    description: `Materi ${sub.judul} pada modul ${p.judul}`,
  };
}

export default async function SubPertemuanPage({ params }: Props) {
  const { nomor, sub_id } = await params;
  const nomorInt = parseInt(nomor);
  const pertemuan = daftarPertemuan.find((p) => p.nomor === nomorInt);

  if (!pertemuan || !pertemuan.tersedia) notFound();

  const subIndex = pertemuan.subTopik.findIndex((s) => s.id === sub_id);
  if (subIndex === -1) notFound();

  const subTopik = pertemuan.subTopik[subIndex];
  const prevSub = subIndex > 0 ? pertemuan.subTopik[subIndex - 1] : null;
  const nextSub = subIndex < pertemuan.subTopik.length - 1 ? pertemuan.subTopik[subIndex + 1] : null;

  return (
    <div className="pertemuan-page-container">
      {/* Kolom Konten Utama */}
      <div className="main-content">
        {/* Header pertemuan minimalis untuk subpage */}
        <div className="pertemuan-header" style={{ paddingBottom: '1rem', marginBottom: '2rem' }}>
          <div className="pertemuan-num-label">
            <Link href={`/pertemuan/${nomor}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              ← KEMBALI KE OVERVIEW PERTEMUAN {String(pertemuan.nomor).padStart(2, "0")}
            </Link>
          </div>
          <h1 className="pertemuan-title" style={{ fontSize: '2rem' }}>{subTopik.judul}</h1>
        </div>

        <div className="article-content">
          {/* Konten spesifik sub-id */}
          <PertemuanContent nomor={nomorInt} subId={sub_id} />

          {/* Navigasi prev/next subtopik */}
          <nav className="pertemuan-nav" aria-label="Navigasi subtopik">
            {prevSub ? (
              <Link
                href={`/pertemuan/${nomor}/${prevSub.id}`}
                className="pertemuan-nav-btn prev"
              >
                <span className="pertemuan-nav-label">← Sebelumnya</span>
                <span className="pertemuan-nav-title">{prevSub.judul}</span>
              </Link>
            ) : (
              <Link
                href={`/pertemuan/${nomor}`}
                className="pertemuan-nav-btn prev"
              >
                <span className="pertemuan-nav-label">← Kembali</span>
                <span className="pertemuan-nav-title">Overview Modul</span>
              </Link>
            )}
            
            {nextSub ? (
              <Link
                href={`/pertemuan/${nomor}/${nextSub.id}`}
                className="pertemuan-nav-btn next"
              >
                <span className="pertemuan-nav-label">Selanjutnya →</span>
                <span className="pertemuan-nav-title">{nextSub.judul}</span>
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
