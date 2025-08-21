import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import Logo from "../assets/image_1-removebg-preview.png";


// Paleta consistente com a landing
const COLORS = {
  base: "#2D4254",
  primary: "#18AF91",
  secondary: "#2C8ABB",
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`relative w-full ${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
  </section>
);

const GradientBlob: React.FC<{ className?: string; color?: string }> = ({ className, color = COLORS.secondary }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute blur-3xl opacity-20 ${className ?? ""}`}
    style={{ background: `radial-gradient(600px 600px at 50% 50%, ${color} 0%, transparent 60%)` }}
  />
);

export default function PageEspera() {
  return (
    <div
      className="min-h-screen scroll-smooth text-white"
      style={{
        // @ts-ignore
        "--cotalizer-base": COLORS.base,
        "--cotalizer-primary": COLORS.primary,
        "--cotalizer-secondary": COLORS.secondary,
        background: `radial-gradient(1200px 500px at 10% -10%, ${COLORS.secondary}33 0%, transparent 60%), radial-gradient(900px 600px at 110% 0%, ${COLORS.primary}33 0%, transparent 60%), ${COLORS.base}`,
      }}
    >
      {/* Header minimalista */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--cotalizer-base)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white/50">
            {/* Marca CSS (usa as classes .logo-mark/.sq que passamos antes) */}
            <span className="flex items-center gap-3">
              <img src={Logo} alt="Logo Cotalizer" className="h-6 w-6" />
              <span className="brand-text text-lg font-semibold">Cotalizer</span>
            </span>
          </a>
          <a
            href="/"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Voltar para a Home
          </a>
        </div>
      </header>

      {/* Hero de espera */}
      <Section className="pt-16 md:pt-24">
        <GradientBlob className="-left-24 -top-24 h-[40rem] w-[40rem]" color={COLORS.secondary} />
        <GradientBlob className="-right-24 top-40 h-[36rem] w-[36rem]" color={COLORS.primary} />

        <div className="relative grid items-center gap-10 pb-16 md:grid-cols-12 md:pb-24">
          {/* Texto */}
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-tight md:text-5xl"
            >
              Estamos construindo o{" "}
              <span className="bg-gradient-to-r from-[var(--cotalizer-primary)] to-[var(--cotalizer-secondary)] bg-clip-text text-transparent">
                futuro dos orçamentos
              </span>
              .
            </motion.h1>

            <p className="mt-4 text-lg text-white/80 md:mt-6">
              Ainda não estamos com o serviço disponível. Estamos trabalhando para entregar a melhor
              experiência possível — rápida, padronizada e com IA aplicada ao seu dia a dia.
            </p>

            {/* Barra de progresso animada */}
            <div className="mt-6 w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "28%", "52%", "68%", "82%"] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  className="h-full rounded-full bg-[var(--cotalizer-primary)]"
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4" />
                <span>Fase atual: MVP + ajustes de UX</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contato@cotalizer.com?subject=Quero ser avisado sobre o Cotalizer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--cotalizer-primary)] px-5 py-3 font-semibold text-[#0C2C25] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Ser avisado por e-mail
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                Voltar para a Home
              </a>
            </div>

            {/* Roadmap curto */}
            <ul className="mt-8 grid gap-3 text-white/85 sm:grid-cols-2">
              {[
                "Templates personalizáveis",
                "Exportação em PDF",
                "Versionamento e histórico",
                "Integração com CRM",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[var(--cotalizer-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cartão visual */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <img src={Logo} alt="Logo Cotalizer" className="h-6 w-6" />
                <span className="text-white/80">Prévia do Cotalizer</span>
              </div>

              <div className="h-40 rounded-xl bg-white/10" />
              <div className="mt-3 h-3 w-4/5 rounded-full bg-white/10" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
              <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="h-4 w-4 text-[var(--cotalizer-primary)]" />
                <span>Construção em andamento</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Rodapé */}
      <footer className="border-t border-white/10 bg-[var(--cotalizer-base)]/80 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo Cotalizer" className="h-6 w-6" />
            <span>© {new Date().getFullYear()} Cotalizer</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contato@cotalizer.com" className="hover:text-white">Contato</a>
            <a href="/" className="hover:text-white">Home</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
