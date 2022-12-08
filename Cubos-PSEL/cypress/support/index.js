import "cypress-cucumber-attach-screenshots-to-failed-steps"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'data-testid'
  ]
})