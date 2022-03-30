import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/icon.svg';
import banner from '../assets/banner.svg';
import bell from '../assets/bell.svg';
import profile from '../assets/profilepicture.svg';

const Nav = () => {
  return (
    <div className="navigation w-100 position-fixed">
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-none">
            <ul class="pl-0 d-flex col-0 col-sm-5"> 
                <NavLink to="#" className="pr-2"><img src={logo} alt="" /></NavLink>
                <NavLink to="#" className="d-none d-md-inline pr-2"><img className="img-fluid" src={banner} alt="" /></NavLink>
                <form id="dashboardForm" className="d-none d-lg-block ml-auto" action="">
                <div class="input-group">                
                <input type="search" className="py-1 pl-2" placeholder='Search for something' />
                <span>
                  <button className="py-1 px-3"><i className="bi bi-search"></i></button>
                </span> 
                </div>

                </form>          
            </ul>
            <ul className="ml-auto">
                <NavLink to="#" className="text-decoration-underline pr-1">Doc</NavLink>
                <NavLink to="#" className="bell px-2"><img src={bell} alt="" /></NavLink>
                <NavLink to="#" className="px-2"><img className="img-fluid rounded-circle" src={profile} alt="" /></NavLink>
                <span className="nav-item dropdown">
                <NavLink to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="pl-2 dropdown-toggle fw-bold">Adedeji</NavLink> 
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink to="#" className="dropdown-item">Logout</NavLink></li>
                </ul>
                </span>
            </ul>
        </nav>
    </div>
</div>
  )
}

export default Nav