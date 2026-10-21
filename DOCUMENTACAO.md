# DOCUMENTAÇÃO TÉCNICA E GUIA DE USO: LANDING PAGE MILANO

## 1. Visão Geral da Arquitetura
A Landing Page da Milano foi desenvolvida seguindo os princípios de **Vanilla Web Development moderno**, sem dependências pesadas de frameworks, garantindo velocidade instantânea de carregamento (Core Web Vitals máximos), facilidade de manutenção e compatibilidade universal com qualquer serviço de hospedagem.

### Tecnologias Utilizadas:
- **HTML5 Semântico:** Marcação acessível (WAI-ARIA, tags semânticas `header`, `section`, `nav`, `main`, `article`, `footer`).
- **CSS3 Puro (Mobile-First):** Sistema de variáveis de design (CSS Custom Properties), layout flexível com CSS Grid e Flexbox, transições aceleradas por hardware (`transform`, `opacity`).
- **JavaScript ES6+ Nativo:** Interatividade desacoplada, carrossel tátil, cálculo dinâmico de Accordions, máscaras de formulário e persistência leve.
- **Google Fonts:** Plus Jakarta Sans & Inter.

---

## 2. Estrutura de Arquivos do Projeto
```text
agenciamilano/
└── asserts/
    ├── index.html               # Estrutura principal da Landing Page
    ├── styles.css               # Folha de estilos completa (Mobile-First)
    ├── script.js                # Lógica de interações, carrossel, filtros e validações
    ├── PROMPT.md                # Prompt original e especificações técnicas
    ├── PASSOS..md               # Roteiro passo a passo do projeto
    ├── PASSOS.md                # Cópia do roteiro passo a passo
    ├── CONTEXTO.md              # Contexto estratégico da assessoria e público-alvo
    ├── DOCUMENTAÇÃO.md          # Este documento de documentação técnica
    ├── .gitignore               # Configurações de exclusão do controle de versão
    ├── LOGO-BRANCA.png          # Logo Milano versão clara para fundos escuros
    ├── LOGO-PRETA.png           # Logo Milano versão escura para fundos claros
    ├── mapa01.png               # Mapa pontilhado do Brasil com distribuição de clínicas
    ├── escritorio-milano.webp   # Fotografia da sede física da Milano em SP
    ├── CARD-HOVER01.png         # Referência visual de hover dos cards de dor
    ├── CARD-HOVER02.png         # Referência visual de hover dos cards de diferenciais
    ├── CASE01.png a CASE04.png  # Referências visuais dos cards de cases e filtros
    ├── METODO01.png a 03.png    # Referências do seletor circular das etapas do método
    ├── desktop.png / mobile.png # Layouts completos de referência
    └── MEDICOS-HERO/            # Pasta com fotos dos médicos parceiros
        ├── medico-1.webp a medico-8.webp
```

---

## 3. Guia de Funcionalidades Implementadas

### A. Abordagem Mobile-First ("First Mobile")
- **Viewport Configurado:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">`.
- **Prevenção de Rolagem Lateral:** Todos os contêineres e imagens possuem `max-width: 100%` com `overflow-x: clip / hidden`.
- **Barra de Conversão Inferior Fixa:** Aparece automaticamente em telas de smartphone após o usuário rolar a primeira tela, com botão de agendamento em destaque.
- **Botão Flutuante de WhatsApp:** Posicionado estrategicamente com badge de notificação e link direto para conversa via API com mensagem amigável pré-preenchida.

### B. Carrossel de Cases Dark Mode
- **Filtros Funcionais:**
  - `Todos (8)`: Exibe todos os 8 cases catalogados.
  - `Estratégia comercial (3)`: Filtra cases com foco em CRM, secretária e pós-operatório.
  - `Anúncios (3)`: Filtra campanhas de Meta Ads e tráfego direto.
  - `Conteúdo (2)`: Filtra cases focados em posicionamento, autoridade e vídeos.
- **Navegação Dupla:** Botões de seta anterior/próximo (`←` e `→`) e suporte a gestos de arrastar/deslizar com o dedo (Touch Swipe) no celular.

### C. Seletor Interativo do Método Agenda Cheia
- Mostrador circular com 3 fases integradas:
  - **Etapa 01 - Alcance:** Anúncios e busca local.
  - **Etapa 02 - Autoridade:** Conteúdo e posicionamento médico.
  - **Etapa 03 - Agendamento:** Comercial, CRM e secretária.
- Ao clicar nos botões ou no anel, os textos e indicadores se atualizam com transição suave.

### D. Formulário de Conversão com Máscaras e Validação
- **Máscara Automática:** O campo de WhatsApp formata em tempo real no padrão brasileiro: `(11) 98765-4321`.
- **Seletores Personalizados:** Seleção de perfil na clínica e faturamento mensal médio.
- **Encaminhamento Direto:** Ao enviar, o formulário valida os campos e gera uma mensagem de confirmação, podendo também abrir diretamente o WhatsApp do time comercial com os dados preenchidos.

### E. Accordion FAQ (10 Perguntas)
- Componente sanfonado acessível, permitindo abrir e fechar perguntas com animação fluida de altura e rotação de ícone.

---

## 4. Instruções de Implantação e Hospedagem
Como o projeto utiliza arquivos estáticos puros (HTML, CSS, JS e imagens):
1. **Opção 1: Vercel / Netlify / Cloudflare Pages:**
   - Basta conectar o repositório Git ou arrastar a pasta `asserts/` diretamente para o painel.
2. **Opção 2: Servidor Apache / Nginx / cPanel:**
   - Fazer o upload dos arquivos para a pasta pública `public_html/`.
3. **Opção 3: Visualização Local:**
   - É possível abrir o arquivo `index.html` diretamente em qualquer navegador moderno ou rodar um servidor local com `npx serve .` ou `python -m http.server 8000`.

---

## 5. Práticas de SEO & Performance
- **Meta Tags Completas:** Open Graph para compartilhamento no WhatsApp, Facebook e LinkedIn.
- **Hierarquia H1-H4 Semântica:** Apenas um `<h1>` por página, estruturando o conteúdo de forma lógica para motores de busca e leitores de tela.
- **Imagens Otimizadas:** Carregamento com `loading="lazy"` em seções abaixo da dobra e formatos modernos (`webp` e `png` comprimidos).
