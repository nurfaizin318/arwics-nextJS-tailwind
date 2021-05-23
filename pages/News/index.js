import Layout from '../../components/Layout';



const News = () => {
    return (
        <Layout title="Home">
            {/* <div className="  overflow-auto xs:py-0 lg:py-24  grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-6  xl:grid-cols-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:h-  xs:h-auto " style={{maxHeight:900}}>
                <div className=" md:col-span-6  lg:col-span-2  xl:col-span-2  flex justify-center m-5  xs:mt-24 lg:mt-3">
                    <div className="bg-gray-100 rounded-lg" style={{height:"80vh",maxHeight:700,maxWidth:600}}>
                        <div className=" w-full h-3/4" >
                        </div>
                        <div className="bg-blue-700 rounded-b-lg text-gray-50 w-full h-1/4 p-2 xs:text-sm lg:text-lg overflow-hidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </div>
                    </div>
                </div>
                <div className=" md:col-span-6 lg:col-span-4 h-auto  xl:col-span-4 " style={{maxWidth:1100}}>
                    <div className="h-24 w-full  p-2 flex">
                        {["Sport","Politic","Economy"].map((data,index)=>{
                            return(
                                <div className="w-44 h-14 bg-red-600 m-1 rounded-md flex justify-center items-center text-2xl font-bold text-gray-50">
                                    {data}
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full h-full   grid xs:grid-cols-1 md:grid-cols-2 gap-1 items-center">
                        {[1, 2, 3, 4, 5, 6,9,8,9,9].map((data, index) => {
                            return (
                                <div className="h-96 bg-gray-700 xs:m-1 xl:m-2 rounded-lg" >
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
            </div> */}
            <div className="h-screen w-full flex text-6xl font-bold items-center justify-center text-center ">
                News Coming Soon..
            </div>
        </Layout>

    );
}

export default News;