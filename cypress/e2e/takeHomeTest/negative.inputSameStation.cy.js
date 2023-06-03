/// <reference types="cypress" />

//Negative Test
describe('Search Train Ticket at Tokopedia Kereta Api', () => {
    before(() => {
        cy.visit('https://tiket.tokopedia.com/kereta-api/')
    })

    it('Should to invalid departure date', () => {
        cy.get('[data-testid="selectorAsal"]').click().type('Gambir').should('have.value', 'Gambir');
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Jakarta-Gambir-GMR"]').click()
        
        cy.get('[data-testid="selectorTujuan"]').click().type('Gambir').should('have.value', 'Gambir');
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Jakarta-Gambir-GMR"]').click()
        
        cy.wait(3000)
        cy.get('.error-text').invoke('text').then((errorMessage) => {
            cy.log('Stasiun keberangkatan dan tujuan tidak boleh sama.', errorMessage);
          });
          
    })
})