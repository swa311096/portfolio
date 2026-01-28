import { getCategories } from "@/lib/config";
import { Header } from "@/components/Header";
import { CategoryBuckets } from "@/components/CategoryBuckets";

export default function Home() {
  const categories = getCategories();

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryBuckets categories={categories} />
    </main>
  );
}
