"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MangaSectionProps {
    imageSrc?: string;
    showBack?: boolean;
}

export default function MangaSection({ imageSrc = "/manga.svg", showBack = true }: MangaSectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section className="min-h-screen w-full bg-[#70C1C6]">
            <div className="flex w-full flex-col items-center">
                {/* Using w-full to let the SVG scale naturally, removing explicit dimensions to rely on the SVG's intrinsic ratio or width */}
                <div className="relative w-full max-w-2xl">
                    <Image
                        src={imageSrc}
                        alt="Manga Page Design"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        priority
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Interactive Link for Illustrator - Position from manga/page.tsx */}
                    <Link
                        href="/illustrator"
                        className="absolute left-[15%] top-[2.05%] h-[1.4%] w-[7%] rounded hover:bg-white/20"
                        aria-label="Go to Illustrator section"
                    />

                    {/* Back Link - Top Left */}
                    {showBack && (
                        <Link
                            href="/"
                            className="absolute left-[1.1%] top-[0.45%] h-[0.3%] w-[21%] rounded hover:bg-white/20 cursor-pointer "
                            aria-label="Back to Home"
                        />
                    )}
                </div>

                {/* Contact Section Content - Merged here to maintain same width */}
                {isLoaded && (
                    <div className="relative w-full max-w-2xl bg-[#e0c969] pt-20 overflow-hidden font-sans text-black animate-in fade-in duration-700">

                        {/* Main Content Area */}
                        <div className="px-6 min-h-[500px] flex flex-col justify-between md:flex-row md:items-start pt-20 pb-20">

                            {/* Main Heading (Left Side) */}
                            <div className="mt-10 md:mt-40 z-10">
                                <h2 className="text-4xl font-bold leading-tight max-w-md">
                                    Let&apos;s work<br />together
                                </h2>
                            </div>

                            {/* Speech Bubbles Combined Group (Right Side) */}
                            <div className="relative flex flex-col items-end z-10 mt-10 md:mt-0">

                                {/* Large Speech Bubble */}
                                <div className="relative mb-[-20px] mr-[-30px]">
                                    <svg width="220" height="180" viewBox="0 0 220 180" className="drop-shadow-sm">
                                        <ellipse cx="110" cy="90" rx="108" ry="88" fill="#e0c969" stroke="black" strokeWidth="2" />
                                    </svg>
                                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium leading-tight w-[160px]">
                                        You can reach me out if you have any queries or hire me.
                                    </p>
                                </div>

                                {/* Small "HIRE ME" Bubble */}
                                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=thisisartistakash@gmail.com" className="relative group cursor-pointer mr-[120px]">
                                    <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-sm transition-transform group-hover:scale-105">
                                        <circle cx="50" cy="50" r="48" fill="#e0c969" stroke="black" strokeWidth="2" />
                                    </svg>
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold whitespace-nowrap">
                                        HIRE ME
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Angled Footer Section */}
                        {/* Width matches parent (max-w-2xl) */}
                        <div className="relative w-full bg-[#F2666D] mt-[-50px] pt-12 pb-12 px-6" style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0% 100%)" }}>
                            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">

                                {/* Contact Info (Left) */}
                                <div className="flex flex-col gap-2 font-bold text-lg">
                                    <p>+977 9749302803</p>
                                    <p>thisisartistakash@gmail.com</p>
                                </div>

                                {/* Social Icons (Right) */}
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/aakash.bohara.42441" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/theakash_bohara?igsh=MWozdDF5ODBlaG51aw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/akash-akash-17623938b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/@theakash_bohara" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#F2666D" stroke="none"></polygon>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

