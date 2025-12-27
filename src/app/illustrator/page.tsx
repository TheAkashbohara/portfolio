import Link from "next/link";
import Image from "next/image";
// import Navigation from "@/components/Navigation"; // Keeping for future reference if needed

export default function IllustratorPage() {
    return (
        <main className="min-h-screen w-full bg-[#E0F2FE]">
            {/* <Navigation /> */}

            <div className="flex w-full flex-col items-center">
                <div className="relative w-full max-w-2xl">
                    <Image
                        src="/illuatration.svg"
                        alt="Illustration Page Design"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        priority
                    />

                    {/* Back Link - Top Left */}
                    <Link
                        href="/"
                        className="absolute left-[1.2%] top-[0.68%] h-[0.6%] w-[23.4%] rounded hover:bg-white/20 cursor-pointer"
                        aria-label="Back to Home"
                    />

                    {/* Hire Me Button Overlay - Placeholder position */}
                    {/* Approx loc: Top-Right typically, adjusting for common portfolio layouts */}
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=thisisartistakash@gmail.com"
                        className="absolute right-[11.4%] bottom-[0.76%] h-[0.4%] w-[22%] rounded hover:bg-white/20 rounded-full"
                        aria-label="Hire Me"
                        target="_blank"
                    />
                </div>
            </div>
        </main>
    );
}
