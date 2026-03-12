# CLAUDE.md — DÉTOX COGNITIVE : Page de Vente BreakYourCycle

## Vue d'ensemble

Page de vente longue-form haute conversion pour le produit **"DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP"** de la marque **BreakYourCycle**.

- **Produit vendu via** : Whop — `https://whop.com/checkout/plan_579QNJsiFPPl9`
- **Prix affiché** : 47€ (barré 107€)
- **Langue** : Français uniquement
- **Dev server** : `npm run dev` → `http://localhost:3000`

---

## Stack

| Élément | Choix |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll-triggered) |
| Fonts | Playfair Display (titres) + Inter (corps) via Google Fonts |
| Hébergement cible | Vercel / Netlify |

---

## Structure des fichiers

```
detox-app/
├── app/
│   ├── page.tsx              ← Assemblage des 5 sections (Feature1 → Feature5)
│   ├── layout.tsx            ← Meta SEO, Google Fonts (Playfair + Inter), html lang="fr"
│   └── globals.css           ← Variables CSS palette, reset, scrollbar custom
├── components/
│   ├── Feature1Hero.tsx      ← Hero + empathie + science (Acevedo 2014) + 3 éléments
│   ├── Feature2Story.tsx     ← Récit narratif (relation toxique de BreakYourCycle)
│   ├── Feature3Mechanism.tsx ← 5 failles cognitives + 7 phases + bases scientifiques DBR
│   ├── Feature4Offer.tsx     ← Produit + témoignages + prix + CTA + garanties
│   ├── Feature5Choice.tsx    ← 2 choix + futur + FAQ accordion + footer CTA
│   └── ui/
│       ├── CTAButton.tsx     ← Bouton violet → lien Whop, props: label, size ("lg"|"sm")
│       ├── Accordion.tsx     ← FAQ animé via Framer Motion AnimatePresence
│       └── FadeIn.tsx        ← Wrapper scroll-triggered (opacity 0→1, y 24→0)
├── public/
│   └── images/
│       └── og-image.png      ← Placeholder (à remplacer par une vraie image OG)
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md                 ← Ce fichier
```

---

## Palette de couleurs

| Rôle | Token Tailwind | Hex |
|---|---|---|
| Background | `bg-bg` | `#0D0D1A` |
| Background alt | `bg-bg-alt` | `#13131F` |
| Texte principal | `text-cream` | `#F0EAD6` |
| Texte secondaire | `text-muted` | `#B0A898` |
| Accent doré | `text-gold` | `#C9A84C` |
| CTA / boutons | `bg-violet` | `#7B4FBF` |
| CTA hover | `bg-violet-light` | `#9B6FDF` |
| Positif (✓) | `text-positive` | `#4CAF7D` |
| Négatif (✗) | `text-negative` | `#E05252` |

---

## Structure narrative (5 Features)

La page suit exactement les 5 sections définies dans `../prdr.md` :

### Feature 1 — Hero & Accroche Scientifique (`Feature1Hero.tsx`)
- Hero avec titre doré Playfair + placeholder image 16:9
- 5 douleurs INFJ/INFP (bullets fond contrasté)
- "Ce n'est pas votre faute" centré doré
- Citation étude Acevedo et al. 2014 (neurones miroirs)
- Critique des 3 solutions échouées (Thérapie, Self-Help, Coaching) — cards rouge
- 3 éléments cruciaux numérotés (Synthèse Globale, Cohérence Interne, Sortie de Boucle)

### Feature 2 — Récit de la Destruction (`Feature2Story.tsx`)
- Présentation BreakYourCycle
- Titre choc : "MA DEUXIÈME RELATION M'A PRESQUE DÉTRUITE."
- Narration séquentielle avec citations partenaire (bordure violette gauche)
- Pattern après dispute (liste bullets fond rouge sombre)
- Pull quote final

### Feature 3 — Le Déclic et les 5 Failles (`Feature3Mechanism.tsx`)
- 4 mois de recherche, constat du vide en français
- 5 failles cognitives (Ni/Fe/Ti/Se/Ni) — format mécanisme → conséquence
- 3 besoins : IDENTIFIER / DOCUMENTER / VISUALISER
- Cartographie des 7 phases du cycle (Phase 0 à 6 + retour Phase 2)
- Résultats 6 mois après (bullets verts)
- Présentation DBR + 5 bases scientifiques (Young, Jung/Nardi, Skinner, Levine, Carnes)
- Stat "200+ heures → 3-4h"

### Feature 4 — Produit et Offre (`Feature4Offer.tsx`)
- Titre produit + mockup livret (placeholder violet/gold)
- Pas pour vous (✗ rouge) / Pour vous (✓ vert) — 2 colonnes
- 4 témoignages (Mariane, Daisy, Cynthia, Soraya) — cards fond bg
- Ce que ce n'est PAS / Ce que c'est — 2 colonnes
- Phase 1 : 5 composants numérotés avec valeur individuelle
- Phase 2 + Phase 3 + Bonus — 3 mini-cards
- Tableau valeur totale → 107€
- Bloc prix : ~~107€~~ → **47€** + badge "PRIX SPÉCIAL"
- Rareté : "SEULEMENT 50 PLACES DISPONIBLES" (fond rouge)
- CTA Whop principal
- Double garantie : 14 jours légal + Garantie résultat BreakYourCycle

### Feature 5 — Choix Final et FAQ (`Feature5Choice.tsx`)
- 2 choix : CHOIX #1 rouge (fermer) vs CHOIX #2 vert (cliquer)
- Futur 18 mois — 6 bullets verts
- CTA intermédiaire + "Le choix vous appartient"
- 5 étapes du processus post-achat
- FAQ Accordion — 6 questions (Trop cassée, Livres narcissiques, Partenaire pas toxique, Thérapie vs heures, Prix, Garantie)
- CTA final centré grand format
- Footer : références scientifiques + contact@breakyourcycle.com

---

## Composants UI clés

### `CTAButton`
```tsx
<CTAButton label="..." size="lg" | "sm" className="..." />
// Lien hardcodé : https://whop.com/checkout/plan_579QNJsiFPPl9
// Hover : bg-violet-light + shadow dorée
```

### `FadeIn`
```tsx
<FadeIn delay={0.1} className="...">
  {children}
</FadeIn>
// useInView({ once: true, margin: "-60px" })
// opacity 0→1, y 24→0, durée 0.55s
```

### `Accordion`
```tsx
<Accordion items={[{ question: "...", answer: "..." }]} />
// Un seul item ouvert à la fois (openIndex state)
// AnimatePresence height 0→auto
```

---

## Commandes

```bash
# Développement
npm run dev        # http://localhost:3000

# Build production
npm run build      # Vérifie TypeScript + génère static

# Preview build
npm run start
```

---

## TODO / Améliorations futures

- [ ] Remplacer les placeholders SVG par de vraies images (hero, mockup livre, badge garantie, og-image)
- [ ] Ajouter `metadataBase` dans `layout.tsx` pour les OG images en production
- [ ] Intégrer un vrai compteur de places disponibles (si dynamique via API Whop)
- [ ] Ajouter Google Analytics / Meta Pixel si besoin
- [ ] Tester sur mobile 375px, 768px, 1280px
- [ ] Ajouter une barre de progression de lecture sticky (optionnel)

---

## Source du contenu

Le contenu narratif suit exactement le PDF de vente original. La structure des 5 Features est documentée dans `../prdr.md` (à la racine du dossier parent `PAGE DE VENTE DETOX/`).
