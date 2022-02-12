// Components
import {Box, StatUpArrow, Text} from '@chakra-ui/react';


// Styles
import styles from './styles';

function Navbar() {
  return (
   <Box sx={styles.navContainer}>
     <Box sx={styles.navbarContent}>
<Box sx={styles.leftContainer}>
  <Text as='h1'>UVAC <span>ELITE</span></Text>
    <Text as='h3' position='relative' bottom='20px'>Quality Cleaned Ventilation</Text>
</Box>
</Box>
   </Box>
  )
}


export default Navbar
