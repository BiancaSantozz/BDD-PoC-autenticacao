const { setWorldConstructor, Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');
const { autenticar } = require('../../src/auth');

class AutenticacaoWorld {
  constructor() {
    this.usuarios = [];
    this.resultado = null;
  }
}
setWorldConstructor(AutenticacaoWorld);

Given('que o sistema possui os seguintes usuários cadastrados:', function (tabela) {
  this.usuarios = tabela.hashes(); // [{ email, senha }, ...]
});

When('o usuário tenta se autenticar com e-mail {string} e senha {string}', function (email, senha) {
  this.resultado = autenticar({ email, senha }, this.usuarios);
});

Then('a autenticação deve ser aprovada', function () {
  assert.equal(this.resultado.sucesso, true);
});

Then('a autenticação deve ser recusada', function () {
  assert.equal(this.resultado.sucesso, false);
});

Then('a mensagem exibida deve ser {string}', function (esperada) {
  assert.equal(this.resultado.mensagem, esperada);
});

Then('a mensagem de erro deve ser {string}', function (esperada) {
  assert.equal(this.resultado.mensagem, esperada);
});