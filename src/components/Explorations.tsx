import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const notes = [
  "J’explore les formats social media qui retiennent l’attention rapidement.",
  "Je teste comment l’IA peut accélérer la recherche, l’idéation et la production.",
  "Je réfléchis à des outils simples, no-code ou automatisés, pour répondre à des besoins concrets.",
  "Je documente aussi mes apprentissages, mes intuitions et mes pistes en cours.",
  "Certaines idées deviendront peut-être des projets, d’autres resteront des expérimentations.",
  "Ce labo montre davantage ma manière de penser que des réalisations finalisées."
];

const leftNotes = notes.filter((_, i) => i % 2 === 0);
const rightNotes = notes.filter((_, i) => i % 2 !== 0);

function EditorialNote({ text, index, align }: { text: string; index: number, align: "left" | "right" }) {
  return (
    <div className={`group w-full max-w-[260px] min-[430px]:max-w-[320px] sm:max-w-[400px] md:max-w-[480px] flex flex-col gap-4 md:gap-5 cursor-default ${align === "right" ? "items-end text-right ml-auto" : "items-start text-left"}`}>
      <div className="flex items-center gap-3 md:gap-4 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity duration-700">
        {align === "right" ? (
          <>
            <span className="text-[10px] text-text-primary tracking-[0.2em] uppercase font-body font-medium">0{index}</span>
            <span className="w-6 md:w-10 h-px bg-text-primary" />
          </>
        ) : (
          <>
            <span className="w-6 md:w-10 h-px bg-text-primary" />
            <span className="text-[10px] text-text-primary tracking-[0.2em] uppercase font-body font-medium">0{index}</span>
          </>
        )}
      </div>
      <p className="text-xl min-[430px]:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display text-text-primary/90 md:text-text-primary/20 group-hover:text-text-primary transition-colors duration-700 leading-snug md:leading-[1.15]">
        {text}
      </p>
    </div>
  );
}

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!section || !content || !leftCol || !rightCol) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: content,
          pinSpacing: false,
        });

        // Left column parallax
        gsap.fromTo(
          leftCol,
          { y: isMobile ? "5vh" : "15vh" },
          {
            y: isMobile ? "-220vh" : "-120vh",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );

        // Right column parallax
        gsap.fromTo(
          rightCol,
          { y: isMobile ? "20vh" : "35vh" },
          {
            y: isMobile ? "-190vh" : "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      }, section);

      return () => ctx.revert();
    }, []);

  return (
    <section ref={sectionRef} id="explorations" className="relative min-h-[350vh] md:min-h-[250vh] bg-bg overflow-hidden">
      {/* Pinned center content */}
      <div ref={contentRef} className="relative z-30 h-screen flex flex-col justify-center items-center pointer-events-none">
        
        {/* Subtle radial fade to keep text readable against scrolling notes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--bg))_15%,transparent_50%)] z-0" />
        
        <div className="relative z-10 text-center px-6 max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-[10px] md:text-xs text-muted uppercase tracking-[0.3em] font-body">Expérimentations</span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          
          <h2 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display text-text-primary leading-[1.1] md:leading-[1.1] mb-6 md:mb-8 drop-shadow-xl opacity-90 text-balance">
            Labo <em className="italic">créatif</em>
          </h2>
          
           <p className="text-base md:text-lg lg:text-xl text-text-primary/70 font-body leading-relaxed mb-10 md:mb-12 max-w-sm md:max-w-md mx-auto">
            Un espace plus libre où je rassemble mes pistes, mes tests et mes réflexions autour du marketing digital, de l’IA et des outils créatifs.
          </p>
          
          <a
            href="https://www.linkedin.com/in/thomas-sadin-8b0203294"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto mt-2 group relative inline-flex items-center gap-2 rounded-full border border-stroke text-sm text-text-primary/90 hover:text-text-primary transition-all duration-500 font-body shadow-lg"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-6 py-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2" className="transition-transform duration-500 group-hover:scale-110">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Me suivre sur LinkedIn
              <svg className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </span>
          </a>
        </div>
      </div>

      {/* Editorials Parallax Columns */}
      <div className="absolute inset-0 z-20 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-[1800px] h-full mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Left Column */}
          <div ref={leftColRef} className="absolute left-4 md:left-6 lg:left-12 top-0 w-[90%] md:w-[45%] flex flex-col gap-[60vh] md:gap-[40vh] pointer-events-auto items-start">
             <div className="h-[20vh]" />
             {leftNotes.map((text, i) => (
               <EditorialNote key={i} text={text} index={i * 2 + 1} align="left" />
             ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="absolute right-4 md:right-6 lg:right-12 top-0 w-[90%] md:w-[45%] flex flex-col gap-[60vh] md:gap-[40vh] pointer-events-auto items-end">
             <div className="h-[50vh] md:h-[40vh]" />
             {rightNotes.map((text, i) => (
               <EditorialNote key={i} text={text} index={i * 2 + 2} align="right" />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
