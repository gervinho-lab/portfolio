import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCatalogue from "./ProjectCatalogue";

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  span: number;
  colClass: string;
  description: string;
  images: string[];
}

const projects: ProjectData[] = [
  {
    slug: "minecraft-server",
    title: "Minecraft Server",
    subtitle: "Serveur communautaire animé pour +9000 joueurs",
    image: "/projects/minecraft-server.webp",
    gradient: "from-violet-500 via-fuchsia-400/60 via-indigo-500/60 to-transparent",
    span: 7,
    colClass: "md:col-span-7",
    description: "Fondateur & chef de projet d’un serveur Minecraft multijoueur pensé comme un véritable espace communautaire. J’y ai supervisé la vision globale du projet : positionnement du serveur, choix des modes de jeu, organisation de l’équipe staff et définition d’une expérience cohérente pour les joueurs, du premier join jusqu’aux événements spéciaux.\n\nUne grande partie du travail a consisté à animer et faire grandir la communauté : création de contenus (annonces, visuels, messages Discord), organisation d’événements in‑game, gestion des retours joueurs et modération du serveur. L’objectif était de maintenir un environnement dynamique, fun mais structuré, capable de fidéliser les joueurs sur le long terme plutôt que de miser uniquement sur le “buzz” de lancement.\n\nJ’ai également suivi les statistiques d’activité (pics de connexion, récurrence, rétention après événement, comportements à risque) pour adapter les décisions : ajustement des horaires d’animations, équilibrage des mécaniques de jeu, amélioration du onboarding et optimisation des communications. Ce projet m’a permis de combiner gestion de communauté, logique produit, data et organisation d’événements dans un cadre concret et très vivant.",
    images: ["/projects/minecraft-server.webp"],
  },
  {
    slug: "portfolio-ia",
    title: "Portfolio IA",
    subtitle: "Site personnel conçu et optimisé avec l'IA",
    image: "/projects/portfolio1.webp",
    gradient: "from-sky-500 via-blue-400/60 to-transparent",
    span: 5,
    colClass: "md:col-span-5",
    description: "Création d’un portfolio personnel pensé comme un terrain d’expérimentation entre design humain et outils d’intelligence artificielle. L’idée : construire une vitrine claire de mes projets marketing, tout en utilisant l’IA comme copilote sur la structure, les textes et certains éléments visuels, sans perdre la cohérence de mon identité.\n\nLe site met en avant mes principaux projets (campagnes digitales, SaaS, serveur Minecraft, études de business model etc.) avec un focus sur la façon dont j’analyse, conçois des stratégies et mesure l’impact. J’y ai travaillé l’UX, la hiérarchie de l’information et l’adaptation mobile pour faciliter le parcours recruteur : comprendre rapidement qui je suis, ce que je fais et comment je réfléchis.\n\nL’IA m’a servi à générer le code et des idées de layout, à affiner les textes, tester différents angles de storytelling et optimiser certains aspects techniques. Ce projet me permet de montrer concrètement comment j’utilise l’IA comme levier de productivité et de créativité, et pas seulement comme un gadget.",
    images: [
      "/projects/portfolio2.webp",
      "/projects/portfolio1.webp",
      "/projects/portfolio3.webp"
    ],
  },
  {
    slug: "strategie-saas",
    title: "Stratégie SaaS",
    subtitle: "Création de SaaS & outils no-code conçus pour répondre à des besoins réels",
    image: "/projects/saas1.webp",
    gradient: "from-amber-500 via-amber-300/60 via-orange-500/60 to-transparent",
    span: 5,
    colClass: "md:col-span-5",
    description: "Exploration personnelle de la création de SaaS orientés productivité, de l’idée au prototype fonctionnel. L’objectif : tester comment des outils simples peuvent aider des professionnels à mieux piloter leur activité au quotidien, en combinant logique produit, UX et automatisation via l’IA et le no‑code.\n\nCoacho est un cockpit IA pensé pour les coachs : centralisation des informations clients, suivi des séances, génération d’idées de contenus et aide à l’analyse de leur activité. SocialFlow est un outil de gestion centralisée des réseaux sociaux pour les entreprises, permettant de planifier des posts sur plusieurs plateformes, suivre les performances et faciliter l’optimisation des contenus sans passer par une agence social media.",
    images: [
      "/projects/saas2.webp",
      "/projects/saas1.webp",
      "/projects/saas3.webp"
    ],
  },
  {
    slug: "campagne-digitale",
    title: "Campagne Digitale",
    subtitle: "Étude de cas — Analyse marché, ciblage joueur et plan 360° pour un blockbuster PS5",
    image: "/projects/campagne1.webp",
    gradient: "from-emerald-500 via-emerald-300/60 via-teal-500/60 to-transparent",
    span: 7,
    colClass: "md:col-span-7",
    description: "Projet de campagne autour de la sortie de Marvel’s Wolverine sur PS5, réalisé en équipe dans un contexte d’agence. Nous avons commencé par analyser l’ADN de la licence et du studio Insomniac, les précédents lancements réussis (Spider‑Man), ainsi que les forces/faiblesses du jeu via SWOT, PESTEL, benchmark et mapping concurrentiel pour positionner clairement Wolverine comme un AAA narratif mature et immersif.​\n\nÀ partir de cette base stratégique, nous avons construit une segmentation détaillée des joueurs (démographique, psychographique, comportementale) et défini plusieurs personas incarnant les cibles prioritaires : hardcore gamers, fans Marvel orientés narration, joueuses à la recherche de profondeur émotionnelle, etc. Chaque cible était associée à des attentes, des pain points et des canaux privilégiés (Twitch, YouTube, TikTok, Instagram, événements IRL) afin d’aligner le message, le ton et les formats sur leurs usages réels.​\n\nNous avons ensuite défini des objectifs SMART et élaboré un plan marketing 360° : stratégie d’influence avec créateurs clés, phases de teasing, trailers et gameplays, présence en conventions (PGW), dispositifs social media, campagnes paid (YouTube, Twitch, TikTok, Instagram) et mécaniques d’UGC. Le tout était accompagné de KPIs précis (visibilité, engagement, précommandes, rétention post‑lancement) et d’un dispositif de suivi pour optimiser la campagne dans le temps, comme sur un vrai lancement AAA.",
    images: [
      "/projects/campagne2.webp",
      "/projects/campagne1.webp",
      "/projects/campagne3.webp"
    ],
  },
  {
    slug: "e-commerce-business-model",
    title: "E-Commerce Business Model",
    subtitle: "Refonte du business model e‑commerce d’Ubisoft Connect",
    image: "/projects/ecommerce1.webp",
    gradient: "from-rose-500 via-pink-400/60 via-rose-500/60 to-transparent",
    span: 12,
    colClass: "md:col-span-12",
    description: "Dans ce projet de groupe (14 étudiants), nous avons travaillé comme une équipe de conseil chargée de repenser le business model d’Ubisoft Connect, la plateforme de distribution digitale d’Ubisoft. L’objectif : comprendre pourquoi elle reste derrière des acteurs comme Steam ou l’Epic Games Store, puis proposer un modèle plus compétitif, centré à la fois sur la performance financière et l’expérience joueur.​\n\nNous avons mené une analyse complète du marché et des usages : benchmark des principales plateformes, étude des tendances e‑commerce gaming (abonnements, free‑to‑play, cloud gaming), segmentation détaillée des joueurs et identification d’opportunités de croissance. À partir de ces données, nous avons redéfini la proposition de valeur d’Ubisoft Connect, imaginé de nouvelles offres d’abonnements, des sources de revenus complémentaires (merch, transmedia, monnaie virtuelle) et des pistes de partenariats stratégiques.​\n\n Enfin, nous avons structuré un plan de déploiement opérationnel : organisation par pôles (marketing, tech, UX, finance, legal), roadmap par étapes, maquettes d’interface, scénarios de rentabilité sur trois ans et KPIs de suivi (acquisition, engagement, revenus, marge). Ce projet m’a permis de pratiquer concrètement l’analyse stratégique, la modélisation business et le travail en équipe sur un cas e‑commerce très proche des enjeux actuels du secteur jeu vidéo.",
    images: [
      "/projects/ecommerce2.webp",
      "/projects/ecommerce1.webp",
      "/projects/ecommerce3.webp"
    ],
  },
];

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Works() {
  const [selected, setSelected] = useState<ProjectData | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const openProject = (project: ProjectData) => {
    setCurrentImage(0);
    setSelected(project);
    setHasScrolled(false);
    // Check if scrollable after a small delay to allow animation and render
    setTimeout(() => {
      if (scrollRef.current) {
        setIsScrollable(scrollRef.current.scrollHeight > scrollRef.current.clientHeight + 20);
      }
    }, 500);
  };

  return (
    <>
      <section id="works" className="bg-bg py-12 md:py-16">
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
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">
                  Projets sélectionnés
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary leading-tight mb-3">
                Mes <em className="italic">projets</em>
              </h2>
              <p className="text-sm text-muted max-w-sm font-body">
                Une sélection de projets concrets, de la stratégie à l'exécution.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsCatalogueOpen(true);
              }}
              className="inline-flex group relative items-center gap-2 rounded-full px-5 py-2.5 border border-stroke text-sm text-muted hover:text-text-primary transition-all duration-300 font-body"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-5 py-2.5">
                Autres projets <span>→</span>
              </span>
            </button>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={inView}
                className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer aspect-square md:aspect-[4/3] ${project.colClass}`}
                onClick={() => openProject(project)}
              >
                {/* Background image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = `linear-gradient(135deg, hsl(var(--surface)) 0%, hsl(var(--bg)) 100%)`;
                      }
                    }}
                  />

                  {/* Color gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                  />

                  {/* Halftone texture */}
                  <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-lg" />

                {/* Hover label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="relative rounded-full px-6 py-3 bg-text-primary/10 backdrop-blur-sm border border-white/20">
                    <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-60" />
                    <span className="relative z-10 flex items-center gap-2 text-sm font-body text-text-primary">
                      Voir —{" "}
                      <em className="font-display italic">{project.title}</em>
                    </span>
                  </div>
                </div>

                {/* Bottom dark gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Bottom title + subtitle */}
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
                  <p className="text-sm font-body text-white font-medium drop-shadow-md">{project.title}</p>
                  <p className="text-xs font-body text-white/80 mt-1 drop-shadow-md">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
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
              ref={scrollRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full flex flex-col items-center justify-start pt-20 md:pt-24 overflow-y-auto overflow-x-hidden"
              onPointerDown={(e) => {
                // If they explicitly clicked on the empty scrollable container itself (not children)
                if (e.target === e.currentTarget) setSelected(null);
              }}
              onScroll={(e) => {
                if (!hasScrolled && e.currentTarget.scrollTop > 50) {
                  setHasScrolled(true);
                } else if (hasScrolled && e.currentTarget.scrollTop <= 50) {
                  setHasScrolled(false);
                }
              }}
            >
              {/* Scroll hint indicator */}
              <AnimatePresence>
                {selected && isScrollable && !hasScrolled && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-x-0 bottom-8 z-[60] flex justify-center pointer-events-none"
                  >
                    <div className="flex flex-col items-center gap-1.5 bg-bg/80 backdrop-blur-md px-5 py-3 rounded-full border border-stroke shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-text-primary">
                      <span className="text-[10px] uppercase tracking-[0.2em] -mr-[0.2em] font-body text-text-primary/90">Défiler pour lire</span>
                      <motion.svg
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-text-primary/70"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </motion.svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close button (always top right) */}
              <button
                onClick={() => setSelected(null)}
                className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full border border-stroke bg-bg/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-text-primary hover:bg-surface transition-all duration-200"
              >
                ✕
              </button>

              {/* Full-width Image carousel area */}
              <div
                className="relative w-full overflow-visible flex justify-center"
                onPointerDown={(e) => e.stopPropagation()} // Prevent closing when interacting with swiper/image
              >
                {selected.images.length > 1 ? (
                  <>
                    <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView={"auto"}
                      initialSlide={1} // Start on the middle slide (index 1) which is portfolio1.webp
                      loop={false} // Disable loop as requested to prevent jumping from 3 to 2 directly
                      coverflowEffect={{
                        rotate: 35,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                      }}
                      pagination={{ el: '.custom-pagination', clickable: true }}
                      navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom'
                      }}
                      modules={[EffectCoverflow, Navigation, Pagination]}
                      className="w-full pt-8 pb-20"
                    >
                      {selected.images.map((img, idx) => (
                        // Center slide takes 50vw on desktop, side slides show partially
                        <SwiperSlide key={idx} className="!w-[85%] md:!w-[50%] max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                          <div className="w-full h-full relative bg-surface">
                            <img
                              src={img}
                              alt={`${selected.title} - ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Absolutely positioned Navigation Arrows (overlapping the center slide edges) */}
                    <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-[calc(50%+1rem)] left-[calc(50%-43%)] md:left-[calc(50%-27%)] z-20 w-12 h-12 rounded-full border border-text-primary/50 bg-bg/40 backdrop-blur-md hidden md:flex items-center justify-center text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-bg transition-all shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button className="swiper-button-next-custom absolute top-1/2 -translate-y-[calc(50%+1rem)] right-[calc(50%-43%)] md:right-[calc(50%-27%)] z-20 w-12 h-12 rounded-full border border-text-primary/50 bg-bg/40 backdrop-blur-md hidden md:flex items-center justify-center text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-bg transition-all shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="custom-pagination"></div>
                  </>
                ) : (
                  <div className="w-[85%] md:w-[70%] max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] mt-8 mb-12">
                    <img
                      src={selected.images[0]}
                      alt={selected.title}
                      className="w-full h-full object-cover bg-surface"
                    />
                  </div>
                )}
              </div>

              {/* Content Card (floating below slider) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-3xl px-6 md:px-0 mt-8 mb-16 relative z-10"
                onPointerDown={(e) => e.stopPropagation()} // Prevent closing when interacting with text
              >
                <div className="bg-surface/60 backdrop-blur-xl border border-stroke rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-stroke" />
                    <span className="text-xs md:text-sm text-muted uppercase tracking-[0.25em] font-body">Projet</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-3">
                    {selected.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted font-body mb-8">{selected.subtitle}</p>
                  <div className="h-px bg-stroke mb-8" />
                  <p className="text-base md:text-lg text-text-primary/90 font-body leading-loose whitespace-pre-line">
                    {selected.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectCatalogue
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        onSelectProject={(project) => openProject(project)}
      />
    </>
  );
}
