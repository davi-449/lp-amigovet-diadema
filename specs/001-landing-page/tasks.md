# Execution Tasks — AmigoVet ("Clinical Aura")

## Fase 0: Scaffold & Setup Clínico
- [ ] Criar repositório `lp-amigovet-diadema` (Vite, React 19, TS)
- [ ] Instalar tailwind v4, framer-motion, lucide-react, clsx, tailwind-merge
- [ ] Implementar alias path (`@/*`)

## Fase 1: Bio-Tech Design System
- [ ] Fazer setup do `index.html` (Google Fonts: Plus Jakarta Sans, Instrument Serif, Geist)
- [ ] Parametrizar `index.css` com cores Bioluminescent (`#10B981` Emerald, `#020617` Navy Base)
- [ ] Criar utility flexíveis: `clinical-glass` e tipografia utilitária extendida.

## Fase 2: Componentes Empáticos
- [ ] `Button.tsx` — Soft curves (`rounded-full`), smooth hover states, emerald glows.
- [ ] `BentoCard.tsx` — Componentes super arredondados (`rounded-[2.5rem]`) com blur profundo e glow on hover.
- [ ] `OrbEffect.tsx` — Um componente simples puramente de background para soltar esferas desfocadas (`emerald` e `teal`) que animam no fundo simulando luz óptica (ultrassom/tecnologia).

## Fase 3: Organic Layouts (Montagem de Seções)
- [ ] `HeroSection.tsx` — Mix de fontes na headline, orbs no bg, floating card para o rating 4.9.
- [ ] `ExpertiseGrid.tsx` — Bento box de especialidades (Onco, Imagem, Terapias).
- [ ] `TestimonialsSection.tsx` — Painel em carrossel dinâmico ou grade assimétrica usando a fonte Instrument Serif para os asquotes em destaque.
- [ ] `LocationSection.tsx` — Badge inteligente "Aberto/Exame" / "Fechado" baseado no status 17:30h.
- [ ] `Footer.tsx` e `FloatingWhatsApp.tsx` com visual clínico.

## Fase 4: Premium Assets
- [ ] (Alternativo) Integrar fotos reais se o usuário tiver (fachada) OU gerar imagens high-end do Midjourney via generate_image de uma sala de medicina veterinária tech mas amigável (tons navy, telas).

## Fase 5: QA & Launch
- [ ] Validar build (`npm run build`) livre de falhas TS.
- [ ] Publicação do Walkthrough Final e Commit GitHub.
