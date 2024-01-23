import { useNavigate, useSearchParams } from 'react-router-dom'; // Make sure to import Navigate from the correct library
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
const PaymentSuccess = () => {
    const navigate = useNavigate();
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    const handleroute = () => {
        navigate('/');
    }

    return (
        <div className='h-screen bg-slate-500 flex justify-center items-center'>
            <div className='border-2 rounded-lg shadow-2xl bg-gray-400 px-10 py-10 '>
                <h1 className='text-2xl font-semibold'> Order Successful</h1>
                <p>
                    Reference No. {referenceNum}
                </p>

                <div className='mx-auto px-5 py-7'>
                    <button onClick={handleroute} type='button' className='button-theme bg-gradient-to-b bg-rose-600 shadow-lg shadow-rose-500 flex items-center justify-center text-white py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
                        <ArrowLeftIcon className='w-5 h-5 text-white' />
                        <span className=''>Continue Shopping</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
