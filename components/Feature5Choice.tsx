import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";
import Accordion from "@/components/ui/Accordion";

const futurePositive = [
  "Vous rencontrez quelqu'un — et pour la première fois, vous vous sentez bien dans l'incertitude du début",
  "Vous reconnaissez les red flags dans la première semaine et vous les prenez au sérieux",
  "Vous n'avez plus besoin de déchiffrer les comportements de votre partenaire — vous avez confiance en votre lecture",
  "Votre capacité d'empathie est intacte, mais elle ne vous détruit plus — elle vous enrichit",
  "Vous savez quand partir. Et vous êtes capable de partir.",
  "Vous avez une relation — avec vous-même — qui est stable, claire, ancrée",
];

const nextSteps = [
  {
    num: "01",
    title: "Vous cliquez sur le bouton",
    desc: "Vous êtes redirigée vers la page de paiement sécurisé.",
  },
  {
    num: "02",
    title: "Vous complétez le checkout",
    desc: "Paiement par carte bancaire, sécurisé et crypté. Moins de 2 minutes.",
  },
  {
    num: "03",
    title: "Vous recevez un email",
    desc: "Avec votre lien d'accès permanent au guide et à tous les outils.",
  },
  {
    num: "04",
    title: "Vous téléchargez et commencez",
    desc: "Phase 1 disponible immédiatement. À votre rythme, où vous voulez.",
  },
  {
    num: "05",
    title: "Phases 2 & 3",
    desc: "Accessibles dans les 30 jours suivants, avec notifications automatiques.",
  },
];

const faqItems = [
  {
    question: "\"Je suis trop cassée pour que ça marche pour moi.\"",
    answer:
      "Je comprends ce sentiment. Mais voici ce que je sais après avoir travaillé ce sujet : la conviction d'être 'trop cassée' est elle-même un symptôme du cycle. Ce n'est pas une réalité objective — c'est le résultat de ce que votre cerveau a internalisé après des années de relations qui vous ont diminuée. Ce guide est conçu spécifiquement pour les personnes qui ont ce sentiment. Ce n'est pas un obstacle à son efficacité. C'est exactement pourquoi il a été créé.",
  },
  {
    question: "\"Quelle est la différence avec les livres sur les narcissiques ?\"",
    answer:
      "Les livres sur les narcissiques se concentrent sur l'autre — qui il est, ses comportements, comment le repérer. Ce guide se concentre sur vous — votre architecture cognitive, vos failles spécifiques, vos patterns de réponse. L'objectif n'est pas de mieux comprendre l'autre. C'est de recalibrer votre propre système pour ne plus attirer, ni rester dans, ces dynamiques.",
  },
  {
    question: "\"Et si mon partenaire n'est pas vraiment toxique ?\"",
    answer:
      "Ce guide n'est pas un tribunal. Il ne s'agit pas de 'prouver' que votre partenaire est toxique. Il s'agit de comprendre vos propres patterns relationnels — qu'ils s'expriment dans une relation clairement toxique ou dans une relation simplement dysfonctionnelle. Si vous répétez des schémas qui vous font souffrir, ce guide vous aidera, quelle que soit l'étiquette que vous mettez sur la situation.",
  },
  {
    question: "\"Pourquoi quelques heures de lecture vs des années de thérapie ?\"",
    answer:
      "Ce guide ne remplace pas la thérapie. Si vous avez accès à un thérapeute formé à votre profil cognitif, c'est précieux. Ce que ce guide offre, c'est quelque chose de différent : un protocole spécifique, actionnable, calibré pour votre type. La thérapie travaille sur votre passé. Ce guide travaille sur votre système actuel — comment il fonctionne maintenant et comment le recalibrer maintenant.",
  },
  {
    question: "\"47€ c'est cher pour un PDF.\"",
    answer:
      "47€, c'est le prix d'une séance de thérapie. Une séance. Ce guide représente 4 mois de recherche, 200+ heures de travail, 5 frameworks scientifiques intégrés et un protocole testé sur des dizaines de cas similaires au vôtre. La vraie question n'est pas si 47€ c'est cher. C'est : combien coûte encore une année à répéter le même cycle ?",
  },
  {
    question: "\"Et si je n'arrive quand même pas à sortir ?\"",
    answer:
      "C'est pour ça que la garantie de résultat existe. Si après avoir complété les 3 phases vous n'avez pas identifié au moins 3 patterns spécifiques et un protocole d'action clair, vous êtes remboursée. Mais voici ce que je sais : si vous faites réellement le travail — pas juste lire, mais appliquer — les résultats sont là. La question est : êtes-vous prête à faire le travail ?",
  },
];

const scientificLinks = [
  { text: "Acevedo, B.P. et al. (2014). The highly sensitive brain. Brain and Behavior.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4086365/" },
  { text: "Young, J.E. (2003). Schema Therapy: A Practitioner's Guide. Guilford Press.", url: "https://www.guilford.com/books/Schema-Therapy/Young-Klosko-Weishaar/9781462520030" },
  { text: "Levine, P. (1997). Waking the Tiger: Healing Trauma. North Atlantic Books.", url: "https://books.google.com/books?id=vCh9fXUiUjwC" },
  { text: "Carnes, P. (1997). The Betrayal Bond. Health Communications.", url: "https://books.google.com/books?id=Dg-CDwAAQBAJ" },
  { text: "Nardi, D. (2011). Neuroscience of Personality. Radiance House.", url: "https://dokumen.pub/neuroscience-of-personality-brain-savvy-insights-for-all-types-of-people-10nbsped-0979868475-9780979868474.html" },
];

export default function Feature5Choice() {
  return (
    <section className="bg-bg-alt">
      {/* DEUX CHOIX */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Vous avez maintenant deux choix.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CHOIX 1 - Fermer */}
            <FadeIn delay={0.1}>
              <div className="bg-negative/8 border border-negative/30 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-negative/20 border border-negative/40 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-negative text-xs">1</span>
                  </div>
                  <h3 className="font-sans font-bold text-negative uppercase tracking-wider text-sm">
                    Fermer cette page
                  </h3>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  Vous retournez à votre quotidien. Dans 6 mois, peut-être dans un an, vous vous retrouverez dans la même situation — différent partenaire, même cycle. Vous lirez un autre livre sur les narcissiques. Vous essaierez encore de comprendre pourquoi vous attirez ce type de personne. Et la réponse restera aussi floue qu&apos;aujourd&apos;hui.
                </p>
                <p className="font-sans text-xs text-negative/70 italic">
                  Ce n&apos;est pas un jugement. C&apos;est ce que le cycle fait — il convainc que ça ira mieux sans intervention.
                </p>
              </div>
            </FadeIn>

            {/* CHOIX 2 - Cliquer */}
            <FadeIn delay={0.2}>
              <div className="bg-positive/8 border border-positive/30 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-positive/20 border border-positive/40 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-positive text-xs">2</span>
                  </div>
                  <h3 className="font-sans font-bold text-positive uppercase tracking-wider text-sm">
                    Cliquer et recalibrer
                  </h3>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  Vous investissez 3 à 4 heures de votre temps dans un diagnostic complet de votre architecture cognitive. Vous comprenez enfin — avec précision — pourquoi votre cerveau fonctionne comme ça. Et vous avez entre les mains un protocole étape par étape pour changer.
                </p>
                <p className="font-sans text-xs text-positive/70 italic">
                  La première relation après ce recalibrage sera différente. Pas parfaite. Différente.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* DEUX FUTURS */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-cream mb-12">
              ALORS, LEQUEL DE CES DEUX FUTURS <span className="text-gold">VOULEZ-VOUS ?</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {/* Choix 1 */}
            <FadeIn delay={0.1} className="flex-1">
              <div className="bg-negative/10 border border-negative/30 rounded-2xl p-6 h-full text-left">
                <p className="font-serif text-base font-bold text-negative mb-3">Choix #1</p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Vous fermez cette page et vous retombez dans le même cycle dans <span className="text-cream font-semibold">6 mois</span>.
                </p>
              </div>
            </FadeIn>

            {/* Choix 2 */}
            <FadeIn delay={0.2} className="flex-1">
              <div className="bg-positive/10 border border-positive/30 rounded-2xl p-6 h-full text-left">
                <p className="font-serif text-base font-bold text-positive mb-3">Choix #2</p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Vous prenez le workbook pour <span className="text-cream font-semibold">recalibrer votre système de navigation à vie</span>.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="font-serif text-lg text-cream font-semibold mb-8">
              Le choix vous appartient.
            </p>
            <CTAButton
              label="Obtenir mon guide"
              size="lg"
              className="mx-auto justify-center"
            />
          </FadeIn>
        </div>
      </div>

      {/* FUTUR 18 MOIS */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-8">
              Imaginez votre vie, 18 mois après ce recalibrage.
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-10">
              Ce n&apos;est pas de la pensée positive. C&apos;est ce que les personnes qui ont fait ce travail rapportent, systématiquement :
            </p>
          </FadeIn>

          <div className="flex flex-col gap-3 mb-12">
            {futurePositive.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-3 items-start p-4 bg-bg-alt rounded-lg border border-positive/15">
                  <span className="text-positive font-bold flex-shrink-0">✓</span>
                  <p className="font-sans text-sm text-cream leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center">
              <CTAButton
                label="Je choisis le recalibrage — 47€"
                size="lg"
                className="mb-4"
              />
              <p className="font-sans text-sm text-muted italic mt-4">
                Le choix vous appartient.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CE QUI SE PASSE ENSUITE */}
      <div className="py-20 px-4 bg-bg">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Ce qui se passera ensuite
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {nextSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center">
                    <span className="font-sans font-bold text-violet-light text-xs">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h4 className="font-sans font-semibold text-cream mb-1">
                      {step.title}
                    </h4>
                    <p className="font-sans text-sm text-muted">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-bg-alt py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
              Questions fréquentes
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion items={faqItems} />
          </FadeIn>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-bg py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Dernière chance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              Votre cerveau n&apos;est pas cassé.
              <br />
              <span className="text-gold">Il attend d&apos;être recalibré.</span>
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-10 max-w-xl mx-auto">
              47€. 3 à 4 heures. Et une compréhension de votre propre fonctionnement que des années de lectures génériques n&apos;ont pas pu vous donner.
            </p>
            <CTAButton
              label="Accéder à DÉTOX COGNITIVE — 47€"
              size="lg"
              className="mb-4"
            />
            <p className="font-sans text-xs text-muted mt-4">
              Garantie 14 jours • Garantie résultat ou remboursé • Accès immédiat • 50 places disponibles
            </p>
          </FadeIn>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-bg border-t border-white/8 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-4">
              Références scientifiques
            </p>
            <ul className="flex flex-col gap-2">
              {scientificLinks.map((link, i) => (
                <li
                  key={i}
                  className="font-sans text-xs text-muted/60 leading-relaxed"
                >
                  {link.url ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold transition-colors">
                      {link.text}
                    </a>
                  ) : (
                    link.text
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/8">
            <p className="font-sans text-xs text-muted/50">
              © 2026 BreakYourCycle. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/cgv"
                className="font-sans text-xs text-muted/50 hover:text-gold transition-colors"
              >
                Conditions Générales de Vente
              </a>
              <a
                href="/confidentialite"
                className="font-sans text-xs text-muted/50 hover:text-gold transition-colors"
              >
                Politique de Confidentialité
              </a>
              <a
                href="/mentions-legales"
                className="font-sans text-xs text-muted/50 hover:text-gold transition-colors"
              >
                Mentions Légales
              </a>
              <a
                href="mailto:contact@breakyourcycle.com"
                className="font-sans text-xs text-gold hover:text-gold/80 transition-colors"
              >
                contact@breakyourcycle.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
