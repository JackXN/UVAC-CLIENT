// Component
import {Box, Text} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image';
// Icons
import {BsClock as Clock} from 'react-icons/bs';
import {ImLocation as Location} from 'react-icons/im';
import {AiTwotonePhone as Phone} from 'react-icons/ai';

// Styles
import styles from './styles';

function index({data}) {
    return (
<Box sx={styles.container}>
{data.map((item, index)=> (
    <Box key={index} sx={styles.infoCards}>
<Text as='h1' fontSize='15px' color='white'>{item.label}</Text>
<Box sx={styles.infoDesc}>
<Text as='p' fontSize='13px' color='#847E7E'>{item.descOne}</Text>
<Text as='p' fontSize='13px' color='#847E7E'>{item.extra}</Text>
        </Box>
        </Box>
))}



<Box sx={styles.contact}>
<Text as='h1' fontSize='15px' color='#847E7E'> Emergency Service Number</Text>
<Text as='h1' fontSize='15px' display='flex' background='#E50E14' padding='10px' borderRadius='7px' color='white'  border='none'><Phone/> (801)-441-9433</Text>


</Box>
</Box>
    )
}

export default index
