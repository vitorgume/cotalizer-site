import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Shield,
    Sparkles,
    FileText,
    Wand2,
    Clock,
    LineChart,
} from "lucide-react";
import Logo from '../assets/image_1-removebg-preview.png';
import { useNavigate } from "react-router-dom";
import Planos from "./planos/planos";

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
        className={`pointer-events-none absolute blur-3xl opacity-20 ${className}`}
        style={{
            background: `radial-gradient(600px 600px at 50% 50%, ${color} 0%, transparent 60%)`,
        }}
    />
);

const AppMockup: React.FC = () => {

    return (

        <div className="relative mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            {/* Top bar */}
            <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <div className="ml-3 text-sm text-white/70">cotalizer.app</div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-12 md:col-span-4">
                    <div className="mb-4 flex items-center gap-3">
                        <img src={Logo} alt="Logo Cotalizer" className="h-7 w-7" />
                        <div>
                            <p className="text-sm text-white/60">Projeto</p>
                            <p className="font-medium">Novo orçamento</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="rounded-xl bg-white/5 p-3">
                            <p className="text-xs uppercase tracking-wide text-white/50">Entrada</p>
                            <div className="mt-2 h-24 rounded-lg bg-white/5" />
                        </div>
                        <div className="rounded-xl bg-white/5 p-3">
                            <p className="text-xs uppercase tracking-wide text-white/50">Cliente</p>
                            <div className="mt-2 h-10 rounded-lg bg-white/5" />
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="col-span-12 md:col-span-8">
                    <div className="rounded-2xl bg-white/5 p-4 md:p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-white/70" />
                                <p className="text-sm text-white/70">Prévia do PDF</p>
                            </div>
                            <span className="rounded-full bg-[rgba(24,175,145,0.2)] px-3 py-1 text-xs text-[var(--cotalizer-primary)]">
                                IA aplicada
                            </span>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                            <div className="h-56 rounded-xl bg-white/10" />
                            <div className="space-y-3">
                                <div className="h-10 rounded-lg bg-white/10" />
                                <div className="h-10 rounded-lg bg-white/10" />
                                <div className="h-10 rounded-lg bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <button
                                        className="group inline-flex items-center gap-2 rounded-xl bg-[var(--cotalizer-primary)] px-4 py-2 font-semibold text-[#0C2C25] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        onClick={() => window.location.href='https://app-frontend.cotalizer.com/usuario/cadastro'}
                                    >
                                        Criar minha conta
                                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default function CotalizerLanding() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen scroll-smooth text-white overflow-x-hidden"
            style={{
                // Variáveis CSS para facilitar edição de cores
                // @ts-ignore
                "--cotalizer-base": COLORS.base,
                "--cotalizer-primary": COLORS.primary,
                "--cotalizer-secondary": COLORS.secondary,
                background: `radial-gradient(1200px 500px at 10% -10%, ${COLORS.secondary}33 0%, transparent 60%), radial-gradient(900px 600px at 110% 0%, ${COLORS.primary}33 0%, transparent 60%), ${COLORS.base}`,
            }}
        >
            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--cotalizer-base)]/80 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
                    <a href="#hero" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white/50">
                        <img src={Logo} alt="Logo Cotalizer" className="h-6 w-6" />
                        <span className="text-lg font-semibold">Cotalizer</span>
                    </a>

                    <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                        <a href="#features" className="hover:text-white">Recursos</a>
                        <a href="#como-funciona" className="hover:text-white">Como funciona</a>
                        <a href="#beneficios" className="hover:text-white">Benefícios</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={'https://app-frontend.cotalizer.com/usuario/login'}
                            onClick={() => window.location.href = 'https://app-frontend.cotalizer.com/usuario/login'}


                            className=" rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
                        >
                            Entrar
                        </a>
                        <a
                            href={'https://app-frontend.cotalizer.com/usuario/cadastro'}
                            onClick={() => window.location.href = 'https://app-frontend.cotalizer.com/usuario/cadastro'}
                            className="inline-flex items-center gap-2 rounded-xl bg-[var(--cotalizer-primary)] px-4 py-2 text-sm font-semibold text-[#0C2C25] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            Criar conta
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <Section id="hero" className="pt-16 md:pt-24">
                <GradientBlob className="-left-24 -top-24 h-[40rem] w-[40rem]" color={COLORS.secondary} />
                <GradientBlob className="-right-24 top-40 h-[36rem] w-[36rem]" color={COLORS.primary} />

                <div className="relative grid items-center gap-10 pb-16 md:grid-cols-2 md:pb-24">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold leading-tight md:text-5xl"
                        >
                            Orçamentos com IA
                            <br />
                            <span className="bg-gradient-to-r from-[var(--cotalizer-primary)] to-[var(--cotalizer-secondary)] bg-clip-text text-transparent">
                                precisos em minutos.
                            </span>
                        </motion.h1>
                        <p className="mt-4 text-lg text-white/80 md:mt-6">
                            O Cotalizer transforma descrições informais em orçamentos profissionais, padronizados e prontos para enviar ao cliente — com geração de PDF, versionamento e histórico.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={'https://app-frontend.cotalizer.com/usuario/cadastro'}
                                onClick={() => navigate('https://app-frontend.cotalizer.com/usuario/cadastro')}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--cotalizer-primary)] px-5 py-3 font-semibold text-[#0C2C25] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label="Criar conta no Cotalizer"
                            >
                                Criar minha conta
                                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#como-funciona"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
                            >
                                Ver como funciona
                            </a>
                        </div>
                        <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
                            <Shield className="h-4 w-4" />
                            <span>Seus dados são protegidos. Assinaturas e PDFs com trilha de auditoria.</span>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <AppMockup />
                    </motion.div>
                </div>
            </Section>

            {/* Features */}
            <Section id="features" className="py-12 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold md:text-3xl">Feito para acelerar seu comercial</h2>
                    <p className="mt-3 text-white/80">
                        Tudo o que você precisa para gerar, aprovar e enviar orçamentos padronizados — sem planilhas confusas.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: Wand2, title: "De texto para orçamento", desc: "Cole uma descrição. A IA estrutura, precifica e formata com seu template." },
                        { icon: FileText, title: "PDF pronto e bonito", desc: "Layout profissional, logotipo, itens, prazos e condições. Um clique para baixar." },
                        { icon: Clock, title: "Versionamento e histórico", desc: "Acompanhe alterações, revise e recupere versões em segundos." },
                        { icon: Shield, title: "Assinatura e trilha", desc: "Envie para assinatura eletrônica e registre cada etapa com segurança." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <Icon className="h-6 w-6 text-[var(--cotalizer-primary)]" />
                            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                            <p className="mt-2 text-white/80">{desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Como funciona */}
            <Section id="como-funciona" className="py-12 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold md:text-3xl">Do briefing ao PDF em 3 passos</h2>
                    <p className="mt-3 text-white/80">Rápido para você, claro para o cliente.</p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {[
                        {
                            step: 1,
                            title: "Descreva o que precisa",
                            desc: "Cole um texto informal ou selecione um template. A IA entende o contexto.",
                        },
                        {
                            step: 2,
                            title: "Revise e personalize",
                            desc: "Edite itens, prazos e condições. Seus preços e impostos já aplicados.",
                        },
                        {
                            step: 3,
                            title: "Gere e envie",
                            desc: "Baixe o PDF ou encaminhe para assinatura eletrônica com trilha de auditoria.",
                        },
                    ].map(({ step, title, desc }) => (
                        <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cotalizer-secondary)] text-sm font-bold">
                                {step}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                            <p className="mt-2 text-white/80">{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-[var(--cotalizer-secondary)]/10 p-6 text-center">
                    <p className="text-white/90">
                        Em testes com equipes comerciais, o Cotalizer reduziu o tempo de criação de um orçamento de <span className="font-semibold">30–45 min</span> para cerca de <span className="font-semibold">3–7 min</span>.
                    </p>
                </div>
            </Section>

            {/* Benefícios / prova social */}
            <Section id="beneficios" className="py-12 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold md:text-3xl">Resultados que movem a agulha</h2>
                    <p className="mt-3 text-white/80">Padronização, velocidade e previsibilidade.</p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {[
                        { label: "↓ Tempo por orçamento", value: "-80%" },
                        { label: "↑ Taxa de envio no dia", value: "+65%" },
                        { label: "↑ Win-rate médio", value: "+12%" },
                    ].map((kpi) => (
                        <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                            <div className="text-4xl font-bold text-[var(--cotalizer-primary)]">{kpi.value}</div>
                            <div className="mt-2 text-white/80">{kpi.label}</div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-start gap-4">
                        <Sparkles className="mt-1 h-5 w-5 text-[var(--cotalizer-primary)]" />
                        <p className="text-white/80">
                            "O Cotalizer tirou a equipe do Excel e padronizou propostas em toda a operação. Hoje criamos e enviamos no mesmo dia."
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="planos" className="py-12 md:py-20">
                <Planos />
            </Section>

            {/* CTA final */}
            <Section className="py-12 md:py-20">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[var(--cotalizer-secondary)]/20 to-[var(--cotalizer-primary)]/20 p-8">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-semibold md:text-3xl">Comece agora — grátis por tempo limitado</h3>
                            <ul className="mt-4 space-y-2 text-white/85">
                                {[
                                    "Geração com IA ilimitada no beta",
                                    "Templates personalizáveis",
                                    "Exportação em PDF e histórico",
                                ].map((b) => (
                                    <li key={b} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--cotalizer-primary)]" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-3 md:items-end">
                            <a
                                href={'https://app-frontend.cotalizer.com/usuario/cadastro'}
                                onClick={() => navigate('https://app-frontend.cotalizer.com/usuario/cadastro')}
                                className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--cotalizer-primary)] px-6 py-3 text-lg font-semibold text-[#0C2C25] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                            >
                                Criar minha conta
                                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                            </a>
                            <p className="text-sm text-white/70">Não precisa de cartão de crédito.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[var(--cotalizer-base)]/80 py-8">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row md:px-8">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Logo Cotalizer" className="h-5 w-5" />
                        <span>© {new Date().getFullYear()} Cotalizer</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#features" className="hover:text-white">Recursos</a>
                        <a href="#como-funciona" className="hover:text-white">Como funciona</a>
                        <a href="mailto:contato@cotalizer.com" className="hover:text-white">Contato</a>
                        <a href="#" className="hover:text-white">Política de privacidade</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
