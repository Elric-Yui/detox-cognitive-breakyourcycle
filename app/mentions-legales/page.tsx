import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — BreakYourCycle",
};

export default function MentionsLegalesPage() {
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
          Mentions Légales
        </h1>

        <div className="font-sans text-sm text-muted leading-relaxed flex flex-col gap-8">

          {/* Éditeur du site */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Éditeur du site</h2>
            <p className="mb-3">Le site est édité par la société indiquée en en-tête : la société (ci-dessous « la Société »).</p>
            <p className="mb-2">Informations à renseigner :</p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li><span className="text-cream font-semibold">Raison sociale :</span> THAUMAZEIN LLC</li>
              <li><span className="text-cream font-semibold">Forme juridique :</span> LLC (Limited Liability Company)</li>
              <li><span className="text-cream font-semibold">État d&apos;enregistrement :</span> Wyoming</li>
              <li><span className="text-cream font-semibold">Adresse du siège social / adresse de service :</span> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
              <li><span className="text-cream font-semibold">Registered agent / Agent enregistré :</span> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
              <li><span className="text-cream font-semibold">Contact (email) :</span> [contact@exemple.com]</li>
            </ul>
          </div>

          <hr className="border-white/10" />

          {/* Immatriculation */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Immatriculation</h2>
            <p>La Société est immatriculée auprès du registre d&apos;État compétent : Wyoming Secretary of State.</p>
            <ul className="list-disc list-inside mt-2">
              <li><span className="text-cream font-semibold">Numéro d&apos;enregistrement / Filing number :</span> 2025-001776113</li>
            </ul>
          </div>

          <hr className="border-white/10" />

          {/* Responsable de la publication */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Responsable de la publication</h2>
            <p>Le responsable de la publication du site web est la personne désignée par la Société (nom et fonction) : <span className="text-cream font-semibold">YEDE Elcir, founder</span></p>
          </div>

          <hr className="border-white/10" />

          {/* Hébergeur */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Hébergeur</h2>
            <p>Le site est hébergé par :</p>
            <p className="mt-2 text-cream">Netlify, Inc.</p>
            <p>2325 3rd Street, Suite 296</p>
            <p>San Francisco, CA 94107</p>
            <p>United States</p>
            <p className="mt-2">Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold/80">https://www.netlify.com</a></p>
            <p>Contact : support@netlify.com</p>
          </div>

          <hr className="border-white/10" />

          {/* Paiements */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Paiements et prestataires</h2>
            <p>Pour les paiements en ligne, la Société peut utiliser des prestataires de paiement externes tels que : Stripe, Whop, Paypal, etc.</p>
            <p className="mt-2">Les données bancaires sont traitées par ces prestataires et ne sont pas stockées directement sur le site par la Société.</p>
          </div>

          <hr className="border-white/10" />

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur le site (textes, images, logos, vidéos, supports de formation, méthode DBR, etc.) sont la propriété exclusive de la Société ou de ses ayants droit. Toute reproduction, représentation, adaptation ou exploitation non autorisée est interdite.</p>
          </div>

          <hr className="border-white/10" />

          {/* Données personnelles */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Données personnelles</h2>
            <p>Les traitements de données personnelles sont décrits dans la <a href="/confidentialite" className="text-gold underline hover:text-gold/80">Politique de confidentialité</a> du site. Conformément aux lois applicables, les utilisateurs disposent de droits d&apos;accès, de rectification, d&apos;effacement et de limitation. Pour exercer ces droits : contacter [contact@exemple.com].</p>
          </div>

          <hr className="border-white/10" />

          {/* Cookies */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Cookies</h2>
            <p>Le site utilise des cookies et traceurs pour son fonctionnement, l&apos;analyse d&apos;audience et, avec consentement, des finalités marketing. L&apos;utilisateur peut gérer ses préférences via la bannière cookies.</p>
          </div>

          <hr className="border-white/10" />

          {/* Responsabilité */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Responsabilité</h2>
            <p>La Société met en œuvre des moyens raisonnables pour assurer l&apos;exactitude des informations publiées. Elle ne saurait toutefois être tenue responsable des erreurs, omissions, ou de l&apos;usage qui pourrait être fait des informations diffusées sur le site. Les produits et services fournis par la Société ne remplacent pas un avis médical ou professionnel lorsque cela est applicable.</p>
          </div>

          <hr className="border-white/10" />

          {/* Liens externes */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Liens externes</h2>
            <p>Le site peut contenir des liens vers des sites tiers. La Société n&apos;est pas responsable du contenu de ces sites ni des pratiques de confidentialité qu&apos;ils appliquent.</p>
          </div>

          <hr className="border-white/10" />

          {/* Accessibilité */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Accessibilité</h2>
            <p>La Société s&apos;efforce de rendre le site accessible. En cas de difficultés d&apos;accès, l&apos;utilisateur peut contacter le support à [contact@exemple.com] pour obtenir une assistance.</p>
          </div>

          <hr className="border-white/10" />

          {/* Droit applicable */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Droit applicable & litiges</h2>
            <p>Les présentes mentions et l&apos;utilisation du site sont soumises au droit de l&apos;État de Wyoming. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire. À défaut d&apos;accord, les tribunaux compétents seront ceux du ressort du siège social, sauf disposition contraire imposée par la loi.</p>
          </div>

          <hr className="border-white/10" />

          {/* EIN */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Informations fiscales / EIN</h2>
            <p>L&apos;EIN est délivré par le Internal Revenue Service.</p>
          </div>

          <hr className="border-white/10" />

          {/* Mise à jour */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Mise à jour des mentions</h2>
            <p>La Société se réserve le droit de modifier les présentes mentions légales. La date de mise à jour sera précisée en haut de la page.</p>
          </div>

          <hr className="border-white/10" />

          {/* Date */}
          <div>
            <h2 className="font-serif text-xl font-bold text-cream mb-3">Date d&apos;entrée en vigueur</h2>
            <p>Ce document est en vigueur à compter du : <span className="text-cream font-semibold">16/03/2026</span>.</p>
          </div>

        </div>
      </article>
    </main>
  );
}
