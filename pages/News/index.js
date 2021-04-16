import Layout from '../../components/Layout';



const News = () => {
    return (
        <Layout title="Home">
            <div className="min-h-screen overflow-hidden  xs:pt-0 lg:pt-24 w-full grid xs:grid-cols-1 md:grid-cols-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  ">
                <div className=" md:col-span-3 xl:col-span-2  flex justify-center pb-60 pt-32 xs:px-2 lg:p-10 xs:w-full xs:h-full ">
                    <div className="w-full bg-gray-50 rounded-lg" style={{ height: 500 }}>
                        <div className="h-2/3 w-full bg-red-200">

                        </div>
                        <div className="w-full h-1/3 bg-blue-700 p-3 text-gray-50">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                     </div>
                    </div>
                </div>
                <div className="md:col-span-3 xl:col-span-4 min-h-full  xs:p-0 lg:p-16   justify-center max-h-screen  ">
                    <div className="w-full  h-24  flex  items-center p-2 px-2 overflow-auto  ">
                        <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-2 px-5">Trending</button>
                        <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-2 px-5">New</button>
                        <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-2 px-5  ">Political</button>
                    </div>
                    <div className="flex w-full h-full flex-wrap  pb-20">
                        {[1, 2, 3, 4].map((data, index) => {
                            return (
                                <div key={index} className="w-96 h-64 bg-gray-400 m-5 rounded-lg">
                                    <div className="w-full h-2/3 ">

                                    </div>
                                    <div className="w-full  bg-blue-400 p-2 px-3 text-sm text-gray-50 rounded-lg" style={{ textOverflow: "ellipsis", minHeight: '33%' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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