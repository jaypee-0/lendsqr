import React, { useState, useMemo } from 'react'
import UserData from '../data.json'
import Pagination from './Pagination'
import icon from '../assets/earth.svg'
import FIlter from './FIlter';
import Detailsmodal from '../components/Detailsmodal'

let PageSize = 9;

const UserTable = ({details}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [displaydetails, setdisplaydetails] = useState(false);
    const [displayfilter, setdisplayfilter] = useState(false);

    const active = id => {
    if (displaydetails === id) {
        return setdisplaydetails(null)
    }
    setdisplaydetails(id)
    }

    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return UserData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

  return (
    <div className='px-2 table-responsive w-100'>
        { displayfilter && <FIlter />} 
        <table className='table table-hover'>
            <thead>
                <tr >                                      
                    <th>ORGANIZATION<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th>USERNAME<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th>EMAIL<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th>PHONE NUMBER<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th>DATE JOINED<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th>STATUS<img onClick={() => setdisplayfilter(!displayfilter)} className='px-2' src={icon} alt="icon"/></th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody className='position-relative'>
                {currentTableData.map(userdata => {
                    return (
                        <tr >
                            <td>{userdata.organisation}</td>
                            <td>{userdata.username}</td>
                            <td>{userdata.email}</td>
                            <td>{userdata.phone}</td>
                            <td>{userdata.date}</td>
                            <td>{userdata.status}</td>
                            { displaydetails === userdata.id && <Detailsmodal details={details}/>}
                            <td key={userdata.id} onClick={() => active(userdata.id)}><i class="bi bi-three-dots-vertical"></i></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Pagination
        className="ml-auto"
        currentPage={currentPage}
        totalCount={UserData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

export default UserTable