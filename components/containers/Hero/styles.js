import { m } from "framer-motion"

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '200px',
        backgroundImage: "url('../../../background.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        
    },
       

        content: {
            display: 'flex',
            flexDirection: 'column',
            padding: '50px',
            mb: '300px',
            textAlign: 'center'
        },
        title: {
            fontSize: ['35px', '35px', '35px', '50px'],
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            textTransform: 'uppercase',
        },

        buttonContainer: {
            display: 'flex',
            pb: '15px',
            mt: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        

        buttonOne: {
            background: '#1C822D',
            color:'#ffff',
            
        },

        buttonTwo: {
            background: '#ffff',
            color:'black',
           
        }
    
}

export default styles