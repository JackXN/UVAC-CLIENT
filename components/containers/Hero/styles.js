const styles = {
    container: {
        display: 'flex',
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '100px',
        backgroundImage: "url('../background.png')",
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
            fontSize: ['35px', '35px', '35px', '67px'],
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            textTransform: 'uppercase',
        },

        buttonContainer: {
            pb: '15px',
            mt: '20px'

        },

        button : {
            background: '#FF5734',
            padding: '1em 1.2em',
            border: 'none',
            color: 'white',
            fontSize: '15px',
            fontFamily: 'Montserrat',
            fontWeight: '400'
                       
        }
}

export default styles