import { Given } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pageobjects/login.page'
import { checkUrl} from '../../helper/common.helper'

Given(/^que estou na página de login$/, () => {
    cy.visit("");
})

Given(/^que realizo login com sucesso$/, () => {
    cy.visit("");
    loginPage.FUNCTIONS.login("Cubos");
    checkUrl("include", "/dashboard");
})