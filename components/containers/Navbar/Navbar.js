// Components
import {Box, StatUpArrow, Text} from '@chakra-ui/react';
import Image from 'next/image'
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
  return (
   <Box sx={styles.navContainer}>
     <Box sx={styles.title}>
  <Image src={Logo} alt='something'/>
  </Box>
<Box sx={styles.navMenu}>
  <UnorderedList styleType='none' sx={styles.navItems}>
    {links.map((link)=> (
      <ListItem key={link.link} sx={styles.items}>{link.title}</ListItem>
    ))}
  </UnorderedList>
</Box>


   </Box>
  )
}


export default Navbar
