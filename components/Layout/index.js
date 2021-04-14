import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';


const Layout = ({ children,title }) => {
     return (
          <div className="flex flex-col h-full justify-between " >
               <Head>
                    <title>{title}</title>
                    <link rel="icon" href='/favicon.png' />
               </Head>
               <Navbar  />
               <div className="z-5" style={{maxWidth:1900,margin:"0 auto"}} >
                    {children}
               </div>
               <Footer />
          </div>

     );
}

export default Layout;