import Layout from '../../../components/Layout';
import TextArea from '../../../components/TextArea';
import OptionButton from '../../../components/OptionButton';
import Link from 'next/link'
import React, { useState, useRef, createRef } from 'react';
import Textinputs from '../../../components/TextInputs';
import config from '../../../constanta/index';

import NavbarAdmin from '../../../components/NavbarAdmin'


const Product = ({ productList,solutionsList,bannerList}) => {



    console.log(solutionsList.result)
    const productResult = productList.result;
    const productImageUrl = productList.url_foto;

    const solutionsResult = solutionsList.result;
    const solutionsImageUrl = solutionsList.url_foto;

    const productImageUpdateRef = createRef(null);
    const productImageInsertRef = createRef(null);

    const solutionsImageUpdateRef = createRef(null);
    const solutionsImageInsertRef = createRef(null);

    const [banner,setBanner] = useState({title:bannerList[0].title,description:bannerList[0].description,id:bannerList[0].id})

    const [productIndexEdit, SetProductIndexEdit] = useState("");
    const [productOnEditing, SetProductOnEditing] = useState(false)
    const [productUpdate, setProductUpdate] = useState({ title: "", image: "", id: null, description: "" })
    const [productInsert, setProductInsert] = useState({ title: "", image: "", description: "" })

    const [solutionsIndexEdit, SetSolutionsIndexEdit] = useState("");
    const [solutionsOnEditing, SetSolutionsOnEditing] = useState(false)
    const [solutionsUpdate, setSolutionsUpdate] = useState({ title: "", image: "", id: null, description: "" })
    const [solutionsInsert, setSolutionsInsert] = useState({ title: "", image: "", description: "" })


    const handleInsertProduct = (e) => {

        
        e.preventDefault();
        const data = new FormData()
        data.append("title", productInsert.title)
        data.append("image", productInsert.image);
        data.append("description", productInsert.description);
        fetch(`${config.piranti.griyo_utomo}/tambah_produk`, {
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


    const handleUpdateProduct = (e) => {

        const data = new FormData();
        data.append("id_produk", productUpdate.id)
        data.append("title", productUpdate.title)
        data.append("image", productUpdate.image);
        data.append("description", productUpdate.description);
        fetch(`${config.piranti.griyo_utomo}/update_produk`, {
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


    const handleDeleteProduct = (e, id) => {

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


    const handleUpdateSolusi = (e) => {

        const data = new FormData();
        data.append("id_solusi", solutionsUpdate.id)
        data.append("title", solutionsUpdate.title)
        data.append("image", solutionsUpdate.image);
        data.append("description", solutionsUpdate.description);
        fetch(`${config.piranti.griyo_utomo}/update_solusi`, {
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


    const handleInsertSolutions = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("title", solutionsInsert.title)
        data.append("image", solutionsInsert.image);
        data.append("description", solutionsInsert.description);
        fetch(`${config.piranti.griyo_utomo}/tambah_solusi`, {
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

    const handleDeleteSolusi = (e, id) => {

        const data = new FormData();
        data.append("id_solusi", id)
        fetch(`${config.piranti.griyo_utomo}/hapus_solusi`, {
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


    const updateBanner = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("title",".")
        data.append("deskripsi", banner.description)
        data.append("id_user", 1)
        data.append("id_banner",banner.id)
        data.append("menu", "produk")
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

    return (
   
       <Layout >
            <div
                style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",width:"100vw" }}
                className="home-row1 w-full xs:h-auto   md:h-2/3 grid grid-cols-1 lg:grid-cols-5  xs:h-auto   lg:max-h-max xl:h-screen">
                <div className="w-full min-h-full flex justify-center items-center  py-5 col-span-2  ">
                    <div className="xs:w-4/5 md:w-full h-2/3 xs:p-0 lg:py-12  xs:my-20 md:p-10  md:my-0 xl:my-12 ">
                        <div>
                            <div className="xs:text-5xl md:text-6xl text-yellow-400 font-bold ">
                                Products
                       </div>
                            <div className="text-gray-700 mt-10  text-2xl ">
                                <TextArea value={banner.description} onChange={(e) => {setBanner({...banner,description:e.target.value}) }} />
                            </div>
                            <button onClick={updateBanner} className="w-24 h-10 bg-blue-300 text-gray-50 text-sm ">Update</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full  xs:hidden md:hidden lg:flex  justify-center relative md-hidden  items-center  col-span-3 xs:hidden lg:block">
                    <div className="mt-6  xs:hidden md:hidden lg:block xl:block xs:px-20 lg:px:0 " >
                        <img
                            src="/assets/product-vector.png"
                            alt="Picture of url"
                            width={650}
                            height={550}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-800  ">
                <div className="bg-green-200"
                >
                    <div className="bg-gray-200 w-full ">
                        <div className="xs:py-20 lg:py-40 w-full  bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue px-10">
                            <div className="mt-3 text-center">
                                <div className="text-3xl text-gray-50 m-3">
                                    Insert Product
                                     </div>
                                <div className="grid xs:grid-cols-1 xs:w-full lg:w-3/4 mx-auto lg:grid-cols-2 bg-blue-50 py-10 rounded-lg">
                                    <div className=" flex justify-center items-center flex ">
                                        <div className="w-5/6 h-3/4 flex justify-center ">
                                            <input type="file" hidden ref={productImageInsertRef} onChange={(e) => { setProductInsert({ ...productInsert, image: e.target.files[0] }) }} />
                                            <div style={{ cursor: 'pointer' }} className=" w-96 h-76 bg-gray-300 p-2 rounded-sm" onClick={() => { productImageInsertRef.current.click() }}>
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
                                            <Textinputs value={productInsert.title} onChange={(e) => { setProductInsert({ ...productInsert, title: e.target.value }) }} />
                                            <TextArea value={productInsert.description} onChange={(e) => { setProductInsert({ ...productInsert, description: e.target.value }) }} />
                                            <button onClick={handleInsertProduct} className="w-32 h-10 bg-yellow-400 flex justify-center items-center rounded-sm">update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  ">
                                {productResult.data.map((data, index) => {
                                    return (
                                        <div key={index} className="mt-3 xs:w-full lg:w-3/4 mx-auto">
                                            <OptionButton
                                                editabled={true}
                                                onEditing={productOnEditing}
                                                cancleEdit={() => SetProductOnEditing(false)}
                                                setOnEditing={() => { SetProductOnEditing(true); SetProductIndexEdit(index); setProductUpdate({ ...productUpdate, image: data.image, title: data.title, description: data.deskripsi, id: data.id_produk }) }}
                                                index={index}
                                                indexEdit={productIndexEdit}
                                                onDelete={(e) => { handleDeleteProduct(e, data.id_produk) }}
                                            />
                                            {console.log(productImageUrl + data.image)}
                                            <div className="grid xs:grid-cols-1 lg:grid-cols-2 bg-blue-50 py-10">
                                                <div className=" flex justify-center items-center flex ">
                                                    <div className="w-5/6 h-3/4 flex justify-center ">
                                                        <input type="file" hidden ref={productImageUpdateRef} onChange={(e) => { setProductUpdate({ ...productUpdate, image: e.target.files[0] }) }} />
                                                        {productOnEditing && productIndexEdit == index ?
                                                            <div style={{ cursor: 'pointer' }} className="w-96 h-76 bg-gray-300 p-2 rounded-sm" onClick={() => { productImageUpdateRef.current.click() }}>
                                                                <div className="h-full w-full  border-dashed border-2 border-gray-50 p-2 rounded-sm flex justify-center items-center p-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="h-full w-1/2    flex justify-center items-center m-1">
                                                                <img
                                                                  src={`${productImageUrl + data.image}`}
                                                                    width={200}
                                                                    height={350}
                                                                    objectfit="cover"
                                                                />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className=" p-7 box-border">
                                                    <div className="">
                                                        {productOnEditing && productIndexEdit == index ?
                                                            <Textinputs value={productUpdate.title} onChange={(e) => { setProductUpdate({ ...productUpdate, title: e.target.value }) }} />
                                                            :
                                                            <span className="text-5xl text-gray-500  font-bold mb-2">{data.title}</span>}
                                                        {productOnEditing && productIndexEdit == index ?
                                                            <TextArea value={productUpdate.description} onChange={(e) => { setProductUpdate({ ...productUpdate, description: e.target.value }) }} />
                                                            :
                                                            <div className="text-gray-500 h-40 text-base mt-3">
                                                                <span >{data.deskripsi}</span><br />
                                                            </div>}

                                                        {productOnEditing && productIndexEdit == index ?

                                                            <button onClick={handleUpdateProduct} className="w-32 h-10 bg-red-400 flex justify-center items-center rounded-sm">update</button> :

                                                            <div className="w-full h-22 mt-2  text-gray-700 ">
                                                                
                                                            </div>


                                                        }                                                                                                                                                                                                                               </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="bg-gray-100 py-3 mx-1">
                            <div className="w-full h-24 bg-gray-200  justify-center text-3xl flex items-center  p-4 font-bold text-gray-700">
                               Insert  Solutions
                             </div>
                             
                             <div className="my-3 bg-green-100 xs:full lg:w-11/12 mx-auto grid grid-cols-2 xs:grid-cols-1 h-auto lg:grid-cols-2 w-full mx-auto    bg-red-50 p-3 rounded-md">
                                            <div className="h-11/12 items-center flex justify-center items-center xs:py-0 md:py-10 lg:py-10   ">
                                                <input type="file" hidden ref={solutionsImageInsertRef} onChange={(e) => { setSolutionsInsert({ ...solutionsInsert, image: e.target.files[0] }) }} />
                                                    <div style={{ cursor: 'pointer' }} className="w-96 h-80 bg-gray-300 p-2 rounded-sm" onClick={() => { solutionsImageInsertRef.current.click() }}>
                                                        <div className="h-full w-full  border-dashed border-2 border-gray-50 p-2 rounded-sm flex justify-center items-center p-5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                            </svg>
                                                        </div>
                                                    </div>


                                            </div>
                                            <div className="flex justify-center  items-center  ">
                                                <div className="w-full  m-4 p-4">
                                                    <div className="text-gray-800 font-bold  text-2xl">
                                                        <Textinputs value={solutionsInsert.title} onChange={(e) => { setSolutionsInsert({ ...solutionsInsert, title: e.target.value }) }} />
                                                    </div>
                                                    <TextArea value={solutionsInsert.description} onChange={(e) => { setSolutionsInsert({ ...solutionsInsert, description: e.target.value }) }} />
                                                     <div className="text-gray-800 my-3 text-justify  overflow-ellipsis overflow-hidden ">
                                        </div> 
                                                    <div>
                                                        <button onClick={handleInsertSolutions} className="w-40 mt-5 h-12 bg-yellow-400 rounded-md text-gray-700">Insert</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                            {solutionsResult.data.map((data, index) => {
                                return (
                                    <div key={index} className="xs:full lg:w-11/12 mx-auto my-3">
                                        <OptionButton
                                            editabled={true}
                                            onEditing={solutionsOnEditing}
                                            cancleEdit={() => SetSolutionsOnEditing(false)}
                                            setOnEditing={() => { SetSolutionsOnEditing(true); SetSolutionsIndexEdit(index); setSolutionsUpdate({ ...solutionsUpdate, image: data.image, title: data.title,description:data.deskripsi ,id:data.id_solusi}) }}
                                            index={index}
                                            indexEdit={solutionsIndexEdit}
                                            onDelete={(e) => { handleDeleteSolusi(e,data.id_solusi)}}
                                        />
                                        <div className=" bg-blue-200 grid grid-cols-2 xs:grid-cols-1 h-auto lg:grid-cols-2 w-full mx-auto  mt-1  bg-red-50 p-3 rounded-md">
                                            <div className="h-11/12 items-center flex justify-center items-center xs:py-0 md:py-10 lg:py-10   ">
                                                <input type="file" hidden ref={solutionsImageUpdateRef} onChange={(e) => { setSolutionsUpdate({ ...solutionsUpdate, image: e.target.files[0] }) }} />
                                                {solutionsOnEditing && solutionsIndexEdit == index ?
                                                    <div style={{ cursor: 'pointer' }} className="w-96 h-80 bg-gray-300 p-2 rounded-sm" onClick={() => { solutionsImageUpdateRef.current.click() }}>
                                                        <div className="h-full w-full  border-dashed border-2 border-gray-50 p-2 rounded-sm flex justify-center items-center p-5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                            </svg>
                                                        </div>
                                                    </div> :
                                                    <img
                                                        src={`${solutionsImageUrl    + data.image}`}
                                                        width={370}
                                                        height={370}
                                                        objectfit="contain"
                                                    />
                                                }
                                            </div>
                                            <div className="flex justify-center  items-center  ">
                                                <div className="w-full  m-4 p-4">
                                                    <div className="text-gray-800 font-bold  text-2xl">
                                                    {solutionsOnEditing && solutionsIndexEdit == index ?
                                                        <Textinputs value={solutionsUpdate.title} onChange={(e) => { setSolutionsUpdate({ ...solutionsUpdate, title: e.target.value }) }} />
                                                        :
                                                        data.title}
                                                    </div>
                                                    {solutionsOnEditing && solutionsIndexEdit == index ?
                                                    <TextArea value={solutionsUpdate.description} onChange={(e) => { setSolutionsUpdate({ ...solutionsUpdate, description: e.target.value }) }} />
                                                    :
                                                     <div className="text-gray-800 my-3 text-justify h-48 overflow-ellipsis overflow-hidden ">
                                                       {data.deskripsi}
                                        </div> }
                                                    <div>
                                                    {solutionsOnEditing && solutionsIndexEdit == index &&
                                                        <button onClick={handleUpdateSolusi} className="w-40 mt-5 h-12 bg-yellow-400 rounded-md text-gray-700">update</button>}
                                                        {/* <button className="w-40 h-12 bg-yellow-400 rounded-md text-gray-700">More Info</button> */}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
    );
}

export default Product;

Product.getInitialProps = async (ctx) => {
    const options = {
        method: 'GET',
       
    };
    const resProduct = await fetch(`${config.piranti.griyo_utomo}/produklist?limit=10&page=1`, options);
    const resProductJson = await resProduct.json()

    const resSolusi = await fetch(`${config.piranti.griyo_utomo}/listsolusi?limit=10&page=1`, options);
    const resSolusiJson = await resSolusi.json()

    const resBanner = await fetch(`${config.piranti.griyo_utomo}/banner_produk`, options);
    const resBannerJson = await resBanner.json()


    return {
        productList: resProductJson,
        solutionsList: resSolusiJson,
        bannerList: resBannerJson.result,

    }
}





