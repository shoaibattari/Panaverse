"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

function CoreCourses() {
  return (
    <Box boxSize="3xl" ml="25%" p="5" mt="20">
      <Text
        bg="linear-gradient(120deg, #155799, #159957)"
        fontSize="3xl"
        align="center"
        textColor="gray.200"
        borderRadius="20"
      >
        Core Courses (Common in All Specializations)
      </Text>
      <Text
        boxSize="3xl"
        ml="auto"
        p="5"
        mt="2"
        fontSize="2xl"
        align="left"
        textColor="gray.600"
      >
        Every participant of the program will start by completing the following
        two core courses:
      </Text>

      <SimpleGrid
        mt="-620"
        spacing={0.2}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading
              textColor="green.600"
              size="md"
             
            >
              Quarter I (Core) CS-101: Object-Oriented Programming using
              TypeScript
            </Heading>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter>
            <Button textColor="blue.500" type="button" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }} >
              <Link color="teal.500" href="/Q1Detail" >
                Detailed Course Syllabus
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textColor="green.600">
              Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
              Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud
              Development Kit (CDK) for Terraform
            </Heading>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter>
            <Button textColor="blue.500" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }}>
              <Link color="teal.500" href="/Q2Detail">
                Detailed Course Syllabus
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Text fontSize="4xl" align="left" textColor="green.600" mt="5">
        Specialized Tracks
      </Text>
      <Text
        boxSize="3xl"
        ml="auto"
        p="5"
        mt="2"
        fontSize="2xl"
        align="left"
        textColor="gray.600"
      >
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each:
      </Text>
      <hr />
    </Box>
  );
}

export default CoreCourses;
