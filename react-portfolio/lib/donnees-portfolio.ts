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
      "Gestion des utilisateurs en accord avec les règles de confidentialité des données"
    ],
    images: [
      "/projets/projet-2-bibliotheque/biblio-new-1.png",
      "/projets/projet-2-bibliotheque/biblio-new-2.png",
      "/projets/projet-2-bibliotheque/biblio-new-3.png",
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
      "Gestion des rendez-vous"
    ],
    images: [
      "/projets/projet-1-gestionRDV/rdv-new-1.png",
      "/projets/projet-1-gestionRDV/rdv-new-2.png",
      "/projets/projet-1-gestionRDV/rdv-new-3.png",
      "/projets/projet-1-gestionRDV/rdv-new-4.png",
      "/projets/projet-1-gestionRDV/rdv-new-5.png",
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
      "Outil interactif pour les pâtissiers permettant de calculer le prix de vente d'un gâteau en fonction des coûts des matières premières. L'application prend en compte les marges bénéficiaires et le temps de préparation.",
    fonctionnalites: [
      "Calcul automatique des coûts",
    ],
    images: ["/projets/projet-3-comparateur-prix/prix-new-1.png"],
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
      "Formulaire de contact",
      "Galerie de projets",
    ],
    images: [
      "/projets/projet-4-tablier-rose/tablier-new-1.png",
      "/projets/projet-4-tablier-rose/tablier-new-2.png",
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
      "/projets/projet-5-stage-ateja/sanstitre1.png",
      "/projets/projet-5-stage-ateja/sanstitre2.png",
    ],
    github: "https://github.com",
    live: "#",
  },

];
