import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JournalEntry {
  title: string;
  description: string;
  content: string;
  image: string;
  readTime: string;
  date: string;
}

const entries: JournalEntry[] = [
  {
    title: "Ce que j'ai appris en animant une communauté Minecraft",
    description: "Gérer un serveur de +9000 joueurs m'a appris la modération, l'engagement communautaire et la gestion de projet au quotidien.",
    content: `Gérer un serveur Minecraft de plus de 9000 membres, ça ne s'improvise pas. Pendant plusieurs années, j'ai appris à fédérer une communauté, gérer des conflits, organiser des événements, et surtout comprendre ce qui fait qu'un joueur reste… ou part.\n\nCe projet m'a enseigné des compétences directement transférables au marketing digital : l'engagement communautaire, la rétention, la création de contenu régulier, et l'analyse des comportements utilisateurs.\n\nJ'ai aussi découvert l'importance du feedback : écouter sa communauté, itérer, et s'adapter en permanence. Des réflexes que j'applique aujourd'hui dans chacun de mes projets.`,
    image: "/explorations/planet.svg",
    readTime: "5 min",
    date: "Fév 2026",
  },
  {
    title: "Stratégie social media : ce que l'école ne m'a pas appris",
    description: "Entre théorie et terrain, j'ai découvert que les vraies compétences se construisent en testant, en publiant et en analysant les résultats.",
    content: `La théorie c'est bien, mais le terrain c'est mieux. En parallèle de mon Bachelor, j'ai commencé à expérimenter par moi-même : créer des posts, tester des formats, analyser ce qui marche et ce qui ne marche pas.\n\nCe que l'école m'a donné, c'est un cadre. Mais les vraies leçons sont venues en publiant, en ratant, et en recommençant. J'ai appris que le timing, le format et le ton comptent autant que le message lui-même.\n\nAujourd'hui, je suis convaincu que la meilleure façon d'apprendre le marketing digital, c'est de le pratiquer. Chaque projet est une occasion d'apprendre quelque chose de nouveau.`,
    image: "/explorations/wave.svg",
    readTime: "4 min",
    date: "Fév 2026",
  },
  {
    title: "Comment j'utilise l'IA pour accélérer mes projets",
    description: "De Claude à Perplexity, j'intègre l'IA dans mon workflow pour gagner en efficacité sur la création de contenu et l'analyse.",
    content: `L'IA a changé ma façon de travailler. Pas en remplaçant ma créativité, mais en l'amplifiant. J'utilise Claude pour structurer mes idées, Perplexity pour mes recherches, et d'autres outils pour automatiser les tâches répétitives.\n\nCe qui m'intéresse, ce n'est pas l'IA pour l'IA. C'est l'IA comme levier de productivité. En marketing digital, le temps gagné sur la rédaction d'un brief ou l'analyse d'un dataset, c'est du temps investi dans la stratégie.\n\nJe continue d'explorer de nouveaux outils et de nouveaux workflows. L'objectif : faire mieux, plus vite, sans sacrifier la qualité.`,
    image: "/explorations/cubes.svg",
    readTime: "4 min",
    date: "Fév 2026",
  },
  {
    title: "Ce que je recherche en alternance marketing digital",
    description: "Un environnement stimulant, des projets concrets en social media et brand content, et une équipe dont je peux apprendre.",
    content: `Je cherche une alternance qui me permette de mettre en pratique ce que j'ai appris et surtout d'apprendre ce qu'on ne peut pas apprendre seul.\n\nCe qui m'attire : le social media management, le brand content, la stratégie digitale, et tout ce qui touche à l'analyse de performance. J'aime autant créer du contenu que mesurer son impact.\n\nJe cherche une équipe bienveillante, exigeante, et qui me fasse progresser. En échange, j'apporte ma curiosité, ma polyvalence, et une vraie motivation à m'investir sur le long terme.`,
    image: "/explorations/ascii.svg",
    readTime: "3 min",
    date: "Jan 2026",
  },
  {
    title: "Créer du contenu social media : mes formats préférés",
    description: "Reels, carrousels, threads… J'expérimente différents formats pour comprendre ce qui engage vraiment une audience.",
    content: `Chaque plateforme a ses codes, ses formats, ses algorithmes. J'ai passé du temps à tester des Reels, des carrousels, des stories interactives, et même des threads.\n\nCe que j'ai retenu : le format ne fait pas tout. C'est l'angle, le hook des premières secondes, et la valeur ajoutée qui font la différence. Un carrousel bien structuré peut surpasser un Reel viral en termes d'engagement qualifié.\n\nAujourd'hui, j'ai mes formats préférés, mais je continue d'expérimenter. Le social media évolue vite, il faut rester curieux et agile.`,
    image: "/explorations/smoke.svg",
    readTime: "4 min",
    date: "Jan 2026",
  },
];

export default function Journal() {
  const [selected, setSelected] = useState<JournalEntry | null>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <section id="journal" className="bg-bg py-16 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-end justify-between mb-10 md:mb-14"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">Journal</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary leading-tight mb-3">
                Réflexions <em className="italic">récentes</em>
              </h2>
              <p className="text-sm text-muted max-w-sm font-body">
                Retours d'expérience, apprentissages et réflexions sur le marketing digital.
              </p>
            </div>

          </motion.div>

          {/* Journal entries */}
          <div className="flex flex-col gap-3">
            {entries.map((entry, i) => (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                className="group flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-all duration-300"
                onClick={() => setSelected(entry)}
              >
                {/* Number */}
                <span className="w-8 sm:w-12 flex-shrink-0 flex items-center justify-center text-muted font-display text-lg sm:text-2xl transition-colors duration-300 group-hover:text-text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-base md:text-xl lg:text-2xl font-medium text-text-primary transition-transform duration-300 group-hover:translate-x-1 flex-shrink min-w-0 leading-tight font-body">
                  {entry.title}
                </h3>

                {/* Dotted separator — desktop */}
                <div className="hidden md:block flex-grow h-px bg-stroke/30 mx-2" />

                {/* Meta */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0 text-xs text-muted font-body">
                  <span>{entry.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stroke flex items-center justify-center transition-all duration-300 group-hover:bg-text-primary group-hover:border-text-primary group-hover:text-bg text-muted">
                  <span className="text-xs">↗</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Article Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onPointerDown={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-stroke rounded-3xl"
            /* Removed stopPropagation on click since we use exact target match on parent */
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-stroke bg-bg/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-text-primary hover:bg-surface transition-all duration-200"
              >
                ✕
              </button>

              {/* Header Number instead of image */}
              <div className="relative h-32 md:h-48 overflow-hidden rounded-t-3xl bg-bg flex items-center justify-center border-b border-stroke/50">
                <div className="absolute inset-0 halftone opacity-30 mix-blend-multiply" />
                <span className="text-[6rem] md:text-[10rem] font-display italic text-stroke/40 leading-none select-none tracking-tighter">
                  N°{String(entries.findIndex(e => e.title === selected.title) + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 -mt-12 relative z-10">
                <div className="flex items-center gap-3 mb-4 text-xs text-muted font-body">
                  <span>{selected.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{selected.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-4 leading-tight">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted font-body mb-6 italic">
                  {selected.description}
                </p>
                <div className="h-px bg-stroke mb-6" />
                <div className="text-sm md:text-base text-text-primary/80 font-body leading-relaxed whitespace-pre-line">
                  {selected.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
