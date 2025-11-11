/// <reference types = "cypress" />

Cypress.Commands.add('buscar_existente', (reserva) => {
    cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking/"+ reserva,
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.have.property("firstname")
        })
})

Cypress.Commands.add('buscar_inexistente', (reserva) => {
    cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking/"+ reserva,
            failOnStatusCode: true,
        }).then((resposta) => {
            expect(resposta.status).to.not.equal(200)
            expect(resposta.body).to.equal('Not Found')
        })
})

