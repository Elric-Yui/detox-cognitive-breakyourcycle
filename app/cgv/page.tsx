import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — BreakYourCycle",
};

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-sans">
      {/* Header minimal */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
          BreakYourCycle
        </a>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-16 prose-invert">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-10">
          Conditions Générales de Vente — BreakYourCycle
        </h1>

        <div className="font-sans text-sm text-muted leading-relaxed flex flex-col gap-8">

          {/* Préambule */}
          <div>
            <p className="text-cream font-semibold mb-2">Préambule</p>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les ventes de produits et prestations commercialisés sur le site web BreakYourCycle (présenté sur la page d&apos;accueil : méthode DBR, diagnostics, programmes et accompagnements destinés aux profils INFJ/INFP). (<a href="https://breakyourcycle.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold/80">breakyourcycle.netlify.app</a>)
            </p>
          </div>

          <hr className="border-white/10" />

          {/* Article 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 1 — Éditeur / Prestataire</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Nom de l&apos;éditeur : <span className="text-cream font-semibold">THAUMAZEIN</span></li>
              <li>Forme juridique : <span className="text-cream font-semibold">LLC</span></li>
              <li>Siège social : <span className="text-cream font-semibold">30 N Gould St, STE R, Sheridan, WY 82801, USA</span></li>
              <li>Email : <span className="text-cream font-semibold">breakyourcycle@thaumazeinhq.com</span></li>
              <li>Hébergeur du site : <span className="text-cream font-semibold">Netlify, Inc. 2325 3rd Street, Suite 296 San Francisco, CA 94107 United States Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold/80">https://www.netlify.com</a> Contact : support@netlify.com</span>.</li>
            </ol>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 2 — Objet</h2>
            <p>Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne des produits (ex. : cours numériques, e-books, quiz payants) et prestations de services (ex. : coaching, accompagnement) proposées sur le site.</p>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 3 — Produits et services</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Description : chaque produit/service est décrit sur sa page produit (contenu, format, durée, conditions d&apos;accès).</li>
              <li>Disponibilité : les offres sont valables tant qu&apos;elles sont visibles sur le site et dans la limite des stocks ou places disponibles.</li>
            </ol>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 4 — Prix</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Les prix sont indiqués en euros (€), toutes taxes comprises (TTC) sauf mention contraire.</li>
              <li>Les frais éventuels (TVA, frais bancaires, frais de livraison applicables) sont précisés lors du paiement.</li>
              <li>L&apos;éditeur se réserve le droit de modifier les prix ; toutefois les commandes validées restent facturées au prix affiché lors de la commande.</li>
            </ol>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 5 — Commande et conclusion du contrat</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Le Client sélectionne le(s) produit(s) / prestation(s), renseigne les informations de facturation et choisit le mode de paiement.</li>
              <li>La commande est considérée comme acceptée à réception du paiement complet. Le candidat reçoit une confirmation par e-mail contenant la facture et, pour les produits numériques, les modalités d&apos;accès.</li>
            </ol>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 6 — Paiement</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Moyens de paiement acceptés : <span className="text-cream font-semibold">[CB, PayPal, Stripe, virement, etc.]</span>.</li>
              <li>Le paiement est sécurisé. Les données bancaires ne sont pas conservées par l&apos;éditeur (selon le prestataire de paiement choisi).</li>
              <li>En cas de paiement par abonnement, le client autorise les prélèvements récurrents et peut résilier selon les modalités indiquées au contrat.</li>
            </ol>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 7 — Livraison / Accès aux contenus numériques</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Produits physiques : livraison à l&apos;adresse indiquée dans la commande ; délais et coûts indiqués lors de la commande.</li>
              <li>Produits numériques / services en ligne : accès immédiat après confirmation du paiement (envoi d&apos;identifiants et lien d&apos;accès). La mise à disposition est réputée effectuée dès l&apos;envoi du mail d&apos;accès.</li>
            </ol>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 8 — Droit de rétractation (consommateurs)</h2>
            <ol className="list-decimal list-inside flex flex-col gap-2">
              <li>Conformément au droit applicable, le consommateur dispose d&apos;un délai de <span className="text-cream font-semibold">14 jours</span> pour exercer son droit de rétractation pour les achats à distance (sauf exceptions). (<a href="https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/vente-distance-tout-savoir-sur-votre-droit-de-retractation" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold/80">economie.gouv.fr</a>)</li>
              <li>Exceptions : le droit de rétractation ne s&apos;applique pas, ou peut être perdu, pour certains services/digital goods si l&apos;exécution a commencé et que le consommateur en a donné son accord exprès et renoncé à son droit de rétractation (ex. : téléchargement/accès immédiat à un contenu numérique). Cette règle est rappelée avant la confirmation de commande. (<a href="https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/vente-distance-tout-savoir-sur-votre-droit-de-retractation" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold/80">economie.gouv.fr</a>)</li>
              <li>Modalités d&apos;exercice : le client doit notifier sa décision au moyen d&apos;une déclaration claire (email à <span className="text-cream font-semibold">breakyourcycle@thaumazeinhq.com</span>) ; l&apos;éditeur remboursera selon les modalités légales.</li>
            </ol>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 9 — Remboursements et politique commerciale</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Remboursement automatique si droit de rétractation exercé dans le délai.</li>
              <li>Pour les produits/services numériques où le droit de rétractation est exclu par accord exprès, l&apos;éditeur peut proposer une politique commerciale (satisfait ou remboursé, garanties) indiquée sur la page produit.</li>
              <li>Les demandes de remboursement sont traitées dans un délai de <span className="text-cream font-semibold">30 jours ouvrables</span> après réception de la demande.</li>
            </ol>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 10 — Responsabilité</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>L&apos;éditeur met en œuvre les moyens raisonnables pour assurer l&apos;exactitude des informations. Sa responsabilité ne peut être engagée en cas d&apos;erreur non intentionnelle.</li>
              <li>Les prestations proposées visent le bien-être et l&apos;accompagnement psychologique de base ; elles ne remplacent pas un suivi médical ou psychiatrique. L&apos;éditeur ne peut être tenu responsable des conséquences d&apos;un usage inadapté des informations fournies. (Clause de non-substitution à un avis médical.)</li>
            </ol>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 11 — Propriété intellectuelle</h2>
            <p>Tous les contenus (textes, images, vidéos, méthode DBR, supports de cours) sont la propriété exclusive de l&apos;éditeur. Toute reproduction ou diffusion non autorisée est interdite.</p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 12 — Données personnelles</h2>
            <p>Les données collectées dans le cadre des commandes sont traitées conformément à la <a href="/confidentialite" className="text-gold underline hover:text-gold/80">Politique de Confidentialité</a> du site. Le client dispose des droits d&apos;accès, rectification, suppression et portabilité. Pour exercer ces droits : <a href="/confidentialite" className="text-gold underline hover:text-gold/80">consulter notre Politique de Confidentialité</a>.</p>
          </div>

          {/* Article 13 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 13 — Cookies & trackers</h2>
            <p>La gestion des cookies est présentée dans la politique cookies du site ; l&apos;utilisateur peut gérer ses consentements.</p>
          </div>

          {/* Article 14 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 14 — Force majeure</h2>
            <p>Les obligations de l&apos;éditeur sont suspendues en cas de force majeure. En cas de durée excessive de l&apos;événement, chaque partie peut résilier le contrat sans indemnité.</p>
          </div>

          {/* Article 15 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 15 — Preuve</h2>
            <p>Les registres informatiques conservés dans les systèmes de l&apos;éditeur ou de ses prestataires sont considérés comme preuve des communications, commandes et paiements intervenus entre les parties.</p>
          </div>

          {/* Article 16 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 16 — Litiges / Droit applicable</h2>
            <ol className="list-decimal list-inside flex flex-col gap-1">
              <li>Les présentes CGV sont soumises au droit <span className="text-cream font-semibold">de l&apos;état du WYOMING</span> (à préciser selon l&apos;implantation de l&apos;entreprise).</li>
              <li>En cas de litige, le client est invité à contacter le service client (<span className="text-cream font-semibold">[EMAIL / TÉLÉPHONE]</span>) pour recherche d&apos;une solution amiable. À défaut d&apos;accord amiable, les tribunaux compétents seront ceux du ressort du siège social (ou autre clause de compétence choisie).</li>
            </ol>
          </div>

          {/* Article 17 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 17 — Modification des CGV</h2>
            <p>L&apos;éditeur se réserve le droit de modifier les présentes CGV. Les CGV applicables sont celles en vigueur à la date de la commande.</p>
          </div>

          {/* Article 18 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Article 18 — Contact</h2>
            <p>Service client : <span className="text-cream font-semibold">breakyourcycle@thaumazeinhq.com</span> — <span className="text-cream font-semibold">[TÉLÉPHONE]</span></p>
            <p>Adresse : <span className="text-cream font-semibold">30 N Gould St, STE R, Sheridan, WY 82801, USA</span></p>
          </div>

        </div>
      </article>
    </main>
  );
}
