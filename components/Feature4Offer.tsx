import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const notForYou = [
  "Vous cherchez un guide rapide pour \"repérer les narcissiques\" et passer à autre chose",
  "Vous n'êtes pas prête à vous regarder en face et à remettre en question vos propres patterns",
  "Vous voulez uniquement valider que votre ex était un monstre (il l'était peut-être, mais ce n'est pas le focus ici)",
  "Vous êtes encore en plein milieu d'une relation et n'avez pas l'intention d'en sortir",
];

const forYou = [
  "Vous êtes INFJ ou INFP (ou vous vous reconnaissez dans ces profils même sans avoir passé le test)",
  "Vous répétez le même type de relation toxique depuis des années et vous voulez comprendre pourquoi",
  "Vous êtes prête à faire un travail profond, pas juste à lire quelque chose pour vous sentir mieux temporairement",
  "Vous voulez un outil concret — pas juste de l'inspiration, mais un protocole étape par étape",
];

const testimonials = [
  {
    name: "Mariane",
    context: "INFJ, 34 ans",
    quote:
      "J'ai lu des dizaines de livres sur les relations toxiques. Ce guide est la première fois que quelqu'un m'explique pourquoi MON cerveau fonctionne comme ça. Pas juste ce que je subis, mais le mécanisme exact derrière.",
  },
  {
    name: "Daisy",
    context: "INFP, 28 ans",
    quote:
      "La cartographie des 7 phases m'a littéralement fait pleurer. Je me suis vue dans chaque étape. Pour la première fois, j'avais un nom pour ce que je vivais depuis 3 ans.",
  },
  {
    name: "Cynthia",
    context: "INFJ, 41 ans",
    quote:
      "Ce qui m'a le plus frappée : l'explication de la faille Fe — absorber les émotions de l'autre. J'ai compris en 5 minutes pourquoi j'avais passé 2 ans à gérer les émotions de quelqu'un qui ne gérait jamais les miennes.",
  },
  {
    name: "Soraya",
    context: "INFP, 31 ans",
    quote:
      "Honnêtement, j'avais peur que ce soit juste un autre guide générique. C'est tout l'opposé. C'est chirurgical. Chaque page décrit mon expérience avec une précision qui m'a donné la chair de poule.",
  },
];

const notThis = [
  "Un guide pour identifier les narcissiques dans votre vie",
  "Un livre de développement personnel feel-good",
  "Une validation émotionnelle de votre douleur passée",
  "Une liste de conseils génériques sur comment \"s'aimer davantage\"",
];

const thisIs = [
  "Un diagnostic clinique de votre architecture cognitive INFJ/INFP",
  "Un protocole en 3 phases pour interrompre votre cycle spécifique",
  "Un outil de cartographie de vos patterns relationnels personnels",
  "Une méthode de recalibrage basée sur 5 frameworks scientifiques",
];

const phase1Components = [
  {
    num: "01",
    title: "Test de Profil Cognitif Approfondi",
    desc: "Pas le test MBTI standard. Un diagnostic en 47 questions qui cartographie précisément vos 8 fonctions cognitives et identifie lesquelles sont les plus vulnérables dans le contexte relationnel.",
    value: "Valeur : 27€",
  },
  {
    num: "02",
    title: "La Matrice des Patterns Relationnels",
    desc: "Un outil visuel pour mapper vos 3 dernières relations significatives et identifier les points de convergence — les moments exacts où votre cycle se réactive toujours.",
    value: "Valeur : 19€",
  },
  {
    num: "03",
    title: "Le Journal de Patterns Guidé",
    desc: "14 jours de prompts quotidiens spécifiquement conçus pour le profil INFJ/INFP — pour créer une trace objective de vos réponses émotionnelles et cognitives.",
    value: "Valeur : 17€",
  },
  {
    num: "04",
    title: "La Cartographie des 7 Phases",
    desc: "Le document visuel interactif pour situer votre relation actuelle (ou passée) dans le cycle, identifier la phase exacte et comprendre ce qui vient ensuite.",
    value: "Valeur : 15€",
  },
  {
    num: "05",
    title: "Rapport d'Auto-Diagnostic Personnalisé",
    desc: "En combinant les résultats des 4 outils précédents, vous construisez votre rapport complet — un portrait précis de vos mécanismes, failles et ressources personnelles.",
    value: "Valeur : 29€",
  },
];

const valueTable = [
  { item: "Phase 1 — Diagnostic Complet (5 composants)", value: "107€" },
  { item: "Phase 2 — Protocole de Rupture du Cycle", value: "inclus" },
  { item: "Phase 3 — Reconstruction & Recalibrage", value: "inclus" },
  { item: "Bonus — Bibliothèque de Ressources", value: "inclus" },
];

export default function Feature4Offer() {
  return (
    <section className="bg-bg">
      {/* PRODUCT NAME + MOCKUP */}
      <div className="py-20 px-4 text-center bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Le produit
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-cream leading-tight mb-6">
              DÉTOX COGNITIVE
            </h2>
            <p className="font-serif text-xl md:text-2xl text-gold italic mb-10">
              Diagnostic et Recalibrage pour INFJ/INFP
            </p>
          </FadeIn>

          {/* Book mockup placeholder */}
          <FadeIn delay={0.1}>
            <div className="w-48 h-64 mx-auto bg-gradient-to-br from-violet to-bg border border-gold/30 rounded-lg flex items-center justify-center shadow-[0_20px_60px_rgba(123,79,191,0.3)]">
              <div className="text-center p-4">
                <p className="font-serif text-sm font-bold text-gold leading-tight">
                  DÉTOX
                </p>
                <p className="font-serif text-xs font-bold text-gold leading-tight">
                  COGNITIVE
                </p>
                <div className="w-8 h-px bg-gold/50 mx-auto my-2" />
                <p className="font-sans text-xs text-cream/70">
                  INFJ / INFP
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* PAS POUR VOUS / POUR VOUS */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Ce guide est-il fait pour vous ?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-negative/8 border border-negative/20 rounded-xl p-6">
                <h3 className="font-sans font-bold text-negative uppercase tracking-wider text-sm mb-4">
                  ✗ Pas pour vous si...
                </h3>
                <ul className="flex flex-col gap-3">
                  {notForYou.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm text-cream/80 leading-relaxed">
                      <span className="text-negative flex-shrink-0 font-bold">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-positive/8 border border-positive/20 rounded-xl p-6">
                <h3 className="font-sans font-bold text-positive uppercase tracking-wider text-sm mb-4">
                  ✓ Pour vous si...
                </h3>
                <ul className="flex flex-col gap-3">
                  {forYou.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm text-cream/80 leading-relaxed">
                      <span className="text-positive flex-shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* TÉMOIGNAGES */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Ce qu&apos;elles en disent
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg border border-white/10 rounded-xl p-6 h-full">
                  <p className="font-sans text-sm text-cream italic leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-sans font-bold text-gold text-sm">{t.name}</p>
                    <p className="font-sans text-xs text-muted">{t.context}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CE QUE CE N'EST PAS / CE QUE C'EST */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Soyons claires sur ce que c&apos;est
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-bg-alt border border-white/10 rounded-xl p-6">
                <h3 className="font-sans font-bold text-muted uppercase tracking-wider text-xs mb-4">
                  Ce que ce n&apos;est PAS
                </h3>
                <ul className="flex flex-col gap-3">
                  {notThis.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm text-muted leading-relaxed">
                      <span className="text-negative flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-bg-alt border border-gold/20 rounded-xl p-6">
                <h3 className="font-sans font-bold text-gold uppercase tracking-wider text-xs mb-4">
                  Ce que c&apos;est
                </h3>
                <ul className="flex flex-col gap-3">
                  {thisIs.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm text-cream leading-relaxed">
                      <span className="text-positive flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* PHASE 1 COMPOSANTS */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              Phase 1 — Le Diagnostic Complet
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              5 outils intégrés pour cartographier précisément vos mécanismes cognitifs et relationnels.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {phase1Components.map((comp, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-5 bg-bg rounded-xl p-6 border border-white/8">
                  {/* Placeholder image */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-bg-alt border border-white/10 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-gold/40">
                      {comp.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-base font-bold text-cream mb-2">
                      {comp.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-3">
                      {comp.desc}
                    </p>
                    <span className="font-sans text-xs text-muted/60">
                      {comp.value}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Phase 2, 3, Bonus */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "Phase 2",
                sub: "Protocole de Rupture du Cycle",
                desc: "Les étapes concrètes pour interrompre le cycle — avec des scripts de communication et des exercices de recalibrage émotionnel.",
                value: "inclus",
              },
              {
                title: "Phase 3",
                sub: "Reconstruction & Recalibrage",
                desc: "Comment reconstruire votre capacité à aimer sans perdre qui vous êtes — et comment reconnaître une relation saine quand elle se présente.",
                value: "inclus",
              },
              {
                title: "Bonus",
                sub: "Bibliothèque de Ressources",
                desc: "Les 12 ressources les plus importantes sur le sujet — triées, résumées, annotées. Pour aller plus loin si vous le souhaitez.",
                value: "inclus",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.5 + i * 0.1}>
                <div className="bg-bg border border-gold/20 rounded-xl p-5 h-full">
                  <p className="font-sans text-xs uppercase tracking-widest text-gold mb-1">
                    {item.title}
                  </p>
                  <h3 className="font-serif text-sm font-bold text-cream mb-2">
                    {item.sub}
                  </h3>
                  <p className="font-sans text-xs text-muted leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <span className="font-sans text-xs text-gold">{item.value}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* TABLEAU VALEUR + PRIX */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-10">
              Si nous faisons la somme...
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-bg-alt border border-white/10 rounded-xl overflow-hidden mb-8">
              {valueTable.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-6 py-4 ${
                    i !== valueTable.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <span className="font-sans text-sm text-muted text-left">
                    {row.item}
                  </span>
                  <span className="font-sans text-sm font-bold text-gold flex-shrink-0 ml-4">
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center px-6 py-5 bg-gold/10 border-t border-gold/30">
                <span className="font-serif font-bold text-cream">Valeur totale</span>
                <span className="font-serif font-black text-2xl text-gold">107€</span>
              </div>
            </div>
          </FadeIn>

          {/* PRIX */}
          <FadeIn delay={0.2}>
            <div className="bg-bg-alt border border-violet/40 rounded-2xl p-8 mb-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-violet-light mb-4">
                PRIX SPÉCIAL MAINTENANT
              </p>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="font-sans text-2xl text-muted line-through">
                  107€
                </span>
                <span className="font-serif text-5xl md:text-6xl font-black text-gold">
                  47€
                </span>
              </div>
              <p className="font-sans text-sm text-muted mb-6">
                Accès immédiat à l&apos;intégralité du guide + tous les outils
              </p>

              {/* RARETÉ */}
              <div className="bg-negative/10 border border-negative/30 rounded-xl px-6 py-4 mb-8">
                <p className="font-sans text-sm font-bold text-negative tracking-wide">
                  ⚠ SEULEMENT 50 PLACES DISPONIBLES
                </p>
                <p className="font-sans text-xs text-muted mt-1">
                  Pour maintenir la qualité du suivi et des mises à jour, le
                  nombre d&apos;accès est limité.
                </p>
              </div>

              <CTAButton
                label="Oui, je veux recalibrer mon cerveau — 47€"
                size="lg"
                className="w-full text-center justify-center"
              />
            </div>
          </FadeIn>

          {/* GARANTIES */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bg-alt border border-white/10 rounded-xl p-5 text-left">
                {/* Guarantee badge placeholder */}
                <div className="w-12 h-12 rounded-full bg-positive/20 border border-positive/30 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-positive">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm font-bold text-cream mb-2">
                  Droit de Rétractation — 14 jours
                </h4>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Conformément à la législation européenne, vous disposez de 14
                  jours à compter de votre achat pour demander un remboursement
                  complet, sans justification.
                </p>
              </div>

              <div className="bg-bg-alt border border-gold/20 rounded-xl p-5 text-left">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm font-bold text-cream mb-2">
                  Garantie de Résultat BreakYourCycle
                </h4>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Si après avoir complété les 3 phases vous n&apos;avez pas
                  identifié au moins 3 patterns spécifiques de votre cycle et un
                  protocole d&apos;action clair, je vous rembourse intégralement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
