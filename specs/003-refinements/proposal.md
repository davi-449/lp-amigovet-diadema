# 🐶 Vibe Proposal: AmigoVet V3 (Refinamento Premium)

## Contexto e Problemas Atuais
A visão de ter 3D e interações pet-temáticas é o caminho certo, mas a execução técnica de alguns componentes no V2 tirou o polimento "Premium" e afetou a performance (especialmente no mobile, como relatado no "travamento" ao passar o dedo).

**Pontos de dor (identificados pelas imagens):**
1. **FurBrush (Hero):** Ficou confuso, assemelhando-se a pontilhados/sujeira na tela, poluindo a primeira impressão e gerando perda de FPS ao tocar. Vamos removê-lo.
2. **SleepingPet:** O SVG pode não estar passando o nível "alta tecnologia" esperado.
3. **VaccineScroll no Mobile:** A seringa lateral está flutuando e invadindo o texto dos cards na grade de especialidades (ex: Clínica Geral), quebrando o layout responsivo.
4. **Espaços Ociosos:** O card do EKG (StethoscopeReveal) está com um buraco branco enorme e diagramação estranha no desktop.

---

## A Solução (V3)
Para elevar a barra e deixar "dahora bolado" mas num estilo limpo, faremos substituições cirúrgicas:

### 1. Limpeza do Hero
- **Remoção do `FurBrush`:** O Hero voltará a focar na tipografia e no background escurecido com um blur elegante, retornando o `OrbEffect` original (esferas de luz com blur 3D, que são levíssimas e garantem contraste).
- **Manutenção do `CollarTagSpin`:** A plaquinha de coleira 3D é o elemento vencedor daqui, mantendo as informações de contato a um tap de distância.
- **`PawPressure` Refinado:** A patinha no botão "Agendar Consulta" será mais translúcida (efeito glow esmeralda, menos opaco), como uma luz que acende ao pressionar.

### 2. O Novo "Grooming Card" (Premium Fur Interaction)
O "pentear pelo" é muito lúdico para jogar fora, mas deve ser confinado a um card específico para não destruir a performance e o design do topo.
- Na **`ExpertiseGrid`**, criaremos um card Bento para **Estética Animal / Banho e Tosa**.
- **A Interação:** Uma imagem fofa de alta resolução de um cachorro/gato felpudo. Por cima da imagem, uma camada de "espuma" ou "vidro embaçado". Ao passar o dedo/mouse por cima do card, a área interage como um *scratch-off* e revela o pet limpo e brilhante embaixo (com algumas bolhas ou faíscas). Trata-se de *CSS Masking* avançado e é levíssimo pro celular. O visual fica muito superior a vetores desenhados no canvas.

### 3. Ajustes de Layout e Seringa (`VaccineScroll`)
- **Fix:** Faremos a seringa da esquerda/direita ficar absolutamente colada na borda remanescente do mobile (ou transformaremos numa barra fina e elegante, com o êmbolo descendo sem cobrir a leitura do site).
- Se estiver espremendo os textos, a posicionaremos atrás de um background semi-transparente ou a minimizaremos para aparelhos de tela pequena.

### 4. Ajustes no Card de EKG e Pets
- O `StethoscopeReveal` não ocupou bem o espaço; redesenharemos o layout desse BentoCard para que os itens de especialidades entrem de uma forma mais compacta e visualmente distribuída (talvez um hover contínuo no desktop, ou ajustando o flex-direction).
- E removeremos a figura do pet dormindo crua em SVG para dar foco a elementos vitrificados (`clinical-glass`) e fotos fotorealistas.

---

## Resumo das Tarefas
- [ ] Deletar `FurBrush.tsx` e `SleepingPet.tsx`.
- [ ] Recuperar fundo borrado elegante do Hero.
- [ ] Criar o `GroomingCard` interativo usando CSS Masks de alta performance.
- [ ] Refatorar posições CSS e quebras do `VaccineScroll`.
- [ ] Melhorar layout e margens do card "Clínica Geral & Cirurgia".

### Como proceder
Basta enviar um **`/vibe-apply`** para iniciarmos essa remoção da "sujeira" e implementarmos o card estético polido e leve!
