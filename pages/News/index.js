import Layout from '../../components/Layout';



const News = () => {
    return ( 
            <Layout title="Home">
               <div className="min-h-screen overflow-hidden  w-full grid xs:grid-cols-1 md:grid-cols-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 ">
                <div className=" col-span-2  flex justify-center items-center pb-60 pt-20 xs:px-2 lg:p-10 bg-green-500">
                    <div className=" w-full h-full bg-gray-50  rounded-lg "
                    style={{minHeight:500}}
                    >
                    <div className="w-full xs:h-2/3   ">

                    </div>
                    <div className="w-full  h-auto bg-blue-400 p-5 text-sm text-gray-50 rounded-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    </div>
                </div>
                <div className="col-span-4 min-h-full  xs:p-5 lg:p-16   justify-center max-h-screen  ">
                <div className="w-full  h-24  flex  items-center p-5 overflow-auto ">
                <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-5 px-5">Trending</button>
                <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-5 px-5">New</button>
                <button className="w-52 h-12 bg-red-600 rounded-lg font-bold text-gray-50 m-5 px-5  ">Political</button>
               </div>
                 <div className="flex w-full h-full flex-wrap overflow-auto pb-20">
                    {[1, 2, 3, 4].map((data, index) => {
                        return (
                                <div key={index} className="w-96 h-64 bg-gray-400 m-5 rounded-lg">
                                    <div className="w-full h-2/3 ">

                                    </div>
                                    <div className="w-full  bg-blue-400 p-1 px-3 text-sm text-gray-50 rounded-lg" style={{textOverflow:"ellipsis"}}>
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