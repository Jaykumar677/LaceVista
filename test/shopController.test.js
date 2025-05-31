const { expect } = require('chai');
const shopController = require('../controllers/shopController');

describe('Shop Controller', () => {
  it('should define getAllProducts function', () => {
    expect(shopController.getAllProducts).to.be.a('function');
  });
});
