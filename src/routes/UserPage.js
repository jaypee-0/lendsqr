import React from 'react'
import UsersDashboard from '../components/UsersDashboard'
import UserTable from '../components/UserTable'
import UserDetails from './UserDetails'
import { useState } from 'react'

const UserPage = () => {
  const [showdetails, setshowdetails] = useState(true)
  const detailsview = () => {
    setshowdetails(false)
  }
  return (
    <div className='body-pd'>
      {showdetails && 
      <div>
      <UsersDashboard />
      <UserTable details={detailsview}/>
      </div>}      
      {!showdetails && <UserDetails />}
    </div>
  )
}

export default UserPage