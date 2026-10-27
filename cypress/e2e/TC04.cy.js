const { buildUser } = require('../support/utils');

describe('TC04 - Logout User', () => {
  it('should logout an authenticated user', () => {
    const user = buildUser('tc04');

    cy.registerUser(user);
    cy.logoutUser();
    cy.contains('Login to your account').should('be.visible');
  });
});
