# Mon Portfolio Web

Un site portfolio statique moderne créé avec HTML, CSS et JavaScript.

## 📁 Structure du projet

```
portfolio/
├── index.html       # Page principale
├── style.css        # Styles (responsive design)
├── script.js        # Logique et interactivité
└── README.md        # Ce fichier
```

## 🚀 Démarrage rapide

1. Ouvrez `index.html` dans votre navigateur
2. C'est tout ! Le site est entièrement statique et ne nécessite aucun serveur

## ✏️ Personnalisation

### Ajouter vos informations

1. **Informations personnelles** - Modifiez dans `index.html` :
   - Le titre du navigateur
   - L'email de contact
   - Les liens GitHub/LinkedIn

2. **Ajouter/Modifier des projets** - Dans `script.js`, modifiez l'array `projects` :

```javascript
{
    id: 7,
    title: "Mon Nouveau Projet",
    description: "Description du projet...",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🚀",
    github: "https://github.com/...",
    live: "https://..."
}
```

### Personnaliser les couleurs

Dans `style.css`, modifiez les variables au début du fichier :

```css
:root {
    --primary-color: #6366f1;      /* Couleur principale */
    --secondary-color: #ec4899;    /* Couleur secondaire */
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
}
```

## 📱 Fonctionnalités

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navigation fluide avec scroll smooth
- ✅ Animations élégantes au scroll
- ✅ Cartes de projets interactives
- ✅ Complètement statique (pas de dépendances)
- ✅ Performance optimale

## 📞 Section Contact

Mettez à jour les liens dans la section contact :
- Email : changez `votre.email@example.com`
- GitHub : ajoutez votre URL GitHub
- LinkedIn : ajoutez votre URL LinkedIn

## 🎨 Conseils de design

- Utilisez des emojis pertinents pour chaque projet
- Gardez les descriptions concises (2-3 lignes max)
- Ajoutez des tags significatifs (technologies utilisées)
- Assurez-vous que les liens GitHub et Live (démo) fonctionnent

## 📦 Déploiement

Le site peut être déployé gratuitement sur :
- **GitHub Pages** - Poussez le code sur GitHub, activez Pages
- **Netlify** - Drag & drop votre dossier
- **Vercel** - Importez depuis GitHub
- **Firebase Hosting** - Déployez avec Firebase CLI

## 💡 Améliorations futures

Vous pouvez ajouter :
- Mode sombre/clair
- Formulaire de contact avec intégration email
- Blog/articles
- Section À propos plus détaillée
- Téléchargement CV/portfolio PDF
- Animations au survol plus élaborées

Bon développement ! 🚀
# mon_portfolio
