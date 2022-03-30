import React from 'react'
import Select from 'react-select'

const FIlter = () => {

const organisation = [
    { value: 'Lendsqr', label: 'Lendsqr' },
    { value: 'Irorun', label: 'Irorun' }
]
const status = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Blacklisted', label: 'Blacklisted' },
    { value: 'Pending', label: 'Pending' }
]
  return (
    <div id="filter" className=''>
        <div className=''>
        <form action="" className='position-absolute d-flex flex-column mt-2'>
            <label htmlFor="">Organization</label>
            <Select options={organisation} />
            <label htmlFor="">Username</label>
            <input type="name" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Date</label>
            <input type="date" />
            <label htmlFor="">Phone number</label>
            <input type="number" />
            <label htmlFor="">Status</label>
            <Select options={status} />
            <div className='mt-3 border-0 d-flex justify-content-between'>
                <button className='border-0 reset px-4 py-1'>Reset</button>
                <button className='border-0 filter px-4 py-1 text-light'>Filter</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default FIlter