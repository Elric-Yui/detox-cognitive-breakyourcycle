import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const resources = [
  "La psychologie des relations toxiques (Susan Forward, Lundy Bancroft)",
  "Les schémas précoces maladaptatifs (Jeffrey Young)",
  "Les fonctions cognitives MBTI (Dario Nardi, Linda Berens)",
  "Le conditionnement opérant (B.F. Skinner)",
  "Le trauma bonding (Patrick Carnes)",
  "Les neurosciences de l'attachement (Amir Levine)",
];

const failles = [
  {
    func: "Mon Ni",
    mechanism: "voyait son potentiel, pas sa réalité",
    consequence: "Je restais pour une version de lui qui n'existait pas",
  },
  {
    func: "Mon Fe",
    mechanism: "absorbait ses émotions",
    consequence: "Sa colère devenait MA douleur, donc je faisais tout pour le calmer",
  },
  {
    func: "Mon Ti faible",
    mechanism: "rationalisait ses comportements",
    consequence: "\"C'est logique qu'il agisse ainsi vu son passé traumatique\"",
  },
  {
    func: "Mon Se inférieur",
    mechanism: "ignorait les signaux physiques",
    consequence: "J'étais épuisée, malade, mais je ne \"voyais\" pas mon propre corps crier \"FUIS\"",
  },
  {
    func: "Mon besoin de sens (Ni)",
    mechanism: "transformait la toxicité en \"connexion profonde\"",
    consequence: "Plus c'était intense, plus je croyais que c'était \"vrai\"",
  },
];

const phases = [
  { num: "0", label: "La rencontre", desc: "avec les red flags ignorés" },
  { num: "1", label: "Love Bombing", desc: "dopamine, sentiment d'élection" },
  { num: "2", label: "Tension montante", desc: "marcher sur des œufs" },
  { num: "3", label: "Explosion", desc: "choc, gaslighting" },
  { num: "4", label: "Silence punitif", desc: "panique, auto-accusation" },
  { num: "5", label: "Hoovering", desc: "soulagement, espoir" },
  { num: "6", label: "Faux calme", desc: "hypervigilance, censure" },
];

const results = [
  "J'ai rencontré quelqu'un. Connexion réelle, pas intensité artificielle.",
  "Quand il a dit \"je t'aime\" après 2 semaines, mon Ni a allumé un signal d'alarme au lieu d'un sapin de Noël.",
  "Quand il a essayé de critiquer subtilement mes amis, j'ai posé une limite claire. Il a respecté.",
  "Quand on a eu notre première vraie dispute (saine), je n'ai pas paniqué. Je n'ai pas absorbé sa frustration comme si c'était la mienne. J'ai écouté, puis j'ai exprimé mes besoins.",
  "Et vous savez quoi ? Il n'a pas disparu. Il n'a pas boudé. On a RÉSOLU le problème comme deux adultes.",
];

const scientificBases = [
  {
    name: "La Thérapie des Schémas",
    author: "Jeffrey Young, PhD — Yale",
    desc: "Les 18 schémas précoces maladaptatifs, dont Carence Émotionnelle, Abandon/Instabilité, et Assujettissement",
  },
  {
    name: "Les Fonctions Cognitives MBTI",
    author: "Carl Jung, Isabel Myers, Dario Nardi (neurosciences)",
    desc: "Comment Ni, Fe, Ti, Se interagissent pour créer des vulnérabilités spécifiques",
  },
  {
    name: "Le Conditionnement Opérant",
    author: "B.F. Skinner",
    desc: "Pourquoi la validation intermittente crée une dépendance biochimique plus forte que la récompense constante",
  },
  {
    name: "Les Neurosciences de l'Attachement",
    author: "Amir Levine — \"Attached\"",
    desc: "Comment l'attachement anxieux active la panique à la moindre distance perçue",
  },
  {
    name: "Le Trauma Bonding",
    author: "Patrick Carnes",
    desc: "Le lien paradoxal qui se crée entre victime et abuseur via les cycles d'intensité",
  },
];

export default function Feature3Mechanism() {
  return (
    <section className="bg-bg-alt">

      {/* TITRE + INTRO RECHERCHE */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-10">
              Une obsession de comprendre.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-serif text-xl md:text-2xl font-bold text-gold mb-10 leading-snug">
              POURQUOI est-ce que j&apos;étais retournée 6 fois vers quelqu&apos;un qui me détruisait ?
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              J&apos;ai passé 4 mois à lire tout ce que je pouvais trouver :
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="flex flex-col gap-3 mb-10">
              {resources.map((r, i) => (
                <li key={i} className="flex gap-3 items-start font-sans text-sm text-cream/80 leading-relaxed">
                  <span className="flex-shrink-0 text-gold font-bold">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="bg-bg border border-gold/20 rounded-xl p-6 mb-8">
              <p className="font-sans text-base text-muted leading-relaxed mb-3">
                99% de ces ressources sont en anglais (je remercie cet été où j&apos;ai décidé de devenir fluente en anglais). En français, il n&apos;existe <span className="text-cream font-semibold">RIEN</span> qui connecte MBTI + relations toxiques de manière clinique.
              </p>
              <p className="font-sans text-sm italic text-muted/70 leading-relaxed">
                Juste des articles génériques sur &ldquo;comment reconnaître un manipulateur&rdquo; (spoiler : ça ne sert à rien si vous ne comprenez pas POURQUOI votre cerveau ignore les signaux).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Un soir, en croisant mes lectures sur les fonctions cognitives et les schémas toxiques, j&apos;ai eu un déclic.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-2">Ce n&apos;était pas &ldquo;moi&rdquo; le problème.</p>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              Ce n&apos;était pas &ldquo;lui&rdquo; non plus (enfin, si, mais ce n&apos;est pas le point ici).
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="border-l-4 border-gold pl-6 py-2 mb-12">
              <p className="font-serif text-lg md:text-xl font-bold text-cream leading-relaxed">
                Le problème, c&apos;était l&apos;interaction entre MON câblage cognitif INFJ et SA stratégie de manipulation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* LES 5 FAILLES */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              J&apos;ai identifié 5 failles structurelles dans mon fonctionnement :
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-xl mx-auto text-sm">
              Ce ne sont pas des défauts. Ce sont des mécanismes cognitifs que votre type MBTI possède par défaut.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {failles.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 font-serif text-3xl font-black text-gold/25 w-8">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <span className="inline-block font-sans text-xs uppercase tracking-widest text-gold font-bold mb-3">
                        {f.func}
                      </span>
                      <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 bg-bg rounded-lg p-4">
                          <p className="font-sans text-xs text-muted uppercase tracking-wider mb-2">Mécanisme</p>
                          <p className="font-sans text-sm text-cream leading-relaxed font-medium">{f.mechanism}</p>
                        </div>
                        <div className="flex items-center justify-center text-gold/40 text-xl flex-shrink-0">→</div>
                        <div className="flex-1 bg-negative/10 border border-negative/20 rounded-lg p-4">
                          <p className="font-sans text-xs text-negative uppercase tracking-wider mb-2">Conséquence</p>
                          <p className="font-sans text-sm text-cream/90 leading-relaxed italic">{f.consequence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <p className="font-sans text-base text-muted leading-relaxed mb-4">
                Ces 5 failles ne sont PAS des défauts de personnalité.
              </p>
              <p className="font-serif text-lg md:text-xl font-bold text-cream max-w-2xl mx-auto leading-snug">
                Ce sont des vulnérabilités structurelles de mon type MBTI que les profils toxiques exploitent systématiquement (consciemment ou inconsciemment).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 bg-bg-alt border border-white/10 rounded-xl p-6 text-center">
              <p className="font-sans text-base text-muted leading-relaxed">
                Et je n&apos;étais pas seule. En parcourant des forums, des communautés où d&apos;autres INFJ/INFP étaient, j&apos;ai réalisé qu&apos;on vivait <span className="text-cream font-semibold">TOUTES le même pattern.</span>
              </p>
              <p className="font-sans text-sm italic text-muted/70 mt-3">
                Même cycle. Mêmes justifications. Même prison mentale.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3 BESOINS */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-base text-muted leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              Des livres, articles, études, documents que j&apos;ai lus, il en ressortait que j&apos;avais besoin de 3 choses pour vraiment sortir du cycle :
            </p>
          </FadeIn>

          {/* Besoin 1 */}
          <FadeIn delay={0.1}>
            <div className="mb-10 bg-bg-alt border border-gold/20 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-bold text-gold text-sm">1</span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-gold">
                  IDENTIFIER mon mécanisme toxique dominant
                </h3>
              </div>
              <p className="font-sans text-sm text-muted mb-4 italic">
                Pas &ldquo;je suis une personne qui attire les narcissiques&rdquo;.
              </p>
              <p className="font-sans text-sm text-muted mb-4">Non.</p>
              <div className="bg-bg border border-white/10 rounded-lg p-4">
                <p className="font-sans text-sm text-cream leading-relaxed italic">
                  &ldquo;Mon mécanisme dominant est l&apos;Idéalisation (Ni projectif), activé par la faille Complexe du Sauveur (Ni-Fe), ce qui crée un cycle où je m&apos;investis pour transformer des versions fantasmées qui n&apos;existeront jamais.&rdquo;
                </p>
              </div>
              <p className="font-sans text-sm font-bold text-gold mt-4 tracking-wide">
                PRÉCIS. FACTUEL. DIAGNOSTIC.
              </p>
            </div>
          </FadeIn>

          {/* Besoin 2 */}
          <FadeIn delay={0.2}>
            <div className="mb-10 bg-bg-alt border border-violet/20 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center font-bold text-violet-light text-sm">2</span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-cream">
                  DOCUMENTER mes patterns répétitifs
                </h3>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed mb-3">
                J&apos;ai analysé mes 3 dernières relations selon 12 critères objectifs.
              </p>
              <p className="font-sans text-sm text-cream font-semibold mb-3">
                Et j&apos;ai VU le pattern. Noir sur blanc. Factuel.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Les mêmes comportements. Les mêmes signaux ignorés. Les mêmes phases du cycle.
              </p>
            </div>
          </FadeIn>

          {/* Besoin 3 — 7 phases */}
          <FadeIn delay={0.3}>
            <div className="mb-10 bg-bg-alt border border-positive/20 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-positive/20 border border-positive/40 flex items-center justify-center font-bold text-positive text-sm">3</span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-cream">
                  VISUALISER mon cycle toxique personnel
                </h3>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                J&apos;ai cartographié les 7 phases qui se répétaient :
              </p>

              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                <div className="flex flex-col gap-3">
                  {phases.map((phase, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bg border border-gold/30 flex items-center justify-center relative z-10 -ml-4">
                        <span className="font-serif font-bold text-gold text-xs">{phase.num}</span>
                      </div>
                      <div className="bg-bg rounded-lg px-4 py-2.5 flex-1">
                        <span className="font-sans text-sm font-semibold text-cream">{phase.label} </span>
                        <span className="font-sans text-xs text-muted italic">— {phase.desc}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink-0 w-8 flex justify-center -ml-2">
                      <span className="text-gold text-lg">↻</span>
                    </div>
                    <p className="font-sans text-xs text-gold italic">Retour Phase 2</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-sans text-base text-muted leading-relaxed mb-6 text-center">
              Une fois que j&apos;ai vu la boucle, je ne pouvais plus la &ldquo;dé-voir&rdquo;.
            </p>
            <div className="text-center">
              <p className="font-serif text-lg md:text-xl font-bold text-cream max-w-xl mx-auto leading-snug">
                Mon cerveau a enfin compris : Ce n&apos;est pas de l&apos;amour. C&apos;est un système de contrôle programmé.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* RÉSULTATS 6 MOIS */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-10">
              6 mois après avoir complété ce diagnostic :
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4 mb-12">
            {results.map((r, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-3 items-start p-4 bg-positive/8 border border-positive/20 rounded-lg">
                  <span className="text-positive font-bold flex-shrink-0">✓</span>
                  <p className="font-sans text-sm text-cream leading-relaxed">{r}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mb-10">
              <p className="font-serif text-xl md:text-2xl font-bold text-gold italic">
                &ldquo;Je n&apos;avais jamais connu ça.&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="font-sans text-base text-muted leading-relaxed mb-3 text-center">
              Parce que mon système de navigation était enfin recalibré.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { before: "l'intensité", after: "la sécurité" },
                { before: "le \"potentiel\"", after: "la réalité" },
                { before: "la \"connexion profonde\"", after: "la compatibilité réelle" },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.6 + i * 0.07}>
                  <div className="bg-bg-alt border border-white/10 rounded-xl p-5 text-center">
                    <p className="font-sans text-xs text-muted mb-2">Je ne cherchais plus</p>
                    <p className="font-sans text-sm text-negative line-through mb-3 italic">{item.before}</p>
                    <p className="font-sans text-xs text-muted mb-2">Je cherchais</p>
                    <p className="font-sans text-sm text-positive font-semibold">{item.after}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* TRANSITION VERS LE PRODUIT */}
      <div className="py-20 px-4 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Après avoir raconté mon histoire et le procéssus à d&apos;autres INFJ/INFP sur les mêmes forums que je parcourais, j&apos;ai réalisé que tout le monde demandait la même chose :
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-l-4 border-gold pl-6 py-3 mb-10">
              <p className="font-sans text-lg italic text-cream">
                &ldquo;Comment tu as fait EXACTEMENT ?&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-base text-muted leading-relaxed mb-3">
              Parce que lire des livres sur les narcissiques ne suffit pas.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              Parce que les conseils génériques (&ldquo;pose des limites&rdquo;, &ldquo;aime-toi d&apos;abord&rdquo;) ne fonctionnent pas quand votre Fe ne sait même pas où commencent VOS émotions.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-serif text-lg md:text-xl font-bold text-cream mb-8">
              Il fallait un système de diagnostic adapté au câblage INFJ/INFP.
            </p>
            <div className="flex flex-col gap-2 mb-8 pl-4">
              <p className="font-sans text-sm text-muted italic">— Pas de la thérapie (c&apos;est utile, mais c&apos;est un autre sujet).</p>
              <p className="font-sans text-sm text-muted italic">— Pas du développement personnel vague (ça ne règle pas les failles structurelles).</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="font-sans text-base text-muted mb-3">Non. Mais plutôt :</p>
            <div className="text-center py-8">
              <p className="font-serif text-2xl md:text-3xl font-bold text-gold">
                Un manuel d&apos;utilisation de votre propre cerveau.
              </p>
            </div>
            <p className="font-sans text-base text-muted leading-relaxed text-center">
              Et c&apos;est ce que j&apos;ai créé. La fameuse méthode DBR dont je parlais plus haut.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center bg-bg border border-gold/20 rounded-2xl px-8 py-6">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">La méthode</p>
              <p className="font-serif text-xl md:text-2xl font-black text-cream">
                DBR : Diagnostic — Briser — Reconstruire
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* BASES SCIENTIFIQUES */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              Ce manuel n&apos;est pas basé sur mon unique expérience personnelle
            </h2>
            <p className="font-sans text-muted text-center mb-12 max-w-2xl mx-auto">
              (bien qu&apos;il ait très bien marché sur moi). Il est backé par entre autres :
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {scientificBases.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-bg-alt border border-white/10 rounded-xl p-5 h-full">
                  <h4 className="font-serif text-base font-bold text-gold mb-1">{b.name}</h4>
                  <p className="font-sans text-xs italic text-gold/60 mb-3">{b.author}</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="bg-bg-alt border border-white/10 rounded-xl p-6 mb-10">
              <p className="font-sans text-base text-muted leading-relaxed mb-3">
                99% de ces études et recherches ne sont disponibles qu&apos;en anglais.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                J&apos;ai passé 200+ heures à tout croiser, traduire, adapter au ton et style INFJ/INFP, afin que ce soit facile et rapide pour vous.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="bg-bg border border-gold/30 rounded-2xl px-8 py-8 text-center">
              <p className="font-sans text-base text-muted leading-relaxed mb-6">
                Vous n&apos;avez donc pas besoin de faire ces 200 heures (voire plus, si on compte trouver les documents, devenir fluente en anglais, créer votre propre manuel d&apos;utilisation de votre cerveau, etc.)
              </p>
              <p className="font-serif text-xl md:text-2xl font-bold text-gold mb-2">
                200+ heures condensées
              </p>
              <p className="font-sans text-muted">
                en un système de diagnostic de 4 phases que vous pouvez compléter en 3–4 heures.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
