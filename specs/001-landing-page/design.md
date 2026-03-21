# Design System & UI/UX — "Clinical Aura" (Taste-Skill)

## 1. Tipografia "Empathetic Clinical"
- **Display (Headlines):** `Plus Jakarta Sans` — Geometria limpa e legibilidade perfeita. Uso extensivo de letter-spacing levemente negativo (`tracking-tight`) e weights variados (de `Light 300` a `Bold 700`).
- **Accent/Serif:** `Instrument Serif` (`italic`) — Para palavras-chave ("a vida do seu melhor amigo", depoimentos). Adiciona calor humano ao design high-tech.
- **Body:** `Geist` — Textos corridos sobre oncologia, exames, etc. `text-emerald-100/70` para constraste suave no dark mode.

## 2. Paleta de Cores "Bioluminescence"
- **Background Base:** `#020617` (Slate 950) até `#0F172A` (Slate 900) — Salas de exame de imagem, ambiente hospitalar premium que reduz cansaço visual.
- **Primary / Life Accent:** `#10B981` (Emerald 500) e glow `#34D399` (Emerald 400). Ponto focal de conversão e saúde.
- **Surface Level 1 (Clinical Frosted):** `#1E293Bcc` com `backdrop-blur-2xl` e `border-white/5`. Vidro assepticamente limpo.
- **Texto:** `#F8FAFC` (Slate 50) e `#CBD5E1` (Slate 300).

## 3. Arquitetura de Layout (Organic Grid)

### 3.1. Hero Section — "The Breath of Life"
- Fundo noturno suave (`Slate 950`) com esferas radiais/orbs de cor esmeralda desfocadas.
- Texto Principal com mistura de tipografias: "Alta tecnologia em medicina veterinária para **[Instrument Serif Italic: quem você mais ama]**."
- Em vez de uma imagem stock chapada ao lado, podemos ter um card flutuante em `liquid-glass` mostrando as "Specialties" passando em um ticker, e abaixo a nota "4.9 Google / 154 Avaliações".

### 3.2. Specialty Bento Box (Especialidades e Exames)
- Agrupamentos orgânicos com `rounded-[2.5rem]`.
- Módulos divididos em 3 hubs de ação:
  1. *Especialidades Clínicas* (Oncologia, Nefro, Cardio, Endo, Oftalmo) — Hover acende as bordas esmeralda.
  2. *Exames e Imagem* (Raio-X, Ultrassom, Endoscopia) — Layout horizontal simulando um monitor de scanner.
  3. *Terapias Alternativas* (Reiki, Acupuntura, Fisio) — Módulo visual mais "Zen", com gradiente translúcido de mint/teal.

### 3.3. Empathetic Wall (Avaliações)
- Cards de reviews da Maria Aparecida e Rayanne Ribeiro formatados como cartas de agradecimento, com quotes em serif italic.

### 3.4. Location & Contact ("Aberto/Fechado")
- Como a clínica fecha às 17:30, é crítico ter um Status Badge (Aberto agora / Fechado) animado que capta a atenção do tutor aflito.

## 4. Interaction Engine (Breathing Springs)
- Animações usando Framer Motion focadas em *escala sutil* e aumento de glow e blur.
- Ex: Botões primários "respiram" crescendo ligeiramente 1.02x de forma suave quando em repouso (opcional) ou em expansões suaves no hover.
- Curvas elásticas, mas relaxadas (`stiffness: 150, damping: 20`).
