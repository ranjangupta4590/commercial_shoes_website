import React, { useRef, useState } from 'react'


const Add_address = ({ toggle, modal, save ,pay }) => {

    const modalRef = useRef();


    const [name, setName] = useState([]);
    const [address1, setAddress1] = useState([]);
    const [address2, setAddress2] = useState([]);
    const [landmark, setLandmark] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [pin, setPin] = useState([]);
    const [state, setState] = useState([]);


    const handleSave = (e) => {
        e.preventDefault()

        let addObj = {}
        addObj["Name"] = name
        addObj["Address1"] = address1
        addObj["Address2"] = address2
        addObj["Landmark"] = landmark
        addObj["Mobile"] = mobile
        addObj["Pin"] = pin
        addObj["State"] = state
        save(addObj)
        toggle();

    }



    return (
        <>

            {modal &&
                (
                    <section id='addtask'>
                        <div ref={modalRef} className="fixed inset-0 z-50 overflow-auto bg-white bg-opacity-80 flex justify-center items-center">
                            <div className="relative p-4 w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
                                    {/* <!-- Modal header --> */}

                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold  text-black">
                                            Delivery Address
                                        </h3>
                                        <button type="button" onClick={toggle} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>


                                    {/* <!-- Modal body --> */}

                                    <form className="p-4 md:p-5 ">
                                        <div className="grid gap-4 mb-4 grid-cols-2">
                                            <div className="col-span-2">
                                                <label for="name" className="block mb-2 text-sm font-medium text-black">Full Name</label>
                                                <input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" required="" />

                                            </div>
                                            <div className="col-span-2">
                                                <label for="mobile" className="block mb-2 text-sm font-medium text-black">Mobile</label>
                                                <input
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Mobile" required="" />

                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                                <label for="name" className="block mb-2 text-sm font-medium text-black">Address 1</label>
                                                <input
                                                    value={address1}
                                                    onChange={(e) => setAddress1(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="current Address" required="" />

                                            </div>

                                            <div>
                                                <label for="address" className="block mb-2 text-sm font-medium text-black">Address 2</label>
                                                <input
                                                    value={address2}
                                                    onChange={(e) => setAddress2(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="" />

                                            </div>

                                            <div>
                                                <label for="landmark" className="block mb-2 text-sm font-medium text-black">Landmark</label>
                                                <input
                                                    value={landmark}
                                                    onChange={(e) => setLandmark(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />

                                            </div>
                                            <div>
                                                <label for="pin" className="block mb-2 text-sm font-medium text-black">Pin</label>
                                                <input
                                                    value={pin}
                                                    onChange={(e) => setPin(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                            </div>
                                            <div>
                                                <label for="state" className="block mb-2 text-sm font-medium text-black">State</label>
                                                <input
                                                    value={state}
                                                    onChange={(e) => setState(e.target.value)}
                                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />

                                            </div>


                                        </div>

                                        <div className='flex mr-3 gap-3'>
                                            
                                            {/* <button type='submit' onClick={handleSave} className="  text-white items-center bg-pink-500 hover:bg-pink-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                Add Address
                                            </button> */}
                                            <button onClick={handleSave} className=" text-white items-center bg-pink-500 hover:bg-pink-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                Amount to be pay ${pay} 
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </>
    )
}

export default Add_address;