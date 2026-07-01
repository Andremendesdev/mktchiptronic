---
name: Chiptronic
description: Tecnologia automotiva premium — cursos gratuitos e diagnóstico para oficinas
colors:
  background-deep: "#131313"
  surface-lowest: "#0e0e0e"
  surface-container: "#201f1f"
  ink-primary: "#e5e2e1"
  ink-muted: "#c0caad"
  accent-sky: "#0ea5e9"
  accent-sky-soft: "#38bdf8"
  accent-green: "#22c55e"
  accent-green-deep: "#16a34a"
  accent-whatsapp: "#25D366"
  section-light: "#fafafa"
  ink-on-light: "#171717"
  border-sky: "#0284c7"
typography:
  display:
    fontFamily: "var(--font-montserrat), sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "var(--font-montserrat), sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lg:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-outfit), sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "0.375rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  full: "9999px"
spacing:
  gutter: "24px"
  margin-mobile: "16px"
  margin-desktop: "64px"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent-green}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-green-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-course:
    backgroundColor: "{colors.accent-green}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  button-whatsapp:
    backgroundColor: "{colors.accent-whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px"
---

# Design System: Chiptronic

## Overview

**Creative North Star: "A Bancada Iluminada"**

Chiptronic se apresenta como um laboratório de diagnóstico automotivo em escala de marca: escuro, preciso, com luzes de equipamento (sky) e sinais de ação (verde). A landing não vende hype — transmite que o mecânico está no lugar certo para aprender e evoluir com tecnologia real.

O sistema rejeita explicitamente a herança de mobilidade elétrica/scooters, templates SaaS genéricos e o visual "AI slop" de fundos cream com cards idênticos. A densidade é média: hero cinematográfico, seções respiradas, grid de cursos legível em fundo claro.

**Key Characteristics:**

- Fundo escuro técnico (`#131313`) com partículas e neon sky ambiental
- Verde reservado para conversão (hero CTA, "Eu quero", WhatsApp)
- Sky para marca, labels, underlines e badges do hero
- Montserrat para títulos, Outfit para corpo e labels
- Motion com Framer Motion — entradas suaves, sem bounce
- Seção de cursos em `neutral-50` para contraste e legibilidade

## Colors

Paleta **Committed**: escuro como superfície principal, sky como ambiente técnico, verde como voz de ação.

### Primary

- **Action Green** (`#22c55e` / green-500): CTAs principais — hero "Quero aprender agora!", botões "Eu quero" nos cards de curso. Raro o suficiente para significar ação.
- **Action Green Deep** (`#16a34a` / green-600): hover dos botões verdes.

### Secondary

- **Diagnostic Sky** (`#0ea5e9` / sky-500): labels de seção, underlines animados, badges do hero, partículas, seleção de texto, anéis de foco secundários.
- **Sky Glow** (`#38bdf8` / sky-400): gradientes de neon, orbs, partículas secundárias.

### Tertiary

- **WhatsApp Green** (`#25D366`): exclusivo do FAB flutuante — verde oficial, sem neon.

### Neutral

- **Workshop Black** (`#131313`): `background`, `surface` — corpo da página escura.
- **Bench Depth** (`#0e0e0e`): `surface-container-lowest` — vídeo do hero, splash.
- **Ink Primary** (`#e5e2e1`): texto principal em fundos escuros.
- **Ink Muted** (`#c0caad`): texto secundário em fundos escuros (verificar contraste em blocos longos).
- **Lab White** (`#fafafa`): fundo da seção de cursos (`ModelsGrid`).
- **Ink on Light** (`#171717`): títulos e texto em seções claras.

### Named Rules

**The Two-Voice Color Rule.** Sky ilumina e marca; verde converte. Nunca invertir: sky não é CTA primário; verde não cobre fundos inteiros.

**The No-Scooter Palette Rule.** Âmbar/laranja de mobilidade elétrica (`#d97706` em tokens legados) não entra em novos componentes. Sky + verde + neutros escuros são a identidade atual.

## Typography

**Display Font:** Montserrat (Google Fonts, `--font-montserrat`)
**Body Font:** Outfit (Google Fonts, `--font-outfit`)
**Label Font:** Outfit (mesma família, peso 600, tracking aberto)

**Character:** Montserrat traz peso industrial e confiança nos títulos; Outfit mantém o corpo legível e moderno sem frieza corporativa.

### Hierarchy

- **Display** (600, 28–34px hero / até 2.125rem seções): título principal do hero e headlines de seção.
- **Headline** (700, 32–40px / `text-headline-lg`): títulos de seção secundários.
- **Body Large** (400, 18px): parágrafo do hero e intros.
- **Body** (400, 16px, line-height 1.6): texto corrido; máx. ~65ch em blocos longos.
- **Label** (600, 14px, letter-spacing 0.05em, frequentemente uppercase): botões, eyebrows, metadados de contato.

### Named Rules

**The Montserrat-Only-Headlines Rule.** Títulos e CTAs usam Montserrat ou Outfit label — não misturar uma terceira família display.

## Elevation

Híbrido: **tonal layering** no escuro (superfícies `#131313` → `#0e0e0e`) + **sombras suaves** em cards claros + **glow sky** como profundidade atmosférica (não como sombra estrutural).

### Shadow Vocabulary

- **Glass panel** (`box-shadow: 0 10px 30px rgba(0,0,0,0.25)` + `backdrop-filter: blur(12px)`): cards de contato no footer, painéis escuros.
- **Card light** (`shadow-lg shadow-neutral-200/60`): cards de curso em fundo claro.
- **CTA glow** (`0 0 8px rgba(74,222,128,0.25)`): halo sutil no botão verde do hero — proposital, não neon sky.
- **Neon text** (`.text-neon-sky-soft`): text-shadow sky em destaques — usar com moderação.

### Named Rules

**The Atmospheric-Not-Decorative Rule.** Partículas, orbs e neon existem para ambientar seções escuras (stats, footer, splash). Não adicionar em cards de curso ou formulários.

## Components

### Buttons

- **Shape:** `rounded-md` (6px implícito) para CTAs de conversão; `rounded-full` apenas em FAB WhatsApp.
- **Primary (Hero):** gradiente `from-green-400 to-green-600`, texto branco, padding `16px 32px`, sombra verde leve, hover `brightness-110` + `scale-[1.02]`.
- **Course CTA:** `bg-green-500` sólido, hover `bg-green-600`, `transition-colors` — sem scale (evita flicker).
- **WhatsApp FAB:** `#25D366`, ícone SVG oficial, sombra `shadow-lg shadow-black/25`, sem neon.

### Cards / Containers

- **Course card (compact):** fundo branco, borda `border-sky-600/40`, `rounded-xl`, imagem `h-48 md:h-52` com zoom no hover, título centralizado.
- **Glass panel (dark):** `rgba(18,18,18,0.6)`, blur 12px, borda `white/6%` — footer contato.
- **Internal padding:** `p-4 md:p-5` (compact), `p-7 md:p-8` (full).

### Navigation

- **Navbar:** fixa, transparente, logo centralizada grande (`h-36 md:h-48`), sem links — apenas marca.

### Hero Feature Badges

- Três colunas com ícone em círculo sky escuro (`sky-700`), texto branco uppercase, neon sky no ícone e label.

### Section Transitions

- Faixa com `NeonLights` + `FloatingParticles` entre seções escuras e claras.

### Motion

- Framer Motion: `ease: [0.16, 1, 0.3, 1]` em reveals; stagger em grids.
- `prefers-reduced-motion`: respeitar em novas animações (globals já parcialmente cobre partículas).

## Do's and Don'ts

### Do:

- **Do** usar verde apenas em CTAs e WhatsApp — ação clara para o mecânico.
- **Do** manter seção de cursos em fundo claro (`#fafafa`) com cards brancos legíveis.
- **Do** usar sky para ambiente, labels e underlines de seção.
- **Do** escrever copy para técnicos automotivos — cursos, equipamentos, diagnóstico.
- **Do** manter `aria-label` em FAB e botões de curso.

### Don't:

- **Don't** usar identidade de scooters / mobilidade elétrica / patinetes — removido do produto.
- **Don't** usar landing pages SaaS genéricas (hero com métricas, eyebrows em toda seção, cards idênticos sem função).
- **Don't** usar fundos cream/sand/beige editoriais de template AI.
- **Don't** aplicar glassmorphism ou neon decorativo sem função (sky glow só onde já existe: stats, footer, splash).
- **Don't** usar gradiente em texto (`background-clip: text`).
- **Don't** colocar neon azul no botão WhatsApp — verde oficial `#25D366` apenas.
- **Don't** animar layout com tilt 3D em cards de curso (causa flicker no hover do botão).
