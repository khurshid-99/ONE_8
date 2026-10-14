import type { CSSProperties } from "react";

interface CardProps {
  image: string;
  width: number;
  height?: number;
  className?: string;
}

export default function AnOdCard({
  image,
  width,
  height = 565,
  className = "",
}: CardProps) {
  const style = {
    "--card-width": `${width}px`,
    "--card-ratio": `${width} / ${height}`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={`w-(--card-width) shrink-0
        aspect-(--card-ratio) overflow-hidden ${className}`}
    >
      <img
        src={image}
        alt=""
        draggable={false}
        className="h-full w-full object-cover object-center rounded-md "
      />
    </div>
  );
}
