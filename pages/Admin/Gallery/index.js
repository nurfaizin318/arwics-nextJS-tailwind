import Layout from '../../../components/Layout';
import OptionButton from '../../../components/OptionButton';
import Link from 'next/link'
import React, { useState, useRef, createRef } from 'react';
import Textinputs from '../../../components/TextInputs';
import config from '../../../constanta/index';
import NavbarAdmin from '../../../components/NavbarAdmin'
import TextArea from '../../../components/TextArea';

const Gallery = ({ bannerList, galleryList }) => {


    const galleryData = galleryList.data

    const galleryImageInsertRef = createRef(null)
    const [galleryIndexEdit, SetGalleryIndexEdit] = useState("");
    const [galleryOnEditing, SetGalleryOnEditing] = useState(false)
    const [galleryUpdate, SetGalleryUpdate] = useState({ title: "", image: "", id: null, })
    const [galleryInsert, SetGalleryInsert] = useState({ title: "", image: "", })


    const updateBanner = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("title", ".")
        data.append("deskripsi", banner.description)
        data.append("id_user", 1)
        data.append("id_banner", banner.id)
        data.append("menu", "gallery")
        fetch(`${config.piranti.griyo_utomo}/update_banner`, {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        })

            .then((response) => { return response.json() })
            .then(data => console.log(data))
            .then(() => window.location.reload())
            .catch((error) => {
                console.log(error)
            })

    }


    const handleInsertGallery = (e, id) => {

        const data = new FormData();
        data.append("judul", galleryInsert.title)
        data.append("aktif", 1)
        data.append("id_user", 1)
        data.append("gambar", galleryInsert.image)
        fetch(`${config.piranti.griyo_utomo}/tambahgallery`, {
            method: 'POST',

            body: data
        })
            .then((response) => { return response.json() })
            .then(data => console.log(data))
            // .then(() => window.location.reload())
            .catch((error) => {
                console.log(error)
            })

    }

    const handleDeleteGallery = (e, id) => {

        const data = new FormData();
        data.append("id_produk", id)
        fetch(`${config.piranti.griyo_utomo}/hapus_produk`, {
            method: 'POST',

            body: data
        })
            .then((response) => { return response.json() })
            .then(data => console.log(data))
            .then(() => window.location.reload())
            .catch((error) => {
                console.log(error)
            })

    }



    const [banner, setBanner] = useState({ title: bannerList[0].title, description: bannerList[0].description, id: bannerList[0].id })

    return (

        <>
            <Layout>
                <div className="  grid xs:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mx-1 xs:max-h-full  xs:h-auto lg:h-auto " style={{ minHeight: 1000 }}>
                    <div className="h-full  flex justify-center">
                        <div className="xs:w-5/6 w-full     pb-14 px-2 pt-32"

                        >
                            <div>
                                <TextArea value={banner.description} onChange={(e) => { setBanner({ ...banner, description: e.target.value }) }} />
                                <button onClick={updateBanner} className="h-10 w-24 bg-gray-500 rounded-md text-gray-50 flex justify-center items-center">update</button>
                            </div>
                            <div className="text-3xl text-gray-50 m-3">
                                Insert Product
                                     </div>
                            <div className="grid w-full h-80 mx-auto lg:grid-cols-2 bg-blue-50 py-10 rounded-lg mx-10">
                                <div className=" flex justify-center items-center flex ">
                                    <div className="w-5/6 h-3/4 flex justify-center ">
                                        <input type="file" hidden ref={galleryImageInsertRef} onChange={(e) => { SetGalleryInsert({ ...galleryInsert, image: e.target.files[0] }) }} />
                                        <div style={{ cursor: 'pointer' }} className=" w-96 h-76 bg-gray-300 p-2 rounded-sm" onClick={() => { galleryImageInsertRef.current.click() }}>
                                            <div className="h-full w-full  border-dashed border-2 border-gray-50 p-2 rounded-sm  flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=" p-7 box-border">
                                    <div className="">
                                        <Textinputs value={galleryInsert.title} onChange={(e) => { SetGalleryInsert({ ...galleryInsert, title: e.target.value }) }} />
                                        <button onClick={handleInsertGallery} className="w-32 my-2 h-10 bg-yellow-400 flex justify-center items-center rounded-sm">update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-ful h-96 "></div>
                    </div>
                    <div className=" p-3 grid xs:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 grid-flow-row auto-rows-max py-32  gap-2 my-10">
                        {galleryData.map((data, index) => {
                            return (
                                <div key={index}>
                                    <OptionButton
                                        editabled={true}
                                        onEditing={galleryOnEditing}
                                        cancleEdit={() => SetGalleryOnEditing(false)}
                                        setOnEditing={() => { SetGalleryOnEditing(true); SetGalleryIndexEdit(index); SetGalleryUpdate({ ...galleryUpdate, image: data.image, title: data.title, description: data.deskripsi, id: data.id_produk }) }}
                                        index={index}
                                        indexEdit={galleryIndexEdit}
                                        onDelete={(e) => { handleDeleteGallery(e, data.id_produk) }}
                                        editabled={false}
                                    />
                                    <div key={index} className="text-center  my-2">
                                        <div className="h-72 bg-gray-50 rounded-md my-2 ">
                                            <img className="h-full w-full " src={data.image} style={{ objectFit: "contain" }} alt="image" />

                                        </div>
                                        {data.judul_galleri}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Gallery;

Gallery.getInitialProps = async (ctx) => {
    const options = {
        method: 'GET',

    };


    const resBanner = await fetch(`${config.piranti.griyo_utomo}/banner_gallery`, options);
    const resBannerJson = await resBanner.json()

    const resGallery = await fetch(`${config.piranti.griyo_utomo}/listgallery?limit=10`, options);
    const resGalleryJson = await resGallery.json()


    return {

        bannerList: resBannerJson.result,
        galleryList: resGalleryJson.result,

    }
}





