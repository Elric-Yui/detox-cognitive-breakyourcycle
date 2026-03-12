import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const painPoints = [
  "Vous êtes comme un aimant à personnalités narcissiques — chaque nouvelle relation semble prometteuse, mais finit par vous laisser vidée et confuse.",
  "Vous vous sentez émotionnellement épuisée, comme si vous portiez les émotions de tout le monde sauf les vôtres.",
  "Un ressentiment profond s'accumule en silence, mêlé de honte de ne pas arriver à simplement \"passer à autre chose\".",
  "Vous rationalisez l'irrationalisable, trouvant des excuses pour des comportements qui vous blessent profondément.",
  "Vous vous sentez fondamentalement seule — même entourée, même en couple.",
];

const failedSolutions = [
  {
    title: "La Thérapie Classique",
    critique:
      "Conçue pour la population générale. Elle ne prend pas en compte votre architecture cognitive unique — votre façon de percevoir les patterns (Ni), d'absorber les émotions (Fe), de rationaliser (Ti). Vous passez des mois à raconter votre passé sans outil concret pour recalibrer votre présent.",
  },
  {
    title: "Le Self-Help Généraliste",
    critique:
      "\"Aimez-vous davantage.\" \"Posez des limites.\" Utile pour certains profils. Pour vous, INFJ/INFP, ces conseils semblent creux parce qu'ils ignorent la mécanique profonde de votre fonction intuitive qui cherche toujours à voir le potentiel caché derrière la réalité.",
  },
  {
    title: "Le Coaching en Ligne",
    critique:
      "Souvent trop superficiel, trop optimiste, trop rapide. Il effleure la surface d'un problème qui a des racines profondes dans votre système nerveux et vos schémas cognitifs construits sur des années.",
  },
];

const threeElements = [
  {
    num: "01",
    title: "Synthèse Globale",
    desc: "Une vue d'ensemble de tous vos patterns — passés et présents — pour comprendre la logique cachée de votre cycle. Pas juste une relation, mais le système entier.",
  },
  {
    num: "02",
    title: "Cohérence Interne",
    desc: "Réconcilier ce que vous savez intellectuellement avec ce que vous ressentez viscéralement. Mettre fin à la guerre entre votre tête et votre cœur.",
  },
  {
    num: "03",
    title: "Sortie de Boucle",
    desc: "Un protocole concret, étape par étape, pour interrompre le cycle — pas en réprimant vos émotions, mais en recalibrant la source même du dysfonctionnement.",
  },
];

export default function Feature1Hero() {
  return (
    <section className="bg-bg">
      {/* HERO */}
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet/10 via-transparent to-transparent pointer-events-none" />

        <FadeIn delay={0}>
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-6">
            BreakYourCycle — Méthode DBR
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gold leading-tight max-w-4xl mx-auto mb-6">
            Votre cerveau n&apos;est pas cassé.
            <br />
            <span className="text-cream">Il est mal calibré.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-lg md:text-xl italic text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            La méthode DBR — Diagnostiquer, Briser, Reconstruire — conçue
            spécifiquement pour les profils INFJ et INFP qui répètent les mêmes
            schémas amoureux toxiques, malgré tout leur travail sur eux-mêmes.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <CTAButton label="Je veux recalibrer mon cerveau — 47€" size="lg" />
        </FadeIn>

        {/* Hero image placeholder */}
        <FadeIn delay={0.4} className="w-full max-w-3xl mx-auto mt-16">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-bg-alt flex items-center justify-center">
            <div className="text-center text-muted">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p className="text-sm">Image hero — femme dans un paysage de nuit</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* INTRO EMPATHY */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-lg md:text-xl text-muted leading-relaxed mb-10">
              Si vous êtes ici, c&apos;est pour une bonne raison. Vous avez lu
              des livres sur les narcissiques. Vous avez peut-être fait une
              thérapie. Vous avez suivi des comptes Instagram sur les relations
              toxiques. Et pourtant... vous vous retrouvez encore là, à la même
              case départ, avec la même douleur sourde dans la poitrine.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-sans text-base text-muted leading-relaxed mb-12">
              Peut-être reconnaissez-vous une ou plusieurs de ces situations :
            </p>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 bg-bg rounded-lg border border-white/8">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2.5" />
                  <p className="font-sans text-base text-cream leading-relaxed">
                    {point}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CE N'EST PAS VOTRE FAUTE */}
      <div className="py-16 px-4 text-center">
        <FadeIn>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold max-w-2xl mx-auto leading-tight">
            Ce n&apos;est pas votre faute.
          </p>
          <p className="font-sans text-lg text-muted mt-6 max-w-xl mx-auto leading-relaxed">
            C&apos;est la façon dont votre cerveau — votre cerveau INFJ ou INFP
            — a été câblé pour répondre à certains stimuli. Et ce câblage peut
            être recalibré.
          </p>
        </FadeIn>
      </div>

      {/* SCIENCE */}
      <div className="bg-bg-alt py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="border-l-4 border-gold pl-6 py-4">
              <p className="font-serif text-xl md:text-2xl italic text-cream leading-relaxed mb-4">
                &ldquo;Les individus à haute sensibilité empathique présentent
                une activation significativement plus forte des neurones miroirs,
                rendant la frontière entre leurs émotions et celles d&apos;autrui
                neurobiologiquement poreuse.&rdquo;
              </p>
              <p className="font-sans text-sm text-muted">
                — Acevedo, B.P. et al. (2014),{" "}
                <em>
                  The highly sensitive brain: an fMRI study of sensory processing
                  sensitivity and response to others&apos; emotions
                </em>
                , Brain and Behavior
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-sans text-base text-muted mt-8 leading-relaxed">
              En d&apos;autres termes : votre tendance à absorber les émotions de
              votre partenaire, à ressentir sa douleur comme la vôtre, à rester
              même quand tout vous crie de partir — ce n&apos;est pas de la
              faiblesse. C&apos;est de la neurobiologie.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* CRITIQUE SOLUTIONS */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              Pourquoi les solutions habituelles ne fonctionnent pas pour vous
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              Ce n&apos;est pas que vous n&apos;avez pas assez essayé. C&apos;est
              que les outils n&apos;étaient pas conçus pour votre architecture
              cognitive.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {failedSolutions.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-6 h-full">
                  <h3 className="font-serif text-lg font-bold text-negative mb-3">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {s.critique}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 3 ELEMENTS */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              Ce dont vous avez réellement besoin
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              Après avoir analysé des centaines de cas similaires au vôtre, trois
              éléments s&apos;avèrent cruciaux pour sortir définitivement du cycle.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {threeElements.map((el, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg border border-white/10 rounded-xl p-6 h-full">
                  <span className="font-serif text-4xl font-bold text-gold/30 block mb-3">
                    {el.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-gold mb-3">
                    {el.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
