const { buildUser } = require('../support/utils');
const AuthPage = require('../support/pages/AuthPage');

describe('TC01 - Register User', () => {
  it('should register a new user successfully', () => {
    const user = buildUser('tc01');

    AuthPage.visitLogin();
    AuthPage.signup(user.name, user.email);
    AuthPage.fillAccountDetails(user);
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    AuthPage.verifyLoggedInUser(user.name);
    AuthPage.deleteAccount();
  });
});
