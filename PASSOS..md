# PASSOS DE DESENVOLVIMENTO E IMPLANTAÇÃO: AGÊNCIA MILANO

Este documento descreve os passos técnicos e metodológicos executados para desenvolver a Landing Page institucional mobile-first de alta performance para a Milano.

---

## Passo 1: Análise de Requisitos e Imersão Visual
1. **Inspeção dos Ativos de Referência:**
   - Avaliação detalhada de `mobile.png` e `desktop.png` para mapear proporções, hierarquia visual, espaçamentos e micro-interações.
   - Análise de `CARD-HOVER01.png` e `CARD-HOVER02.png` para extrair os estados normais e ativos dos cards.
   - Verificação das telas de cases (`CASE01.png` a `CASE04.png`) para reproduzir o carrossel dark mode com filtro por categorias.
   - Leitura do arquivo oficial `Dúvidas frequentes.txt` para incorporar integralmente as 10 perguntas e respostas no componente de Accordion.

---

## Passo 2: Estruturação do Design System (Mobile-First)
1. **Configuração de Tokens de Cores e Tipografia:**
   - Paleta de cores em variáveis CSS (`--bg-primary`, `--bg-dark`, `--brand-gradient`, `--brand-red`, `--brand-orange`, `--text-main`, `--text-muted`).
   - Importação das famílias tipográficas `Plus Jakarta Sans` e `Inter` via Google Fonts.
   - Definição do reset moderno com foco em acessibilidade e prevenção de transbordamento horizontal (`overflow-x: hidden`).
2. **Definição de Breakpoints Progressivos:**
   - Base móvel: `320px` a `639px`.
   - Tablets e telas intermediárias: `@media (min-width: 640px)` e `@media (min-width: 768px)`.
   - Telas de desktop: `@media (min-width: 1024px)` e `@media (min-width: 1280px)`.

---

## Passo 3: Implementação Estrutural (HTML5 Semântico)
1. **Navbar & Cabeçalho:**
   - Logo oficial vetorizada / de alta resolução com suporte a temas.
   - Links com rolagem suave (`scroll-behavior: smooth`) para âncoras da página.
   - Botão rápido de agendamento e menu móvel responsivo.
2. **Hero Section com Formulário de Conversão:**
   - Alinhamento em coluna única no mobile e 2 colunas amplas no desktop.
   - Inclusão do card de conversão com validações e campos estratégicos (especialidade, WhatsApp com máscara, faturamento).
   - Ticker de especialidades com animação CSS suave.
3. **Métricas e Mapa Nacional:**
   - Grid de dados quantitativos com ícones em gradiente.
   - Renderização do mapa estilizado com pins pulsantes nos estados com maior concentração de parceiros.
4. **Cenários de Dor ("Antes do Método"):**
   - Grid com 6 cards interativos e efeito de borda superior gradiente + ícone ativo ao hover/toque.
5. **Método Agenda Cheia (Interativo):**
   - Dial circular de 3 etapas com alternância de estados (Alcance, Autoridade, Agendamento).
6. **Serviços e Passo a Passo:**
   - 4 blocos de serviços detalhados e linha do tempo de 5 passos da contratação à execução.
7. **Por Que a Milano:**
   - 6 vantagens competitivas e faixa de métricas institucionais.
8. **Cases do Método (Dark Mode Carousel):**
   - Sistema de abas com filtragem por categorias em tempo real.
   - Carrossel com botões de navegação e suporte tátil a swipe para celulares.
9. **Quem Confia (Grid de Médicos):**
   - Carrossel contínuo com avatares reais dos clientes que transicionam de preto e branco para colorido com glow avermelhado.
10. **Sobre a Milano & Quadro de Perfil Ideal:**
    - Seção com imagem do escritório e comparativo de qualificação ("Faz sentido para você se..." vs "Ainda não é o momento").
11. **Banner Final de Conversão & FAQ Accordion:**
    - Fundo escuro com iluminação radial e botão de alta visibilidade.
    - 10 itens de FAQ expansíveis suavemente com ícones giratórios.
12. **Rodapé, Barra Fixa Mobile e Botão WhatsApp:**
    - Rodapé com dados institucionais e conformidade.
    - Barra de CTA fixa na parte inferior da tela do celular para máxima taxa de clique.
    - Botão flutuante de WhatsApp com notificação pulsante.

---

## Passo 4: Camada de Interatividade e Experiência do Usuário (JavaScript)
1. **Controle do Carrossel de Cases com Filtros Dinâmicos:**
   - Filtragem instantânea ao clicar nas pílulas (Todos, Comercial, Anúncios, Conteúdo).
   - Touch drag / swipe listeners para rolagem tátil suave em smartphones.
2. **Seletor de Etapas do Método:**
   - Transição dinâmica entre os 3 passos com atualização de texto, anel de progresso e botões.
3. **Máscara e Validação do Formulário:**
   - Auto-formatação de telefone celular `(DD) 9XXXX-XXXX`.
   - Feedback de envio em modal/toast e encaminhamento opcional para WhatsApp com mensagem personalizada preenchida.
4. **Accordion Acessível do FAQ:**
   - Abertura suave individual com cálculo dinâmico de altura (`max-height`).
5. **Observador de Interseção (IntersectionObserver):**
   - Animação de entrada e exibição contextual da barra fixa mobile.

---

## Passo 5: Testes e Validação em Navegador Real
- Execução de testes de responsividade em múltiplos viewports (mobile 375px/390px/412px, tablet 768px, desktop 1280px e 1920px).
- Verificação do carregamento de todos os arquivos de mídia locais.
