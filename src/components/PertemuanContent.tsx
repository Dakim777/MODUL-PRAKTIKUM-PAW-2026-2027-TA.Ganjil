import Pertemuan1 from "@/content/pertemuan-01";
import Pertemuan2 from "@/content/pertemuan-02";
import Pertemuan3 from "@/content/pertemuan-03";
import Pertemuan4 from "@/content/pertemuan-04";
import Pertemuan5 from "@/content/pertemuan-05";
import Pertemuan6 from "@/content/pertemuan-06";
import Pertemuan7 from "@/content/pertemuan-07";
const contentMap: Record<number, React.ComponentType> = {
  1: Pertemuan1,
  2: Pertemuan2,
  3: Pertemuan3,
  4: Pertemuan4,
  5: Pertemuan5,
  6: Pertemuan6,
  7: Pertemuan7,
};

export default function PertemuanContent({ nomor }: { nomor: number }) {
  const Content = contentMap[nomor];
  if (!Content) return null;
  return <Content />;
}
