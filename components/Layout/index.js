import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';


const Layout = ({ children,title }) => {
     return (
          <div className="flex flex-col h-full justify-between">
               <Head>
                    <title>{title}</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <Navbar  />
               <div className="z-5" >
                    {children}
               </div>
               <Footer />
          </div>

     );
}

export default Layout;