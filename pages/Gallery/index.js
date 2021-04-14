import Layout from '../../components/Layout';

const Gallery = () => {

    return (

        <Layout title="Gallery">
            <div className=" w--full grid xs:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 " style={{minHeight:1000}}>
                <div className="h-full  flex justify-center">
                    <div className="xs:w-5/6 md:w-1/2 xs:h-1/2  lg:h-4/5   rounded-b-full flex justify-center bg-gray-50  p-5"
                    style={{minHeight:500,}}
                    >
                        <div>
                            <div className="w-full text-center mt-24">
                                <span className=" xs:text-2xl lg:text-5xl text-yellow-500 font-bold ">Gallery</span>

                            </div>
                            <div className="p-5 xs:text-xs md:text-md md:text-md">
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-green-400 p-16 flex flex-wrap  justify-center  overflow-auto  ">
                    {[1, 2, 3, 4].map((data, index) => {
                        return (
                            <div key={index} className="text-center bg-blue-400">
                                <div className="xs:w-56 xs:h-56 lg:w-40 lg:h-40 bg-gray-50 m-2 rounded-lg">

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