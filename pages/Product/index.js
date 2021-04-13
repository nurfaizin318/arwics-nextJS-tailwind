import Layout from '../../components/Layout';
import Image from 'next/image';



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
            style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", }}
            className="home-row1 w-full min-h-screen md:h-2/3 lg:h-1/2  grid grid-cols-1 lg:grid-cols-3 product  bg-gray-200 ">
            <div className="w-full min-h-full flex justify-center items-center  py-5  ">
              <div className="w-4/5 h-2/3 p-5 ">
                <div>
                  <div className="xs:text-5xl md:text-6xl text-yellow-400 font-bold">
                  Products
              </div>
                  <div className="text-gray-500 mt-10">
                    Think that all of your company’s sales processes have been digitalized so that potential
                    client have easy accsess for obtaining the product. The sales process has become better
                    and more efficient, the marketing employe serve the clients confidently.
                    The company’s decision maker can see entire sales process anytime ,
                    company costs become more efficient and company profits increase immediately.
              </div>
               

                </div>
              </div>
            </div>
            <div className=" w-full h-full xs:hidden md:hidden lg:flex  relative md-hidden overflow-hidden  items-center  col-span-2">
              <div className=" ml-52 mt-6  xs:hidden md:hidden lg:block xl:block  " >
                <Image
                  src="/assets/product-vector.png"
                  alt="Picture of url"
                  width={700}
                  height={600}
                />
              </div>
            </div>

          </div>
            <div className="bg-gray-800 mx-1">
                <div className="bg-green-200"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
                >
                    <div className="bg-gray-200">
                        <div className="xs:py-20 lg:p-0 w-full min-h-screen bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue grid xs:grid-cols-1   lg:grid-cols-2"
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
                                    <div className="h-full w-1/2  flex justify-center items-center m-1">
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
                                <div className="w-5/6 h-5/6  flex items-center p-10">
                                <div className="">

                                    <span className="text-3xl text-gray-50  font-bold">I-Sales</span><br/>
                                    <span className="text-gray-50 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br/>
                                    <div className="w-full h-24  flex justify-center items-center text-gray-700">
                                        <button className=" w-52 h-12 bg-yellow-400 rounded-lg">More Info</button>

                                    </div>
                                </div>
                               
                                </div>
                              

                            </div>

                        </div>
                        <div className="bg-gray-200 ">
                            <div className="w-full h-24 bg-ray-100  text-4xl flex items-center  p-4 font-bold text-gray-800f">
                                Isales Product
                            </div>
                            <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full p-3 ">
                                <div className="h-11/122   flex justify-center items-center ">
                                    <Image
                                        src='/assets/data-werehouse-product.png'
                                        width={450}
                                        height={450}
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="flex justify-center items-center min-h-screen">
                                    <div className="w-4/5    m-4 p-4">
                                        <div className="text-gray-800 font-bold  text-2xl">
                                            Data werehouse & Bussines Intelegent
                                        </div>
                                        <div className="text-gray-800 my-3 ">
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
                        <div className="bg-gray-800  ">
                            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200  min-h-screen p-5 ">
                                <div>
                                    <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">

                                        <div className="h-full  flex items-center">
                                            <div className="w 4/5 m-4 p-4">
                                                <div className="text-gray-700 font-bold  text-2xl">
                                                    Resource Management
                                                </div>
                                                <div className="text-white my-3 text-gray-700">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </div>
                                                <div>
                                                    <button className="w-40 h-12 bg-yellow-400  text-gray-700 rounded-md">More Info</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="  flex justify-center items-center">
                                            <Image
                                                src='/assets/resource-management.png'
                                                width={450}
                                                height={450}
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* section */}
                        <div className="bg-gray-800  ">
                            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200 p-3 min-h-screen" style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
                                <div>
                                    <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                                        <div className="  flex justify-center items-center">
                                            <Image
                                                src='/assets/application-development-product.png'
                                                width={450}
                                                height={450}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <div className="h-full  flex items-center">
                                            <div className="w 4/5 m-4 p-4">
                                                <div className="text-gray-700 font-bold  text-2xl">
                                                    Enterprise Aplication Development
                                                </div>
                                                <div className="text-white my-3 text-gray-700">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </div>
                                                <div>
                                                    <button className="w-40 h-12 bg-yellow-400  text-gray-700 rounded-md">More Info</button>
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
            <button
                onClick={scrollToTop}
                className="absolute bg-gray-50 h-16 w-16 flex justify-center items-center rounded-full right-10 p-4 hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </Layout>
    );
}

export default Product;