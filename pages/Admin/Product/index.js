import Layout from '../../../components/Layout';
import TextArea from '../../../components/TextArea';
import OptionButton from '../../../components/OptionButton';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react';



const Product = () => {

    const [salesIndexEdit, SetSalesIndexEdit] = useState("");
    const [salesOnEditing, SetSalesOnEditing] = useState(false)

    const solutions = [
        {
            title: "Data Warehouse & Business Intelligent",
            description: "Whether you are building a new Data Warehouse, or re-architecting and consolidating your existing data stores,Arwics offers a full spectrum of Data Warehousing Solutions and Services that span technology, tools,platforms and methodologies We are also to help people and organisations make better data-driven decisions in an increasingly complex environment. Using leading software tools, our business intelligence consulting and development experts allow enterprises to easily obtain snapshot views of their sales, marketing, financial, supply chain and other departmental operational data.",
            icons: "/assets/data-werehouse-product.png"
        },

        {
            title: "Resources Management",
            description: "As we have seen in this HR series for small businesses, there are some human resource requirements that are very important for small businesses. You need to hire  the right people, offer competitive salaries and benefits,  provide effective training, and more. But in most small  businesses, resources are very limited. With little reserve to attract and many competing priorities, it is difficult to justify the costs of hiring a dedicated HR team. Thus, the HR function can be part-time responsibilities for other owners or managers, so they don’t always get the attention they deserve. In this scenario, outsourcing some or all of  your HR functions to an external provider can give you a lot of sense.",
            icons: '/assets/resource-management.png'
        },
        {
            title: "Enterprise Application Development",
            description: "Arwics is strongly focused on creating customer oriented software applications. The development team minutely examines and analyses the existing processes of the clients. It does the gap analysis to ensure complete compatibility between existing system and custom developed application. The supplications are designed, tested and deployed to complete satisfaction of the clients.",
            icons: '/assets/application-development-product.png'
        }

    ]



    return (
        <Layout title="Product">
            <div
                style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", }}
                className="home-row1 w-full xs:h-auto   md:h-2/3 grid grid-cols-1 lg:grid-cols-5  xs:h-auto   lg:max-h-max xl:h-screen">
                <div className="w-full min-h-full flex justify-center items-center  py-5 col-span-2  ">
                    <div className="xs:w-4/5 md:w-full h-2/3 xs:p-0 lg:py-12  xs:my-20 md:p-10  md:my-0 xl:my-12 ">
                        <div>
                            <div className="xs:text-5xl md:text-6xl text-yellow-400 font-bold bg-red-200">
                                Products
                       </div>
                            <div className="text-gray-700 mt-10  text-2xl ">
                                <TextArea value=" Think that all of your company’s sales processes have been digitalized so that potential
                            client have easy accsess for obtaining the product. The sales process has become better
                            and more efficient, the marketing employe serve the clients confidently.
                            The company’s decision maker can see entire sales process anytime ,
                            company costs become more efficient and company profits increase immediately." onChange={() => { }} />
                            </div>
                            <button className="w-24 h-10 bg-blue-200 text-gray-50 text-sm ">Update</button>
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
                                            width={200}
                                            height={350}
                                            objectfit="cover"
                                        />
                                    </div>
                                    <div className="h-full w-1/2  flex justify-center items-center m-1 ">
                                        <Image
                                            src='/assets/isales2.png'
                                            width={200}
                                            height={350}
                                            objectfit="cover"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className=" flex justify-center items-center">
                                <div className="w-5/6 h-5/6  flex items-center xs:p-0 lg:p-10 ">
                                    <div className="">
                                        <span className="text-5xl text-gray-50  font-bold mb-2">I-Sales</span><br />
                                        <div className="text-gray-50  text-xl mt-3">
                                            <span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br />
                                        </div>

                                        <div className="w-full h-24 mb-20    flex justify-center items-center text-gray-700">
                                            <Link href="/Comtact" >
                                                <button className=" w-52 h-12 bg-yellow-400 rounded-lg">More Info</button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="bg-gray-200 pb-44 pb-">
                            <div className="w-full h-24 bg-ray-300   justify-center text-6xl flex items-center  p-4 font-bold text-gray-700">
                                Solutions
                        </div>

                            {solutions.map((data, index) => {
                                return (
                                        <div className=" bg-gray-200 grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-3/4 mx-auto  mt-1  bg-red-50 p-3 rounded-mdch">
                                            <div className="h-11/12 items-center flex justify-center items-center xs:py-0 md:py-10 lg:py-10 px-20  ">
                                                <Image
                                                    src='/assets/data-werehouse-product.png'
                                                    width={370}
                                                    height={370}
                                                    objectfit="contain"
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
                                        
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Product;