import Layout from '../../components/Layout';

const About = () => {

     
    return ( 
        <Layout title="About">
             <div className="h-screen bg-blue-400 flex items-center">
             <div className="h-4/6 w-1/2 bg-red-300 flex items-center justify-center">
                  <div className="text-9xl">
                       Logo
                  </div>
             </div>
             <div className="h-4/6 w-1/2 bg-red-700 text-4xl flex items-center justify-center ">
                  Description
             </div>
             </div>
        </Layout>
     );
}
 
export default About;