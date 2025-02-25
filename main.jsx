import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

let Header = function () {
  const [menu2, setmenu2] = useState('fa-solid fa-bars cursor-pointer hidden justify-end items-end text-end  mt-[-60px] ')
  const [menu3, setmenu3] = useState('')
const [Menu, setMenu] = useState("hidden justify-center text-center items-center flex-col md:hidden flex-wrap")
  return (
    <div className=' sticky top-0 z-[1000] pt-4 px-2 md:pl-[80px] md:pr-[80px]'>
      <>
    <div className='bg-[#faf9f91f] backdrop-blur-xl justify-between pl-2 pr-2 md:pl-[30px] md:pr-[30px]'>
      <div>
      <img width={90} src="img/Bayeed.png" className=' rounded-full' alt="" />
      </div>

      <div>
     <div className='float-end md:hidden mt-[-50px] '>
     <i onClick={function(){
        setMenu('flex justify-center text-center items-center flex-col md:hidden flex-wrap')
        setmenu2(' hidden ')
        setmenu3('fa-solid fa-xmark cursor-pointer justify-end items-end text-end  mt-[-60px]')
      }} className={menu2}></i>
     <i className={menu3} onClick={function() {
        setMenu('hidden justify-center text-center items-center flex-col md:hidden flex-wrap')
        setmenu2('fa-solid fa-bars cursor-pointer hidden justify-end items-end text-end  mt-[-60px]')
        setmenu3('')
     }}></i>
     </div>
        <ul className='hidden md:flex  flex-wrap float-end mt-[-60px]'>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Home</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">About</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Service</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Plan</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Contact</a></li>
        </ul>
      </div>

     
    </div>
    <div className='bg-[#faf9f91f] backdrop-blur-xl'>
      <ul className={Menu}>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Home</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">About</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Service</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Plan</a></li>
          <li className='mr-2'><a className='text-white duration-300 hover:text-blue-600' href="#">Contact</a></li>
        </ul>
      </div>
    </>
    </div>
  )
}
let Footer = function() {
  return (
    <div className='flex justify-center items-center flex-col text-center bg-gray-700 text-white p-5 mt-4'>
      <h1 className='text-xl'>© Copyright by Mineproness</h1>
    </div>
  )
}
let Home = function () {
  return (
    <>
    <div className='flex justify-center md:justify-between flex-col md:flex-row items-center text-center md:text-left pt-4 px-2 md:pl-[80px] md:pr-[80px]'>
      <div className=''>
        <h1 className='text-[39px] f'>Hi Guys</h1>
        <h1 className='text-[36px] bg-gradient-to-t bg-clip-text to-blue-600 from-red-500 text-transparent ff'><span className='[text-shadow:_1px_1px_40px_blue] '>Mineproness</span> <span className='text-white'>is a</span></h1>
        <h1 className='text-[36px]  bg-gradient-to-l bg-clip-text to-blue-600 from-red-500 text-transparent [text-shadow:_1px_1px_40px_blue] fff'>Web develpoer</h1>
        <br />
        <a className='bg-blue-800 text-white rounded py-2 px-3 hover:from-blue-600 hover:to-red-600 hover:bg-gradient-to-tr hover:[box-shadow:2px_2px_20px_blue] duration-200' href="#"><i class="fa-solid fa-user"></i>Contact</a>
        <a className='bg-blue-800 text-white rounded py-2 px-3 hover:from-blue-600 hover:to-red-600 hover:bg-gradient-to-tr hover:[box-shadow:2px_2px_20px_blue] duration-200 ml-1' href="https://youtube.com/@minepronees?si=DFLmKJWE_BuukAaN"><i class="fa-brands fa-youtube"></i>Youtube</a>
      </div>
      <div className='mt-[20px] fffff '>
         <img className='w-[250px] rounded-full ' src="img/face.png" alt="" />
      </div>
      <div className='flex md:block'><div className='w-[180px] bg-white text-black rounded p-4 items-center text-center justify-center flex flex-col ml-[6px] md:m-6 hover:-translate-y-5 duration-300 cursor-pointer'>
          <h1 className='text-[40px]'>1 YEARS</h1>
          <p>Experience</p>
        </div>
        <div className='w-[180px] bg-white text-black rounded p-4 items-center text-center justify-center flex flex-col ml-[6px] md:m-6 hover:-translate-y-5 duration-300 cursor-pointer'>
          <h1 className='text-[40px]'>100+</h1>
          <p>Project Complete</p>
        </div></div>
    </div>
    <div>
      <marquee behavior="" direction="" className='text-black bg-white p-1 mt-[100px] mb-[100px]'>
       <div className='flex'> 
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Discord</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Youtbe</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Web develpoer</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Seo</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Speed</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Html</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Javascript</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>React JS</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Tailwind Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Php</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Mysql</h1>
       </div>
      </marquee>
    </div>
    </>
 )
}
let Contact = function() {
  return (
    <>
    <div className='flex justify-center mt-4  md:flex-row flex-col items-center text-center'>
      <div className='bg-gray-600 w-[300px] h-[564px] md:w-[600px] items-center justify-center text-center flex flex-col'>
        <form action="https://formsubmit.co/Mineproness@gmail.com" method='post'>
        <input className='block bg-gray-800 mb-4 px-5 py-4 rounded-sm placeholder:text-white hover:bg-gray-700 duration-300 autofill:bg-gray-600 active:bg-slate-300' type="text"  name='name' placeholder='enter Name' required />
          <input className='block bg-gray-800 mb-4 px-5 py-4 rounded-sm placeholder:text-white hover:bg-gray-700 duration-300 autofill:bg-gray-600 active:bg-slate-300' type="email" name='email' placeholder='enter your email' required />
          <input className='block bg-gray-800 mb-4 px-5 py-4 rounded-sm placeholder:text-white hover:bg-gray-700 duration-300 autofill:bg-gray-600 active:bg-slate-300' type="text" name='country' placeholder='enter your country' required />
          <input className='block bg-gray-800 mb-4 px-5 py-4 rounded-sm placeholder:text-white hover:bg-gray-700 duration-300 autofill:bg-gray-600 active:bg-slate-300' type="text" list='plan' name='plan' placeholder='enter your plan' required />
          
      <input type="submit" value="send" placeholder='send' className='bg-blue-950 py-3 px-[93px] rounded-sm hover:bg-blue-500 active:duration-1000 active:bg-red-700 duration-300' />
          <datalist id='plan'>
             <option value="40$">40$/month</option>
             <option value="40$y">40$/year</option>
             <option value="80$">80$/month</option>
             <option value="80$y">80$/year</option>
             <option value="100$">100$/month</option>
             <option value="100$y">100$/year</option>
          </datalist>
        </form>
      </div>
      <div>
       <img className='hidden md:flex md:w-[600px] h-[564px]' src="img/Screenshot-2024-10-24-at-8.29.29 AM.png" alt="" />
      </div>
    </div>
    </>
  )
}
let About = function () {
  return (
    <>
    <h1 className=' underline text-[48px] bg-gradient-to-b to-blue-700 from-red-600 bg-clip-text text-transparent text-center items-center'>About</h1>
    <br />
    <div  className='pt-4 px-2 md:pl-[80px] md:pr-[80px] flex justify-center items-center text-center md:justify-between flex-col md:flex-row md:text-left'>
    <div className='mt-[20px]'>
         <img className='w-[250px] rounded-full' src="img/face.png" alt="" />
      </div>
      <div className='md:w-[500px]'>
        <h1 className='text-[45px]'>I'm Mineproness <br />Web develpoer</h1>
        <p className='text-[20px]'>I’m Mineproness, a web developer dedicated to crafting dynamic, responsive, and SEO-friendly websites for businesses and individuals. I specialize in front, back-end integration, committed to exceeding expectations with high-quality work.</p>
        <div className='flex mt-[30px]'>
          <div>
            <h1 className='text-[30px] bg-gradient-to-b to-blue-700 from-red-600 bg-clip-text text-transparent [text-shadow:2px_2px_40px_blue]'>1 Year</h1>
            <p className='text-[20px]'>Years of Experience In Development</p>
          </div>
          <div className='w-[1px] border-r border-gray-500 mx-3'></div>
          <div>
            <h1 className='text-[30px] bg-gradient-to-b to-blue-700 from-red-600 bg-clip-text text-transparent [text-shadow:2px_2px_40px_blue]'>100+</h1>
             <p className='text-[20px]'> Successfully Projects completed</p>
          </div>
          <div className='w-[1px] border-r border-gray-500 mx-3'></div>
          <div>
            <h1 className='text-[30px] bg-gradient-to-b to-blue-700 from-red-600 bg-clip-text text-transparent [text-shadow:2px_2px_40px_blue]'>105+</h1>
            <p className='text-[20px]'>Global Customers</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
let Work = function () {
  return (
    <>
    <div className='bg-[1e1e1e] pt-4 px-2 md:pl-[80px] md:pr-[80px] mt-[100px]'>
      <div className='flex justify-center md:flex-row md:text-left md:justify-between items-center text-center flex-col'>
        <div className='w-[500px]'><h1 className='text-[56px]'>Explore My Works</h1>
        <p className='text-[20px]'>Each project highlights my approach to problem-solving, creativity, and technical expertise. Explore to surprise. 😮</p></div>
        <div>
       <div>
        <br />
        <br />
        <a className='text-2xl rounded-full bg-gradient-to-r to-blue-600 from-red-600 px-[36px] py-7 hover:to-red-600 hover:from-blue-500 duration-300 Hover:[box-shadow:2px_2px_20px_blue]' href="#"><i class="fa-solid fa-arrow-up rotate-45"></i></a>
       </div>
        </div>
      </div>

      <div className='flex justify-center flex-wrap mt-[100px]'>
         <div className='w-[300px] md:w-[500px] bg-gray-800 p-4 m-2 e'>
          <img className='w-[300px] md:w-[500px]' src="img/work1.png" alt="" />
          <h1 className='text-[30px]'>Portfolio website</h1>
          <p>Website Design</p>
         </div>
         <div className='w-[300px] md:w-[500px] bg-gray-800 p-4 m-2 e '>
          <img className='w-[300px] md:w-[500px]' src="img/work2.png" alt="" />
          <h1 className='text-[30px]'>Tools website</h1>
          <p>Ai learning</p>
         </div>
         <div className='w-[300px] md:w-[500px] bg-gray-800 p-4 m-2 e'>
          <img className='w-[300px] md:w-[500px]' src="img/work3.png" alt="" />
          <h1 className='text-[30px]'>gift card website</h1>
          <p>Node js</p>
         </div>
         <div className='w-[300px] md:w-[500px] bg-gray-800 p-4 m-2 e'>
          <img className='w-[300px] md:w-[500px]' src="img/work4.png" alt="" />
          <h1 className='text-[30px]'>e-commerce website</h1>
          <p>React js</p>
         </div>
      </div>
      
    </div>
    <br />
    <marquee behavior="" direction="" className='text-black bg-white p-1 mt-[100px] mb-[100px]'>
       <div className='flex'> 
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Discord</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Youtbe</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Web develpoer</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Seo</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Speed</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Html</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Javascript</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>React JS</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Tailwind Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Php</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Mysql</h1>
       </div>
      </marquee>
    </>
  )
}
let Plan = function () {
  return (
    <>
    <h1 className='text-[48px] text-center items-center bg-gradient-to-b to-blue-600 from-red-700 bg-clip-text text-transparent'>Plans</h1>
    <div className='md:px-[80px] px-2 flex-wrap flex justify-center'>
      <div className=' hover:[transform:perspective(85em);] hover:[ transform:translateZ(20px);] w-[310px] border border-gray-700 h-[400px] p-4 mx-2 mt-2 hover:scale-[1.1] duration-700 '>
        <h1 className='text-[16px]'>Pay as you go</h1>
        <h1 className='text-[38px]'>40$/Per month</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Super fast SSD</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>250 GB Bandwidth</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>1 Addon Domain</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>hosting 1 Year</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>1 Free Domain! (not .com)</h1>
        <br />
        <a className='bg-blue-800 text-white rounded py-2 px-3 hover:from-blue-600 hover:to-red-600 hover:bg-gradient-to-tr hover:[box-shadow:2px_2px_20px_blue] duration-200' href="#"><i class="fa-solid fa-user"></i>Contact</a>
      </div>
      <div className='w-[310px] border border-gray-700 h-[400px] p-4 mx-2 mt-2'>
        <h1 className='text-[16px]'>Pay as you go</h1>
        <h1 className='text-[38px]'>80$/Per month</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Super fast SSD</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>250 GB Bandwidth</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Unlimited Disk Space</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>hosting 1 Year</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>21 free domain</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>30 calls</h1>
        <br />
        <a className='bg-blue-800 text-white rounded py-2 px-3 hover:from-blue-600 hover:to-red-600 hover:bg-gradient-to-tr hover:[box-shadow:2px_2px_20px_blue] duration-200' href="#"><i class="fa-solid fa-user"></i>Contact</a>
      </div>
      <div className='w-[310px] border border-gray-700 h-[400px] p-4 mx-2 mt-2'>
        <h1 className='text-[16px]'>Pay as you go</h1>
        <h1 className='text-[38px]'>100$/Per month</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Super fast SSD</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Unlimited Bandwidth</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Unlimited Disk Space</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>hosting 1 Year</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>21 free domain</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Unlimited calls</h1>
        <h1 className='text-[19px]'> <i class="fa-solid fa-check bg-gradient-to-l to-blue-600 from-emerald-900 text-transparent bg-clip-text mr-4"></i>Latest cPanel with Softaculous</h1>
        <br />
        <a className='bg-blue-800 text-white rounded py-2 px-3 hover:from-blue-600 hover:to-red-600 hover:bg-gradient-to-tr hover:[box-shadow:2px_2px_20px_blue] duration-200' href="#"><i class="fa-solid fa-user"></i>Contact</a>
      </div>
    </div>
    <br />
    <marquee behavior="" direction="" className='text-black bg-white p-1 mt-[100px] mb-[100px]'>
       <div className='flex'> 
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Discord</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Youtbe</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Web develpoer</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Seo</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Speed</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Html</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Javascript</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>React JS</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Tailwind Css</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Php</h1>
        <h1 className="m-2 text-[20px]"><i className=" bg-gradient-to-br to-blue-600 from-red-600 bg-clip-text text-transparent fa-solid fa-star"></i>Mysql</h1>
       </div>
      </marquee>
    </>
  )
}
let root = createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <Header />
    <Home />
    <About />
    <Work />
    <Plan />
    <Contact />
    <Footer />
  </StrictMode>

)


