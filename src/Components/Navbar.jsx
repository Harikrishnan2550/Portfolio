// import React from 'react'

// function Navbar() {

  
//   return (
//     <div className='p-10 bg-black max-h-screen text-white'>

//     <div>
//       <nav className='flex justify-between'>
//        <h1 className='text-[35px] font-semibold ml-10'>Harikrishnan </h1> 
//        <div>
//        <ul className='flex space-x-20 text-[18px] mr-10'>
//         <li><a  href="#home"className='transition duration-300'>Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#project">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//        </ul>
//        </div>
//       </nav>
//     </div> 
               
//   </div>
//   )
// }

// export default Navbar


// import React from 'react';

// function Navbar() {
//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     document.getElementById(targetId).scrollIntoView({
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className='p-10 bg-black max-h-screen text-white'>
//       <nav className='flex justify-between'>
//         <h1 className='text-[35px] font-semibold ml-10'>Harikrishnan</h1>
//         <ul className='flex space-x-20 text-[18px] mr-10'>
//           <li><a href="#home" onClick={(e) => handleScroll(e, 'home')} className='hover:text-yellow-300 hover:border-b-2 border-yellow-300'>Home</a></li>
//           <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className='hover:text-yellow-300 hover:border-b-2 border-yellow-300'>About</a></li>
//           <li><a href="#project" onClick={(e) => handleScroll(e, 'project')} className='hover:text-yellow-300 hover:border-b-2 border-yellow-300'>Projects</a></li>
//           <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}  className='hover:text-yellow-300 hover:border-b-2 border-yellow-300'>Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;





import React from 'react';

function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-black text-white z-50'>
      <nav className='flex justify-between items-center p-6 md:px-16 lg:px-24'>
        <h1 className='text-2xl font-semibold ml-10'>Harikrishnan</h1>
        <ul className='flex space-x-16 mr-10'>
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')} 
              className='text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')} 
              className='text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#project" 
              onClick={(e) => handleScroll(e, 'project')} 
              className='text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')} 
              className='text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close

//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     document.getElementById(targetId).scrollIntoView({
//       behavior: 'smooth'
//     });
//   };

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className='fixed top-0 left-0 w-full bg-black text-white z-50'>
//       <nav className='flex flex-col md:flex-row items-center p-6'>
//         <h1 className='text-2xl font-semibold ml-10 mb-4 md:mb-0'>Harikrishnan</h1>
        
//         {/* Hamburger Icon */}
//         <div className='md:hidden ml-auto'>
//           <button onClick={toggleMenu} className='text-2xl'>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 mr-10 absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
//           <li>
//             <a 
//               href="#home" 
//               onClick={(e) => { handleScroll(e, 'home'); toggleMenu(); }} 
//               className='block text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a 
//               href="#about" 
//               onClick={(e) => { handleScroll(e, 'about'); toggleMenu(); }} 
//               className='block text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a 
//               href="#project" 
//               onClick={(e) => { handleScroll(e, 'project'); toggleMenu(); }} 
//               className='block text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a 
//               href="#contact" 
//               onClick={(e) => { handleScroll(e, 'contact'); toggleMenu(); }} 
//               className='block text-lg hover:text-yellow-300 hover:border-b-2 border-yellow-300 transition duration-300'
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
