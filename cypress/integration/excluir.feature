Feature: Deletar Cúbico

    Background:
        Given que realizo login com sucesso
        When  eu clico no botão “Excluir”

    #Scenario: Deletar cúbico com sucesso
        #And  abre um modal de exclusão
        #And  clico no botão “Deletar”
        #Then o cúbico é deletado

    Scenario: Cancelar deleção de cúbico
        And  abre um modal de exclusão
        And  clico no botão “Cancelar”
        Then o modal é fechado


