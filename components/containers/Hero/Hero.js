// Components
import {Box, Text, Button} from '@chakra-ui/react';
import Image from 'next/image';

//Styles
import styles from './styles';


// Media 
import bgImage from '../../../public/example.png';

function Hero() {
    return (
<Box sx={styles.container}>
<Box sx={styles.content}>
  <Text as='h1' sx={styles.title}>Professional Air <br/> Duct Cleaning <br/></Text>
<Box sx={styles.buttonContainer}>
  <Button type='button' sx={styles.button}>Request A Service</Button>
</Box>
<Text as='h3' color='white' fontFamily='Montserrat' fontSize='15px'>Licensed, Bonded & Insured</Text>
</Box>
  </Box>

    )
}




export default Hero
