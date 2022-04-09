import Head from "next/head";
import Script from 'next/script'
import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

       return (<>
                     <Head>
                            <meta
                                   name="description"
                                   content="A plateform for developers"
                            />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/images/favicon.ico" />
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                            <title>AnonMSG</title>
                     </Head>
                     <Script
                            src="https://kit.fontawesome.com/abd63e7fe1.js" 
                            crossOrigin="anonymous"
                     />
                     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"/>

                     <Layout><Component {...pageProps} /></Layout>
              </>);
}

export default MyApp
