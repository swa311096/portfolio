import { getSiteConfig } from "@/lib/config";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  const { name, about, social } = getSiteConfig();

  return (
    <header className="flex h-[20vh] min-h-[180px] max-h-[250px] items-center border-b border-[var(--border)] bg-[var(--card-bg)]/50 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-3xl px-6 py-4 text-center">
        <SocialIcons links={social} />
        {name && (
          <h1 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
            {name}
          </h1>
        )}
        <div className="mt-2 text-[var(--muted)]">
          <p className="line-clamp-2 whitespace-pre-line text-left text-sm leading-relaxed sm:text-center sm:line-clamp-none">
            {about}
          </p>
        </div>
      </div>
    </header>
  );
}
