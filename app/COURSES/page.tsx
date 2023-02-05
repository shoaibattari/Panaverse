'use client'
import ALL from "@/components/Courses/All";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

function page() {
  return (
    <div>
    
      <Box bg="linear-gradient(120deg, #155799, #159957)" h="480px" p={"70px"}>
        <Text
          fontWeight="bold"
          fontSize="6xl"
          align="center"
          color="white"
          m="10px"
        >
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
          <br />
        
         ALL COURSES DETAILS
        </Text>
      </Box>
      <ALL />
    </div>
  );
}

export default page;
