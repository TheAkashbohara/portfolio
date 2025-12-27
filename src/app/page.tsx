import Link from "next/link";
import Image from "next/image";
import MangaSection from "@/components/MangaSection";
// import Navigation from "@/components/Navigation"; // Keeping for future reference if needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#70C1C6] py-10">
      {/* Container wraps image exactly so percentages are relative to image size */}
      <div className="relative w-full max-w-2xl px-4 md:px-0">
        <Image
          src="/hero-design.png"
          alt="Hero Design - Akash Bohara"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 42rem"
          className="h-auto w-full"
          priority
        />

        {/* Navigation Overlays */}

        {/* Manga: Vertical strip on the left */}
        {/* Approx location: Left ~8%, Top ~29%, Width ~7%, Height ~15% */}
        <Link
          href="/manga"
          className="absolute left-[8%] top-[28%] h-[15%] w-[7%] rounded hover:bg-white/20"
          aria-label="Go to Manga section"
        />

        {/* Illustrator: Vertical strip to the right of Manga */}
        {/* Approx location: Left ~23%, Top ~34%, Width ~7%, Height ~18% */}
        <Link
          href="/illustrator"
          className="absolute left-[23%] top-[34%] h-[18%] w-[7%] rounded hover:bg-white/20"
          aria-label="Go to Illustrator section"
        />

        {/* Concept Art: Horizontal strip below */}
        {/* Approx location: Left ~7%, Top ~57%, Width ~23%, Height ~5% */}
        <Link
          href="/concept-art"
          className="absolute left-[7%] top-[56%] h-[5%] w-[23%] rounded hover:bg-white/20"
          aria-label="Go to Concept Art section"
        />
      </div>

      {/* Manga Section rendered below the fold for continuous scroll */}
      <MangaSection imageSrc="/manga_home.svg" showBack={false} />
    </main>
  );
}
