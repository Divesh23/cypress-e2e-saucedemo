describe('Login Tests',() => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Clicking login should not redirect to another page', () => { 
    cy.get("[data-test='login-button']")
      .click()
    cy.url()
      .should('eq', 'https://www.saucedemo.com/')
  })

  it('Clicking login should throw an error', () => { 
    cy.get("[data-test='login-button']")
      .click()
    cy.get("[data-test='error']")
      .contains('Epic sadface: Username is required')
      .should('be.visible')
  })

}) 