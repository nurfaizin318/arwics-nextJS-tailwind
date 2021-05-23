import Navbar from '../Navbar';
import NavbarAdmin from '../NavbarAdmin';
import Footer from '../Footer';
import Head from 'next/head';
import ButtonToTop from '../ButtonToTop';
import React from 'react'
import { useRouter } from "next/router";


const Layout = ({ children,title }) => {

const router = useRouter();

const auth = async() =>{
     const status = await localStorage.getItem("logged")
     return status;


}

const SetNavbar = () =>{
      if (router.pathname.startsWith("/Admin")) {
           return <NavbarAdmin />
      }
      
      else{
           return <Navbar />
      }
}


     return (
          <div className="flex flex-col h-full justify-between  "  >
               <Head>
                    <title>{title}</title>
                    <link rel="icon" href='/favicon.png' />
               </Head>
               {/* {login == true ? NavbarAdmin : Navbar  } */}

               <SetNavbar />
               <div className="z-5" style={{maxWidth:1900,margin:"0 auto",}} >
                    <ButtonToTop />
                    {children}
               </div>
               <Footer />
          </div>

     );
}

export default Layout;