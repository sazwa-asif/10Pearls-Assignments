class InventoryPage {

    title() {
        return cy.get('.title')
    }

    products() {
        return cy.get('.inventory_item')
    }

    firstProduct() {
        return cy.get('.inventory_item_name').first()
    }

    firstPrice() {
        return cy.get('.inventory_item_price').first()
    }
}

export default InventoryPage