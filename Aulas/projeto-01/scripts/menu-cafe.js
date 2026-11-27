const DESCONTO_CARTAO = 5;

const menu = [
  {
    codigo: 1,
    nome: "Cafe Expresso",
    preco: 50,
  },
  {
    codigo: 2,
    nome: "Chá",
    preco: 80,
  },
  {
    codigo: 3,
    nome: "Capuccino",
    preco: 120,
  },
  {
    codigo: 4,
    nome: "Latte",
    preco: 150,
  },
];

function procurarProduto(menu, codigo) {
  // funcao find procura na array um elemento que satisfaça a condição
  return menu.find((item) => item.codigo === codigo);
}
function textoMenu() {
  // funcao map do array serve para percorer o array inteiro
  const opcoes = menu.map((item) => `${item.codigo}${item.nome}${item.preco}`);
  return `Escolha um produto digitando o codigo :\n${opcoes.join("\n")}
    ou digite 0 para terminar o pedido`;
}
function pedirQuantidade(produto) {
  let quantidade = 0;
  do {
    const resposta = prompt(`Insira Quantidade do ${produto.nome}:`);
    if (resposta == 0 || resposta === null) {
      return 0;
    }
    quantidade = Number(resposta);
  } while (isNaN(quantidade) || quantidade < 1);
  return quantidade;
}
function acrescentarAoPedido(pedido, produto, quantidade) {
  const itemPedido = pedido.find((item) => item.codigo === produto.codigo);
  if (!itemPedido) {
    pedido.push({
      codigo: produto.codigo,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: quantidade,
    });
  } else {
    itemPedido.quantidade += quantidade;
    // Atualizar a lista de pedidos
    //splice substitui um ou mais elementos de um array
    //indexOf procura o indice (posição) do elemento dentro de uma array
    pedido.splice(pedido.index(itemPedido), 1, itemPedido);
  }
}
function calcularTotal(pedido) {
  let total = 0;
  for (let i = 0; i < pedido.length; i++) {
    total += pedido[i].preco * pedido[i].quantidade;
  }
  return total;
}
function mostrarTalao(pedido, desconto) {
  console.log("===Café Morabeza====");

  for (const itemPedido of pedido) {
    console.log(`${itemPedido.nome} \n\t 
            ${itemPedido.quantidade} x ${itemPedido.preco}
            \t\t${itemPedido.preco * itemPedido.quantidade}ECV`);
  }
  let subtotal = calcularTotal(pedido);
  console.log(`Subtotal:${subtotal}ECV`);
  if (desconto > 0) {
    const totalAPagar = (subtotal -= subtotal * (desconto / 100));
    console.log(`Desconto:${desconto}`);
    console.log(`Total a pagar:${totalAPagar}ECV`);
  }
}
const pedido = [];
let codigo = prompt(textoMenu());
while (codigo != "0" && codigo != null) {
  const produto = procurarProduto(menu, Number(codigo));

  if (!produto) {
    console.log(
      `O produto como o codigo ${codigo} nao existe! Insira um novo codigo valido!!`,
    );
  } else {
    const quantidade = pedirQuantidade(produto);
    if (quantidade > 0) {
      acrescentarAoPedido(pedido, produto, quantidade);
    }
  }
  codigo = prompt(textoMenu());
}
if (pedido.length === 0) {
  console.log("Nenhum pedido registrado!Nada a pagar.");
} else {
  let cartao = Number(
    prompt(
      `Deseja aplicar desconto do cartao? \n 1-Sim \n 2-Nao\n Insira o codigo:`,
    ),
  );

  if (!isNaN(cartao) && cartao === 1) {
    mostrarTalao(pedido, DESCONTO_CARTAO);
  } else {
    mostrarTalao(pedido, 0);
  }
}
