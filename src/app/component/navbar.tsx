import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-800 h-36 w-full flex justify-around items-center'>
        {/* Logo*/}
        <div className='bg-black h-12 w-36'></div>
        {/* Text Area*/}
        <div className='bg-yellow-300 h-12 w-64'></div>
        {/*Links*/}
        <ul className='flex gap-5'>
            <li className='bg-red-600 h-12 w-36 px-'></li>
            <li className='bg-green-950 h-12 w-36'></li>
            <li className='bg-rose-950 h-12 w-36'></li>
            
        </ul>

        

    </nav>

    
  )
}

export default Navbar
