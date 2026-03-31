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

export const lienTableauCompetences = "https://docs.google.com/spreadsheets/d/1_8q-UGLzlTKc0yV5ZL1HGw9lEXuxF7RbN6p96MC2bOU/edit?usp=sharing";

export const veilleTechnologiquePortfolio: ItemVeilleTechnologique[] = [
  {
    titre: "IA et services de santé : tchnologies utilisées",
    resume:
      "L'IA en santé repose sur plusieurs technologies clés qui permettent d'analyser des données complexes et d'aider à la décision médicale.",
    pointsCles: [
      "Machine learning : apprentissage sur des images et resultats de laboratoire pour predire des risques et recommander des actions",
      "Traitement automatique du langage (NLP) : analyse des comptes rendus et courriers pour extraire des informations utiles ou résumer un dossier",
      "Modèles géneratifs : production de données ou d'images synthétiques pour entrainer d'autres modèles et simuler des cas cliniques",
    ],
  },
  {
    titre: "Principales applications de l'IA en santé",
    resume:
      "L'IA est déjà utilisée dans plusieurs situations médicales pour accélerer l'analyse et renforcer l'aide a la décision.",
    pointsCles: [
      "Aide au diagnostic : détection de tumeurs sur scanners, classification de lesions cutanées, dépistage de la rétinopathie diabétique",
      "Médecine prédictive : estimation du risque de sepsis, de décompensation en reanimation et de readmission a l'hopital",
      "Médecine personnalisée et organisation : recommandations adaptées au profil du patient, tri des examens, priorisation des dossiers, géneration de comptes rendus, télémédecine et suivi par capteurs",
    ],
  },
  {
    titre: "Interêts, limites et enjeux",
    resume:
      "L'IA apporte des gains concrets, mais son usage en santé doit rester rigoureusement encadré et valide dans le temps.",
    pointsCles: [
      "Interêts : améliorer la précision et la rapidité des décisions médicales, décharger les soignants de tâches répétitives, favoriser une médecine plus personnalisee",
      "Limites : qualité et biais des données, confidentialité et respect du cadre légal (consentement, anonymisation), sécurité et validation clinique continue",
      "Role humain : l'IA reste un outil d'aide, la décision finale appartient toujours au professionnel de santé",
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
      "Projet complet d'une plateforme web pour une bibliothèque d'un hôpital. Les utilisateurs peuvent consulter le catalogue de livres, rechercher par titre ou auteur, créer un compte et emprunter des livres. Les administrateurs peuvent gérer les emprunts et les retours.",
    fonctionnalites: [
      "Système d'authentification utilisateur",
      "Catalogue de livres avec recherche avancée sur plusieurs filtres",
      "Gestion des emprunts et retours",
      "Historique des emprunts",
    ],
    images: ["biblio", "recherche", "lecture", "utilisateur"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 2,
    titre: "Application de gestion de RDV mobile et web",
    description:
      "Application de gestion de RDV médicaux. Gestion des utilisateurs patients et médecins, prise de rendez-vous en ligne.",
    tags: ["HTML", "CSS", "Symfony", "MySQL", "React Native"],
    descriptionLongue:
      "Plateforme web et mobile pour la gestion de rendez-vous médicaux. Les patients peuvent prendre rendez-vous avec des médecins, consulter leur historique. Les médecins gèrent leur disponibilités et les patients. Les assistants gèrent les demandes de son médecin associé. L'application mobile appelle des API de l'application web pour une synchronisation des données en temps réel. L'application a été développée avec Symfony pour le backend et une application mobile React Native pour l'interface patient.",
    fonctionnalites: [
      "Prise de rendez-vous en ligne",
      "Enregistrement des indisponibilités des médecins",
      "Gestion des dossiers médicaux",
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

      "https://yasminehz.github.io/comparateur-prix-ECA/ Outil interactif pour les pâtissiers permettant de calculer le prix de vente d'un gâteau en fonction des coûts des matières premières. L'application prend en compte les marges bénéficiaires et le temps de préparation.",
    fonctionnalites: [
      "Calcul automatique des coûts",
      "Gestion de la marge bénéficiaire",
      "Export des données",
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
      " Site vitrine pour une entreprise de vente de gâteau et patisseries avec catalogue de produits, page d'avis et formulaire de contact.",
    tags: ["HTML", "CSS"],
    descriptionLongue:
      "https://yasminehz.github.io/Letablierose/index.html Site statique pour une pâtisserie fictive. Les clients peuvent découvrir les produits, découvrir l'histoire derrière la marque, lire les avis, consulter les horaires d'ouverture.",
    fonctionnalites: [
      "Catalogue de produits avec photos",
      "Système d'avis clients",
      "Informations de localisation",
    ],
    images: ["vitrine", "dessert", "avis", "contact"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 5,
    titre: "Stage Ateja - CRM d'entreprise",
    description:
      "Projet academique réalisé en stage chez Ateja : contribution au développement d'une application CRM web.",
    tags: ["Laravel", "Vue.js", "MySQL", "HTML", "CSS"],
    descriptionLongue:
      "Développement d'une application CRM d'entreprise. J'ai travaillé sur des modules de gestion de packages composer, la gestion de suivi des migrations et l'ajout de condition à la saisie de champs d'un formulaire.",
    fonctionnalites: [
      "Participation au développement de modules CRM",
      "Suivi des demandes et organisation des donnees clients",
      "Collaboration en équipe sur des besoins métiers réels",
    ],
    images: ["partage", "validation"],
    github: "https://github.com",
    live: "#",
  },

];

export const imagesParProjet: Record<number, string[]> = {
  1: [
    "/projets/projet-2-bibliotheque/biblio-new-1.png",
    "/projets/projet-2-bibliotheque/biblio-new-2.png",
    "/projets/projet-2-bibliotheque/biblio-new-3.png",
  ],
  2: [
    "/projets/projet-1-gestionRDV/rdv-new-1.png",
    "/projets/projet-1-gestionRDV/rdv-new-2.png",
    "/projets/projet-1-gestionRDV/rdv-new-3.png",
    "/projets/projet-1-gestionRDV/rdv-new-4.png",
    "/projets/projet-1-gestionRDV/rdv-new-5.png",
    "/projets/projet-1-gestionRDV/Simulator Screenshot - iPhone 16e - 2026-03-27 at 10.23.45.png",
    "/projets/projet-1-gestionRDV/Simulator Screenshot - iPhone 16e - 2026-03-27 at 10.23.54.png",
    "/projets/projet-1-gestionRDV/Simulator Screenshot - iPhone 16e - 2026-03-27 at 10.26.37.png",
    "/projets/projet-1-gestionRDV/Simulator Screenshot - iPhone 16e - 2026-03-27 at 10.26.43.png",
  ],
  3: ["/projets/projet-3-comparateur-prix/prix-new-1.png"],
  4: [
    "/projets/projet-4-tablier-rose/tablier-new-1.png",
    "/projets/projet-4-tablier-rose/tablier-new-2.png",
  ],
  5: [
    "/projets/projet-5-stage-ateja/Sans titre.png",
    "/projets/projet-5-stage-ateja/Sans titre2.png",
  ],
};
