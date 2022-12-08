import { enterText, clickField } from "../helper/common.helper";


const loginPage = {
    FIELDS: {
      email: "[data-testid='inputEmail']",
      senha: "[data-testid='inputPassword']",
      procurar: "[data-testid='inputSearch']"
    },
    BUTTONS: {
      entrar: "[data-testid='btnEnter']",
      adicionar: "[data-testid=btnAdd]",
      excluir : "[data-testid=btnRemove]",
      salvar: "[data-testid=btnSave]",
      deletar: "[data-testid='btnConfirmRemove']",
      editar: "[data-testid=btnEdit]",
      cancelar: "[data-testid=btnCancelRemove]"
    },

    LINKS: {
      LINK_1: "",
    },
    SELECTS: {
      input: "input[type='checkbox']",
      select:"data-testid=ArrowDropDownIcon"
  },
    FUNCTIONS: {
        login: (person) => {
          cy.fixture("credentials").then(($fix) => {
            enterText(loginPage.FIELDS.email, $fix[person].email);
            enterText(loginPage.FIELDS.senha, $fix[person].senha);
          });
          clickField(loginPage.BUTTONS.entrar);
        },
      },
}


module.exports = loginPage;