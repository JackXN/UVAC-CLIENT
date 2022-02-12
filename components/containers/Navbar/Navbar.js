// Components
import {Box, StatUpArrow, Text} from '@chakra-ui/react';
import {useState} from 'react';
import Image from 'next/image';
import Sticky from 'react-stickynode';

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

// Styles
import styles from './styles';


// Image
import Logo from '../../../public/uvaclogo.png'


// Menu Items

const links = [
  {
    title: "Home",
    link: "www.google.com",
  },
  {
    title: "About Us",
    link: 'www.google.com',
  },
  {
    title: 'Contact',
    link: 'Contact',
  }
]



function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [isSticky, setIsSticky] = useState(false); 

const handleStateChange = (status) => {
  if(status.status === Sticky.STATUS_FIXED) {
    setIsSticky(true);
  }else if (status.status === Sticky.STATUS_ORIGINAL) {
    setIsSticky(false)
  }
}


  return (
    <Sticky>
<Box sx={styles.nav}>
<Box sx={styles.leftHeader}>
  <Image src='/uvaclogo.png' alt='UVAC Logo' height='250px' width='250px'/>
</Box>
<Box onClick={() => setIsOpen(!isOpen)} sx={styles.hamburger}>

</Box>
   </Box>
   </Sticky>
  )
}


export default Navbar
