import {
  spoon,
  calendar,
  robot,
  lucia,
  jorge,
  poste,
  saluddigna,
  thezen,
  taglify,
  instagram,
  facebook,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "features",
    title: "Características",
  },
  {
    id: "selector",
    title: "¿Por qué nosotros?",
  },
  {
    id: "clients",
    title: "Clientes",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: robot,
    title: "Dieta personalizada con IA",
    content:
      "Personaliza tu alimentación por medio de una Inteligencia Artificial (100% seguro).",
  },
  {
    id: "feature-2",
    icon: calendar,
    title: "Agenda de citas",
    content:
      "Tenemos las mejores asesorías nutricionales para mejorar tus hábitos alimenticios. Contacto directo con nuestros especialistas.",
  },
  {
    id: "feature-3",
    icon: spoon,
    title: "Calendariza tu dieta",
    content:
      "Implementa tu dieta en tu calendario de Google, recibe notificaciones de tus horas de comida.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "La sección de dieta es muy completa y útil. Me ha ayudado a mejorar mi alimentación",
    name: "Lucia Yañez",
    title: "Culturista",
    img: lucia,
  },
  {
    id: "feedback-2",
    content:
      "Pude programar una cita con facilidad y rapidez. Además, el personal médico es muy profesional y atento.",
    name: "Ricardo Luján",
    title: "Jugador de Futbol Americano",
    img: poste,
  },
  {
    id: "feedback-3",
    content:
      "El servicio al cliente es excelente. Me resolvieron todas mis dudas y fueron muy amables.",
    name: "Jorge Montañez",
    title: "Atleta",
    img: jorge,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Servicio Activo",
    value: "24/7",
  },
  {
    id: "stats-2",
    title: "Ahorro comparado a otras plataformas",
    value: "60%",
  },
  {
    id: "stats-3",
    title: "Confidencial y Seguro",
    value: "100%",
  },
];

export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Inicio",
        link: "#home",
      },
      {
        name: "Características",
        link: "#features",
      },
      {
        name: "¿Por qué nosotros?",
        link: "#selector",
      },
      {
        name: "Clientes",
        link: "#clients",
      },
      /*{
        name: "Terminos y Condiciones",
        link: "",
      },*/
    ],
  },
  {
    title: "Comunidad",
    links: [
      {
        name: "Centro de ayuda",
        link: "#",
      },
      {
        name: "Socios",
        link: "#",
      },
      {
        name: "Sugerencias",
        link: "#",
      },
      /*{
        name: "Blog",
        link: "",
      },
      {
        name: "Newsletters",
        link: "",
      },*/
    ],
  },
  {
    title: "Asociados",
    links: [
      {
        name: "SaludDigna",
        link: "https://www.salud-digna.org/",
      },
      {
        name: "TheZen",
        link: "https://the-zen.vercel.app/",
      },
      {
        name: "Taglify",
        link: "https://taglify.org/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  // {
  //   id: "social-media-4",
  //   icon: linkedin,
  //   link: "https://www.linkedin.com/",
  // },
];

export const clients = [
  {
    id: "client-1",
    logo: thezen,
  },
  {
    id: "client-2",
    logo: saluddigna,
  },
  {
    id: "client-3",
    logo: taglify,
  },
];
