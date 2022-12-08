Feature: Procurar Cúbico

    Background:
        Given que realizo login com sucesso

    Scenario: Procurar cúbico com sucesso
        When faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação
        Then retorna um usuário de acordo com a busca feita
        
    Scenario: Procurar cúbico sem sucesso
        When faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação que não existe
        Then a tabela não retorna nenhum usuário


