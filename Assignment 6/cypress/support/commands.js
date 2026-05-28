Cypress.Commands.add('login', (user, pass) => {

    cy.visit('/')

    cy.get('#user-name').type(user)

    cy.get('#password').type(pass)

    cy.get('#login-button').click()
})