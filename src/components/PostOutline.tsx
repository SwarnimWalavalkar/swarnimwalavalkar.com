import { For, createSignal, onCleanup, onMount } from "solid-js";

export type OutlineHeading = {
  slug: string;
  text: string;
  depth: number;
};

type Props = {
  headings: OutlineHeading[];
  introLabel?: string;
};

const ACTIVE_OFFSET_PX = 220;
const TOP_ID = "__intro__";

export function PostOutline(props: Props) {
  const items = () => props.headings.filter((h) => h.depth >= 2 && h.depth <= 3);

  const [activeId, setActiveId] = createSignal<string | null>(
    props.introLabel ? TOP_ID : items()[0]?.slug ?? null,
  );

  onMount(() => {
    let raf: number | null = null;
    let scrollHandler: (() => void) | null = null;

    const start = () => {
      const slugs = items().map((h) => h.slug);
      const elements = slugs
        .map((slug) => document.getElementById(slug))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) return;

      const compute = () => {
        raf = null;
        let current: string | null = props.introLabel ? TOP_ID : elements[0]!.id;
        for (const el of elements) {
          if (el.getBoundingClientRect().top - ACTIVE_OFFSET_PX <= 0) {
            current = el.id;
          } else {
            break;
          }
        }
        if (current !== activeId()) setActiveId(current);
      };

      scrollHandler = () => {
        if (raf !== null) return;
        raf = requestAnimationFrame(compute);
      };

      window.addEventListener("scroll", scrollHandler, { passive: true });
      window.addEventListener("resize", scrollHandler, { passive: true });
      compute();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
      start();
    }

    onCleanup(() => {
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
        window.removeEventListener("resize", scrollHandler);
      }
      if (raf !== null) cancelAnimationFrame(raf);
    });
  });

  const handleClick = (e: MouseEvent, slug: string) => {
    e.preventDefault();
    if (slug === TOP_ID) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
      setActiveId(TOP_ID);
      return;
    }
    const el = document.getElementById(slug);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${slug}`);
    setActiveId(slug);
  };

  return (
    <nav aria-label="On this page" class="text-sm">
      <p class="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-neutral-500">
        On this page
      </p>
      <ul class="relative space-y-1 border-l border-neutral-800">
        {props.introLabel && (
          <li class="relative">
            <a
              href="#"
              onClick={(e) => handleClick(e, TOP_ID)}
              classList={{
                "block py-1 pl-4 leading-snug transition-colors duration-200":
                  true,
                "text-neutral-100": activeId() === TOP_ID,
                "text-neutral-500 hover:text-neutral-300":
                  activeId() !== TOP_ID,
              }}
            >
              {props.introLabel}
            </a>
            {activeId() === TOP_ID && (
              <span
                aria-hidden="true"
                class="absolute -left-px top-0 h-full w-[2px] bg-neutral-200"
              />
            )}
          </li>
        )}
        <For each={items()}>
          {(h) => {
            const isActive = () => activeId() === h.slug;
            return (
              <li class="relative">
                <a
                  href={`#${h.slug}`}
                  onClick={(e) => handleClick(e, h.slug)}
                  classList={{
                    "block py-1 pl-4 leading-snug transition-colors duration-200":
                      true,
                    "pl-7": h.depth === 3,
                    "text-neutral-100": isActive(),
                    "text-neutral-500 hover:text-neutral-300": !isActive(),
                  }}
                >
                  {h.text}
                </a>
                {isActive() && (
                  <span
                    aria-hidden="true"
                    class="absolute -left-px top-0 h-full w-[2px] bg-neutral-200"
                  />
                )}
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
