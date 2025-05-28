const projects = [
  {
    asFreelancer: true,
    index: 'lemonway',
    name: 'lemonway',
    url: 'https://lemonway.com',
    company: 'lemonway.com',
    description: 'Développer FullStack',
    tasks:
      "Développement d'un système de posts/commentaires et de repost, optimisation du flux d'activité grâce au caching, intégration de paiements via Stripe et de la recherche avec Algolia. Participation au déploiement sur AWS et création de scripts avec AWS Lambda.",
    content:
      "Republike.io est une plateforme de média social axée sur le partage des profits, le soutien au bien commun, et la propriété utilisateur. Elle adopte un modèle économique \"Pay-to-Own\", permettant aux utilisateurs de devenir copropriétaires de la plateforme, tout en mettant l'accent sur un avenir durable et éthique dans l'ère de l'intelligence artificielle.",
    date: '11/2024 - 04/2025',
    techno: ['NodeJS', 'AWS', 'MongoDB'],
    logo: 'https://logo.clearbit.com/lemonway.com',
  },
  {
    asFreelancer: true,
    index: 'republike',
    name: 'Republike',
    url: 'https://republike.io',
    company: 'republike.io',
    description: 'Développer FullStack',
    tasks:
      "Développement d'un système de posts/commentaires et de repost, optimisation du flux d'activité grâce au caching, intégration de paiements via Stripe et de la recherche avec Algolia. Participation au déploiement sur AWS et création de scripts avec AWS Lambda.",
    content:
      "Republike.io est une plateforme de média social axée sur le partage des profits, le soutien au bien commun, et la propriété utilisateur. Elle adopte un modèle économique \"Pay-to-Own\", permettant aux utilisateurs de devenir copropriétaires de la plateforme, tout en mettant l'accent sur un avenir durable et éthique dans l'ère de l'intelligence artificielle.",
    date: '09/2023 - 09/2024',
    techno: ['React', 'NextJS', 'NodeJS', 'AWS', 'MongoDB'],
    logo: 'https://logo.clearbit.com/republike.io',
  },
  {
    asFreelancer: true,
    index: 'dialonce',
    name: 'DialOnce',
    url: 'https://dialonce.ai/index.html',
    company: 'dialonce.ai',
    description: 'Développer FullStack & DevOPS',
    tasks:
      "Participation au développement frontend, backend et DevOps, conception de services pour les SMS, l'analyse de données et les emails, ainsi que la refonte d'un service utilisé par des milliers d'utilisateurs. En DevOps, optimisation de CI/CD avec GitLab, orchestration de Kubernetes via ArgoCD, et intégration de services via Helm et IaC.",
    content:
      "Chez Dialonce.ai, une entreprise spécialisée en relation client, j'ai occupé le poste de développeur fullstack, utilisant la stack MERN pour le développement. Mes responsabilités incluaient également la conteneurisation avec Docker, la gestion de clusters Kubernetes avec Helm et ArgoCD, ainsi que la mise en œuvre de l'infrastructure as code avec Terraform et Pulumi.",
    date: '09/2021 - 09/2023',
    techno: ['React', 'NodeJS', 'Kubernetes', 'Docker', 'Terraform', 'Pulumi'],
    logo: 'https://foxeet.fr/images/logo/7e510a87-2df9-4ffd-a722-869a90f47a0d/solution-dialonce-relation-client-intelligence-artificielle.webp',
  },
  {
    asFreelancer: true,
    index: 'orizons',
    name: 'Orizons',
    url: 'https://orizons.io',
    company: 'orizons.io',
    description: 'Développer FrontEnd',
    tasks:
      "Création de systèmes d'authentification avec Firebase, gestion de formulaires complexes avec React Hook Form et Zod, optimisation des interfaces frontend. Conception d'interfaces utilisateurs performantes et ergonomiques, en garantissant une expérience fluide et réactive.",
    content:
      "Chez Orizons, j'ai contribué à digitaliser les services d'efficacité énergétique pour les professionnels et particuliers. Mon rôle en tant que développeur frontend comprenait la mise en place de systèmes d'authentification avec Firebase, la création de formulaires et l'intégration de ces éléments avec des API, spécifiquement en utilisant FastAPI pour le backend.",
    date: '05/2021 - 09/2021',
    logo: 'https://cdn.brandfetch.io/orizons.io',
  },
  {
    asFreelancer: false,
    index: 'offeaze',
    name: 'Offeaze',
    url: '#',
    company: 'offeaze.co (fermé)',
    description: 'Développer FrontEnd',
    tasks:
      "Création et recherche d'annonces, avec gestion des problématiques de référencement. Utilisation du SSR avec NextJS pour améliorer l'indexation des pages dynamiques et optimiser le temps de chargement. Intégration des paiements via Stripe et déploiement de services sur AWS EBS pour garantir scalabilité et robustesse.",
    content:
      "Chez Offeaze, une plateforme dédiée à la mise en relation entre particuliers et professionnels pour la location de bureaux privés, de coworking et d'espaces de réunion, j'ai occupé le poste de développeur frontend. La plateforme, désormais fermée, était développée avec Next.js, Tailwind CSS, et Apollo Client pour le frontend, et NestJS avec Apollo (GraphQL) pour le backend. J'ai également intégré diverses API, telles que Google Maps, Stripe, et Sentry, pour enrichir les fonctionnalités de la plateforme.",
    date: '09/2019 - 09/2021',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGq_BaGbuYgTg/company-logo_200_200/company-logo_200_200/0/1634744736608/offeaze_logo?e=2147483647&v=beta&t=yAaQyMXx1t2Q3NBP308AbGkPkzqVBmdGOe7bJ4RrkKw',
  },
];

const studies = [
  {
    index: 'aws-cloud-developer',
    school: 'AWS',
    date: '2025',
    description: 'AWS Certified Developer - Associate DVA-C02',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/63d764c6b3804050b8a7a45ecbf26c3b',
    logo: 'https://logo.clearbit.com/amazon.com',
  },
  {
    index: 'aws-cloud-practitioner',
    school: 'AWS',
    date: '2025',
    description: 'AWS Certified Cloud Practitioner CLF-C02',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/63d764c6b3804050b8a7a45ecbf26c3b',
    logo: 'https://logo.clearbit.com/amazon.com',
  },
  {
    index: 'epitech',
    school: 'Epitech',
    date: '2021',
    description: "Master Architecte logiciel et développeur d'application",
    url: 'https://www.epitech.eu',
    logo: 'https://logo.clearbit.com/epitech.eu',
  },
];

export { projects, studies };
