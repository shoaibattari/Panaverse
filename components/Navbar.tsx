"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  MenuButton,
  MenuItem,
  SimpleGrid,
  useColorModeValue,
  MenuList,
  Menu,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import png from "../public/Logo.png";

export default function Header() {
  return (
    <>
      <Box 
        boxShadow="lg" m={1}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns="repeat(3, 1fr)">
            <Box>
              <Link href="/">
                <Image src={png} alt="panaverse-logo" width="100"></Image>
              </Link>
            </Box>
           <Box mt='5'  display={{lg:"initial", base: "none"}}>
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
            </Box>
            <Box  display={{lg:"initial", base: "none"}}>
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
      
      <Box float='right' mt='-14' p='2' display={{lg:"none", base: "initial"}}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem  as='a' href='/'>Home</MenuItem>
            <MenuItem  as='a' href='/COURSES'>Courses</MenuItem>
            <MenuItem as="a" href="https://portal.piaic.org/">Piaic</MenuItem>
            <MenuItem as="a" href="https://www.panaverse.co/">Panaverse</MenuItem>
            <MenuItem as='a'  href="https://github.com/shoaibattari"  >Contact</MenuItem>
            <MenuItem as='a' href="https://portal.piaic.org/signup">Apply</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
