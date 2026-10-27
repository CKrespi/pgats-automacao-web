const { buildUser } = require('../support/utils');
const AuthPage = require('../support/pages/AuthPage');

describe('TC05 - Register User with existing email', () => {
  it('should reject a duplicate signup email', () => {
    const user = buildUser('tc05');

    cy.registerUser(user);
    cy.contains('a', 'Logout').click();

    AuthPage.visitLogin();
    AuthPage.signup(user.name, user.email);
    AuthPage.verifyExistingEmailError();

    AuthPage.login(user.email, user.password);
    AuthPage.verifyLoggedInUser(user.name);
    AuthPage.deleteAccount();
  });
});
