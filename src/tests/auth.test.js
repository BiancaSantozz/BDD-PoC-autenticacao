const test = require('node:test');
const assert = require('node:assert/strict');
const { autenticar, MENSAGENS } = require('../auth');

const usuarios = [{ email: 'maria@email.com', senha: 'SenhaSegura123' }];

test('ignora espaços nas bordas do e-mail', () => {
  const r = autenticar({ email: '  maria@email.com  ', senha: 'SenhaSegura123' }, usuarios);
  assert.equal(r.sucesso, true);
});

test('e-mail undefined é tratado como obrigatório', () => {
  const r = autenticar({ senha: 'x' }, usuarios);
  assert.equal(r.mensagem, MENSAGENS.OBRIGATORIOS);
});

test('senha diferencia maiúsculas de minúsculas', () => {
  const r = autenticar({ email: 'maria@email.com', senha: 'senhasegura123' }, usuarios);
  assert.equal(r.sucesso, false);
});