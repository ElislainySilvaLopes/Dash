import loginPage from '../../pageobjects/login.page'
import cadastroPage from '../../pageobjects/cadastro.page'
import { And } from 'cypress-cucumber-preprocessor/steps'
import { clickField, clickInput, enterText, checkUrl, checkTextVisible, clearText,  checkText,  clickButton, uncheckText } from '../../helper/common.helper'


And(/^clico no botão "ENTRAR"$/, () => {
    clickField(loginPage.BUTTONS.entrar);
  })

And (/^preencho corretamente os campos Nome, E-mail, CPF, Telefone e Stack$/, () => {
    enterText(cadastroPage.FIELDS.nome, "TESTE TESTE");
    enterText(cadastroPage.FIELDS.email, "teste.teste@email.com");
    enterText(cadastroPage.FIELDS.cpf, "051.307.476-74");
    enterText(cadastroPage.FIELDS.telefone, "(33) 33333-3333");
    clickInput(cadastroPage.FIELDS.stack)
    clickInput(cadastroPage.SELECTS.backend)
})
And (/^preencho corretamente os campos Nome, CPF, Telefone e Stack$/, () => {
  enterText(cadastroPage.FIELDS.nome, "TESTE TESTE");
  enterText(cadastroPage.FIELDS.cpf, "051.307.476-74");
  enterText(cadastroPage.FIELDS.telefone, "(33) 33333-3333");
  clickInput(cadastroPage.FIELDS.stack)
  clickInput(cadastroPage.SELECTS.backend)
})
And(/^preencho o campo E-mail com um e-mail já existente$/, ()=> {
  enterText(cadastroPage.FIELDS.email, "teste.teste@email.com");
})
And (/^preencho corretamente os campos Nome, E-mail, Telefone e Stack$/, () => {
  enterText(cadastroPage.FIELDS.nome, "TESTE TESTE");
  enterText(cadastroPage.FIELDS.email, "teste.teste1@email.com");
  enterText(cadastroPage.FIELDS.telefone, "(33) 33333-3333");
  clickInput(cadastroPage.FIELDS.stack)
  clickInput(cadastroPage.SELECTS.backend)
})

And(/^preencho o campo CPF com um CPF já existente$/, ()=> {
  enterText(cadastroPage.FIELDS.cpf, "051.307.476-74");
})

And(/^seleciono os Conhecimentos$/, ()=> {
  checkText(cadastroPage.FIELDS.checkbox, '3')
  checkTextVisible("React");
})

And(/^clico no botão “Salvar”$/, () => {
  clickField(loginPage.BUTTONS.salvar);
  checkTextVisible("SALVAR");
})

And (/^não preencho um dos campos Nome, E-mail, CPF, Telefone, Stack e conhecimento$/, () => {
  enterText(cadastroPage.FIELDS.nome, "TESTE TESTE");
  enterText(cadastroPage.FIELDS.email, "teste.teste@email.com");
  enterText(cadastroPage.FIELDS.cpf, "114.219.436-11");
  enterText(cadastroPage.FIELDS.telefone, "(33) 33333-3333");
  clickInput(cadastroPage.FIELDS.stack)
  clickInput(cadastroPage.SELECTS.mobile)
  //checkText(cadastroPage.FIELDS.checkbox, '3')
  //checkTextVisible("React");
})

And (/^preencho incorretamente um dos campos Nome, E-mail, CPF e Telefone$/, () => {
  enterText(cadastroPage.FIELDS.nome, "TESTE");
  enterText(cadastroPage.FIELDS.email, "teste.teste@email.com");
  enterText(cadastroPage.FIELDS.cpf, "000.000.000-00");
  enterText(cadastroPage.FIELDS.telefone, "(33) 33333-3333");
})

And(/^seleciono a stack e os Conhecimentos$/, () => {
  clickInput(cadastroPage.FIELDS.stack)
  clickInput(cadastroPage.SELECTS.mobile)
  checkText(cadastroPage.FIELDS.checkbox, '3')
})

And(/^abre um modal de exclusão$/, () => {
  checkTextVisible("Deletar Cúbico");
})

And(/^clico no botão “Deletar”$/, () => {
  clickButton(loginPage.BUTTONS.deletar, '0')
  checkUrl("include", "/dashboard");
})

And(/^clico no botão “Cancelar”$/, () => {
  clickButton(loginPage.BUTTONS.cancelar, '0')
  checkUrl("include", "/dashboard");
})

And(/^edito um dos campos Nome, Email, CPF, Telefone, Stack e Conhecimento$/, () => {
  clearText(cadastroPage.FIELDS.nome);
  enterText(cadastroPage.FIELDS.nome, "Teste Cubos");
  clearText(cadastroPage.FIELDS.email);
  enterText(cadastroPage.FIELDS.email, "teste.cubos@gmail.com");
  clearText(cadastroPage.FIELDS.cpf);
  enterText(cadastroPage.FIELDS.cpf, "557.184.340-34");
  clearText(cadastroPage.FIELDS.telefone);
  enterText(cadastroPage.FIELDS.telefone, "(44) 44444-4444");
  clickInput(cadastroPage.FIELDS.stack);
  clickInput(cadastroPage.SELECTS.QA);
  uncheckText(cadastroPage.FIELDS.checkbox, '0');
  checkText(cadastroPage.FIELDS.checkbox, '10');
  checkText(cadastroPage.FIELDS.checkbox, '12');
})




