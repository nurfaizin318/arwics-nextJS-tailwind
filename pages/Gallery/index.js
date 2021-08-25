import Layout from '../../components/Layout';
import React, { useState } from 'react';
import db from "../../Config/firebase";

import FbImageLibrary from "@pierreneter/react-fb-image-grid";


const Gallery = () => {


    const [modal,setModal] = useState(false);
    const image = ["https://unsplash.com/photos/DyQiNSgrM58"];
    React.useEffect(() => {
        
    }, [])

    
    return (

        <Layout
            pathName="/Gallery"
            title="Gallery">

<div className="mx-auto p-8 py-32">
<FbImageLibrary images={["https://images.unsplash.com/photo-1586478391200-7bbed1cebb56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1586478391200-7bbed1cebb56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"]}/>
</div>                        
              
                          
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

export default Gallery;