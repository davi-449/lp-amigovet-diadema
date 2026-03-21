# AmigoVet — Proposta de Interações 3D
> Iteração 2: "Eu Posso Sentir" — Interações feitas pra fazer o tutor sorrir antes de ler qualquer texto.

## Base Criativa

A AmigoVet é **emoção + tecnologia**. Cada ideia aqui simula algo do mundo real de um pet:
pelo, bolha de sabão, soninho, coleira, termômetro, corrida, abraço. Nada disso existe em qualquer
outro site de gráfica, mecânica ou qualquer outra área — é 100% vocabulário de petshop.

---

## 10 Ideias Originais

### 🐶 1. FurBrush — Acariciar o Hero
**Onde:** `HeroSection`, sobre a imagem de fundo.  
**O que é:** O usuário pode passar o dedo (mobile) ou mouse (desktop) sobre a foto do hero e as "cerdas" do pelo digitalmente se movem para o lado de forma orgânica, como se estivesse acariciando um cão. O pelo é simulado com ~200 linhas SVG finas que reagem à posição do cursor com física de mola (`useSpring`).  
**Por que é inesquecível:** Ninguém nunca fez isso. O usuário acaricia um pet em tela. Emoção instantânea.  
**Perf:** SVG com `transform: rotate()` via CSS custom properties. Single `rAF` handler. Baixíssimo custo.

---

### 🫧 2. BubbleGallery — Fotos dos Pets em Bolhas de Sabão
**Onde:** Nova seção de galeria entre `ExpertiseGrid` e `TestimonialsSection`.  
**O que é:** Fotos dos pets tratados na clínica (ou stock photos premium) ficam dentro de **esferas translúcidas 3D** flutuando levemente com parallax. Ao toque, a bolha estoura com uma micro-explosão de pequenas partículas brilhantes e a foto plana emerge.  
**Por que é inesquecível:** Bolhas de sabão são a brincadeira favorita dos pets. Cada foto é uma surpresa esperando estourar.  
**Perf:** Bolhas são `div` com `box-shadow` + `background: radial-gradient`. Estouro com 6 partículas Framer Motion (`AnimatePresence`).

---

### 😴 3. SleepingPet — Mascote que Acorda ao Scroll
**Onde:** Início da `TestimonialsSection`.  
**O que é:** No topo da seção de depoimentos há um **cachorrinho/gatinho SVG dormindo**, com ZZZs flutuando suavemente. Conforme o usuário chega ali, o pet abre um olho, se espreguiça (SVG animated stretch), e "acorda" completamente — depois de um segundo, saindo correndo pelo lado direito da tela. Os depoimentos revelam-se no lugar onde ele estava.  
**Por que é inesquecível:** É um momento genuinamente engraçado e fofo que cria memória afetiva com a marca.  
**Perf:** SVG com `motion.g` Frame-by-frame (4-6 keyframes). `IntersectionObserver` like trigger. Leve.

---

### 🏷️ 4. CollarTagSpin — Identificação 3D da Clínica
**Onde:** `HeroSection`, badge de "Especialidades & Medicina Avançada" — substituir pelo badge atual.  
**O que é:** O badge de topo do hero é estilizado como uma **plaquinha de coleira de pet** em metal dourado que `gira continuamente em 3D` (flip horizontal lento). Na frente: "AmigoVet Clínica Veterinária". Ao clicar/tocar, a tag gira e revela na parte de trás: o endereço, telefone e horário de atendimento.  
**Por que é inesquecível:** Toda a identidade da clínica cabe numa plaquinha de coleira. É poético e 100% vetlife.  
**Perf:** CSS `rotateY` + `transform-style: preserve-3d`. Flip controlado por `useState`. 0 libraries.

---

### 🌡️ 5. VetThermometer — Barra de CTA Temática
**Onde:** Em cima do botão "Agendar Consulta" da `HeroSection`.  
**O que é:** Um termômetro veterinário SVG fica exibido ao lado do CTA. Quando a seção carrega, o mercúrio sobe animado de 0% até ~37.5°C (temperatura normal de cão). Tooltip aparece: "Temperatura normal! Seu pet está bem-vindo." Se o usuário hover no título de oncologia ou urgência, o termômetro sobe dramaticamente até 40°C piscando em vermelho.  
**Por que é inesquecível:** É interativo, educativo, charmoso e clinicamente relevante.  
**Perf:** SVG `clip-path` + Framer Motion `animate`. Scroll trigger.

---

### 🐾 6. PawPressure — Imprimir Patinha no Botão
**Onde:** Botão "Agendar Consulta" e botão do WhatsApp flutuante.  
**O que é:** Quando o usuário **pressiona e segura** qualquer botão de CTA, uma patinha de cachorro vai aparecendo gradualmente debaixo da mão/toque — como se o pet estivesse apoiando a decisão. Ao soltar, a patinha desaparece com um flarezinho esmeralda. Clique normal: sem efeito extra.  
**Por que é inesquecível:** Curto-circuita o cérebro emocional. "Meu pet aprova."  
**Perf:** SVG overlay com `opacity` + `scale` animados no `onPointerDown`. Framer Motion spring. Levíssimo.

---

### 🩺 7. StethoscopeReveal — Ouvindo o Beat dos Cards
**Onde:** `ExpertiseGrid` — card grande de "Especialidades Clínicas".  
**O que é:** No card principal há um **estetoscópio SVG** repousando. Ao tocar o card, o estetoscópio "desliza" até o centro e os headphones ficam nos ouvidos (animação). Uma **linha de EKG** começa a pulsar ao longo da parte inferior do card acompanhando um batimento real. As especialidades vão aparecendo em fade sincronizado com os batimentos.  
**Por que é inesquecível:** A tecnologia médica ganha vida — o usuário literalmente escuta (visualmente) o coração do serviço.  
**Perf:** SVG path com `stroke-dashoffset` animado. EKG é um `<polyline>` com keyframe CSS.

---

### 🐕 8. RunningPetProgress — Mascote que Corre Durante o Scroll
**Onde:** Barra de progresso de scroll — global, no topo da página ou na lateral.  
**O que é:** Em vez de uma barra de progresso comum, há um **cachorrinho em pixel art estilizado correndo** pela tela à medida que o usuário vai descendo a página. Ele passa por cenários diferentes conforme avança (parque → clínica → casa). No final do scroll, o cãozinho chega em casa e deita.  
**Por que é inesquecível:** O scroll deixa de ser um gesto mecânico e vira uma jornada do pet. Usuário vai scrollar mais pra ver onde o cachorro vai parar.  
**Perf:** Elemento único fixo com `left: calc(var(--scroll-progress) * 95vw)`. Sprite sheet com `steps()` CSS animation em loop na URL de scroll.

---

### 🎀 9. AppointmentCard Tilt — Cartão de Consulta Premium
**Onde:** `LocationSection` ou nova seção de agendamento.  
**O que é:** Um cartão virtual de consulta veterinária — com layout de receituário médico animal premium — que reage à gravidade do celular (giroscópio igual ao GyroFoilCard, mas aqui é um cartão de consulta). Tem textura de papel clínico, logo da AmigoVet, nome do pet "(seu pet)" e uma linha de assinatura vazada. CTA: "Preencher meu cartão".  
**Por que é inesquecível:** O usuário já se visualiza com o cartão de consulta na mão. Altíssima conversão.  
**Perf:** Mesmo padrão do GyroFoilCard: `DeviceOrientationEvent` no mobile, `onMouseMove` no desktop.

---

### 💉 10. VaccineScroll — Seringa que Enche Gradualmente
**Onde:** Lateral direita da página, como indicador global de progresso (alternativo ao #8).  
**O que é:** Uma **seringa SVG vertical** no lado direito da página que vai "enchendo" de líquido esmeralda conforme o usuário scrollar. Na ponta, sempre mostra o percentual. Quando chega a 100% (final da página), a seringa anima como se aplicasse a vacina e aparece um check com "✔ Protegido". Click ou tap revela um popover: "Agende a próxima vacina do seu pet."  
**Por que é inesquecível:** Transforma o scroll numa jornada de cuidado preventivo. É metáfora perfeita para um serviço de saúde.  
**Perf:** SVG único com `clip-path: inset()` atrelado ao `scrollY`. 1 `rAF` handler. Levíssimo.

---

## Top 6 Selecionados para Implementação

| # | Feature | Onde | Impacto | Perf |
|---|---|---|---|---|
| 1 | **FurBrush** | Hero (substituir OrbEffect) | 🔥 ÚNICO | Baixo |
| 2 | **PawPressure** | Botões CTA + FloatingWhatsApp | 🔥 Emocional | Nulo |
| 3 | **SleepingPet** | TestimonialsSection | 🔥 Memória Afetiva | Baixo |
| 4 | **CollarTagSpin** | HeroSection (badge) | 🔥 Original/Único | Nulo |
| 5 | **StethoscopeReveal** | ExpertiseGrid (card principal) | 🔥 Clínico/surpresa | Baixo |
| 6 | **VaccineScroll** | Lateral — progress global | 🔥 Diferencial total | Nulo |


## Contexto do Projeto

A **AmigoVet** já possui uma identidade clínica premium: fundos limpos, paleta esmeralda/verde, tipografia refinada e o OrbEffect pulsante. É um site bonito, mas **estático demais** para o nível de emoção que clientes sentem com seus pets. 

O objetivo desta iteração é **transformar cada scroll numa metáfora emocional** — a tecnologia médica avançada, a cura, o cuidado. Tudo isso traduzido em interações físicas e orgânicas que tocam o coração antes de qualquer texto convencer o usuário.

---

## 10 Ideias de Animação 3D (Mobile-First)

### 🫀 1. Heartbeat Hero Card — Substituir OrbEffect
**Onde:** `HeroSection` — substitui o `OrbEffect`.  
**O que é:** Um grande card 3D flutuante com vidro fosco exibindo um **heartbeat flatline** (linha de pulsação cardíaca) que anima continuamente. Ao tocar/hover, o pulso acelera visivelmente e uma gotícula de brilho esmeralda viaja ao longo da linha.  
**Por que é perfeito:** Conecta tecnologia médica com vida — é a alma do pet, pulsando em tela.  
**Tecnologia:** SVG path animation com `stroke-dashoffset` + Framer Motion `motion.path`. CSS only, 0 JS na idle state.  
**Mobile:** O card reage levemente ao touch (tilt suave via `useMotionValue`).

---

### 🐾 2. PawPrintReveal — Seção de Transição entre Hero e Especialidades
**Onde:** Nova seção divisória entre `HeroSection` e `ExpertiseGrid`.  
**O que é:** Ao fazer scroll, **pegadas de patinha** aparecem sequencialmente no chão (tela) indo da esquerda pra direita, como se o pet do usuário estivesse "caminhando" pela página até chegar na clínica.  
**Por que é perfeito:** Imediato, irresistível, 100% pet-themed. Vai arrancar um "Ai que fofo!" de todo tutor.  
**Tecnologia:** SVG paw path + IntersectionObserver. Cada pegada é um SVG `opacity: 0` que ativa em cascade com `animation-delay`. Ultra-leve.  
**Mobile:** Pegadas responsivas com tamanho relativo ao viewport.

---

### 🔬 3. MediScanCard — BentoCard com Scanner Diagnóstico 3D
**Onde:** Cards do `ExpertiseGrid` — em especial o card "Imagens & Lab".  
**O que é:** Ao pressionar/hover o card de diagnósticos, uma **linha de scanner translúcida** varre o card de cima pra baixo, como um ultrassom varrendo um tecido. À medida que o scanner passa, os ícones (raio-x, coração, órgão) "aparecem" revelados pela varredura.  
**Por que é perfeito:** Demonstra literalmente o que eles fazem (diagnóstico por imagem) de forma chocantemente elegante.  
**Tecnologia:** CSS `linear-gradient` movido por `@keyframes` + Framer Motion `animate` no trigger. Tudo compositor-based.  
**Mobile:** Ativa com `onTouchStart` / 500ms hold.

---

### 🧬 4. DNAHelix Loader — Separador entre Seções
**Onde:** Nova seção de 60px de altura entre `ExpertiseGrid` e `TestimonialsSection`.  
**O que é:** Um DNA helix duplo animado em 3D CSS puro — pontos verdes conectados por "bridges" rotacionando continuamente, como uma hélice de DNA real vista de cima.  
**Por que é perfeito:** Reforça a imagem científica/médica da clínica sem ser pesado. É sutil mas poderoso.  
**Tecnologia:** 100% CSS `@keyframes` + `perspective` + `rotateY` em elementos absolutamente posicionados. 0 JavaScript.  
**Mobile:** Container de 100vw centrado, resize via `clamp()`.

---

### 💊 5. SpecialtiesOrb — Tags Flutuantes em Órbita 3D
**Onde:** `ExpertiseGrid` — card de "Especialidades Clínicas" (Oncologia, Cardiologia...).  
**O que é:** Em vez de flat tags de texto, as especialidades orbitam em torno de um círculo 3D em camadas (como um sistema solar). Ao tocar cada tag, ela "voa" para o centro e exibe detalhes daquela especialidade.  
**Por que é perfeito:** Transforma uma lista chata de especialidades num universo de cuidado que o usuário pode explorar com o dedo.  
**Tecnologia:** Framer Motion `useMotionValue`, `rotateZ` CSS. Layout calculado com ângulo/raio em `useEffect`.  
**Mobile:** Órbita mais compacta (raio 80px) em mobile vs desktop (120px).

---

### 💧 6. TearDrop CTA — Animação Emocional no Botão Principal
**Onde:** `HeroSection` — botão "Agendar Consulta".  
**O que é:** Inspirado no InkDropButton da JFL, mas aqui a gotícula é uma **lágrima de alegria** (botão fica com cor de emerald-500) que "cai" das letras e bate no botão, gerando uma onda. Loop a cada 6s. É a lágrima do dono ao ver o pet curado.  
**Por que é perfeito:** Emocionalmente poderoso. CSS puro, 0 perf overhead.  
**Tecnologia:** `@keyframes` CSS identical ao InkDropButton mas verde e personalizado para lagrima.  
**Mobile:** Funciona identicamente. CSS is always mobile-first.

---

### 🐕 7. PetCardFlip3D — Card de Especialidade Reversível
**Onde:** `ExpertiseGrid` — os BentoCards menores (Terapias Integrativas e Imagens).  
**O que é:** Os dois cards menores são cards 3D que **giram (flip) ao toque/hover** revelando na parte de trás: o preço estimado de uma consulta inicial, um link para agendamento, e uma foto do ambiente da clínica (gerada).  
**Por que é perfeito:** Aumenta conversão diretamente. Informação que o usuário busca está a 1 toque de distância.  
**Tecnologia:** CSS `transform-style: preserve-3d` + `rotateY(180deg)`.  
**Mobile:** Touch ativa via `onTouch`. Framer Motion `AnimatePresence` para a face traseira.

---

### 🌿 8. FloraGrowth — Scroll-Triggered Plants no Background
**Onde:** `TestimonialsSection` e laterais da `ExpertiseGrid`.  
**O que é:** Plantas/folhagens ilustrativas SVG que **crescem de baixo para cima** conforme o usuário faz scroll — como ramas de hospital que saem das bordas do dispositivo. Elas chegam ao ápice quando o usuário para de rolar e ficam "respirando" com uma microanimação sutil.  
**Por que é perfeito:** A natureza é cura. Renderiza a identidade verde da AmigoVet de forma visceral e poética.  
**Tecnologia:** SVG `clip-path` ou `stroke-dashoffset` atrelado ao `scrollYProgress` via Framer Motion `useScroll`.  
**Mobile:** As plantas crescem das bordas laterais do viewport, respeitando o layout normal.

---

### ⭐ 9. StarRatingPhysics — Avaliações com Partículas 
**Onde:** `TestimonialsSection`.  
**O que é:** As estrelas de avaliação (4.9/5.0) existem como objetos físicos que reagem ao toque. Ao apertar uma estrela, partículas de glitter brilhante se espalham ao redor. A row de estrelas oscila levemente como se estivesse "viva".  
**Por que é perfeito:** Prova social nunca foi tão interativa. O usuario literalmente "sente" a aprovação.  
**Tecnologia:** Framer Motion `useSpring`, partículas simples como `<div>`s absolutamente posicionados que saem com velocidade inicial randomizada. 12 partículas max = leve.  
**Mobile:** Touch-activated. Haptic feedback (if available via `navigator.vibrate(50)`).

---

### 🏥 10. StickyClinicReveal — CTA Final Imersivo
**Onde:** Nova seção antes do `footer`, semelhante ao `StickyPaperReveal` da JFL.  
**O que é:** Um "prontuário médico" digital (cartão branco com tipografia clínica) fica grudado na tela enquanto o usuário desce. O prontuário exibe: paciente "(nome do pet do usuário)" › diagnóstico "Amor ∞" › prescrição: "Uma consulta na AmigoVet". Conforme o scroll avança, o prontuário vai "sendo assinado" (uma linha de assinatura se desenha) e o papel "voa" para fora da tela, revelando o mapa e contato.  
**Por que é perfeito:** É cinema. É a conclusão emocional de uma jornada de cuidado.  
**Tecnologia:** `position: sticky` + `useScroll` + SVG signature animation via `stroke-dashoffset`.  
**Mobile:** O cartão ocupa 90% da largura em mobile, 60% em desktop.

---

## Seleção Prioritária para Implementação (Top 6)

| Prioridade | Feature | Impacto Visual | Dificuldade | Custo de Perf |
|---|---|---|---|---|
| 1 | **HeartbeatHero** | ⭐⭐⭐⭐⭐ | Média | Baixíssimo |
| 2 | **PawPrintReveal** | ⭐⭐⭐⭐⭐ | Baixa | Nulo |
| 3 | **PetCardFlip3D** | ⭐⭐⭐⭐ | Média | Baixo |
| 4 | **FloraGrowth** | ⭐⭐⭐⭐⭐ | Média | Baixo |
| 5 | **StickyClinicReveal** | ⭐⭐⭐⭐⭐ | Alta | Baixo |
| 6 | **TearDropCTA** | ⭐⭐⭐⭐ | Baixa | Nulo |

> Features 7-10 (DNAHelix, SpecialtiesOrb, MediScanCard, StarRatingPhysics) ficam disponíveis para uma V3 se necessário.

---

## Critérios de Aprovação

- Mobile-first para tudo. Touch interactions para 100% das features.
- Zero `three.js`. Zero WebXR. Performance nativa CSS e Framer Motion.
- Build limpo e scroll a 60fps em Android mid-range.
