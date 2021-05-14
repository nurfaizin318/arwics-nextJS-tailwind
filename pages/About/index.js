import Layout from '../../components/Layout';
import Image from "next/image";



const About = () => {



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

     const cooperation = [
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

     const myLoader = ({ src, width, quality }) => {
          return `https://images.unsplash.com/photo-1614602042626-1c44d897a076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`
     }
     return (
          <Layout title="About">
               <div className=" about xs:bg-gray-200 lg:bg-gray-50  xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen grid xs:grid-cols-1 lg:grid-cols-2 pt-14 " >
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
                    <div className="xs:h-auto lg:h-full xs:w-full lg:w-full  text-4xl flex  justify-center text-sm py-2   ">
                         <div className="xs:text-xl sm:text-lg md:text-xl lg:text-sm xl:text-xl  2xl:text-sm xs:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-gray-600 p-10   ">
                              <b className="text-2xl">Filosofi warna dan logo:</b><br></br>
                              <b> Merah : </b><br></br>
                              Keberanian, Kekuatan, Energi, Gairah, Semangat dan Adrenalin<br></br>
                              <b>Kuning :</b><br></br>
                         Ceria, Bahagia, Energik dan Optimis<br></br>
                              <b> Biru :</b><br></br>
                         Stabil, Kecerdasan, Rasa Percaya Diri<br></br>

                              <b>Logo (cerminan Huruf A atau Segitiga) :</b><br></br>
                         Segitiga yang simetris dapat menjadi simbol untuk hukum, ilmu
                         dan agama.
                         Makna tersembunyi segitiga dalam logo dapat
                         digunakan untuk
                         menyampaikan perkembangan, arah dan tujuan,
                         maskulinitas, ketegaran,
                         stabilitas dan menembus batas. Dalam
                         spiritualitas bentuk ini digunakan
                         untuk mewakili pengenalan diri,
                         dan pencerahan.
                         </div>
                    </div>
               </div>
               <div className=" w-full flex justify-center">
                    <div className="xs:w-full lg:w-3/4 h-full flex justify-center items-center text-center mt-24" style={{ overflowWrap: "break-word" }}>
                         {data.map((ctx, index) => {
                              return (
                                   <div key={index} >
                                        <div className={` xs:h-16 xs:w-16 lg:h-32 lg:w-32 bg-blue-${index * 100 + 500} rounded-full flex justify-center items-center m-4 xs:text-md lg:text-4xl text-gray-50 font-bold `}>
                                             <span>{ctx.value}</span>
                                        </div>
                                        <div className="my-5 xs:text-sm">
                                             <span>{ctx.title}</span>
                                        </div>
                                   </div>
                              )
                         })}

                    </div>
               </div>
               <div className="  bg-gray-300 mx-1  rounded-lg">
                    <div className="h-32 w-full flex justify-center items-center text-2xl font-bold text-gray-600 text-center ">
                         <span>Innovative - Engage - Trusted </span>

                    </div>
                    <div className=" pb-44 bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue rounded-t-lg p-5 background-about  my-10" >
                         <div className="  w-full  bg-gray-200 rounded-lg flex  flex-wrap justify-around ">

                              {goal.map((data, index) => {
                                   return (
                                        <div key={index} className="xs:w-72 md:w-52  lg:m-2  my-5 ">
                                             <div className="flex flex-wrap justify-center ">
                                                  <img
                                                       src={`${data.icon}`}
                                                       alt="Picture of the author"
                                                       width={100}
                                                       height={120}
                                                       objectfit="contain"
                                                  />
                                             </div>
                                             <div className="flex justify-center items-center font-bold text-xl ">
                                                  {data.title}
                                             </div>
                                             <div className=" flex justify-center items-center p-1 text-center">
                                                  {data.description}
                                             </div>
                                        </div>

                                   )
                              })}

                         </div>
                         <div className="  w-full mt-10 h-auto mb-40 mx-auto ">
                              <div className="grid xs:grid-cols-1 lg:grid-cols-3">
                                   <div className="w-full h-96 ">

                                        <div className="w-full h-full  rounded-lg flex justify-center items-center ">
                                             <img
                                                  src={`https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                                                  width={580}
                                                  height={400}
                                                  objectfit="contain"

                                             />
                                        </div>
                                   </div>
                                   <div className=" col-span-2 p-2 flex justify-center">
                                        <div className="xs:w-full lg:w-3/4   text-gray-50">
                                             <div className="w-ful  text-3xl flex justify-center items-center font-bold">
                                                  Team Arwics
                                             </div>
                                             <div className="w-full xs:p-2 lg:p-10">
                                                  <span>
                                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                  </span>

                                             </div>
                                        </div>
                                        <div>

                                        </div>
                                   </div>



                              </div>
                              <div className="xs:grid-cols-1 grid md:grid-cols-3 mt-5 gap-1 justify-center ">
                                   {[1, 2, 3].map((data, index) => {
                                        return (
                                             <div key={index} className="text-center " >
                                                  <div className="xs:w-62  xs:h-64  lg:w-64 lg:h-84 bg-gray-400 rounded-lg mx-auto" >
                                                       q
                                               </div>
                                                  <div className="xs:w-62 lg:w-80 p-5 b mx-auto text-gray-50">
                                                       <span className="font-bold">Name</span>
                                                  </div>
                                                  <div className="xs:w-62 lg:w-80 p-3  mx-auto text-gray-50   ">
                                                       <span>position</span>
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
                                   {cooperation.map((data, index) => {
                                        return (
                                             <div key={index} className="w-24  h-24  m-3 ">
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
     );
}

export default About;

