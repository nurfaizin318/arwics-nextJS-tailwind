import '../styles/globals.css'
import 'next-pagination/dist/index.css'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useRef,useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import App, { Container } from 'next/app';
import app from 'next/app';




Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};


function MyApp({ Component, pageProps }) {


  return <Component {...pageProps} />
}

export default MyApp;
