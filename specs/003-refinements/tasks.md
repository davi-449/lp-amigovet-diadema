# Execution Tasks — AmigoVet V3 "Refinamento Premium"

## Fase 0: Limpeza (Remoções)
- [ ] Deletar `src/components/ui/FurBrush.tsx` (se existir) e remover qualquer import/uso em `HeroSection.tsx`
- [ ] Deletar `src/components/ui/SleepingPet.tsx` (se existir) e remover qualquer import/uso em `TestimonialsSection.tsx`
- [ ] Confirmar que `OrbEffect.tsx` está ativo no `HeroSection.tsx` como efeito de fundo principal

## Fase 1: Refinamento do Hero
- [ ] Refinar `PawPressure.tsx` — reduzir opacidade max para `0.25`, glow esmeralda com `blur(12px)`, transição de saída `0.6s ease-out`
- [ ] Validar que `CollarTagSpin.tsx` permanece intacto e funcional (flip 3D com info de contato no verso)
- [ ] Testar Hero em mobile (375px): tipografia legível, orbs no fundo, botão CTA acessível

## Fase 2: GroomingCard Interativo (CSS Masking)
- [ ] Refatorar `GroomingCard.tsx` para usar CSS `mask-image: radial-gradient()` como scratch-off
- [ ] Adicionar imagem fotorealista de pet felpudo como camada base (usar `generate_image` se necessário)
- [ ] Implementar camada de "vidro embaçado" com `backdrop-filter: blur(20px)` + gradiente semi-transparente
- [ ] Implementar revelação via `onPointerMove` atualizando `--mask-x` e `--mask-y` CSS custom properties
- [ ] Adicionar partículas de bolha/faísca CSS (`@keyframes` + 4-6 `<span>` com `animation-delay`)
- [ ] Testar interação em mobile (touch) e desktop (mouse) a 60fps

## Fase 3: Fix do StethoscopeReveal
- [ ] Ajustar layout interno do card para CSS Grid (`grid-template-columns: 1fr 1fr` no desktop)
- [ ] Reposicionar SVG do estetoscópio para `position: absolute; top: 1rem; right: 1rem` (eliminar o vazio central)
- [ ] Garantir que a linha EKG ocupa `width: 100%` no bottom do card
- [ ] Validar layout em mobile: `flex-direction: column` com `gap: 1rem`

## Fase 4: Fix do VaccineScroll (Mobile)
- [ ] Em `< 768px`: reduzir largura da seringa para `24px`, `right: -4px`, `pointer-events: none`
- [ ] Em `< 768px`: ocultar êmbolo e texto de percentual (`display: none`)
- [ ] Em `< 480px`: ocultar seringa completamente (`display: none`)
- [ ] Testar scroll suave em mobile sem interferência nos cards de especialidades

## Fase 5: QA & Launch
- [ ] Build limpo (`npm run build`) sem erros TypeScript
- [ ] Validar scroll 60fps em mobile (viewport 375px)
- [ ] Validar GroomingCard scratch-off em touch e mouse
- [ ] Commit e push na origin
