
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

// You’ve mocked external dependencies, which is a best practice in unit testing — showing you understand isolation and test reliability.