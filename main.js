const form = document.getElementById('form-contato'); // Obtém o elemento do formulário pelo ID
const tabelaContatos = document.getElementById('tabela-contatos'); // Obtém o elemento da tabela de contatos pelo ID
const contatos = []; // Array para armazenar os contatos cadastrados

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o comportamento padrão de envio do formulário

  const inputNome = document.getElementById('nome'); // Obtém o campo de entrada do nome
  const inputTelefone = document.getElementById('telefone'); // Obtém o campo de entrada do telefone
  const errorNome = document.querySelector('.error-nome'); // Obtém a mensagem de erro do nome
  const errorTelefone = document.querySelector('.error-telefone'); // Obtém a mensagem de erro do telefone

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

  adicionarContato(inputNome.value, inputTelefone.value); // Chamar a função para adicionar o contato

  inputNome.value = ''; // Limpar o campo de entrada do nome
  inputTelefone.value = ''; // Limpar o campo de entrada do telefone
  errorNome.style.display = 'none'; // Ocultar mensagem de erro do nome
  errorTelefone.style.display = 'none'; // Ocultar mensagem de erro do telefone
});

function adicionarContato(nome, telefone) {
  const novoContato = {
    nome: nome,
    telefone: telefone
  };

  contatos.push(novoContato); // Adicionar o novo contato ao array de contatos
  criarLinhaContato(novoContato); // Chamar a função para criar uma nova linha na tabela de contatos
}

function criarLinhaContato(contato) {
  const linha = document.createElement('tr'); // Criar um novo elemento <tr> para representar a linha
  const colunaNome = document.createElement('td'); // Criar um novo elemento <td> para representar a coluna do nome
  const colunaTelefone = document.createElement('td'); // Criar um novo elemento <td> para representar a coluna do telefone

  colunaNome.textContent = contato.nome; // Definir o texto do nome do contato na coluna do nome
  colunaTelefone.textContent = contato.telefone; // Definir o texto do telefone do contato na coluna do telefone

  linha.appendChild(colunaNome); // Adicionar a coluna do nome à linha
  linha.appendChild(colunaTelefone); // Adicionar a coluna do telefone à linha

  tabelaContatos.appendChild(linha); // Adicionar a linha à tabela de contatos
}
