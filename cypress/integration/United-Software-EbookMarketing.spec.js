/// <reference types="Cypress" />

describe('Testando pagina de pagamento do e-book estrategia de marketing', function(){
    beforeEach(function(){
        cy.visit('https://unitedsoftware.com.br/')
    })

    it('Verificando se está abrindo a pagina do kiwify, removendo o target', function(){
        cy.contains('a', 'E-book Estratégias de Marketing')
            .invoke('removeAttr', 'target')
            .click()
    })
})