/// <reference types = "cypress" />
import { bodyBase } from "../support/bodyBase"
let token
let idReserva

 
describe("Atualizar reserva", () => {
    beforeEach(() => {  //executa a autenticacao antes de cada cenario
        cy.loginAuth("admin","password123")//login-autenticacao
            .then((resposta) => {
                token = resposta.body.token
        })
    });

    it("Atualizar reserva válida", () => {   
        const dados = {...bodyBase}
        cy.cadastrar_reserva(dados) //cadastro pra atualizar
        .then((resposta) => {  
            expect(resposta.status).to.equal(200)
            expect(resposta.body.booking.firstname).to.equal(dados.firstname)
            idReserva = resposta.body.bookingid       

            dados.firstname="JOAO", //aqui pega body normal e altera
            cy.atualizar_reserva(idReserva,token,dados) //Pega o cadastro feito e atualiza
            .then((resposta)=>{
                expect(resposta.status).to.equal(200)
                expect(resposta.body.firstname).to.equal(dados.firstname)
                expect(resposta.body.bookingdates).to.deep.equal(dados.bookingdates)
            })
        })
    })

    it("Atualizar reserva com nome invalido", () => {
        const dados = {...bodyBase}
        dados.firstname=9,
        cy.atualizar_reserva(idReserva, token, dados, false)
        .then((resposta)=>{
            expect(resposta.status).to.not.equal(200)
            expect(resposta.body).to.not.have.property("firstname")
            expect(resposta.body).to.equal("Internal Server Error")
        })
    })
    
})