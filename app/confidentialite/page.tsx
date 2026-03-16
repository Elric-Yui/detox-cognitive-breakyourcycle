import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — BreakYourCycle",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-sans">
      {/* Header minimal */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
          BreakYourCycle
        </a>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-16 prose-invert">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-4">
          BreakYourCycle — Politique de confidentialité
        </h1>
        <p className="font-sans text-sm text-muted mb-10">
          <span className="text-cream font-semibold">Date d&apos;entrée en vigueur :</span> 16/03/2026
        </p>

        <div className="font-sans text-sm text-muted leading-relaxed flex flex-col gap-8">

          {/* 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données collectées via ce site est <span className="text-cream font-semibold">THAUMAZEIN LLC</span>, dont le siège social est situé à <span className="text-cream font-semibold">30 N Gould St, STE R, Sheridan, WY 82801, USA</span>, contact : <span className="text-cream font-semibold">[EMAIL]</span> — <span className="text-cream font-semibold">[TÉLÉPHONE]</span>.</p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">2. Champ d&apos;application</h2>
            <p>Cette politique décrit quelles données personnelles sont collectées sur le site, pourquoi elles sont collectées, comment elles sont utilisées, avec qui elles peuvent être partagées, combien de temps elles sont conservées, et comment vous pouvez exercer vos droits.</p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">3. Données collectées</h2>
            <p className="mb-3">Nous pouvons collecter les catégories de données suivantes :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li><span className="text-cream font-semibold">Identifiants</span> : nom, prénom, adresse e-mail, adresse postale (si fournie), numéro de téléphone.</li>
              <li><span className="text-cream font-semibold">Données de transaction</span> : informations relatives aux achats, facturation, historique de commandes.</li>
              <li><span className="text-cream font-semibold">Données de connexion et techniques</span> : adresse IP, type de navigateur, pages visitées, durée de la visite, cookies et identifiants de traçage.</li>
              <li><span className="text-cream font-semibold">Données facultatives</span> : informations renseignées volontairement (ex. : commentaires, messages, réponses à des formulaires, préférences).</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">4. Finalités du traitement</h2>
            <p className="mb-3">Nous traitons vos données pour les finalités suivantes :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>Gérer les commandes, paiements et facturations.</li>
              <li>Fournir l&apos;accès aux produits numériques et services (ex. cours, accompagnements).</li>
              <li>Communiquer avec vous (support client, envoi d&apos;e-mails transactionnels ou informatifs).</li>
              <li>Améliorer le site et mesurer l&apos;audience (statistiques, tests A/B).</li>
              <li>Respecter nos obligations légales et comptables.</li>
              <li>Diffuser, si vous y consentez, des communications commerciales et newsletters.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">5. Bases légales</h2>
            <p className="mb-3">Les traitements reposent, selon les cas, sur :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>L&apos;exécution d&apos;un contrat (ex. fourniture d&apos;un produit/service).</li>
              <li>Le consentement de la personne (ex. cookies non essentiels, newsletters).</li>
              <li>L&apos;intérêt légitime (ex. sécurité du site, prévention des fraudes).</li>
              <li>Les obligations légales (ex. conservation des factures).</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">6. Cookies et traceurs</h2>
            <p>Le site utilise des cookies et traceurs pour : fonctionnement technique, sécurité, analyses statistiques et, avec votre consentement, pour le marketing. Vous pouvez accepter, refuser ou paramétrer vos préférences via la bannière cookies du site.</p>
            <p className="mt-2">Prestataires courants (ex. pour hébergement, paiement, analytics) : Netlify, Stripe, PayPal, Google Analytics, Whop, Kit.</p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">7. Destinataires des données</h2>
            <p>Les destinataires peuvent inclure : le personnel autorisé du site, prestataires techniques (hébergement, paiement, e-mailing, analytics), autorités en cas d&apos;obligation légale. Nous exigeons de nos sous-traitants qu&apos;ils garantissent la confidentialité et la sécurité des données.</p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">8. Transferts hors UE</h2>
            <p>Si des données sont transférées en dehors de l&apos;Union européenne, nous mettrons en place des garanties appropriées (clauses contractuelles types, hébergeurs conformes, etc.). Si des transferts tiers sont prévus, ils seront indiqués précisément sur demande.</p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">9. Durée de conservation</h2>
            <p className="mb-3">Les durées varient selon la finalité :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>Données liées à une commande : conservation pendant la durée légale comptable et fiscale.</li>
              <li>Données de prospection (newsletter) : jusqu&apos;à retrait du consentement.</li>
              <li>Logs et données techniques : durée limitée 24 mois.</li>
            </ul>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">10. Sécurité</h2>
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l&apos;accès non autorisé, la perte, la divulgation ou l&apos;altération. Cela comprend l&apos;utilisation de connexions sécurisées (HTTPS), le chiffrement des accès administrateurs et la gestion des droits d&apos;accès.</p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">11. Vos droits</h2>
            <p className="mb-3">Conformément à la réglementation applicable (dont le RGPD si vous êtes dans l&apos;UE), vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>Droit d&apos;accès, de rectification et d&apos;effacement.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d&apos;opposition pour motifs légitimes.</li>
              <li>Droit à la portabilité des données (quand applicable).</li>
              <li>Droit de retirer votre consentement à tout moment (sans affecter la licéité du traitement antérieur).</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits : envoyez une demande à <span className="text-cream font-semibold">[EMAIL]</span> en précisant votre nom, l&apos;adresse e-mail utilisée et la nature de la demande. Nous répondrons dans les délais légaux.</p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">12. Droit de porter plainte</h2>
            <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l&apos;autorité de contrôle compétente. En France : CNIL (Commission nationale de l&apos;informatique et des libertés) ou l&apos;autorité compétente de votre pays.</p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">13. Données des mineurs</h2>
            <p>Nos services ne s&apos;adressent pas aux mineurs de moins de <span className="text-cream font-semibold">18 ans</span>. Nous n&apos;avons pas l&apos;intention de collecter sciemment des données auprès de mineurs ; si nous apprenons qu&apos;une donnée personnelle d&apos;un mineur a été collectée sans consentement parental, nous la supprimerons.</p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">14. Modifications de la politique</h2>
            <p>Nous pouvons mettre à jour cette politique. La version en vigueur sera consultable sur le site avec la date de mise à jour. En cas de changements substantiels affectant vos droits, nous vous en informerons (ex. e-mail).</p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">15. Contact</h2>
            <p>Pour toute question sur cette politique ou l&apos;exercice de vos droits :</p>
            <p className="mt-2"><span className="text-cream font-semibold">Responsable :</span> THAUMAZEIN LLC</p>
            <p><span className="text-cream font-semibold">E-mail :</span> [EMAIL]</p>
            <p><span className="text-cream font-semibold">Adresse :</span> 30 N Gould St, STE R, Sheridan, WY 82801, USA</p>
          </div>

        </div>
      </article>
    </main>
  );
}
