// Components
import {Box, Text} from '@chakra-ui/react';


//Styles
import styles from './styles';


// Data
import data from './data';

// Icons
import {FaBiohazard as BioHazard} from 'react-icons/fa';
import {BiErrorAlt as Error} from 'react-icons/bi';
import {FaRegMoneyBillAlt as Money} from 'react-icons/fa';
import {GrFanOption as Fan} from 'react-icons/gr';


function index() {
    return (
        <Box sx={styles.container}>
<Text as='h1' fontSize='23px'>Why Clean Your Air Ducts?</Text>
<Box sx={styles.wrapper}>
{data.map((item, index) => (
<Box sx={styles.infoCard}>
    <Box sx={styles.iconContainer}>
    <BioHazard/>
    </Box>
    <Box sx={styles.description}>
<Text as='p'>{item.description}</Text>
        </Box>
</Box>

))}
</Box>
</Box>

        
    )
}

export default index
