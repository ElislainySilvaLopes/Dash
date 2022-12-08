import loginPage from '../../pageobjects/login.page'
import { When } from 'cypress-cucumber-preprocessor/steps'
import { enterText, clickField, checkUrl,  clickButton} from '../../helper/common.helper'
import credentials from '../../../fixtures/Credentials.json'



When(/^eu preencho os campos de email e senha corretamente$/, () => {
    loginPage.FUNCTIONS.login("Cubos");
  })
  
When(/^preencho incorretamente os campos E-mail e Senha$/, () => {
    loginPage.FUNCTIONS.login("fakeEmail");
})

when(/^eu nao preencho o campo de email e preencho o campo de senha corretamente$/, () => {
    enterText("[data-testid='inputPassword']", "Cubos1234!");
})

when(/^eu preencho o campo de E-mail corretamente e não preencho o campo de senha$/, () => {
    enterText("[data-testid='inputEmail']", "admin@cubos.io");
})
When(/^eu preencho o campo de E-mail com e-mail inválido$/, () => {
    loginPage.FUNCTIONS.login("invalidEmail");
})

When(/^eu clico no botão “Adicionar”$/, () => {
    clickField(loginPage.BUTTONS.adicionar);
    checkUrl("include", "/dashboard");
})

When(/^eu clico no botão “Excluir”$/, () => {
    clickField(loginPage.BUTTONS.excluir);
})

When(/^faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação$/, () => {
  enterText(loginPage.FIELDS.procurar, credentials.DADOS['n2'])  
  })

When(/^faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação que não existe$/, () => {
    enterText(loginPage.FIELDS.procurar, credentials.DADOS2['N1'])  
    })

When(/^eu clico no botão Editar$/, () => {
    clickButton(loginPage.BUTTONS.editar, '0')
    checkUrl("include", "/dashboard");
})