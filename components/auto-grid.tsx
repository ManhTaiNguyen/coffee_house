import clsx from "clsx";
import { ReactNode } from "react";

type AutoGridProps = {
  min?: string;
  gap?: string;
  className?: string;
  children: ReactNode;
};

export default function AutoGrid({
  min = "100px",
  gap = "gap-4",
  className = "",
  children,
}: AutoGridProps) {
  return (
    <div
      className={clsx("grid", gap, className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
      }}
    >
      {children}
    </div>
  )
}