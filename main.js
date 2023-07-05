const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');
const contatos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');
  const errorNome = document.querySelector('.error-nome');
  const errorTelefone = document.querySelector('.error-telefone');

  // Verificar se o campo nome contém apenas letras
  if (!inputNome.validity.valid) {
    errorNome.style.display = 'block'; // Exibir mensagem de erro do nome
    errorTelefone.style.display = 'none'; // Ocultar mensagem de erro do telefone
    return;
  }

  // Verificar se o campo telefone contém apenas números
  if (!inputTelefone.validity.valid) {
    errorNome.style.display = 'none'; // Ocultar mensagem de erro do nome
    errorTelefone.style.display = 'block'; // Exibir mensagem de erro do telefone
    return;
  }

  adicionarContato(inputNome.value, inputTelefone.value);

  inputNome.value = '';
  inputTelefone.value = '';
  errorNome.style.display = 'none';
  errorTelefone.style.display = 'none';
});

function adicionarContato(nome, telefone) {
  const novoContato = {
    nome: nome,
    telefone: telefone
  };

  contatos.push(novoContato);
  criarLinhaContato(novoContato);
}

function criarLinhaContato(contato) {
  const linha = document.createElement('tr');
  const colunaNome = document.createElement('td');
  const colunaTelefone = document.createElement('td');

  colunaNome.textContent = contato.nome;
  colunaTelefone.textContent = contato.telefone;

  linha.appendChild(colunaNome);
  linha.appendChild(colunaTelefone);

  tabelaContatos.appendChild(linha);
}