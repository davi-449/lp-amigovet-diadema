# Design — AmigoVet V3 "Refinamento Premium"

## 1. Filosofia da Iteração

A V2 adicionou interações pet-temáticas ousadas (FurBrush, SleepingPet, VaccineScroll, StethoscopeReveal), mas algumas diminuíram o polimento premium e causaram problemas de performance/layout no mobile.  
A V3 é uma **curadoria cirúrgica**: remover o que polui, consertar o que vazou e elevar o que funciona.

---

## 2. Mudanças de UI por Seção

### 2.1 HeroSection — Limpeza e Foco

**Estado Atual:** O `FurBrush` (200 linhas SVG reativas) poluiu o Hero com pontilhados confusos e drena FPS ao tocar.

**V3:**
- **Remover:** `FurBrush.tsx` é deletado. O import e uso em `HeroSection.tsx` são removidos.
- **Manter:** `OrbEffect.tsx` (esferas desfocadas esmeralda/teal) como background principal — é leve e garante contraste.
- **Manter:** `CollarTagSpin.tsx` — a plaquinha 3D de coleira é o melhor elemento do Hero; continua.
- **Refinar `PawPressure.tsx`:** A patinha no botão "Agendar Consulta" ficará mais translúcida:
  - `opacity` max de `0.4` → `0.25`
  - Cor do glow: `emerald-400` com `blur(12px)` (sutil, como luz que acende ao pressionar)
  - Transição de saída mais suave: `transition: opacity 0.6s ease-out`

### 2.2 ExpertiseGrid — GroomingCard & StethoscopeReveal

**GroomingCard (Estética Animal / Banho e Tosa):**
- O componente `GroomingCard.tsx` já existe. Ele será **refatorado** para usar CSS Masking (scratch-off) em vez de canvas/JS pesado:
  - Uma imagem fotorealista de pet felpudo como base
  - Camada superior: "vidro embaçado" (`backdrop-filter: blur(20px)` + gradiente semi-transparente)
  - Ao `onPointerMove`, uma `mask-image: radial-gradient()` revela a área sob o dedo/cursor
  - Ao revelar, bolhas/faíscas CSS aparecem com `@keyframes` (4-6 partículas `<span>` com `animation-delay`)
  - **Zero canvas, zero JS pesado** — 100% CSS Masking + pointer events

**StethoscopeReveal (Card Clínica Geral & Cirurgia):**
- O layout atual deixa um "buraco branco" no desktop e a diagramação é estranha.
- **Fix:** Ajustar `flex-direction` e distribuição dos itens internos:
  - Desktop: `grid` com `grid-template-columns: 1fr 1fr` para os subitens de especialidades
  - Mobile: `flex-direction: column` com `gap: 1rem`
  - O SVG do estetoscópio fica posicionado `absolute` no canto superior-direito (não no centro, que causa o vazio)
  - A linha EKG ocupa toda a largura inferior do card (`width: 100%`, `bottom: 0`)

### 2.3 VaccineScroll — Fix Mobile

**Problema:** A seringa lateral invade o texto dos cards de especialidades no mobile, flutuando sobre o conteúdo.

**Fix:**
- Em breakpoints `< 768px`:
  - Reduzir largura da seringa SVG de `40px` → `24px`
  - Mover para `right: -4px` (colada na borda, sem invadir conteúdo)
  - Adicionar `pointer-events: none` para não bloquear toque nos cards
  - O êmbolo e o texto de percentual ficam ocultos (`display: none`) em mobile — apenas o "tubo" visual do progresso é exibido
- Em breakpoints `< 480px`:
  - Ocultar completamente a seringa (`display: none`) — em telas muito pequenas ela atrapalha mais do que ajuda

### 2.4 TestimonialsSection — Remoção do SleepingPet

- **Remover:** `SleepingPet.tsx` é deletado. O import e uso são removidos.
- Os depoimentos voltam a aparecer diretamente, sem a animação do mascote dormindo.
- Layout permanece o mesmo (cards em serif italic sobre fundo escuro).

---

## 3. Tecnologia

| Técnica | Onde | Lib |
|---|---|---|
| CSS `mask-image` + `radial-gradient()` | GroomingCard scratch-off | CSS puro |
| `@keyframes` + `animation-delay` | Partículas de bolha/faísca no GroomingCard | CSS puro |
| CSS Grid `grid-template-columns` | Layout do StethoscopeReveal | CSS puro |
| Media queries `@media (max-width)` | VaccineScroll responsivo | CSS puro |
| Framer Motion `useSpring` | PawPressure glow refinado | framer-motion |

---

## 4. Stitch MCP (UI)

Não há telas novas para gerar no Stitch nesta iteração — todas as mudanças são refinamentos de componentes React existentes.

## 5. Supabase MCP (Backend)

Nenhuma mudança de banco de dados necessária — esta spec é puramente frontend/CSS.

---

## 6. Diretrizes de Performance

- Toda animação nova deve rodar em propriedades compositor-friendly (`transform`, `opacity`, `filter`).
- O GroomingCard deve manter 60fps em Android mid-range (sem `will-change` em elementos de massa; usar apenas no container principal durante interação).
- Mobile-first: tudo que não funciona bem em `375px` é simplificado ou ocultado.
