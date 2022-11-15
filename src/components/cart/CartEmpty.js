import React from 'react'
import bag from "../../assets/blank-paper.jpg";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle }) => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
                    <img src={bag} alt='img/empty-bag' className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110' />
                    <h1 className=' text-2xl  text-black font-bold items-center'>Hey It feels so light!</h1>
                    <p className=' text-black  items-center'>There is nothing in your bag,Let's add some items...</p>
                    <button onClick={onCartToggle} type='button' className='button-theme bg-gradient-to-b bg-rose-600 shadow-lg shadow-rose-500 flex items-center justify-center text-white py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
                        <ArrowLeftIcon className='w-5 h-5 text-white' />
                        <span className=''>Continue Shopping</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty;