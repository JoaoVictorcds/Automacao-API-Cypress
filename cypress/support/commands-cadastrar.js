/// <reference types = "cypress"/>
import { faker } from "@faker-js/faker";

Cypress.Commands.add('cadastrar_reserva', (dados,failOnStatusCode= true) => {
    cy.request({           //Pra cadastrar
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        body: dados,
        failOnStatusCode: false
        
    })
})
