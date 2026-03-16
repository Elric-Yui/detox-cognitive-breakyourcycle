import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const notForYou = [
  "Vous cherchez une \"guérison émotionnelle\" douce et bienveillante",
  "Vous voulez qu'on vous dise que \"ce n'est pas de votre faute\" sans analyser POURQUOI vous répétez le pattern",
  "Vous pensez que \"l'amour véritable\" doit être intense et souffrant",
  "Vous n'êtes pas prête à documenter factuellement vos relations passées",
];

const forYou = [
  "Vous êtes INFJ ou INFP et vous reconnaissez le pattern (même si vous n'êtes pas encore sortie de la relation)",
  "Vous cherchez une explication COGNITIVE, pas émotionnelle",
  "Vous voulez un diagnostic précis (\"Votre mécanisme est X activé par la faille Y\"), pas des généralités",
  "Vous êtes prête à faire le travail (3-4h de diagnostic, puis déconstruction dans les phases suivantes)",
];

const testimonials = [
  {
    name: "Mariane, 34 ans — INFJ",
    intro: "Parmi elles on peut citer Mariane qui parle des relations toxiques en disant :",
    quote:
      "Les INFJs peuvent rester trop longtemps dans des relations malsaines... parce qu'ils voient un potentiel profond. Apprendre à prioriser ses propres besoins est une étape clé.",
  },
  {
    name: "Daisy, 28 ans — INFP",
    intro: "Ou encore : Daisy, qui dit :",
    quote:
      "Je n'avais aucune idée que l'apprentissage des 8 fonctions changerait autant ma vie... Cela décrit exactement comment VOTRE cerveau fonctionne en tant qu'INFP.",
  },
  {
    name: "Cynthia, 41 ans — INFJ",
    intro: "Il y a aussi Cynthia qui découvre qu'elle n'est pas cassée mais juste INFJ :",
    quote:
      "Est-ce que qu'une autre s'est sentie complètement dysfonctionnelle et folle avant de s'intéresser aux types de personnalité et de découvrir qu'elle était INFJ ?",
  },
  {
    name: "Soraya, 31 ans — INFP",
    intro: "Je peux aussi vous parler de Soraya, qui parle de son incapacité à quitter les relations toxiques à cause de la boucle Ni-Ti :",
    quote:
      "Après une relation toxique, j'ai encore lutté pendant un an. Mais apprendre les fonctions cognitives a été une révélation... Cela m'a aidé à comprendre mes propres angles morts.",
  },
];

const notThis = [
  "Un ebook générique qui parle de MBTI et n'apporte aucune vraie valeur",
  "De la thérapie qui ne fait que ruminer le passé de manière lente",
  "Un programme de self-love avec des affirmations positives pour aller mieux",
];

const thisIs = [
  "Une cartographie complète et chirurgicale de votre câblage cognitif qui vous permettra de comprendre enfin définitivement et froidement pourquoi ces schémas toxiques se reproduisent toujours",
  "Une déconstruction totale de votre attachement émotionnel et cognitif à ces failles exploitées",
  "Une reconstruction de filtres, schémas et processus taillés spécifiquement pour les INFJ et les INFP afin de ne plus reproduire les mêmes schémas amoureux toxiques",
];

const phase1Components = [
  {
    num: "01",
    title: "UN TEST DE PROFIL COGNITIF RELATIONNEL",
    desc: "Ici on identifie votre mécanisme toxique dominant parmi 05 dimensions. C'est une version beaucoup plus complète avec analyse personnalisée, comparée à celle après le quiz que vous avez passé. Pas de fluff, pas de blabla, vous saurez exactement le mécanisme cognitif le plus prédominant chez vous.",
    value: "Valeur : 12€",
  },
  {
    num: "02",
    title: "La Matrice de Vulnérabilité",
    desc: "Vous connaîtrez les vulnérabilités structurelles de votre câblage cognitif. Vous identifierez celles qui raisonnent le plus avec vous afin de compléter la cartographie.",
    value: "Valeur : 10€",
  },
  {
    num: "03",
    title: "LE JOURNAL DE PATTERNS",
    desc: "On documentera factuellement vos anciennes relations, histoire de sortir noir sur blanc votre pattern toxique à vous.",
    value: "Valeur : 15€",
  },
  {
    num: "04",
    title: "LA CARTOGRAPHIE DE VOTRE CYCLE TOXIQUE PERSONNEL",
    desc: "Vous visualiserez pour la première fois de manière factuelle et rationnelle votre cycle toxique.",
    value: "Valeur : 10€",
  },
  {
    num: "05",
    title: "LE LIVRABLE FINAL : UN RAPPORT D'AUTO DIAGNOSTIC",
    desc: "Vous mettrez noir sur blanc, par vous même, une cartographie totale de votre câblage cognitif. Vous verrez clairement comment votre cerveau fonctionne et a fonctionné dans les relations toxiques passées.",
    value: "Valeur : 10€",
  },
];

const valueTable = [
  { item: "Phase 1 — Diagnostic Complet (5 composants)", value: "57€" },
  { item: "Phase 2 — Déconstruction de l'Attachement", value: "25€" },
  { item: "Phase 3 — Reconstruction & Nouveaux Filtres", value: "20€" },
  { item: "Bonus — Recalibrage à Vie", value: "15€" },
];

export default function Feature4Offer() {
  return (
    <section className="bg-bg">
      {/* PRODUCT NAME + MOCKUP */}
      <div className="py-20 px-4 text-center bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Je vous présente
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-cream leading-tight mb-6">
              DÉTOX COGNITIVE
            </h2>
            <p className="font-serif text-xl md:text-2xl text-gold italic mb-10">
              Diagnostic et Recalibrage pour INFJ/INFP
            </p>
          </FadeIn>

          {/* Book mockup */}
          <FadeIn delay={0.1}>
            <div className="w-56 md:w-64 mx-auto">
              <img
                src="/images/mockup-book.png"
                alt="DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ et INFP"
                className="w-full h-auto drop-shadow-[0_20px_60px_rgba(123,79,191,0.3)]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-sans text-base text-muted leading-relaxed max-w-xl mx-auto mt-8">
              DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP se base sur la méthode DBR (Diagnostiquer-Briser-Reconstruire) pour vous débarrasser de vos schémas amoureux toxiques et enfin retrouver la foi en l&apos;autre, et vivre un amour sain.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* PAS POUR VOUS / POUR VOUS */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Attention 💔 : CE MANUEL N&apos;EST PAS POUR TOUT LE MONDE.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-negative/8 border border-negative/20 rounded-xl p-6">
                <h3 className="font-sans font-bold text-negative uppercase tracking-wider text-sm mb-4">
                  Il n&apos;est pas pour vous si :
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
                  Il est pour vous si :
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
            <p className="font-sans text-base text-muted leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Et le plus intéressant dans tout ça, c&apos;est que la méthode n&apos;est pas juste vérifiée à travers les ouvrages et revues, ni à travers moi même, mais à travers des centaines et des centaines de personnes qui l&apos;ont essayée.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              La méthode DBR a été validée par des centaines de femmes comme vous et moi
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg border border-white/10 rounded-xl p-6 h-full flex flex-col gap-4">
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {t.intro}
                  </p>
                  <div className="border-l-4 border-gold pl-4 py-1 flex-1">
                    <p className="font-sans text-sm text-cream italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <p className="font-sans font-bold text-gold text-sm">— {t.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="font-sans text-base text-muted leading-relaxed text-center max-w-xl mx-auto mt-10">
              Comme vous pouvez le voir, c&apos;est une approche qui marche, ressentie par plusieurs femmes comme vous et moi.
            </p>
          </FadeIn>
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

          {/* CE QUE CE N'EST PAS */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4 mb-10">
              {notThis.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-negative/8 border border-negative/25 rounded-xl px-6 py-4">
                  <span className="flex-shrink-0 text-xl">❌</span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-negative font-bold mb-1">
                      Ce n&apos;est pas :
                    </p>
                    <p className="font-sans text-sm text-cream/80 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* SÉPARATEUR */}
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10" />
              <p className="font-serif text-base font-bold text-cream flex-shrink-0">C&apos;est plutôt</p>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </FadeIn>

          {/* CE QUE C'EST */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-4">
              {thisIs.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-positive/8 border border-positive/25 rounded-xl px-6 py-4">
                  <span className="flex-shrink-0 text-xl">✅</span>
                  <p className="font-sans text-sm text-cream leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* TEXTE EXCLUSIVITÉ */}
      <div className="py-20 px-4 bg-bg text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-sans text-base text-muted leading-relaxed mb-5">
              C&apos;est comme on l&apos;a vu dans les revues et ouvrages plus haut, scientifiquement fait et approprié pour vous et vous seul, pas pour les INTJ, ou les ENFP, ni même d&apos;autres types. Non, exclusivement vous les <span className="text-cream font-semibold">INFJ et INFP</span>.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Afin que vous vous sentiez en sécurité, de pouvoir être authentique et vulnérable sans crainte de jugement ou de manipulation.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* PHASE 1 COMPOSANTS */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream text-center mb-4">
              Ce qui sera fait dans DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP :
            </h2>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-gold text-center mb-4 mt-8">
              Phase 1 — Le Diagnostic Complet
            </h3>
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
                    <span className="font-sans text-xs font-semibold text-gold">
                      {comp.value}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Phase 2, 3, Bonus */}
          <FadeIn delay={0.5}>
            <p className="font-sans text-base text-muted leading-relaxed text-center mt-12 mb-8">
              Ce n&apos;est que la phase 1. Vous aurez également accès à :
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Phase 2",
                sub: "Déconstruction de l'Attachement",
                desc: "On fera la déconstruction de votre attachement émotionnel envers vos schémas toxiques. Elle est aussi composée de plein de composants comme ceux présentés dans la phase 1.",
                value: "Valeur : 25€",
              },
              {
                title: "Phase 3",
                sub: "Reconstruction & Nouveaux Filtres",
                desc: "On installera des nouveaux filtres et un système de détection automatique pour éviter de retomber dans ces schémas toxiques.",
                value: "Valeur : 20€",
              },
              {
                title: "Bonus",
                sub: "Recalibrage à Vie",
                desc: "Des outils spécialisés pour ancrer durablement votre recalibrage — exercices de maintenance, signaux d'alerte personnalisés et protocoles de réajustement pour rester alignée avec votre nouvelle version.",
                value: "Valeur : 15€",
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
                <span className="font-serif font-black text-2xl text-gold">117€</span>
              </div>
            </div>
          </FadeIn>

          {/* ACCROCHE PRIX */}
          <FadeIn delay={0.15}>
            <p className="font-sans text-base text-muted leading-relaxed text-center max-w-xl mx-auto mb-8">
              Incroyable, parce que pensez-y : Si pour 117€, vous pouvez totalement vous débarrasser de la sensation d&apos;être constamment vidée, de devoir gérer les émotions de l&apos;autre et de ne plus avoir d&apos;énergie pour vous même, je pense honnêtement que c&apos;est raisonnable.
            </p>
          </FadeIn>

          {/* PRIX */}
          <FadeIn delay={0.2}>
            <h3 className="font-serif text-2xl md:text-3xl font-black text-center mb-6">
              UN <span className="text-gold">PRIX SPÉCIAL</span> POUR UNIQUEMENT MAINTENANT
            </h3>
          </FadeIn>

          {/* JUSTIFICATION PRIX */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col gap-5 mb-10 max-w-2xl mx-auto text-center">
              <p className="font-sans text-base text-muted leading-relaxed">
                Je pourrais maintenir le prix à <span className="text-cream font-semibold">117€</span> sans problème. C&apos;est très raisonnable.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                Mais, mon objectif c&apos;est que le maximum d&apos;entre vous puisse en bénéficier.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                C&apos;est pourquoi je ne vous le ferez pas à 117€ mais à <span className="text-cream font-semibold">67€</span>.
              </p>
            </div>
          </FadeIn>

          {/* CE QUE VOUS OBTENEZ IMMÉDIATEMENT */}
          <FadeIn delay={0.3}>
            <div className="bg-bg-alt border border-white/10 rounded-2xl p-7 mb-8">
              <p className="font-sans text-sm font-bold text-cream uppercase tracking-wider mb-6 text-center">
                Une dernière chose.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6 text-center">
                Immédiatement après l&apos;obtention de DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP, voici ce que vous obtiendrez :
              </p>

              {/* Accès Phase 1 */}
              <div className="flex gap-4 items-start bg-positive/8 border border-positive/20 rounded-xl px-5 py-4 mb-4">
                <span className="text-xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-sans text-sm font-bold text-cream mb-3">
                    Accès immédiat à la Phase 1 complète (80 pages)
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Test de Profil cognitif relationnel",
                      "Matrice des 5 Failles MBTI",
                      "Journal de Patterns (3 relations)",
                      "Schéma de votre cycle toxique",
                      "Rapport d'auto-diagnostic 5 pages",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 font-sans text-xs text-muted">
                        <span className="text-gold flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accès Phases 2-3 */}
              <div className="flex gap-4 items-start bg-positive/8 border border-positive/20 rounded-xl px-5 py-4 mb-4">
                <span className="text-xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-sans text-sm font-bold text-cream mb-1">
                    Accès garanti aux Phases 2-3 et au bonus dès leur sortie
                  </p>
                  <p className="font-sans text-xs text-muted italic">
                    Les phases 2, 3 et le bonus vous seront livrées sous 30 jours max.
                  </p>
                </div>
              </div>

              {/* Feedback VIP */}
              <div className="flex gap-4 items-start bg-positive/8 border border-positive/20 rounded-xl px-5 py-4 mb-6">
                <span className="text-xl flex-shrink-0">✅</span>
                <p className="font-sans text-sm text-cream leading-relaxed">
                  <span className="font-bold">Feedback VIP :</span> En tant que early adopteuse, votre avis influencera le contenu final.
                </p>
              </div>

              {/* Note transparence */}
              <div className="bg-bg border border-white/10 rounded-xl px-5 py-4 mb-5">
                <p className="font-sans text-sm text-muted leading-relaxed mb-2">
                  Comme vous pouvez le constater, les phases 2 et 3 ainsi que le bonus ne seront pas immédiatement disponibles dès votre obtention de DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP.
                </p>
                <p className="font-sans text-xs italic text-muted/70 leading-relaxed">
                  (Ne vous inquiétez pas, vous avez de quoi faire avec le contenu de la phase 1, vous ne le sentirez même pas. En plus, si les phases 2, 3 et le Bonus ne sortent pas sous 30 jours, vous êtes remboursée intégralement plus vous gardez la phase 1 gratuitement.)
                </p>
              </div>

              {/* Réduction early adopteuse */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl px-5 py-4">
                <p className="font-sans text-sm text-muted leading-relaxed mb-3">
                  C&apos;est pourquoi, pour ceux qui prendront DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP maintenant, avant que les phases 2, 3 et le bonus ne sortent, bénéficieront de <span className="text-gold font-bold">30% de réduction</span>.
                </p>
                <p className="font-serif text-lg font-black text-center text-cream">
                  DETOX COGNITIVE vous revient donc à{" "}
                  <span className="text-gold">47€</span>{" "}
                  maintenant et uniquement maintenant.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 50 PLACES */}
          <FadeIn delay={0.3}>
            <div className="mb-10 max-w-2xl mx-auto text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-black text-cream mb-5">
                SEULEMENT <span className="text-gold">50 PLACES</span> DISPONIBLES
              </h3>
              <div className="flex flex-col gap-4 font-sans text-base text-muted leading-relaxed">
                <p>
                  Je veux m&apos;assurer de votre suivi personnellement, et de la qualité du service client que vous aurez. C&apos;est pourquoi je suis personnellement celle qui prendra en charge tous ceux qui mettront la main sur <span className="text-cream font-semibold">DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ / INFP</span>.
                </p>
                <p>
                  Voici pourquoi je n&apos;offre que 50 places. Je ne pourrai supporter plus de personnes.
                </p>
                <p>
                  Il n&apos;y a donc que <span className="text-cream font-semibold">50 personnes</span> qui pourront se procurer <span className="text-cream font-semibold">DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ / INFP</span> à <span className="text-gold font-bold">47€</span>.
                </p>
                <p>
                  Au moment où je rouvrirai les accès, le prix passera à <span className="text-cream font-semibold">67€</span>.
                </p>
                <p className="font-semibold text-cream">
                  Profitez-en donc maintenant.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* GARANTIES */}
          <FadeIn delay={0.35}>
            <div className="max-w-2xl mx-auto mb-10">
              {/* Titre */}
              <h3 className="font-serif text-3xl md:text-4xl font-black text-cream text-center mb-3">
                VOUS NE PRENEZ <span className="text-positive">AUCUN RISQUE</span>
              </h3>
              <p className="font-sans text-base text-muted text-center leading-relaxed mb-8">
                Votre achat est protégé par une double garantie très solide.
              </p>

              {/* Garantie 1 — Rétractation légale */}
              <div className="bg-bg-alt border border-positive/30 rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-positive/20 border border-positive/40 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-positive">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-cream">
                    Votre Droit de Rétractation
                  </h4>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  Vous êtes d&apos;abord protégée par la loi. Vous avez un droit de rétractation :
                </p>
                <blockquote className="border-l-2 border-positive/50 pl-4 italic font-sans text-sm text-muted/80 leading-relaxed">
                  &ldquo;Le droit de rétractation permet au consommateur de changer d&apos;avis après un achat à distance (internet, téléphone) ou hors établissement, offrant un délai de <span className="text-positive font-semibold not-italic">14 jours calendaires</span> pour annuler sa commande sans justification.&rdquo;
                </blockquote>
              </div>

              {/* Garantie 2 — BreakYourCycle */}
              <div className="bg-bg-alt border border-gold/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-cream">
                    Ma Garantie <span className="text-gold">BREAK YOUR CYCLE</span>
                  </h4>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Je suis tellement convaincue de la méthode que si vous obtenez{" "}
                  <span className="text-cream font-semibold">DETOX COGNITIVE : Diagnostic et Recalibrage pour INFJ / INFP</span>,
                  vous l&apos;appliquez, et ne constatez aucun changement dans un délai de{" "}
                  <span className="text-gold font-semibold">1 mois</span>, je vous rembourse la{" "}
                  <span className="text-cream font-semibold">totalité du prix</span> — et vous pouvez même garder le guide.
                </p>
                <div className="flex justify-center mt-6">
                  <img
                    src="/images/guarantee-badge.png"
                    alt="BreakYourCycle — Satisfaction Guaranteed"
                    className="w-28 md:w-36 h-auto"
                  />
                </div>
              </div>

              {/* Phrase finale choc */}
              <div className="bg-negative/10 border border-negative/30 rounded-xl px-6 py-5 text-center">
                <p className="font-serif text-base font-bold text-cream leading-relaxed">
                  Le seul risque que vous prenez, c&apos;est de rester coincée dans le même cycle pendant encore{" "}
                  <span className="text-negative">2 ans</span>.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="font-serif text-3xl md:text-4xl font-black text-cream text-center mb-8">
              DÉBARRASSEZ VOUS ENFIN DE VOS <span className="text-gold">SCHÉMAS AMOUREUX TOXIQUES</span>
            </h3>
            <div className="bg-bg-alt border border-violet/40 rounded-2xl overflow-hidden mb-8">
              {/* Contenu principal : image + séparateur + détails */}
              <div className="flex flex-col md:flex-row">

                {/* Image produit */}
                <div className="md:w-[45%] bg-bg flex items-center justify-center p-8 md:p-14 min-h-[280px] md:min-h-[480px]">
                  <img
                    src="/images/mockup-book.png"
                    alt="DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ et INFP"
                    className="w-full max-w-[220px] md:max-w-[300px] h-auto drop-shadow-[0_10px_30px_rgba(123,79,191,0.3)]"
                  />
                </div>

                {/* Séparateur vertical */}
                <div className="hidden md:block w-px bg-violet/20 my-8" />

                {/* Contenu texte */}
                <div className="md:w-[55%] p-6 md:p-10 md:py-12">
                  <p className="font-serif text-base md:text-lg font-bold text-gold mb-5 md:mb-6 tracking-wide">
                    Ce que vous obtiendrez :
                  </p>

                  {/* Phase 1 */}
                  <p className="font-sans text-xs md:text-sm text-muted uppercase tracking-widest mb-3">
                    La cartographie mentale de vos schémas — Phase 1 (80 pages)
                  </p>
                  <ul className="flex flex-col gap-1.5 md:gap-3 mb-6 md:mb-8">
                    {[
                      "COMPOSANT 1 : LE TEST DE PROFIL COGNITIF RELATIONNEL",
                      "COMPOSANT 2 : LA MATRICE DE VULNÉRABILITÉ",
                      "COMPOSANT 3 : LE JOURNAL DE PATTERNS",
                      "COMPOSANT 4 : LA CARTOGRAPHIE DE VOTRE CYCLE TOXIQUE PERSONNEL",
                      "COMPOSANT 5 : LE RAPPORT D'AUTO DIAGNOSTIC",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-3">
                        <span className="text-positive mt-0.5 shrink-0">✓</span>
                        <span className="font-sans text-xs md:text-sm text-cream leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Phases 2, 3, Bonus */}
                  <ul className="flex flex-col gap-1.5 md:gap-3 mb-6 md:mb-8">
                    {[
                      "LA DÉCONSTRUCTION DE VOTRE ATTACHEMENT ÉMOTIONNEL À VOS SCHÉMAS TOXIQUES (PHASE 2)",
                      "LES NOUVEAUX FILTRES ET LE SYSTÈME DE DÉTECTION AUTOMATIQUE (PHASE 3)",
                      "LA MAINTENANCE DE VOTRE RECALIBRAGE À VIE (BONUS)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-3">
                        <span className="text-gold mt-0.5 shrink-0">✦</span>
                        <span className="font-sans text-xs md:text-sm text-cream leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="font-sans text-xs md:text-sm italic text-muted/70 border-t border-white/10 pt-4">
                    Les phases 2, 3 et le bonus seront accessibles sous 30 jours.
                  </p>
                </div>
              </div>

              {/* Prix + CTA */}
              <div className="border-t border-violet/20 px-8 py-8 text-center">

                {/* TOUT ÇA POUR */}
                <p className="font-sans text-xs text-muted uppercase tracking-widest mb-4">
                  Tout ça pour :
                </p>
                <div className="flex items-center justify-center gap-5 mb-6">
                  <span className="font-sans text-2xl text-muted line-through">117€</span>
                  <span className="font-sans text-muted text-xl">→</span>
                  <span className="font-serif text-6xl md:text-7xl font-black text-gold">47€</span>
                </div>

                {/* CTA */}
                <CTAButton
                  label="OBTENIR MON GUIDE"
                  size="lg"
                  className="w-full text-center justify-center mb-8"
                />

                {/* RARETÉ */}
                <div className="bg-negative/10 border border-negative/30 rounded-xl px-6 py-4 mb-8">
                  <p className="font-sans text-sm font-black text-negative tracking-wide uppercase">
                    ⚠ Attention : Seulement 50 places disponibles
                  </p>
                  <p className="font-sans text-xs text-muted/80 mt-1 italic">
                    elles partiront vite
                  </p>
                </div>

                {/* DOUBLE GARANTIE */}
                <div className="text-left">
                  <p className="font-serif text-sm font-bold text-cream text-center mb-4 tracking-wide">
                    DOUBLE GARANTIE BREAK YOUR CYCLE
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-positive font-bold text-base shrink-0 mt-0.5">✓</span>
                      <span className="font-sans text-sm text-muted leading-relaxed">
                        Remboursement sans questions, sans conditions sous{" "}
                        <span className="text-cream font-semibold">14 jours</span> suivant l&apos;achat.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-positive font-bold text-base shrink-0 mt-0.5">✓</span>
                      <span className="font-sans text-sm text-muted leading-relaxed">
                        Remboursement intégral si la méthode ne fonctionne pas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
