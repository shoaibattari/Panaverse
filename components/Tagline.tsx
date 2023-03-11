import { Box, LinkBox, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import PanaLogo from "../public/Logo.png";

function Tagline() {
  return (
    <Box
      // boxSize={{ lg: "3xl", md: "2xl" }}
      // ml={{ xl:"25%",lg: "15%", md: "5%", base: "0%" }}
      ml={{ xl: "4%", lg: "1%", md: "1%", base: "0%" }}
      p="5"
    >
      <Text
        fontSize={{ lg: "5xl", md: "4xl", base: "2xl" }}
        align={{ lg: "center", md: "center", base: "left" }}
        textColor="green.500"
      >
        Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
        Karachi, Lahore, Islamabad, and Peshawar
      </Text>
      <Image
        src={PanaLogo}
        alt="panaverse-logo"
        style={{
          margin: "auto",
        }}
      />

      <Text
        fontSize={{ lg: "3xl", md: "2xl", base: "2xl" }}
        textColor="green.500"
        align={{ lg: "center", md: "center", base: "left" }}
        p="3"
      >
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
        Panaverse DAO is a movement to spread these technolgies globally. It is
        community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers.
      </Text>

      <LinkBox as="article">
        <NextLink href="https://www.piaic.org/">
          <Text
            fontSize={{ lg: "3xl", md: "2xl", base: "2xl" }}
            textColor="blue.500"
            align={{ lg: "center", md: "center", base: "left" }}
            p="3"
          >
            Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
          </Text>
        </NextLink>
      </LinkBox>
    </Box>
  );
}

export default Tagline;
