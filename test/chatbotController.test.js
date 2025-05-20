
const { expect } = require('chai');
const chatbotController = require('../controllers/chatbotcontroller');

describe('Chatbot Controller', () => {
  it('handleChat should be a function', () => {
    expect(chatbotController.handleChat).to.be.a('function');
  });
});
