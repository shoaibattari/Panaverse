import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
      <Box bg="linear-gradient(120deg, #155799, #159957)" h="480px" p={"70px"}>
      <Text
        fontWeight="bold"
        fontSize="6xl"
        align="center"
        color="white"
        m="10px"
      >
        Certified Web 3.0 and Metaverse Developer:
        A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
      </Text>
      <Text fontSize="1xl" align="center" color="gray.200" p="20px">
        Getting Ready for the Next Generation and Future of the Internet - Join
        a 13 Trillion Dollar Industry with 5 Billion Users
      </Text>
    </Box>
  );
}

export default Header;
