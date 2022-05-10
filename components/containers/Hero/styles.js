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
            fontWeight: '400',
            mr: ['20px'],
            ml: ['20px']   
        },

        buttonOne: {
            background: '#1C822D',
            color:'#ffff',
            mr: ['20px'],
        },

        buttonTwo: {
            background: '#ffff',
            color:'black',
            ml: ['20px']  
        }
    
}

export default styles