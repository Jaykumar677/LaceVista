
const { expect } = require('chai');
const sinon = require('sinon');  
const authController = require('../controllers/authController');


describe('Auth Controller', () => {
  it('sendOtp should be a function', () => {
    expect(authController.sendOtp).to.be.a('function');
  });
  // Checked that this function exists (used for user verification).

  it('getLogin should render login view', () => {
    const req = {};
    const res = { render: sinon.spy() };
    authController.getLogin(req, res);
    expect(res.render.calledWith('login')).to.be.true;
  });
// Verified that these correctly render their respective views (login, signup).

  it('getSignup should render signup view', () => {
    const req = {};
    const res = { render: sinon.spy() };
    authController.getSignup(req, res);
    expect(res.render.calledWith('signup')).to.be.true;
  });
});
