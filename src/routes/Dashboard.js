import React from 'react'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
import UserPage from './UserPage'

const Dashboard = () => {
  return (
    <div>
        <Nav />      
        <SideNav />
        <div className='container'>
          <UserPage />
        </div>

    </div>
  )
}

export default Dashboard