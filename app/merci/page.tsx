import Link from "next/link";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-sans flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-8">

        {/* Icône succès */}
        <div className="w-20 h-20 rounded-full bg-positive/15 border border-positive/30 flex items-center justify-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-positive"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Titre */}
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Bienvenue dans
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-black text-cream leading-tight">
            DÉTOX COGNITIVE
          </h1>
          <p className="font-serif text-lg text-gold italic mt-2">
            Diagnostic et Recalibrage pour INFJ/INFP
          </p>
        </div>

        {/* Prochaines étapes */}
        <div className="w-full bg-bg-alt border border-white/8 rounded-2xl p-6 text-left flex flex-col gap-4">
          <p className="font-serif text-sm font-bold text-cream uppercase tracking-wider text-center mb-2">
            Vos prochaines étapes
          </p>

          <div className="flex items-start gap-4 bg-positive/8 border border-positive/20 rounded-xl px-5 py-4">
            <span className="text-positive font-bold text-lg flex-shrink-0">✅</span>
            <div>
              <p className="font-sans text-sm font-bold text-cream mb-1">
                Accès immédiat à la Phase 1
              </p>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Vérifiez votre email — votre guide (80 pages) est disponible dès maintenant.
                Commencez par le Test de Profil Cognitif Relationnel.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-positive/8 border border-positive/20 rounded-xl px-5 py-4">
            <span className="text-gold font-bold text-lg flex-shrink-0">✦</span>
            <div>
              <p className="font-sans text-sm font-bold text-cream mb-1">
                Phases 2, 3 et Bonus — sous 30 jours
              </p>
              <p className="font-sans text-xs text-muted leading-relaxed">
                La Déconstruction de l&apos;Attachement, la Reconstruction &amp; Nouveaux Filtres,
                et le Bonus Recalibrage à Vie vous seront livrés dans les 30 jours. Vous
                recevrez une notification dès qu&apos;ils seront disponibles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-positive/8 border border-positive/20 rounded-xl px-5 py-4">
            <span className="text-positive font-bold text-lg flex-shrink-0">✅</span>
            <div>
              <p className="font-sans text-sm font-bold text-cream mb-1">
                Feedback VIP
              </p>
              <p className="font-sans text-xs text-muted leading-relaxed">
                En tant qu&apos;early adopteuse, votre retour influencera le contenu final des phases
                suivantes. Répondez simplement à l&apos;email que vous recevrez.
              </p>
            </div>
          </div>
        </div>

        {/* Rappel garantie */}
        <p className="font-sans text-xs text-muted leading-relaxed max-w-sm">
          🔒 Rappel : si les phases 2, 3 et le Bonus ne sortent pas dans les 30 jours,
          vous êtes remboursée intégralement — et vous conservez la Phase 1 gratuitement.
        </p>

        {/* Lien retour */}
        <Link
          href="/"
          className="font-sans text-xs text-muted hover:text-cream transition-colors underline underline-offset-4"
        >
          ← Retour à la page principale
        </Link>
      </div>
    </main>
  );
}
