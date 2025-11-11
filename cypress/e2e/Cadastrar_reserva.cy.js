/// <reference types = "cypress"/>
import { bodyBase } from "../support/bodyBase"

describe("Cadastrar reserva", () => {
    it("Cadastrar reserva existente", () => {
       const dadosReserva = {...bodyBase,bookingdates:{...bodyBase.bookingdates}}
        cy.cadastrar_reserva(dadosReserva) .then((resposta)=>{
                expect(resposta.status).to.equal(200)
                expect(resposta.body.booking.firstname).to.equal(dadosReserva.firstname)    
                expect(resposta.body.bookingid).to.be.greaterThan(0)
                expect(resposta.body.booking.additionalneeds).to.equal(dadosReserva.additionalneeds)
        })
    })

    it("Cadastrar reserva sem o campo 'firstname'", () => {
        const dadosReserva= {...bodyBase,bookingdates:{...bodyBase.bookingdates}}
        delete dadosReserva.firstname
        cy.cadastrar_reserva(dadosReserva, false) .then((resposta)=>{
                expect(resposta.status).to.not.equal(200)
                expect(resposta.body.booking).to.equal(dadosReserva.firstname,"firstname")
                expect(resposta.body).to.not.have.property("bookingid")
                expect(resposta.body).to.not.have.property("additionalneeds")
        })
    })

     it("Cadastrar reserva sem o campo 'checkin'", () => {
        const dadosReserva={...bodyBase,bookingdates: {...bodyBase.bookingdates}}
        delete dadosReserva.bookingdates.checkin
        cy.cadastrar_reserva(dadosReserva, false) .then((resposta)=>{
                expect(resposta.status).to.not.equal(200)
                expect(resposta.body).to.not.have.property("checkin")
                expect(resposta.body).to.not.have.property("bookingid")
                expect(resposta.body).to.not.have.property("additionalneeds")
        })
    })
})