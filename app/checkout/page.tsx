"use client";

import { useRouter } from "next/navigation";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

// PERSONNALISER : témoignage affiché sur la page checkout
const testimonial = {
  name: "Mariane, 34 ans — INFJ",
  quote:
    "Les INFJs peuvent rester trop longtemps dans des relations malsaines... parce qu'ils voient un potentiel profond. Apprendre à prioriser ses propres besoins est une étape clé.",
};

// PERSONNALISER : liste des éléments inclus (extraits de Feature4Offer)
const included = [
  // Phase 1 — 5 composants
  { icon: "✅", label: "COMPOSANT 1 : Test de Profil Cognitif Relationnel" },
  { icon: "✅", label: "COMPOSANT 2 : La Matrice de Vulnérabilité" },
  { icon: "✅", label: "COMPOSANT 3 : Le Journal de Patterns" },
  { icon: "✅", label: "COMPOSANT 4 : La Cartographie de Votre Cycle Toxique" },
  { icon: "✅", label: "COMPOSANT 5 : Le Rapport d'Auto Diagnostic" },
  // Phases 2 & 3 + Bonus
  { icon: "✦", label: "Phase 2 — Déconstruction de l'Attachement (sous 30j)" },
  { icon: "✦", label: "Phase 3 — Reconstruction & Nouveaux Filtres (sous 30j)" },
  { icon: "✦", label: "Bonus — Recalibrage à Vie (sous 30j)" },
];

export default function CheckoutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-bg text-cream font-sans">
      {/* Header minimal */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
          BreakYourCycle
        </span>
        <span className="font-sans text-xs text-muted">
          🔒 Paiement sécurisé
        </span>
      </header>

      {/* Layout 2 colonnes */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">

        {/* ── COLONNE GAUCHE ── */}
        <div className="flex flex-col gap-8">

          {/* Image produit — PERSONNALISER : remplacer par une vraie image */}
          <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-violet to-bg border border-gold/30 flex items-center justify-center shadow-[0_20px_60px_rgba(123,79,191,0.25)]">
            {/* PERSONNALISER : <Image src="/images/produit.png" alt="DÉTOX COGNITIVE" fill className="object-cover rounded-2xl" /> */}
            <div className="text-center p-6">
              <p className="font-serif text-2xl font-black text-gold leading-tight">DÉTOX</p>
              <p className="font-serif text-2xl font-black text-gold leading-tight">COGNITIVE</p>
              <div className="w-12 h-px bg-gold/40 mx-auto my-3" />
              <p className="font-sans text-xs text-cream/60 uppercase tracking-widest">INFJ / INFP</p>
            </div>
          </div>

          {/* Titre produit */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
              Je vous présente
            </p>
            {/* PERSONNALISER : titre h1 */}
            <h1 className="font-serif text-2xl md:text-3xl font-black text-cream leading-tight mb-3">
              DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP
            </h1>
            {/* PERSONNALISER : description courte */}
            <p className="font-sans text-sm text-muted leading-relaxed">
              Basé sur la méthode DBR (Diagnostiquer–Briser–Reconstruire), ce guide vous offre
              une cartographie chirurgicale de votre câblage cognitif pour comprendre, documenter
              et briser définitivement vos schémas amoureux toxiques — sans therapie floue,
              sans self-love générique.
            </p>
          </div>

          {/* Ce qui est inclus */}
          <div className="bg-bg-alt border border-white/8 rounded-2xl p-6">
            <p className="font-serif text-sm font-bold text-cream uppercase tracking-wider mb-5">
              Ce que vous obtenez :
            </p>
            <ul className="flex flex-col gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 text-sm mt-0.5 ${
                      item.icon === "✅" ? "text-positive" : "text-gold"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-sans text-sm text-cream leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-xs italic text-muted/70 border-t border-white/10 pt-4 mt-5">
              Phase 1 accessible immédiatement (80 pages). Phases 2, 3 et Bonus livrés sous 30 jours.
            </p>
          </div>

          {/* Prix */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-xl text-muted line-through">117€</span>
            <span className="font-sans text-muted text-lg">→</span>
            <span className="font-serif text-5xl font-black text-gold">47€</span>
            <span className="font-sans text-xs text-positive bg-positive/10 border border-positive/20 rounded-full px-3 py-1">
              −60%
            </span>
          </div>

          {/* Témoignage */}
          <blockquote className="bg-bg-alt border border-white/8 rounded-2xl p-6">
            <div className="border-l-4 border-gold pl-4 py-1 mb-4">
              <p className="font-sans text-sm text-cream italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <p className="font-sans text-sm font-bold text-gold">— {testimonial.name}</p>
          </blockquote>

          {/* Badge garantie */}
          <div className="flex items-start gap-3 bg-positive/8 border border-positive/20 rounded-xl px-5 py-4">
            <span className="text-lg flex-shrink-0">🔒</span>
            <div>
              <p className="font-sans text-sm font-bold text-cream mb-1">Double garantie</p>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Remboursement sans questions sous 14 jours · Remboursement intégral si la méthode
                ne fonctionne pas dans le mois suivant.
              </p>
            </div>
          </div>
        </div>

        {/* ── COLONNE DROITE : checkout embed ── */}
        <div className="lg:sticky lg:top-8 h-fit">
          <WhopCheckoutEmbed
            planId="plan_U3s7jdRc2Hobl"
            skipRedirect={true}
            onComplete={() => router.push("/merci")}
            theme="dark"
          />
        </div>
      </div>
    </main>
  );
}
