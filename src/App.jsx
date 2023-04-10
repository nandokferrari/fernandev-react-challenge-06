/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

did - inserção de novos produtos no carrinho
did - remoção de produtos já inseridos
did - alteração de quantidade de cada item

todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/

const produto = {
  id: new Date(),
  nome: "Caderno",
  categoria: "livraria",
  preco: 13,
  qtd: 0
}

import './styles.scss';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import NewProduct from './components/NewProduct';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState([produto])

  function addNewProduct(product){
    setProducts(prev => [...prev, product])
  }

  function removeProduct(productId){
    setProducts(prev=> prev.filter(prod => prod.id !== productId))
  }

  function addQtdProduct(productId){
    setProducts(prev=> prev.map(prod => prod.id === productId? {...prod, qtd: prod.qtd++} : prod))
  }

  function decreaseQtdProduct(productId){
    setProducts(prev=> prev.map(prod => prod.id === productId? {...prod, qtd: prod.qtd === 0? prod.qtd :  prod.qtd--} : prod))
  }

  return (
    <>
      <PageHeader />

      <NewProduct isVisible={isVisible} onClose={()=> setIsVisible(false)} addNewProduct={addNewProduct} />

      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <button onClick={()=> setIsVisible(true)} className='add-produto'>
              produto
              <i className='bx bx-plus' />
            </button>            
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 && products.map(prod => <TableRow 
                  key={prod.id} 
                  produto={prod} 
                  removeProduct={()=>removeProduct(prod.id)} 
                  addQtdProduct={()=>addQtdProduct(prod.id)}
                  decreaseQtdProduct={()=>decreaseQtdProduct(prod.id)} />)}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
