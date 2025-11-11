Cypress.Commands.add('atualizar_reserva', (idReserva,token,dados,failOnStatusCode= true) => {
    cy.request({
        method: "PUT",
        url: "https://restful-booker.herokuapp.com/booking/" + idReserva,
        headers: {
            cookie: 'token=' + token,
        },
        body: dados,
        failOnStatusCode: false
    })
})