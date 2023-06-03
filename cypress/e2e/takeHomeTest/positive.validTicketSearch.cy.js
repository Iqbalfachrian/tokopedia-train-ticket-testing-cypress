/// <reference types="cypress" />

//Positive Test

describe('Search Train Ticket at Tokopedia Kereta Api', () => {
    before(() => {
        cy.visit('https://tiket.tokopedia.com/kereta-api/')
    })

    it('Should to find valid ticket search ', () => {
        cy.get('[data-testid="selectorAsal"]').type('Bandung')
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()
        
        cy.get('[data-testid="selectorTujuan"]').type('Gambir')
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Jakarta-Gambir-GMR"] > .optionText').click()

        cy.get('[data-testid="selectorBerangkat"]').click()
        cy.wait(3000)
        cy.get('[data-testid="date20230609"] > .date_card > .date')
        .parents('td')
        .invoke('css', 'visibility', 'visible')
        .then(() => {
        cy.get('[data-testid="date20230609"] > .date_card > .date').click();
        })

        cy.wait(2000)
        cy.contains('span', 'Cari Tiket').click({ force: true });
    })

    it('Should to display search result ', () => {
        cy.visit('https://tiket.tokopedia.com/kereta-api/search/?r=BD.GMR&d=20230609&a=1&i=0')
    });
})