// import React from 'react'
// import assests from '../assets/assets'
// import { FaInstagram } from "react-icons/fa";
// import { GrLinkedinOption } from "react-icons/gr";
// import { IoLogoGithub } from "react-icons/io5";

// function Home() {
//   return (
//     <div className='p-10 bg-black text-white h-lvh' id='home' >
//     <div className='mt-28 flex justify-evenly '>
//     <div>
//           <h1 className='text-[80px]'>I am <span className='text-yellow-400'> Harikrishnan </span></h1>
//           <h3 className='text-[40px] ml-24 '> <span className='bg-gradient-to-r from-orange-400 to bg-purple-400 text-transparent bg-clip-text font-bold text-[50px]'> Mern </span> Full Stack Developer</h3>
//         <ul className='flex justify-center space-x-24 mt-12 text-[40px]'>
//            <li><a href="#"><FaInstagram className=' '/></a></li>
//            <li><a href="#"><GrLinkedinOption className='border-2 border-white rounded-lg px-1  '/></a></li>
//            <li><a href="#"><IoLogoGithub className=' '/></a></li>
//        </ul>
//        <ul className='flex justify-evenly mt-7'>
//        <li><a href="#" className='bg-gradient-to-r from-green-400 to to-blue-400 rounded-full py-3 px-4  text-black font-semibold text-[17px] relative top-16'>Connect with Me</a></li>
//        <li><a href="#" className='bg-gradient-to-r from-orange-400 to bg-purple-400 rounded-full py-3 px-11 text-black font-semibold text-[20px] relative top-16'>Resume</a></li>
//        </ul>
//      </div>
// <img src={assests.img} alt="" className='w-[350px] border-8 border-yellow-500 rounded-full px-10 '/>
// </div>
//     </div>
//   )
// }

// export default Home






import React from 'react';
import assests from '../assets/assets';
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";

function Home() {
  const whatsappNumber = '+8714302550'; // Replace with your WhatsApp number
  const message = 'Hello, I would like to connect with you!'; // Optional pre-filled message
  const whatsappURL = `https://wa.me/${8714302550}?text=${encodeURIComponent(message)}`;

  return (
    <div className='p-10 bg-black text-white h-screen' id='home'>
      <div className='mt-28 flex justify-evenly'>
        <div>
          <h1 className='text-[80px]'>I am <span className='text-yellow-400'>Harikrishnan</span></h1>
          <h3 className='text-[40px] ml-24'>
            <span className='bg-gradient-to-r from-orange-400 to bg-purple-400 text-transparent bg-clip-text font-bold text-[50px]'>
              Mern
            </span> Full Stack Developer
          </h3>
          <ul className='flex justify-center space-x-24 mt-12 text-[40px]'>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><GrLinkedinOption className='border-2 border-white rounded-lg px-1' /></a></li>
            <li><a href="#"><IoLogoGithub /></a></li>
          </ul>
          <ul className='flex justify-evenly mt-7'>
            <li>
              <a 
                href={whatsappURL} 
                className='bg-gradient-to-r from-green-400 to-blue-400 rounded-full py-3 px-4 text-black font-semibold text-[17px] relative top-16' 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Connect with Me
              </a>
            </li>
            <li>
              <a 
                href="https://app.enhancv.com/share/be53086b/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" 
                className='bg-gradient-to-r from-orange-400 to bg-purple-400 rounded-full py-3 px-11 text-black font-semibold text-[20px] relative top-16'
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <img src={assests.img} alt="" className='w-[350px] border-8 border-yellow-500 rounded-full px-10' />
      </div>
    </div>
  );
}

export default Home;





// import React from 'react';
// import assests from '../assets/assets';
// import { FaInstagram } from "react-icons/fa";
// import { GrLinkedinOption } from "react-icons/gr";
// import { IoLogoGithub } from "react-icons/io5";

// function Home() {
//   const whatsappNumber = '+8714302550'; // Replace with your WhatsApp number
//   const message = 'Hello, I would like to connect with you!'; // Optional pre-filled message
//   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <div className='p-6 md:p-10 bg-black text-white h-screen' id='home'>
//       <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
//         <div className='text-center md:text-left'>
//           <h1 className='text-4xl md:text-[80px] mb-4'>
//             I am <span className='text-yellow-400'>Harikrishnan</span>
//           </h1>
//           <h3 className='text-2xl md:text-[40px]'>
//             <span className='bg-gradient-to-r from-orange-400 to-purple-400 text-transparent bg-clip-text font-bold text-3xl md:text-[50px]'>
//               Mern
//             </span> Full Stack Developer
//           </h3>
//           <ul className='flex justify-center md:justify-start space-x-6 md:space-x-12 mt-8 text-2xl md:text-[40px]'>
//             <li><a href="#" className='hover:text-yellow-400'><FaInstagram /></a></li>
//             <li><a href="#" className='hover:text-yellow-400'><GrLinkedinOption className='border-2 border-white rounded-lg px-1' /></a></li>
//             <li><a href="#" className='hover:text-yellow-400'><IoLogoGithub /></a></li>
//           </ul>
//           <ul className='flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mt-6'>
//             <li>
//               <a 
//                 href={whatsappURL} 
//                 className='bg-gradient-to-r from-green-400 to-blue-400 rounded-full py-2 px-4 text-black font-semibold text-sm md:text-[17px]' 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 Connect with Me
//               </a>
//             </li>
//             <li>
//               <a 
//                 href="https://app.enhancv.com/share/962c93f4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" 
//                 className='bg-gradient-to-r from-orange-400 to-purple-400 rounded-full py-2 px-6 text-black font-semibold text-sm md:text-[20px]'
//               >
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div>
//         <img src={assests.img} alt="" className='w-1/2 md:w-[350px] border-8 border-yellow-500 rounded-full' />
//       </div>
//     </div>
//   );
// }

// export default Home;
