import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const painPoints = [
  "Vous avez l'impression d'être un aimant narcissique, de vous oublier, et de voir votre empathie se retourner contre vous.",
  "Vous vous sentez totalement vidée, de devoir gérer les émotions de l'autre et de ne plus avoir d'énergie pour vous.",
  "Vous avez souffert silencieusement, vous n'arriviez pas à poser des limites et à vous protéger, accumulant ainsi du ressentiment.",
  "Vous avez intériorisé votre culpabilité et votre honte, vous vous êtes remise en question et votre perception de multiples fois.",
  "Vous vous dites que si ça continue comme ça vous finirez seule, ou pire tomber dans le même piège avec un nouveau partenaire (si ce n'est pas déjà le cas).",
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
    title: "Une Synthèse Globale (Holistic Processing)",
    science: "Dario Nardi, 2011 — Neuroscience of Personality (UCLA)",
    body: "Les recherches en neurosciences montrent que les types dominants en Intuition Introvertie (Ni), comme l'INFJ, utilisent un mode de traitement « holistique ». Ils ont besoin de voir comment toutes les pièces du puzzle s'assemblent avant d'accepter une solution.",
    conclusion: "Vous avez donc besoin d'une méthode qui ne traite pas seulement le symptôme, mais qui offre une cartographie complète du système de personnalité.",
  },
  {
    num: "02",
    title: "Une Cohérence Interne (Internal Alignment)",
    science: "Cahaya Tresna et al., 2026 — The therapy of typing: perspectives on the MBTI role in identity and community making",
    body: "Les INFP/INFJ, dominés par le Sentiment Introverti (Fi), possèdent un câblage neuronal optimisé pour l'évaluation des valeurs et de l'identité. Ils rejettent instinctivement toute solution qui semble « générique » ou imposée de l'extérieur.",
    conclusion: "Vous avez donc besoin d'une solution qui permet un auto-diagnostic. L'INFP doit « sentir » que la vérité vient d'elle-même pour que le changement soit durable.",
  },
  {
    num: "03",
    title: "La Sortie de Boucle (Loop Breaking)",
    science: "C.G. Jung, 1921 — Psychological Types & Harold Grant — Développement des fonctions",
    body: "En situation de stress ou de trauma, les profils INFJ/INFP s'enferment dans des boucles cognitives (Ni-Ti pour l'INFJ, Fi-Si pour l'INFP), ignorant leurs fonctions extraverties de régulation.",
    conclusion: "Vous avez donc besoin d'un outil qui identifie précisément la fonction de sortie (Fe pour l'INFJ, Ne pour l'INFP) pour briser l'obsession et le retrait.",
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
            INFJ/INFP : Votre Cerveau N&apos;est Pas Cassé.
            <br />
            <span className="text-cream">Il Est Mal Calibré Pour Les Relations Toxiques.</span>
            <br />
            <span className="text-cream text-3xl md:text-4xl lg:text-5xl">Voici Comment Le Reconfigurer.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-lg md:text-xl italic text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            DBR : La méthode méconnue mais pourtant scientifique pour les INFJ/INFP, qui vous permettra d&apos;avoir enfin une connexion avec votre partenaire sur la même fréquence que vous.
          </p>
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
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-8">
              Si vous êtes ici, c&apos;est pour une bonne raison.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="font-sans text-base text-muted leading-relaxed mb-12 flex flex-col gap-5">
              <p>
                Vous avez vu mes publications sur les réseaux, et vous avez trouvé pertinent ce que vous avez lu.<br />
                Vous avez passé le quiz, et obtenu votre mécanisme dominant en tant que INFJ/INFP qui fait que vous donnez tout, que vous vous oubliez en relation et que vous finissez vidée.
              </p>
              <p className="text-cream font-semibold">
                Et ce n&apos;était pas assez.
              </p>
              <p>
                Vous vouliez définitivement en finir avec vos patterns amoureux toxiques.
              </p>
              <p>
                Vous avez fait le premier pas en passant le quiz. La plupart des gens n&apos;arrivent même pas là.
              </p>
              <p className="text-cream font-semibold">
                Vous êtes exactement au bon endroit, au bon moment.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-8">
              Peut-être reconnaissez-vous une ou plusieurs de ces situations :
            </h2>
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

      {/* TRANSITION */}
      <div className="py-10 px-4 text-center">
        <FadeIn>
          <p className="font-sans text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Mais laissez moi vous dire quelque chose que personne ne vous a probablement jamais déjà dit :
          </p>
        </FadeIn>
      </div>

      {/* CE N'EST PAS VOTRE FAUTE */}
      <div className="py-16 px-4 text-center">
        <FadeIn>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold max-w-2xl mx-auto leading-tight">
            Ce n&apos;est pas votre faute.
          </p>
          <p className="font-sans text-lg text-muted mt-6 max-w-xl mx-auto leading-relaxed">
            Votre cerveau INFP/INFJ est juste câblé différemment.
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

          <FadeIn delay={0.2}>
            <p className="font-sans text-base text-muted mt-6 leading-relaxed">
              C&apos;est pour ça que vous absorbez tout, que vous vous oubliez complètement et que vous finissez vidée, même avec un partenaire « normal ».
            </p>
          </FadeIn>
        </div>
      </div>

      {/* CRITIQUE SOLUTIONS */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              C&apos;est dérangeant, n&apos;est ce pas ?
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              Vous vouliez que ça change.<br /><br />
              Donc vous avez songé à ou peut être essayé :
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

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col gap-5 max-w-2xl mx-auto text-center">
              <p className="font-sans text-base text-muted leading-relaxed">
                Vous vous sentez coupable de ne pas avancer vite, et finissez par vous épuiser à force de vouloir performer la guérison.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                En plus de ne pas être parfaits, ils manquent des éléments cruciaux dont votre cerveau INFJ/INFP a besoin pour initier le changement et enfin avoir cette connexion profonde, intuitive, où les silences sont compris et les émotions partagées sans effort.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3 ELEMENTS */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Votre câblage INFJ/INFP nécessite ces 03 éléments cruciaux :
            </h2>
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
                  <p className="font-sans text-xs italic text-gold/60 mb-3 leading-relaxed">
                    {el.science}
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-3">
                    {el.body}
                  </p>
                  <p className="font-sans text-sm text-cream leading-relaxed font-medium">
                    {el.conclusion}
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
