
import Layout from '../../../components/Layout';
import TextInputs from '../../../components/TextInputs';
import config from "../../../constanta/index";
import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin'


const Contact = (profile) => {

    const [company,setCompany] = React.useState({alamat:profile.profile.alamat,email:profile.profile.email,perusahaan:profile.profile.perushaan,tlp:profile.profile.tlp,website:profile.profile.website})



    const handlUpdateProfile = (e,id) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_profile",1)
        data.append("id_user",1)
        data.append("alamat",company.alamat)
        data.append("email", company.email)
        data.append("tlp",company.tlp)
        data.append("nama",company.perusahaan)
        data.append("website",company.website)
        
        
    
        fetch(`${config.piranti.griyo_utomo}/update_profile`, {
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

    return (
        <>
      <Layout>      
                <div className="contact bg-yellow-400 flex justify-center items-center mx-1 xs:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-screen   xs:max-h-full xl:max-h-max " >
                <div className="w-11/12  bg-softWhite flex flex-wrap my-24 " style={{ borderRadius: 30 }} >
                    <div className=" xs:w-full lg:w-1/2 h-full flex justify-center py-10">
                        <div className="w-11/12 h-full p-3">
                            <input type="text" placeholder="Name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Email Address" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Telephone" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Company" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Message" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <label><input type="checkbox" name="checkbox" value="value" className="m-3" />by using this form you Agreement with the storage  and handling  of your data by this website </label>
                            <div className="my-4">
                                <button className="w-40 h-14 bg-yellow-300 rounded-lg">Submit</button>

                            </div>
                        </div>
                    </div>
                    <div className="xs:w-full lg:w-1/2 xs:h-auto lg:h-auto flex justify-center items-center  py-10">
                        <div className="w-3/4  flex flex-col justify-center items-center ">
                            <div className="text-yellow-400 text-6xl font-bold ">
                                Contact
            </div>
                            {/* <div className="text-xl font-bold  text-left mt-10 bg-gray-50">
               <span>PT. ARWICS TECHNOLOGY SOLUSINDO</span>
            </div>
            <div className="text-xl font-bold  text-left mt-5">
               <span>The CEO Building , 9th Floor jl. Tb Simatupang N0. 18C Jakarta 12430</span>
            </div>
            <div className="text-xl font-bold  text-left mt-10">
               <span>02129222999</span>
            </div>
            <div className="text-xl font-bold   text-left mt-10">
               <span>info@arwics.com</span>
            </div>
            <div className="text-xl font-bold   text-left ">
               <span>arwics.com</span>
            </div> */}
                            <div className="w-full h-20 flex ">

                                <div className="h-full w-full flex justify-center items-center">
                                    <div className="xs:text-lg lg:text-lg xl:text-xl font-bold  text-left ">
                                        <TextInputs value={company.perusahaan} onChange={(e) => {setCompany({...company,perusahaan:e.target.value})}} />

                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-14  flex">
                                <div className="h-full w-1/4  flex justify-end pr-5 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="xs:text-lg lg:text-lg xl:text-xl font-bold  text-left ">
                                        <TextInputs value={company.alamat}  onChange={(e) => {setCompany({...company,alamat:e.target.value})}} />
                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-14  flex">
                                <div className="h-full w-1/4  flex justify-end pr-5 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-bold  text-left ">
                                        <TextInputs value={company.tlp}  onChange={(e) => {setCompany({...company,tlp:e.target.value})}} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-14 flex">
                                <div className="h-full w-1/4  flex justify-end pr-5  items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-bold   text-left">
                                        <TextInputs value={company.email} onChange={(e) => {setCompany({...company,email:e.target.value})}} />
                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-14 flex">
                                <div className="h-full w-1/4  flex justify-end pr-5 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>

                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-bold   text-left ">
                                        <TextInputs value={company.website}  onChange={(e) => {setCompany({...company,website:e.target.value})}}/>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-14 flex">
                                <div className="h-full w-1/4  flex justify-end pr-5 items-center">


                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-bold   text-left ">
                                        <button onClick={handlUpdateProfile} className="text-sm w-20 h-10 text-gray-50 bg-blue-400 ">update</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </Layout>
            </>
    );
}

export default Contact;





Contact.getInitialProps = async (ctx) => {
    const options = {
      method: 'GET',
     
    };
    const resProfile = await fetch(`${config.piranti.griyo_utomo}/getCompany`, options);
    const resProfileJson = await resProfile.json()
  
    
    return {
      profile: resProfileJson.result,
 
    }
  }
  
  