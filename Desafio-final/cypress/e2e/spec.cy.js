describe('Cenário 001 - Login ', () => {
  // beforeEach(() => {
  //   cy.clearAllCookies()
  // })

  it('testando funcionalidade de login com as informações corretas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').click().type('standard_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('login-button').click()
  })
})