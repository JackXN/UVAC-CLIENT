const styles = {
container: {
    display: 'flex',
    backgroundImage: ['none','none','none','url("./bannerbg.png")'],
    background: 'white',
    backgroundPosition: ['right','center'],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
 zIndex:'-1',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    backgroundAttachment: 'fixed',
    textAlign: 'center',
    
    h1: {
     fontSize: ['20px', '20px', '50px'],
      fontWeight: '600',

      
  },

},

rightContainer: {
  fontFamily:'PT Sans,san-serif',
  display: 'flex',
  flexDirection: 'column',
 zIndex: '1',
  flex:['1'],
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  padding: ['20px'],


  p: {
fontFamily: 'PT Sans, san-serif',
fontWeight: '700',
fontSize: ['13px','16px', '18px' ],
mt: '30px',
padding: '5px'
  },


  h1: {
    color: '#0F4920',
    mt: '50px',
    fontSize: ['20px', '35px'],
    mb: '50px',
    textTransform: 'capitalize'
  }
},

leftContainer: {
  flex:['1',],
  zIndex: '10',
 position: 'relative',
 left: ['200px', '200px', '200px'],
 display: ['none', 'none', 'none','flex']
 
  
},
textContainer: {
  fontSize: ['16px', '18px', '22px'],
  lineHeight: ['30px'],
  display: 'flex',
  flexDirection: 'column',
   textAlign: 'center',
   alignItems: 'center',
   justifyContent:'center',
  pl: ['0px','0px','0px','90px'],
  padding: ['20px', '30px']
}

}

export default styles;