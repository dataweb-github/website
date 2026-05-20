import { ArrowDownRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export const Hero = () => {
    const ref = useReveal();
    return (
        <section
            id="top"
            data-testid="hero-section"
            ref={ref}
            className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-10 max-w-[1400px] mx-auto"
        >
            <div className="flex items-center gap-3 mb-10" data-reveal>
                <span className="w-2 h-2 bg-forest rounded-full" />
                <span
                    className="font-mono-label text-forest"
                    data-testid="hero-status-label"
                >
                    Available — Q1 2026 engagements
                </span>
            </div>

            <h1
                data-testid="hero-heading"
                data-reveal
                className="font-display text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.85] tracking-tighter text-forest"
            >
                DATA<span className="text-forest-deep">WEB</span>
            </h1>

            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-5" data-reveal>
                    <p className="font-mono-label text-forest/70 mb-3">
                        (01) — What we do
                    </p>
                    <p className="text-lg md:text-xl leading-snug">
                        Infrastructure, support and software for teams that
                        need things to <em className="not-italic underline decoration-1 underline-offset-4">just work</em>.
                    </p>
                </div>

                <div
                    className="md:col-span-5 md:col-start-8 md:text-right"
                    data-reveal
                >
                    <p className="font-mono-label text-forest/70 mb-3">
                        (02) — Practice
                    </p>
                    <p className="text-lg md:text-xl leading-snug">
                        Server &amp; email management · User helpdesk · Full-stack
                        development.
                    </p>
                </div>
            </div>

            <div
                className="mt-16 md:mt-24 flex flex-col sm:flex-row gap-4 items-start"
                data-reveal
            >
                <a
                    href="#services"
                    data-testid="hero-explore-button"
                    className="btn-primary inline-flex items-center gap-3 px-7 py-4 text-sm font-medium"
                >
                    Explore services
                    <ArrowDownRight size={16} strokeWidth={1.5} />
                </a>
                <a
                    href="#contact"
                    data-testid="hero-talk-button"
                    className="btn-secondary inline-flex items-center gap-3 px-7 py-4 text-sm font-medium"
                >
                    Talk to an engineer
                </a>
            </div>
        </section>
    );
};

export default Hero;
