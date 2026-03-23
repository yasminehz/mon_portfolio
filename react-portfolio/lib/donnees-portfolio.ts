export type ProjetPortfolio = {
  id: number;
  titre: string;
  description: string;
  tags: string[];
  descriptionLongue: string;
  fonctionnalites: string[];
  images: CleImageProjet[];
  github: string;
  live: string;
};

export type CleImageProjet =
  | "biblio"
  | "recherche"
  | "lecture"
  | "utilisateur"
  | "sante"
  | "calendrier"
  | "soignant"
  | "traitement"
  | "cupcake"
  | "prix"
  | "statistiques"
  | "gateau"
  | "vitrine"
  | "dessert"
  | "avis"
  | "contact"
  | "panier"
  | "mobile"
  | "validation"
  | "partage";

export type EtapeParcours = {
  periode: string;
  titre: string;
  sousTitre: string;
  description: string;
  type: "formation" | "stage";
};

export type ItemVeilleTechnologique = {
  titre: string;
  resume: string;
  pointsCles: string[];
};

export const todosPortfolio = [
  "App biblio",
  "App comparateur de sab",
  "App gestion rdv",
  "veille ia et medecine",
  "tableau compétence",
  "App tablier rose formation btech https://yasminehz.github.io/Letablierose/index.html",
  "App mobile course",
  "stage premiere année",
  "stage deuxieme année",
];

export const lienTableauCompetences = "https://docs.google.com/spreadsheets/d/1_8q-UGLzlTKc0yV5ZL1HGw9lEXuxF7RbN6p96MC2bOU/edit?usp=sharing";

export const veilleTechnologiquePortfolio: ItemVeilleTechnologique[] = [
  {
    titre: "Diagnostic assiste par l'IA",
    resume:
      "Les modeles d'IA aident les professionnels de sante a detecter plus vite certaines anomalies sur des images medicales.",
    pointsCles: [
      "Analyse d'images en radiologie et dermatologie",
      "Aide a la decision, sans remplacer le medecin",
      "Besoin de validation clinique continue",
    ],
  },
  {
    titre: "Medecine personnalisee",
    resume:
      "L'IA facilite l'analyse de grandes quantites de donnees pour adapter les traitements au profil du patient.",
    pointsCles: [
      "Croisement donnees biologiques et historiques patients",
      "Prediction des reponses aux traitements",
      "Suivi plus fin de l'evolution clinique",
    ],
  },
  {
    titre: "Enjeux et vigilance",
    resume:
      "L'usage de l'IA en medecine doit rester encadre pour proteger les patients et garantir la fiabilite des systemes.",
    pointsCles: [
      "Protection des donnees de sante",
      "Reduction des biais algorithmiques",
      "Transparence et explicabilite des modeles",
    ],
  },
];

export const parcoursPortfolio: EtapeParcours[] = [
  {
    periode: "2020 - 2023",
    titre: "Licence Langues étrangères appliquées",
    sousTitre: "Anglais - Italien",
    description:
      "Formation universitaire en langues appliquées aux affaires et au commerce international.",
    type: "formation",
  },
  {
    periode: "2024 - 2026",
    titre: "BTS SIO option SLAM",
    sousTitre: "Solutions Logicielles et Applications Métiers",
    description:
      "Formation en développement d'applications, bases de données et gestion de projets informatiques.",
    type: "formation",
  },
  {
    periode: "2025",
    titre: "Stage - Développeuse Junior",
    sousTitre: "Mairie de Tourcoing",
    description:
      "Développement d'une application de gestion de demande de congé.",
    type: "stage",
  },
  {
    periode: "2026",
    titre: "Stage - Développeuse Web",
    sousTitre: "Ateja",
    description:
      "Développement d'une application de CRM d'entreprise, travail en équipe, gestion de projets clients.",
    type: "stage",
  },
];

export const projetsPortfolio: ProjetPortfolio[] = [
  {
    id: 1,
    titre: "Site d'une bibliothèque",
    description:
      "Un site web pour une bibliothèque avec un catalogue de livres, gestion d'utilisateurs et des emprunts.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    descriptionLongue:
      "https://4223.s5.nuage-peda.fr/projetSIO2Hop/index.php?action=livres Projet complet d'une plateforme web pour une bibliothèque municipale. Les utilisateurs peuvent consulter le catalogue de livres, rechercher par titre ou auteur, créer un compte et emprunter des livres. Les administrateurs peuvent gérer l'inventaire, les emprunts et les retours.",
    fonctionnalites: [
      "Catalogue de livres avec recherche avancée",
      "Système d'authentification utilisateur",
      "Gestion des emprunts et retours",
      "Historique des emprunts",
      "Notifications de rappel",
    ],
    images: ["biblio", "recherche", "lecture", "utilisateur"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 2,
    titre: "Application de gestion de RDV",
    description:
      "Application de gestion de RDV médicaux. Gestion des utilisateurs patients et médecins, prise de rendez-vous en ligne.",
    tags: ["HTML", "CSS", "Symfony", "MySQL"],
    descriptionLongue:
      "Plateforme web pour la gestion de rendez-vous médicaux. Les patients peuvent prendre rendez-vous avec des médecins, consulter leur historique et recevoir des confirmations. Les médecins gèrent leur agenda et les patients.",
    fonctionnalites: [
      "Prise de rendez-vous en ligne",
      "Calendrier pour les médecins et patients",
      "Notifications par email",
      "Gestion des dossiers médicaux",
      "Système de rappel automatique",
    ],
    images: ["sante", "calendrier", "soignant", "traitement"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 3,
    titre: "Calculateur de prix de vente",
    description:
      "Application pour calculer le prix de vente de gâteaux en fonction des coûts des ingrédients",
    tags: ["HTML", "CSS", "JavaScript"],
    descriptionLongue:
      "Outil interactif pour les pâtissiers permettant de calculer le prix de vente optimal en fonction des coûts des matières premières. L'application prend en compte les marges bénéficiaires et le temps de préparation.",
    fonctionnalites: [
      "Calcul automatique des coûts",
      "Gestion de la marge bénéficiaire",
      "Export des données",
      "Historique des calculs",
      "Interface intuitive et rapide",
    ],
    images: ["cupcake", "prix", "statistiques", "gateau"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 4,
    titre: "Site vitrine d'une boutique",
    description:
      "Site vitrine pour une entreprise de vente de gâteau et patisseries avec catalogue de produits, page d'avis et formulaire de contact.",
    tags: ["HTML", "CSS"],
    descriptionLongue:
      "Site professionnel pour une pâtisserie locale. Les clients peuvent découvrir les produits, lire les avis, consulter les horaires d'ouverture et contacter directement le commerce via un formulaire.",
    fonctionnalites: [
      "Catalogue de produits avec photos",
      "Système d'avis clients",
      "Formulaire de contact",
      "Informations de localisation",
      "Galerie de projets personnalisés",
    ],
    images: ["vitrine", "dessert", "avis", "contact"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 5,
    titre: "Appli mobile de liste de course",
    description:
      "Application mobile pour créer et gérer des listes de courses, avec gestion de compte.",
    tags: ["HTML", "CSS", "ReactNative"],
    descriptionLongue:
      "Application mobile native permettant aux utilisateurs de créer et gérer des listes de courses en temps réel. Synchronisation cloud pour accéder à vos listes depuis n'importe quel appareil.",
    fonctionnalites: [
      "Création et édition de listes",
      "Synchronisation cloud",
      "Partage de listes avec la famille",
      "Gestion des catégories",
      "Notification pour les articles manquants",
    ],
    images: ["panier", "mobile", "validation", "partage"],
    github: "https://github.com",
    live: "#",
  },
];
