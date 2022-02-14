import { m } from "framer-motion";

const styles = {
  nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
  },
  leftHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90px',
      textAlign: 'center',
  },
  hamburger: {
      flexDirection: 'column',
      cursor: 'pointer',
      display: 'none',
      mr: '30px',
      mt: '35px',

      span: {
          height: '2px',
          width: '25px',
          backgroundColor: 'white',
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