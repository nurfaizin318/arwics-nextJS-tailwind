import Layout from '../../../components/Layout';
import TextInputs from '../../../components/TextInputs';
import TextArea from '../../../components/TextArea';
import OptionButton from '../../../components/OptionButton';
import React, { useState } from 'react'

const About = () => {


    const [goalIndexEdit, SetGoalIndexEdit] = useState("");
    const [goalOnEditing, SetGoalOnEditing] = useState(false)



    const [dataIndexEdit, SetDataIndexEdit] = useState("");
    const [dataOnEditing, SetDataOnEditing] = useState(false)

    const [teamIndexEdit, SetTeamIndexEdit] = useState("");
    const [teamOnEditing, SetTeamOnEditing] = useState(false)

    const [clienIndexEdit, SetClienIndexEdit] = useState("");
    const [clienOnEditing, SetClienOnEditing] = useState(false)


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
        <div>
            <Layout title="About">
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
                            <TextInputs value="Keberanian, Kekuatan, Energi, Gairah, Semangat dan Adrenalin" onChange={() => { }} />
                            <b>Kuning :</b><br></br>
                            <TextInputs value="Ceria, Bahagia, Energik dan Optimis" onChange={() => { }} />
                            <b> Biru :</b><br></br>
                            <TextInputs value=" Stabil, Kecerdasan, Rasa Percaya Diri" onChange={() => { }} />

                            <b>Logo (cerminan Huruf A atau Segitiga) :</b><br></br>
                            <TextArea value="     Segitiga yang simetris dapat menjadi simbol untuk hukum, ilmu
                         dan agama.
                         Makna tersembunyi segitiga dalam logo dapat
                         digunakan untuk
                         menyampaikan perkembangan, arah dan tujuan,
                         maskulinitas, ketegaran,
                         stabilitas dan menembus batas. Dalam
                         spiritualitas bentuk ini digunakan
                         untuk mewakili pengenalan diri,
                         dan pencerahan." onChange={() => { }} />
                            <button className="w-24 h-10 bg-blue-400 rounded-md text-sm text-gray-200">update</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <div className="xs:w-full lg:w-3/4 h-full flex justify-center items-center text-center " style={{ overflowWrap: "break-word" }}>
                        {data.map((ctx, index) => {
                            return (
                                <div key={index} className="border-2 border-red-200 mx-1 my-3">
                                    <div key={index} >
                                        <OptionButton
                                            onEditing={dataOnEditing}
                                            cancleEdit={() => SetDataOnEditing(false)}
                                            editabled={true}
                                            setOnEditing={() => { SetDataOnEditing(true); SetDataIndexEdit(index) }}
                                            index={index}
                                            indexEdit={dataIndexEdit}
                                        />
                                        <div className={` xs:h-16 xs:w-16 lg:h-52 lg:w-32  rounded-full flex-col justify-center items-center m-4 xs:text-md lg:text-4xl text-gray-500 font-bold  `}>
                                            <div className="h-24 w-full  flex justify-center items-center">
                                                {dataOnEditing && dataIndexEdit == index ?

                                                    <TextInputs value={ctx.value} onChange={() => { }} />
                                                    :
                                                    ctx.value
                                                }
                                            </div>
                                            <div className="h-12 w-full text-sm ">
                                                {dataOnEditing && dataIndexEdit == index ?
                                                    <TextInputs value={ctx.value} onChange={() => { }} />
                                                    :
                                                    ctx.title
                                                }
                                            </div>
                                            <div className="h-12 w-full">
                                                {dataOnEditing && dataIndexEdit == index &&
                                                    <button className="h-10 w-full rounded-sm bg-blue-300 tetx-gray-50 text-sm ">update</button>
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
                        <TextInputs value="Innovative - Engage - Trusted" onChange={() => { }} />
                        <button className="h-10 w-3/4 bg-blue-300 text-gray-50 text-sm">update</button>
                    </div>
                    <div className=" pb-44 bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue rounded-t-lg p-5 background-about  my-10" >
                        <div className="  w-full  bg-gray-50 rounded-lg flex  flex-wrap justify-center ">
                            {goal.map((data, index) => {
                                return (
                                    <>
                                        <div key={index} className="xs:w-72 md:w-52  lg:m-2  my-5  bg-blue-200">
                                            <OptionButton
                                                onEditing={goalOnEditing}
                                                cancleEdit={() => SetGoalOnEditing(false)}
                                                editabled={true}
                                                setOnEditing={() => { SetGoalOnEditing(true); SetGoalIndexEdit(index) }}
                                                index={index}
                                                indexEdit={goalIndexEdit}
                                            />
                                            <div className="flex flex-wrap justify-center  ">
                                                {goalOnEditing && goalIndexEdit == index ?
                                                    <div className="w-full h-32 bg-blue-600 mx-1"></div>
                                                    :
                                                    <img
                                                        src={`${data.icon}`}
                                                        alt="Picture of the author"
                                                        width={100}
                                                        height={120}
                                                        objectfit="contain"
                                                    />
                                                }

                                            </div>
                                            <div className="flex h-16  justify-center items-center font-bold text-xl ">
                                                {goalOnEditing && goalIndexEdit == index ?
                                                    <TextInputs value={data.title} onChange={() => { }} />
                                                    :
                                                    data.title
                                                }
                                            </div>
                                            <div className="h-44 flex justify-center  text-sm p-1 text-center">
                                                {goalOnEditing && goalIndexEdit == index ?
                                                    <TextArea value={data.title} onChange={() => { }} />
                                                    :
                                                    data.description
                                                }
                                            </div>
                                            <div className="h-12 w-full flex justify-center items-center">
                                                {goalOnEditing && goalIndexEdit == index &&
                                                    <button className="h-10 w-3/4 bg-blue-300">update</button>}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="w-3/4 mt-10 h-auto mb-40 mx-auto ">
                            <div className="grid xs:grid-cols-1 lg:grid-cols-3 bg-blue-50 rounded-md">
                                <div className="w-full  ">
                                    <div className="w-full h-full  rounded-lg flex justify-center items-center ">
                                        <div className="5/6 h-52 bg-red-500 flex justify-center items-center">
                                            <span className="text-gray-50">Foto All teams</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-44 w-44" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 p-2 flex ">
                                    <div className="xs:w-full lg:w-3/4   text-gray-500">
                                        <div className="w-ful  text-3xl flex  justify-center items-center font-bold">
                                            Team Arwics
                                             </div>
                                        <div className="w-full xs:p-2 lg:p-10">
                                            <TextArea value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." onChange={() => { }} />
                                            <button className=" ml-18 w-24 h-12 bg-blue-400 text-gray-50 rounded-sm">update</button>

                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="xs:grid-cols-1 grid md:grid-cols-3 mt-5 gap-1 justify-center ">
                                {[1, 2, 3, 4, 5].map((data, index) => {
                                    return (
                                        <div key={index} className="text-center " >
                                            <OptionButton
                                                onEditing={teamOnEditing}
                                                cancleEdit={() => SetTeamOnEditing(false)}
                                                editabled={true}
                                                setOnEditing={() => { SetTeamOnEditing(true); SetTeamIndexEdit(index) }}
                                                index={index}
                                                indexEdit={teamIndexEdit}
                                            />
                                            <div className="xs:w-62  xs:h-64  lg:w-64 lg:h-84 bg-gray-400 rounded-lg mx-auto" >
                                            </div>
                                            <div className="xs:w-62 lg:w-80 h-14  px-10 mx-auto text-gray-50 ">
                                                {teamOnEditing && teamIndexEdit == index ?
                                                    <TextInputs value="name" onChange={() => { }} />
                                                    :
                                                    <span className="font-bold">Name</span>
                                                }
                                            </div>
                                            <div className="xs:w-62 lg:w-80 h-14 px-10  mx-auto text-gray-50  ">
                                                {teamOnEditing && teamIndexEdit == index ?
                                                    <TextInputs value="Position" onChange={() => { }} />
                                                    :
                                                    <span>position</span>
                                                }
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
            </Layout>
        </div>
    );

}

export default About;
