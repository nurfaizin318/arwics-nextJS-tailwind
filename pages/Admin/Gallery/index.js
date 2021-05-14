import Layout from '../../../components/Layout';
import OptionButton from '../../../components/OptionButton';
import Link from 'next/link'
import React, { useState, useRef, createRef } from 'react';
import Textinputs from '../../../components/TextInputs';
import config from '../../../constanta/index';
import NavbarAdmin from '../../../components/NavbarAdmin'
import TextArea from '../../../components/TextArea';

const Gallery = ({bannerList, galleryList}) => {


console.log(galleryList)
    const [galleryIndexEdit, SetGalleryIndexEdit] = useState("");
    const [galleryOnEditing, SetGalleryOnEditing] = useState(false)
    const [galleryUpdate, SetGalleryUpdate] = useState({ title: "", image: "", id: null, description: "" })
    const [galleryInsert, SetGalleryInsert] = useState({ title: "", image: "", description: "" })


    const updateBanner = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("title",".")
        data.append("deskripsi", banner.description)
        data.append("id_user", 1)
        data.append("id_banner",banner.id)
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
     

    
    const [banner,setBanner] = useState({title:bannerList[0].title,description:bannerList[0].description,id:bannerList[0].id})
   
    return (

     <>
     <NavbarAdmin />
            <div className="  grid xs:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mx-1 xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen " style={{minHeight:1000}}>
                <div className="h-full  flex justify-center">
                <div className="xs:w-5/6 w-full  rounded-b-full flex justify-center  pb-14 px-2"
                    style={{maxHeight:500,minHeight:500}}
                    >
                        <div>
                            <div className="w-full text-center mt-24 mb-10">
                                <span className=" xs:text-2xl lg:text-5xl text-gray-50 font-bold ">Gallery</span>

                            </div>
                            <div className=" w-full xs:text-xs md:text-md md:text-md text-justify ">

                                <TextArea  value={banner.description} onChange={(e)=>{setBanner({...banner,description:e.target.value})}} />
                                {/* <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span> */}
                            </div>
                                <button onClick={updateBanner} className="h-10 w-24 bg-red-200 rounded-md text-gray-50 flex justify-center items-center">update</button>
                        </div>
                    </div>
                </div>
                <div className=" p-3 grid xs:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 grid-flow-row auto-rows-max py-32  gap-2 my-10">
                    {[1, 2, 3,8].map((data, index) => {
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

                                </div>
                                Lorem Ipsum
                            </div>
                            </div>
                        )
                    })}
                </div>


            </div>
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

    const resGallery = await fetch(`${config.piranti.griyo_utomo}/listgallery`, options);
    const resGalleryJson = await resGallery.json()


    return {
      
        bannerList: resBannerJson.result,
        galleryList: resGalleryJson,

    }
}





