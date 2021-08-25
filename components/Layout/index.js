import Navbar from '../Navbar';
import NavbarAdmin from '../NavbarAdmin';
import Footer from '../Footer';
import Head from 'next/head';
// import ButtonToTop from '../ButtonToTop';
import React, { useEffect, useState } from 'react'
import Router, { useRouter } from "next/router";
import WhatsappButton from '../whatsapp';

const Layout = ({ children, title }) => {

     const router = useRouter();


     const SetNavbar = () => {
          if (router.pathname.startsWith("/Admin")) {
               return <NavbarAdmin />
          }

          else {
               return <Navbar />
          }
     }


     return (
          <div className="flex flex-col h-full justify-between  "  >
               <Head>
                    <title>{title}</title>
                    <link rel="icon" href='/favicon.png' />
                    <script
                         async
                         src={`https://www.googletagmanager.com/gtag/js?id=[G-52PFTY4EQ2]`}
                    />

                    <script
                         dangerouslySetInnerHTML={{
                              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[G-52PFTY4EQ2]', { page_path: window.location.pathname });
            `,
                         }}
                    />
               </Head>
               {/* {login == true ? NavbarAdmin : Navbar    } */}

               <SetNavbar />
               <div className="z-5 m-0 p-0" style={{ maxWidth: 1900,}} >
                    {/* <ButtonToTop /> */}
                    {children}
                    <WhatsappButton />
               
               </div>
               <Footer />
          </div>

     );
}

export default Layout;