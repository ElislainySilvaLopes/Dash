https://dev-site.qa-assessment.cubos.dev/dashboard 

"email": "admin@cubos.io", 

"password": "@cubos123" 

 
 

O que falta: 

Botão de “Sair”; 

Botão de fechar modal de cadastro; 

Campo de telefone está dando erro quando não é preenchido. 

Não está fazendo busca por data de criação. 
 
 

FLUXO DE LOGIN 

 

DADO que estou na página de Login 

 

Cenário 01: fazer login com sucesso 

QUANDO eu preencho os campos de email e senha corretamente 

E clico no botão ENTRAR 

ENTÃO sou direcionada para a página inicial do Cubos Dash 

 
 

Cenário 02: fazer login sem sucesso 

QUANDO preencho incorretamente os campos E-mail e Senha 

E clico no botão ENTRAR 

ENTÃO vejo a mensagem de erro 
 

Cenário 03: fazer login sem preencher o campo de E-mail 

QUANDO eu não preencho o campo de email e preencho o campo de senha corretamente 

E clico no botão ENTRAR 

ENTÃO vejo a mensagem de erro para informar email 

 

Cenário 04: fazer login sem preencher o campo de Senha 

QUANDO eu preencho o campo de E-mail corretamente e preencho o campo de senha incorretamente 

E clico no botão ENTRAR 

ENTÃO eu vejo a mensagem de erro para informar a senha 

 

Cenário 05: preencher o campo de E-mail com e-mail inválido 

QUANDO eu preencho o campo de E-mail com e-mail inválido 

ENTÃO eu vejo a mensagem de erro para informar um e-mail válido 

 

FLUXO DE ADICIONAR UM USUÁRIO  

 

DADO que realizo login com sucesso 

QUANDO eu clico no botão “Adicionar” 

 

Cenário 01: adicionar um usuário com sucesso 

E preencho corretamente os campos Nome, E-mail, CPF, Telefone e Stack 

E seleciono os Conhecimentos 

E clico no botão “Salvar” 

ENTÃO eu vejo a mensagem de sucesso 

 

Cenário 02: adicionar um usuário sem sucesso(Email já existe) 

E preencho corretamente os campos Nome, CPF, Telefone e Stack 

E preencho o campo Email com um e email já existente 

E seleciono os Conhecimentos 

E clico no botão “Salvar” 

ENTÃO vejo a mensagem de erro que o usuário já existe 

 

Cenário 03: adicionar um usuário sem sucesso(CP já existe) 

E preencho corretamente os campos Nome, E-mail, Telefone e Stack 

E preencho o campo Cpf com um e Cpf já existente 

E seleciono os Conhecimentos 

E clico no botão “Salvar” 

ENTÃO vejo a mensagem de erro que oCPF já está em uso 

 

Cenário 04: adicionar um usuário sem sucesso(Não preencher um dos campos) 

E não preencho um dos campos Nome, E-mail, CPF, Telefone, Stack e conhecimento 

E seleciono os Conhecimentos 

E clico no botão “Salvar” 

ENTÃO eu vejo a mensagem de erro <ERRO> 

 

<ERRO> 

O campo nome é obrigatório 

O campo e-mail é obrigatório 

Informe um CPF válido 

O campo Telefone é obrigatório 

O campo Stack é obrigatório 

Selecione pelo menos um conhecimento 

 

Cenário 05: adicionar um usuário sem sucesso(Preencher os campos incorretamente) 

E preencho incorretamente um dos campos Nome, E-mail e CPF 

E seleciono a stack e os Conhecimentos 

E clico no botão “Salvar” 

ENTÃO eu vejo a mensagem de erro <ERRO> 

 
<ERRO> 

Informe um sobrenome 

Informe um Email válido 

Informe um CPF válido 
 

FLUXO DE DELETAR CÚBICO 

 

DADO   que realizo login com sucesso 

QUANDO eu clico no botão de Remover Cúbico 

 

Cenário 01: Deletar cúbico com sucesso 

E abre um modal de exclusão 

E clico no botão “Deletar” 

ENTÃO o cúbico é deletado 
 

Cenário 02: Cancelar deleção de cúbico 

E abre um modal de exclusão 

E clico no botão “Cancelar” 

ENTÃO o modal é fechado 
 

FLUXO DE EDITAR CÚBICO 

 

DADO   que realizo login com sucesso 

QUANDO eu clico no botão Editar 

 

Cenário 01: Editar cúbico com sucesso 

E edito um dos campos Nome, Email, CPF, Telefone, Stack e Conhecimento 

E clico no botão salvar 

ENTÃO vejo a mensagem de sucesso de usuário salvo com sucesso! 

 

FLUXO DE PROCURAR CÚBICO 

 

DADO   que realizo login com sucesso 

 

Cenário 01: Procurar cúbico com sucesso 

QUANDO faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação 

ENTÃO retorna um usuário de acordo com a busca feita 
 

Cenário 02: Procurar cúbico sem sucesso 

QUANDO faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação que não existe 

ENTÃO a tabela não retorna nenhum usuário 

 
 