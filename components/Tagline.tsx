import { Box, Image, LinkBox, Text, Button } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import ALL from "./Courses/All";

function Tagline() {
  return (
    <Box boxSize={{ lg: "3xl", md: "2xl" }} 
    
    ml={{ lg: "25%" }} p="5">
      <Text
        fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
        align={{ lg: "center", md: "center", base: "left" }}
        textColor="green.500"
      >
        Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
        Karachi, Lahore, Islamabad, and Peshawar
      </Text>
      <Image
        src="https://www.panaverse.co/red-p-logo-text_dao_croped.png"
        alt="panaverse-logo "
        w="650px"
      />
      <Text
        fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
        textColor="green.500"
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
            fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
            textColor="blue.500"
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
