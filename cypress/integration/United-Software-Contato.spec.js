/// <reference types="Cypress" />

describe('Testando a pagina contato do site da United Software', function(){
    beforeEach(function(){
        cy.visit('https://unitedsoftware.com.br/contato')
    })

    it('Testando se estamos na pagina de contato pelo h1', function(){
        cy.get('section.container div.contato-dir h1.title')
            .should('be.visible')
    })

    it('Vamos preencher o formulário e enviar o email.', function(){
        cy.get('input[type="text"][placeholder="Digite seu nome"]')
            .type('Fernanda Bueno')
            .should('have.value', 'Fernanda Bueno')
        
        cy.get('input[type="email"][placeholder="Digite seu email"]')
            .type('nanda@teste.com')
            .should('have.value', 'nanda@teste.com')

        cy.get('input[type="text"][placeholder="(  )_____-____"]')
            .type('48999999999')
            .should('have.value', '48999999999')

        cy.get('textarea[placeholder="Digite sua mensagem..."]')
            .type('Texto de teste')
            .should('have.value', 'Texto de teste')

        cy.contains('.button', 'Enviar').click()
        cy.get('input[type="text"][placeholder="Digite seu nome"]')
            .should('have.value', '')
    })
})