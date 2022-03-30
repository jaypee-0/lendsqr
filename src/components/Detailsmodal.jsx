import React from 'react'

const Detailsmodal = ({details}) => {
  return (
    <div id="detailsmodal" className='border-1 p-0 mr-5'>
        <ul className='w-100 position-absolute py-2 px-2'>
            <li onClick={details}><i class="bi bi-eye px-1"></i>View Details</li>
            <li><i class="bi bi-person-x px-1"></i>Blacklist</li>
            <li><i class="bi bi-person-check px-1"></i>Activate User</li>
        </ul>
    </div>
  )
}

export default Detailsmodal