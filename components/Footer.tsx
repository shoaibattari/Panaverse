import React from "react";
import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      bg="linear-gradient(120deg, #155799, #159957)"
      mt="24"
    >


      <Text
        fontWeight="bold"
        fontSize="6xl"
        align="center"
        color="white"
        m="10px"
      >
        Relevant Information Links
      </Text>

      <Text
        fontSize="md"
        align="center"
        color="gray.100"
        p="25px"
        textDecor="underline"
      >
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
        <NextLink href="https://twitter.com/Panaverse_edu">Twitter</NextLink>
        <br />
        <NextLink href="https://github.com/panaverse">Github Repos</NextLink>
        <br />
        <NextLink color="teal.500" href="/COURSES">
          Detailed All Course Syllabus
        </NextLink>
      </Text>
    </Box>
  );
}

export default Footer;
