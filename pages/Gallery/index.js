import Layout from '../../components/Layout';

const Gallery = () => {

   
    return (

        <Layout title="Gallery">
            <div className=" w--full grid xs:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 " style={{minHeight:1000}}>
                <div className="h-full  flex justify-center">
                    <div className="xs:w-5/6 xs:h-full  md:w-3/4 lg:w-1/2 md:h-1/2  rounded-b-full flex justify-center bg-gray-50  pb-14 px-2"
                    style={{maxHeight:700,minHeight:500}}
                    >
                        <div>
                            <div className="w-full text-center mt-24">
                                <span className=" xs:text-2xl lg:text-5xl text-yellow-500 font-bold ">Gallery</span>

                            </div>
                            <div className="p-5 xs:text-xs md:text-md md:text-md text-justify">
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" p-3 grid xs:grid-cols-1 md:grid-cols-2 grid-flow-row auto-rows-max py-32  gap-2 ">
                    {[1, 2, 3,8].map((data, index) => {
                        return (
                            <div key={index} className="text-center ">
                                <div className="xs:w-56 xs:h-56  md:w-40 md:h-40 lg:w-56 lg:h-56 bg-gray-50 m-2 rounded-lg mx-auto">

                                </div>
                                Lorem Ipsum
                            </div>
                        )
                    })}
                </div>


            </div>
        </Layout>
    );
}

export default Gallery;