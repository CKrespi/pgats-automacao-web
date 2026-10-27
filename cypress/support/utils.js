const buildUser = (prefix = 'qa') => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);

  return {
    firstName: 'Caue',
    lastName: 'Krespi',
    name: `${prefix} User ${timestamp}`,
    email: `${prefix}${timestamp}${random}@mail.com`,
    password: 'Senha123!',
    title: 'Mr.',
    company: 'QA Academy',
    address1: 'Rua das Automacoes, 123',
    city: 'Blumenau',
    state: 'SC',
    zipcode: '01000-000',
    mobile: '+5547999999999',
    country: 'Canada'
  };
};

const buildOrder = () => ({
  name: 'Test User',
  cardNumber: '4111111111111111',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2030'
});

module.exports = { buildUser, buildOrder };
