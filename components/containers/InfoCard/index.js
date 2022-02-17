// Component
import {Box, Text} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image';
// Icons
import Clock from '../../../public/clock.png'

// Styles
import styles from './styles';

function index() {
    return (
        <Box sx={styles.container}>
<Grid templateColumns='repeat(3, 1fr)' gap={5}>
<GridItem w='100%' h='100%'  sx={styles.emergency}>
<Text as='h2'transform='skewX(10deg)' color='#847E7E'>Emergency Service Number</Text>
<Box sx={styles.banner}>
<Text as='p'>(801)-441-9433</Text>
</Box>
</GridItem>
<GridItem w='100%' h='10'>
<Image src={Clock} alt='clock'/>


</GridItem>
<GridItem w='100%' h='10' bg='blue' />


</Grid>

        </Box>
    )
}

export default index
