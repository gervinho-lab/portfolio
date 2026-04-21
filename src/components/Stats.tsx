import { motion } from "framer-motion";

const stats = [
  {
    number: "57+",
    label: "Projets réalisés",
    sublabel: "En 3 ans de Bachelor, perso et école confondus.",
  },
  {
    number: "9K+",
    label: "Membres communauté",
    sublabel: "Serveur Minecraft animé et modéré.",
  },
  {
    number: "10+",
    label: "Outils maîtrisés",
    sublabel: "Suite Adobe, Canva, CapCut, Vegas Pro, Claude, Perplexity…",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">
              En quelques chiffres
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary leading-tight">
              Mon parcours <em className="italic">en chiffres</em>
            </h2>
            <p className="text-sm text-muted max-w-sm font-body leading-relaxed md:text-right">
              Quelques repères concrets de mon parcours et de mes projets.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className={`bg-surface/40 border border-stroke rounded-3xl p-8 md:p-10 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Number */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-text-primary mb-6 leading-none font-body">
                {stat.number}
              </div>

              {/* Divider */}
              <div className="h-px bg-stroke mb-5" />

              {/* Labels */}
              <div>
                <p className="text-xl md:text-2xl font-bold text-text-primary mb-1 font-body">
                  {stat.label}
                </p>
                <p className="text-sm text-muted font-body">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center mt-12"
        >
          <a
            href="/CV_Thomas_Sadin.pdf"
            download="CV_Thomas_Sadin.pdf"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke text-sm text-text-primary transition-all duration-300 font-body hover:scale-[1.02]"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-5 py-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
