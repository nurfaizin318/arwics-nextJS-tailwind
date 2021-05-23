import Layout from '../../components/Layout';
import config from "../../constanta/index";


const About = ({ filosofiList, taglineList, jenislist, typeList, teamList }) => {

     console.log(teamList.team)

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

 
     return (
          <Layout title="About">
               <div className=" about xs:bg-gray-200 lg:bg-gray-50  xs:max-h-full lg:max-h-max xs:h-auto lg:h-screen grid xs:grid-cols-1 lg:grid-cols-2 pt-14 " >
                    <div className=" xs:w-full xs:h-auto lg:w-full lg:w-1/2  flex r justify-center xs:px-20 py-16 lg:p-0">
                         <div className="xs:my-0 md:my-32 lg:my-10    xl:my-0 xs:p-0 lg:p-16  ">
                              <img
                                   src="/favicon.png"
                                   alt="Picture of the author"
                                   width={400}
                                   height={400}
                                   objectfit="contain"

                              />
                         </div>
                    </div>
                    <div className="xs:h-auto lg:h-full xs:w-full lg:w-full  text-4xl flex  justify-center text-sm py-2   ">
                         <div className="xs:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-gray-600  p-8 mt-5   " 
                         style={{  fontSize:"clamp(1rem, 1.3vw, 1.3rem)"}}
                         >
                         {/* xs:text-xl sm:text-lg md:text-2xl lg:text-base    */}
                              <b className="text-xl">Filosofi warna dan logo:</b><br></br>
                              <b> Merah : </b><br></br>
                                  {filosofiList.merah} <br></br>
                              <b>Kuning :</b><br></br>
                              {filosofiList.kuning}<br></br>
                              <b> Biru :</b><br></br>
                              {filosofiList.biru}<br></br>

                              <b>Logo (cerminan Huruf A atau Segitiga) :</b><br></br>
                                   {filosofiList.deskripsi}
                         </div>
                    </div>
               </div>
               <div className=" w-full flex justify-center">
                    <div className="xs:w-full lg:w-3/4 h-full flex justify-center items-center text-center mt-14" style={{ overflowWrap: "break-word" }}>
                         {typeList.map((ctx, index) => {
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
                         <span>{taglineList.tagline} </span>
                    </div>
                    <div className=" pb-44 bg-gradient-to-r from-softBlue via-mediumBlue to-darkBlue rounded-t-lg p-5 background-about  my-10" >
                         <div className="  w-full  bg-gray-200 rounded-lg flex  flex-wrap justify-around ">
                              {jenislist.map((data, index) => {
                                   return (
                                        <div key={index} className="xs:w-72 md:w-52  lg:m-2  my-5 ">
                                             <div className="flex flex-wrap items-center justify-center  h-32">
                                                  <img
                                                       src={`${data.image}`}
                                                       alt="Picture of the author"
                                                      
                                                       style={{objectFit:"contain",width:110,height:100}}
                                                  />
                                             </div>
                                             <div className="flex justify-center items-center font-bold text-xl ">
                                                  {data.nama}
                                             </div>
                                             <div className=" flex justify-center items-center p-1 text-center">
                                                  {data.deskripsi}
                                             </div>
                                        </div>

                                   )
                              })}

                         </div>
                         <div className="  w-full mt-10 h-auto mb-40 mx-auto ">
                              <div className="grid xs:grid-cols-1 lg:grid-cols-3">
                                   <div className="w-full h-96 ">

                                        <div className="w-full h-full  rounded-lg flex justify-center items-center rounded-lg  ">
                                             <img
                                                  src={`${teamList.image}`}
                                                  width={400}
                                                  height={400}
                                                  objectfit="contain"

                                             />
                                        </div>
                                   </div>
                                   <div className=" col-span-2 p-2 flex justify-center ">
                                        <div className="xs:w-full lg:w-3/4   text-gray-50">
                                             <div className="w-ful  text-3xl flex justify-center items-center font-bold">
                                                  Team Arwics
                                             </div>
                                             <div className="w-full xs:p-2 lg:p-10">
                                                  <span>
                                                    {teamList.deskripsi}
                                                  </span>

                                             </div>
                                        </div>
                                        <div>

                                        </div>
                                   </div>



                              </div>
                              <div className="xs:grid-cols-1 grid md:grid-cols-3 mt-5 gap-1 justify-center mt-14 ">
                                   {teamList.team.map((data, index) => {
                                        return (
                                             <div key={index} className="text-center  " >
                                                  <div className="xs:w-62  xs:h-64  lg:w-96 lg:h-96 bg-gray-400 rounded-lg mx-auto" >
                                                       <img src={data.foto} style={{width:"100%",height:"100%",objectFit:"contain"}} />
                                               </div>
                                                  <div className="xs:w-62 lg:w-80 p-5 b mx-auto text-2xl text-gray-50">
                                                       <span className="font-bold">{data.nama}</span>
                                                  </div>
                                                  <div className="xs:w-62 lg:w-80 p-3  mx-auto text-xl text-gray-50   ">
                                                       <span>{data.posisi}</span>
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
                              <div className="xs:w-full lg:w-3/4  flex justify-center flex-wrap xs:pb-72 md:pb-5 ">
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
 