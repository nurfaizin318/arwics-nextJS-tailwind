import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({children}) => {
    return ( 
        <div className="flex flex-col h-screen justify-between">
        <Navbar />
             {children}
        <Footer  />
      </div>
      
     );
}
 
export default Layout;