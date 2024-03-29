import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { Dynamic } from "solid-js/web";

// import styles from "./Heading.module.css";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  level: HeadingLevel;
} & JSX.HTMLAttributes<HTMLHeadingElement>;

export function Heading(props: HeadingProps) {
  const [own, rest] = splitProps(props, ["level", "children"]);

  return (
    <Dynamic<HeadingLevel> component={own.level} {...rest}>
      <Show when={rest.id} fallback={own.children}>
        <a href={`#${rest.id!}`}>{own.children}</a>
      </Show>
    </Dynamic>
  );
}

export function createHeading(level: HeadingLevel) {
  return (props: Omit<HeadingProps, "level">) => (
    <Heading level={level} {...props} />
  );
}
