import React from "react";
import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link"

function Footer() {
  return (
    <Box display='flex' justifyContent='space-around' 
      bg="linear-gradient(360deg, #252525, #000000)" mt='20'>
      <Text
        fontWeight="bold"
        fontSize="6xl"
        align="center"
        color="gray"
        m="10px">
        Relevant Information Links</Text>
      <Text fontSize='smaller' align="center" color="gray.200" p="25px"  textDecor='underline'>
       <NextLink href="https://www.piaic.org/">Admission Website</NextLink><br />
       <NextLink href="https://www.facebook.com/groups/panaverse">Facebook Group</NextLink><br />
       <NextLink href="https://www.youtube.com/@panaverse/streams">YouTube Live Channel</NextLink><br />
       <NextLink href="https://twitter.com/Panaverse_edu">Twitter</NextLink><br />
       <NextLink href="https://github.com/panaverse">Github Repos</NextLink>
      </Text>
      
    </Box>




  );
}

export default Footer;
