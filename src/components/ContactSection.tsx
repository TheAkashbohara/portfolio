import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="relative w-full bg-[#EEDC5B] pt-20 overflow-hidden font-sans text-black">

            {/* Main Content Area */}
            <div className="container mx-auto px-6 md:px-12 relative min-h-[500px] bg[#e0c969]">

                {/* Speech Bubbles Combined Group (Top Right) */}
                <div className="absolute right-[5%] top-0 md:right-[15%] md:top-10 flex flex-col items-end z-10">

                    {/* Large Speech Bubble */}
                    <div className="relative mb-[-20px] mr-[-30px]">
                        <svg width="220" height="180" viewBox="0 0 220 180" className="drop-shadow-sm">
                            <ellipse cx="110" cy="90" rx="108" ry="88" fill="#e0c969" stroke="black" strokeWidth="2" />
                            {/* Little tail pointing up/right if needed, simplified for now as oval */}
                        </svg>
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium leading-tight w-[160px]">
                            You can reach me out if you have any queries or hire me.
                        </p>
                    </div>

                    {/* Small "HIRE ME" Bubble */}
                    <Link href="mailto:thisisartistakash@gmail.com" className="relative group cursor-pointer mr-[120px]">
                        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-sm transition-transform group-hover:scale-105">
                            <circle cx="50" cy="50" r="48" fill="#e0c969" stroke="black" strokeWidth="2" />
                        </svg>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold whitespace-nowrap">
                            HIRE ME
                        </span>
                    </Link>
                </div>

                {/* Main Heading (Left Aligned, vertically centered relative to empty space) */}
                <div className="pt-40 pb-40 md:pt-60 md:pb-60">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-md">
                        Let&apos;s work<br />together
                    </h2>
                </div>

            </div>

            {/* Angled Footer Section */}
            {/* Using clip-path or skew transform to achieve the angle */}
            <div className="relative w-full bg-[#F2666D] mt-[-50px] pt-24 pb-12 px-6 md:px-12" style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0% 100%)" }}>
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-8">

                    {/* Contact Info (Left) */}
                    <div className="flex flex-col gap-2 font-bold text-lg md:text-xl">
                        <p>+977 9749302803</p>
                        <p>thisisartistakash@gmail.com</p>
                    </div>

                    {/* Social Icons (Right) */}
                    <div className="flex gap-4">
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" aria-label="X" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black" stroke="none"></polygon>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
