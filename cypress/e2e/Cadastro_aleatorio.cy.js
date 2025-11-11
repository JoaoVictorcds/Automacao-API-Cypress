/// <reference types = "cypress"/>
import { faker } from "@faker-js/faker";

const checkinDate = faker.date.soon({ days: 30 }).toISOString().split('T')[0]
let dadoAleatorio = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.finance.amount({ min: 99, max: 999, dec: 0 }),
    depositpaid: true,
    bookingdates: {
        checkin: checkinDate,
        checkout: faker.date.soon({ days: 10, refDate: checkinDate }).toISOString().split('T')[0]
    },
    additionalneeds: "Breakfast",
}

describe("Cadastro com faker", () => {
    it("Cadastro com sucesso", () => {
        cy.cadastrar_reserva(dadoAleatorio)
        .then((resposta) => {
            expect(resposta.body.bookingid).to.be.greaterThan(0)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.booking.bookingdates.checkin).to.equal(dadoAleatorio.bookingdates.checkin)
            expect(resposta.body.booking.bookingdates.checkout).to.equal(dadoAleatorio.bookingdates.checkout)
        })
    })

    it("Cadastro sem firstname", () => {
        delete dadoAleatorio.firstname
        cy.cadastrar_reserva(dadoAleatorio)
        .then((resposta) => {
            expect(resposta.body).to.not.have.property("bookingid")
            expect(resposta.status).to.not.equal(200)
            expect(resposta.body).to.equal("Internal Server Error")

        })
    })
})


