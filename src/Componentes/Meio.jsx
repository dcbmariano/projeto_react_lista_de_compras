import React, { useState } from 'react';

const Meio = ()=>{
  // componente que preenche a parte centra do App

  // define a lista de produtos
  const [produtos, setProdutos ] = useState([
    // { id:0, nome:"Nome do produto" },
  ]);

  const deletaProduto = (e)=>{
    // função que remove um item da lista
    const novosProdutos = produtos.filter(i => i.id != e.target.id);
    setProdutos(novosProdutos);
  }

  const handleEnter = (e)=>{
    // função ativa quando uma tecla for pressionada

    if(e.key === 'Enter'){
      // se a tecla pressionada for Enter
      let produto = document.getElementById('produto');
      let autoIncremento = 0;
      try {
        // tenta pegar o último ID da lista de produtos
        autoIncremento = produtos[produtos.length-1].id + 1
      }
      catch(e) {
        // se falhar, define que o ID atual é o 1
        autoIncremento = 1;
      }

      // cria um objeto para o novo produto
      const novoProduto = {
        nome: produto.value,
        id: autoIncremento
      }

      // cria uma nova lista de produtos
      const novosProdutos = [...produtos, novoProduto]

      // atualiza a lista de produtos
      setProdutos(novosProdutos);

      // apaga a caixa de inserção de produtos
      produto.value = '';
    }
  }

  return (
    <main className='my-5'>
      <div className="container">
        {/* Caixa de texto para inserção de produtos */}
        <input 
          id='produto'
          type="text" 
          className='form-control' 
          placeholder='Inserir produto na lista de compras'
          onKeyDown={handleEnter}  // Ativa ao pressionar Enter  
        />
        {/* Exibe a lista de produtos como uma tabela */}
        <table className='table table-hover table-striped my-4'>
          <thead>
            <tr>
              <th>Produto</th>
              <th className='text-end'>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderização condicional */}
            { produtos.length > 0
              ? // se houver itens na lista, então imprima-os
                produtos.map(
                (i)=>
                  <tr key={i.id}>
                    <td>{i.nome}</td>
                    <td className='text-end pe-4'>
                        <i 
                          className="bi bi-x-circle-fill text-danger h4"
                          id={i.id} 
                          onClick={deletaProduto}
                        ></i>
                      </td>
                  </tr>
                )
              : // se não, imprima esta mensagem
                <tr>
                  <td colSpan={2} className='text-muted small p-2'>
                    Nenhum produto cadastrado na lista
                  </td>
                </tr>
            }     
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Meio;