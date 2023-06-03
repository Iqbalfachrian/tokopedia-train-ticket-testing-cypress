/// <reference types="cypress" />

//Negative Test
describe('Search Train Ticket at Tokopedia Kereta Api', () => {
    before(() => {
        cy.visit('https://tiket.tokopedia.com/kereta-api/')
    })

    it('Should to invalid departure date', () => {
        cy.get('[data-testid="selectorAsal"]').click().type('Pasar Senen').should('have.value', 'Pasar Senen');
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Jakarta-Pasar.Senen-PSE"] > .optionText').click()

        cy.get('[data-testid="selectorTujuan"]').click().type('Solobalapan').should('have.value', 'Solobalapan');
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Solo-Solobalapan-SLO"]').click()

        cy.get('[data-testid="selectorBerangkat"]').click()
        cy.wait(3000)
        cy.get('[data-testid="date20230730"] > .date_card > .date')
        .parents('td')
        .invoke('css', 'visibility', 'visible')
        .then(() => {
        cy.get('[data-testid="date20230730"] > .date_card > .date').click();
        })
        
        cy.wait(3000)
    })
    
    it('Should to see error message', () => {
        
    cy.visit('https://tiket.tokopedia.com/kereta-api/search/?r=PSE.SLO&d=20230730&a=1&i=0');

    cy.get('.css-1kk6fth').invoke('text').then((errorMessage) => {
        cy.log('Yaah... Rute ini nggak ada', errorMessage)
    });
    cy.get('.css-4crs9l').invoke('text').then((errorMessage) => {
        cy.log('Rute yang kamu cari belum tersedia. Coba cari rute lainnya, yuk!', errorMessage)
    });
   })
})