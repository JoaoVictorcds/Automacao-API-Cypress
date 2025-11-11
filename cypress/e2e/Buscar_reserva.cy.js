/// <reference types = "cypress" />

describe("buscar reserva", () => {
    it("buscar reserva existente", () => {
        cy.buscar_existente(5)
    })

    it("buscar reserva inexistente", () => {
        cy.buscar_inexistente(45987654321654987)
    })

    it("buscar reserva como string", () => { // essa api permite numeros como string
        cy.buscar_inexistente("'5'")
    })
})