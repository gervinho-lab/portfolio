import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const MARQUEE_TEXT = "CONSTRUISONS ENSEMBLE • ";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-sadin-8b0203294" },
  { label: "Email", href: "mailto:thomas.sadinpro@outlook.com" },
];

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => { }));
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
      video.addEventListener("loadedmetadata", () => video.play().catch(() => { }));
    }
  }, []);

  return (
    <footer id="contact" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video */}
      <div className="absolute left-0 right-0 h-[500px] overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee — pure CSS infinite loop */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <div className="marquee-track whitespace-nowrap">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10 inline-block pr-4"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">
                Discutons
              </span>
              <span className="w-8 h-px bg-stroke" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-4">
              Discutons d'une alternance ou d'un projet
            </h3>
            <p className="text-sm md:text-base text-muted max-w-sm mb-8 font-body leading-relaxed">
              Une alternance, un projet, une idée ? Je suis disponible et motivé. Parlons-en.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:thomas.sadinpro@outlook.com"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-bg border-2 border-stroke rounded-full text-sm text-text-primary font-medium transition-all duration-300 font-body"
              >
                <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-6 py-3">
                  thomas.sadinpro@outlook.com
                  <span className="text-xs">↗</span>
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thomas-sadin-8b0203294"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-bg border-2 border-stroke rounded-full text-sm text-text-primary font-medium transition-all duration-300 font-body"
              >
                <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-6 py-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                  <span className="text-xs">↗</span>
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Footer bar */}
          <div className="border-t border-stroke pt-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Socials */}
              <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-text-primary transition-all duration-200 hover:-translate-y-0.5 font-body"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              {/* Available status */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted font-body">Disponible pour une alternance</span>
              </div>
            </div>

            {/* Copyright — centered */}
            <p className="text-xs text-muted font-body text-center">
              © 2026 Thomas Sadin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
