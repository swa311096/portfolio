import { getSiteConfig } from "@/lib/config";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  const { name, image, about, social } = getSiteConfig();

  return (
    <header className="flex h-[24vh] min-h-[220px] max-h-[320px] items-center border-b border-[var(--border)] bg-[var(--card-bg)]/50 backdrop-blur-sm shadow-md">
      <div className="mx-auto w-[80%] max-w-6xl px-6 py-6 sm:px-10 lg:px-14 text-center flex flex-col justify-between items-center h-full">
        <div className="flex items-center justify-center gap-4">
          <div className="shrink-0">
            {image ? (
              <img
                src={image}
                alt={name || "Profile picture"}
                className="h-[83px] w-[83px] rounded-full border-2 border-[var(--border)] object-cover"
              />
            ) : (
              <div className="h-[83px] w-[83px] rounded-full border-2 border-[var(--border)] bg-[var(--card-bg)] flex items-center justify-center">
                <span className="text-[0.75rem] text-[var(--muted)]">Photo</span>
              </div>
            )}
          </div>
          <div className="flex-1 text-[var(--muted)] min-w-0 -mt-2 max-w-md">
            <p className="whitespace-pre-line text-left text-[0.6rem] leading-relaxed sm:text-[0.66rem]">
              {about}
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <SocialIcons links={social} />
        </div>
      </div>
    </header>
  );
}
