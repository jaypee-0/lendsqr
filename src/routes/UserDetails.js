import React from 'react'
import Userinformation from '../components/Userinformation'
import Generaldetails from '../components/Generaldetails'


const UserDetails = () => {
  return (
    <div className='pt-5 bg-light'>
      <Generaldetails />
      <Userinformation />
    </div>
  )
}

export default UserDetails