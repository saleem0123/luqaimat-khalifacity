import React from 'react'
import luqaimat from '../lmt.png'

function Navbar() {
  return (
    <div>

<div className='flex justify-between items-center bg-yellow-400 py-5 px-16 sticky top-0'>
                <div className='flex flex-col'>
                    <img src={luqaimat} alt="vec" style={{ width: '6rem' }} />
                </div>
                <div className='flex gap-3 pe-16 data-hide ' style={{hover:'4sec'}}>
                    <div style={{color:'#1195D6'}}>HOME</div>
                    <div className='text-black'>SERVICES</div>
                    <div className='text-black'>ABOUT US</div>
                    <div className='text-black'>GALLERY</div>
                    <div className='text-black'>CONTACT US</div>
                </div>
            </div>
     
    </div>
  )
}

export default Navbar
