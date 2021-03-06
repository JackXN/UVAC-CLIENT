import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// Components
import {Box} from '@chakra-ui/react';
import Carousel from '../components/containers/Testimonials/Carousel';
import Navbar from '../components/containers/Navbar/Navbar';
import Hero from '../components/containers/Hero/Hero';
import InfoCard from '../components/containers/InfoCard/index';
import Map from '../components/containers/Map/index';
import ReasonInfo from '../components/containers/ReasonInfo/index';
import SimpleMap from '../components/containers/GoogleMap/index';
import SectionBanner from '../components/containers/SectionBanner/index';
import backgroundImage from '../public/background.png'

// Info data
import data from '../components/containers/InfoCard/data';
import { ChevronRightIcon } from '@chakra-ui/icons';


export default function Home() {
  return (
    <>
    <Head>
      <title>UVAC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300&display=swap"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" />


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" />
    
    
    
    </Head>
    <Box height='100%' >
    {/* <Navbar/> */}
    <Hero/>
    <Map/>
    <SectionBanner/>
    {/* <Carousel/> */}
    </Box>
    </>
    
  )
}




const styles = {

}


