import FadeIn from "@/components/ui/FadeIn";

const cycleSteps = [
  "Il disparaissait. Aucune nouvelle pendant 3-4 jours.",
  "Je paniquais. Je lui envoyais des messages. Je m'excusais (même quand je n'avais rien fait).",
  "Il finissait par revenir avec : « J'ai eu besoin de réfléchir. Tu m'as blessé, mais je t'aime trop pour abandonner. »",
  "Je ressentais un SOULAGEMENT biochimique. « Il est revenu. Il m'aime encore. »",
  "On avait 1-2 semaines de « normalité ».",
  "Puis une nouvelle dispute. Pour un détail. Une phrase mal interprétée. Un regard.",
];

const sacrifices = [
  "J'ai petit à petit arrêté de voir mes amies assez souvent (il disait qu'ils « ne nous comprenaient pas »).",
  "J'ai abandonné beaucoup de mes hobbies (il trouvait toujours que je ne passais pas assez de temps avec lui).",
  "J'ai commencé à censurer mes propres pensées (« Est-ce que je peux dire ça sans qu'il le prenne mal ? »).",
];

const brainExcuses = [
  "« Si je pars maintenant, tous mes efforts seront perdus. »",
  "« Il a juste besoin de temps pour guérir ses blessures. »",
  "« Je suis la seule qui le comprend vraiment. »",
];

export default function Feature2Story() {
  return (
    <section className="bg-bg py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Transition block */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-sans text-lg md:text-xl text-muted leading-relaxed mb-6">
              Votre cerveau n&apos;est pas cassé, il est simplement mal configuré pour les environnements toxiques. Vous avez besoin d&apos;une mise à jour logicielle pour que votre câblage reprenne le contrôle.
            </p>
            <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
            <p className="font-sans text-base text-cream font-medium leading-relaxed">
              Continuez à lire encore un tout petit peu, et vous verrez que la méthode DBR est celle qui allie les 03 nécessités de votre cerveau.
            </p>
          </div>
        </FadeIn>

        {/* Séparateur */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold flex-shrink-0">Présentation</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </FadeIn>

        {/* Présentation */}
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-6">
            Mais avant tout, laissez moi rapidement me présenter
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Je suis BreakYourCycle et j&apos;aide les INFJ/INFP qui sont piégés dans des schémas amoureux toxiques, à enfin les briser et avoir la connexion émotionnelle saine qu&apos;ils méritent avec un partenaire.
          </p>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="font-sans text-base text-cream font-semibold leading-relaxed mb-12">
            Pourquoi ? Lisez bien ce qui va suivre, vous vous reconnaitrez peut être :
          </p>
        </FadeIn>

        {/* Titre choc */}
        <FadeIn delay={0.16}>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-negative text-center my-12 leading-tight">
            MA DEUXIÈME RELATION M&apos;A PRESQUE DÉTRUITE.
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Et ce qui fait le plus mal, c&apos;est que j&apos;avais vu les signaux dès le début. Je les avais vus, analysés, rationalisés, puis ignorés. Parce que mon cerveau INFJ avait décidé que cette fois, c&apos;était différent.
          </p>
          <p className="font-sans text-base text-cream font-medium leading-relaxed mb-8">
            Cette fois, c&apos;était &ldquo;la bonne personne&rdquo;.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-base text-gold font-semibold mb-8">Laissez-moi vous raconter.</p>
        </FadeIn>

        {/* La rencontre */}
        <FadeIn delay={0.22}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            On s&apos;est rencontrés lors d&apos;un événement commun. Il m&apos;a abordée avec une question profonde sur un sujet de philosophie.
          </p>
          <p className="font-sans text-sm text-muted/70 italic mb-2">Pas &ldquo;tu fais quoi dans la vie ?&rdquo; ou &ldquo;tu viens souvent ici ?&rdquo;.</p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Non. Une VRAIE conversation. Le genre que j&apos;adore / que j&apos;attendais depuis toujours / que les gens comme nous aiment/adorent.
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            On a parlé pendant 4 heures. De tout. De nos blessures d&apos;enfance, de nos rêves, de ce qu&apos;on cherchait dans la vie.
          </p>
        </FadeIn>

        <FadeIn delay={0.26}>
          <div className="border-l-4 border-violet pl-6 py-3 my-8">
            <p className="font-sans text-base italic text-cream leading-relaxed">
              &ldquo;J&apos;ai l&apos;impression de te connaître depuis toujours. C&apos;est fou.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.28}>
          <p className="font-sans text-base text-cream font-medium leading-relaxed mb-6">
            Enfin quelqu&apos;un qui me COMPREND.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Il m&apos;a demandé mon numéro, puis m&apos;a envoyé 15 messages cette nuit-là (premier red flag que j&apos;ai ignoré). Des longs messages. Sur nous. Sur notre &ldquo;connexion spéciale&rdquo;.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-bg-alt border border-white/10 rounded-xl px-6 py-4 mb-8">
            <p className="font-sans text-sm italic text-muted leading-relaxed">
              Mon cerveau a interprété ça comme : &ldquo;Il ressent la même intensité que moi. C&apos;est un signe.&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Love bombing */}
        <FadeIn delay={0.32}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Les 2 premiers mois ont été parfaits. Trop parfaits.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Il m&apos;envoyait des messages toutes les heures. &ldquo;Tu me manques.&rdquo; &ldquo;Je pense à toi.&rdquo; &ldquo;Personne ne m&apos;a jamais comprise comme toi.&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Il voulait me voir tous les jours. Quand je disais que j&apos;avais besoin d&apos;une soirée seule, il répondait : &ldquo;Bien sûr, je comprends. Tu es tellement authentique.&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Après 3 semaines, il m&apos;a dit &ldquo;je t&apos;aime&rdquo;.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Après 6 semaines, il parlait de notre futur ensemble. Mariage. Enfants. La maison qu&apos;on achèterait.
          </p>
        </FadeIn>

        <FadeIn delay={0.34}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Mon entourage a commencé à dire : &ldquo;C&apos;est pas un peu rapide ?&rdquo; Et moi, j&apos;ai DÉFENDU la relation.
          </p>
          <div className="border-l-4 border-white/20 pl-6 py-2 my-6">
            <p className="font-sans text-sm italic text-muted/80 leading-relaxed">
              &ldquo;Vous ne comprenez pas. Notre connexion est différente. On n&apos;a pas besoin de jouer aux jeux stupides comme les autres couples.&rdquo;
            </p>
          </div>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Je me souviens avoir pensé : &ldquo;J&apos;ai trouvé mon âme sœur.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.36}>
          <p className="font-sans text-sm italic text-muted/60 text-center my-8">
            (Spoiler alert : Ce n&apos;était pas mon âme sœur. C&apos;était un Love Bombing classique. Mais je ne le savais pas encore.)
          </p>
        </FadeIn>

        {/* La chute */}
        <FadeIn delay={0.38}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Puis, quelque chose a changé. Subtilement d&apos;abord. Il a commencé à comparer. &ldquo;Mon ex cuisinait super bien.&rdquo; (Sous-texte : Toi, pas vraiment.)
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Il a commencé à critiquer mes amis. &ldquo;Je comprends pas pourquoi tu perds ton temps avec des gens aussi superficiels.&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Quand je parlais de mes projets, il écoutait à moitié, puis changeait de sujet pour parler de lui.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-sans text-base text-cream font-semibold leading-relaxed mb-6">
            Et moi ? Je me demandais : &ldquo;Qu&apos;est-ce que j&apos;ai fait de mal ?&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            J&apos;ai commencé à surveiller son humeur. À adapter mon comportement. À être &ldquo;plus facile à vivre&rdquo;.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            J&apos;annulais mes rendez-vous si je sentais qu&apos;il avait besoin de moi. Je cuisinais mieux. Je rigolais à ses blagues même quand elles n&apos;étaient pas drôles.
          </p>
          <p className="font-sans text-base text-cream font-medium mb-4">Je marchais sur des œufs.</p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Et je me disais : &ldquo;C&apos;est normal. Toutes les relations passent par une phase d&apos;adaptation.&rdquo;
          </p>
        </FadeIn>

        {/* Première dispute */}
        <FadeIn delay={0.42}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            La première grosse dispute est arrivée à cause de... rien. J&apos;avais répondu 2h en retard à son message parce que j&apos;étais en réunion.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Il m&apos;a appelée 8 fois. Puis m&apos;a envoyé : &ldquo;C&apos;est clair que je ne suis pas ta priorité.&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Quand je l&apos;ai rappelé, il a explosé.
          </p>
        </FadeIn>

        <FadeIn delay={0.44}>
          <div className="border-l-4 border-negative pl-6 py-3 my-8">
            <p className="font-sans text-base italic text-cream leading-relaxed">
              &ldquo;Tu es égoïste. Tu penses toujours à toi. Je fais TOUT pour cette relation et toi tu ne fais RIEN.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.46}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            J&apos;étais sous le choc. C&apos;était la première fois qu&apos;il me parlait comme ça.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Et vous devinez déjà ce que j&apos;ai fait…
          </p>
          <p className="font-sans text-base text-cream font-semibold mb-4">Je me suis excusée.</p>
          <div className="border-l-4 border-white/20 pl-6 py-2 mb-8">
            <p className="font-sans text-sm italic text-muted/80 leading-relaxed">
              &ldquo;Tu as raison. Je suis désolée. J&apos;aurais dû te prévenir. Ça ne se reproduira plus.&rdquo;
            </p>
          </div>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Après cette dispute, il est redevenu gentil pendant quelques jours. Et moi, j&apos;ai cru que &ldquo;la crise était passée&rdquo;.
          </p>
        </FadeIn>

        {/* Le cycle */}
        <FadeIn delay={0.48}>
          <p className="font-sans text-base text-cream font-semibold mb-5">
            Après chaque dispute, le même schéma :
          </p>
          <div className="bg-negative/10 border border-negative/20 rounded-xl p-6 mb-8">
            <ol className="flex flex-col gap-3">
              {cycleSteps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start font-sans text-sm text-cream/90 leading-relaxed">
                  <span className="flex-shrink-0 font-bold text-negative mt-0.5">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Chaque fois, je me disais : &ldquo;Cette fois, c&apos;est la dernière. Je vais faire plus attention.&rdquo;
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Chaque fois, je sacrifiais un peu plus de moi-même.
          </p>
        </FadeIn>

        {/* Les sacrifices */}
        <FadeIn delay={0.52}>
          <ul className="flex flex-col gap-3 mb-10">
            {sacrifices.map((item, i) => (
              <li key={i} className="flex gap-3 items-start font-sans text-sm text-muted leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-muted/40 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Réveil */}
        <FadeIn delay={0.54}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Après 18 mois dans ce cycle, ma meilleure amie m&apos;a dit :
          </p>
          <div className="border-l-4 border-gold pl-6 py-3 my-8">
            <p className="font-sans text-base italic text-cream leading-relaxed">
              &ldquo;Tu sais que tu n&apos;es plus la même personne, hein ? Tu ne ris plus. Tu es toujours stressée. Tu vérifies ton téléphone toutes les 2 minutes. Ce n&apos;est pas de l&apos;amour, ça.&rdquo;
            </p>
          </div>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Je me suis défendue (comme toujours).
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Mais cette nuit-là, je n&apos;ai pas dormi.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Parce que j&apos;ai réalisé quelque chose de terrifiant :
          </p>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.56}>
          <div className="text-center my-12">
            <p className="font-serif text-2xl md:text-3xl font-bold text-cream italic leading-tight max-w-2xl mx-auto">
              &ldquo;Je ne reconnaissais plus la personne que j&apos;étais devenue.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.58}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            J&apos;avais 31 ans. J&apos;étais épuisée. Anxieuse. Je me sentais coupable en permanence même quand je n&apos;avais rien fait.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Et je restais. Pourquoi ?
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Parce que mon cerveau me disait :
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <ul className="flex flex-col gap-3 mb-8">
            {brainExcuses.map((item, i) => (
              <li key={i} className="flex gap-3 items-start font-sans text-sm text-muted italic leading-relaxed">
                <span className="flex-shrink-0 text-gold">—</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.62}>
          <p className="font-serif text-lg md:text-xl font-bold text-cream leading-relaxed mb-10">
            J&apos;étais prisonnière non pas de lui, mais de mon propre câblage cognitif.
          </p>
        </FadeIn>

        <FadeIn delay={0.64}>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Quand j&apos;ai finalement eu le courage de partir (après une 6ème rupture/réconciliation), je suis tombée dans un trou noir.
          </p>
          <p className="font-sans text-base text-cream font-semibold leading-relaxed">
            Pas de tristesse romantique. Non.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
