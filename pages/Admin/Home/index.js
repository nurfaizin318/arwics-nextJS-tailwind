import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import TextInputs from '../../../components/TextInputs';
import TextArea from "../../../components/TextArea";
import OptionButton from "../../../components/OptionButton";
import config from "../../../constanta/index";
import Router from 'next/router';
import axios from "axios"

export default function Page({ banner, service, agreement, license,application }) {

  const inputReference = React.createRef(null);
  const insertImageService = React.createRef(null);
  const insertImageAgreement = React.createRef(null);
  const insertImageLicensed = React.createRef(null);
  const insertImageApp = React.createRef(null);



  const [visible, setVisible] = useState(false);
  const [modalLicensed, setModalLicensed] = useState(false);



  const [servicesIndexEdit, SetservicesIndexEdit] = useState("");
  const [servicesOnEditing, SetservicesOnEditing] = useState(false)

  const [applicationtIndexEdit, SetApplicatiOnIndexEdit] = useState("");
  const [applicationOnEditing, SetApplicationOnEditing] = useState(false)
  const [applicationUpdate, setApplicationUpdate] = useState({ title: "", image: "", id: null,description:"" })
  const [applicationInsert, setApplicationInsert] = useState({ title: "", image: "", id: null,description:"" })


  const [insertAgreement, setInsertAgreement] = useState({ title: "", image: null, })
  const [AgreementIndexEdit, SetAgreementIndexEdit] = useState("");
  const [AgreementOnEditing, SetAgreementOnEditing] = useState(false)
  const [agreementUpdate, setAgreementUpdate] = useState({ title: "", image: "", id: null })
  
  const [bannerUpdate, setBannerUpdate] = useState({ title: banner[0].title, id: 1, description: banner[0].description })

  const [licensedIndexEdit, SetLicensedIndexEdit] = useState("");
  const [licensedOnEditing, SetLicensedOnEditing] = useState(false)
  const [insertLicense, setInsertLicense] = useState({ image: null, name: "license", id_user: 1 })


  const [salesIndexEdit, SetSalesIndexEdit] = useState("");
  const [salesOnEditing, SetSalesOnEditing] = useState(false)


  const [insertOurService, setInsertOurService] = useState({ id_user: 1, image: null, title: "" });
  const [ourServiceEditData, setOurServiceEditData] = useState({ id_user: 1, image: null, title: "" });


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }




  const handlUpdateApp = (e) => {

    e.preventDefault()
    const data = new FormData();
    data.append("nama_app", insertLicense.name)
    data.append("license_file", insertAgreement.image)
    data.append("id_user", 1)

    fetch(`${config.piranti.griyo_utomo}/tambah_license_application`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })
  }


  const handleDeleteLicense = (e,id) => {
console.log("id"+id)
    e.preventDefault()
    const data = new FormData();
    data.append("id_app",id)

    fetch(`${config.piranti.griyo_utomo}/delete_license_application`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })
  }

  const handleInsertLicense = (e) => {  
    e.preventDefault()
    const data = new FormData();
    data.append("nama_app", insertLicense.name)
    data.append("license_file", insertLicense.image)
    data.append("id_user", 1)

    fetch(`${config.piranti.griyo_utomo}/tambah_license_application`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data
    })
      .then((response) => { return response.json()})
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error.message)
      })
  }



  const handleDeleteAgreement = (e, id) => {
    e.preventDefault()
    const data = new FormData();
    data.append("id_agrement", id)

    fetch(`${config.piranti.griyo_utomo}/delete_agrement`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

  }
  const handleInsertAgreement = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("title", insertAgreement.title)
    data.append("image", insertAgreement.image)
    data.append("id_user", 1)

    fetch(`${config.piranti.griyo_utomo}/tambah_agrement`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

  }


  const updateAgreement = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("title", agreementUpdate.title)
    data.append("id_agrement", agreementUpdate.id)
    data.append("image", agreementUpdate.image)
    data.append("id_user", 1)

    fetch(`${config.piranti.griyo_utomo}/update_agrement`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

  }


  const updateBanner = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("title", bannerUpdate.title)
    data.append("deskripsi", bannerUpdate.description)
    data.append("id_user", 1)
    data.append("id_banner", 1)
    data.append("menu", "Home")
    fetch(`${config.piranti.griyo_utomo}/update_banner`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

  }

  const deleteService = (e, id) => {

    const data = new FormData();
    data.append("id_ourservice", id)
    fetch(`${config.piranti.griyo_utomo}/deleted_ourservice`, {
      method: 'POST',

      body: data
    })
      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

    // setInsertOurService(initialService)
  }

  const upateOurService = (e, id) => {
    e.preventDefault()
    const data = new FormData()
    data.append("title", ourServiceEditData.title);
    data.append("id_user", "1");
    data.append("image", ourServiceEditData.image);
    data.append("id_ourservice", id)


    fetch(`${config.piranti.griyo_utomo}/update_ourservice`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })

      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })

  }
  const insertService = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("title", insertOurService.title)
    data.append("id_user", 1);
    data.append("image", insertOurService.image);
    fetch(`${config.piranti.griyo_utomo}/tambah_ourservice`, {
      method: 'POST',

      body: data
    })
      .then((response) => { return response.json() })
      .then(data => console.log(data))
      .then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
      })


    // setInsertOurService(initialService)
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const handleVisible = window.scrollY < 200 ? false : true;
      setVisible(handleVisible)
      return () => {
        window.removeEventListener("scroll", handleVisible, false);
      }
    })
    Router.beforePopState(({ as }) => {
      location.href = as;
    });
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
              <img
                src={`/assets/isales2.png `}
                width={500}
                height={650}
                objectfit="contain"
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
            className="  md:h-2/3    grid xs:grid-cols-1 lg:grid-cols-2 mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen w-screen" >
            <div className="w-full  flex  items-center  pt-20  ">
              <div className="w-4/5 h-auto xs:lg-auto  mx-5 p-2 ">
                <div >
                  <form onSubmit={updateBanner}>
                    <div className="xs:text-2xl  lg:text-2xl xl:text-xl  text-gray-700 font-bold ">
                      <TextArea
                        value={bannerUpdate.title}
                        onChange={(e) => { setBannerUpdate({ ...bannerUpdate, title: e.target.value }) }}
                      />
                      <TextArea value={bannerUpdate.description}
                        onChange={(e) => { { setBannerUpdate({ ...bannerUpdate, title: e.target.description }) } }}
                      />
                    </div>
                    <div className="w-full  xflex items-center justify-center mt-2 mb-3">
                      <button type="submit" className="border-none outline-none h-12 w-52 bg-blue-500 rounded-lg text-gray-50  ">update</button>
                    </div>
                  </form>
                  <span className="text-sm text-gray-600  ">
                    No credit card required. No Strings attached!
                </span>
                </div>
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
                  <div className="p-2  m-3">
                    <div className="h-12"></div>
                    <div className="border-2 border-blue-200 m-2 rounded-lg text-center min-h-96 w-44 flex justify-center items-cennter  lg:h-full   ">
                      <div>
                        <form onSubmit={insertService}>
                          <div className="p-3">
                            <input type="file" hidden name="image" ref={insertImageService} onChange={(e) => { setInsertOurService({ ...insertOurService, image: e.target.files[0] }) }} />
                            <div className="w-40 h-28 bg-blue-200 flex justify-center items-center rounded-lg" onClick={() => { insertImageService.current.click() }} style={{ cursor: "pointer" }}>

                              {insertOurService.image !== null ?
                                <span className="text-sm text-gray-50 ">{insertOurService.image.name}</span>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                              }
                            </div>
                          </div>
                          <div className=" flex justify-center h-12 flex items-center p-3   text-sm text-gray-600 ">
                            <TextInputs value={insertOurService.title} onChange={(e) => { setInsertOurService({ ...insertOurService, title: e.target.value }) }} />
                          </div>
                          <div className="h-12 w-full my-1 px-3">
                            <button type="submit" className={` w-full h-10 bg-purple-600 text-white rounded-md mt-1`} >Insert</button>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                  {service !== null && service.map((data, index) => {
                    return (
                      <div key={index} className="p-2  m-3">
                        <OptionButton
                          editabled={true}
                          onEditing={servicesOnEditing}
                          cancleEdit={() => SetservicesOnEditing(false)}
                          setOnEditing={() => { SetservicesOnEditing(true); SetservicesIndexEdit(index); setOurServiceEditData({ ...ourServiceEditData, image: data.image, title: data.title }) }}
                          index={index}
                          indexEdit={servicesIndexEdit}
                          onDelete={(e) => deleteService(e, data.id)}

                        />
                        <form onSubmit={(e) => upateOurService(e, data.id)}>

                          <div className="border-2 border-blue-200 m-2 rounded-lg text-center min-h-96 w-44 flex justify-center items-cennter  lg:h-full   ">
                            <div>
                              <div className="p-1">
                                <input type="file" hidden name="image" ref={inputReference} onChange={(e) => { setOurServiceEditData({ ...ourServiceEditData, image: e.target.files[0] }) }} />
                                {servicesOnEditing && servicesIndexEdit == index ?

                                  <div className="w-40 h-28 bg-blue-200 flex justify-center items-center rounded-lg" onClick={() => { inputReference.current.click() }} style={{ cursor: "pointer" }}>
                                    {typeof ourServiceEditData.image == "object" ?
                                      <span className="text-sm text-gray-50 ">{ourServiceEditData.image.name}</span>
                                      :
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                      </svg>
                                    }
                                  </div> :
                                  <img
                                    src={`${data.image}`}
                                    width={110}
                                    height={110}
                                    objectfit="contain"
                                  />
                                }
                              </div>
                              <div className=" flex justify-center h-14 flex items-center p-1   text-sm text-gray-600 ">
                                {servicesOnEditing && servicesIndexEdit == index ?
                                  <TextInputs value={ourServiceEditData.title} onChange={(e) => { setOurServiceEditData({ ...ourServiceEditData, title: e.target.value }) }} /> : data.title
                                }
                              </div>
                              <div className="h-12 w-full my-1 p-1">
                                <button type="submit" className={` ${servicesOnEditing && servicesIndexEdit == index ? "" : "hidden"}  w-full h-10 bg-purple-600 text-white rounded-md mt-1`}>update</button>

                              </div>

                            </div>

                          </div>
                        </form>

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
                    <div className="w-72 h-56 ">
                      <div className="w-full h-12 ">

                      </div>
                      <div className="w-full h-44 p-3 bg-gray-50 rounded-md">
                        <form onSubmit={handleInsertAgreement}>
                          <input type="file" hidden ref={insertImageAgreement} onChange={(e) => { setInsertAgreement({ ...insertAgreement, image: e.target.files[0] }) }} />
                          <div className="w-64 h-12 bg-blue-200 flex justify-center items-center rounded-lg" onClick={() => { insertImageAgreement.current.click() }} style={{ cursor: "pointer" }}>

                            {insertAgreement.image !== null ?
                              <span className="text-sm text-gray-50 ">{insertAgreement.image.name}</span>
                              :
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                              </svg>
                            }
                          </div>

                          <TextInputs value={insertAgreement.title} placeholder="title" onChange={(e) => { setInsertAgreement({ ...insertAgreement, title: e.target.value }) }} />
                          <button type="submit" className="h-10 w-full bg-green-500 rounded-md text-gray-50">Insert</button>
                        </form>
                      </div>

                    </div>
                    {agreement.map((data, index) => {
                      return (
                        <div key={index}>
                          <OptionButton
                            editabled={true}
                            onEditing={AgreementOnEditing}
                            cancleEdit={() => SetAgreementOnEditing(false)}
                            setOnEditing={() => { SetAgreementOnEditing(true); SetAgreementIndexEdit(index); setAgreementUpdate({ ...agreementUpdate, title: data.title, image: data.image, id: data.id }) }}
                            index={index}
                            indexEdit={AgreementIndexEdit}
                            onDelete={(e) => { handleDeleteAgreement(e, data.id) }}

                          />
                          <div key={index} className="h-52 w-72    m-2 flex justify-center pt-5" style={{ backgroundImage: "url('/assets/bg-agreement.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}  >
                            <div className="w-36 text-center mt-10 font-bold "   >
                              <form onSubmit={updateAgreement}>
                                <div className="ml-4 text-2xl text-bold text-gray-50 mt-5">
                                  {AgreementOnEditing && AgreementIndexEdit == index ?
                                    <TextInputs value={agreementUpdate.title}
                                      onChange={(e) => { setAgreementUpdate({ ...agreementUpdate, title: e.target.value }) }}
                                    />
                                    :
                                    data.title}
                                  {AgreementOnEditing && AgreementIndexEdit == index &&
                                    <button type="submit" className="h-10 w-full bg-purple-700 rounded-md text-sm">update</button>}
                                </div>
                              </form>
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
          <div className="bg-gray-200 mx-1" >
            <div className=" bg-gray-100 py-10 relative overflow-hidden flex items-center z-10  pb-44 "  >
              <div className="z-20 w-full ">
                <div className="text-4xl text-gray-700 p-5 font-bold z-30  flex justify-center">
                  Our Licensed Aplication
                </div>
                <div className="w-4/5 z-30  mx-auto flex items-center flex-wrap  py-10 mt-10 m-3">
                  <input type="file" hidden ref={insertImageLicensed} onChange={(e) => { setInsertLicense({ ...insertLicense, image: e.target.files[0] }) }} />
                  <div>
                    <div className="w-72 rounded-md bg-red-400 mx-auto p-3 flex justify-center items-center" onClick={() => { insertImageLicensed.current.click() }} style={{ cursor: "pointer" }} style={{ height: 320, cursor: "pointer" }}>
                      {insertLicense.image != null ? <div className="text-gray-50 ">{insertLicense.image.name}</div> :
                        <div className="h-full w-full border-dashed border-4 border-light-blue-500 rounded-md flex justify-center items-center" >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>

                          <div className="text-gray-50 ">
                            add licensed
                      </div>

                        </div>
                      }
                    </div>
                    <button onClick={handleInsertLicense} className="w-32 h-14 bg-blue-300 mx-auto m-3 text-gray-50 rounded-md  
                  ">Insert</button>
                  </div>
                  {license !== null && license.map((data, index) => {
                      return (
                      <div  key={index} className="mt-10 h-80 m-3 w-64">
                        <div  className="mx-auto">
                          <OptionButton
                            onEditing={licensedOnEditing}
                            cancleEdit={() => SetLicensedOnEditing(false)}
                            editabled={false}
                            setOnEditing={() => { SetLicensedOnEditing(true); SetLicensedIndexEdit(index) }}
                            index={index}
                            indexEdit={licensedIndexEdit}
                            onDelete={(e) => { handleDeleteLicense(e, data.id_app) }}
                          />
                          <div className="h-96 w-72 m-1 " style={{ cursor: "pointer" }} onClick={() => setModalLicensed(true)}>
                            <img
                              src={`${data.license_file}`}
                              width={250}
                              height={350}
                              objectfit="contain"
                              alt={data.license_file}
                            />
                          </div>
                        </div> 
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="bg-gray-400 flex justify-center py-1"  >
                    <div className="grid xs:w-full md:w-3/4 grid-cols-2 xs:grid-cols-1 md:grid-cols-2 bg-red-50  ">
                      <div className="h-11/12   flex justify-center items-center p-5  xs:my-0 lg:my-0 ">

                          <div className="w-2/3 h-52 bg-red-300 flex justify-center items-center rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14  w-14" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                      </div>
                      <div className="flex justify-center items-center xs:h-auto  xs:my-0 lg:my-20 ">
                        <div className="w-4/5  m-4 p-4">
                          <div className="text-gray-800 font-bold  text-3xl">
                              <TextInputs value={applicationUpdate.title} onChange={() => { }} />
                          </div>
                        
                          <div>
                              <button onClick={()=>{console.log(applicationUpdate)}} className="h-10 w-24 rounded-md bg-blue-300 text-gray-50">update</button>
                           
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
          {application.map((data, index) => {
              return (
                <div key={index} className="bg-gray-400 flex justify-center py-1 bg-red-200"  >
                  <div className=" xs:w-full lg:w-2/3  ">
                    <OptionButton
                      onEditing={applicationOnEditing}
                      cancleEdit={() => SetApplicationOnEditing(false)}
                      setOnEditing={() => { SetApplicationOnEditing(true); SetApplicatiOnIndexEdit(index);setApplicationUpdate({...applicationUpdate,image:data.image,title:data.title,id:data.id_our_application,description:data.deskripsi}) }}
                      index={index}
                      indexEdit={applicationtIndexEdit}
                      editabled={true}

                    />
                    <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 bg-red-50  ">
                      <div className="h-11/12   flex justify-center items-center p-5  xs:my-0 lg:my-0 ">
                        {applicationOnEditing && applicationtIndexEdit == index ?

                          <div className="w-2/3 h-52 bg-red-300 flex justify-center items-center rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14  w-14" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          :
                          <img
                            src={`${data.image}`}
                            width={200}
                            height={200}
                            objectfit="contain"
                          />
                        }
                      </div>
                      <div className="flex justify-center items-center xs:h-auto  xs:my-0 lg:my-20 ">
                        <div className="w-4/5  m-4 p-4">
                          <div className="text-gray-800 font-bold  text-3xl">
                          {applicationOnEditing && applicationtIndexEdit == index ?
                              <TextInputs value={applicationUpdate.title} onChange={() => { }} />
                              :
                              data.title
                            }
                          </div>
                          <div className="text-gray-800 text-md my-3 ">
                          {applicationOnEditing && applicationtIndexEdit == index ?
                              <TextArea value={applicationUpdate.description} onChange={()=>{}}/>
                              :
                              data.deskripsi}
                          </div>
                          <div>
                          {applicationOnEditing && applicationtIndexEdit == index ?
                              <button onClick={()=>{console.log(applicationUpdate)}} className="h-10 w-24 rounded-md bg-blue-300 text-gray-50">update</button>
                              :
                              <Link href="/Contact">
                                <button className="w-40 h-12 my-10 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-md text-gray-50">More Info</button>
                              </Link>
                            }
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          {/* section */}
          {/* <div className="bg-gray-200 mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200  flex justify-center bg-blue-800 ">
                <div className="grid  bg-red-200 grid-cols-2 xs:w-full lg:w-3/4 xs:grid-cols-1 md:grid-cols-2 xs:py-0 lg:py-20 ">
                  <div className="h-full  flex items-center">
                    <div className="w 4/5 m-4 p-4">
                      <div className="text-gray-700 font-bold  text-3xl">
                        i-Sales Learning
                     </div>
                      <div className="text-white my-3 text-md text-gray-700">
                        Training needs will be very high in order to meet the quality of human resources for increasingly complex and digital business needs. Digital training will be a necessity so that it does not take time to work, but can still be filled with elements of adding knowledge, improving skills and changing attitudes.The i-sales Learning application can answer these needs with a complete application module.
                      </div>
                      <div>
                        <Link href="/Contact">
                          <button className="w-40 h-12 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  text-gray-50 rounded-md">More Info</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center xs:py-0 lg:py-20">
                    <img
                      src='/assets/i-sales-learning.png'
                      width={200}
                      height={200}
                      objectfit="contain"
                    />
                  </div>
                </div>
            </div>
          </div> */}
          {/* section
          {/* <div className="bg-gray-800  mx-1" >
            <div className=" xs:pb-52 lg:pb-0 w-full bg-gray-200 lg:min-h-screen" >
              <div>
                <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                  <div className="  flex justify-center items-center p-5 xs:py-0 lg:py-20">
                    <img
                      src='/assets/i-sales-agent.png'
                      width={400}
                      height={400}
                      objectfit="contain"
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
          </div>  */}
        </div>


      </Layout>



    </>
  )
}



Page.getInitialProps = async (ctx) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",

    }),
  };
  const resBanner = await fetch(`${config.piranti.griyo_utomo}/banner`, options);
  const resBannerJson = await resBanner.json()

  const resService = await fetch(`${config.piranti.griyo_utomo}/ourservice`, options);
  const resServiceJson = await resService.json()


  const resAgreement = await fetch(`${config.piranti.griyo_utomo}/commercialagrement`, options);
  const resAgreementJson = await resAgreement.json()


  const resLicensed = await fetch(`${config.piranti.griyo_utomo}/licenseapp`, options);
  const resLicensedJson = await resLicensed.json()

  const resAppList= await fetch(`${config.piranti.griyo_utomo}/ourapplicationlist`, options);
  const resAppListJson = await resAppList.json()

  return {
    banner: resBannerJson.result,
    service: resServiceJson.result,
    agreement: resAgreementJson.result,
    license: resLicensedJson.result,
    application: resAppListJson.result
  }
}

















