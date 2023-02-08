"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import png from "../public/Logo.png";

export default function Header() {
  return (
    <Box boxShadow="lg" m={1}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          <Box>
            <Link href="/">
              <Image src={png} alt="panaverse-logo" width="100"></Image>
            </Link>
          </Box>
          <Flex
            placeItems="center"
            color="black"
            fontSize={18}
            fontWeight="semibold"
            gap={10}
          >
            <Link href="/">Home</Link>
            <Link href="/COURSES">Courses</Link>
            <Link href="https://portal.piaic.org/">Piaic</Link>
            <Link href="https://www.panaverse.co/">Panaverse</Link>
            <Link href="https://github.com/shoaibattari">Contact</Link>
          </Flex>
          <Box>
            <Button
              textColor="blue.500"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("blue.900", "blue.200"),
              }}
              mt="10px"
              size="lg"
              float="right"
              mb="1"
            >
              <Link href="https://portal.piaic.org/signup">Apply </Link>
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
