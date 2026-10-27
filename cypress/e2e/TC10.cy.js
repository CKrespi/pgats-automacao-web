const { buildUser } = require('../support/utils');
const HomePage = require('../support/pages/HomePage');

describe('TC10 - Verify Subscription in home page', () => {
  it('should successfully subscribe with a valid email', () => {
    const user = buildUser('tc10');

    HomePage.visitHome();
    cy.scrollTo('bottom');
    HomePage.subscribe(user.email);
    HomePage.verifySubscriptionSuccess();
  });
});
