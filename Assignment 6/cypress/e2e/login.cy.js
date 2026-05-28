import LoginPage from '../pages/LoginPage'

const login = new LoginPage()

describe('Login Tests', () => {

    it('Invalid Login', () => {

        login.visit()

        login.login('wrong_user', 'wrong_pass')

        login.errorMsg()
        .should('contain', 'Username and password do not match')
    })

    it('Valid Login', () => {

        login.visit()

        login.login('standard_user', 'secret_sauce')

        cy.url().should('include', '/inventory.html')

        cy.get('.title')
        .should('contain', 'Products')
    })

})