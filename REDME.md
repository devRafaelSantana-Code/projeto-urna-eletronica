# 🗳️ Urna Eletrônica — Simulador Eleitoral

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

## 📌 Sobre o Projeto

Simulador interativo de uma **Urna Eletrônica Brasileira**, desenvolvido com **JavaScript puro (Vanilla JS)**, **HTML5** e **CSS3**, inspirado nos desafios práticos da plataforma B7Web.

O projeto reproduz o fluxo de votação em duas etapas sequenciais (**Vereador e Prefeito**), permitindo registrar votos nominais, votos em branco e votos nulos, além de oferecer recursos de correção de dígitos, validação de candidatos e encerramento automático da votação.

A aplicação foi desenvolvida com foco na manipulação dinâmica do DOM, gerenciamento de estados, organização de dados e reprodução de uma interface inspirada no equipamento eleitoral brasileiro.

---

## ✨ Funcionalidades e Recursos Técnicos

- **Arquitetura Orientada a Dados (`etapas.js`):** As etapas de votação, a quantidade de dígitos e as informações dos candidatos são configuradas dinamicamente por meio de um arquivo JavaScript independente. A função `comecarEtapa()` constrói a interface de acordo com os dados fornecidos.

- **Manipulação Dinâmica do DOM:** Utilização de `nextElementSibling` para controlar o preenchimento dos campos numéricos e transferir automaticamente o indicador de digitação (`.pisca`) para o próximo dígito.

- **Busca e Validação de Candidatos (`.find()`):** A identificação dos candidatos é realizada por meio do método `find()`, permitindo verificar os números digitados e atualizar as informações exibidas na interface.

- **Sistema de Votos:** Registro de votos nominais, brancos e nulos em uma estrutura de dados baseada em arrays, mantendo o histórico das escolhas realizadas durante a simulação.

- **Controle de Estado da Aplicação:** Gerenciamento do fluxo de votação por meio de variáveis de controle, incluindo o bloqueio do teclado após a confirmação da última etapa.

- **Finalização Automática:** Após a conclusão da votação, a interface apresenta a mensagem **FIM** e reinicia automaticamente o simulador após 10 segundos.

- **Identidade Visual com CSS Variables:** Utilização de variáveis CSS centralizadas no `:root` para organizar a paleta de cores e facilitar a manutenção visual da aplicação.

- **Interface Responsiva e Interativa:** Reprodução da identidade visual clássica da urna eletrônica, com painel grafite, carcaça cinza, teclas numéricas com relevo tátil e botões de ação nas cores branca, laranja e verde.

---

## 🖥️ Interface do Projeto

A interface foi desenvolvida para reproduzir a experiência visual e funcional de uma urna eletrônica, incluindo:

- Painel de identificação do cargo em votação.
- Campos dinâmicos para preenchimento dos números dos candidatos.
- Exibição de informações dos candidatos e respectivos partidos.
- Teclado numérico interativo.
- Botões de ação para operações de votação.
- Indicadores visuais para votos brancos, nulos e confirmação.

---

## 📁 Estrutura de Arquivos

```text
projeto-urna-eletronica/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── 38111.jpg
    │   ├── 77222.jpg
    │   ├── 84.jpg
    │   ├── 84_2.jpg
    │   ├── 99.jpg
    │   └── 99_2.jpg
    └── js/
        ├── etapas.js
        └── script.js
```

---

## 📖 Guia de Votação

A simulação utiliza candidatos fictícios para demonstrar o funcionamento das etapas eleitorais.

### 1ª Etapa — Vereador

<text-placeholder></text-placeholder>

| Número  | Candidato         | Partido |
| :-----: | :---------------- | :-----: |
| `38111` | Fulano de Tal     |   ABC   |
| `77222` | Beltrano da Silva |  DEFG   |

### 2ª Etapa — Prefeito

| Número | Prefeito       | Vice-Prefeito | Partido |
| :----: | :------------- | :------------ | :-----: |
|  `84`  | João das Coves | José da Silva |   PPP   |
|  `99`  | Zulano         | Zul           | QWERTY  |

### Teclas de Ação

| Tecla        | Funcionalidade                                                  |
| :----------- | :-------------------------------------------------------------- |
| **BRANCO**   | Registra um voto em branco para a etapa atual.                  |
| **CORRIGE**  | Limpa os números digitados e reinicia o preenchimento da etapa. |
| **CONFIRMA** | Valida e registra o voto, avançando para a próxima etapa.       |

**Voto Nulo:** Qualquer combinação numérica que não corresponda a um candidato cadastrado é considerada um voto nulo.

---

## 🛠️ Tecnologias e Conceitos Aplicados

| Tecnologia / Recurso | Aplicação no Projeto                                     |
| :------------------- | :------------------------------------------------------- |
| **HTML5**            | Estruturação semântica da interface.                     |
| **CSS3**             | Estilização, animações, variáveis CSS e efeitos visuais. |
| **JavaScript ES6+**  | Lógica de votação e controle de fluxo.                   |
| **DOM API**          | Manipulação dinâmica dos elementos da interface.         |
| **Arrays e Objetos** | Organização dos candidatos e armazenamento dos votos.    |
| **Array.find()**     | Pesquisa e identificação dos candidatos.                 |
| **CSS Variables**    | Centralização e gerenciamento das propriedades visuais.  |
| **setTimeout()**     | Controle do reinício automático do simulador.            |

---

## 💻 Como Executar Localmente

O projeto não requer instalação de pacotes ou dependências externas.

**1. Clone o repositório:**

```bash
git clone https://github.com/devRafaelSantana-Code/projeto-urna-eletronica.git
```

**2. Acesse a pasta do projeto:**

```bash
cd projeto-urna-eletronica
```

**3. Execute a aplicação:**

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack, JavaScript e construção de aplicações web.

<p align="center">
  <a href="https://github.com/devRafaelSantana-Code">
    <img src="https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Rafael Santana">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
