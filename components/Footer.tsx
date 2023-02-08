import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      bg="linear-gradient(120deg, #155799, #159957)"
      mt="24"
    >
     
      <Flex>
     
        
        <Box>
          <Text
            fontSize="md"
            align="center"
            color="gray.100"
            p="25px"
            // textDecor="underline"
          >
            <Text fontStyle='italic' color='blue'>Navigation</Text>
            <NextLink href="/">Home</NextLink>
            <br />
            <NextLink href="/COURSES">Courses</NextLink>
            <br />
            <NextLink href="">Explore</NextLink>
            <br />
            <NextLink href="">About</NextLink>
            <br />
            <NextLink href="">Contact</NextLink>
            <br />
          </Text>
        </Box>

        <Box>
          <Text
            fontSize="md"
            align="center"
            color="gray.100"
            p="25px"
            // textDecor="underline"
          >
            <Text fontStyle='italic'  color='blue'>Follow US</Text>

            <NextLink href="https://www.piaic.org/">Admission Website</NextLink>
            <br />
            <NextLink href="https://www.facebook.com/groups/panaverse">
              Facebook Group
            </NextLink>
            <br />
            <NextLink href="https://www.youtube.com/@panaverse/streams">
              YouTube Live Channel
            </NextLink>
            <br />
            <NextLink href="https://twitter.com/Panaverse_edu">
              Twitter
            </NextLink>
            <br />
            <NextLink href="https://github.com/panaverse">
              Github Repos
            </NextLink>
           
          </Text>
        </Box>
      </Flex>
    </Box>
    
  );
}

export default Footer;
