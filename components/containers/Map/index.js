// Components
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./styles";

const colorScheme = [
  {
    color: "red",
    second: "orange",
    bank: "hold up blue",
  },
];

// Icons
import { AiOutlineSafetyCertificate as Certification } from "react-icons/ai";
import { BiSupport as Support } from "react-icons/bi";
import { FaRegMoneyBillAlt as Finance } from "react-icons/fa";

const data = [
  {
    label: "Environmentally Friendly",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    isTrue: true,
    image: '/environment.svg',
  },
  {
    label: "Non-Toxic & Family Friendly",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    image: '/family.svg',
  },
  {
    label: "Pet Friendly",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    image: '/pet.svg',
  },
];

const icons = [Support, Certification, Finance];

function index() {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.card}>
            {data.map((item, index) => (
              <Box key={index} sx={styles.cardContainer}>
                <Box alignSelf="center" sx={styles.icon}>
                  <img src={item.image} alt='something' height='50px' width='50px' color='white' padding='10px'/>
                  </Box>
                  <Box sx={styles.information}>
                  <Text as="h2">{item.label}</Text>
                  <Text as="p">{item.description}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default index;
