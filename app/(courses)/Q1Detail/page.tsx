"use client";

import React from "react";

import {
  Box,
  Heading,
  LinkBox,
  Text,
  useColorModeValue,
  Button,
  Flex,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { Q1DetailData } from "./Q1DetailData";

function Q1Detail() {
  return (
    <>
      <Box maxW={1400} ml={{ xl: "4%", lg: "1%", md: "1%", base: "0%" }} p="5">
        <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
          <Text
            fontWeight="bold"
            fontSize={{ lg: "6xl", md: "2xl", base: "1xl" }} ////////
            align="center"
            color="white"
          >
            Quarter I (Core)
            <br />
            CS-101: Object-Oriented Programming using TypeScript
            <br />
            Duration: 13 Weeks
            <br />
            Course Description:
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ lg: "3xl", md: "2xl", base: "2xl" }}
            textColor="green.500"
            align={{ lg: "center", md: "center", base: "left" }}
            as="b"
          >
            {/* ///////////// */}
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
          <Text
            fontSize={{ lg: "2xl", md: "1xl", base: "1xl" }} /////////////
            textColor="blue.500"
            p="1" /////////////
            fontWeight="bold"
          >
            Course Outline:
          </Text>

          <Box
            display="flex"
            flexWrap={"wrap"}
            justifyContent="space-evenly"
          >
            {Q1DetailData.map((ele) => (
              <Box as="div" mt={{ lg: "2", base: "0" }}  key={ele.id}>
                <Card
                  m="4"
                  border="2px"
                  borderColor="green.600"
                  borderTopRadius="80"
                  boxShadow={"dark-lg"}
                  bgColor="gray.100"
                >
                  <CardHeader>
                    <Heading
                      textColor="green"
                      size={{ lg: "lg", base: "md" }}
                      mt="25"
                    >
                      {ele.Heading}
                    </Heading>
                  </CardHeader>
                  <CardBody></CardBody>

                  <CardFooter>
                    <Button
                      bg="linear-gradient(120deg, #155799, #159957)"
                      colorScheme="blue"
                      textColor="white"
                      type="button"
                      borderRadius={100}
                    >
                      <Link color="teal.500" href={ele.Link}>
                        Go TO LEARN
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </Box>
    
       

        <Box
         display="flex"
         justifyContent="space-around"
          p="2"
        >
       
          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/">
               Home
            </Link>
          </Button>

          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/Q2Detail">
              Q2
            </Link>
          </Button>

          <Button
            textColor="blue.500"
            type="button"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("blue.900", "blue.200"),
            }}
          >
            <Link color="teal.500" href="/COURSES">
             All Courses
            </Link>
          </Button>
        </Box> 
        </Box>
      </Box>
    </>
  );
}

export default Q1Detail;
