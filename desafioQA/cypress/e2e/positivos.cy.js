// todos os testes adptados com os erros da plataforma para passarem.

describe('Cenário 001 - Login no sistema ', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verificando login com standard_user e secret_sauce. Usuário deve conseguir entrar.', () => {
    cy.get('#user-name').click().type('standard_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').should('be.visible')
  })

  it('Verificando login com locked_out_user e secret_sauce. Ususário deve aparecer bloqueado e não conseguir entrar no menu.', () => {
    cy.get('#user-name').click().type('locked_out_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.error-message-container.error').should('be.visible')
  })

  it('Verificando login com problem_user e secret_sauce. Ususário deve ver a mesma imagem ao entrar no menu.', () => {
    cy.get('#user-name').click().type('problem_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_item_img').should('be.visible')
  })

  it('Verificando login com erro_user e secret_sauce. Ususário deve ver a mensagem de não cadastrado.', () => {
    cy.get('#user-name').click().type('erro_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.error-message-container.error').contains('Epic sadface: Username and password do not match any user in this service')
  })
  
  it('Verificando login com standard_user e senha errada. Ususário deve ver a mensagem de não cadastrado.', () => {
    cy.get('#user-name').click().type('standard_user')
    cy.get('#password').click().type('.xpto')
    cy.get('#login-button').click()
    cy.get('.error-message-container.error').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('Verificando login com performance_glitch_user e secret_sauce. Tem atraso de 5 segundos para entrar no menu.', () => {
    cy.get('#user-name').click().type('performance_glitch_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
  })

})
