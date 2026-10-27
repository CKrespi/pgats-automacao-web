class HomePage {
  visitHome() {
    cy.visit('/');
  }

  subscribe(email) {
    cy.get('#susbscribe_email').clear().type(email);
    cy.get('button#subscribe').click();
  }

  verifySubscriptionSuccess() {
    cy.contains('You have been successfully subscribed!').should('be.visible');
  }
}

module.exports = new HomePage();
