import Layout from '../../components/Layout';
import Image from 'next/image';



const Product = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <Layout title="Product">
            <div className=" flex items-center h-5/6 mx-1" >
                <div className="w-1/3 h-full  flex flex-col justify-center items-center p-10">
                    <div className="text-5xl">
                        Product
                        </div>
                    <div className="mt-5">
                        We are information technology company with our speciality is data processing. Combined with artificial intelligance technology.
                        </div>
                </div>
                <div className="w-2/3 h-full     flex justify-center items-center ">
                    <Image
                        src='/vector.png'
                        width={800}
                        height={700}
                        objectFit="cover"
                    />
                </div>
            </div >
            <div className="bg-purple-600 mx-1">
                <div className="bg-purple-400"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
                >
                    <div className="bg-custom-yellow">
                        <div className="w-full h-screen bg-custom-blue"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 77%)" }}
                        >
                        </div>
                        <div className="w-full h-screen bg-custom-yellow"
                        >
                        </div>
                        <div className="w-full h-screen bg-custom-red"
                        >
                        </div>
                        <div className="w-full h-screen bg-custom-yellow"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={scrollToTop}
                className="absolute bg-gray-50 h-16 w-16 flex justify-center items-center rounded-full right-10 p-4 hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </Layout>
    );
}

export default Product;