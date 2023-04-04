describe('Login Scenarios', () => {
  it('Input Valid Login credentials', () => {
    cy.visit('http://wave-trial.getbynder.com/')
    cy.get('input[name="username"]').type('qa-assignment')
    cy.get('input[name="password"]').type('qa-Bynder2023!')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq','https://wave-trial.getbynder.com/account/dashboard/')
    cy.get('.profile').click()
    cy.get('form > .action-btn').click()
    //cy.get('#login > div.update.info > div.notification > h1').invoke('show').should('be.visible')
    cy.get('.cbox_messagebox').should('be.visible')
    cy.url().should('eq','https://wave-trial.getbynder.com/login/')
    cy.get('input[name="username"]').type('test1')
    cy.get('input[name="password"]').type('testPass')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq','https://wave-trial.getbynder.com/login')
    cy.get('.cbox_messagebox').should('be.visible').should('include.text', 'You have entered an incorrect username or password.')
   
  })

  xit('Input invalid Login credentials and verify error', () => {
    cy.visit('http://wave-trial.getbynder.com/')
    cy.get('input[name="username"]').type('test1')
    cy.get('input[name="password"]').type('testPass')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq','https://wave-trial.getbynder.com/login')
    cy.get('.cbox_messagebox').should('be.visible').should('include.text', 'You have entered an incorrect username or password.')
    //cy.get('.notification > h1').should('be.visible').should('include.text', 'You have entered an incorrect username or password.')
  })

})