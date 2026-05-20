const items = [
    "Linux / Windows Server",
    "Microsoft 365",
    "Google Workspace",
    "Postfix",
    "DNS · SPF · DKIM · DMARC",
    "Helpdesk SLA",
    "React · Next.js",
    "Node · FastAPI",
    "MongoDB · Postgres",
    "Docker · Kubernetes",
    "AWS · Hetzner",
    "CI / CD",
];

export const Marquee = () => {
    const seq = [...items, ...items];
    return (
        <section
            data-testid="marquee-section"
            className="border-y border-forest-soft py-6 overflow-hidden"
            aria-label="Stack we work with"
        >
            <div className="marquee-track flex whitespace-nowrap gap-12 will-change-transform">
                {seq.map((it, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-12 font-mono-label text-forest/80"
                    >
                        <span>{it}</span>
                        <span aria-hidden>✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
