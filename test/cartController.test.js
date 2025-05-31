
const { expect } = require('chai');
const cartController = require('../controllers/cartController');

describe('Cart Controller', () => {
  it('getCart should be a function', () => {
    expect(cartController.getCart).to.be.a('function');
  });
});

//  Ensured this function is defined (likely fetches a user's cart from the database).