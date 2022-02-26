import { m } from "framer-motion";

const styles = {
  nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: '10px',
  },
  leftHeader: {
      display: 'flex',
     
      justifyContent: 'center',
      height: '90px',
      textAlign: 'center',
      
  },
  hamburger: {
      flexDirection: 'column',
      cursor: 'pointer',
      display: 'none',
      mr: '30px',
      mt: '20px',
      

      span: {
          height: '20px',
          width: '200px',
          backgroundColor: 'orange',
          mb: '4px',
          borderRadius: '5px'
      }
  },
  menu: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
  }


  }
  


export default styles;