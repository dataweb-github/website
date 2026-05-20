import useReveal from "../hooks/useReveal";

const stats = [
    { value: "12+", label: "Years in operations" },
    { value: "99.98%", label: "Average uptime delivered" },
    { value: "< 30m", label: "Median first response" },
    { value: "40+", label: "Active clients" },
];

export const About = () => {
    const ref = useReveal();
    return (
        <section
            id="about"
            data-testid="about-section"
            ref={ref}
            className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-forest-soft"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-5" data-reveal>
                    <p className="font-mono-label text-forest/70 mb-4">
                        § About
                    </p>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-forest leading-[0.9] tracking-tighter">
                        A quiet
                        <br />
                        engineering
                        <br />
                        team.
                    </h2>
                </div>

                <div className="md:col-span-6 md:col-start-7" data-reveal>
                    <p className="text-xl md:text-2xl leading-snug text-forest mb-8">
                        DATAWEB is a small group of senior engineers and
                        operators. We don't pitch transformation — we keep
                        servers running, answer tickets, and ship the software
                        you actually use.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-forest/85 max-w-xl">
                        We work with founders, IT managers and operations leads
                        who want a single partner across infrastructure,
                        support and product. No layers, no account managers —
                        you talk to the people doing the work.
                    </p>
                </div>
            </div>

            <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-l border-forest-soft">
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        data-reveal
                        data-testid={`about-stat-${i}`}
                        className="border-b border-r border-forest-soft p-6 md:p-8"
                    >
                        <div className="font-display text-4xl md:text-5xl lg:text-6xl text-forest leading-none">
                            {s.value}
                        </div>
                        <div className="font-mono-label text-forest/70 mt-4">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
