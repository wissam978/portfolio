# Portfolio — Multi-pages

Portfolio étudiant style sombre/tech, 7 pages séparées, CSS et JS partagés.

## 📁 Structure des fichiers

```
portfolio/
├── index.html              ← Accueil (hero)
├── about.html              ← À propos / bio
├── skills.html             ← Compétences (techniques + barres)
├── projects.html           ← Galerie de projets
├── experience.html         ← Parcours (timeline)
├── certifications.html     ← Certifications
├── contact.html            ← Contact + formulaire
├── style.css               ← Styles communs (à modifier ici pour tout le site)
└── script.js               ← JS commun (animations, menu mobile, etc.)
```

## 🚀 Déploiement sur GitHub Pages

1. **Créer le dépôt** : sur GitHub, crée un dépôt nommé `votre-pseudo.github.io` (public).
2. **Uploader les fichiers** : glisse-dépose tous les fichiers (HTML + CSS + JS) à la racine du dépôt.
3. **Activer Pages** : Settings → Pages → Source : `main` / `/ (root)` → Save.
4. ✅ Site en ligne sur `https://votre-pseudo.github.io` (1-2 min).

## ✏️ Personnalisation

### Modifier le contenu
Chaque page est indépendante. Ouvre la page concernée et modifie directement le HTML :
- `index.html` → message d'accueil, nom, sous-titre
- `about.html` → biographie, infos personnelles
- `skills.html` → tags, pourcentages des barres (`data-value="85"`)
- `projects.html` → tes projets (titre, description, tags, liens)
- `experience.html` → formation, expériences, engagements
- `certifications.html` → tes certifications réelles
- `contact.html` → email, GitHub, LinkedIn

### Modifier le design
Tout est dans `style.css`, en haut du fichier :
```css
:root {
  --accent: #00f0ff;     /* couleur principale (cyan) */
  --accent-2: #7c3aed;   /* couleur secondaire (violet) */
  --bg: #0a0e1a;         /* fond */
}
```

### Ajouter une nouvelle page
1. Copie n'importe quelle page existante (ex : `projects.html` → `blog.html`).
2. Ajoute le lien dans la navbar de **toutes** les pages :
   ```html
   <li><a href="blog.html">blog</a></li>
   ```
3. C'est tout — le lien actif se met à jour automatiquement.

## ⚙️ Fonctionnalités incluses

- ✅ Navigation cohérente sur toutes les pages
- ✅ Lien actif détecté automatiquement (selon l'URL)
- ✅ Animations au scroll (fade-in)
- ✅ Effet "typing" sur les titres
- ✅ Menu hamburger sur mobile
- ✅ Barres de compétences animées
- ✅ Formulaire de contact (démo — à connecter à un service comme Formspree pour le rendre fonctionnel)
- ✅ 100% responsive

## 📧 Rendre le formulaire de contact fonctionnel
Pour recevoir vraiment les messages, utilise [Formspree](https://formspree.io) (gratuit) :
1. Inscription → récupère ton endpoint (`https://formspree.io/f/xxx`).
2. Dans `contact.html`, remplace `<form class="contact-form" id="contactForm">` par :
   ```html
   <form class="contact-form" action="https://formspree.io/f/xxx" method="POST">
   ```
3. Supprime le `e.preventDefault()` dans `script.js`.
