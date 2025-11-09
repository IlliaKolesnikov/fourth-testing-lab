describe('First Task Github', () => {
  it('passes', () => {
    cy.visit('https://suninjuly.github.io/math.html')

    let x = cy.get('#input_value').invoke('text').then(textValue => {
    let result = Math.log(Math.abs(12 * Math.sin(textValue)))
    cy.log(result);
    cy.get('#answer').type(result);
    cy.get('#robotCheckbox').check();
    cy.get('#robotsRule').check();
    cy.contains('Submit').click();
    });

  })
})

describe('Second Task Demostore', () => {
  it('passes', () => {
    cy.visit('https://demostore.website/index.php')
    cy.contains('Sign in').click();
    cy.contains('No account? Create one here').click();

    cy.get('#field-id_gender-1').check();
    cy.get('#field-firstname').type('Test');
    cy.get('#field-lastname').type('User');
    cy.get('#field-email').type('1234@gmail.com');
    cy.get('#field-password').type('GoodPassword123?');
    cy.get('input[name="psgdpr"]').check();
    cy.get('input[name="customer_privacy"]').check();
    cy.contains('Save').click();
    cy.contains('Mug 2').click();
    cy.contains('Add to cart').click();
    cy.contains('Proceed to checkout').click();
  })
})