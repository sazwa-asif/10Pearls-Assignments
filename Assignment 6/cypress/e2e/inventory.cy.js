import InventoryPage from '../pages/InventoryPage'

const inventory = new InventoryPage()

describe('Inventory Tests', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')
    })

    it('Validate Products', () => {

        inventory.products()
        .should('have.length.greaterThan', 0)

        inventory.firstProduct().click()

        cy.url().should('include', 'inventory-item')

        cy.get('.inventory_details_name')
        .should('be.visible')

        cy.get('.inventory_details_price')
        .should('be.visible')
    })
})