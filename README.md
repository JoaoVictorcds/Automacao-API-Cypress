# 🔥 Automação de Testes de API com Cypress – Restful Booker

![Cypress](https://img.shields.io/badge/Cypress-API%20Testing-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-blue)

## 📋 Descrição

Este projeto tem como objetivo realizar **testes automatizados de API** utilizando o **Cypress**, validando os principais endpoints da aplicação [Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-UpdateBooking).  

A automação foi feita para garantir que o comportamento das requisições (GET, POST, PUT e DELETE) esteja de acordo com o esperado, validando status codes, corpo das respostas e headers.

---

## 🚀 Tecnologias utilizadas

-  **Cypress**  
-  **JavaScript (ES6+)**  
-  **Node.js**  
-  **Git & GitHub**  
-  **VS Code**

---


##  Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/JoaoVictorcds/automacao-api-cypress.git

# Acessar o diretório do projeto
cd automacao-api-cypress

# Instalar as dependências
npm install

# Rodar todos os testes de API
npx cypress run

# Ou abrir a interface do Cypress
npx cypress open

```

🧠 Endpoints testados

- GET /booking - Retorna todas as reservas

- GET /booking/{id} - Retorna reserva específica

- POST /booking - Cria nova reserva

- PUT /booking/{id} - Atualiza reserva existente

- DELETE /booking/{id} - Deleta uma reserva

---

✅ Validações realizadas

Status code esperado (200, 201, 404, 403, etc)

Estrutura e tipo dos campos no corpo da resposta

Headers de resposta (Content-Type, Server, etc)

Criação, alteração e exclusão de registros

Autenticação com token para endpoints protegidos

---

 **Aprendizados**  
Durante o desenvolvimento deste projeto, aprimorei meus conhecimentos em:

- Automação de testes de API REST com Cypress

- Manipulação de requisições HTTP e validação de respostas

- Organização de código para testes reutilizáveis

- Criação de cenários independentes e consistentes
---
Autor: Joao victor Cruz de Souza  
[Linkedin](https://www.linkedin.com/in/joaovictorcds/)