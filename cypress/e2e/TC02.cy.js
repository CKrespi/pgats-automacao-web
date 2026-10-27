const { buildUser } = require('../support/utils');
const AuthPage = require('../support/pages/AuthPage');

describe('TC02 - Login User with correct email and password', () => {
  it('should login successfully with a valid account', () => {
    const user = buildUser('tc02');

    AuthPage.visitLogin();
    AuthPage.signup(user.name, user.email);
    AuthPage.fillAccountDetails(user);
    cy.get('[data-qa="continue-button"]').click();
    cy.contains('a', 'Logout').click();

    AuthPage.visitLogin();
    AuthPage.login(user.email, user.password);
    AuthPage.verifyLoggedInUser(user.name);
    AuthPage.deleteAccount();
  });
});
