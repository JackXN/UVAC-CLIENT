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
  <Text as='h1' sx={styles.title}>For The Greenest <br/> Grass On The Block. <br/></Text>
<Box sx={styles.buttonContainer}>
  <Button type='button' sx={styles.button} sx={styles.buttonOne}>Get A Free Quote</Button>
  <Button type='button' sx={styles.button} sx={styles.buttonTwo}>Learn More</Button>
</Box>
<Text as='h3' color='white' fontFamily='Montserrat' fontSize='16px' fontWeight="bold">Lawn Revival Service</Text>
</Box>
  </Box>

    )
}




export default Hero
