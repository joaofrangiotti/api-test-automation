# Projeto 4 - Automacao com Cypress (API REST)

Projeto basico de automacao de testes de API com Cypress.

Repositorio GitHub: `api-test-automation`

## O que foi implementado

- Teste de GET para listar dados
- Teste de POST para criar dados
- Validacao de status code
- Validacao de campos JSON
- Estrutura organizada em `cypress/e2e`

## Estrutura

```text
projeto-4-automacao-cypress
|- cypress/
|  |- e2e/
|     |- users-api.cy.js
|- cypress.config.js
|- package.json
|- README.md
```

## Como rodar passo a passo

1. Abra um terminal na pasta `projeto-4-automacao-cypress`.
2. Instale as dependencias:

```bash
npm install
```

3. Para executar em modo visual:

```bash
npm run cy:open
```

4. Para executar em modo headless (linha de comando):

```bash
npm run cy:run
```

## Resultado esperado

- GET retorna `200` e lista de usuarios.
- POST retorna `201` e JSON com `id` e `createdAt`.

## Simulacao de execucao

Exemplo de saida resumida ao rodar `npm run cy:run`:

```text
Running:  users-api.cy.js

	API REST - Users (Reqres)
		✓ GET /users?page=2 deve listar dados com status 200
		✓ POST /users deve criar dados com status 201

	2 passing (3s)
```

Como fica bom no GitHub:

- print do terminal com os testes passando
- print da interface do Cypress com os dois cenarios verdes
- se quiser, adicionar um terceiro teste negativo de `404`
