import React from 'react'
import assests from '../assets/assets'

function Project() {
  return (
    <div className='p-5 bg-black h-lvh text-white ' id='project'>
    <div className='container mx-auto px-8 '>
    <h2 className='text-4xl font-bold text-center mt-16 text-[#FFF5E4]'>Projects</h2>
    <div className='border-b-2 border-yellow-200 w-32 mx-auto'></div>
                <div className='flex justify-evenly mt-24 md:'>
                    <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-500 hover:scale-105'>
                        <img src={assests.img2} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                        <h3 className='text-2xl mb-2 font-bold'>Spotify</h3>    
                        <p className='text-gray-300 mb-4'>A MERN stack website with music playback,playlist <br />management,and user authentication features.</p>
                        <a href="" className='inline-block bg-gradient-to-r from-blue-300 to bg-purple-700 text-black px-4 py-2 rounded-full font-semibold mt-2'>GitHub</a>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={assests.img3} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                        <h3 className='text-2xl mb-2 font-bold'>Premium Watch</h3>
                        <p className='text-gray-300 mb-4'>Luxury watch e-commerce site with <br />product listings and secure checkout.</p>
                        <a href="" className='inline-block bg-gradient-to-r from-blue-300 to bg-purple-700 text-black px-4 py-2 rounded-full font-semibold mt-2'>GitHub</a>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={assests.img4} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                        <h3 className='text-2xl mb-2 font-bold'>Food Delivery</h3>
                        <p className='text-gray-300 mb-4'>A static website showcasing a food delivery <br />service with menus, contact info, and service details.</p>
                        <a href="" className='inline-block bg-gradient-to-r from-blue-300 to bg-purple-700 text-black px-4 py-2 rounded-full font-semibold mt-2'>GitHub</a>
                    </div>
    
                </div>
    </div>
    </div>
  )
}

export default Project







// import React from 'react';
// import assests from '../assets/assets';

// function Project() {
//   return (
//     <div className='p-5 md:p-10 bg-black text-white min-h-screen' id='project'>
//       <div className='container mx-auto px-4 md:px-8'>
//         <h2 className='text-3xl md:text-4xl font-bold text-center mt-16 text-[#FFF5E4]'>Projects</h2>
//         <div className='border-b-2 border-yellow-200 w-24 md:w-32 mx-auto'></div>
//         <div className='flex flex-col md:flex-row md:flex-wrap justify-center mt-12 md:mt-24'>
//           <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 md:w-1/3'>
//             <img src={assests.img2} alt="Spotify" className='rounded-lg mb-4 w-full h-48 object-cover' />
//             <h3 className='text-xl md:text-2xl mb-2 font-bold'>Spotify</h3>    
//             <p className='text-gray-300 mb-4 text-sm md:text-base'>A MERN stack website with music playback, playlist management, and user authentication features.</p>
//             <a href="" className='inline-block bg-gradient-to-r from-blue-300 to-purple-700 text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base mt-2'>GitHub</a>
//           </div>
//           <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 md:w-1/3'>
//             <img src={assests.img3} alt="Premium Watch" className='rounded-lg mb-4 w-full h-48 object-cover' />
//             <h3 className='text-xl md:text-2xl mb-2 font-bold'>Premium Watch</h3>
//             <p className='text-gray-300 mb-4 text-sm md:text-base'>Luxury watch e-commerce site with product listings and secure checkout.</p>
//             <a href="" className='inline-block bg-gradient-to-r from-blue-300 to-purple-700 text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base mt-2'>GitHub</a>
//           </div>
//           <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 md:w-1/3'>
//             <img src={assests.img4} alt="Food Delivery" className='rounded-lg mb-4 w-full h-48 object-cover' />
//             <h3 className='text-xl md:text-2xl mb-2 font-bold'>Food Delivery</h3>
//             <p className='text-gray-300 mb-4 text-sm md:text-base'>A static website showcasing a food delivery service with menus, contact info, and service details.</p>
//             <a href="" className='inline-block bg-gradient-to-r from-blue-300 to-purple-700 text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base mt-2'>GitHub</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;

