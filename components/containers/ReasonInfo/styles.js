const styles = {
container: {
display: 'flex',
flexDirection: ['column'],
background: 'white',
textAlign: 'center',
fontFamily: 'Montserrat',



h1: {
    fontSize: '25px',
    color: 'black',
    fontWeight: 'bold',
    margin: '15px',
}
},

wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
},

infoCard: {
display: 'flex',
flexDirection: 'column', 
justifyContent: 'center',
alignItems: 'center',
margin: '20px',
background: 'lightgray',
padding: '20px',
borderRadius: '20px',
outline: 'none',
},
iconContainer: {
    fontSize: '35px',
    margin: '10px',
},

description: {
    fontFamily: 'Montserrat',
    fontWeight: 'medium'
},

introContainer: {
    pr: ['25px', '25px', '50px'],
    pl: ['25px'],
    pt: ['25px']
}
};


export default styles;