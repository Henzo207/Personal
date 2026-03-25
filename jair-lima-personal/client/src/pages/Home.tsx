/*
 * DESIGN: "Movimento Vivo" — Dark Athletic Neon
 * Fundo: #0B1120 | Primário: #2563EB | Acento: #84CC16
 * Tipografia: Bebas Neue (display) + Nunito Sans (corpo)
 * Link in bio page para Jair Lima — Personal Trainer & Personal de Natação
 */

import { useEffect, useRef, useState } from "react";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476307948/8oB9RGMnEY6Kh8G7Zifdz9/hero-bg-EVcRsURJtZxSRuXckD59tQ.webp";
const SWIMMING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476307948/8oB9RGMnEY6Kh8G7Zifdz9/swimming-service-JQ87jHhFiJhMEY4BDJEDzK.webp";
const GYM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476307948/8oB9RGMnEY6Kh8G7Zifdz9/gym-service-H32gRdUQ8jiNAtFhfvaF9T.webp";
const BABY_SWIM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476307948/8oB9RGMnEY6Kh8G7Zifdz9/baby-swimming-htTm6L5oTpwKsWgrWDjMQB.webp";
const JAIR_AVATAR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476307948/8oB9RGMnEY6Kh8G7Zifdz9/jair-avatar_a3bf8c8e.png";

const WHATSAPP_NUMBER = "5515991392460";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Jair%2C%20vim%20pelo%20seu%20link%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os!`;
const INSTAGRAM_URL = "https://instagram.com/jairlimapersonaltrainer";

// ─── Icons ─────────────────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const DumbbellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11M3 9.5h3v5H3zM18 9.5h3v5h-3z"/>
    <line x1="6.5" y1="12" x2="17.5" y2="12"/>
  </svg>
);

const WavesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 21 12 17 16 21"/>
    <line x1="12" y1="17" x2="12" y2="11"/>
    <path d="M7 4H4a2 2 0 0 0-2 2v2a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a2 2 0 0 0-2-2h-3"/>
    <rect x="7" y="2" width="10" height="4" rx="1"/>
  </svg>
);

const BabyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="3"/>
    <path d="M9 12H7a2 2 0 0 0-2 2v4h14v-4a2 2 0 0 0-2-2h-2"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
  </svg>
);

const OnlineIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

// ─── Animated Section ──────────────────────────────────────────────────────────
function AnimatedSection({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Service Item ──────────────────────────────────────────────────────────────
function ServiceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 py-1">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: "rgba(37,99,235,0.2)", color: "#60a5fa" }}>
        <CheckIcon />
      </span>
      <span className="text-sm leading-relaxed" style={{ color: "#cbd5e1", fontFamily: "'Nunito Sans', sans-serif" }}>
        {text}
      </span>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0B1120",
        fontFamily: "'Nunito Sans', sans-serif",
      }}
    >
      {/* ── HERO SECTION ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "420px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "brightness(0.35)",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(11,17,32,0.3) 0%, rgba(11,17,32,0.7) 60%, #0B1120 100%)",
          }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 flex flex-col items-center px-6 pt-12 pb-8"
          style={{ maxWidth: 480, margin: "0 auto" }}
        >
          {/* Avatar */}
          <AnimatedSection delay={0}>
            <div className="relative mb-5">
              {/* Animated ring */}
              <div
                className="absolute inset-0 rounded-full avatar-ring"
                style={{
                  background: "conic-gradient(from 0deg, #2563EB, #84CC16, #2563EB)",
                  padding: "3px",
                  borderRadius: "50%",
                  width: "108px",
                  height: "108px",
                  top: "-4px",
                  left: "-4px",
                }}
              />
              <div
                className="relative z-10 rounded-full overflow-hidden"
                style={{
                  width: 100,
                  height: 100,
                  border: "3px solid #0B1120",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={JAIR_AVATAR}
                  alt="Jair Lima"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Name */}
          <AnimatedSection delay={100}>
            <h1
              className="font-display text-white text-center mb-1"
              style={{ fontSize: 42, letterSpacing: "0.06em", lineHeight: 1 }}
            >
              JAIR LIMA
            </h1>
          </AnimatedSection>

          {/* Titles */}
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="badge-blue">Personal Trainer</span>
              <span className="badge-lime">Personal de Natação</span>
            </div>
          </AnimatedSection>

          {/* Tagline */}
          <AnimatedSection delay={300}>
            <p
              className="text-center text-sm leading-relaxed mb-4"
              style={{ color: "#94a3b8", maxWidth: 320, fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Treinos personalizados para cada fase da sua vida — do bebê ao adulto, na piscina ou na academia.
            </p>
          </AnimatedSection>

          {/* Instagram handle */}
          <AnimatedSection delay={400}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
              style={{ color: "#e2e8f0", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
            >
              <InstagramIcon />
              @jairlimapersonaltrainer
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        className="px-5 pb-32"
        style={{ maxWidth: 480, margin: "0 auto" }}
      >

        {/* ── WHATSAPP CTA ── */}
        <AnimatedSection delay={0} className="mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn whatsapp-pulse"
          >
            <WhatsAppIcon />
            <span>Falar com o Jair agora</span>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.8 }}>15 99139-2460</span>
          </a>
        </AnimatedSection>

        {/* ── GRADIENT DIVIDER ── */}
        <div className="gradient-divider" />

        {/* ── PERSONAL TRAINER SECTION ── */}
        <AnimatedSection delay={0} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(37,99,235,0.2)", color: "#60a5fa" }}
            >
              <DumbbellIcon />
            </div>
            <div>
              <h2
                className="font-display text-white"
                style={{ fontSize: 26, letterSpacing: "0.05em", lineHeight: 1.1 }}
              >
                PERSONAL TRAINER
              </h2>
              <p className="text-xs" style={{ color: "#64748b", fontFamily: "'Nunito Sans', sans-serif" }}>
                Presencial & Online
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Gym image card */}
        <AnimatedSection delay={100} className="mb-4">
          <div
            className="rounded-xl overflow-hidden relative"
            style={{ height: 160 }}
          >
            <img
              src={GYM_IMG}
              alt="Academia"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: "linear-gradient(0deg, rgba(11,17,32,0.85) 0%, transparent 60%)" }}
            >
              <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Treinos para todos os níveis e objetivos
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* PT Services */}
        <AnimatedSection delay={150} className="service-card p-4 mb-3">
          <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#60a5fa", fontFamily: "'Nunito Sans', sans-serif" }}>
            Serviços
          </p>
          <div className="space-y-1">
            <ServiceItem text="Treino personalizado (presencial e online)" />
            <ServiceItem text="Consultoria online mensal" />
            <ServiceItem text="Acompanhamento para emagrecimento" />
            <ServiceItem text="Hipertrofia — ganho de massa muscular" />
            <ServiceItem text="Preparação para provas físicas" />
            <ServiceItem text="Treino para iniciantes" />
          </div>
        </AnimatedSection>

        {/* PT Audiences */}
        <AnimatedSection delay={200} className="mb-5">
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: <PersonIcon />, label: "Adultos", color: "#60a5fa" },
              { icon: <TrophyIcon />, label: "Atletas", color: "#60a5fa" },
              { icon: <HeartIcon />, label: "Idosos", color: "#60a5fa" },
              { icon: <OnlineIcon />, label: "Online", color: "#60a5fa" },
            ].map((item) => (
              <div
                key={item.label}
                className="service-card flex items-center gap-2 p-3"
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA PT */}
        <AnimatedSection delay={250} className="mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn link-btn-primary"
          >
            <DumbbellIcon />
            <span>Quero um treino personalizado</span>
          </a>
        </AnimatedSection>

        {/* ── GRADIENT DIVIDER ── */}
        <div className="gradient-divider" />

        {/* ── PERSONAL NATAÇÃO SECTION ── */}
        <AnimatedSection delay={0} className="mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(132,204,22,0.15)", color: "#a3e635" }}
            >
              <WavesIcon />
            </div>
            <div>
              <h2
                className="font-display text-white"
                style={{ fontSize: 26, letterSpacing: "0.05em", lineHeight: 1.1 }}
              >
                PERSONAL DE NATAÇÃO
              </h2>
              <p className="text-xs" style={{ color: "#64748b", fontFamily: "'Nunito Sans', sans-serif" }}>
                Bebês a partir de 6 meses até adultos
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Swimming image card */}
        <AnimatedSection delay={100} className="mb-4">
          <div
            className="rounded-xl overflow-hidden relative"
            style={{ height: 160 }}
          >
            <img
              src={SWIMMING_IMG}
              alt="Natação"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.75)" }}
            />
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: "linear-gradient(0deg, rgba(11,17,32,0.85) 0%, transparent 60%)" }}
            >
              <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Aulas particulares na piscina para todos os níveis
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Swimming Services */}
        <AnimatedSection delay={150} className="service-card p-4 mb-3">
          <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#a3e635", fontFamily: "'Nunito Sans', sans-serif" }}>
            Serviços
          </p>
          <div className="space-y-1">
            {[
              { text: "Aulas particulares (adultos, crianças e bebês a partir de 6 meses)", isLime: true },
              { text: "Natação para iniciantes — medo de água e adaptação", isLime: true },
              { text: "Aperfeiçoamento técnico: crawl, costas, peito e borboleta", isLime: true },
              { text: "Treino para emagrecimento na água", isLime: true },
              { text: "Condicionamento físico aquático", isLime: true },
              { text: "Preparação para provas e travessias", isLime: true },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2 py-1">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(132,204,22,0.15)", color: "#a3e635" }}>
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#cbd5e1", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Swimming Audiences */}
        <AnimatedSection delay={200} className="mb-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: <BabyIcon />, label: "Bebês", sub: "a partir de 6m" },
              { icon: <PersonIcon />, label: "Infantil", sub: "crianças" },
              { icon: <WavesIcon />, label: "Adultos", sub: "todos os níveis" },
            ].map((item) => (
              <div
                key={item.label}
                className="service-card flex flex-col items-center gap-1 p-3 text-center"
              >
                <span style={{ color: "#a3e635" }}>{item.icon}</span>
                <span className="text-sm font-bold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.label}
                </span>
                <span className="text-xs" style={{ color: "#64748b", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Baby swimming card */}
        <AnimatedSection delay={250} className="mb-4">
          <div
            className="rounded-xl overflow-hidden relative"
            style={{ height: 140 }}
          >
            <img
              src={BABY_SWIM_IMG}
              alt="Natação para bebês"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: "linear-gradient(0deg, rgba(11,17,32,0.9) 0%, transparent 50%)" }}
            >
              <div>
                <span className="badge-lime text-xs">Especialidade</span>
                <p className="text-sm font-bold text-white mt-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Natação para bebês a partir de 6 meses
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Natação */}
        <AnimatedSection delay={300} className="mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn link-btn-lime"
          >
            <WavesIcon />
            <span>Quero aulas de natação</span>
          </a>
        </AnimatedSection>

        {/* ── GRADIENT DIVIDER ── */}
        <div className="gradient-divider" />

        {/* ── SOBRE O JAIR ── */}
        <AnimatedSection delay={0} className="mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.07)", color: "#e2e8f0" }}
            >
              <GraduationIcon />
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: 26, letterSpacing: "0.05em" }}
            >
              SOBRE O JAIR
            </h2>
          </div>

          <div className="service-card p-4">
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#94a3b8", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Formado em Educação Física — Licenciado e Bacharel — com pós-graduação em Reabilitação e Lesões. Atua como professor de Educação Física escolar, professor de natação e de musculação.
            </p>

            <div className="space-y-2">
              {[
                { icon: <GraduationIcon />, text: "Ed. Física — Licenciado & Bacharel", color: "#60a5fa" },
                { icon: <HeartIcon />, text: "Pós-graduação em Reabilitação e Lesões", color: "#60a5fa" },
                { icon: <WavesIcon />, text: "Professor de Natação", color: "#a3e635" },
                { icon: <DumbbellIcon />, text: "Professor de Musculação", color: "#a3e635" },
                { icon: <PersonIcon />, text: "Professor de Ed. Física Escolar", color: "#60a5fa" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
                  <span className="text-sm" style={{ color: "#cbd5e1", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── DIFERENCIAIS ── */}
        <AnimatedSection delay={0} className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(132,204,22,0.15)", color: "#a3e635" }}
            >
              <StarIcon />
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: 26, letterSpacing: "0.05em" }}
            >
              POR QUE ESCOLHER O JAIR?
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Atendimento Individual",
                desc: "Cada aluno é único. O treino é pensado especialmente para você, respeitando seu corpo, seus objetivos e sua rotina.",
                color: "#2563EB",
              },
              {
                title: "Todos os Públicos",
                desc: "Do bebê de 6 meses ao adulto sênior — cada fase da vida tem um método adequado e seguro.",
                color: "#84CC16",
              },
              {
                title: "Ajuste Contínuo",
                desc: "O treino evolui com você. Avaliações periódicas e ajustes constantes garantem que você nunca estagne.",
                color: "#2563EB",
              },
              {
                title: "Acolhimento",
                desc: "Um ambiente seguro, sem julgamentos, onde iniciantes e experientes se sentem bem-vindos.",
                color: "#84CC16",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="service-card p-4"
                style={{ borderLeft: `3px solid ${item.color}` }}
              >
                <p
                  className="font-bold text-white mb-1"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 15 }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#94a3b8", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── GRADIENT DIVIDER ── */}
        <div className="gradient-divider" />

        {/* ── CONSULTORIA ONLINE ── */}
        <AnimatedSection delay={0} className="mb-6">
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #1a3a8f 100%)",
              border: "1px solid rgba(37,99,235,0.4)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ background: "#60a5fa", transform: "translate(30%, -30%)" }}
            />
            <span className="badge-lime mb-3 inline-block">Destaque</span>
            <h3
              className="font-display text-white mb-1"
              style={{ fontSize: 28, letterSpacing: "0.05em" }}
            >
              CONSULTORIA ONLINE
            </h3>
            <p className="text-sm mb-4" style={{ color: "#bfdbfe", fontFamily: "'Nunito Sans', sans-serif" }}>
              Treino de onde você estiver, com todo o acompanhamento profissional
            </p>
            <div className="space-y-2 mb-4">
              {[
                "Rotina de exercícios personalizada",
                "Acompanhamento de progresso",
                "Ajuste de treino a cada 2 meses",
                "Avaliações quando necessário",
                "Treino por aplicativo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: "#a3e635" }}><CheckIcon /></span>
                  <span className="text-sm" style={{ color: "#e0f2fe", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{
                background: "#84CC16",
                color: "#0B1120",
                fontFamily: "'Nunito Sans', sans-serif",
                boxShadow: "0 4px 20px rgba(132,204,22,0.35)",
              }}
            >
              <WhatsAppIcon />
              Agendar consultoria online
            </a>
          </div>
        </AnimatedSection>

        {/* ── CONTATO ── */}
        <AnimatedSection delay={0} className="mb-4">
          <h2
            className="font-display text-white mb-4 text-center"
            style={{ fontSize: 26, letterSpacing: "0.05em" }}
          >
            ENTRE EM CONTATO
          </h2>

          <div className="space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
              }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "#25D366", color: "white" }}
              >
                <WhatsAppIcon />
              </span>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  WhatsApp
                </div>
                <div className="text-xs" style={{ color: "#64748b", fontFamily: "'Nunito Sans', sans-serif" }}>
                  (15) 99139-2460
                </div>
              </div>
              <span className="ml-auto text-xs" style={{ color: "#64748b" }}>→</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
              }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  color: "white",
                }}
              >
                <InstagramIcon />
              </span>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Instagram
                </div>
                <div className="text-xs" style={{ color: "#64748b", fontFamily: "'Nunito Sans', sans-serif" }}>
                  @jairlimapersonaltrainer
                </div>
              </div>
              <span className="ml-auto text-xs" style={{ color: "#64748b" }}>→</span>
            </a>
          </div>
        </AnimatedSection>

        {/* ── FOOTER ── */}
        <AnimatedSection delay={0}>
          <div className="text-center pt-4 pb-2 space-y-2">
            <p className="text-xs" style={{ color: "#334155", fontFamily: "'Nunito Sans', sans-serif" }}>
              © 2026 Jair Lima Personal Trainer · Todos os direitos reservados
            </p>
            <p className="text-xs" style={{ color: "#334155", fontFamily: "'Nunito Sans', sans-serif" }}>
              Criado por{" "}
              <a
                href="https://www.instagram.com/hen_zogomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-lime-400"
                style={{ color: "#64748b" }}
              >
                @hen_zogomes
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* ── FIXED BOTTOM CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3"
        style={{
          background: "linear-gradient(0deg, #0B1120 60%, transparent 100%)",
        }}
      >
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn whatsapp-pulse"
            style={{ fontSize: 15 }}
          >
            <WhatsAppIcon />
            <span>Falar com o Jair agora</span>
          </a>
        </div>
      </div>
    </div>
  );
}
