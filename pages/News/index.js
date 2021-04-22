import Layout from '../../components/Layout';



const News = () => {
    return (
        <Layout title="Home">
            <div className="  overflow-auto xs:py-0 lg:py-24  grid xs:grid-cols-1 md:grid-cols-1 xl:grid-cols-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:min-h-screen  xs:h-auto">
                <div className=" md:col-span-3 xl:col-span-2  flex justify-center m-5  xs:mt-24 lg:mt-3">
                    <div className="bg-gray-100 xs:h-96   xs:w-5/6 md:w-1/2 xl:w-full lg:h-128 xl:h-128 rounded-lg">
                        <div className=" w-full h-3/4" >
                        </div>
                        <div className="bg-blue-700 rounded-b-lg text-gray-50 w-full h-1/4 p-2 xs:text-sm lg:text-lg overflow-hidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </div>
                    </div>
                </div>
                <div className=" col-span-4 ">
                    <div className="h-24 w-full  p-2 flex">
                        {["Sport","Politic","Economy"].map((data,index)=>{
                            return(
                                <div className="w-44 h-18 bg-red-600 m-1 rounded-md flex justify-center items-center text-2xl font-bold text-gray-50">
                                    {data}
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full h-full  grid xs:grid-cols-1 md:grid-cols-2 gap-1 items-center">
                        {[1, 2, 3, 4, 5, 6].map((data, index) => {
                            return (
                                <div className="h-96 bg-gray-700 xs:m-1 xl:m-10 rounded-lg">
                                    <div className="w-full h-2/3 bg-gray-100 rounded-t-lg">
                                    </div>
                                    <div className="text-gray-50 p-2 ">
                                            sdhghak daskjgdkas dakgsdka sajgdakj dkajssgkaj
                                    </div>

                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </Layout>

    );
}

export default News;