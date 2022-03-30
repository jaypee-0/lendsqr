import React from 'react'
import Grace from '../assets/graceprofile.svg';

const Generaldetails = () => {
  return (
    <div id='generaldetails' className=''>
        <div><button><i class="bg-none border-0 users bi pr-3 bi-arrow-left"></i>Back to Users</button></div>
        <div className='d-flex my-4'>
            <h2>User Details</h2>
            <div className='status-buttons ml-auto'>
                <button className='blacklist px-3 py-1'>BLACKLIST USER</button>
                <button className='activate px-3 py-1'>ACTIVATE USER</button>
            </div>
        </div>
        <div>
            <div className='card px-2'>
                <div id="generaldetailsone" className='my-2 mx-5 d-flex justify-content-around mb-2 mr-5'>
                    <img className='img-fluid' src={Grace} alt="" />
                    <div className='flex-column'>
                        <h2>Grace Effiom</h2>
                        <p>LSQFf587g90</p>    
                    </div>
                    <div id="usertier" className='flex-column'>
                        <p>User’s Tier</p>
                        <p><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></p>    
                    </div>
                    <div className='flex-column'>
                        <h2>₦200,000.00</h2>
                        <p>9912345678/Providus Bank</p>    
                    </div>
                </div>
                <div className=''>
                    <ul className='d-flex align-items-end justify-content-between mb-0'>
                        <li>General details</li>
                        <li>Documents</li>
                        <li>Bank Details</li>
                        <li>Loans</li>
                        <li>Savings</li>
                        <li>App and System</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Generaldetails