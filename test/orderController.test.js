const { expect } = require('chai');
const orderController = require('../controllers/orderController');

describe('Order Controller', () => {
  it('should define placeOrder function', () => {
    expect(orderController.placeOrder).to.be.a('function');
  });

  it('should define listOrders function', () => {
    expect(orderController.listOrders).to.be.a('function');
  });
});
