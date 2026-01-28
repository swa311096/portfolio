import { getCategories, getProjects } from "@/lib/config";
import { Header } from "@/components/Header";
import { CategoryBuckets } from "@/components/CategoryBuckets";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  const categories = getCategories();
  const projects = getProjects();

  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsSection projects={projects} />
      <CategoryBuckets categories={categories} />
    </main>
  );
}
