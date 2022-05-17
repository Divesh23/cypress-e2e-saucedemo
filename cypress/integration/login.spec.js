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

  it('Entering a username and no password should return an error', () => {
    cy.get("[placeholder='Password']")
      .type("standard_user")
    cy.get("[data-test='login-button']")
      .click()
    cy.get("[data-test='error']")
      .contains('Epic sadface: Username is required')
      .should('be.visible')
  })

  it('Entering a password and no username should return an error', () => {
    cy.get("[placeholder='Password']")
      .type("standard_user")
    cy.get("[data-test='login-button']")
      .click()
    cy.get("[data-test='error']")
      .contains('Epic sadface: Username is required')
      .should('be.visible')
  })

  it('Entering a wrong password should return an error', () => {
    cy.get("[placeholder='Username']")
      .type("standard_user")
    cy.get("[placeholder='Password']")
      .type("dummy_password")
    cy.get("[data-test='login-button']")
      .click()
    cy.get("[data-test='error']")
      .contains('Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('Entering a wrong username should return an error', () => {
    cy.get("[placeholder='Username']")
      .type("dummy_user")
    cy.get("[placeholder='Password']")
      .type("secret_sauce")
    cy.get("[data-test='login-button']")
      .click()
    cy.get("[data-test='error']")
      .contains('Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('Entering valid login credentials should take user to Products', () => {
    cy.get("[placeholder='Username']")
      .type("standard_user")
    cy.get("[placeholder='Password']")
      .type("secret_sauce")
    cy.get("[data-test='login-button']")
      .click()
    cy.contains('.title','Products')
      .should('be.visible')
  })

}) 