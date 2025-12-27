import Link from 'next/link';

export default function Navigation() {
    const links = [
        { href: '/manga', label: 'Manga' },
        { href: '/concept-art', label: 'Concept Art' },
        { href: '/illustrator', label: 'Illustrator' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md transition-all hover:bg-black/30 hover:border-white/20">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-full px-6 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
