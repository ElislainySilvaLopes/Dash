Feature: Cadastro de usuário

    Background:
        Given que realizo login com sucesso
        When  eu clico no botão “Adicionar”

   # Scenario: adicionar um usuário com sucesso
        #And preencho corretamente os campos Nome, E-mail, CPF, Telefone e Stack
        #And seleciono os Conhecimentos
        #And clico no botão “Salvar”
        #Then vejo a mensagem de usuário salvo com sucesso

    Scenario: adicionar um usuário sem sucesso(Email já existe)
        And preencho corretamente os campos Nome, CPF, Telefone e Stack
        And preencho o campo E-mail com um e-mail já existente
        And seleciono os Conhecimentos
        And clico no botão “Salvar”
        Then vejo a mensagem de erro que o usuário já existe 

    Scenario: adicionar um usuário sem sucesso(CPF já em uso)
        And preencho corretamente os campos Nome, E-mail, Telefone e Stack
        And preencho o campo CPF com um CPF já existente
        And seleciono os Conhecimentos
        And clico no botão “Salvar”
        Then vejo a mensagem de erro que o CPF já está em uso

    Scenario: adicionar um usuário sem sucesso(Não preencher um dos campos obrigatórios)
       And não preencho um dos campos Nome, E-mail, CPF, Telefone, Stack e conhecimento
       And clico no botão “Salvar”
       Then eu vejo a mensagem de erro "<ERRO>"

    Scenario: adicionar um usuário sem sucesso(Preencher os campos incorretamente)
       And  preencho incorretamente um dos campos Nome, E-mail, CPF e Telefone
       And  seleciono a stack e os Conhecimentos
       And  clico no botão “Salvar”
       Then eu vejo a mensagem informando <ERRO>

        


