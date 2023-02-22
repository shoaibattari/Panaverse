"use client";

import React from "react";

import { Box, Button, useColorModeValue,Text } from "@chakra-ui/react";
import Link from "next/link";
import Dummy from "@/components/Courses/Dummy";

function AIQ4() {
  return (
    <>
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
        <Text
         fontWeight="bold"
         fontSize={{ lg: "6xl", md: "2xl", base: "1xl" }} ////////
         align="center"
         color="white"
         // m="10px"   ////////
        >
          Artificial Intelligence and Deep Learning Specialization Quarter 4
          <br />
          Duration: 13 Weeks
          <br />
          Course Description:
        </Text>
      </Box>
      <Dummy />
      <Box   boxSize={{ lg: "3xl", md: "2xl" }} //////
        ml={{ lg: "25%", md: "5%", base: "0%" }} ////////////
        p={{ lg: "5", md: "3", base: "2" }}
        display="flex"
        justifyContent="space-around"
        mt={{ lg: "2400", md: "2400", base: "" }}
      >
          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/">
             Home
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
            <Link color="teal.500" href="/AIQ3">
            AI Q3
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
            All Courses
            </Link>
          </Button>
        </Box>
    </>
  );
}

export default AIQ4;
