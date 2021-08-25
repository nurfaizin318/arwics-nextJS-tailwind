import Link from 'next/link';
const Footer = () => {


    const year = new Date().getFullYear();

    return (
        <div className="min-h-96 min-h-16   bg-gray-800  mx-1" >
            <div className=" flex flex-wrap justify-center " style={{ maxWidth: 1900, margin: "0 auto" }}>
                <div className="text-gray-50  p-10 m-2  xs:w-full sm:w-full md:w-1/2 lg:w-1/4">
                  
                    <div className="mt-6">
                        We are ready challange
                        info@arwics.com
               </div>
                </div>
                <div className="text-gray-50   p-10 m-2 xs:w-full sm:w-full md:w-1/2 lg:w-1/4">
                
                    <div className="mt-6">
                        The CEO Building, 9 Floor <br></br>
                        Jl. TB Simatupang No. 18C Jakarta 12430
                        082129222999
                 </div>
                </div>
                <div className="text-gray-50 p-5 flex justify-center m-2 xs:w-full sm:w-screen md:w-1/2 lg:w-1/4 ">
                    <div className="w-44 h-44 grid grid-flow-col grid-cols-2 grid-rows-2 ">
                        <Link href="https://www.instagram.com/arwictech/">
                        <div className=" flex justify-center items-center" style={{cursor:"pointer"}}>
                            <img
                                src='/assets/instagram.png'
                                style={{ objectFit: "contain", width: 40, height: 40 }}
                            />
                        </div>
                        </Link>
                        <Link href="https://www.facebook.com/Arwic-Technologi-Solusindo-101076522207650">
                        <div className=" flex justify-center items-center" style={{cursor:"pointer"}}>
                            <img
                                src='/assets/facebook.png'

                                style={{ objectFit: "contain", width: 40, height: 40 }}
                            />
                        </div>
                        </Link>
                        <div className=" flex justify-center items-center" style={{cursor:"pointer"}}>
                            <img
                                src='/assets/youtube.png'
                                style={{ objectFit: "contain", width: 40, height: 40 }}
                            />
                        </div>
                        <div className=" flex justify-center items-center" style={{cursor:"pointer"}}>
                            <img
                                src='/assets/twitter.png'
                                style={{ objectFit: "contain", width: 40, height: 40 }}
                            />
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-full h-24 flex justify-center items-center text-gray-50 text-lg">
                Copyright Arwics {year}
            </div>
        </div>
    );
}

export default Footer;