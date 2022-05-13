// Components
import {Box, Text, Button} from '@chakra-ui/react';
import Image from 'next/image';

// Styles
import styles from './styles';
import imageOne from '../../../public/grassPainting2.jpeg';

function index() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.leftContainer}>
<Image src={imageOne} height='400px' width='500' x='10'/>
            </Box>
            <Box sx={styles.rightContainer}>
            <Text as='p' color='#96BC20' >RESIDENTIAL & COMMERCIAL LAWN SERVICE</Text>
            <Text as='h1' >Professional lawn care that makes a great first impression</Text>
            <Box sx={styles.textContainer}>
            We are committed to enhancing our clients’ most important investment by exceeding their lawn service needs with reliability and value. Imagine quality family time, rest and relaxation, and leaving the dirty work up to us.
Your home & business is just as important as ours. Like any other turf, the lawn around your house or business requires attention and service. Our flexibility and ability to customize a lawn care program for your property allows you to make a great first impression.
        </Box>
        </Box>
        </Box>
    )
}

export default index
