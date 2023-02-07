"use client";

import React from "react";

import { Box, Button, useColorModeValue,Text } from "@chakra-ui/react";
import Link from "next/link";
import Dummy from "@/components/Courses/Dummy";

function BlockchainQ4() {
  return (
    <>
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
        <Text
          fontWeight="bold"
          fontSize="5xl"
          align="center"
          color="white"
          m="10px"
        >
          Web 3.0 (Blockchain) and Metaverse Specialization Quarter 4
          
          <br />
          Duration: 13 Weeks
          <br />
          Course Description:
        </Text>
      </Box>
      <Dummy />
      
      <Box boxSize="3xl" ml="25%" p="5" display="flex" justifyContent="space-around"  mt="2200">
          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/">
              Back To Home
            </Link>
          </Button>

          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/BCQ3">
              Back To Web 3.0 (Blockchain) Q3 Detail
            </Link>
          </Button>

          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/COURSES">
              Back To All Courses
            </Link>
          </Button>
        </Box>

    </>
  );
}

export default BlockchainQ4;
