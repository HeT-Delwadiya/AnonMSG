import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/script'
import Layout from '../components/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

       useEffect(() => {
              typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.js') : null
       }, [])

       return (<>
                     <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                     </Head>
                     <Script
                            src="https://kit.fontawesome.com/abd63e7fe1.js" 
                            crossorigin="anonymous"
                     />
                     <Layout><Component {...pageProps} /></Layout>
              </>);
}

export default MyApp
