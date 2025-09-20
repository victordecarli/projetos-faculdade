export const user = {
    id: 0,
    personalInfo: {
      name: "Victor de Carli",
      title:
        "Full Stack Developer | React | Redux | Express | Typescript | Node.js | MongoDB",
      location: "Brasil",
      email: "vonorvictor@gmail.com",
      linkedin: "https://www.linkedin.com/in/dev-victor",
      portfolio: "https://victordecarli.github.io/",
    },

    summary:
      "Desenvolvedor fullstack com expertise na arquitetura MERN (MongoDB, Express.js, React.js, Node.js), com uma sólida base em frontend e em transição para uma atuação fullstack. Colaboro ativamente com a equipe de desenvolvimento na criação de novas funcionalidades, na resolução de bugs e na refatoração de interfaces, com foco em UX/UI, para garantir sistemas intuitivos e eficientes.",

    skills: {
      frontend: [
        "React.js",
        "Redux.js",
        "SCSS",
        "Styled Components",
        "TailwindCSS",
        "MUI",
        "JavaScript/ES6+",
        "UI/UX Básico",
      ],
      backend: ["Node.js", "Express.js", "MongoDB"],
      soft: [
        "Comunicação técnica",
        "resolução ágil de problemas",
        "trabalho em equipe",
      ],
    },

    experience: [
      {
        company: "Jão Delivery",
        role: "Desenvolvedor Full Stack Júnior",
        startDate: "2025-05-01",
        endDate: "Present",
        location: "Cacoal, Rondônia, Brasil",
        description:
          "Atuo como desenvolvedor fullstack em projetos que usam a arquitetura MERN (MongoDB, Express.js, React.js, Node.js), com uma sólida base em frontend e em transição para uma atuação fullstack.",
      },
    ],

    contributions: [
      {
        title: "Desenvolvimento de Features",
        details:
          "Construção de novas funcionalidades e features CRUD completas, desde o frontend até o backend.",
      },
      {
        title: "Construção de UI",
        details:
          "Refatoração e criação de interfaces utilizando MUI e React, e Angular e SCSS.",
      },
      {
        title: "Resolução de Bugs",
        details:
          "Atuação na correção de bugs para garantir a estabilidade e o bom desempenho dos sistemas.",
      },
    ],

    projects: [
      {
        id: 1,
        name: "Calculadora de Orçamento",
        description:
          "Permite que técnicos de assistência calculem orçamentos de forma rápida e intuitiva. Basta inserir o valor da peça e da mão de obra para obter uma sugestão de preço, incluindo a média de mercado e o lucro esperado.",
        techs: ["Figma", "React", "Vite", "Prettier", "ESLint (Airbnb)"],
      },
      {
        id: 2,
        name: "Sistema de Precificação",
        description:
          "Automatiza a precificação de produtos, substituindo o ajuste manual das margens de lucro e arredondamento de valores.",
        techs: ["Figma", "React", "Vite.js", "ESLint (Airbnb)", "Prettier"],
      },
    ],
}

