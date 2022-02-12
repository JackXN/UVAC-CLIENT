import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import {Box} from '@chakra-ui/react';


// Media
import test from '../public/test.jpeg'


import Navbar from '../components/containers/Navbar/Navbar';

export default function Home() {
  return (
    <>
    <Head>
      <title>UVAC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300&display=swap"/>
    </Head>
    <Box height='100vh' width='100%'>
      <Navbar/>

    </Box>
    </>
    
  )
}
