import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Projets", href: "#works" },
  { label: "CV", href: "#stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Accueil");

  useEffect(() => {
    // Top shadow scroll listener
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll spy for active menu items
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = navLinks.find(link => link.href === `#${entry.target.id}`)?.label;
            if (label) setActive(label);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // Triggers when element crosses the upper middle part of screen
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
    >
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? "shadow-md shadow-black/20" : ""
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("Accueil", "#hero")}
          className="group relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full accent-gradient transition-all duration-300 group-hover:[background:linear-gradient(270deg,#89aacc_0%,#4e85bf_100%)]" />
          <span className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">TS</span>
          </span>
        </button>

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Nav links */}
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNav(link.label, link.href)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-body ${active === link.label
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
          >
            {link.label}
          </button>
        ))}

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Contact button */}
        <button
          onClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-all duration-200"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md">
            Contact <span className="text-[10px]">↗</span>
          </span>
        </button>
      </div>
    </motion.nav>
  );
}
