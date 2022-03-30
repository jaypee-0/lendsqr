import React from 'react'
import Usercards from '../users.json'

const UsersDashboard = () => {
  return (
      <div id="usersDashboard" className='pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between'>
          {
            Usercards && Usercards.map( usercard => {
              return(
                <div id='usercard' className="py-3 px-3" key={ usercard.id }>
                  <div style={{ width: "40", height: "40" }}>
                    <img src={ usercard.icon } alt="" />
                  </div>
                  <p className='py-2 mb-0'>{ usercard.caption }</p>
                  <h2>{ usercard.amount }</h2>
                </div>
              )
            })
          }
      </div>
  )
}

export default UsersDashboard