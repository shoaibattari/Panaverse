'use client'
import ALL from "@/components/Courses/All";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

function page() {
  return (
    <div>
    
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"1px"}>
        <Text
          fontWeight="bold"
          fontSize="5xl"
          align="center"
          color="white"
          m="10px"
        >
          
         ALL COURSES DETAILS
        </Text>
      </Box>
      <ALL />
    </div>
  );
}

export default page;
