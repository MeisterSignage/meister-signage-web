import type { CSSProperties } from "react";

/** Static-export Spark assets: descriptors match the actual generated widths. */
export default function RentalSparkImage({ src, alt, sizes, hero = false, style }: {
  src: string;
  alt: string;
  sizes: string;
  hero?: boolean;
  style?: CSSProperties;
}) {
  const square = src.includes("SparkQ-");
  return (
    // Static files are already optimised; native srcset avoids the global loader's width rounding.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src.replace(/\.webp$/, "-800w.webp")}
      srcSet={[400, 600, 800].map(width => `${src.replace(/\.webp$/, `-${width}w.webp`)} ${width}w`).concat(`${src} 1024w`).join(", ")}
      sizes={sizes}
      alt={alt}
      width={1024}
      height={square ? 1024 : 683}
      loading={hero ? "eager" : "lazy"}
      fetchPriority={hero ? "high" : undefined}
      decoding="async"
      className={hero ? "h-auto w-full" : "absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.05]"}
      style={style}
    />
  );
}
