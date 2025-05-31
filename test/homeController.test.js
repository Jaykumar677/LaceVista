const { expect } = require('chai');
const sinon = require('sinon');
const homeController = require('../controllers/homeController');

describe('Home Controller', () => {
  it('should render home page', () => {
    const req = {};
    const res = { render: sinon.spy() };
    homeController.getHome(req, res);
    expect(res.render.calledWith('home')).to.be.true;
  });
});
