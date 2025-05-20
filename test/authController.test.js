
const { expect } = require('chai');
const sinon = require('sinon');  
const authController = require('../controllers/authController');


describe('Auth Controller', () => {
  it('sendOtp should be a function', () => {
    expect(authController.sendOtp).to.be.a('function');
  });

  it('getLogin should render login view', () => {
    const req = {};
    const res = { render: sinon.spy() };
    authController.getLogin(req, res);
    expect(res.render.calledWith('login')).to.be.true;
  });

  it('getSignup should render signup view', () => {
    const req = {};
    const res = { render: sinon.spy() };
    authController.getSignup(req, res);
    expect(res.render.calledWith('signup')).to.be.true;
  });
});
