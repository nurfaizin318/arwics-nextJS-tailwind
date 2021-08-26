import '../styles/globals.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useRef,useEffect } from 'react';
import {useRouter} from 'next/router'



function MyApp({ Component, pageProps }) {



  const Router = useRouter()
  const auth = async() =>{
      const status = await localStorage.getItem("logged")
      return status;
  }

  const handleRouteChange = () => {
    window.gtag('config', '[Tracking ID]', {
      page_path: location.pathname,
    });
  };


useEffect(() => {
    

    

  },[])
  return <Component {...pageProps} />
}

export default MyApp;
