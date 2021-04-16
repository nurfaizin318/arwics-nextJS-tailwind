import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link'



const Product = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <Layout title="Product">
            <div
                style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",}}
                className="home-row1 w-full xs:h-auto   md:h-2/3 grid grid-cols-1 lg:grid-cols-5  xs:h-auto   lg:max-h-max xl:h-screen">
                <div className="w-full min-h-full flex justify-center items-center  py-5 col-span-2  ">
                    <div className="xs:w-4/5 md:w-full h-2/3 xs:p-0 lg:py-12  xs:my-20 md:p-10  md:my-0 xl:my-36  ">
                        <div>
                            <div className="xs:text-5xl md:text-6xl text-yellow-400 font-bold">
                                Products
                           </div>
                            <div className="text-gray-500 mt-10  my-20 ">
                                Think that all of your company’s sales processes have been digitalized so that potential
                                client have easy accsess for obtaining the product. The sales process has become better
                                and more efficient, the marketing employe serve the clients confidently.
                                The company’s decision maker can see entire sales process anytime ,
                                company costs become more efficient and company profits increase immediately.
                             </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full  xs:hidden md:hidden lg:flex  justify-center relative md-hidden  items-center  col-span-3 xs:hidden lg:block">
                    <div className="mt-6  xs:hidden md:hidden lg:block xl:block xs:px-20 lg:px:0 " >
                        <Image
                            src="/assets/product-vector.png"
                            alt="Picture of url"
                            width={650}
                            height={550}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 mx-1">
                <div className="bg-green-200"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
                >
                    <div className="bg-gray-200">
                        <div className="xs:py-20 lg:py-40 w-full  bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue grid xs:grid-cols-1   lg:grid-cols-2"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
                        >
                            <div className=" flex justify-center items-center flex">
                                <div className="w-5/6 h-3/4 flex ">
                                    <div className="h-full w-1/2    flex justify-center items-center m-1">
                                        <Image
                                            src='/assets/isales1.png'
                                            width={250}
                                            height={450}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="h-full w-1/2  flex justify-center items-center m-1 ">
                                        <Image
                                            src='/assets/isales2.png'
                                            width={250}
                                            height={450}
                                            objectFit="cover"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className=" flex justify-center items-center">
                                <div className="w-5/6 h-5/6  flex items-center xs:p-0 lg:p-10 ">
                                    <div className="">
                                        <span className="text-3xl text-gray-50  font-bold">I-Sales</span><br />
                                        <span className="text-gray-50 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br />
                                        <div className="w-full h-24 mb-20    flex justify-center items-center text-gray-700">
                                            <Link href="/Comtact" >
                                                <button className=" w-52 h-12 bg-yellow-400 rounded-lg">More Info</button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="bg-gray-200 ">
                            <div className="w-full h-24 bg-ray-100   justify-center text-6xl flex items-center  p-4 font-bold text-gray-700">
                                Solutions
                            </div>
                            <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full p-3  ">
                                <div className="h-11/122  items-center flex justify-center items-center xs:px-20 lg:px:0 ">
                                    <Image
                                        src='/assets/data-werehouse-product.png'
                                        width={370}
                                        height={370}
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="flex justify-center  items-center  ">
                                    <div className="w-full  m-4 p-4">
                                        <div className="text-gray-800 font-bold  text-2xl">
                                            Data werehouse & Bussines Intelegent
                                        </div>
                                        <div className="text-gray-800 my-3 text-justify ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        <div>
                                            <button className="w-40 h-12 bg-yellow-400 rounded-md text-gray-700">More Info</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* section */}
                        <div className="bg-gray-700  ">
                            <div className="lg:pb-0 w-full xs:py-0 md:py-32  p-3   ">
                                <div>
                                    <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">

                                        <div className="h-full  flex items-center ">
                                            <div className="w-full  p-4">
                                                <div className="text-gray-50 font-bold  text-2xl">
                                                    Resource Management
                                                </div>
                                                <div className="text-white my-3 text-gray-50 text-justify">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </div>
                                                <div>
                                                    <Link href="/Contact">
                                                        <button className="w-40 h-12 bg-yellow-400  text-gray-700 rounded-md">More Info</button>

                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="  flex justify-center items-center xs:p-20 md:p-5 lg:p-10  ">
                                            <Image
                                                src='/assets/resource-management.png'
                                                width={370}
                                                height={370}
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* section */}
                        <div className="bg-gray-800  ">
                            <div className="  lg:pb-0 w-full bg-gray-300 p-3 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
                                <div>
                                    <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2  py-32 ">
                                        <div className="  flex justify-center items-center xs:px-20  md:px-20 lg:px:0">
                                            <Image
                                                src='/assets/application-development-product.png'
                                                width={370}
                                                height={370}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w 4/5 m-4 p-4">
                                                <div className="text-gray-700 font-bold  text-2xl">
                                                    Enterprise Aplication Development
                                                </div>
                                                <div className="text-white my-3 text-gray-700 text-justify">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </div>
                                                <div>
                                                    <Link href="/Contact">
                                                        <button className="w-40 h-12 bg-yellow-400  text-gray-700 rounded-md">More Info</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </Layout>
    );
}

export default Product;