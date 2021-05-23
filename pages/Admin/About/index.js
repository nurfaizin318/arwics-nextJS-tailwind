import Layout from '../../../components/Layout';
import NavbarAdmin from '../../../components/NavbarAdmin'
import TextInputs from '../../../components/TextInputs';
import TextArea from '../../../components/TextArea';
import OptionButton from '../../../components/OptionButton';
import React, { useState, createRef } from 'react'
import config from "../../../constanta/index";



const About = ({ filosofiList, taglineList, jenislist, typeList, teamList }) => {

    const insertImageJenis = createRef(null)
    const updateImageBannerTeam = createRef(null)
    const updateImageTeam = createRef(null)
    const insertImagePerson = createRef(null)


    const [teamBanner, setTeamBanner] = useState({ image: teamList.image, description: teamList.deskripsi });

    const [tagline, setTagline] = useState(taglineList.tagline)

    

    const [filosofi, setFilosofi] = useState({ id: "", merah: filosofiList.merah, kuning: filosofiList.kuning, biru: filosofiList.biru, deskripsi: filosofiList.deskripsi });


    const [teamIndexEdit, SetTeamIndexEdit] = useState("");
    const [teamOnEditing, SetTeamOnEditing] = useState(false)
    const [teamUpdate, setTeamUpdate] = useState({ nama: "", id: "", posisi: "", nama: "", image: "" });
    const [teamInsert, setTeamInsert] = useState({ nama: "", id: "", posisi: "", nama: "", image: "" });



    const [servicestIndexEdit, SetServicesIndexEdit] = useState("");
    const [servicesOnEditing, SetServicesOnEditing] = useState(false)
    const [servicesUpdate, setServicesUpdate] = useState({ value: "", id: "" })
    const [servicesInsert, setServicesInsert] = useState({ title: "", image: "", })

    const [jenisIndexEdit, SetJenisIndexEdit] = useState("");
    const [jenisOnEditing, SetJenisOnEditing] = useState(false)

    const [jenisUpdate, setJenisUpdate] = useState({ title: "", image: "", description: "" })
    const [jenisInsert, setJenisInsert] = useState({ title: "", image: "", id: "", description: "" })




    
    const handlUpdateFilosofi = (e, id) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_filosofi", 1)
        data.append("merah", filosofi.merah)
        data.append("kuning", filosofi.kuning)
        data.append("biru", filosofi.biru)
        data.append("deskripsi", filosofi.deskripsi)

        fetch(`${config.piranti.griyo_utomo}/update_filosofi`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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

    const handlUpdateType = (e, id) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id", servicesUpdate.id)
        data.append("val", servicesUpdate.value)


        fetch(`${config.piranti.griyo_utomo}/update_type`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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

    const handlUpdateJenis = (e, id) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_jenis", jenisUpdate.id)
        data.append("nama", jenisUpdate.title)
        data.append("image", jenisUpdate.image)
        data.append("deskripsi", jenisUpdate.description)


        fetch(`${config.piranti.griyo_utomo}/update_jenis`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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

    const handlUpdateTagline = (e) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_tagline", 1)
        data.append("tagline", tagline)


        fetch(`${config.piranti.griyo_utomo}/update_tagline`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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


    const handlUpdateBannerTeam = (e) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_mst_team", 1)
        data.append("title", ".")
        data.append("deskripsi", teamBanner.description);
        data.append("image", teamBanner.image);
        data.append("id_user", 1);


        fetch(`${config.piranti.griyo_utomo}/update_banner_team`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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


    const handleInsertPerson = (e) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_mst_team", teamList.id_mst_team)
        data.append("nama", teamInsert.nama)
        data.append("posisi", teamInsert.posisi);
        data.append("image", teamInsert.image);


        fetch(`${config.piranti.griyo_utomo}/tambah_person_team`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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



    const handlUpdatePerson = (e) => {

        e.preventDefault()
        const data = new FormData();
        data.append("id_team", teamUpdate.id)
        data.append("nama", teamUpdate.nama)
        data.append("posisi", teamUpdate.posisi);
        data.append("image", teamUpdate.image);


        fetch(`${config.piranti.griyo_utomo}/update_person_team`, {
            method: 'POST',
            header: {
                'Accept': 'services/json',
                'Content-Type': 'services/json',
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


    const deletePerson = (e, id) => {

        const data = new FormData();
        data.append("id_team", id)
        fetch(`${config.piranti.griyo_utomo}/delete_person_team`, {
          method: 'POST',
    
          body: data
        })
          .then((response) => { return response.json() })
          .then(data => console.log(data))
          .then(() => window.location.reload())
          .catch((error) => {
            console.log(error)
          })
    
        // setInsertOurService(initialService)
      }


    const data = [
        { title: "Specialist", value: "16" },
        { title: "Happy Client ", value: "110" },
        { title: "sucessfull Case", value: "316" }
    ]
    const goal = [
        { title: "mission", icon: "/assets/mission.png", description: "Activity support knowledge and technology development in Indonesia contribute to community and people development in Indonesia" },
        { title: "Vission", icon: "/assets/vission.png", description: "To be a preffered partner in IT solution, that provide high quality results with cost effective approach" },
        { title: "Goal", icon: "/assets/goal.png", description: "provide fast , accurate and reliable service" }
    ]

    const client = [
        { logo: "/kerjasama/angkasapura.png" },
        { logo: "/kerjasama/axa.png" },
        { logo: "/kerjasama/axis.png" },
        { logo: "/kerjasama/bca-life.png" },
        { logo: "/kerjasama/bineka-life.png" },
        { logo: "/kerjasama/cakrawala.webp" },
        { logo: "/kerjasama/car.png" },
        { logo: "/kerjasama/dart-media.png" },
        { logo: "/kerjasama/indosat-ooredoo.png" },
        { logo: "/kerjasama/jasindo.png" },
        { logo: "/kerjasama/kai.png" },
        { logo: "/kerjasama/Lion_Air.png" },
        { logo: "/kerjasama/pelni.png" },
        { logo: "/kerjasama/taspen.png" },
        { logo: "/kerjasama/telkom.png" },
        { logo: "/kerjasama/telkomsel-logo.png" },
        { logo: "/kerjasama/telkomsel.png" },
        { logo: "/kerjasama/three.png" },
        { logo: "/kerjasama/xl.png" },
    ];


    return (
        <Layout>
            <div>

                <div className=" about xs:bg-gray-200 lg:bg-gray-50  xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen grid xs:grid-cols-1 lg:grid-cols-2" >
                    <div className=" xs:w-full xs:h-auto lg:w-full lg:w-1/2  flex items-center justify-center xs:px-20 py-16 lg:p-0">
                        <div className="xs:my-0 md:my-30 lg:my-34    xl:my-20  xs:p-0 lg:p-10 ">
                            <img
                                src="/favicon.png"
                                alt="Picture of the author"
                                width={480}
                                height={480}
                                objectfit="contain"
                            />
                        </div>
                    </div>
                    <div className="xs:h-auto lg:h-full xs:w-full lg:w-full  text-4xl flex items-center justify-center text-sm py-2 pb-10 ">
                        <div className="text-xl xl:text-md xs:w-full md:w-5/6 lg:w-full xl:w-3/4 text-gray-600  p-3 ">
                            <b>Filosofi warna dan logo:</b><br></br>
                            <b> Merah : </b><br></br>
                            <TextInputs value={filosofi.merah || ""} onChange={(e) => { setFilosofi({ ...filosofi, merah: e.target.value }) }} />
                            {/* <TextInputs value="Keberanian, Kekuatan, Energi, Gairah, Semangat dan Adrenalin" onChange={() => { }} /> */}
                            <b>Kuning :</b><br></br>
                            <TextInputs value={"" || filosofi.kuning} onChange={(e) => { setFilosofi({ ...filosofi, kuning: e.target.value }) }} />
                            {/* <TextInputs value="Ceria, Bahagia, Energik dan Optimis" onChange={() => { }} /> */}
                            <b> Biru :</b><br></br>
                            <TextInputs value={filosofi.biru || ""} onChange={(e) => { setFilosofi({ ...filosofi, biru: e.target.value }) }} />
                            {/* <TextInputs value=" Stabil, Kecerdasan, Rasa Percaya Diri" onChange={() => { }} /> */}
                            <b>Logo (cerminan Huruf A atau Segitiga) :</b><br></br>
                            <TextInputs value={filosofi.deskripsi || ""} onChange={(e) => { setFilosofi({ ...filosofi, deskripsi: e.target.value }) }} />
                            {/* <TextArea value="     Segitiga yang simetris dapat menjadi simbol untuk hukum, ilmu
                         dan agama.
                         Makna tersembunyi segitiga dalam logo dapat
                         digunakan untuk
                         menyampaikan perkembangan, arah dan tujuan,
                         maskulinitas, ketegaran,
                         stabilitas dan menembus batas. Dalam
                         spiritualitas bentuk ini digunakan
                         untuk mewakili pengenalan diri,
                         dan pencerahan." onChange={() => { }} /> */}
                            <button onClick={handlUpdateFilosofi} className="w-24 h-10 bg-blue-400 rounded-md text-sm text-gray-200 ">update</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <div className="xs:w-full lg:w-3/4 h-full flex justify-center items-center text-center " style={{ overflowWrap: "break-word" }}>
                        {/* <div className="w-44 h-72 bg-blue-200">
                    <div className="h-14 w-full " >
                    </div>
                    <input type="file" hidden name="image" ref={insertImageServices} onChange={(e) => { setServicesInsert({ ...servicesInsert, image: e.target.files[0] }) }} />
                    <div className="px-1">
                    <div className="w-full h-24 bg-blue-600 rounded-lg flex justify-center items-center" onClick={()=>insertImageServices.current.click()} style={{cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                              </svg>
                    </div>
                    <TextInputs value={servicesInsert.title} onChange={(e) => {setServicesInsert({ ...servicesInsert, title: e.target.value })}} />
                    <button onClick={()=>{console.log(servicesInsert)}} className="h-10 w-full rounded-sm bg-blue-300 tetx-gray-50 text-sm  ">insert</button>
                    </div>
                </div> */}

                        {typeList.map((ctx, index) => {
                            return (
                                <div key={index} className="border-2 border-red-200 mx-1 my-3">
                                    <div key={index} >
                                        <OptionButton
                                            onEditing={servicesOnEditing}
                                            cancleEdit={() => SetServicesOnEditing(false)}
                                            editabled={true}
                                            setOnEditing={() => { SetServicesOnEditing(true); SetServicesIndexEdit(index); setServicesUpdate({ ...servicesUpdate, value: ctx.value, id: ctx.id }) }}
                                            index={index}
                                            indexEdit={servicestIndexEdit}
                                        />
                                        <div className={` xs:h-16 xs:w-16 lg:h-52 lg:w-32  rounded-full flex-col justify-center items-center m-4 xs:text-md lg:text-4xl text-gray-500 font-bold  `}>
                                            <div className="h-24 w-full  flex justify-center items-center">
                                                {servicesOnEditing && servicestIndexEdit == index ?
                                                    <TextInputs value={servicesUpdate.value} onChange={(e) => { setServicesUpdate({ ...servicesUpdate, value: e.target.value }) }} />
                                                    :
                                                    ctx.value
                                                }
                                            </div>
                                            <div className="h-12 w-full text-sm ">

                                                {ctx.title}
                                            </div>
                                            <div className="h-12 w-full">
                                                {servicesOnEditing && servicestIndexEdit == index &&
                                                    <button onClick={handlUpdateType} className="h-10 w-full rounded-sm bg-blue-300 tetx-gray-50 text-sm ">update</button>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="  bg-gray-300 mx-1  rounded-lg">
                    <div className="h-32 w-96 flex-col pt-10 text-2xl font-bold text-gray-600 text-center mx-auto ">
                        <TextInputs value={tagline} onChange={(e) => { setTagline(e.target.value) }} />
                        <button onClick={handlUpdateTagline} className="h-10 w-3/4 bg-blue-300 text-gray-50 text-sm">update</button>
                    </div>
                    <div className=" pb-44 bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue rounded-t-lg p-5   my-10" >
                        <div className="  w-full  bg-gray-50 rounded-lg flex  flex-wrap justify-center ">
                            {jenislist.map((data, index) => {
                                return (
                                    <div key={index} className="xs:w-72 md:w-52  lg:m-2  my-5  bg-blue-200">
                                        <OptionButton
                                            onEditing={jenisOnEditing}
                                            cancleEdit={() => SetJenisOnEditing(false)}
                                            editabled={true}
                                            setOnEditing={() => { SetJenisOnEditing(true); SetJenisIndexEdit(index); setJenisUpdate({ ...jenisUpdate, id: data.id_jenis, title: data.nama, description: data.deskripsi, image: data.image }) }}
                                            index={index}
                                            indexEdit={jenisIndexEdit}
                                        />
                                        <input type="file" hidden name="image" ref={insertImageJenis} onChange={(e) => { setJenisUpdate({ ...jenisUpdate, image: e.target.files[0] }) }} />
                                        <div className="flex flex-wrap justify-center  ">
                                            {jenisOnEditing && jenisIndexEdit == index ?
                                                <div className="w-full h-32 bg-blue-600 mx-1 rounded-lg p-1 flex justify-center items-center" onClick={() => { insertImageJenis.current.click() }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                    </svg>
                                                </div>
                                                :
                                                <img
                                                    src={`${data.image}`}
                                                    alt="Picture of the author"
                                                    width={100}
                                                    height={120}
                                                    objectfit="contain"
                                                />
                                            }
                                        </div>
                                        <div className="flex h-16  justify-center items-center font-bold text-xl mx-1">
                                            {jenisOnEditing && jenisIndexEdit == index ?
                                                <TextInputs value={jenisUpdate.title} onChange={(e) => { setJenisUpdate({ ...jenisUpdate, title: e.target.value }) }} />
                                                :
                                                data.nama
                                            }
                                        </div>
                                        <div className="h-44 flex justify-center  text-sm p-1 text-center">
                                            {jenisOnEditing && jenisIndexEdit == index ?
                                                <TextArea value={jenisUpdate.description} onChange={(e) => { setJenisUpdate({ ...jenisUpdate, description: e.target.value }) }} />
                                                :
                                                data.deskripsi
                                            }
                                        </div>
                                        <div className="h-12 w-full flex justify-center items-center">
                                            {jenisOnEditing && jenisIndexEdit == index &&
                                                <button onClick={handlUpdateJenis} className="h-10 w-3/4 bg-blue-300">update</button>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-3/4 mt-10 h-auto mb-40 mx-auto ">
                            <div className="grid xs:grid-cols-1 lg:grid-cols-3 bg-blue-50 rounded-md">
                                <div className="w-full  ">
                                    <input type="file" hidden name="image" ref={updateImageBannerTeam} onChange={(e) => { setTeamBanner({ ...teamBanner, image: e.target.files[0] }) }} />
                                    <div className="w-full h-full  rounded-lg flex justify-center items-center ">
                                        <div onClick={() => { updateImageBannerTeam.current.click() }} className="5/6 h-52 rounded-md p-3" style={{ backgroundImage: `url(${teamBanner.image})`, backgroundSize: "100% 100% ", cursor: "pointer",backgroundRepeat:"no-repeat" }}>
                                            <div className="h-full w-full flex justify-center items-center " style={{ backgroundColor: "rgba(225,225,225,0.7)", borderRadius: 5 }}>
                                                <span className="text-gray-50">Foto All teams</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 p-2 flex ">
                                    <div className="xs:w-full lg:w-3/4   text-gray-500">
                                        <div className="w-ful  text-3xl flex  justify-center items-center font-bold">
                                            Team Arwics
                                             </div>
                                        <div className="w-full xs:p-2 lg:p-10">
                                            <TextArea value={teamBanner.description} onChange={(e) => { setTeamBanner({ ...teamBanner, description: e.target.value }) }} />
                                            <button onClick={handlUpdateBannerTeam} className=" ml-18 w-24 h-12 bg-blue-400 text-gray-50 rounded-sm">update</button>

                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="xs:grid-cols-1 grid md:grid-cols-3 mt-5 gap-1 justify-center ">
                                <div className="text-center mt-5 border-solid border-2 border-red-200" >
                                <input type="file" hidden name="image" ref={insertImagePerson} onChange={(e) => { setTeamInsert({ ...teamInsert, image: e.target.files[0] }) }} />
                                    <div className="h-12 pt-5 text-gray-50  ">
                                        Insert Team
                                    </div>

                                    <div onClick={()=>{insertImagePerson.current.click()}} className="xs:w-62  xs:h-80  lg:w-64 lg:h-80  flex justify-center items-center rounded-lg mx-auto border-solid border-2 border-gray-200"  >
                                        {/* <img src={data.foto} style={{ objectFit: "contain" }} /> */}
                                        <div className="h-24 w-full bg-gray-200 flex justify-center items-center rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="xs:w-62 lg:w-80 h-14  px-10 mx-auto text-gray-50" >
                                        <TextInputs value={teamInsert.nama} onChange={(e) => {  setTeamInsert({ ...teamInsert,nama: e.target.value }) }} />

                                    </div>
                                    <div className="xs:w-62 lg:w-80 h-14 px-10  mx-auto text-gray-50  ">
                                        <TextInputs value={teamInsert.posisi} onChange={(e) => { setTeamInsert({ ...teamInsert, posisi: e.target.value }) }} />

                                    </div>
                                    <div className="h-12 w-full ">
                                        <button onClick={handleInsertPerson} className=" ml-18 w-24 h-12 bg-blue-400 text-gray-50 rounded-sm">update</button>
                                    </div>
                                </div>
                                {teamList.team.map((data, index) => {
                                    return (
                                        <div key={index} className="text-center mt-5 border-solid border-2 border-red-200" >
                                            <OptionButton
                                                onEditing={teamOnEditing}
                                                cancleEdit={() => SetTeamOnEditing(false)}
                                                editabled={true}
                                                setOnEditing={() => { SetTeamOnEditing(true); SetTeamIndexEdit(index); setTeamUpdate({ ...teamUpdate, nama: data.nama, posisi: data.posisi, id: data.id_team, image: data.foto }) }}
                                                index={index}
                                                indexEdit={teamIndexEdit}
                                                onDelete={(e)=>{deletePerson(e,data.id_team)}}
                                            />
                                            <div className="xs:w-62  xs:h-80  lg:w-64 lg:h-80  flex justify-center items-center rounded-lg mx-auto border-solid border-2 border-red-200 " >
                                            <input type="file" hidden name="image" ref={updateImageTeam} onChange={(e) => { setTeamUpdate({ ...teamUpdate, image: e.target.files[0] }) }} />
                                                    {teamOnEditing && teamIndexEdit == index ?
                                                    <div className="h-24 w-full bg-gray-200 flex justify-center items-center rounded-lg" onClick={() => { updateImageTeam.current.click() }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="white">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    :
                                                    <img src={data.foto} style={{ objectFit: "contain" }} />
                                                }
                                            </div>
                                            <div className="xs:w-62 lg:w-80 h-14  px-10 mx-auto text-gray-50" >

                                                {teamOnEditing && teamIndexEdit == index ?
                                                    <TextInputs value={teamUpdate.nama} onChange={(e) => { setTeamUpdate({ ...teamUpdate, nama: e.target.value }) }} />
                                                    :
                                                    <span className="font-bold">{data.nama}</span>
                                                }
                                            </div>
                                            <div className="xs:w-62 lg:w-80 h-14 px-10  mx-auto text-gray-50  ">
                                                {teamOnEditing && teamIndexEdit == index ?
                                                    <TextInputs value={teamUpdate.posisi} onChange={(e) => { setTeamUpdate({ ...teamUpdate, posisi: e.target.value }) }} />
                                                    :
                                                    <span>{data.posisi}</span>
                                                }
                                            </div>
                                            <div className="h-12 w-full ">
                                                <button onClick={handlUpdatePerson} className=" ml-18 w-24 h-12 bg-blue-400 text-gray-50 rounded-sm">update</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800">
                        <div className="w-full bg-gray-300 h-32 flex justify-center items-center text-4xl text-gray-700 font-bold">
                            Our Client
                         </div>
                        <div className="bg-gray-300 flex justify-center flex-wrap items-center pb-32 client"
                            style={{ clipPath: " polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}>
                            <div className="xs:w-full lg:w-3/4  flex justify-center flex-wrap xs:mb-52 md:mb-5">
                                {client.map((data, index) => {
                                    return (
                                        <div key={index} className="w-24  h-24  m-3 ">
                                            <OptionButton
                                                onEditing={teamOnEditing}
                                                cancleEdit={() => SetTeamOnEditing(false)}
                                                editabled={false}
                                                setOnEditing={() => { SetTeamOnEditing(true); SetTeamIndexEdit(index) }}
                                                index={index}
                                                indexEdit={teamIndexEdit}
                                            />
                                            <img
                                                src={`${data.logo}`}
                                                alt="Picture of the author"
                                                width={380}
                                                height={380}
                                                objectfit="contain"
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Layout >
    );

}

export default About;


About.getInitialProps = async (ctx) => {
    const options = {
        method: 'GET',

    };

    const resFilosofi = await fetch(`${config.piranti.griyo_utomo}/list_filosofi`, options);
    const resFilosofiJson = await resFilosofi.json()

    const resTagline = await fetch(`${config.piranti.griyo_utomo}/gettagline`, options);
    const resTaglineJson = await resTagline.json()

    const resJenis = await fetch(`${config.piranti.griyo_utomo}/list_jenis`, options);
    const resjenisJson = await resJenis.json()


    const resType = await fetch(`${config.piranti.griyo_utomo}/list_type`, options);
    const resTypeJson = await resType.json()

    const resTeam = await fetch(`${config.piranti.griyo_utomo}/list_team`, options);
    const resTeamJson = await resTeam.json()


    return {

        filosofiList: resFilosofiJson.result,
        taglineList: resTaglineJson.result,
        jenislist: resjenisJson.result,
        typeList: resTypeJson.result,
        teamList: resTeamJson.result

    }
}
