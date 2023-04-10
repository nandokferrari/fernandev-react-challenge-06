import React from 'react';
import { formatter } from '../../helpers/currencyFormartter';
import { useState } from 'react';
import "./style.css"

const Summary = ({total}) => {
  const [isDiscount, setIsDiscount] = useState(false)
  const [discount, setDiscount] = useState('')
  const [discounts, setDiscounts] = useState([])
  

  function applyDiscount(){
    if(discount.toUpperCase() !== "MEUCUPOM" && discount.toUpperCase() !== "MEUCUPOM2"){
      return alert("cupom inválido!")
    }

    const discountAlreadyAplied = discounts.find(disc => disc.name === discount.toUpperCase())

    if(discountAlreadyAplied){
      return alert("cupom já usado!")
    }
    
    setDiscounts(prev=> [...prev, {name: discount.toUpperCase(), value: 0.1}])
    setDiscount('')
    setIsDiscount(false)
  }

  function handleEnterPressed(e){
    const enterKey = "ENTER"

    if(enterKey !== e.key?.toUpperCase()){
      return 
    }

    applyDiscount()
  }

  function removeDiscount(discountName){
    setDiscounts(prev=> prev.filter(disc => disc.name !== discountName))
  }

  const discountValue = discounts.reduce((accumulator,current) =>  accumulator + current.value,0)

  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>{formatter.format(total)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          {discounts.length > 0 && <h4 className='cupons-title'>Cupons:</h4>}
          {discounts.map(disc => <div key={disc.name}>
            <span>{disc.name}</span>
            <span>{disc.value * 100} %</span>
            <button id='remove' onClick={()=>removeDiscount(disc.name)}>
              <i className='bx bx-x'></i>
            </button>
          </div>)}
          <div>
            {!isDiscount &&
              <button onClick={()=>setIsDiscount(true)}>
                Adicionar cupom de desconto
                <i className='bx bx-right-arrow-alt'></i>
              </button>
            }
            {isDiscount &&
              <>
                <input 
                  className='discount-input'
                  name='discount'
                  value={discount}
                  placeholder="insira o cupom" 
                  onChange={e => setDiscount(e.target.value?.toUpperCase())} 
                  onKeyDown={handleEnterPressed}
                  />
                <button onClick={applyDiscount}>
                  Aplicar cupom de desconto
                </button>
              </>
            }
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>{formatter.format(total - (discountValue * total))}</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;
