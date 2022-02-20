const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'rgb(116,111,111)',
background: 'linear-gradient(90deg, rgba(116,111,111,1) 0%, rgba(49,48,48,1) 100%)',
backgroundPosition: 'left',
flexWrap: 'wrap',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
     
       
    },

    title: {
        fontSize: '20px',
        color: 'white',
        alignSelf: 'center'
    },
    information: {

    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: [
            'column',
            'row',
        ]

    }
}

export default styles;