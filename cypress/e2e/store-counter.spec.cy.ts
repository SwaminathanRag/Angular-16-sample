describe('My e2e Test for Angular Sample Second', () => {
    it('Test - Store Counter - Increment', ()  => {
      cy.visit('/');
      //increment by 2
      cy.get('.btn-success').first().click();
      cy.get('.col-md-6').first().contains('This is counter value: 2')
    });
    it('Test - Store Counter - Decrement', ()  => {
      cy.visit('/');
      //decrement by 2
      cy.get('.btn-warning').first().click();
      cy.get('.col-md-6').first().contains('This is counter value: -2')
    });
    it('Test - Store Counter - Save and Load Store', ()  => {
      cy.visit('/');
      //increment by 2
      cy.get('.btn-success').first().click();
      cy.get('.col-md-6').first().contains('This is counter value: 2')
      //save to store
      cy.get('.btn-success').eq(1).click();
      //decrement by 2 in screen
      cy.get('.btn-warning').first().click();
      cy.get('.col-md-6').first().contains('This is counter value: 0')
      //Load from store to reset latest screen value
      cy.get('.btn-warning').eq(1).click();
      cy.get('.col-md-6').first().contains('This is counter value: 2')
    });
  })
  