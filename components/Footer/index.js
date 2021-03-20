

const Footer = () => {

        const year = new Date().getFullYear();
        
    return ( 
            <div className=" h-14 flex flex-wrap bg-gray-800 content-center justify-center ">
                <span className="text-white text-sm">coyright - Arwics @ {year}</span>
            </div>
     );
}
 
export default Footer;