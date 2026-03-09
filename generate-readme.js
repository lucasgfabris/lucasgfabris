const fs = require("fs");
const { PROFILE, EXPERIENCES, PROJECTS } = require("./config");

function generateExperience(exp) {
  return `[<img align="left" height="94px" width="94px" alt="${exp.company}" src="${exp.logo}"/>](${exp.url})

**${exp.role}** \\
[**${exp.company}**](${exp.url}) • ${exp.type} \\
Linguagens & Tecnologias: ${exp.technologies.map((t) => `\`${t}\``).join(", ")}\\
Projetos em destaque: ${exp.projects.join(", ")}
<br/>
<br/>
`;
}

function generateProject(proj) {
  return `- [${proj.name}](${proj.url}) - ${proj.description}`;
}

const readme = `### E aí! Sou o ${PROFILE.name}

Dev full-stack de ${PROFILE.location}. Trabalho principalmente com ${PROFILE.stack.map((s) => `**${s}**`).join(", ")}.

Já passei por projetos de ${PROFILE.domains.join(", ").toLowerCase()}. Fora do código, curto ${PROFILE.hobbies.join(" e ")}.

---

### GitHub Analytics

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${PROFILE.github}&theme=tokyonight&hide_border=true" alt="GitHub Streak"/>
</p>

---

### Experiência de trabalho

Na visão geral abaixo você encontrará minha experiência de trabalho mais recente:

${EXPERIENCES.map(generateExperience).join("\n")}
Por favor, encontre-me no [LinkedIn](${PROFILE.linkedin}) para uma descrição mais detalhada da minha experiência de trabalho, educação e certificação.

---

### Alguns projetos

${PROJECTS.map(generateProject).join("\n")}

Veja todos os projetos em [github.com/lucasgfabris](https://github.com/lucasgfabris?tab=repositories)
`;

fs.writeFileSync("README.md", readme);
console.log("README.md gerado com sucesso!");
