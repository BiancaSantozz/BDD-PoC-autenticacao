# language: pt
@autenticacao
Funcionalidade: Autenticação de Usuários
  Como um cliente cadastrado no sistema
  Eu quero realizar login com meu e-mail e senha
  Para acessar a minha área restrita de forma segura

  Contexto: Base de usuários cadastrados no sistema
    Dado que o sistema possui os seguintes usuários cadastrados:
      | email           | senha          |
      | maria@email.com | SenhaSegura123 |
      | joao@email.com  | MinhaSenha987  |

  @login @sucesso
  Esquema do Cenário: Autenticação com credenciais válidas
    Quando o usuário tenta se autenticar com e-mail "<email>" e senha "<senha>"
    Então a autenticação deve ser aprovada
    E a mensagem exibida deve ser "<mensagem_esperada>"

    Exemplos:
      | email             | senha          | mensagem_esperada                 |
      | maria@email.com   | SenhaSegura123 | Bem-vindo(a), maria@email.com!    |
      | joao@email.com    | MinhaSenha987  | Bem-vindo(a), joao@email.com!     |
      | MARIA@email.com   | SenhaSegura123 | Bem-vindo(a), maria@email.com!    |
 
  @login @excecao
  Esquema do Cenário: Tentativas de login inválidas ou incompletas
    Quando o usuário tenta se autenticar com e-mail "<email>" e senha "<senha>"
    Então a autenticação deve ser recusada
    E a mensagem de erro deve ser "<mensagem_esperada>"

    Exemplos:
      | email           | senha          | mensagem_esperada                |
      | maria@email.com | SenhaIncorreta | Credenciais inválidas.           |
      | maria@email.com | senhasegura123 | Credenciais inválidas.           |
      | outro@email.com | SenhaSegura123 | Credenciais inválidas.           |
      |                 | SenhaSegura123 | E-mail e senha são obrigatórios. |
      | maria@email.com |                | E-mail e senha são obrigatórios. |

  @login @normalizacao
  Esquema do Cenário: E-mail com espaços nas bordas é normalizado
    Quando o usuário tenta se autenticar com e-mail "<email>" e senha "<senha>"
    Então a autenticação deve ser aprovada
    E a mensagem exibida deve ser "<mensagem_esperada>"

    Exemplos:
      | email            | senha          | mensagem_esperada                |
      |  joao@email.com  | MinhaSenha987  | Bem-vindo(a), joao@email.com!    |
      | maria@email.com  | SenhaSegura123 | Bem-vindo(a), maria@email.com!   |
      |  maria@email.com | SenhaSegura123 | Bem-vindo(a), maria@email.com!   |