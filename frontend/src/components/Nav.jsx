import { useEffect, useState } from "react";

const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-forest-soft"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
                <a
                    href="#top"
                    data-testid="nav-brand-link"
                    className="font-display text-xl tracking-tighter text-forest"
                >
                    DATAWEB<span className="cursor-blink text-forest">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-10">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.label.toLowerCase()}-link`}
                            className="link-underline text-sm text-forest font-medium"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    data-testid="nav-cta-button"
                    className="btn-primary hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
                >
                    Start a project
                    <span aria-hidden>→</span>
                </a>

                <a
                    href="#contact"
                    data-testid="nav-cta-mobile"
                    className="md:hidden text-sm font-medium underline underline-offset-4"
                >
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Nav;
