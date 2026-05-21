### E aí! Sou o Lucas Fabris

Dev full-stack de Vitória/ES. Trabalho principalmente com **TypeScript**, **Node.js**, **Angular**, **Java**.

Já passei por projetos de pdv, delivery, erp, wms, integrações de pagamento. Fora do código, curto escrita e música.

---

### GitHub Analytics

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=lucasgfabris&theme=tokyonight&hide_border=true" alt="GitHub Streak"/>
</p>

---

### Experiência de trabalho

Na visão geral abaixo você encontrará minha experiência de trabalho mais recente:

[<img align="left" height="94px" width="94px" alt="Yooga" src="./assets/logos/yooga.jpg"/>](https://yooga.com.br/)

**Software Engineer** \
[**Yooga**](https://yooga.com.br/) • Full-time \
Linguagens & Tecnologias: `TypeScript`, `Angular`, `NestJS`, `Java`, `Quarkus`, `Ionic`, `Vue.js`\
Projetos em destaque: PDV, Gestão de Mesas, Delivery, Pagamentos (Itaú, Tuna), PLG
<br/>
<br/>

[<img align="left" height="94px" width="94px" alt="Reply" src="./assets/logos/reply.jpg"/>](https://www.reply.com/pt)

**Analista Desenvolvedor PL/SQL** \
[**Reply**](https://www.reply.com/pt) • Full-time \
Linguagens & Tecnologias: `Oracle PL/SQL`, `SQL`\
Projetos em destaque: WMS, Sustentação e Performance de Banco de Dados
<br/>
<br/>

[<img align="left" height="94px" width="94px" alt="INFLOR" src="./assets/logos/inflor.jpg"/>](https://inflor.com.br/)

**Development Analyst** \
[**INFLOR**](https://inflor.com.br/) • Full-time \
Linguagens & Tecnologias: `C#`, `Oracle PL/SQL`, `Git`, `Azure DevOps`\
Projetos em destaque: Sistema de Gestão Florestal
<br/>
<br/>

Por favor, encontre-me no [LinkedIn](https://www.linkedin.com/in/lucas-fabris/) para uma descrição mais detalhada da minha experiência de trabalho, educação e certificação.

---

### Atuação Técnica — Yooga Tecnologia

> Set/2025 – Mai/2026 · Full-Stack Software Engineer

Abaixo, um panorama dos projetos e features que desenvolvi durante minha passagem pela Yooga:

<details>
<summary><b>Yooga SmartPOS</b> — App Android nativo para terminais de ponto de venda &nbsp; <code>Kotlin</code> <code>Jetpack Compose</code> <code>Hilt</code> <code>JUnit</code></summary>
<br/>

- Sistema completo de **gestão de mesas** — abertura, fechamento, transferência entre garçons e controle de comandas
- Fluxos de **pagamento** individual e coletivo com taxa de serviço configurável e validação de valores
- Suporte a **produtos pesáveis** com dialog de entrada de peso e arredondamento monetário padronizado
- Sistema unificado de **descontos/acréscimos** com regras de negócio (bloqueio de venda zerada)
- Módulo de **impressão** por categoria com reimpressão de vias de cozinha
- **Edição de itens** no carrinho com substituição e tratamento de observações
- **RBAC** — roles, permissões e limite de mesas por usuário
- **Testes unitários** abrangentes para cálculos de pagamento, carrinho e cancelamento
- Migração **AGP 8.x → 9.x**

</details>

<details>
<summary><b>Yooga Grader</b> — Produto construído do zero para análise e scoring de restaurantes &nbsp; <code>NestJS</code> <code>React</code> <code>Stripe</code> <code>HubSpot</code></summary>
<br/>

**Backend (NestJS)**
- Arquitetura modular com módulos de scoring, scanning, pagamento e integrações externas
- Integração **Stripe** — checkout com paywall de relatórios e webhook de pagamento
- Integração **HubSpot** — criação automática de leads/deals com UTM e threshold de receita
- **Web scraping** via Firecrawl para enriquecimento de dados empresariais (Econodata)
- Sistema de **outreach viral** por email com suporte a sandbox
- **Alertas Slack** de fill rate com formatação rica

**Frontend (React)**
- Interface de scanning com cenas animadas e relatórios por pilar
- Lead capture overlay, paywall com gerenciamento de sessão
- Analytics com tracking de eventos e propagação de parâmetros UTM

</details>

<details>
<summary><b>Yooga Club</b> — Programa de fidelidade com cashback PIX &nbsp; <code>NestJS</code> <code>Ionic/Angular</code> <code>React</code> <code>TypeORM</code></summary>
<br/>

- **Motor de pontos** com cron jobs, histórico, soft delete e suporte multi-IDI
- Fluxo completo de **resgate de cashback via PIX** com estimativa de transferência e taxas dinâmicas
- Integração com marketplace para consulta de contas bancárias
- **Dashboard React** de gestão de cashbacks — filtros, paginação, exportação e modal de pagamento

</details>

<details>
<summary><b>Programa de Indicação</b> — Sistema de referral integrado ao HubSpot &nbsp; <code>NestJS</code> <code>Ionic/Angular</code> <code>HubSpot API</code></summary>
<br/>

- Webhook HubSpot para referrals com criação de deals e pipeline dinâmico
- Interface in-product com badge, sidebar e formulário de indicação
- CRUD de Challenges no backend
- **Desafio Relâmpago** — gamificação com stepper, formulários dinâmicos, auto-modal com cooldown e event tracking

</details>

<details>
<summary><b>Tooling & Integrações</b> — Automações internas e APIs diversas</summary>
<br/>

- **Slack → Jira** `NestJS` `RabbitMQ` `Redis` — Event handler com anexo de arquivos a tickets Jira via fila, thread store migrado para Redis
- **Garçom Digital** `Ionic/Angular` — Geração e customização de QR Codes, onboarding wizard multi-step
- **Autenticação** `Angular` `Ionic` — Token refresh com auth interceptor, re-autenticação silenciosa, fluxo de onboarding com cookies
- **API de Pagamento** `Quarkus/Java` — Endpoint de contas bancárias no marketplace
- **API de Delivery** `AdonisJS` — Suporte a entrega por bairros e banners customizados

</details>

<br/>

<table>
  <tr>
    <td><b>Mobile Android</b></td>
    <td>Kotlin · Jetpack Compose · Hilt · Coroutines · JUnit</td>
  </tr>
  <tr>
    <td><b>Mobile Híbrido</b></td>
    <td>Ionic · Angular · Capacitor</td>
  </tr>
  <tr>
    <td><b>Frontend Web</b></td>
    <td>React · Angular · TypeScript · Tailwind CSS</td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>NestJS · AdonisJS · Node.js · Quarkus (Java) · Go (Fiber)</td>
  </tr>
  <tr>
    <td><b>Integrações</b></td>
    <td>Stripe · HubSpot · Slack · Jira · Google Places · Firecrawl</td>
  </tr>
  <tr>
    <td><b>Infra</b></td>
    <td>RabbitMQ · Redis · TypeORM · MySQL</td>
  </tr>
</table>

---

### Alguns projetos

- [react-nest-face-auth](https://github.com/lucasgfabris/react-nest-face-auth) - Sistema de autenticação facial com React, NestJS e face-api.js
- [node-whatsapp-bulk](https://github.com/lucasgfabris/node-whatsapp-bulk) - API para envio de mensagens em lote via WhatsApp com Baileys
- [nest-pedido-facil](https://github.com/lucasgfabris/nest-pedido-facil) - API REST para pedidos com JWT, PostgreSQL e Swagger
- [python-video-cuts](https://github.com/lucasgfabris/python-video-cuts) - Gerador de cortes para YouTube Shorts, TikTok e Reels
- [ffmpeg-compress-web](https://github.com/lucasgfabris/ffmpeg-compress-web) - Aplicação web para comprimir vídeos com FFmpeg
- [slack-2-jira](https://github.com/lucasgfabris/slack-2-jira) - Integração Slack-Jira para criar tickets via comando
- [invisible-characters-detector](https://github.com/lucasgfabris/invisible-characters-detector) - Extensão Chrome que detecta 100+ tipos de caracteres invisíveis

Veja todos os projetos em [github.com/lucasgfabris](https://github.com/lucasgfabris?tab=repositories)
