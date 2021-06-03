import '../styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useRef } from 'react';
import {useRouter} from 'next/router'
import { route } from 'next/dist/next-server/server/router';


function MyApp({ Component, pageProps }) {

  const Router = useRouter()
  const auth = async() =>{
      const status = await localStorage.getItem("logged")
      return status;
  }
  React.useEffect(()=>{

      auth()
      .then((status)=>{
          if(!status && Router.pathname.startsWith("/Admin")){
            return  Router.replace("/Login")

          }
          return  null
      })

  },[])
  return <Component {...pageProps} />
}

export default MyApp;
