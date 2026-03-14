# CLAUDE.md — DÉTOX COGNITIVE : Page de Vente BreakYourCycle

## Vue d'ensemble

Page de vente longue-form haute conversion pour le produit **"DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP"** de la marque **BreakYourCycle**.

- **Produit vendu via** : Whop — `https://whop.com/checkout/plan_579QNJsiFPPl9`
- **Prix affiché** : 47€ (barré 117€ — valeur totale réelle)
- **Langue** : Français uniquement
- **Dev server** : `npm run dev` → `http://localhost:3000`
- **GitHub** : `https://github.com/Elric-Yui/detox-cognitive-breakyourcycle`

---

## Stack

| Élément | Choix |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll-triggered) |
| Fonts | Playfair Display (titres) + Inter (corps) via Google Fonts |
| Hébergement | Netlify (déployé) |

---

## Structure des fichiers

```
detox-app/
├── app/
│   ├── page.tsx              ← Assemblage des 5 sections (Feature1 → Feature5)
│   ├── layout.tsx            ← Meta SEO, Google Fonts (Playfair + Inter), html lang="fr"
│   └── globals.css           ← Variables CSS palette, reset, scrollbar custom
├── components/
│   ├── Feature1Hero.tsx      ← Hero + empathie + science + 3 éléments cruciaux
│   ├── Feature2Story.tsx     ← Transition DBR + story complète BreakYourCycle
│   ├── Feature3Mechanism.tsx ← 5 failles + 7 phases + bases scientifiques + présentation DBR
│   ├── Feature4Offer.tsx     ← Produit + témoignages + prix + CTA + garanties
│   ├── Feature5Choice.tsx    ← 2 choix + futur + FAQ accordion + footer CTA
│   └── ui/
│       ├── CTAButton.tsx     ← Bouton violet → lien Whop, props: label, size ("lg"|"sm")
│       ├── Accordion.tsx     ← FAQ animé via Framer Motion AnimatePresence
│       └── FadeIn.tsx        ← Wrapper scroll-triggered (opacity 0→1, y 24→0)
├── public/
│   └── images/
│       └── og-image.png      ← Placeholder (à remplacer par une vraie image OG)
├── COMPOSANTS.txt            ← Guide de navigation des fichiers par section
├── tailwind.config.ts
├── next.config.mjs
├── netlify.toml              ← Config déploiement Netlify (Node 18 + plugin Next.js)
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

## État actuel de chaque section (session 3)

### Feature 1 — Hero & Accroche (`Feature1Hero.tsx`) ✅ Révisée
- Titre : "INFJ/INFP : Votre Cerveau N'est Pas Cassé. Il Est Mal Calibré Pour Les Relations Toxiques."
- Sous-titre : méthode DBR méconnue mais scientifique
- Intro empathique : référence au quiz passé, "vous êtes au bon endroit"
- Titre intermédiaire : "Si vous êtes ici, c'est pour une bonne raison."
- 5 pain points mis à jour (aimant narcissique, vidée, limites, culpabilité, seule)
- Transition : "Mais laissez moi vous dire quelque chose..."
- "Ce n'est pas votre faute" + "Votre cerveau INFP/INFJ est juste câblé différemment"
- Citation Acevedo 2014 + texte absorption + "C'est pour ça que vous absorbez tout..."
- Section : "C'est dérangeant, n'est ce pas ?" → critique 3 solutions
- Texte post-solutions : culpabilité de performer la guérison + éléments manquants
- 3 éléments cruciaux avec références scientifiques (Nardi, Tresna, Jung/Grant)
- Texte de clôture : "mise à jour logicielle" + invitation à continuer

### Feature 2 — Story (`Feature2Story.tsx`) ✅ Révisée
- Bloc transition DBR ("Votre cerveau n'est pas cassé...")
- Présentation BreakYourCycle + accroche "Pourquoi ?"
- Story complète : rencontre, love bombing (15 messages), chute, 6 phases de cycle,
  sacrifices, réveil via amie, "je ne reconnaissais plus la personne que j'étais devenue"
- Section se termine sur : "Pas de tristesse romantique. Non." → laisse le lecteur suspendu

### Feature 3 — Mécanisme (`Feature3Mechanism.tsx`) ✅ Révisée
- Titre : "Une obsession de comprendre"
- Question centrale : "POURQUOI retournée 6 fois ?"
- 4 mois de recherche (6 sources, 99% en anglais)
- Bloc déclic : interaction câblage INFJ + stratégie manipulation
- 5 failles cognitives (Ni/Fe/Ti/Se/Ni) — mécanisme → conséquence
- Pas des défauts, des vulnérabilités structurelles exploitées
- 3 besoins : IDENTIFIER / DOCUMENTER / VISUALISER
- 7 phases du cycle (cartographie visuelle timeline)
- Résultats 6 mois : tableau "avant → après" (intensité/potentiel/connexion)
- Transition : "Comment tu as fait EXACTEMENT ?"
- Présentation DBR + 5 bases scientifiques + 200h condensées en 3-4h

### Feature 4 — Offre (`Feature4Offer.tsx`) ✅ Révisée
- Label : "Je vous présente"
- Titre produit + mockup + description DBR
- Titre section : "Attention 💔 : CE MANUEL N'EST PAS POUR TOUT LE MONDE."
- Critères mis à jour (4 ✗ / 4 ✓)
- Intro témoignages : "méthode validée par des centaines de femmes"
- 4 témoignages reformatés (Mariane 34 INFJ / Daisy 28 INFP / Cynthia 41 INFJ / Soraya 31 INFP)
- Section "Ce que c'est / Ce n'est pas" : 3 ❌ rouges + séparateur + 3 ✅ verts
- Texte exclusivité INFJ/INFP avant composants
- Titre section composants : "Ce qui sera fait dans DETOX COGNITIVE..."
- Phase 1 en sous-titre doré
- 5 composants mis à jour (noms + descriptions exacts + valeurs en gold) :
  - 01 — Test de Profil Cognitif Relationnel (12€)
  - 02 — Matrice de Vulnérabilité (10€)
  - 03 — Journal de Patterns (15€)
  - 04 — Cartographie du Cycle Toxique (10€)
  - 05 — Rapport d'Auto Diagnostic (10€)
- "Ce n'est que la phase 1. Vous aurez également accès à :"
- Phase 2 — Déconstruction de l'Attachement (25€)
- Phase 3 — Reconstruction & Nouveaux Filtres (20€)
- Bonus — Recalibrage à Vie (15€)
- Tableau valeur : Phase 1 (57€) + Phase 2 (25€) + Phase 3 (20€) + Bonus (15€) = **117€**
- Accroche prix : "Je pourrais maintenir à 107€..."
- Titre : "UN PRIX SPÉCIAL POUR UNIQUEMENT MAINTENANT"
- Box transparence early adopteuse :
  - ✅ Phase 1 immédiate (80 pages) avec liste des 5 composants
  - ✅ Phases 2-3 & bonus sous 30 jours
  - ✅ Feedback VIP
  - Note garantie remboursement si délai non tenu
  - Bloc doré : 30% réduction → **47€ maintenant et uniquement maintenant**
- Box prix : ~~117€~~ → **47€**
- Rareté : 50 places
- CTA Whop
- Double garantie (14j légal + résultat)

### Feature 5 — Choix Final & FAQ (`Feature5Choice.tsx`) ⏳ Non révisée
- Structure initiale en place, textes à réviser dans session future

---

## Composants UI clés

### `CTAButton`
```tsx
<CTAButton label="..." size="lg" | "sm" className="..." />
// Lien hardcodé : https://whop.com/checkout/plan_579QNJsiFPPl9
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
```

---

## Commandes

```bash
npm run dev        # http://localhost:3000
npm run build      # Vérification TypeScript + build statique
npm run start      # Preview du build
```

---

## Déploiement Netlify

- **Repo** : `Elric-Yui/detox-cognitive-breakyourcycle` (branche `master`)
- **Base directory** : `detox-app`
- **Build command** : `npm run build`
- **Publish directory** : `.next`
- **Plugin** : `@netlify/plugin-nextjs` (installé en devDependency)
- **Node** : 18 (spécifié dans `netlify.toml`)
- **URL production** : `https://breakyourcycle.netlify.app`
- **Variable d'env à maintenir** : `NEXT_PUBLIC_SITE_URL=https://breakyourcycle.netlify.app` (aussi à setter dans Netlify dashboard)
- **Redirection post-paiement** : 100% client-side (`skipRedirect + onComplete → router.push("/merci")`) — pas de `returnUrl` Whop à configurer

## Variables d'environnement (.env.local — ne jamais committer)

| Variable | Valeur | Exposée browser ? |
|---|---|---|
| `NEXT_PUBLIC_WHOP_PLAN_ID` | `plan_U3s7jdRc2Hobl` | Oui (intentionnel) |
| `NEXT_PUBLIC_SITE_URL` | `https://breakyourcycle.netlify.app` | Oui (intentionnel) |
| `WHOP_WEBHOOK_SECRET` | `ws_c10...` (secret) | Non (server-side only) |

**Sur Netlify** : setter `NEXT_PUBLIC_SITE_URL` et `WHOP_WEBHOOK_SECRET` dans Site Settings → Environment Variables.

---

## TODO prioritaires pour la prochaine session

### Contenu page
- [ ] **Feature5Choice.tsx** — réviser tous les textes (choix final, futur 18 mois, FAQ, footer)
- [ ] Remplacer les placeholders images (hero 16:9, mockup livre, og-image)
- [ ] Mettre à jour le prix barré dans Feature5 (était 107€, maintenant 117€)
- [ ] Vérifier cohérence des prix sur toute la page (47€ / 117€ barré)
- [ ] Tester responsive mobile (375px, 768px, 1280px)
- [ ] Ajouter Google Analytics / Meta Pixel si besoin

### Intégration Kit (ConvertKit) — webhook
- [ ] Implémenter le TODO dans `app/api/whop-webhook/route.ts` ligne 34
- [ ] Au paiement confirmé : ajouter subscriber Kit + tag + déclencher séquence email
- [ ] Whop ne communique PAS avec les acheteurs (désactivé) — Kit est le seul canal
- [ ] Besoin avant d'implémenter : Kit API key, tag ID, sequence ID
- [ ] Ajouter `KIT_API_KEY` dans `.env.local` et dans Netlify env vars

### Déploiement
- [ ] Setter `WHOP_WEBHOOK_SECRET` dans Netlify → Site Settings → Environment Variables
- [ ] Setter `NEXT_PUBLIC_SITE_URL=https://breakyourcycle.netlify.app` dans Netlify env vars
- [ ] Configurer l'URL du webhook dans le dashboard Whop : `https://breakyourcycle.netlify.app/api/whop-webhook`

---

## Contexte produit important

- **Positionnement** : Seul guide en français qui connecte MBTI + relations toxiques de manière clinique
- **Cible** : Femmes INFJ/INFP ayant passé un quiz sur les mécanismes cognitifs
- **Méthode DBR** : Diagnostiquer — Briser — Reconstruire
- **Early adopteuses** : Phases 2, 3 et Bonus livrés sous 30 jours — si non respecté : remboursement intégral + Phase 1 offerte
- **Ton** : Clinique, factuel, pas de "self-love" vague — diagnostic précis et chirurgical

---

## Source du contenu

Structure des 5 Features dans `../prdr.md`. Le contenu narratif (story, failles, mécanismes) vient de l'expérience personnelle de BreakYourCycle enrichie de 5 frameworks scientifiques.
