# Automação Web com Cypress - Automation Exercise

## Objetivo do projeto

Este projeto implementa os casos de teste obrigatórios da aplicação Automation Exercise utilizando Cypress em JavaScript, com modularização, relatórios Mochawesome e pipeline no GitHub Actions.

## Tecnologias utilizadas

- JavaScript
- Node.js
- npm
- Cypress
- cypress-mochawesome-reporter
- GitHub Actions
- Git e GitHub

## Casos implementados

- TC01 - Register User
- TC02 - Login User with correct email and password
- TC03 - Login User with incorrect email and password
- TC04 - Logout User
- TC05 - Register User with existing email
- TC08 - Verify All Products and product detail page
- TC09 - Search Product
- TC10 - Verify Subscription in home page
- TC15 - Place Order: Register before Checkout
- TC16 - Place Order: Login before Checkout

## Estrutura de pastas

```text
.
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── TC01.cy.js
│   │   ├── TC02.cy.js
│   │   ├── TC03.cy.js
│   │   ├── TC04.cy.js
│   │   ├── TC05.cy.js
│   │   ├── TC08.cy.js
│   │   ├── TC09.cy.js
│   │   ├── TC10.cy.js
│   │   ├── TC15.cy.js
│   │   └── TC16.cy.js
│   ├── reports/
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── utils.js
│   │   └── pages/
│   │       ├── AuthPage.js
│   │       ├── CheckoutPage.js
│   │       ├── HomePage.js
│   │       ├── ProductsPage.js
│   └── videos/
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Pré-requisitos

- Node.js 20+
- npm
- Git
- Acesso à internet para executar os testes na aplicação de prática Automation Exercise

## Instalação das dependências

```bash
npm install
```

## Como abrir o Cypress

```bash
npm run cy:open
```

## Como executar os testes em modo headless

```bash
npm test
```

## Como executar um teste individual

```bash
npx cypress run --spec cypress/e2e/TC08.cy.js
```

## Como visualizar os relatórios

Os relatórios Mochawesome são gerados em:

```text
cypress/reports/
```

Para abrir localmente o relatório em HTML, acesse a pasta gerada e abra o arquivo HTML correspondente no navegador.

## GitHub Actions

A pipeline está configurada em:

```text
.github/workflows/cypress.yml
```

Ela executa automaticamente em push, pull request e também pode ser disparada manualmente via workflow_dispatch. A pipeline:

- instala as dependências com npm ci;
- executa a suíte em modo headless;
- publica relatórios e evidências como artifacts;
- falha quando algum teste falha.

## Acesso aos artifacts dos relatórios

No GitHub Actions, o job faz upload dos artefatos em:

```text
cypress-reports
```

Os arquivos incluem relatórios HTML/JSON e imagens de falha, quando disponíveis.

## Limitações conhecidas

- A aplicação alvo é um site público de prática e pode sofrer pequenas mudanças de interface;
- a execução depende da disponibilidade externa do site Automation Exercise;
- alguns elementos visuais podem gerar avisos de mixed content no navegador, mas não bloqueiam a execução dos testes no ambiente Cypress.

## Comandos principais

```bash
npm install
npm run cy:open
npm test
npx cypress run --spec cypress/e2e/TC01.cy.js
npm run test:report
```
