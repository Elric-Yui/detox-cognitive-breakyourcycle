import FadeIn from "@/components/ui/FadeIn";

const patternAfterFight = [
  "Vous vous excusez pour des choses dont vous n'êtes pas responsable",
  "Vous analysez la dispute en boucle pour trouver comment vous auriez pu mieux faire",
  "Vous marchez sur des œufs pendant des jours pour éviter une nouvelle tension",
  "Quand il revient, vous êtes tellement soulagée que vous oubliez votre colère",
  "Et le cycle recommence",
];

export default function Feature2Story() {
  return (
    <section className="bg-bg py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Separator + intro */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Mon histoire
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Mais avant tout, laissez moi me présenter. Je m&apos;appelle BreakYourCycle. Et non, ce n&apos;est pas un nom de marque. C&apos;est ce que j&apos;ai dû apprendre à faire — briser mon propre cycle — avant de pouvoir vous aider à briser le vôtre.
          </p>
        </FadeIn>

        {/* Titre choc */}
        <FadeIn delay={0.15}>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-cream text-center my-14 leading-tight">
            MA DEUXIÈME RELATION<br />
            <span className="text-negative">M&apos;A PRESQUE DÉTRUITE.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Je l&apos;ai rencontré dans un café philosophique, un mardi soir de novembre. Il parlait de Sartre et de libre arbitre avec une intensité que je n&apos;avais jamais vue chez quelqu&apos;un. Il m&apos;a regardée de l&apos;autre côté de la table et a dit quelque chose que je n&apos;oublierai jamais :
          </p>
        </FadeIn>

        {/* Citation partenaire */}
        <FadeIn delay={0.22}>
          <div className="border-l-4 border-violet pl-6 py-3 my-8">
            <p className="font-sans text-base italic text-cream leading-relaxed">
              &ldquo;J&apos;ai l&apos;impression que tu es la seule personne dans cette pièce qui comprend vraiment ce dont je parle.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Vous connaissez ce sentiment, n&apos;est-ce pas ? Quand quelqu&apos;un vous voit — vraiment vous voit — après des années à vous sentir incomprise. C&apos;était électrique. C&apos;était évident. C&apos;était le début de tout.
          </p>
        </FadeIn>

        <FadeIn delay={0.26}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Les trois premières semaines ont été comme vivre dans un film. Il m&apos;envoyait des messages à toute heure. Quinze messages certains matins, avant même que je me lève. Pas des messages banals — des pensées profondes, des questions sur ma vision du monde, des poèmes qu&apos;il écrivait à 3h du matin et qu&apos;il disait être pour moi.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <p className="font-sans text-sm italic text-muted/70 text-center mb-8 mt-4">
            — Spoiler alert : ils n&apos;étaient pas pour moi. —
          </p>
        </FadeIn>

        {/* La chute */}
        <FadeIn delay={0.3}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Puis, quelques semaines plus tard, quelque chose a changé. Imperceptiblement d&apos;abord. Un commentaire sur ma façon de parler en public. Une remarque sur le livre que je lisais — &ldquo;un peu superficiel pour toi, non ?&rdquo; Une blague sur mon sens de l&apos;humour devant ses amis.
          </p>
        </FadeIn>

        {/* Citation partenaire 2 */}
        <FadeIn delay={0.32}>
          <div className="border-l-4 border-violet pl-6 py-3 my-8">
            <p className="font-sans text-base italic text-cream leading-relaxed">
              &ldquo;Je pensais que tu étais plus forte que ça. Tu es trop sensible, c&apos;est un problème.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            J&apos;ai commencé à marcher sur des œufs. À surveiller mes mots. À analyser ses silences. À me demander ce que j&apos;avais dit de travers quand il devenait distant. La première vraie dispute a duré trois jours. Trois jours de silence total, de messages sans réponse, de nuits à fixer le plafond en me demandant si c&apos;était fini.
          </p>
        </FadeIn>

        <FadeIn delay={0.36}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Puis il est revenu. Comme si rien ne s&apos;était passé. Et moi ? Voici ce que je faisais après chaque dispute :
          </p>
        </FadeIn>

        {/* Pattern après dispute */}
        <FadeIn delay={0.38}>
          <div className="bg-negative/10 border border-negative/20 rounded-xl p-6 my-8">
            <ul className="flex flex-col gap-3">
              {patternAfterFight.map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-sans text-sm text-cream/90">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-negative mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            Pendant dix-huit mois, j&apos;ai vécu dans cet état. Hypervigilante. Épuisée. Coupée de mes propres besoins. Convaincue que si j&apos;étais juste... assez bonne, assez patiente, assez compréhensive... les choses s&apos;arrangeraient.
          </p>
        </FadeIn>

        <FadeIn delay={0.42}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            C&apos;est ma meilleure amie qui a mis le doigt sur ce que je refusais de voir. On prenait un café, un samedi matin. Elle m&apos;a regardée et a dit, très calmement :
          </p>
        </FadeIn>

        <FadeIn delay={0.44}>
          <div className="border-l-4 border-gold pl-6 py-3 my-8">
            <p className="font-sans text-lg italic text-cream leading-relaxed">
              &ldquo;Je ne reconnais plus la personne que tu étais il y a deux ans. Toi non plus, je pense.&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.46}>
          <div className="text-center my-14">
            <p className="font-serif text-2xl md:text-3xl font-bold text-cream italic leading-tight max-w-2xl mx-auto">
              &ldquo;Je ne reconnaissais plus la personne que j&apos;étais devenue.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.48}>
          <p className="font-sans text-base text-muted leading-relaxed mb-6">
            J&apos;avais 31 ans. Et pour la première fois, j&apos;ai regardé en face le fait que ce n&apos;était pas une malchance. Ce n&apos;était pas juste lui. C&apos;était un pattern. C&apos;était mon pattern. Et il était temps de comprendre pourquoi.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
