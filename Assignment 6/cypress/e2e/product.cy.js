describe('Product Page', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')

        cy.get('.inventory_item_name')
        .first()
        .click()
    })

    it('Validate Product Page', () => {

        cy.get('.inventory_details_name')
        .should('be.visible')

        cy.get('.inventory_details_price')
        .should('be.visible')

        cy.get('button')
        .should('contain', 'Add to cart')
    })
})