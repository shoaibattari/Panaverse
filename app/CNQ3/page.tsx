"use client";

import React from "react";

import { Box, Heading, LinkBox, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Dummy from "@/components/Courses/Dummy";

function CNQ3() {
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
         Cloud-Native Computing Specialization Quarter 3
          <br />
          Duration: 13 Weeks
          <br />
          Course Description:
        </Text>
      </Box>
      <Dummy />
    </>
  );
}

export default CNQ3;
