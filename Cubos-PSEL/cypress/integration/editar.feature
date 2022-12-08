Feature: Editar Cúbico
    
    Background:
        Given que realizo login com sucesso
        When  eu clico no botão Editar


    Scenario: Editar cúbico com sucesso
        And  edito um dos campos Nome, Email, CPF, Telefone, Stack e Conhecimento
        And  clico no botão “Salvar”
        Then vejo a mensagem de usuário salvo com sucesso



