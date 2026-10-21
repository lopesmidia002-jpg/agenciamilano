# Agência Milano — Assessoria de Marketing & Performance Médico

![Agência Milano](LOGO-BRANCA.png)

Landing page de alta conversão desenvolvida para a **Agência Milano**, especializada em assessoria de marketing médico e aquisição de pacientes particulares para clínicas e profissionais da saúde.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura acessível, otimizada para SEO e performance.
- **CSS3 Puro (Vanilla CSS):** Design System completo mobile-first, variáveis CSS, micro-animações, efeitos de glassmorphism e iluminação neon.
- **JavaScript ES6+:** Interatividade avançada (dial circular progressivo, carrossel de cases com filtros dinâmicos, ticker contínuo e accordion de FAQ).
- **Docker & Docker Compose:** Containerização 100% pronta para produção via **Nginx Alpine**.
- **Nginx:** Servidor web de alto desempenho com compressão Gzip, cabeçalhos de segurança e cache otimizado para assets estáticos.

---

## ✨ Principais Funcionalidades

- **Design System Premium & Responsivo:** Experiência visual impecável tanto no Desktop quanto no Mobile.
- **Dial Circular Interativo (Método Agenda Cheia):** Visualizador de 3 etapas (*Alcance*, *Autoridade* e *Agendamento*) com carregamento progressivo da circunferência vermelha e auto-avanço fluido.
- **Carrossel de Cases de Sucesso:** Navegação por especialidades médicas com filtros em tempo real e métricas de crescimento.
- **Carrossel Infinito de Métricas & Credenciais:** Faixa de alto impacto com presença nacional e resultados comprovados.
- **Accordion de Dúvidas Frequentes (FAQ):** Respostas objetivas para quebra de objeções antes do agendamento.
- **Call-to-Actions Estratégicos:** Botão flutuante do WhatsApp e botões Milano Pill com efeito glow direcionando para reuniões estratégicas.

---

## 🐳 Como Rodar no Docker

A aplicação está 100% containerizada e pronta para execução com um único comando.

### Pré-requisitos
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lopesmidia002-jpg/agenciamilano.git
   cd agenciamilano
   ```

2. **Inicie o container:**
   ```bash
   docker compose up -d --build
   ```
   *(No Windows, você também pode simplesmente dar um duplo clique no arquivo `docker-start.bat`)*

3. **Acesse no navegador:**
   Abra [http://localhost:8080](http://localhost:8080)

4. **Para parar o container:**
   ```bash
   docker compose down
   ```
   *(Ou execute `docker-stop.bat`)*

---

## 💻 Como Rodar Localmente (Sem Docker)

Você pode servir os arquivos com qualquer servidor web estático:

```bash
# Com Python 3
python -m http.server 8080

# Com Node.js / npx
npx serve .
```

Abra [http://localhost:8080](http://localhost:8080) no navegador.

---

## 📁 Estrutura do Projeto

```
├── index.html            # Estrutura principal da Landing Page
├── styles.css            # Design System, temas e responsividade
├── script.js             # Lógica interativa, animações e filtros
├── Dockerfile            # Configuração da imagem Docker Nginx Alpine
├── docker-compose.yml    # Orquestração do container Docker
├── nginx.conf            # Configuração do Nginx com Gzip e Cache
├── .dockerignore         # Arquivos ignorados na imagem Docker
├── docker-start.bat      # Script de inicialização rápida no Windows
├── docker-stop.bat       # Script de parada rápida no Windows
├── MEDICOS-HERO/         # Imagens dos médicos em formato WebP
└── ...                   # Logos, símbolos e assets visuais
```

---

## 📄 Licença

Projeto desenvolvido para a **Agência Milano** — Todos os direitos reservados.
