/// <reference types="Cypress" />

import { textSobreP } from '../utils/variaveis';

describe('Testando a pagina home do site da United Software', function(){
    beforeEach(function(){
        cy.visit('https://unitedsoftware.com.br/')
    })

    it('Verificando titulo da pagina', function(){
        cy.title()
            .should('be.equal', 'United Software - Welcome to the Future')
    })

    it('Verificando o "H1" e H2 do Header', function(){
        cy.get('div.textos h1')
            .should('have.text' ,'UNITED SOFTWARE')
        cy.get('div.textos h2')
            .should('have.text', 'Welcome to the Future!')
    })

    it('Verificando se tem um "a" link que abre a pagina de contato no Header e está abrindo-a', function(){
        cy.contains('a', 'FAÇA UM ORÇAMENTO SEM COMPROMISSO')
            .click()
        cy.get('h1.title')
            .should('be.visible')
    })

    it('Verificando o texto da section sobre', function(){
        cy.get('section.sobre div.sobre-textos span')
            .should('have.text', 'United Software: Transformando Ideias em Realidade Digital.')
        
        cy.get('section.sobre div.sobre-textos p')
            .first()
            .should('have.text', textSobreP)
    })

    it('Verificando se o "a" link em forma de botão conheça nossos produtos está direcionando para pagina de produtos', function(){
        cy.contains('section.paginas a.linkProdutos', 'Conheça Nossos Produtos').click()
        cy.get('.produtos .header-container .textos h1')
            .should('be.visible')
    })
})