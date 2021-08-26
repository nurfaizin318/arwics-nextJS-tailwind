import Layout from '../../components/Layout';
import React, { useState, useCallback } from 'react';
import db from "../../Config/firebase";

// anywhere

import Gallery from "react-photo-masonry";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallerys = () => {


    const [modal, setModal] = useState(false);

    const photos = [
        {
            title: "anjay",
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 2,
            height: 1
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            width: 3,
            height: 4
        },
     

    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);


    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (

        <Layout
            pathName="/Gallery"
            title="Gallery">
                <div className="mt-28">

                </div>
       
            <div className="flex " style={{ margin: "0 auto" }}>
                <Gallery photos={photos} onClick={openLightbox} />
                <div className={`${viewerIsOpen?"":"hidden"} fixed h-full w-full  z-50 top-0  flex flex-col justify-center items-center`} style={{backgroundColor:"rgba(0,0,0,0.9)"}} >
                    <div className="w-auto h-auto">
                        <div className="w-full h-18 flex justify-end ">
                        <div  className="h-12  w-28 bg-yellow-500  rounded lg flex justify-center items-center shadow-lg m-1 self-end" style={{cursor:"pointer"}} onClick={()=>{setViewerIsOpen(false)}}>close</div>
                        </div>
               
                        <img src={photos[currentImage].src } style={{objectFit:"contain"}}  >

                        </img>
                        <div className="w-full h-auto bg-yellow-500 p-3">
                                title anjayyyyyyyyyyy yyyyyyyyyyyyyy yyyyyyyyyyyyyyyy yy y y y
                        </div>
                   
                        </div>
                </div>
            </div>
  );



            {/* <div classNameName={` ${modal ? "visible" : "invisible"} w-5/6  z-50 h-4/5 bg-gray-50 shadow-lg fixed flex`} style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}>
                <div classNameName="w-4/6 flex items-center justify-center " style={{ fontSize: "100px" }}>
                    Gambar Nih Bosssss
                    </div>
                <div classNameName="w-2/6  bg-red-200">
                    <div classNameName="w-full h-2/6 flex justify-center items-center" style={{ fontSize: "100px" }}>
                        Title
                            </div>
                    <div classNameName="w-full h-4/6 bg-blue-200 p-2" style={{ fontSize: "20px" }}>
                        ini adalah deskripsi gambar sebelah gambarnya belum ada karena otak belum stabil
                            </div>
                </div>
                <div onClick={()=>setModal(false)} classNameName=" absolute top-2 right-2 h-8 w-18 p-1" style={{cursor:"pointer"}}>
                        close
                </div>
            </div>
            <div classNameName="gallery  m-1" style={{ minHeight: 1000, backgroundSize: "100% 100%" }}>
                <div classNameName="flex justify-end items-center flex-col" style={{ height: "30vh", backgroundColor: "rgba(255,225,225,0.4)" }}>
                    <div classNameName="h-24 w-5/6 flex justify-center   " style={{fontSize:"70px"}}>
                            Biutipull Gallery
                    </div>
                    <div classNameName="w-1/2 h-14 bg-gray-50 flex mb-5" style={{ borderRadius: "55px" }}>
                        <div classNameName="w-5/6 h-full bg-blue-200" style={{ borderTopLeftRadius: "55px", borderBottomLeftRadius: "55px" }}>
                            <input placeholder="search" classNameName="h-full w-full" style={{ borderTopLeftRadius: "55px", borderBottomLeftRadius: "55px", border: "none", outline: "none", textAlign: "center" }} />
                        </div>
                        <div classNameName="w-1/6 h-full flex justify-center items-center hover:shadow-md" style={{ borderTopRightRadius: "55px", borderBottomRightRadius: "55px", borderLeft: "2px solid #CFD8DC", cursor: "pointer" }}>
                            cari
                            </div>
                    </div>
                </div>
                <div classNameName=" flex flex-wrap justify-center items-center py-16 " style={{ minHeight: "90vh", backgroundColor: "rgba(255,225,225,0.7)", borderLeft: "1px solid black" }} >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                        return (
                            <div key={index} onClick={()=>{setModal(true)}} classNameName="w-96   h-72 bg-gray-50 m-2 shadow-lg" style={{ cursor: "pointer", marginTop: 1 }}>

                            </div>
                        )
                    })}
                </div>
            </div> */}


        </Layout>
    );
}

export default Gallerys;