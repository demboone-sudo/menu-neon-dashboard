# ⚡ Menu Neon Interativo & Dashboard SPA

Uma interface futurista com estilo **Cyberpunk/Neon**, desenvolvida com **HTML5, CSS3 puro e JavaScript Vanilla**. O projeto apresenta um menu interativo com diferentes direções de animação, efeitos sonoros sintetizados dinamicamente e navegação fluida em formato de Single Page Application (SPA).

---

## 📸 Demonstração do Projeto

- **Menu Neon**: Animação de preenchimento e brilho com pseudo-elementos (`::before`).
- **Sintetizador de Áudio**: Efeitos de som em tempo real via **Web Audio API** (sem dependência de ficheiros `.mp3`).
- **Painel de Controlo**: Alteração da direção da animação (Horizontal, Vertical e Centro) e comutador de som.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica e atributos de dados (`data-text`, `data-section`).
- **CSS3**:
  - Pseudo-elementos (`::before`, `::after`).
  - Animações e transições avançadas (`clip-path`, `drop-shadow`).
  - Variáveis CSS (`--clr`) para gestão dinâmica de cores Neon.
  - Layout flexível com **Flexbox** e **CSS Grid**.
- **JavaScript (ES6+)**:
  - Manipulação e navegação DOM.
  - **Web Audio API**: Geração e síntese de frequências áudio via código.

---

## 🚀 Funcionalidades

1. **Direções de Animação Dinâmicas**:
   - **Horizontal**: Preenchimento da esquerda para a direita.
   - **Vertical**: Preenchimento de baixo para cima.
   - **Centro**: Expansão circular a partir do centro com `clip-path`.

2. **Efeitos Sonoros Futuristas**:
   - Som *Sci-Fi* sintetizado com osciladores senoidais no evento `mouseenter`.
   - Som metálico curto no evento `click`.

3. **Navegação SPA (Single Page Application)**:
   - Alternância instantânea entre as secções (**Home**, **Sobre**, **Serviços**, **Projetos** e **Contato**) sem recarregar a página.

---

## 📂 Estrutura de Ficheiros

```text
├── index.html   # Estrutura principal da aplicação
├── style.css    # Estilização Neon, layouts e animações
└── script.js    # Lógica de navegação SPA e síntese de áudio