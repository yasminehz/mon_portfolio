export type ProjetPortfolio = {
  id: number;
  titre: string;
  description: string;
  tags: string[];
  descriptionLongue: string;
  fonctionnalites: string[];
  images: string[];
  github: string;
  live: string;
  demo?: string;
};

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

export const withBasePath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
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
      "Application web en PHP pour une bibliothèque d'un hôpital. Cette application utilise une structure MVC (modèle, vue, contrôleur). Les utilisateurs peuvent consulter le catalogue de livres, rechercher par titre ou auteur, créer un compte et emprunter des livres. Les administrateurs peuvent gérer les emprunts et les retours.",
    fonctionnalites: [
      "Système d'authentification utilisateur",
      "Catalogue de livres avec recherche sur plusieurs filtres",
      "Gestion des emprunts et retours",
      "Gestion des utilisateurs en accord avec les règles de confidentialité des données",
    ],
    images: [
      withBasePath("/projets/projet-2-bibliotheque/biblio-new-1.png"),
      withBasePath("/projets/projet-2-bibliotheque/biblio-new-2.png"),
      withBasePath("/projets/projet-2-bibliotheque/biblio-new-3.png"),
    ],
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
      "Application web et mobile pour la gestion de rendez-vous médicaux. Les patients peuvent prendre rendez-vous avec des médecins et consulter leur historique. Les médecins gèrent leur disponibilités et les patients. Les assistants gèrent les demandes de leur médecin associé. L'application mobile appelle des API de l'application Symfony pour une synchronisation des données en temps réel. L'application a été développée avec Symfony pour le backend et une application mobile React Native pour l'interface patient.",
    fonctionnalites: [
      "Création et authentification des utilisateurs",
      "Prise de rendez-vous en ligne",
      "Enregistrement des indisponibilités des médecins",
      "Gestion des rendez-vous",
    ],
    images: [
      withBasePath("/projets/projet-1-gestionRDV/rdv-new-1.png"),
      withBasePath("/projets/projet-1-gestionRDV/rdv-new-2.png"),
      withBasePath("/projets/projet-1-gestionRDV/rdv-new-3.png"),
      withBasePath("/projets/projet-1-gestionRDV/rdv-new-4.png"),
      withBasePath("/projets/projet-1-gestionRDV/rdv-new-5.png"),
    ],
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
      "Outil interactif pour les pâtissiers permettant de calculer le prix de vente d'un gâteau en fonction des coûts des matières premières. ",
    fonctionnalites: ["Calcul automatique des coûts"],
    images: [withBasePath("/projets/projet-3-comparateur-prix/prix-new-1.png")],
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
      "Galerie de projets",
    ],
    images: [
      withBasePath("/projets/projet-4-tablier-rose/tablier-new-1.png"),
      withBasePath("/projets/projet-4-tablier-rose/tablier-new-2.png"),
    ],
    github: "https://github.com",
    live: "#",
    demo: "https://yasminehz.github.io/Letablierose/index.html",
  },
  {
    id: 5,
    titre: "Stage Ateja - Application de CRM",
    description:
      "Projet réalisé en stage chez Ateja : contribution au développement d'une application CRM web.",
    tags: ["HTML", "CSS", "Laravel", "MySQL", "Vue.js"],
    descriptionLongue:
      "Lors de mon stage de 2ème année, j'ai participé au développement d'une application CRM d'entreprise. J'ai travaillé sur des modules de gestion de packages composer, la gestion de suivi des migrations et l'ajout de condition à la saisie de champs d'un formulaire. L'application utilise Laravel pour le back-end et VueJS pour le front-end, avec une base de données MySQL pour le stockage des données.",
    fonctionnalites: [
      "Participation au développement de modules CRM",
      "Collaboration en équipe sur des besoins métiers réels",
      "Développement de mes compétences en programmation et en formation sur de nouvelles technologies",
    ],
    images: [
      withBasePath("/projets/projet-5-stage-ateja/Sans titre.png"),
      withBasePath("/projets/projet-5-stage-ateja/Sans titre2.png"),
    ],
    github: "https://github.com",
    live: "#",
  },
];

export const imagesParProjet: Record<number, string[]> = {};
