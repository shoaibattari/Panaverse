"use client";

import React from "react";


import { Box, Button, useColorModeValue,Text } from "@chakra-ui/react";
import Link from "next/link";
import Dummy from "@/components/Courses/Dummy";

function IOTQ3() {
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
        Ambient Computing and IoT Specialization Quarter 3
          <br />
          Duration: 13 Weeks
          <br />
          Course Description:
        </Text>
      </Box>
      <Dummy />



      <Box
        display="flex"
        justifyContent="space-around"
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
            <Link color="teal.500" href="/IOT4">
              IoT Q4
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

export default IOTQ3;
