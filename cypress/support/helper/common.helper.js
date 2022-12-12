/// <reference types="Cypress" />

const helper = {
  enterText: (field, text) => {
    cy.get(field).type(text).should("have.value", text)
  },
  clearText: (field, text) => {
    cy.get(field).clear(text)
  },
  clickInput: (field) => {
    cy.get(field).click()
  },
  clickField: (field) => {
    cy.get(field).click({ force: true })
  },
  clickButton: (field, position) => {
    cy.get(field).eq(position).click()
  },
  checkUrl: (includes, route) => {
    cy.url().should(includes, route)
  },
  checkText:(field, position) => {
    cy.get(field).eq(position).check()
  },
  uncheckText:(field, position) => {
    cy.get(field).eq(position).uncheck()
  },
  checkTextVisible: (text) => {
    cy.contains(text).should("be.visible")
  },

  checkNotification: (text) => {
    cy.get(".ant-notification-notice-message").should("have.text", text)
  },
  checkMsg: (field, msg) => {
    cy.get(field).contains(msg);
  },
  sleep: (time = 500) => cy.wait(time)
}

export default helper
