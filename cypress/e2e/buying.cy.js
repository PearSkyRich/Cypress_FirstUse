describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.wait(1000)

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart')

    cy.get('#checkout').click()

    cy.get('#first-name').type('Mai')
    cy.get('#last-name').type("Trần Thị")
    cy.get('#postal-code').type('700000')

    cy.get('#continue').click()

    cy.get('#finish').click()

    cy.get('#back-to-products').click()
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
  })
})