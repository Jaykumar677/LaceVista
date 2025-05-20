const sinon = require('sinon');
const { expect } = require('chai');

describe('resetInactivityTimeout Function', () => {
  let activityTimer;
  function resetInactivityTimeout() {
    if (activityTimer) clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
      console.log('Inactive timeout triggered');
    }, 5000);
  }

  it('should reset the timer correctly', () => {
    activityTimer = setTimeout(() => {}, 1000);
    resetInactivityTimeout();
    expect(activityTimer).to.have.property('_idleTimeout');

  });
});
