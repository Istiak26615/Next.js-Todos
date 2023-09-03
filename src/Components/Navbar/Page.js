"use client"

import Link from 'next/link'
import { useState } from 'react';
 
function Navbar(props) {
console.log(props)
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
  console.log(isDrawerOpen)
};
  return (
    <nav className={` shadow-black sticky top-0 z-10 bg-[#032216]`}>
    <div className="container mx-auto ">
    {/* <FontAwesomeIcon icon={faHome} height="2rem"/> */}
    
      <div className=''>



      <div className="md:hidden">
        <button
           onClick={toggleDrawer}
          className="text-white p-2 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
     {isDrawerOpen?
     <div className="block md:hidden">
     <ul className="justify-start ">
      
       {props.navMenu.map((menu) => (
         <>
         
       <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-2"><Link href={menu.link}>{menu.name}</Link> </li>
       </>
     ))}
       
     </ul>
     </div>:<></>}
      
 {/* for large device  */}
      <div className="hidden md:block">
      <ul className="flex justify-start ">
       
        {props.navMenu.map((menu) => (
          <>
          {menu.name==="প্রচ্ছদ"?
          <div className='flex items-center justify-around space-x-4 p-4 hover:bg-[#E07B27]' >
            <div style={{paddingRight: "0rem",}}>
          <FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} height="1.1rem"/>
          </div>
          <li className="text-white "><Link href="/">প্রচ্ছদ</Link> </li>           
          </div>:
        <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4"><Link href={menu.link}>{menu.name}</Link> </li>}
        </>
      ))}
        
      </ul>
      </div>
      </div>
      
    </div>
  </nav>
  )
}
 
export default Navbar