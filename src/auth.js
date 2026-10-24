'use strict';

const MENSAGENS = Object.freeze({
  OBRIGATORIOS: 'E-mail e senha são obrigatórios.',
  INVALIDAS: 'Credenciais inválidas.',
});

function autenticar({ email, senha }, usuarios) {
  const emailNormalizado = (email ?? '').trim().toLowerCase();

  if (!emailNormalizado || !senha) {
    return { sucesso: false, mensagem: MENSAGENS.OBRIGATORIOS };
  }

  const usuario = usuarios.find(
    (u) => u.email.toLowerCase() === emailNormalizado
  );

  // Mensagem única para "usuário inexistente" e "senha errada":
  // evita revelar quais e-mails estão cadastrados (enumeração de usuários).
  if (!usuario || usuario.senha !== senha) {
    return { sucesso: false, mensagem: MENSAGENS.INVALIDAS };
  }

  return { sucesso: true, mensagem: `Bem-vindo(a), ${usuario.email}!` };
}

module.exports = { autenticar, MENSAGENS };