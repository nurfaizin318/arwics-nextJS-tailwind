import React, { useState, useEffect ,useRef} from 'react';
import Link from 'next/link';
import Image from "next/image"
import { useRouter } from "next/router";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const router = useRouter();
  const [navColor, setNavColor] = useState('bg-transparent')
  const mountedRef = useRef()



  
  const handleClick = () => {
    setActive(!active);

  };

  const setNavbarBAckground = () =>{
    

    document.addEventListener("scroll", () => {


      const backgroundcolor = window.scrollY < 200 ? "bg-transparent" : "bg-softWhite";
      if (mountedRef.current) {
        setNavColor(backgroundcolor);
      }
        return mountedRef.current
      
      })
  }

  const handleLogOut= () =>{
    localStorage.setItem("logged","")
    router.push("/Login")
  }
  useEffect(() => {


    mountedRef.current =true


    setNavbarBAckground()

      return () => (mountedRef.current)
    
  }, []);



  return (
    // drawer
    <>
      <div className={`transform  ${active ? 'translate-1/2 shadow-2xl' : '-translate-x-full  '} nav z-50 xs:w-2/3 sm:w-1/2  h-screen md:hidden  transition-all duration-300 fixed left-0 top-0 bg-gray-50 overflow-auto `}>
        <div className="h-1/6 w-full bg-gradient-to-r  from-blue-300  to-red-300 ">
        </div>
        <Link href="/">
          <div className={`${router.pathname == "/" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex items-center text-gray-500 text-sm  `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8 " >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="#8E24AA" stroke="#8E24AA" style={{ width: 30, height: 30 }}>
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1  h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              Home
            </div>
          </div>
        </Link>
        <Link href="/Contact">
          <div className={`${router.pathname == "/Contact" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex flex-wrap items-center text-gray-500 text-sm `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="#8E24AA" style={{ width: 30, height: 30 }}>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              Contact
            </div>
          </div>
        </Link>
        <Link href="/Product">
          <div className={`${router.pathname == "/Product" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex flex-wrap items-center  text-gray-500 text-sm `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="#8E24AA" style={{ width: 30, height: 30 }}>
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              Product
            </div>
          </div>
        </Link>
        <Link href="/About">
          <div className={`${router.pathname == "/About" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex flex-wrap items-center  text-gray-500 text-sm `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#8E24AA">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              About
            </div>
          </div>
        </Link>
        <Link href="/Gallery">
          <div className={`${router.pathname == "/Gallery" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex flex-wrap items-center  text-gray-500 text-sm `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#8E24AA">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              Gallery
            </div>
          </div>
        </Link>
        <Link href="/News">
          <div className={`${router.pathname == "/News" ? 'border-r-4 border-blue-900 bg-blue-100' : ''} h-14 w-full flex flex-wrap items-center  text-gray-500 text-sm `}>
            <div className="h-full w-1/3   flex items-center xs:p-6 sm:p-8" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#8E24AA">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
            </div>
            <div className="h-full w-2/3  flex  items-center text-gray-700">
              News
            </div>
          </div>
        </Link>
        
      </div>



      {/* navbar */}
      <nav className={`flex items-center flex-wrap fixed px-3  h-24  top-0 w-full  z-40 transition duration-700 bg-gray-400`}>
        <Link href='/'>
          <div className="xs:w-1/2  md:w-1/5">
            <img
              src="/assets/arwics-logo-full.png"
              width={300}
              height={100}
              objectfit="contain"
              alt="logo"

            />
          </div>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-blue-100 rounded md:hidden text-blue ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}

        <div
          className={`hidden w-full md:inline-flex md:flex-grow md:w-auto `}
        >
          <div className='md:inline-flex md:flex-row sm:ml-auto md:w-auto  w-full md:items-center items-start  flex flex-col md:h-auto'>


          <Link href='/Admin/Home/'>
              <a className={`${router.pathname == "/News" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium  items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                Home
              </a>
            </Link>
            <Link href='/Admin/About/'>

              <a className={`${router.pathname == "/About" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                About
              </a>
            </Link>
            <Link href='/Admin/Product/'>
              <a className={`${router.pathname == "/Product" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                Product
              </a>
            </Link>
      

            <Link href='/Admin/Gallery/'>
              <a className={`${router.pathname == "/Gallery" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                Gallery
              </a>
            </Link>
            <Link href='/Admin/Contact'>
              <a className={`${router.pathname == "/Contact" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                Contact
              </a>
            </Link>
            <a  
            style={{cursor:"pointer"}}
              onClick={handleLogOut}
            className={`${router.pathname == "/Logout" ? 'border-b-4 border-blue-600' : ''} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue text-lg font-medium items-center justify-center hover:bg-blue-400 hover:text-gray-200 mx-4`} >
                Logout
              </a>


          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;