import Layout from '../../components/Layout';
import React, { useState, useCallback ,useEffect} from 'react';
import db from "../../Config/firebase";

// anywhere

import Gallery from "react-photo-masonry";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallerys = () => {


    const [modal, setModal] = useState(false);

    const isLandscape = () => window.matchMedia('(orientation:landscape)').matches,
        [orientation, setOrientation] = useState(isLandscape() ? 'landscape' : 'portrait'),
        onWindowResize = () => {
            if (typeof window !== "undefined") {
                clearTimeout(window.resizeLag)
            window.resizeLag = setTimeout(() => {
                delete window.resizeLag
                setOrientation(isLandscape() ? 'landscape' : 'portrait')
            }, 200)
              }
              
          
        }

    useEffect(() => {

        const orientation = window.matchMedia('(orientation:landscape)').matches;
        setOrientation(orientation?"landscape":"potrait");
        onWindowResize(),
        window.addEventListener('resize', onWindowResize),
        () => window.removeEventListener('resize', onWindowResize)
    }, [])

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

  

    return (

        <Layout
            pathName="/Gallery"
            title="Gallery">
            <div className="mt-28">

            </div>

            <div className="flex" style={{ margin: "0 auto" }}>
                <Gallery photos={photos} onClick={openLightbox} />
                <div className={`${viewerIsOpen ? "" : "hidden"} fixed h-full w-full  z-50 top-0  flex flex-col  items-center`} style={{ backgroundColor: "rgba(0,0,0,0.9)" }} >
                    <div className="w-auto h-screen flex flex-col justify-center">
                        <div className="w-full h-18 flex justify-end ">
                        <div className="bottom-0 w-full h-18 p-3 text-bold rounded-lg m-1 text-gray-50">
                            Title image
                        </div>
                            <div className="h-12  w-28 bg-yellow-500  rounded-lg flex justify-center items-center shadow-lg m-1 self-end" style={{ cursor: "pointer" }} onClick={() => { setViewerIsOpen(false) }}>close</div>
                        </div>

                        <img src={photos[currentImage].src} style={{ objectFit: "contain",}} className={`${orientation?"h-4/6":""}`}  >

                        </img>

                    </div>
                </div>
            </div>

        </Layout>

  );

};


export default Gallerys;