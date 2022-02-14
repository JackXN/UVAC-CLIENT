// Components
import {Box, StatUpArrow, Text} from '@chakra-ui/react';
import {useState} from 'react';
import Image from 'next/image';
import Sticky from 'react-stickynode';
import NavItems from './NavbarData';
import styled from 'styled-components';

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

// Styles
import styles from './styles';


// Image
import Logo from '../../../public/uvaclogo.png'


// Menu Items





function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [isSticky, setIsSticky] = useState(false); 

const handleStateChange = (status) => {
  if(status.status === Sticky.STATUS_FIXED) {
    setIsSticky(true);
  }else if (status.status === Sticky.STATUS_ORIGINAL) {
    setIsSticky(false)
  }
}


  return (
    <Sticky>
<Box sx={styles.nav}>
<Box sx={styles.leftHeader}>
  <Image src='/uvaclogo.png' alt='UVAC Logo' height='250px' width='250px'/>
</Box>
<Box onClick={() => setIsOpen(!isOpen)} sx={styles.hamburger}>
<span/>
<span/>
<span/>
<span/>
</Box>
<Box sx={styles.menu} isOpen={isOpen}>
{NavItems.map((item, index) => (
 
))}
</Box>
   </Box>
   </Sticky>
  )
}






const LinkItem = styled.div`
  padding: 6px;
  color: white;
  margin: 20px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: light;
  font-size: 20px;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  text-align: center;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: none;
  margin-right: 30px;
  margin-top: 35px;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const Logo = styled.div`
padding: 2rem 0;
height 69px;
width: 69px;

`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }

  @media (min-width: 1700px) {
    margin-right: 200px;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
color: white;

  float:left;

@media(max-width: 750px) {
  height: 140px;
  transform: skew(-10deg) rotate(2deg);
  -webkit-transform: skew(-10deg) rotate(2deg);
  -moz-transform: skew(-10deg) rotate(2deg);
margin: 10px;
}

@media(min-width: 1500px) {

}

@media(min-width: 1800px) {
  font-size: 15px;
}


@media(min-width: 2000px) {
  
  font-size: 17px;
  
}



  &:hover {
    color: white;
`;

export const MenuButton = styled.a`
  border-radius: 15px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: transparent;
  border: 1px solid gray;
  color: white;
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 15px;
  border-radius: 5px;

  .nav-buttons {
    color: white;
    text-decoration: none;
  }

  .nav-buttons:hover {
    color: red;
  }
`;



export default Navbar
