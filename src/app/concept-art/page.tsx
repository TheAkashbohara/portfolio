import Link from "next/link";
import Image from "next/image";
// import Navigation from "@/components/Navigation"; // Keeping for future reference if needed

export default function ConceptArtPage() {
    return (
        <main className="min-h-screen w-full bg-[#FFB8C5] text-black">
            {/* <Navigation /> */}

            <div className="flex w-full flex-col items-center">
                <div className="relative w-full max-w-2xl">
                    <Image
                        src="/conceptart.svg"
                        alt="Concept Art Page Design"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        priority
                    />

                    {/* Back Link - Top Left */}
                    <Link
                        href="/"
                        className="absolute left-[1.9%] top-[0.68%] h-[0.8%] w-[21%] rounded hover:bg-white/20 cursor-pointer"
                        aria-label="Back to Home"
                    />
                </div>
            </div>
        </main>
    );
}
