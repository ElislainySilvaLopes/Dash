const cadastroPage = {
    FIELDS: {
        email: "[data-testid='inputEmail']",
        nome: "[data-testid= 'inputName']",
        cpf: "[data-testid= 'inputCPF']",
        telefone: "[data-testid= 'inputPhone']",
        checkbox: "input[type='checkbox']",
        stack: "[data-testid=selectStack]"

    } ,
    SELECTS: {
        backend: "[data-testid=selectStack-0]",
        frontend: "[data-testid=selectStack-1]",
        productDesign: "[data-testid=selectStack-2]",
        QA: "[data-testid=selectStack-3]",
        devOps: "[data-testid=selectStack-4]",
        mobile: "[data-testid=selectStack-5]"
    }  
}

module.exports = cadastroPage;