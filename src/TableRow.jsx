import React from 'react';
import { formatter } from './helpers/currencyFormartter';

const TableRow = ({produto, removeProduct, addQtdProduct, decreaseQtdProduct}) => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>{produto.nome?.toUpperCase()}</div>
            <div className='category'>{produto.categoria}</div>
          </div>
        </div>
      </td>
      <td>{formatter.format(produto.preco || 0)}</td>
      <td>
        <div className='qty'>
          <button onClick={decreaseQtdProduct}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{produto.qtd}</span>
          <button onClick={addQtdProduct}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{(produto.preco && produto.qtd)? formatter.format(produto.preco * produto.qtd) : formatter.format(0)}</td>
      <td>
        <button className='remove' onClick={removeProduct}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
