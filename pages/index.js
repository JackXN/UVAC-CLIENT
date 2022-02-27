import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// Components
import {Box} from '@chakra-ui/react';
import Navbar from '../components/containers/Navbar/Navbar';
import Hero from '../components/containers/Hero/Hero';
import InfoCard from '../components/containers/InfoCard/index';
import Map from '../components/containers/Map/index';
import ReasonInfo from '../components/containers/ReasonInfo/index';
import SimpleMap from '../components/containers/GoogleMap/index';
import SectionBanner from '../components/containers/SectionBanner/index';


// Info data
import data from '../components/containers/InfoCard/data';


export default function Home() {
  return (
    <>
    <Head>
      <title>UVAC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300&display=swap"/>
    </Head>
    <Box background='black' sx={styles.wrapper}>
    <Navbar/>
    <Hero/>
    <Map/>
    <SectionBanner/>
    <ReasonInfo/>
    <SimpleMap/>
    <InfoCard data={data}/>
    </Box>
    </>
    
  )
}




const styles = {
  wrapper: {
    // backgroundImage: "url('../background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }
}