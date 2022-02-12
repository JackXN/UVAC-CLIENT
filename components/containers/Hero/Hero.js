// Components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image'

//Styles
import styles from './styles';


// Media 
import bgImage from '../../../public/example.png'

function Hero() {
    return (
     <Box bg={bgImage} bgSize='cover' bgRepeat='no-repeat' height='100vh'>
<Box sx={styles.test} backgroundImage={bgImage}>
  <Image src={bgImage} alt='something'/>
</Box>
     </Box>
    )
}

export default Hero
