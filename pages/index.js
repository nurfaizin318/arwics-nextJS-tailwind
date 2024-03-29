import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import config from "../constanta/index";
import firebase from '../Config/firebase';

export default function Page({ banner, service, agreement, license, application }) {



  React.useEffect(() => {
    firebase.analytics()
  }, [])
  const [modalLicensed, setModalLicensed] = useState(false)
  const titleBanner = banner[0].title
  const [licenseFile, setLicenseFile] = useState("")



  const bg_card = ["bg-yellow-400", "bg-red-400", "bg-blue-400", "bg-yellow-400", "bg-red-400", "bg-blue-400", "bg-yellow-400", "bg-red-400", "bg-blue-400"]
  const commersialAgreement = [{ title: "White Label" }, { title: "Manage Service" }, { title: "Fee Bassed" }, { title: "Consultation Fee " }];


  return (
    <Layout title="Main">
      {/* //Modal Licensed Agreement  */}

      <div className={`${modalLicensed ? "" : "hidden"} w-screen h-screen z-50 fixed right-0 top-0  flex items-center justify-center p-5`} style={{ backgroundColor: "rgba(38,50,56 ,0.7)" }} >

        <div className="xs:w-full md:w-3/4  xl:w-1/2 xs:h-5/6 xl:h-full bg-gray-50 overflow-auto">
          <div className=" w-full h-20  flex justify-end">
            <div className=" w-20 h-20  flex justify-center items-center font-bold text-3xl" onClick={() => setModalLicensed(false)} style={{ cursor: "pointer" }}>
              x
              </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center">
            <img
              src={licenseFile}
              width={500}
              height={650}
              objectfit="contain"
              alt="agreement"
            />
          </div>
        </div>

      </div>

      {/* //=========================================== */}


      <div className="">
        <div
          style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", margin: "0 auto", }}
          className="home-row1 w-full  md:h-2/3    grid xs:grid-cols-1 lg:grid-cols-2 mx-1 xs:max-h-full xs:h-auto   lg:max-h-max xl:max-h-max xl:h-screen " >
          <div className="w-full  flex  items-center    ">
            <div className="xs:w-full lg:w-4/5 h-auto xs:lg-auto  mx-5 p-2 mt-20">
              <div >
                <div className=" text-gray-700 font-bold"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.3rem)", lineHeight: "25px", display: "block", marginTop: 0 }}
                >
                  {/* How much your company revenue of digital sales ?<br></b                                                                                                                                                                                                                                                                                                                                                                            r>
                Does your company prepare human resources and support digital application system ? */}
                  {<div dangerouslySetInnerHTML={{ __html: titleBanner.replace(/\n/g, '<br />') }} />}

                </div>
                <div className="text-gray-500 mt-5 text-md text-justify">
                  {banner[0].description

                  }
                  {/* Think that all of your company’s sales processes have been digitalized so that potential
                    client have easy accsess for obtaining the product. The sales process has become better
                    and more efficient, the marketing employe serve the clients confidently.
                    The company’s decision maker can see entire sales process anytime,
                    company costs become more efficient and company profits increase immediately. */}
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
              <img
                src="/assets/vector-home.webp"
                alt="Picture of url"
                width={750}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className=" mx-1 mt-10" >
          <div className=" bg-gray-100">
            <div className="">
              <div className="text-4xl py-10 text-gray-600 font-bold  flex justify-center">
                Our Services
               </div>
              <div className="md:w-full  flex justify-center items-center  py-10 bg-gray-100 grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2  lg:grid-cols-3  gap-1 p-0 ">
                {service.map((data, index) => {
                  return (
                    <div key={index} className=" text-center min-h-96 sm:w-full xs:w-full flex justify-center items-cennter lg:w-4/5 lg:h-full  m-auto ">
                      <div className=" flex flex-col items-center w-72">
                        <div className="p-5 h-64 w-64  mx-center">
                          <img
                            src={`${data.image}`}
                            width={250}
                            height={250}
                            objectfit="contain"
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
              <div className="p-10 text-4xl  mt-10 text-gray-50 font-bold  flex justify-center">
                Our Commercial Agreement
            </div>
              <div>
                <div className="mt-10 mb-20 flex items-center flex-wrap justify-center py-5 ">
                  {agreement.map((data, index) => {
                    return (
                      <div key={index} className="h-80 w-52 rounded-lg   flex flex-col items-center my-2 mx-10 relative"   >
                        <div className="w-44 h-24 bg-gray-50  " style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}   >
                        </div>
                        <div className={`h-56 w-full ${bg_card[index]} absolute top-16 rounded-lg flex justify-center items-center text-gray-50 text-2xl text-center pt-5 `}>
                          {data.title}
                        </div>
                        <div className="w-32 h-32 bg-gray-50  absolute flex justify-center items-center " style={{ borderRadius: "50%" }}>
                          <div className={`h-3/5 w-3/5 ${bg_card[index]} `}
                            style={{
                              borderRadius: "50%",
                              boxShadow: "  0 6.7px 5.3px rgba(0, 0, 0, 0.048),  0 22.3px 17.9px rgba(0, 0, 0, 0.072),  0 100px 80px rgba(0, 0, 0, 0.12)"
                            }}>
                          </div>
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
        <div className="bg-gray-300 mx-1" >
          <div className=" bg-gray-100 py-10 relative overflow-hidden flex items-center z-10  pb-44 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 81%)", height: "100%", width: "100%" }} >
            <div className="z-20 w-full ">
              <div className="text-4xl text-gray-700 p-5 font-bold z-30  flex justify-center">
                Our Licensed Aplication
                </div>
              <div className="w-4/5 z-30  mx-auto flex items-center flex-wrap  py-10">
                {license.map((data, index) => {
                  return (
                    <div key={index} className="h-96 w-72  mx-auto m-1 " style={{ cursor: "pointer" }} onClick={() => { setModalLicensed(true); setLicenseFile(data.license) }}>
                      <img
                        src={`${data.license_file}`}
                        width={300}
                        height={400}
                        objectfit="contain"
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
        <div className="bg-gray-300 mx-1">
          <div >
            <div className="w-full h-24 bg-gray-300  text-5xl flex items-center  p-4 font-bold text-gray-600 flex justify-center" >
              Our i-sales Application
          </div>
            {application.map((data, index) => {
              return (
                index % 2 == 0 ?
                  <div key={index} className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full   ">
                    <div className="h-11/12   flex justify-center items-center p-14  xs:my-0 lg:my-20 ">
                      <img
                        src={`${data.image}`}
                        width={400}
                        height={400}
                        objectfit="cover"
                      />
                    </div>
                    <div className="flex justify-center items-center xs:h-auto  xs:my-0 lg:my-20 ">
                      <div className="w-4/5  m-4  xs:p4 lg:p-7">
                        <div className="text-gray-800 font-bold  text-5xl">
                          {data.title}
                        </div>
                        <div className="text-gray-800 text-xl my-3 ">
                          {data.deskripsi}
                          <div className="mt-10">
                            Please click the button below for a demo and futher discussion,
                            and no
                           </div>
                        </div>
                        <div>
                          <Link href="/Contact">
                            <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  text-gray-50 rounded-md">More Info</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div key={index} className="bg-gray-300 mx-1" >
                    <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200   ">
                      <div>
                        <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 xs:py-0 lg:py-20 ">
                          <div className="h-full  flex items-center">
                            <div className="w 4/5 m-4  xs:p4 lg:p-7">
                              <div className="text-gray-700 font-bold  text-5xl">
                                {data.title}
                              </div>
                              <div className="text-white my-3 text-xl text-gray-700">
                                {data.deskripsi}
                                <div className="mt-10">
                                  Please click the button below for a demo and futher discussion,
                                  and no
                                  </div>
                              </div>
                              <div>

                                <Link href="/Contact">
                                  <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  text-gray-50 rounded-md">More Info</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="  flex justify-center p-14 items-center xs:py-0 lg:py-20">
                            <img
                              src={`${data.image}`}
                              width={400}
                              height={400}
                              objectfit="contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}

            {/* <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full   ">
                <div className="h-11/12   flex justify-center items-center p-14  xs:my-0 lg:my-20 ">
                  <img
                    src='/assets/i-sales-telesales.png'
                    width={400}
                    height={400}
                    objectfit="cover"
                  />
                </div>
                <div className="flex justify-center items-center xs:h-auto  xs:my-0 lg:my-20 ">
                  <div className="w-4/5  m-4  xs:p4 lg:p-7">
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
              </div> */}
          </div>
        </div>
        {/* section */}
        {/* <div className="bg-gray-300 mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200   ">
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 xs:py-0 lg:py-20 ">
                  <div className="h-full  flex items-center">
                    <div className="w 4/5 m-4  xs:p4 lg:p-7">
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
                  <div className="  flex justify-center p-14 items-center xs:py-0 lg:py-20">
                    <img
                      src='/assets/i-sales-learning.png'
                      width={400}
                      height={400}
                      objectfit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* section */}
        {/* <div className="bg-gray-800  mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-100 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2  ">
                  <div className="  flex justify-center items-center p-14 xs:py-0 lg:py-32">
                    <img
                      src='/assets/isales-agent.png'
                      width={400}
                      height={400}
                      objectfit="contain"
                    />
                  </div>
                  <div className="h-full  flex items-center xs:py-0 lg:py-20">
                    <div className="w 4/5 m-4  xs:p4 lg:p-7">
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
          </div> */}
      </div>


    </Layout>
  )
}


Page.getInitialProps = async (ctx) => {
  const options = {
    method: 'GET',

  };
  const resBanner = await fetch(`${config.piranti.griyo_utomo}/banner`, options);
  const resBannerJson = await resBanner.json()

  const resService = await fetch(`${config.piranti.griyo_utomo}/ourservice`, options);
  const resServiceJson = await resService.json()


  const resAgreement = await fetch(`${config.piranti.griyo_utomo}/commercialagrement`, options);
  const resAgreementJson = await resAgreement.json()


  const resLicensed = await fetch(`${config.piranti.griyo_utomo}/licenseapp`, options);
  const resLicensedJson = await resLicensed.json()

  const resAppList = await fetch(`${config.piranti.griyo_utomo}/ourapplicationlist`, options);
  const resAppListJson = await resAppList.json()

  return {
    banner: resBannerJson.result,
    service: resServiceJson.result,
    agreement: resAgreementJson.result,
    license: resLicensedJson.result,
    application: resAppListJson.result
  }
}










