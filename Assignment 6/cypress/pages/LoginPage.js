class LoginPage {

    username() {
        return cy.get('#user-name')
    }

    password() {
        return cy.get('#password')
    }

    loginBtn() {
        return cy.get('#login-button')
    }

    errorMsg() {
        return cy.get('[data-test="error"]')
    }

    visit() {
        cy.visit('/')
    }

    login(user, pass) {
        this.username().type(user)
        this.password().type(pass)
        this.loginBtn().click()
    }
}

export default LoginPage