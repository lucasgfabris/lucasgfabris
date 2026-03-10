/**
 * Configurações do README
 * Execute: node generate-readme.js
 */

const PROFILE = {
  name: "Lucas Fabris",
  location: "Vitória/ES",
  github: "lucasgfabris",
  stack: ["TypeScript", "Node.js", "Angular", "Java"],
  domains: ["PDV", "Delivery", "ERP", "WMS", "Integrações de pagamento"],
  hobbies: ["escrita", "música"],
  linkedin: "https://www.linkedin.com/in/lucas-fabris/",
  email: "gflucas23@gmail.com",
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
    projects: ["PDV", "Gestão de Mesas", "Delivery", "Pagamentos (Itaú, Tuna)", "PLG"],
  },
  {
    company: "Reply",
    role: "Analista Desenvolvedor PL/SQL",
    type: "Full-time",
    url: "https://www.reply.com/pt",
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
    name: "face-mask",
    url: "https://github.com/lucasgfabris/face-mask",
    description: "Sistema de autenticação facial com React, NestJS e face-api.js",
  },
  {
    name: "nest-pedido-facil",
    url: "https://github.com/lucasgfabris/nest-pedido-facil",
    description: "API REST para pedidos com JWT, PostgreSQL e Swagger",
  },
  {
    name: "fast-cut",
    url: "https://github.com/lucasgfabris/fast-cut",
    description: "Gerador de cortes para YouTube Shorts, TikTok e Reels",
  },
  {
    name: "ffmpeg-compress-web",
    url: "https://github.com/lucasgfabris/ffmpeg-compress-web",
    description: "Aplicação web para comprimir vídeos com FFmpeg",
  },
  {
    name: "slack-2-jira",
    url: "https://github.com/lucasgfabris/slack-2-jira",
    description: "Integração Slack-Jira para criar tickets via comando",
  },
  {
    name: "invisible-characters-detector",
    url: "https://github.com/lucasgfabris/invisible-characters-detector",
    description: "Extensão Chrome que detecta 100+ tipos de caracteres invisíveis",
  },
];

module.exports = { PROFILE, LOGOS, EXPERIENCES, PROJECTS };
