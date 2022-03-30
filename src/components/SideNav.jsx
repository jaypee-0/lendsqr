import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideNav = () => {
  return (
    <div className='pl-0 d-none d-md-block'>
        <nav id="sideNav" className='position-fixed'> 
        <header className='py-1'><FontAwesomeIcon className='pr-2' icon="briefcase" />Switch Organisation</header>
        <ul className='pl-0 pb-2 sidebar'>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="house-chimney" />Dashboard</NavLink>
            <p to="#" className="nav-text">CUSTOMERS</p>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="users" />Users</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="user-group" />Guarantors</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="sack-dollar" />Loans</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="handshake" />Decision Models</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="piggy-bank" />Savings</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="hand-holding-dollar" />Loan Requests</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="user-check" />Whitelist</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="user-xmark" />Karma</NavLink>
            <p to="#" className="nav-text">BUSINESSES</p>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="briefcase" />Organization</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="hand-holding-dollar" />Loan Products</NavLink>
            <NavLink to="#" className="nav-link"><i class="bi bi-house-heart"></i>Savings Products</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="coins" />Fees and Charges</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="money-bill-transfer" />Transactions</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="dharmachakra" />Services</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="user-gear" />Service Account</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="file-lines" />Settlements</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="chart-column" />Reports</NavLink>
            <p to="#" className="nav-text">SETTINGS</p>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="sliders" />Preferences</NavLink>
            <NavLink to="#" className="nav-link"><i class="bi bi-patch-check-fill pr-2"></i>Fees and Pricing</NavLink>
            <NavLink to="#" className="nav-link"><i class="bi bi-journal-text pr-2"></i>Audit Logs</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="gear" />Systems Messages</NavLink>
            <NavLink to="#" className="nav-link"><FontAwesomeIcon className='pr-2' icon="right-from-bracket" /></NavLink>
            <NavLink to="#" className="nav-link">Logout</NavLink>
        </ul>
    </nav>
    </div>
  )
}

export default SideNav