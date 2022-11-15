import React from 'react';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartCount = ({onCartToggle} ) => {
    return (
        <div>
            <div className='h-11 flex items-center justify-between bg-black text-white  sticky top-0 left-0 right-0 bottom-0 '>
                <div className='flex items-center gap-3'>
                    <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                        <ChevronDoubleLeftIcon  className='h-5 w-5 text-white hover:text-orange-500 stroke-[2]' />
                    </div>
                    <div className='grid items-center'>
                        <h1 className='text-base font-medium text-white'>Your Item<span>(Items)</span></h1>
                    </div>
                </div>
                <div className='pr-2 flex items-center'>
                  <button onClick={onCartToggle} className=' p-0.5' type='button ' >
                    <XMarkIcon className='w-5 h-5 ml-2 text-white ' />
                  </button>
                </div>
            </div>
        </div>
    )
}

export default CartCount;