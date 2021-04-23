import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import TextInputs from '../../../components/TextInputs';
import TextArea from "../../../components/TextArea"

export default function Page() {

  const [visible, setVisible] = useState(false);
  const [modalLicensed, setModalLicensed] = useState(false);
  const [indexEdit, setIndexEdit] = useState("");
  const [onEditing, setOnEditing] = useState(false)


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
                src={`/assets/isales2.png `}
                width={500}
                height={650}
                objectFit="contain"
                alt="agreement"
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
            className=" w-full  md:h-2/3    grid xs:grid-cols-1 lg:grid-cols-2 mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen " >
            <div className="w-full  flex  items-center  pt-20  ">
              <div className="w-4/5 h-auto xs:lg-auto  mx-5 p-2 ">
                <div >
                  <div className="xs:text-2xl  lg:text-2xl xl:text-xl  text-gray-700 font-bold ">
                    <TextInputs
                      value="How much your company revenue of digital sales ?"
                    />
                    <TextInputs
                      value=" Does your company prepare human resources and support digital application system ?"
                    />
                    <TextArea value="  Think that all of your company’s sales processes have been digitalized so that potential
                    client have easy accsess for obtaining the product. The sales process has become better
                    and more efficient, the marketing employe serve the clients confidently.
                    The company’s decision maker can see entire sales process anytime,
                    company costs become more efficient and company profits increase immediately."/>
                  </div>
                  <div className="w-full  xflex items-center justify-center mt-2 mb-3">
                    <Link href="/Contact" >
                      <button className="border-none outline-none h-12 w-52 bg-blue-500 rounded-lg text-gray-50  ">update</button>
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

              </div>
            </div>

          </div>

          <div className=" mx-1" >
            <div className=" bg-gray-100">

              <div className="">
                <div className="text-4xl py-10 text-gray-600 font-bold  flex justify-center">
                  Our Services
               </div>
                <div className="md:w-full  justify-center  items-center flex flex-wrap p-0 ">

                  {services.map((data, index) => {
                    return (
                      <div className="p-2  m-3">
                        <div className="h-10 w-full px-1  flex items-center">
                          <button className={` ${onEditing && indexEdit == index ? "" : "hidden"} h-8 w-8 bg-blue-600 rounded-full flex justify-center items-center m-1`} onClick={() => setOnEditing(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <button className="h-8 w-8 bg-green-700 rounded-full flex justify-center items-center m-1" onClick={() => { setOnEditing(true); setIndexEdit(index) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </button>
                          <button className="h-8 w-8 bg-red-600 rounded-full flex justify-center items-center m-1" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="white">
                              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                          </button>


                        </div>
                        <div key={index} className="border-2 border-blue-200 m-2 rounded-lg text-center min-h-96 w-44 flex justify-center items-cennter  lg:h-full   ">
                          <div>
                            <div className="p-1">
                              {onEditing && indexEdit == index ?

                                <div className="w-40 h-28 bg-blue-200 flex justify-center items-center rounded-lg" style={{cursor:"pointer"}}>
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                  </svg>
                                </div> :

                                <Image
                                  src={`${data.icon}`}
                                  width={110}
                                  height={110}
                                  objectFit="contain"
                                />
                              }
                            </div>
                            <div className=" flex justify-center h-14 flex items-center p-1   text-sm text-gray-600 ">
                              {onEditing && indexEdit == index ?

                                <TextInputs value={data.title} /> : data.title
                              }
                            </div>
                            <div className="h-12 w-full my-1 p-1">
                              <button className={` ${onEditing && indexEdit == index ? "" : "hidden"}  w-full h-10 bg-purple-600 text-white rounded-md mt-1`}>update</button>
                            </div>
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
            <div className=" bg-gray-100 py-10 relative overflow-hidden flex items-center z-10  pb-44 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 81%)", height: "100%", width: "100%" }} >
              <div className="z-20 w-full ">
                <div className="text-4xl text-gray-700 p-5 font-bold z-30  flex justify-center">
                  Our Licensed Aplication
                </div>
                <div className="w-4/5 z-30  mx-auto flex items-center flex-wrap  py-10">
                  {[1].map((data, index) => {
                    return (
                      <div key={index} className="h-96 w-72  mx-auto m-1 " style={{ cursor: "pointer" }} onClick={() => setModalLicensed(true)}>
                        <Image
                          src={`/assets/agreement12.webp`}
                          width={300}
                          height={400}
                          objectFit="contain"
                          alt="agreement"
                        />
                      </div>
                    )
                  })}

                </div>
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

















