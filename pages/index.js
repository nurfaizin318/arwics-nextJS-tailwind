import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Page() {

  const [visible, setVisible] = useState(false);


 const scrollToTop =()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <Layout>
      <div className="">
        <div className="w-full min-h-screen md:h-2/3 lg:h-1/2  grid grid-cols-1 lg:grid-cols-2  ">
          <div className="w-full h-full flex justify-center items-center  py-20">
            <div className="w-4/5 h-2/3  flex justify-center items-center">
              <div>
                <div className="xs:text-5xl md:text-6xl text-gray-700">
                  WELCOME TO ARWICS
              </div>
                <div className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
                <div>
                  <button className="border-none outline-none h-12 w-32 bg-yellow-4 00 rounded-sm text-gray-50 mt-5">More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full xs:hidden md:hidden lg:flex  relative md-hidden overflow-hidden justify-center items-center">
            <div className="w-full h-full md:h-2/3 lg:h-4/5  rounded-full bg-yellow-400 absolute -right-96 ">

            </div>
            <div className="ml-24  xs:hidden md:hidden lg:block xl:block" >
              <Image
                src='/vector.png'
                width={600}
                height={600}
                objectFit="cover"
              />
            </div>
          </div>

        </div>

        <div className="gradient-background1 mx-1">
          <div className=" bg-custom-blue bisnis-model py-52 ">
            <div className="text-3xl text-gray-50 font-bold p-10">
              Our Bisnis Model
          </div>
            <div className="bg-custom-yellow">
              <div className="md:w-full  flex justify-center items-center min-h-screen py-20 bg-custom-blue grid xs:grid-cols-1 sm:grid-cols-2   gap-1 p-0 ">

                {[1, 2, 3, 4, 5, 6].map((data, index) => {
                  return (
                    <div key={index} className=" min-h-96 sm:w-full xs:w-full flex justify-center items-cennter lg:w-4/5 lg:h-full  m-auto">
                      <div>
                        <div>
                          <Image
                            src='/vector.png'
                            width={500}
                            height={500}
                            objectFit="cover"
                          />
                        </div>
                        <div className=" flex justify-center h-24    text-2xl text-white ">
                          Losrem Ipsum
                        </div>
                      </div>
                    </div>
                  )
                })}


              </div>
            </div>

          </div>
          <div className=" min-h-52 py-10 bg-custom-red mx-1 ">
            <div className="p-5 text-4xl  text-gray-50 font-bold ">
              Our Commercial Agreement Model
            </div>
            <div className="flex items-center flex-wrap justify-center py-5">
              {[1, 2, 3, 4,].map((data, index) => {
                return (
                  <div key={index} className="h-52 w-40  bg-yellow-400  m-2 ">

                  </div>

                )
              })}

            </div>
          </div>
        </div>
        {/* section */}
        <div className="gradient-background2 mx-1">
          <div className="licensed bg-custom-yellow py-10 relative overflow-hidden flex items-center z-10  py-52">
            <div className="z-20 w-full">
              <div className="text-4xl text-gray-700 p-5 font-bold z-30">
                Our Licensed Aplication
            </div>
              <div className=" w-4/5 z-30  mx-auto flex items-center flex-wrap ">
                {[1, 2, 3,].map((data, index) => {
                  return (
                    <div key={index} className="xs h-96 w-96  bg-gray-100 mx-auto m-1">

                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className=" bg-custom-blue mx-1">
          <div className="w-full h-24 bg-custom-blue text-4xl flex items-center text-gray-50 p-4 font-bold">
            Isales Product
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 w-full ">
            <div className="h-11/122   flex justify-center items-center">
              <Image
                src='/vector.png'
                width={700}
                height={700}
                objectFit="cover"
              />
            </div>
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-4/5    m-4 p-4">
                <div className="text-white font-bold  text-2xl">
                  i-sales telesales

                  </div>
                <div className="text-white my-3 ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                <div>
                  <button className="w-40 h-12 bg-yellow-400 rounded-md">More Info</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className=" w-full bg-custom-red min-h-screen flex items-center ">
          <div>
            <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
              <div className="flex items-center">
                <div className="w-4/5  m-4  p-4">
                  <div className="text-white font-bold  text-2xl">
                    i-sales Agent

                  </div>
                  <div className="text-white my-3 ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div>
                    <button className="w-40 h-12 bg-yellow-400 rounded-md">More Info</button>
                  </div>

                </div>
              </div>
              <div className=" flex justify-center items-center">
                <Image
                  src='/vector.png'
                  width={700}
                  height={700}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="bg-purple-600">
          <div className=" xs:pb-52 lg:pb-0 w-full bg-custom-blue min-h-screen learning">
            <div>
              <div className="grid grid-cols-2 w-full xs:grid-cols-1 md:grid-cols-2 ">
                <div className="  flex justify-center items-center">
                  <Image
                    src='/vector.png'
                    width={700}
                    height={700}
                    objectFit="cover"
                  />
                </div>
                <div className="h-full  flex items-center">
                  <div className="w 4/5 m-4 p-4">
                    <div className="text-gray-700 font-bold  text-2xl">
                      i-sales Learning
                  </div>
                    <div className="text-white my-3 text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                    <div>
                      <button className="w-40 h-12 bg-custom-yellow  text-gray-900 rounded-md">More Info</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>

        </div>

      </div>
      <button
        onClick={scrollToTop}
        className="absolute bg-gray-50 h-16 w-16 flex justify-center items-center rounded-full right-10 p-4 hover:bg-gray-300">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
                </svg>
    </button>

    </Layout>




  )
}

















