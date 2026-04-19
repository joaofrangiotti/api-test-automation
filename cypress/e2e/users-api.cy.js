describe('API REST - Users (Reqres)', () => {
  it('GET /users?page=2 deve listar dados com status 200', () => {
    cy.request({
      method: 'GET',
      url: '/users?page=2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
      expect(response.body.data[0]).to.have.property('id');
      expect(response.body.data[0]).to.have.property('email');
    });
  });

  it('POST /users deve criar dados com status 201', () => {
    cy.request({
      method: 'POST',
      url: '/users',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        name: 'Joao Cypress',
        job: 'QA Automation'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Joao Cypress');
      expect(response.body).to.have.property('job', 'QA Automation');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
