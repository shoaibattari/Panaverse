"use client";
import Courses from "@/components/Courses/Courses";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

function page() {
  return (
    <div>
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"1px"}>
        <Text
          fontWeight="bold"
          fontSize={{ lg: "4xl", md: "2xl", base: "1xl" }}
          align="center"
          color="white"
          m="10px"
        >
          ALL COURSES DETAILS
        </Text>
      </Box>
      <Box 
      // mt={{lg:'-32', md:"-24", base:"0"}}
      >
     <Courses/>
     </Box>
    </div>
  );
}

export default page;
