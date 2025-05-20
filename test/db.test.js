
const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const connectDB = require('../config/db');

describe('Database Connection', () => {
  it('should call mongoose.connect', async () => {
    const connectStub = sinon.stub(mongoose, 'connect').resolves();
    await connectDB();
    expect(connectStub.calledOnce).to.be.true;
    connectStub.restore();
  });
});
