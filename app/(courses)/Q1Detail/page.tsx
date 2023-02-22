"use client";

import React from "react";

import {
  Box,
  Heading,
  LinkBox,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

function Q1Detail() {
  return (
    <>
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
        <Text
          fontWeight="bold"
          fontSize={{ lg: "6xl", md: "2xl", base: "1xl" }} ////////
          align="center"
          color="white"
          // m="10px"   ////////
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
      <Box
        boxSize={{ lg: "3xl", md: "2xl" }} //////
        ml={{ lg: "25%", md: "5%", base: "0%" }} ////////////
        p={{ lg: "5", md: "3", base: "2" }} /////////////
      >
        <Text
          fontSize={{ lg: "2xl", md: "1xl", base: "small" }} /////////////
          textColor="green.500"
          p={{ lg: "3", md: "1", base: "1" }}
        >
          {" "}
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
        >
          Course Outline:
        </Text>
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }} /////////////
          align="center"
          color="green.500"
        >
          HTML and CSS (Homework)
        </Text>
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }} ////////////
          >
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
              Learn CSS Intro by Hira Khan (Watch Recorded Videos)
            </Link>
          </Heading>
        </LinkBox>
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }}
          align="center"
          color="green.500"
        >
          Web 3.0 and Metaverse Theory
        </Text>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit">
              Introduction to Panaverse DAO
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
              Web 3.0 User Guide
            </Link>
          </Heading>
        </LinkBox>
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }}
          align="center"
          color="green.500"
        >
          Complete Web 3 Assignments included in the Web 3 User Guide
        </Text>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit">
              Virtual and Augmented Metaverse User Guide
            </Link>
          </Heading>
        </LinkBox>
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }}
          align="center"
          color="green.500"
        >
          Fundamentals of JavaScript
        </Text>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
              Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
              Getting Started Exercises with JavaScript and Node.js
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }}
          align="center"
          color="green.500"
        >
          Object-Oriented Programming with TypeScript
        </Text>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://github.com/panaverse/learn-typescript">
              Learning Repository TypeScript
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://github.com/panaverse/typescript-node-projects">
              Homework Project TypeScript
            </Link>
          </Heading>
        </LinkBox>

        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://profy.dev/article/react-typescript">
              TypeScript for React
            </Link>
          </Heading>
        </LinkBox>
        <br />
        <Text
          fontSize={{ lg: "2xl", md: "2xl", base: "1xl" }}
          align="center"
          color="green.500"
        >
          Fundamentals of Version Control with Git (Recorded Videos)
        </Text>
        <br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading
            size="md"
            my={{lg:"2", md:"2" , base:"0"}}
            fontSize={{ lg: "2xl", md: "2xl", base: "2xs" }}
          >
            <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">
              Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
              Recorded Videos)
            </Link>
          </Heading>
        </LinkBox>

        <Box
          display="flex"
          justifyContent="space-between"
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
    </>
  );
}

export default Q1Detail;
