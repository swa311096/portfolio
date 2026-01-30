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
      <div className="mx-auto w-[80%] max-w-6xl px-6 sm:px-10 lg:px-14">
        <ProjectsSection projects={projects} />
        <CategoryBuckets categories={categories} />
      </div>
    </main>
  );
}
