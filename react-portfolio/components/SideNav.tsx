"use client";

import { useState } from "react";
import Link from "next/link";

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(true);

    const elementsNavigation = [
        { href: "/#accueil", label: "Accueil" },
        { href: "/#parcours", label: "Parcours" },
        { href: "/#projets", label: "Projets" },
        { href: "/#competences", label: "Compétences" },
        { href: "/#veille", label: "Veille IA" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            {/* Mobile toggle button */}
            <button
                className="mobile-nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Side Navigation */}
            <aside className={`side-nav ${isOpen ? "open" : ""}`}>
                <div className="nav-header">
                    <div className="nav-branding">
                        <div className="nav-avatar">YH</div>
                        <div className="nav-name">Yasmine Henni-Zourgui</div>
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        {elementsNavigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="nav-link"
                                    scroll
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="nav-dot"></span>
                                    <span className="nav-text">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-footer">
                    <div className="social-links">
                        <a href="https://github.com/yasminehz" target="_blank" rel="noopener noreferrer" className="social-link">
                            GH
                        </a>
                        <a href="https://linkedin.com/in/yasmine-henni-zourgui" target="_blank" rel="noopener noreferrer" className="social-link">
                            LI
                        </a>
                        <a href="mailto:yasminehenniz@gmail.com" className="social-link">
                            ✉
                        </a>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}
