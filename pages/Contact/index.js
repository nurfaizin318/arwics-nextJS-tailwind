import Layout from '../../components/Layout';
import Image from 'next/image';


const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="contact flex justify-center items-center mx-1 "  >
                <div className="w-11/12  bg-softWhite flex flex-wrap my-20 rounded-lg lg:my-44" >
                    <div className=" xs:w-full lg:w-1/2 h-full flex justify-center py-12">
                        <div className="w-11/12 h-full p-3">
                        <input type="text" placeholder="Name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="Email Address" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="Telephone" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="Company" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="Message" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <label><input type="checkbox" name="checkbox" value="value"  className="m-3"/>by using this form you Agreement with the storage  and handling  of your data by this website </label>
                        <div className="my-4">
                        <button className="w-40 h-14 bg-yellow-300 rounded-lg">Submit</button>

                        </div>
                        </div>
                    </div>
                    <div className="xs:w-full lg:w-1/2 xs:h-auto lg:h-auto flex justify-center items-center  py-10">
                            <div className="w-3/4  flex flex-col justify-center items-center">
                                    <div className="text-yellow-400 text-6xl font-bold ">
                                        Contact
                                    </div>
                                    <div className="text-xl font-bold  text-center mt-10">
                                       <span>PT. ARWICS TECHNOLOGY SOLUSINDO</span>
                                    </div>
                                    <div className="text-xl font-bold  text-center mt-5">
                                       <span>The CEO Building , 9th Floor jl. Tb Simatupang N0. 18C Jakarta 12430</span>
                                    </div>
                                    <div className="text-xl font-bold  text-center mt-10">
                                       <span>02129222999</span>
                                    </div>
                                    <div className="text-xl font-bold   text-center mt-10">
                                       <span>info@arwics.com</span>
                                    </div>
                                    <div className="text-xl font-bold   text-center ">
                                       <span>arwics.com</span>
                                    </div>
                                    
                                   
                            </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default Contact;