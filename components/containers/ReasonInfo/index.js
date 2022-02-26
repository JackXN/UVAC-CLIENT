// Components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';


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
<Text as='h1' fontSize='27px' fontWeight='600' fontFamily='Montserrat' textTransform='uppercase'>Why Clean Your Air Ducts?</Text>
<Box sx={styles.introContainer}>
<Text as ='p'>Over time and even after the construction of a new home dust, pollen, bacteria, fungus, spores, mold and even debris left from construction crews can accumulate within your air ducts. 

These foreign objects can negatively affect your HVAC system by impeding airflow, adding strain to your system and ultimately resulting in increased utility costs. 

Uncleaned air ducts also allow dust and other particles to continually circulate in the air while accumulating on surfaces throughout your home. 

If you find that you need to dust frequently, dirty air ducts may be the culprit. Most importantly, a poorly maintained air system can easily introduce dust and other harmful particles into the same indoor air you and your loved ones are breathing.</Text>

            </Box>
<Box sx={styles.wrapper}>
{data.map((item, index) => (
<Box sx={styles.infoCard} key={index}>
    <Box sx={styles.iconContainer}>
 <img height='50px' width='50px' layout='fill' src={item.image}/>
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
