import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  cta?: { label: string; href: string };
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundGradient = "from-water-700 via-water-500 to-forest-600",
  backgroundImage,
  cta,
  overlay = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-full min-h-[400px] md:min-h-[300px] flex items-center justify-center ${
        !backgroundImage ? `bg-gradient-to-r ${backgroundGradient}` : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      )}
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white opacity-80">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block bg-copper-500 text-white font-medium rounded-lg px-8 py-4 hover:bg-copper-600 transition-colors"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
