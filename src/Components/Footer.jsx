// import React from 'react'
// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


// function Footer() {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Yousaf</h3>
//             <p className="text-gray-400">
//               Full-Stack Developer based in the USA, specializing in web and
//               software development.
//             </p>
//           </div>
//           <div className="flex-1 w-full"> 
//             <form className="flex items-center justify-center">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
//                 focus:outline-none focus:border-green-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
//                 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div
//           className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
//           justify-between items-center"
//         >
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
//           </p>
//           <div className="flex space-x-4 my-4 md:my-0">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaGithub />
//             </a>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               Privacy
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer





import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




function Footer() {
  return (
    <div>
      <footer className='bg-black max-h-screen '>
            <div className="border-t border-gray-600 text-white flex justify-between  items-center p-5 pt-10 pb-9 md:space-x-12">
                    <div className='text-gray-400 '>  &copy; {new Date().getFullYear()}   Hari. All rights reserved. </div>

                    <div className='text-gray-400 flex space-x-7 mr-8 '>
                        <div><FaFacebook className='w-[25px] h-[25px]'/></div>
                        <div><FaLinkedinIn className='w-[25px] h-[25px]'/></div>
                        <div><FaGithub className='w-[25px] h-[25px]'/></div>
                        <div><FaInstagram className='w-[25px] h-[25px]'/></div>
                    </div>

                    <div className='text-gray-400 space-x-5 md:flex-shrink'>
                        <a href="">Privacy</a>
                        <a href="">Terms of Service</a>
                    </div>
            </div>
      </footer>
    </div>
  )
}

export default Footer





// import React from 'react';
// import { FaFacebook, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className='bg-black text-white'>
//       <div className="border-t border-gray-600 p-5 pt-10 pb-9">
//         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
//           <div className='text-gray-400 text-center md:text-left mb-4 md:mb-0'>
//             &copy; {new Date().getFullYear()} Hari. All rights reserved.
//           </div>
//           <div className='text-gray-400 flex justify-center md:justify-start space-x-7 mb-4 md:mb-0'>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <FaFacebook className='w-6 h-6' />
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn className='w-6 h-6' />
//             </a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//               <FaGithub className='w-6 h-6' />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className='w-6 h-6' />
//             </a>
//           </div>
//           <div className='text-gray-400 text-center md:text-right'>
//             <a href="#" className='block md:inline-block md:mr-5 mb-2 md:mb-0'>Privacy</a>
//             <a href="#" className='block md:inline-block'>Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

