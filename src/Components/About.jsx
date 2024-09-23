import React from 'react'
import assests from '../assets/assets'

function About() {
  return (
    <div className='p-5 bg-black text-white h-lvh' id='about'>
      <div className='container mx-auto px-8 '>
      <h2 className='text-4xl font-bold text-center mt-16 text-[#FFF5E4]'>About Me</h2>
      <div className='border-b-2 border-yellow-200 w-40 mx-auto'></div>
      </div>
      <div className='flex justify-evenly mt-24'>
      <img src={assests.img} alt="" className='w-72 h-90 '/>
        <div className='mt-10 w-[65%]'>
                 <p className='text-[20px] mb-10'>
                           I am a passionate full-stack developer with a focus on building  modern and responsive web applications <br /> with a strong foundation in frontend 
                          and focusing on backend  technologies.  I strive to create seamless and efficient user experience.
                 </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                            </div>
                      </div>
                </div>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                      </div>
                </div>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>
                            </div>
                      </div>
                </div>
                
            </div>
                      <div className='mt-12 flex justify-around text-center'>
                          <div>
                                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-400 '> 1+</h3>
                                <p>Years Experience</p>
                          </div>
                          <div>
                              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-400'> 3+</h3>
                              <p>Projects Completed</p>
                          </div>

                      </div>
      </div>
      </div>
    </div>
  )
}

export default About




// import React from 'react';
// import assests from '../assets/assets';

// function About() {
//   return (
//     <div className='p-5 md:p-10 bg-black text-white min-h-screen' id='about'>
//       <div className='container mx-auto px-4 md:px-8'>
//         <h2 className='text-3xl md:text-4xl font-bold text-center mt-16 text-[#FFF5E4]'>About Me</h2>
//         <div className='border-b-2 border-yellow-200 w-32 md:w-40 mx-auto'></div>
//       </div>
//       <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-12 md:mt-24'>
//         <img src={assests.img} alt="" className='w-64 md:w-72 h-auto border-4 border-yellow-500 rounded-full mb-6 md:mb-0' />
//         <div className='text-center md:text-left md:w-[60%]'>
//           <p className='text-lg md:text-[20px] mb-8'>
//             I am a passionate full-stack developer with a focus on building modern and responsive web applications 
//             with a strong foundation in frontend and backend technologies. I strive to create a seamless and efficient user experience.
//           </p>
//           <div className='space-y-4'>
//             <div className='flex items-center'>
//               <label htmlFor="htmlandcss" className='w-1/3 md:w-1/4 text-sm md:text-base'>HTML & CSS</label>
//               <div className='grow bg-gray-800 rounded-full h-2.5'>
//                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
//               </div>
//             </div>
//             <div className='flex items-center'>
//               <label htmlFor="reactjs" className='w-1/3 md:w-1/4 text-sm md:text-base'>React JS</label>
//               <div className='grow bg-gray-800 rounded-full h-2.5'>
//                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
//               </div>
//             </div>
//             <div className='flex items-center'>
//               <label htmlFor="nodejs" className='w-1/3 md:w-1/4 text-sm md:text-base'>Node JS</label>
//               <div className='grow bg-gray-800 rounded-full h-2.5'>
//                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'></div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-8 md:mt-12 flex flex-col md:flex-row justify-around text-center md:text-left'>
//             <div>
//               <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-400'>1+</h3>
//               <p className='text-sm md:text-base'>Years Experience</p>
//             </div>
//             <div>
//               <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-400'>3+</h3>
//               <p className='text-sm md:text-base'>Projects Completed</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

