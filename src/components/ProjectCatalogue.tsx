import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "./Works";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface ProjectCatalogueProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectProject: (project: ProjectData) => void;
}

const catalogueProjects: ProjectData[] = [
    {
        slug: "vault",
        title: "The Vault",
        subtitle: "Concept d’activation immersive, culturelle et digitale pour révéler les studios français à la Paris Games Week",
        image: "/projects/vault2.webp",
        gradient: "from-blue-500 via-indigo-500/60 to-transparent",
        span: 12,
        colClass: "md:col-span-12",
        description: "Dans le cadre de ce projet, j’ai travaillé sur la conception de The Vault, une activation immersive pensée pour la Paris Games Week afin de célébrer les studios français du jeu vidéo et renforcer leur visibilité auprès d’un large public. L’ambition était de dépasser le format classique du stand événementiel pour créer une expérience plus narrative, plus sensorielle et plus engageante. À travers ce concept, l’enjeu était de faire émerger une nouvelle manière de raconter le jeu vidéo français, en valorisant à la fois ses univers, ses créateurs et sa portée culturelle.\n\nLe projet s’articule autour d’un parcours scénarisé centré sur un “Vault” interactif, servant de point d’entrée vers plusieurs espaces immersifs dédiés à différents studios. Chaque univers propose une mise en scène spécifique, des interactions physiques ou digitales, ainsi qu’un système de découverte reposant sur la curiosité, le jeu et la progression. Cette construction permet d’installer une expérience fluide et accessible pour différents profils de visiteurs, tout en renforçant l’impact émotionnel et mémoriel du dispositif. Une attention particulière a également été portée à la segmentation des audiences, à la promesse de visite et à la cohérence globale entre contenu, espace et engagement.\n\nEnfin, The Vault a été conçu comme une activation hybride, pensée pour générer de la valeur bien au-delà du temps de présence sur site. Une stratégie de contenu et d’amplification accompagne ainsi l’expérience avant, pendant et après l’événement, avec des mécaniques de teasing, du live, de la création de contenu et des retombées éditoriales. Cette vision 360° permet de faire du projet un levier à la fois événementiel, médiatique et stratégique. Dans un portfolio, ce projet met en avant ma capacité à imaginer des concepts créatifs ambitieux, à structurer une expérience de marque et à relier storytelling, culture, communauté et activation terrain.",
        images: [
            "/projects/vault1.webp",
            "/projects/vault2.webp",
            "/projects/vault3.webp"
        ],
    },
    {
        slug: "ubisoft",
        title: "Ubisoft M&A Project Management",
        subtitle: "Conduite du changement, gouvernance projet et harmonisation internationale des méthodes de travail",
        image: "/projects/ubisoft2.webp",
        gradient: "from-rose-500 via-pink-400/60 to-transparent",
        span: 4,
        colClass: "md:col-span-4",
        description: "Ce projet portait sur la gestion de l’intégration de plusieurs studios Ubisoft dans un contexte de mergers & acquisitions, avec une problématique centrale de coordination entre la France, le Royaume-Uni et le Japon. L’objectif était de concevoir un cadre de management capable d’aligner les équipes malgré des cultures managériales différentes, des pratiques de reporting dispersées et des difficultés de synchronisation dans la production. L’approche reposait sur une vision très concrète du project management, centrée sur la clarté, la fluidité opérationnelle et la capacité à sécuriser les échanges entre parties prenantes.\n\nPour répondre à ces enjeux, le projet proposait la création d’un socle commun de pilotage intégrant des objectifs mesurables, un référentiel partagé de KPIs, des templates de reporting unifiés, des règles de communication transverses et une meilleure formalisation des niveaux de décision. Cette structuration visait à réduire les retards, limiter les incompréhensions et donner davantage de visibilité aux managers sur l’avancement des projets. Le projet abordait également la question de l’autonomie locale, en cherchant un équilibre entre standardisation globale et adaptation aux spécificités de chaque studio.\n\nAu-delà des outils de gestion, ce travail mettait aussi en avant l’importance du facteur humain dans la réussite d’une transformation organisationnelle. La dimension interculturelle, la montée en compétence des managers et l’adhésion progressive aux nouveaux rituels occupaient une place centrale dans la démarche. Ce projet reflète ainsi ma capacité à traiter un sujet de project management dans toute sa complexité, en articulant gouvernance, change management, performance et collaboration internationale au service d’une organisation plus alignée et plus efficace.",
        images: [
            "/projects/ubisoft1.webp",
            "/projects/ubisoft2.webp",
            "/projects/ubisoft3.webp"
        ],
    },
    {
        slug: "crimson",
        title: "Crimson Desert Launch Strategy",
        subtitle: "Positionnement, stratégie social media et activation de lancement imaginés en amont de la communication officielle du jeu",
        image: "/projects/crimson2.webp",
        gradient: "from-emerald-500 via-teal-400/60 to-transparent",
        span: 4,
        colClass: "md:col-span-4",
        description: "Dans le cadre de ce projet, j’ai conçu une proposition de campagne de lancement pour Crimson Desert, à une période où le jeu n’avait pas encore bénéficié de la communication qu’il a connue par la suite. L’enjeu consistait à réfléchir très tôt à la manière d’introduire le titre sur le marché, en valorisant ses forces perçues : monde ouvert immersif, intensité du gameplay, qualité visuelle et promesse narrative, tout en prenant en compte les interrogations qu’un nouveau positionnement pouvait susciter chez les joueurs.\n\nLe projet s’est construit autour d’un travail de ciblage et de compréhension fine des audiences. À travers plusieurs personas, l’analyse mettait en évidence les attentes de joueurs exigeants, sensibles à l’exploration, à la profondeur de l’univers, au challenge et à la qualité de l’expérience. Sur cette base, une stratégie de contenu a été pensée pour créer de la désirabilité autour du jeu, en utilisant chaque plateforme sociale selon ses codes propres, avec des contenus orientés découverte visuelle, storytelling, gameplay et engagement communautaire.\n\nEnfin, la recommandation incluait une logique d’activation plus événementielle avec un lancement IRL relayé en live, pour prolonger la visibilité digitale par une expérience capable de générer de l’interaction et de la conversation. Cette approche permettait de penser Crimson Desert non seulement comme un produit à promouvoir, mais comme un univers à faire exister progressivement dans l’esprit du public. Ce projet illustre ainsi ma capacité à anticiper un lancement, à construire une stratégie de communication cohérente en amont et à relier réflexion marketing, culture gaming et activation créative.",
        images: [
            "/projects/crimson1.webp",
            "/projects/crimson2.webp",
            "/projects/crimson3.webp"
        ],
    },
    {
        slug: "psg",
        title: "Audit de Site Web — PSG.fr",
        subtitle: "Analyse SEO technique, performance et recommandations d’optimisation pour le site officiel du Paris Saint-Germain",
        image: "/projects/psg2.webp",
        gradient: "from-amber-500 via-orange-400/60 to-transparent",
        span: 4,
        colClass: "md:col-span-4",
        description: "Dans le cadre de ce projet, j’ai réalisé un audit complet du site officiel du Paris Saint‑Germain, PSG.fr, avec pour objectif d’évaluer sa solidité technique, ses performances et son potentiel en termes de visibilité organique. Le travail consistait à analyser la structure du site, ses signaux techniques et ses indicateurs clés, afin d’identifier à la fois les points forts existants et les freins pouvant impacter l’expérience utilisateur ou le référencement naturel. L’analyse s’appuyait notamment sur la santé technique du site, ses performances, l’accessibilité, l’indexabilité et l’évolution récente du trafic et des backlinks.\n\nL’audit a montré que PSG.fr repose sur une base technique globalement robuste, avec un très bon niveau de conformité aux bonnes pratiques web, une sécurité renforcée, des pages correctement indexables et un score d’autorité solide. En parallèle, plusieurs problèmes ont été mis en lumière : un volume important de JavaScript inutilisé sur la page d’accueil, des erreurs HTML structurelles (comme la présence multiple de balises body sur certaines pages) ainsi qu’une syntaxe incorrecte du fichier robots.txt. Ces points peuvent ralentir le chargement, nuire au confort de navigation et limiter la manière dont les moteurs de recherche explorent et interprètent le site.\n\nÀ partir de ce diagnostic, j’ai formulé un plan de recommandations priorisées pour optimiser les performances et sécuriser le socle technique de PSG.fr : réduction du JavaScript inutile, mise en place de code splitting, correction des erreurs de structure, réécriture du fichier robots.txt et amélioration des Core Web Vitals. L’objectif était d’améliorer simultanément l’expérience utilisateur et la performance SEO, afin de soutenir la visibilité d’un site à très forte audience. Ce projet illustre ma capacité à auditer un site d’envergure, à interpréter des données techniques et à les transformer en actions concrètes, claires et activables pour le client.",
        images: [
            "/projects/psg1.webp",
            "/projects/psg2.webp",
            "/projects/psg3.webp"
        ],
    }
];

export default function ProjectCatalogue({ isOpen, onClose, onSelectProject }: ProjectCatalogueProps) {
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const heroProject = catalogueProjects[0];
    const listProjects = catalogueProjects.slice(1);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[90] bg-bg overflow-y-auto overflow-x-hidden"
                >
                    {/* Header */}
                    <div className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10 bg-gradient-to-b from-bg/90 to-transparent backdrop-blur-md">
                        <h2 className="text-xl md:text-2xl font-display text-text-primary tracking-wide">
                            Catalogue
                        </h2>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-text-primary hover:bg-stroke transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Hero Project (Netflix style large banner) */}
                    <div
                        className="relative w-full min-h-[75vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-end pb-16 md:pb-20 px-6 md:px-16 bg-surface"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={heroProject.image}
                                alt={heroProject.title}
                                className="w-full h-full object-cover object-top opacity-90"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    const parent = target.parentElement;
                                    if (parent) parent.style.background = `linear-gradient(135deg, hsl(var(--surface)) 0%, hsl(var(--bg)) 100%)`;
                                }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${heroProject.gradient} opacity-40`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative z-10 max-w-3xl w-full"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white text-black rounded-sm">
                                    Nouveau
                                </span>
                                <span className="text-sm font-body text-text-primary/70">{heroProject.subtitle}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 drop-shadow-lg !leading-[0.9]">
                                {heroProject.title}
                            </h1>

                            <p className="text-base md:text-xl text-white/80 font-body max-w-xl mb-8 line-clamp-3">
                                {heroProject.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => onSelectProject(heroProject)}
                                    className="px-6 md:px-8 py-3 bg-white text-black font-body font-semibold rounded-md flex items-center gap-2 hover:bg-white/90 transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    Explorer
                                </button>
                                <button
                                    onClick={() => onSelectProject(heroProject)}
                                    className="px-6 md:px-8 py-3 bg-surface/80 backdrop-blur-md text-white font-body rounded-md border border-stroke flex items-center gap-2 hover:bg-surface transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                    Plus d'infos
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Horizontal Row (Other projects) */}
                    <div className="px-6 md:px-16 mt-8 md:mt-0 pb-24 relative z-20">
                        <h3 className="text-xl md:text-2xl font-display text-white mb-6">
                            Autres Explorations
                        </h3>

                        <div className="w-full">
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={16}
                                breakpoints={{
                                    640: { slidesPerView: 2.2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3.2, spaceBetween: 24 },
                                }}
                                modules={[FreeMode]}
                                freeMode={true}
                                className="w-full overflow-visible"
                            >
                                {listProjects.map((project, idx) => (
                                    <SwiperSlide key={project.slug}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                                            className="group relative aspect-video bg-surface rounded-md overflow-hidden cursor-pointer shadow-xl"
                                            onClick={() => onSelectProject(project)}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = "none";
                                                    if (target.parentElement) target.parentElement.style.background = `linear-gradient(135deg, hsl(var(--surface)) 0%, hsl(var(--bg)) 100%)`;
                                                }}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 mix-blend-multiply`} />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                                                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h4 className="text-white font-body font-medium md:text-lg">{project.title}</h4>
                                                    <p className="text-white/70 text-sm font-body truncate mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.subtitle}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
