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
    label: "Certified Dealer",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    isTrue: true,
    image: [Certification],
  },
  {
    label: "Request A Service Call",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    image: [Support],
  },
  {
    label: "Financing Options",
    description:
      "Whether you are looking for quality service or professional and honest inspections, UVAC Elite is certified and up to par with the latest standards",
    image: [Finance],
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
                <Box alignSelf="center" sx={styles.icon}>{item.image ? <Support /> : null}</Box>
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