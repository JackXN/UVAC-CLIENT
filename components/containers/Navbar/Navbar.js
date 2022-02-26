import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import NavItems from "./NavbarData";
import Sticky from "react-stickynode";
import { Button } from "@chakra-ui/react";
import {Text, Box} from "@chakra-ui/react";
import Logo from '../../../public/Logo.png';
import Image from 'next/image';





function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };



  return (
    <Sticky>
      <Nav>
        <LeftHeader>
          <Box sx={styles.imageBox}>
          <Image src={Logo} alt='Logo' height='50px' width='50px' pr='20px'/>
          </Box>
       <Box sx={styles.textLogo}>
          <Text as='h1'  sx={styles.title} color='white' fontFamily='Montserrat'>UVAC <span>ELITE</span></Text>
          <Text as='h3' color='white' sx={styles.subTitle}>Ventilation And Cleaning Solutions</Text>
          </Box>
        </LeftHeader>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span/>
          <span/>
          <span/>
          <span/>
        </Hamburger>
        <Menu isOpen={isOpen}>
          {NavItems.map((item, index) => (
            <LinkItem key={index}>
              <Link
                sx={styles.link}
                activeClass="active"
                to={item.path}
              >
                {item.label}
              </Link>
            </LinkItem>
            
          ))}
          <Button 
          bg="#AD0441" 
          sx={styles.button}>
            <Link to="/login">Get A Free Quote!</Link>
          </Button>
        </Menu>
      </Nav>
    </Sticky>
  );
}

export default Navbar;

const styles = {
  link: {
    fontSize: ["20px"],
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "400",
    color: 'black',

  },
  button: {
    fontSize: ["15px"],
    fontWeight: "400",
    fontFamily: 'Rubik,sans-serif',
    color: "white",
    p: "20px",
    borderRadius: '20px',
    border: 'none',
    background: '#E50E14'
  },
  img: {
    height: "200px",
    width: "140px",
    mt: "40px",
  },
  title: {
    fontSize: '50px',
    position: 'relative',
    top: '20px'
    

  },
  subTitle: {
  position: 'relative',
  bottom: '30px',
  left: '50px'
  },
  textLogo: { 
display: ['none'],
flexDirection: 'column',

  },
  imageBox: {
    mt: '15px'
  }
};

// CLEAN UP LATER

const LinkItem = styled.div`
  padding: 6px;
  color: white;
  margin: 20px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;

&:hover {
  color: orange;
  cursor: pointer;
}
`;

const LeftHeader = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6); 
  color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
padding: 20px;
padding-bottom: 20px;
padding-top: 0px;
  
  


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

// export const Logo = styled.div`
// padding: 2rem 0;
// height 69px;
// width: 69px;

// `;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 25px;

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

// export const TextLogo = styled.div `
// display: flex;
// flex-direction: column;
// background:orange;
// `



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
