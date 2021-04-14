import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Page() {

  const [visible, setVisible] = useState(false);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const services = [
    { icon: "/assets/application-development.png", title: "Aplication Development" },
    { icon: "/assets/business-consultation.png", title: "Bussines Consultation" },
    { icon: "/assets/new-client-acquisition.png", title: "New Client Acquisition" },
    { icon: "/assets/databased-consent.png", title: "Databased Consent" },
    { icon: "/assets/digital-advertising.png", title: "Digital Advertising" },
    { icon: "/assets/data-werehouse.png", title: "Data Werehouse" },
  ];

  const commersialAgreement = [{ title: "White Label" }, { title: "Manage Service" }, { title: "Fee Bassed" }, { title: "Consultation Fee " }];


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const handleVisible = window.scrollY < 200 ? false : true;
      setVisible(handleVisible)
    })
  }, []);

  return (
    <>
      <Layout>
        <button
          onClick={scrollToTop}
          className={`fixed ${visible ? "visible" : "invisible"} transition duration-700 right-10 bottom-20 z-50 bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full  p-3 shadow-md hover:bg-gray-300`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
          </svg>
        </button>


        <div className="">
          <div
            style={{ backgroundSize:"100% 100%", backgroundRepeat: "no-repeat", maxWidth: 1900,maxHeight:1200, margin: "0 auto" }}
            className="home-row1 w-full  md:h-2/3    grid xs:grid-cols-1 lg:grid-cols-2 mx-1">
            <div className="w-full  flex  items-center  py-5  ">
              <div className="w-4/5 xs:lg-auto lg:h-2/3  py-40  ml-14 ">
                <div>
                  <div className="xs:text-3xl md:text-2xl text-gray-700 ">
                    How much your company revenue of digital sales ?<br></br>
                Does your company prepare human resources and support digital application system ?
              </div>
                  <div className="text-gray-500 mt-10 text-justify">
                    Think that all of your company’s sales processes have been digitalized so that potential
                    client have easy accsess for obtaining the product. The sales process has become better
                    and more efficient, the marketing employe serve the clients confidently.
                    The company’s decision maker can see entire sales process anytime,
                    company costs become more efficient and company profits increase immediately.
              </div>
                  <div className="w-full  h-32 xflex items-center justify-center mt-5">
                    <Link href="/Contact" >
                      <button className="border-none outline-none h-12 w-52 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg text-gray-50  ">Request Demo</button>
                    </Link>
                  </div>
                  <span className="text-sm text-gray-600 ">
                    No credit card required. No Strings attached!
                </span>

                </div>
              </div>
            </div>
            <div className=" w-full h-full  xs:hidden md:hidden lg:flex  md-hidden  relative  items-center" >
              <div className=" ml-52 mt-6  xs:hidden md:hidden lg:block xl:block  " >
                <Image
                  src="/assets/vector-home.png"
                  alt="Picture of url"
                  width={750}
                  height={600}
                />
              </div>
            </div>

          </div>

          <div className=" mx-1" style={{maxWidth:1900,margin:"0 auto"}}>
            <div className=" bg-gray-100">

              <div className="">
                <div className="text-4xl py-10 text-gray-600 font-bold  flex justify-center">
                  Our Services
          </div>
                <div className="md:w-full  flex justify-center items-center  py-10 bg-gray-100 grid xs:grid-cols-1 sm:grid-cols-3   gap-1 p-0 ">

                  {services.map((data, index) => {
                    return (
                      <div key={index} className=" min-h-96 sm:w-full xs:w-full flex justify-center items-cennter lg:w-4/5 lg:h-full  m-auto">
                        <div>
                          <div className="m-0">
                            <Image
                              src={`${data.icon}`}
                              width={250}
                              height={250}
                              objectFit="contain"
                            />
                          </div>
                          <div className=" flex justify-center h-24 flex items-center    text-2xl text-gray-600 ">
                            {data.title}
                          </div>
                        </div>
                      </div>
                    )
                  })}


                </div>
              </div>

            </div>
            <div className="bg-gray-100" style={{maxWidth:1900,margin:"0 auto"}}>
              <div className=" py-16 bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue"
                style={{ clipPath: "polygon(0 0, 100% 8%, 100% 91%, 0 100%)", minHeight: 600 }}>
                <div className="p-10 text-4xl  text-gray-50 font-bold  flex justify-center">
                  Our Commercial Agreement
            </div>
                <div>
                  <div className="mt-10 mb-20 flex items-center flex-wrap justify-center py-5 ">
                    {commersialAgreement.map((data, index) => {
                      return (
                        <div key={index} className="h-52 w-72    m-2 flex justify-center items-center " style={{ backgroundImage: "url('/assets/bg-agreement.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}  >
                          <div className="w-36 text-center mt-10 font-bold "   >

                            <span className="ml-4 text-2xl text-bold ">
                              {data.title}
                            </span>
                          </div>
                        </div>

                      )
                    })}

                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-200 mx-1" style={{maxWidth:1900,margin:"0 auto"}}>
            <div className=" bg-gray-100 py-10 relative overflow-hidden flex items-center z-10  py-52 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 81%)", height: "100%", width: "100%" }} >
              <div className="z-20 w-full ">
                <div className="text-4xl text-gray-700 p-5 font-bold z-30  flex justify-center">
                  Our Licensed Aplication
            </div>
                <div className=" w-4/5 z-30  mx-auto flex items-center flex-wrap ">
                  {[1].map((data, index) => {
                    return (
                      <div key={index} className="xs h-96 w-72  mx-auto m-1">
                        <Image
                          src={`/assets/license.png `}
                          width={300}
                          height={420}
                          objectFit="contain"
                        />
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-200 mx-1" style={{maxWidth:1900,margin:"0 auto"}} >
            <div >
              <div className="w-full h-24 bg-gray-200  text-4xl flex items-center  p-4 font-bold text-gray-600 flex justify-center" >
                Our Isales Aplication
          </div>
              <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full ">
                <div className="h-11/12   flex justify-center items-center p-5 ">
                  <Image
                    src='/assets/i-sales-telesales.png'
                    width={400}
                    height={400}
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-center items-center xs:h-auto  lg:min-h-screen ">
                  <div className="w-4/5    m-4 p-4">
                    <div className="text-gray-800 font-bold  text-2xl">
                      i-sales telesales
                  </div>
                    <div className="text-gray-800 my-3 ">
                      The telemarketing necessary will be required cause directly talk with potential client, explain the benefits to product and help make buying process quick and easy.
                  </div>
                    <div>
                      <Link href="/Contact">
                        <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-md text-gray-50">More Info</button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-200  " style={{maxWidth:1900,margin:"0 auto"}}>
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200  min-h-screen  ">
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                  <div className="h-full  flex items-center">
                    <div className="w 4/5 m-4 p-4">
                      <div className="text-gray-700 font-bold  text-2xl">
                        i-sales Learning
                  </div>
                      <div className="text-white my-3 text-gray-700">
                        Training needs will be very high in order to meet the quality of human resources for increasingly complex and digital business needs. Digital training will be a necessity so that it does not take time to work, but can still be filled with elements of adding knowledge, improving skills and changing attitudes.
                        The i-sales Learning application can answer these needs with a complete application module
                  </div>
                      <div>
                        <Link href="/Contact">
                          <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  text-gray-50 rounded-md">More Info</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="  flex justify-center items-center">
                    <Image
                      src='/assets/i-sales-learning.png'
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-800  mx-1" style={{maxWidth:1900,margin:"0 auto"}}>
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200 lg:min-h-screen" style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                  <div className="  flex justify-center items-center p-5">
                    <Image
                      src='/assets/i-sales-agent.png'
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>
                  <div className="h-full  flex items-center">
                    <div className="w 4/5 m-4 p-4">
                      <div className="text-gray-700 font-bold  text-2xl">
                        i-sales Agent
                  </div>
                      <div className="text-white my-3 text-gray-700">
                        The necessary management of marketing employee directly recruitment of digital, coaching, selling, reward, sales trend and analysis dashboard and big data report. Those way make the company more efficient for managing direct sales distribution.
                        Limitations of selling face to face with clients is overcome with an online sales module, it is monitored directly by the company to avoid mistakes in sales
                  </div>
                      <div>
                        <Link href="/Contact">
                          <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-gray-50 rounded-md">More Info</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Layout>



    </>
  )
}

















