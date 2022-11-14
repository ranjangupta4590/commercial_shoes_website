import React from 'react'
import bag from "../assets/blank-paper.png";
const CartEmpty = () => {
  return (
    <div>
       <div>
          <div>
               <img src={bag} alt='img/empty-bag' className='h-50 w-50'/>
          </div>
       </div>
    </div>
  )
}

export default CartEmpty;