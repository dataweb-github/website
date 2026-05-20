import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "hello@dataweb.io";
const PHONE = "+1 (415) 555-0142";

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (e) {
            /* no-op */
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="bg-forest text-white relative overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-7">
                        <p className="font-mono-label text-white/70 mb-6">
                            § Contact
                        </p>
                        <h2
                            data-testid="contact-heading"
                            className="font-display text-[18vw] md:text-[12vw] lg:text-[180px] leading-[0.85] tracking-tighter"
                        >
                            LET'S
                            <br />
                            TALK.
                        </h2>
                    </div>
                    <div className="md:col-span-4 md:col-start-9">
                        <p className="text-lg md:text-xl leading-snug text-white/85 mb-6">
                            Tell us what's keeping you up at night. We'll reply
                            within one business day with a real engineer on the
                            thread.
                        </p>
                        <a
                            href={`mailto:${EMAIL}?subject=Project%20enquiry%20—%20DATAWEB`}
                            data-testid="contact-email-cta"
                            className="inline-flex items-center gap-3 bg-white text-forest px-6 py-4 text-sm font-medium hover:bg-forest-mist transition-colors duration-300"
                        >
                            Email us
                            <ArrowUpRight size={16} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/15 pt-12">
                    <div className="md:col-span-4">
                        <p className="font-mono-label text-white/60 mb-3">
                            Email
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                            <a
                                href={`mailto:${EMAIL}`}
                                data-testid="contact-email-link"
                                className="link-underline text-xl md:text-2xl"
                            >
                                {EMAIL}
                            </a>
                            <button
                                onClick={copyEmail}
                                data-testid="contact-email-copy"
                                aria-label="Copy email address"
                                className="inline-flex items-center gap-2 border border-white/30 px-3 py-1.5 text-xs hover:bg-white hover:text-forest transition-colors duration-300"
                            >
                                {copied ? (
                                    <>
                                        <Check size={12} /> Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={12} /> Copy
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <p className="font-mono-label text-white/60 mb-3">
                            Phone
                        </p>
                        <a
                            href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                            data-testid="contact-phone-link"
                            className="link-underline text-xl md:text-2xl"
                        >
                            {PHONE}
                        </a>
                    </div>

                    <div className="md:col-span-3">
                        <p className="font-mono-label text-white/60 mb-3">
                            Hours
                        </p>
                        <p className="text-base text-white/90">
                            Mon — Fri · 09:00 — 19:00
                            <br />
                            24/7 on-call for managed clients
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="font-mono-label text-white/60 mb-3">
                            Office
                        </p>
                        <p className="text-base text-white/90">
                            Remote-first
                            <br />
                            EU · LATAM
                        </p>
                    </div>
                </div>
            </div>

            <footer className="border-t border-white/15">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono-label text-white/60">
                    <span data-testid="footer-copy">
                        © {new Date().getFullYear()} DATAWEB · All rights
                        reserved
                    </span>
                    <span>v.2026.01 — built with care</span>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
