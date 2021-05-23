import Layout from '../../components/Layout';
import config from "../../constanta/index"
import React,{useState} from "react"


const Contact = () => {

    const [data,setData] = useState({name:"",email:"",tlp:""})

    const handleSubmit = (e) => {

        e.preventDefault()
        const data = new FormData();
        data.append("nama", data.nama)
        data.append("email_address", data.email)
        data.append("telepon", data.tlp);


        fetch(`${config.piranti.griyo_utomo}/submit_email`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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
        <Layout title="Contact">
            <div className="contact bg-yellow-400 flex justify-center items-center mx-1 xs:h-auto md:h-auto lg:h-auto xl:h-auto    xs:max-h-full xl:max-h-max " >
                <div  className=" w-4/6 bg-softWhite flex flex-wrap my-32 " style={{borderRadius:25}} >
                    <div className=" xs:w-full lg:w-1/2 h-full flex justify-center py-10  items-center">
                        <div className="w-5/6 h-full p-3   flex justify-center items-center ">
                            <div>
                            <input type="text" placeholder="Name" value={data.name}  onChange={(e)=>{setData({...data,name:e.target.value})}} className="w-full  h-5 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Email Address"  value={data.email}  onChange={(e)=>{setData({...data,email:e.target.value})}}  className="w-full  h-5 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <input type="text" placeholder="Telephone" value={data.tlp}  onChange={(e)=>{setData({...data,tlp:e.target.value})}}  className="w-full  h-5 my-4 p-5 rounded-lg border-2 border-gray-500 " />
                            <label><input type="checkbox" name="checkbox" value="value" className="m-3 text-sm" />
                            <span className="text-sm">by using this form you Agreement with the storage  and handling  of your data by this website </span>
                            </label>
                            <div className="my-4">
                                <button onClick={handleSubmit} className="w-40 h-14 bg-yellow-300 rounded-lg">Submit</button>

                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-full lg:w-1/2 xs:h-auto lg:h-auto flex justify-center items-center  py-10 ">
                        <div className="w-3/4  flex flex-col justify-center items-center ">
                            <div className="text-yellow-400 text-6xl font-medium ">
                                Contact
                                    </div>
                          
                            <div className="w-full auto  ">
                                <div className="h-auto my-3 w-full flex ml-10 items-center ">
                                    <div className="xs:text-md lg:text-lg xl:text-xl font-medium  text-left ">
                                        <span>PT ARWICS TECHNOLOGY SOLUSINDO</span>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-auto  ">
                                <div className="w-5/6 ml-9 flex  my-1">
                                <div className="h-full mr-5 flex  items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="h-auto w-3/4 flex items-center ">
                                    <div className="xs:text-md lg:text-lg xl:text-xl font-medium  text-left ">
                                        <span>The CEO Building , 9th Floor jl. Tb Simatupang N0. 18C Jakarta 12430</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="w-full  ">
                            <div className="w-5/6 ml-9 flex">
                                <div className="h-full flex items-center pr-5 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-medium  text-left ">
                                        <span>02129222999</span>
                                    </div>
                                </div>
                                </div>  
                            </div>
                            <div className="w-full h-auto">
                            <div className="w-5/6 ml-9 flex  my-1">
                                <div className="h-fullmr-3 flex items-center  pr-5  items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-medium   text-left">
                                        <span>info@arwics.com</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="w-full h-auto ">
                            <div className="w-5/6 ml-9 flex my-1">
                                <div className="h-full   pr-5 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>

                                </div>
                                <div className="h-full w-3/4 flex items-center">
                                    <div className="text-xl font-medium   text-left ">
                                        <span>arwics.com</span>
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

export default Contact;