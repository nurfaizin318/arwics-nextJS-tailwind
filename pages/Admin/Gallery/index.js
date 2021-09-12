import Layout from '../../../components/Layout';
import OptionButton from '../../../components/OptionButton';
import Link from 'next/link'
import React, { useState, useRef, createRef, useEffect } from 'react';
import Textinputs from '../../../components/TextInputs';
import config from '../../../constanta/index';
import NavbarAdmin from '../../../components/NavbarAdmin'
import TextArea from '../../../components/TextArea';
import Pagination from 'next-pagination'
import Router, { withRouter } from 'next/router'



const Gallery = ({ bannerList, galleryList }) => {

    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    const [insertModal, setInsertModal] = useState(false);


    const [galleryData, SetGalleryData] = useState([]);
    const [urlFoto,setUrlFoto] = useState("");

    const getData = async () =>{
      
        const resGallery = await fetch(`${config.piranti.griyo_utomo}/listgallery?limit=8&page=1`);
        const resGalleryJson = await resGallery.json()

        return resGalleryJson;
    }
    useEffect(() => {

      
        
        Router.events.on('routeChangeStart', startLoading); 
        Router.events.on('routeChangeComplete', stopLoading);
  
        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
        getData()
        .then((data)=>{
          if(data != null){
              setUrlFoto(data.url_foto)
              SetGalleryData(data.result.data)
          }
        })
 
    }, [])

    return (

        <Layout >
            <div className="flex flex-col pt-24 items-center m-1  ">
                <div>
                    <button className="h-16 w-44 bg-blue-300 rounded-md shadow-lg" onClick={() => { setInsertModal(true) }}> Add Image </button>
                </div>
                <div className={` ${insertModal ? "visible" : "hidden"} xs:w-80 md:w-96 fixed mx-auto  bg-blue-50 shadow-lg p-5`} style={{ marginTop: "5%", height: 600 }}>
                    <div className={`  h-18 w-full  flex justify-end items-center mt-1`}>
                        <div className=" h-18 w-1/6 " onClick={() => { setInsertModal(false) }} style={{ cursor: "pointer" }}>close</div>
                    </div>
                    <div className="h-24 w-full flex justify-center items-center mt-1 p-2">
                        <input type="file" className="w-full  h-12  p-5  " />
                    </div>
                    <div className="h-24 w-full flex flex-col  justify-center items-center mt-1 p-2">
                        title
                    <Textinputs placeholder="judul gambar" value={""} onChange={(e) => { }} />
                    </div>
                    <div className="h-24 w-full  flex flex-col  justify-center items-center mt-1 p-2 ">
                        width
                    <Textinputs placeholder="lebar gambar : 1, 2, 3" value={""} onChange={(e) => { }} />
                    </div>
                    <div className="h-24 w-full  flex flex-col justify-center items-center mt-1 p-2">
                        height
                    <Textinputs placeholder="tinggi gambar : 1, 2, 3" value={""} onChange={(e) => { }} />
                    </div>
                    <div className="h-24 w-full  flex flex-col  justify-center items-center mt-1 p-2">
                        order
                    <Textinputs placeholder="urutan gambar gambar : 1, 2, 3...15" value={""} onChange={(e) => { }} />
                    </div>

                </div>
                <div className="flex flex-wrap justify-center items-center py-5 p-0 mt-1" style={{ minHeight: "70vh" }}>
                    {galleryData.map((data, index) => {
                        return (<div key={index} className=" shadow-md rounded-md h-80 xs:w-screen md:w-96 bg-blue-200 m-1 flex justify-center items-center ">
                            <img src={`${urlFoto}${data.image}`} style={{objectFit:"contain"}} />

                        </div>)
                    })}
                </div>

               
            </div>
            <div className="my-2">
            <Pagination  total={100} />

            </div>

        </Layout>
    );
}

export default Gallery;

// Gallery.getInitialProps = async (ctx) => {
//     const options = {
//         method: 'GET',

//     };


//     const resBanner = await fetch(`${config.piranti.griyo_utomo}/banner_gallery`, options);
//     const resBannerJson = await resBanner.json()

//     const resGallery = await fetch(`${config.piranti.griyo_utomo}/listgallery?limit=10`, options);
//     const resGalleryJson = await resGallery.json()

//     return {

//         bannerList: resBannerJson.result,
//         galleryList: resGalleryJson.result.data,

//     }
// }





