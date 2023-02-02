import React from 'react';

const TableRow = () => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>Nome do produto</div>
            <div className='category'>Categoria</div>
          </div>
        </div>
      </td>
      <td>R$ 120</td>
      <td>
        <div className='qty'>
          <button>
            <i className='bx bx-minus'></i>
          </button>
          <span>2</span>
          <button>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$ 240</td>
      <td>
        <button className='remove'>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
