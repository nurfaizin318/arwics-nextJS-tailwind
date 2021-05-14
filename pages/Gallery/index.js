import Layout from '../../components/Layout';

const Gallery = () => {

   
    return (

        <Layout title="Gallery">
            <div className="  grid xs:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mx-1 " style={{minHeight:1000}}>
                <div className="h-full  flex justify-center">
                    <div className="xs:w-5/6 xs:h-full  md:w-2/4 lg:w-2/4 md:h-2/4  rounded-b-full flex justify-center bg-gray-50  pb-14 px-2"
                    style={{maxHeight:500,minHeight:500}}
                    >
                        <div>
                            <div className="w-full text-center mt-20">
                                <span className=" xs:text-2xl lg:text-4xl text-yellow-500 font-bold ">Gallery</span>

                            </div>
                            <div className="p-5 xs:text-xs md:text-xs md:text-md lg:text-xs text-justify">
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" p-3 grid xs:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 grid-flow-row auto-rows-max py-32  gap-2 my-10">
                    {[1, 2, 3,8].map((data, index) => {
                        return (
                            <div key={index} className="text-center  my-2">
                                <div className="h-72 bg-gray-50 rounded-md my-2 ">

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