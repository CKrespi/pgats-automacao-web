const AuthPage = require('../support/pages/AuthPage');

describe('TC03 - Login User with incorrect email and password', () => {
  it('should show an error message for invalid credentials', () => {
    AuthPage.visitLogin();
    AuthPage.login('incorreto@caue.com', 'wrongpass');
    AuthPage.verifyLoginError();
  });
});
