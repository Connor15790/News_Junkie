import React from 'react'
import Clock from 'react-live-clock'

const DateTime = ()=> {
    return (
      <div className='pb-2 border-bottom border-dark border-2' style={{fontWeight: "bold", marginTop: "60px"}}>
        <div className="mx-5 px-1">
          <Clock format={'hh:mm:ss: A   |   D MMM YYYY'} ticking={true} timezone={''} />
        </div>
      </div>
    )
}

export default DateTime
