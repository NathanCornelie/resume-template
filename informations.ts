//  MAIN PAGE
const informations = {
  name: "Diletta CHIARO",
  job: "AI Reseacher",
  about:
    "Chien Shiung Wu is a professor of artificial " +
    "intelligence at the Stanford AI Lab. Her research interests includ" +
    "e distributed robotics, mobile computing and programmable matter. She leads the Robotic N" +
    "eurobiology group, which develops self-reconfiguring robots, systems of self-organizing robots, and" +
    " mobile sensor networks.",
  interest: [
    "Artificial Intelligence",
    "Computational Linguistics",
    "Information Retrieval",
  ],
  educations: [
    { title: "PhD Artificial Intelligence", school: "Stanford University" },
    {
      title: "MEng Artificial Intelligence",
      school: "Massachusetts Institute of Technology",
    },
    {
      title: "BSc Artificial Intelligence",
      school: "Massachusetts Institute of Technology",
    },
  ],
  publications: [
    {
      image: "/pub1.webp",
      title: "An example preprint / working paper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
        "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
      date: "Apr 7, 2019",
    },
    {
      image: "/pub2.webp",
      title: "An example preprint / working paper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
        "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
      date: "Apr 7, 2019",
    },
  ],
  my_researches: {
    content:
      "Use this area to speak to your mission. I’m a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy. Please reach out to collaborate 😃",
    image: "research.webp",
  },
};

// EXPERIENCES PAGE
const experiences = [
  {
    titre: "Stage Ingénieur DevOps Cloud",
    lieu: "Excellium Services Luxembourg",
    debut: "Mars 2024",
    fin: "Août 2024",
    image: "claim_logo.png",
    missions: [
      {
        titre: "Réalisation de scripts d’automatisation avec Ansible",
        taches: [
          "configuration d’instances VPN clients et serveurs",
          "Ajout de règles de firewall",
        ],
      },
      {
        titre:
          "Développement d’une application fullStack avec ReactJS en TypeScript et NodeJS",
        taches: [],
      },
      {
        titre:
          "Réalisation de pipelines AzureDevOps pour la sécurisation d’image Docker",
        taches: [],
      },
      {
        titre:
          "Développement d’outils en Python pour relever les erreurs présentes dans les fichier de configuration d’un firewall et générer des rapports.",
        taches: [],
      },
    ],
  },
  {
    titre: "Stage Ingénieur DevOps Cloud",
    lieu: "Excellium Services Luxembourg",
    debut: "Mars 2024",
    fin: "Août 2024",
    image: "claim_logo.png",
    missions: [
      {
        titre: "Réalisation de scripts d’automatisation avec Ansible",
        taches: [
          "configuration d’instances VPN clients et serveurs",
          "Ajout de règles de firewall",
        ],
      },
      {
        titre:
          "Développement d’une application fullStack avec ReactJS en TypeScript et NodeJS",
        taches: [],
      },
      {
        titre:
          "Réalisation de pipelines AzureDevOps pour la sécurisation d’image Docker",
        taches: [],
      },
      {
        titre:
          "Développement d’outils en Python pour relever les erreurs présentes dans les fichier de configuration d’un firewall et générer des rapports.",
        taches: [],
      },
    ],
  },
  {
    titre: "Stage Développeur",
    lieu: "BIAC Log SA Luxembourg",
    debut: "Juin 2023",
    fin: "Août 2023",
    image: "claim_logo.png",
    missions: [
      {
        titre:
          "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
        taches: [],
      },
      {
        titre:
          "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
        taches: [],
      },
    ],
  },
];
const educations = [
  {
    titre: "Stage Développeur",
    lieu: "BIAC Log SA Luxembourg",
    debut: "Juin 2023",
    fin: "Août 2023",
    image: "claim_logo.png",
    missions: [
      {
        titre:
          "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
        taches: [],
      },
      {
        titre:
          "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
        taches: [],
      },
    ],
  },
];

const awards = [
  {
    titre: "Stage Développeur",
    lieu: "BIAC Log SA Luxembourg",
    debut: "Juin 2023",
    fin: "",
    image: "claim_logo.png",
    missions: [
      {
        titre:
          "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
        taches: [],
      },
      {
        titre:
          "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
        taches: [],
      },
    ],
  },
];
// ARTICLES PAGE

const articles = [
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
  {
    titre:
      "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
    description:
      "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
    date: "12th March 2024",
    lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
  },
];

// CONFERENCE PAGE
const conferences = [
  {
    name: "Medical Imaging with Deep Learning Conference",
    place: "Paris, FRANCE",
    date: "24th December 2023",
    link: "https://albarqouni.github.io/",
    image: "conference.png",
  },
  {
    name: "Medical Imaging with Deep Learning Conference",
    place: "Paris, FRANCE",
    date: "24th December 2023",
    link: "https://albarqouni.github.io/",
    image: "claim_logo.png",
  },
  {
    name: "Medical Imaging with Deep Learning Conference",
    place: "Paris, FRANCE",
    date: "24th December 2023",
    link: "https://albarqouni.github.io/",
    image: "vite.svg",
  },
];

const links = {
  linkedin: "https://www.linkedin.com/in/dilettachiaro/",
  github: "https://github.com/dilettachiaro",
  scholar: "https://scholar.google.com/citations?user=n1VGy-gAAAAJ&hl=it",
  medium: "https://medium.com/@diletta.chiaro",
};
const gallery = {
  imgSrc: ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
};
export {
  conferences,
  informations,
  experiences,
  educations,
  awards,
  links,
  gallery,
  articles,
};
