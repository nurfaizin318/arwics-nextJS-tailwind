import Layout from '../../components/Layout';
import Image from 'next/image';


const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="contact flex justify-center items-center " style={{minHeight:"90.7vh"}} >
                <div className="w-11/12 h-5/6 bg-gray-50 rounded-lg flex flex-wrap">
                    <div className=" xs:w-full lg:w-1/2 h-full  flex justify-center">
                        <div className="w-11/12 h-full p-3">
                        <input type="text" placeholder="name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <input type="text" placeholder="name" className="w-full  h-12 my-4 p-5 rounded-lg border-2 border-gray-500 "  />
                        <label><input type="checkbox" name="checkbox" value="value"  className="m-3"/>by using this form you Agreement with the storage  and handling  of your data by this website </label>
                        <div className="my-4">
                        <button className="w-40 h-14 bg-yellow-300 rounded-lg">Submit</button>

                        </div>
                        </div>
                    </div>
                    <div className="xs:w-full lg:w-1/2 xs:h-96 lg:h-auto flex justify-center items-center ">
                            <div className="w-2/4 h-2/4 flex flex-col justify-center items-center ">
                                    <div className="text-yellow-200 text-4xl ">
                                        Contact
                                    </div>
                                    <div className=" text-1xl ">
                                        name : sdbakdbaksjbl
                                    </div>
                                   
                            </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default Contact;