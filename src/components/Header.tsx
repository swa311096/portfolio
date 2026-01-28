import { getSiteConfig } from "@/lib/config";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  const { name, about, social } = getSiteConfig();

  return (
    <header className="border-b border-[var(--border)] bg-[var(--card-bg)]/50 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <SocialIcons links={social} />
        {name && (
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            {name}
          </h1>
        )}
        <div className="mt-4 text-[var(--muted)]">
          <p className="whitespace-pre-line text-left text-base leading-relaxed sm:text-center">
            {about}
          </p>
        </div>
      </div>
    </header>
  );
}
