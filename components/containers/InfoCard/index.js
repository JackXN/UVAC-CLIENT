// Component
import {Box, Text} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image';
// Icons
import Clock from '../../../public/clock.png'
import Location from '../../../public/location.png'
// Styles
import styles from './styles';

function index() {
    return (
        <Box sx={styles.container}>
<Grid templateColumns='repeat(3, 1fr)' gap={100}>
<GridItem w='100%' h='100%'  sx={styles.emergency}>
<Text as='h2'transform='skewX(10deg)' color='#847E7E'>Emergency Service Number</Text>
<Box sx={styles.banner}>
<Text as='p'>(801)-441-9433</Text>
</Box>
</GridItem>
 <GridItem w='100%' h='10'>
     <Box sx={styles.header}>
         <Box sx={styles.imageContainer} textAlign='left'>
<Image src={Clock} alt='clock'/>
<Text as='h1'>Working hours</Text>
</Box>

<Box sx={styles.information}>
    <Text as='p'>Mon - Sat 8am - 10pm</Text>
    <Text as='p'>SUNDAY closed</Text>
</Box>
</Box>
</GridItem>
<GridItem w='100%' h='10' >
<Box sx={styles.header} positon='relative' bottom='200px'>
    <Box sx={styles.imageContainer} textAlign='left'>
        <Image src={Location} alt='Location'/>
        <Text as='h1'>Location</Text>
    </Box>
    <Box sx={styles.information}>
        <Text as='p'>276 N 600 W Salt Lake City, Utah</Text>
        <Text as='p'>84010</Text>
    </Box>
</Box>

</GridItem>


</Grid>

        </Box>
    )
}

export default index
