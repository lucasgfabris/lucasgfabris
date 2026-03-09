/**
 * Configurações do README
 * Execute: node generate-readme.js
 */

const PROFILE = {
  name: "Fabris",
  location: "Vitória/ES",
  github: "lucasgfabris",
  stack: ["TypeScript", "Node.js", "Angular", "Java"],
  domains: ["PDV", "Delivery", "ERP", "WMS", "Integrações de pagamento"],
  hobbies: ["escrita", "música"],
  linkedin: "https://www.linkedin.com/in/lucas-fabris/",
  email: "lucas.fabris@yooga.com.br",
};

const LOGOS = {
  yooga: "./assets/logos/yooga.jpg",
  reply: "./assets/logos/reply.jpg",
  inflor: "./assets/logos/inflor.jpg",
};

const EXPERIENCES = [
  {
    company: "Yooga",
    role: "Software Engineer",
    type: "Full-time",
    url: "https://yooga.com.br/",
    logo: LOGOS.yooga,
    technologies: ["TypeScript", "Angular", "NestJS", "Java", "Quarkus", "Ionic", "Vue.js"],
    projects: ["PDV", "Pagamentos (Itaú, Tuna)", "Gestão de Mesas"],
  },
  {
    company: "Reply",
    role: "Analista Desenvolvedor PL/SQL",
    type: "Full-time",
    url: "https://reply.com.br/",
    logo: LOGOS.reply,
    technologies: ["Oracle PL/SQL", "SQL"],
    projects: ["WMS", "Sustentação e Performance de Banco de Dados"],
  },
  {
    company: "INFLOR",
    role: "Development Analyst",
    type: "Full-time",
    url: "https://inflor.com.br/",
    logo: LOGOS.inflor,
    technologies: ["C#", "Oracle PL/SQL", "Git", "Azure DevOps"],
    projects: ["Sistema de Gestão Florestal"],
  },
];

const PROJECTS = [
  {
    name: "ffmpeg-compress-web",
    url: "https://github.com/lucasgfabris/ffmpeg-compress-web",
    description: "Compressor de vídeo web usando FFmpeg",
  },
  {
    name: "hello-cursor",
    url: "https://github.com/lucasgfabris/hello-cursor",
    description: "CLI que gera relatório diário com clima e tarefas do Jira",
  },
  {
    name: "invisible-characters-detector",
    url: "https://github.com/lucasgfabris/invisible-characters-detector",
    description: "Detector de caracteres invisíveis",
  },
  {
    name: "nest-pedido-facil",
    url: "https://github.com/lucasgfabris/nest-pedido-facil",
    description: "API em NestJS",
  },
];

module.exports = { PROFILE, LOGOS, EXPERIENCES, PROJECTS };
