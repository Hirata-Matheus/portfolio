<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

import { contactItems, droneCards, gallery, heroBadges, highlights, metrics, projects, stackGroups, steps, timeline } from "./data/portfolio";
import { useRevealOnScroll } from "./composables/useRevealOnScroll";
import { copyTextToClipboard } from "./utils/clipboard";
import { getRevealDelayStyle } from "./utils/reveal";

useRevealOnScroll();

const copiedEmail = ref<string | null>(null);
let copiedEmailTimeout: number | null = null;

async function handleCopyEmail(email: string) {
  const copied = await copyTextToClipboard(email);

  if (!copied) {
    return;
  }

  copiedEmail.value = email;

  if (copiedEmailTimeout !== null) {
    window.clearTimeout(copiedEmailTimeout);
  }

  copiedEmailTimeout = window.setTimeout(() => {
    copiedEmail.value = null;
    copiedEmailTimeout = null;
  }, 1800);
}

onBeforeUnmount(() => {
  if (copiedEmailTimeout !== null) {
    window.clearTimeout(copiedEmailTimeout);
  }
});
</script>

<template>
  <div id="top" class="site-shell">
    <header class="site-header">
      <div class="content-wrap header-inner">
        <a href="#top" class="brand-mark">
          <span class="material-symbols-rounded brand-icon">code</span>
          <span>Matheus Hirata</span>
        </a>

        <nav class="top-nav">
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#sobre">Sobre</a>
          <a href="#drones">Drones</a>
          <a href="#contato" class="contact-nav">Contato</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero-block">
        <div class="content-wrap hero-grid">
          <div class="hero-copy" data-reveal="left">
            <div class="eyebrow-pill">Foco atual: Front-End, UX e Arquitetura de Interfaces</div>
            <h1 class="display-title">Matheus Hirata</h1>
            <p class="hero-subtitle">Desenvolvedor Web Pleno | Full Stack em transicao para Front-End Specialist</p>
            <p class="hero-description">
              Crio interfaces modernas, performaticas e escalaveis, unindo visao de produto, experiencia do usuario e
              qualidade de codigo para construir solucoes digitais mais claras, robustas e profissionais.
            </p>

            <div class="hero-actions">
              <a href="#projetos" class="button-primary">
                <span>Ver projetos</span>
                <span class="material-symbols-rounded button-icon">arrow_forward</span>
              </a>
              <a href="#contato" class="button-secondary">Entrar em contato</a>
            </div>

            <p class="hero-footnote">
              6 anos de experiencia em desenvolvimento web, atuando entre front-end, back-end e evolucao de sistemas
              corporativos.
            </p>
          </div>

          <div class="hero-badges" data-reveal="right" :style="getRevealDelayStyle(0, 0, 120)">
            <article
              v-for="(badge, index) in heroBadges"
              :key="badge.title"
              class="hero-badge"
              :class="{ 'hero-badge-wide': badge.title === 'Componentizacao' }"
              :style="getRevealDelayStyle(index, 70, 180)"
              data-reveal="up"
            >
              {{ badge.title }}
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" class="section-band">
        <div class="content-wrap section-grid section-grid-about">
          <div class="section-copy" data-reveal="left">
            <h2 class="section-title">Sobre mim</h2>
            <div class="rich-copy">
              <p>
                Sou desenvolvedor web com 6 anos de experiencia, com atuacao full stack em projetos que exigem desde
                construcao de interfaces ate integracoes, regras de negocio e manutencao de sistemas complexos.
              </p>
              <p>
                Ao longo dessa jornada, percebi que meu maior diferencial esta na criacao de experiencias front-end
                mais claras, modernas e bem estruturadas. Por isso, tenho direcionado minha carreira para uma
                especializacao em Front-End, combinando interface, usabilidade, performance, componentizacao e visao de
                produto.
              </p>
              <p>
                Meu foco e construir aplicacoes que nao apenas funcionem bem, mas que transmitam qualidade, organizacao
                e confianca para quem usa.
              </p>
            </div>
          </div>

          <aside class="surface-card focus-card" data-reveal="right" :style="getRevealDelayStyle(0, 0, 120)">
            <h3>Hoje meu foco esta em:</h3>
            <ul class="check-list">
              <li>Front-End moderno</li>
              <li>UX aplicada ao desenvolvimento</li>
              <li>Arquitetura de componentes</li>
              <li>Performance e escalabilidade</li>
              <li>Interfaces com aparencia premium</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section-block metrics-block">
        <div class="content-wrap">
          <div class="metric-grid">
            <article
              v-for="(metric, index) in metrics"
              :key="metric.value"
              class="surface-card metric-card"
              :style="getRevealDelayStyle(index, 70)"
              data-reveal="up"
            >
              <h3>{{ metric.value }}</h3>
              <p>{{ metric.label }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projetos" class="section-band">
        <div class="content-wrap">
          <div class="section-head" data-reveal="left">
            <h2 class="section-title">Projetos em destaque</h2>
            <p class="section-description">
              Alguns projetos que representam minha evolucao tecnica, meu olhar para experiencia do usuario e minha
              capacidade de estruturar interfaces com qualidade e clareza.
            </p>
          </div>

          <div class="stacked-cards">
            <article
              v-for="(project, index) in projects"
              :key="project.title"
              class="surface-card project-card"
              :class="{ accented: project.accent }"
              :style="getRevealDelayStyle(index, 90)"
              data-reveal="up"
            >
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div class="project-fields">
                <div v-for="field in project.fields" :key="field.label" class="project-field">
                  <h4>{{ field.label }}</h4>
                  <p>{{ field.text }}</p>
                </div>
              </div>

              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag" class="tag-chip">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="stack" class="section-block">
        <div class="content-wrap">
          <div class="section-head" data-reveal="left">
            <h2 class="section-title">Stack e especializacao</h2>
          </div>

          <div class="stack-grid">
            <article
              v-for="(group, index) in stackGroups"
              :key="group.title"
              class="surface-card stack-card"
              :class="{ accented: group.accent }"
              :style="getRevealDelayStyle(index, 80)"
              data-reveal="up"
            >
              <span class="material-symbols-rounded feature-icon">{{ group.icon }}</span>
              <h3>{{ group.title }}</h3>
              <ul class="bullet-list">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>

          <article class="surface-card status-banner" data-reveal="scale" :style="getRevealDelayStyle(0, 0, 120)">
            <h3>Especializacao em andamento</h3>
            <p>
              Transformando uma base full stack solida em uma atuacao cada vez mais focada em Front-End, arquitetura de
              interfaces e experiencia digital.
            </p>
          </article>
        </div>
      </section>

      <section class="section-band">
        <div class="content-wrap">
          <div class="section-head" data-reveal="left">
            <h2 class="section-title">O que me diferencia</h2>
          </div>

          <div class="feature-grid">
            <article
              v-for="(item, index) in highlights"
              :key="item.title"
              class="surface-card feature-card"
              :style="getRevealDelayStyle(index, 80)"
              data-reveal="up"
            >
              <span class="material-symbols-rounded feature-icon">{{ item.icon }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="content-wrap">
          <div class="section-head" data-reveal="left">
            <h2 class="section-title">Minha trajetoria</h2>
          </div>

          <div class="timeline-list">
            <article
              v-for="(item, index) in timeline"
              :key="item.title"
              class="timeline-item"
              :style="getRevealDelayStyle(index, 90)"
              data-reveal="right"
            >
              <div class="timeline-marker">
                <span class="material-symbols-rounded">calendar_month</span>
              </div>
              <div class="surface-card timeline-card" :class="{ accented: item.accent }">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="content-wrap">
          <div class="section-head" data-reveal="left">
            <h2 class="section-title">Como costumo construir um projeto</h2>
          </div>

          <div class="process-grid">
            <article
              v-for="(item, index) in steps"
              :key="item.step"
              class="surface-card process-card"
              :style="getRevealDelayStyle(index, 80)"
              data-reveal="up"
            >
              <div class="step-chip">{{ item.step }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="drones" class="section-block">
        <div class="content-wrap">
          <div class="section-head with-icon" data-reveal="left">
            <span class="material-symbols-rounded">flight</span>
            <div>
              <h2 class="section-title">Alem do codigo</h2>
              <p class="section-description">
                Quando nao estou desenvolvendo interfaces, exploro o mundo de uma perspectiva diferente atraves da
                fotografia aerea com drones.
              </p>
            </div>
          </div>

          <div class="drone-grid">
            <article
              v-for="(card, index) in droneCards"
              :key="card.title"
              class="surface-card drone-card"
              :style="getRevealDelayStyle(index, 90)"
              data-reveal="left"
            >
              <span class="material-symbols-rounded feature-icon">{{ card.icon }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>

              <div v-if="card.tags" class="tag-row">
                <span v-for="tag in card.tags" :key="tag" class="tag-chip">{{ tag }}</span>
              </div>

              <ul v-if="card.bullets" class="check-list compact">
                <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </div>

          <div class="gallery-grid">
            <article
              v-for="(item, index) in gallery"
              :key="item.title"
              class="gallery-card"
              :style="getRevealDelayStyle(index, 70)"
              data-reveal="up"
            >
              <div class="gallery-shot" :class="item.className" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <span class="tag-chip">{{ item.tag }}</span>
            </article>
          </div>

          <article class="surface-card gallery-note" data-reveal="scale" :style="getRevealDelayStyle(0, 0, 120)">
            <div>
              <strong>Galeria em desenvolvimento:</strong>
              <span>As imagens acima sao exemplos de fotografia aerea.</span>
              <p>
                Em breve estarei compartilhando minhas proprias capturas com o DJI Neo 2, incluindo paisagens, vistas
                urbanas e experimentacoes criativas.
              </p>
            </div>
            <div class="note-status">
              <span class="material-symbols-rounded">flight</span>
              <span>Atualizacoes em breve</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section-band">
        <div class="content-wrap narrow-content">
          <div class="section-head centered" data-reveal="up">
            <h2 class="section-title">Percepcao do meu trabalho</h2>
          </div>

          <article class="surface-card quote-card" data-reveal="scale" :style="getRevealDelayStyle(0, 0, 100)">
            <div class="quote-mark">"</div>
            <p>
              Matheus se destaca por unir capacidade tecnica com um olhar muito cuidadoso para a experiencia do
              usuario. Suas entregas costumam elevar nao apenas a interface, mas a percepcao geral de qualidade do
              produto.
            </p>
            <span>- Lider de Produto, ambiente SaaS B2B</span>
          </article>
        </div>
      </section>

      <section id="contato" class="section-block contact-block">
        <div class="content-wrap narrow-content">
          <div class="section-head centered" data-reveal="up">
            <h2 class="section-title">Vamos construir algo de alto nivel?</h2>
            <p class="section-description contact-copy">
              Estou em busca de oportunidades onde eu possa contribuir com interfaces mais modernas, escalaveis e bem
              pensadas, aprofundando minha especializacao em Front-End e experiencia do usuario.
            </p>
          </div>

          <div class="contact-grid">
            <component
              v-for="(item, index) in contactItems"
              :key="item.label"
              :is="item.isEmail ? 'article' : 'a'"
              class="surface-card contact-card"
              :class="{ 'contact-card-link': !item.isEmail, 'contact-card-email': item.isEmail }"
              :href="item.isEmail ? undefined : item.href"
              :target="item.isEmail ? undefined : '_blank'"
              :rel="item.isEmail ? undefined : 'noreferrer'"
              :style="getRevealDelayStyle(index, 70)"
              data-reveal="up"
            >
              <a
                v-if="item.isEmail"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                class="contact-card-main"
              >
                <span class="material-symbols-rounded feature-icon">{{ item.icon }}</span>
                <div>
                  <small>{{ item.label }}</small>
                  <strong>{{ item.value }}</strong>
                </div>
              </a>

              <template v-else>
                <span class="material-symbols-rounded feature-icon">{{ item.icon }}</span>
                <div>
                  <small>{{ item.label }}</small>
                  <strong>{{ item.value }}</strong>
                </div>
              </template>

              <button
                v-if="item.isEmail"
                type="button"
                class="copy-email-button"
                :aria-label="copiedEmail === item.value ? 'E-mail copiado' : 'Copiar e-mail'"
                @click="handleCopyEmail(item.value)"
              >
                <span class="material-symbols-rounded button-icon">
                  {{ copiedEmail === item.value ? "check" : "content_copy" }}
                </span>
              </button>
            </component>
          </div>

          <div class="contact-actions" data-reveal="up" :style="getRevealDelayStyle(0, 0, 120)">
            <a href="mailto:matheushirata2001@outlook.com" class="button-primary">
              <span class="material-symbols-rounded button-icon">mail</span>
              <span>Falar comigo</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" class="button-secondary">
              <span class="material-symbols-rounded button-icon">business_center</span>
              <span>Ver LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="content-wrap footer-inner">
        © 2026 Matheus Hirata. Desenvolvedor Web Pleno | Full Stack em transicao para Front-End Specialist
      </div>
    </footer>
  </div>
</template>
