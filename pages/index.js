import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Page() {

  const [visible, setVisible] = useState(false);
  const [modalLicensed, setModalLicensed] = useState(false)



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
        {/* //Modal Licensed Agreement  */}

        <div className={`${modalLicensed ? "" : "hidden"} w-screen h-screen z-50 fixed right-0 top-0  flex items-center justify-center p-5`} style={{ backgroundColor: "rgba(38,50,56 ,0.7)" }} >

          <div className="xs:w-full md:w-3/4  xl:w-1/2 xs:h-5/6 xl:h-full bg-gray-50 overflow-auto">
            <div className=" w-full h-20  flex justify-end">
              <div className=" w-20 h-20  flex justify-center items-center font-bold text-3xl" onClick={() => setModalLicensed(false)} style={{ cursor: "pointer" }}>
                x
              </div>


            </div>
            <div className="w-auto h-auto flex justify-center items-center">
              <Image
                src={`/assets/licensed.png `}
                width={500}
                height={650}
                objectFit="contain"
              />
            </div>
          </div>

        </div>



        {/* //=========================================== */}


        <button
          onClick={scrollToTop}
          className={`fixed ${visible ? "visible" : "invisible"} transition duration-700 right-10 bottom-20 z-50 bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full  p-3 shadow-md hover:bg-gray-300`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
          </svg>
        </button>


        <div className="">
          <div
            style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", margin: "0 auto", }}
            className="home-row1 w-full  md:h-2/3    grid xs:grid-cols-1 lg:grid-cols-2 mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen " >
            <div className="w-full  flex  items-center  pt-20  ">
              <div className="w-4/5 h-auto xs:lg-auto  mx-5 p-2 ">
                <div >
                  <div className="xs:text-2xl  lg:text-2xl xl:text-xl  text-gray-700 font-bold ">
                    How much your company revenue of digital sales ?<br></br>
                Does your company prepare human resources and support digital application system ?
              </div>
                  <div className="text-gray-500 mt-10 text-md text-justify">
                    Think that all of your company’s sales processes have been digitalized so that potential
                    client have easy accsess for obtaining the product. The sales process has become better
                    and more efficient, the marketing employe serve the clients confidently.
                    The company’s decision maker can see entire sales process anytime,
                    company costs become more efficient and company profits increase immediately.
              </div>
                  <div className="w-full  xflex items-center justify-center mt-7 mb-3">
                    <Link href="/Contact" >
                      <button className="border-none outline-none h-12 w-52 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg text-gray-50  ">Request Demo</button>
                    </Link>
                  </div>
                  <span className="text-sm text-gray-600  ">
                    No credit card required. No Strings attached!
                </span>

                </div>
              </div>
            </div>
            <div className=" w-full h-full  xs:hidden md:hidden lg:flex  md-hidden  relative  items-center" >
              <div className=" ml-12 mt-6  xs:hidden md:hidden lg:block xl:block  " >
                <Image
                  src="/assets/vector-home.png"
                  alt="Picture of url"
                  width={750}
                  height={600}
                />
              </div>
            </div>

          </div>

          <div className=" mx-1" >
            <div className=" bg-gray-100">

              <div className="">
                <div className="text-4xl py-10 text-gray-600 font-bold  flex justify-center">
                  Our Services
               </div>
                <div className="md:w-full  flex justify-center items-center  py-10 bg-gray-100 grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2  lg:grid-cols-3  gap-1 p-0 ">

                  {services.map((data, index) => {
                    return (
                      <div key={index} className=" text-center min-h-96 sm:w-full xs:w-full flex justify-center items-cennter lg:w-4/5 lg:h-full  m-auto ">
                        <div>
                          <div className="p-5">
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
            <div className="bg-gray-100" >
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
          <div className="bg-gray-200 mx-1" >
            <div className=" bg-gray-900 py-10 relative overflow-hidden flex items-center z-10  pb-44 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 81%)", height: "100%", width: "100%" }} >
              <div className="z-20 w-full ">
                <div className="text-4xl text-gray-700 p-5 font-bold z-30  flex justify-center">
                  Our Licensed Aplication
                </div>
             
                        <Image
                          src={`/assets/goal.png`}
                          width={400}
                          height={400}
                          objectFit="cover"
                        />
                  
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-200 mx-1"  >
            <div >
              <div className="w-full h-24 bg-gray-200  text-5xl flex items-center  p-4 font-bold text-gray-600 flex justify-center" >
                Our Isales Aplication
          </div>
              <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full   ">
                <div className="h-11/12   flex justify-center items-center p-5  xs:my-0 lg:my-20 ">
                  <Image
                    src='/assets/i-sales-telesales.png'
                    width={400}
                    height={400}
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-center items-center xs:h-auto  xs:my-0 lg:my-20 ">
                  <div className="w-4/5  m-4 p-4">
                    <div className="text-gray-800 font-bold  text-5xl">
                      i-Sales telesales
                  </div>
                    <div className="text-gray-800 text-xl my-3 ">
                      The telemarketing necessary will be required cause directly talk with potential client, explain the benefits to product and help make buying process quick and easy.
                  </div>
                    <div>
                      <Link href="/Contact">
                        <button className="w-40 h-12 my-10 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-md text-gray-50">More Info</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-200 mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200   ">
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 xs:py-0 lg:py-20 ">
                  <div className="h-full  flex items-center">
                    <div className="w 4/5 m-4 p-4">
                      <div className="text-gray-700 font-bold  text-5xl">
                        i-Sales Learning
                     </div>
                      <div className="text-white my-3 text-xl text-gray-700">
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
                  <div className="  flex justify-center items-center xs:py-0 lg:py-20">
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
          <div className="bg-gray-800  mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200 lg:min-h-screen" style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                  <div className="  flex justify-center items-center p-5 xs:py-0 lg:py-20">
                    <Image
                      src='/assets/i-sales-agent.png'
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>
                  <div className="h-full  flex items-center xs:py-0 lg:py-20">
                    <div className="w 4/5 m-4 p-4">
                      <div className="text-gray-700 font-bold  text-5xl">
                        i-Sales Agent
                  </div>
                      <div className="text-white my-3 text-xl text-gray-700">
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

















