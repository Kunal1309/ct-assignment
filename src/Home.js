import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='links-on-home'>
            <Link to='/history' className='link_history'><i>01. History</i></Link>
            <Link to='/team' className='link_team'><i>01. Team</i></Link>
        </div>
        <div className='home-para'>
            <p className='losa'>LOSANGELES</p><br/>
            <p className='mountains'>MOUNTAINS</p>
        </div>
    </div>
  )
}

export default Home