import FadeIn from "@/components/ui/FadeIn";

const failles = [
  {
    func: "Ni — Intuition Introvertie",
    label: "Faille #1",
    mechanism: "Vous percevez le potentiel de votre partenaire plutôt que sa réalité actuelle",
    consequence: "Vous tombez amoureuse de qui il pourrait devenir, pas de qui il est",
  },
  {
    func: "Fe — Sentiment Extraverti",
    label: "Faille #2",
    mechanism: "Vous absorbez et priorisez les émotions de l'autre de manière automatique",
    consequence: "Vos propres besoins deviennent invisibles, même à vos propres yeux",
  },
  {
    func: "Ti — Pensée Introvertie",
    label: "Faille #3",
    mechanism: "Vous rationalisez le comportement de votre partenaire avec une précision analytique",
    consequence: "Vous trouvez toujours une explication logique qui justifie l'inexcusable",
  },
  {
    func: "Se — Sensation Extravertie",
    label: "Faille #4",
    mechanism: "Votre perception sensorielle est sous-développée et sous-utilisée",
    consequence: "Vous ignorez les signaux physiques d'alerte — tension corporelle, nœud à l'estomac",
  },
  {
    func: "Ni — Besoin de Sens",
    label: "Faille #5",
    mechanism: "Vous cherchez une signification profonde dans chaque interaction, chaque douleur",
    consequence: "Vous restez dans des situations toxiques parce qu'elles semblent \"significatives\"",
  },
];

const besoins = [
  {
    title: "IDENTIFIER",
    desc: "Nommer précisément la phase du cycle dans laquelle vous êtes actuellement. Pas juste 'c'est toxique'. La phase exacte, avec ses mécanismes spécifiques.",
    icon: "🔍",
  },
  {
    title: "DOCUMENTER",
    desc: "Créer une trace objective de vos patterns — parce que votre cerveau INFJ/INFP est câblé pour réécrire les souvenirs douloureux en quelque chose de plus supportable.",
    icon: "📋",
  },
  {
    title: "VISUALISER",
    desc: "Voir clairement où vous en êtes dans le cycle — et où vous pouvez en sortir. La conscience seule ne suffit pas. Il faut une cartographie.",
    icon: "🗺",
  },
];

const phases = [
  { num: "0", title: "L'Idéalisation", desc: "Le début parfait — love bombing, connexion intense" },
  { num: "1", title: "La Première Fissure", desc: "Le premier signal d'alarme ignoré" },
  { num: "2", title: "Le Cycle de Tension", desc: "Marcher sur des œufs, hypervigilance" },
  { num: "3", title: "L'Explosion", desc: "La dispute, la rupture partielle" },
  { num: "4", title: "La Réconciliation", desc: "Retour, soulagement, fausse promesse" },
  { num: "5", title: "La Lune de Miel Courte", desc: "Accalmie temporaire, espoir renaissant" },
  { num: "6", title: "L'Effacement de Soi", desc: "Vous disparaissez progressivement" },
];

const scientificBases = [
  {
    name: "Jeffrey Young",
    desc: "Thérapie des schémas — comment nos patterns relationnels se forment dans l'enfance et se réactivent à l'âge adulte",
  },
  {
    name: "Carl Jung / Dario Nardi",
    desc: "Typologies cognitives MBTI et leur corrélation avec les patterns neurologiques mesurables",
  },
  {
    name: "B.F. Skinner",
    desc: "Renforcement intermittent — pourquoi le cerveau devient addictif aux relations imprévisibles",
  },
  {
    name: "Peter Levine",
    desc: "Trauma somatique — comment le traumatisme relationnel se stocke dans le corps, pas seulement dans l'esprit",
  },
  {
    name: "Patrick Carnes",
    desc: "Cycles d'addiction relationnelle — le lien entre attachement anxieux et comportements compulsifs",
  },
];

const positiveResults = [
  "J'ai rencontré quelqu'un qui m'aimait sans condition",
  "Pour la première fois, je n'avais pas peur que la situation change du jour au lendemain",
  "Je reconnaissais les red flags dès la première semaine — et je les prenais au sérieux",
  "Ma frontière entre mes émotions et celles de l'autre était nette, stable",
  "Je n'avais plus besoin de 'sauver' qui que ce soit pour me sentir aimée",
];

export default function Feature3Mechanism() {
  return (
    <section className="bg-bg-alt">
      {/* L'ANALYSE */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Alors j&apos;ai commencé à chercher.
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Pendant 4 mois, j&apos;ai analysé ma relation passée avec une méthodologie clinique. Voici les ressources que j&apos;ai étudiées :
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="font-sans text-sm text-muted space-y-2 mb-10 pl-4">
              {[
                "Littérature sur la typologie MBTI et les fonctions cognitives jungiens",
                "Études neuroscientifiques sur la haute sensibilité empathique",
                "Recherches sur les schémas cognitifs (Jeffrey Young, Aaron Beck)",
                "Travaux sur le trauma développemental et les attachements anxieux",
                "Littérature sur l'addiction relationnelle et le renforcement intermittent",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-base text-muted leading-relaxed">
              J&apos;ai cherché un guide complet en français qui combine MBTI + relations toxiques + protocole de sortie. Il n&apos;existait pas. Alors j&apos;ai décidé de le créer.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* 5 FAILLES */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream text-center mb-4">
              Les 5 Failles Cognitives du Profil INFJ/INFP
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              Voici ce que j&apos;ai découvert : il y a 5 mécanismes spécifiques qui expliquent pourquoi vous restez coincée dans ce cycle.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {failles.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-3xl font-bold text-gold/30 flex-shrink-0 w-8">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-sans text-xs uppercase tracking-widest text-gold mb-1">
                        {f.label}
                      </p>
                      <h3 className="font-serif text-lg font-bold text-gold mb-4">
                        {f.func}
                      </h3>
                      <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 bg-bg rounded-lg p-4">
                          <p className="font-sans text-xs text-muted uppercase tracking-wider mb-2">
                            Mécanisme
                          </p>
                          <p className="font-sans text-sm text-cream leading-relaxed">
                            {f.mechanism}
                          </p>
                        </div>
                        <div className="flex items-center justify-center text-gold/50 text-xl flex-shrink-0">
                          →
                        </div>
                        <div className="flex-1 bg-negative/10 border border-negative/20 rounded-lg p-4">
                          <p className="font-sans text-xs text-negative uppercase tracking-wider mb-2">
                            Conséquence
                          </p>
                          <p className="font-sans text-sm text-cream leading-relaxed">
                            {f.consequence}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <p className="font-serif text-xl md:text-2xl font-bold text-cream">
                Ces 5 failles ne sont{" "}
                <span className="text-gold">PAS des défauts de caractère.</span>
              </p>
              <p className="font-sans text-muted mt-4 max-w-xl mx-auto">
                Ce sont des caractéristiques de votre type cognitif qui n&apos;ont jamais été calibrées pour vous protéger dans le contexte relationnel.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3 BESOINS */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Pour sortir du cycle, vous avez besoin de trois choses :
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {besoins.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-6 text-center h-full">
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-sans text-sm uppercase tracking-widest text-gold font-bold mb-3">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 7 PHASES */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              La Cartographie des 7 Phases du Cycle
            </h2>
            <p className="font-sans text-muted text-center mb-12">
              J&apos;ai cartographié les 7 phases exactes du cycle toxique pour le profil INFJ/INFP.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-4">
              {phases.map((phase, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="flex gap-4 items-start md:pl-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bg-alt border border-gold/30 flex items-center justify-center relative z-10">
                      <span className="font-serif font-bold text-gold text-sm">
                        {phase.num}
                      </span>
                    </div>
                    <div className="flex-1 bg-bg-alt rounded-lg p-4 border border-white/8">
                      <h4 className="font-sans font-semibold text-cream mb-1">
                        {phase.title}
                      </h4>
                      <p className="font-sans text-sm text-muted">{phase.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={0.55}>
                <div className="text-center mt-2">
                  <span className="font-sans text-sm text-gold">
                    ↻ Retour à la Phase 2 — et le cycle recommence
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* RÉSULTATS 6 MOIS */}
      <div className="py-20 px-4 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-4">
              6 mois après avoir appliqué ce que je venais de comprendre :
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3 mt-8">
            {positiveResults.map((r, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-3 items-start p-4 bg-positive/10 border border-positive/20 rounded-lg">
                  <span className="text-positive font-bold flex-shrink-0">✓</span>
                  <p className="font-sans text-sm text-cream">{r}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* PRÉSENTATION DBR */}
      <div className="py-20 px-4 bg-bg text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-6">
              La méthode
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Un manuel d&apos;utilisation de votre propre cerveau.
            </h2>
            <p className="font-sans text-lg text-muted leading-relaxed mb-10">
              La méthode DBR — Diagnostiquer, Briser, Reconstruire — n&apos;est pas un livre de développement personnel de plus. C&apos;est un protocole clinique adapté à votre architecture cognitive spécifique.
            </p>
          </FadeIn>

          {/* Bases scientifiques */}
          <FadeIn delay={0.1}>
            <h3 className="font-sans text-sm uppercase tracking-widest text-muted mb-8">
              Les bases scientifiques
            </h3>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-12">
            {scientificBases.map((b, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.07}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-5">
                  <h4 className="font-serif text-base font-bold text-gold mb-2">
                    {b.name}
                  </h4>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="inline-block bg-gold/10 border border-gold/30 rounded-2xl px-8 py-6">
              <p className="font-serif text-2xl md:text-3xl font-bold text-gold">
                200+ heures de recherche
              </p>
              <p className="font-sans text-muted mt-2">
                condensées en 3 à 4 heures de lecture active
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
