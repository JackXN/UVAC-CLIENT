import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import {Box} from '@chakra-ui/react';

import Navbar from '../components/containers/Navbar/Navbar';

export default function Home() {
  return (
    <>
    <Head>
      <title>UVAC</title>
    </Head>
    <Box>
      <Navbar/>

    </Box>
    </>
    
  )
}
