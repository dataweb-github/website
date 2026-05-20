import { Server, Headphones, Code2, ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const services = [
    {
        id: "servers",
        no: "01",
        icon: Server,
        title: "Server & Email Management",
        kicker: "Operations",
        copy: "We deploy, monitor and harden the systems your business runs on — mail servers, DNS, backups, security patches and uptime that doesn't keep you up at night.",
        points: [
            "Mail delivery & deliverability (SPF, DKIM, DMARC)",
            "Backups, monitoring & incident response",
            "Linux & Windows server administration",
            "Microsoft 365 / Google Workspace",
        ],
        span: "md:col-span-7",
    },
    {
        id: "helpdesk",
        no: "02",
        icon: Headphones,
        title: "User Helpdesk",
        kicker: "Support",
        copy: "A reliable desk for the humans behind the screens. SLAs, ticketing and on-site visits when it matters.",
        points: [
            "Tier 1–3 ticket resolution",
            "Onboarding & device provisioning",
            "Remote and on-site support",
        ],
        span: "md:col-span-5",
    },
    {
        id: "dev",
        no: "03",
        icon: Code2,
        title: "Full-stack Development",
        kicker: "Engineering",
        copy: "Custom web apps, internal tools and integrations — built in modern stacks (React, Node, FastAPI, MongoDB) by a small team that ships.",
        points: [
            "Product MVPs & internal tools",
            "APIs, integrations & automations",
            "Performance & security audits",
        ],
        span: "md:col-span-12",
    },
];

export const Services = () => {
    const ref = useReveal();

    return (
        <section
            id="services"
            data-testid="services-section"
            ref={ref}
            className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 md:mb-20 items-end">
                <div className="md:col-span-6" data-reveal>
                    <p className="font-mono-label text-forest/70 mb-4">
                        § Services
                    </p>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-forest">
                        Three practices.
                        <br />
                        <span className="text-forest-deep">One team.</span>
                    </h2>
                </div>
                <div className="md:col-span-5 md:col-start-8" data-reveal>
                    <p className="text-base md:text-lg leading-relaxed">
                        We work as a single, accountable team across operations,
                        support and engineering — so the same people who built
                        it are the ones keeping it running.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-forest-soft">
                {services.map((s) => {
                    const Icon = s.icon;
                    return (
                        <article
                            key={s.id}
                            data-reveal
                            data-testid={`service-card-${s.id}`}
                            className={`${s.span} border-b border-r border-forest-soft p-8 md:p-12 group relative bg-white hover:bg-forest-mist transition-colors duration-500`}
                        >
                            <div className="flex items-start justify-between mb-12">
                                <div className="flex items-center gap-4">
                                    <Icon
                                        size={22}
                                        strokeWidth={1.4}
                                        className="text-forest"
                                    />
                                    <span className="font-mono-label text-forest/70">
                                        ({s.no}) · {s.kicker}
                                    </span>
                                </div>
                                <ArrowUpRight
                                    size={22}
                                    strokeWidth={1.2}
                                    className="text-forest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500"
                                />
                            </div>

                            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest leading-none mb-6">
                                {s.title}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-8 text-forest/85">
                                {s.copy}
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                                {s.points.map((p) => (
                                    <li
                                        key={p}
                                        className="flex items-start gap-3 text-sm text-forest/85"
                                    >
                                        <span
                                            aria-hidden
                                            className="mt-2 inline-block w-3 h-px bg-forest shrink-0"
                                        />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
