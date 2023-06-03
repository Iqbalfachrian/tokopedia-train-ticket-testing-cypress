/// <reference types="cypress" />

//Negative Test

describe('Search Train Ticket at Tokopedia Kereta Api', () => {
    before(() => {
        cy.visit('https://tiket.tokopedia.com/kereta-api/')
    })

it('Should to invalid departure date', () => {
    cy.get('[data-testid="selectorAsal"]').type('Cirebon')
    cy.get('.css-1q62ntx > .css-zpv22 > [label="Cirebon-Cirebon-CN"] > .optionText').click()

    cy.get('[data-testid="selectorTujuan"]').type('Bandung')
    cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()

    cy.get('[data-testid="selectorBerangkat"]').click()
    cy.get('div.back').click();
    cy.wait(3000)
    
    cy.get('[data-testid="date20230501"] > .date_card > .date')
    .parents('td')
    .invoke('css', 'visibility', 'visible')
    .then(() => {
    cy.get('[data-testid="date20230501"] > .date_card > .date').click();
    })
  })
})