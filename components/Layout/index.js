import Navbar from '../Navbar';
import NavbarAdmin from '../NavbarAdmin';
import Footer from '../Footer';
import Head from 'next/head';
import ButtonToTop from '../ButtonToTop';
import React from 'react'


const Layout = ({ children,title }) => {


const auth = async() =>{
     const status = await localStorage.getItem("logged")
     return status;

}

React.useEffect(()=>{
console.log(auth)
},[])

     return (
          <div className="flex flex-col h-full justify-between  "  >
               <Head>
                    <title>{title}</title>
                    <link rel="icon" href='/favicon.png' />
               </Head>
               {/* {login == true ? NavbarAdmin : Navbar  } */}
               <Navbar  />
               <div className="z-5" style={{maxWidth:1900,margin:"0 auto",}} >
                    <ButtonToTop />
                    {children}
               </div>
               <Footer />
          </div>

     );
}

export default Layout;