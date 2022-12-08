Feature: Login site PSEL QA

   Background:
      Given que estou na página de login

   #Scenario: Fazer Login com sucesso
      #When eu preencho os campos de email e senha corretamente
      #And  clico no botão "ENTRAR"
      #Then sou direcionado para a página inicial

   Scenario: fazer login sem sucesso(preencher incorretamente os campos email e senha)
      When preencho incorretamente os campos E-mail e Senha
      And  clico no botão "ENTRAR"
      Then vejo a mensagem de erro de email ou senha inválidos

   Scenario: fazer login sem preencher o campo de E-mail
      When eu nao preencho o campo de email e preencho o campo de senha corretamente
      And  clico no botão "ENTRAR"
      Then vejo a mensagem de erro pra informar email

   Scenario: fazer login sem preencher o campo de Senha
      When eu preencho o campo de E-mail corretamente e não preencho o campo de senha
      And  clico no botão "ENTRAR"
      Then vejo a mensagem de erro pra informar a senha
  
   Scenario: preencher o campo de E-mail com e-mail inválido
      When eu preencho o campo de E-mail com e-mail inválido
      And  clico no botão "ENTRAR"
      Then vejo a mensagem de erro para informar um email válido

    
     
