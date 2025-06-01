describe('Gemini API test', () => {
    it('sends a sample prompt to Gemini API and validates response', () => {
      const apiUrl = Cypress.env('apiUrl');
      const apiKey = Cypress.env('apiKey');
  
      cy.request({
        method: 'POST',
        url: `${apiUrl}?key=${apiKey}`,
        body: {
          contents: [{ parts: [{ text: 'Tell me a joke' }] }]
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('candidates');
      });
    });
  });
  