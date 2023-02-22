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
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function ALL() {
  return (
    <Box
      boxSize={{ lg: "3xl", md: "2xl" }}
      ml={{ lg: "25%", base: "0%" }}
      p="5"
      mt={{ lg: "24", md: "24", base: "1" }}
    >
      <Text
        bg="linear-gradient(120deg, #155799, #159957)"
        fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
        align={"center"}
        // fontSize="3xl"
        // align="center"
        textColor="gray.200"
        borderRadius="20"
      >
        Core Courses (Common in All Specializations)
      </Text>
      <Text
        boxSize={{ md: "3xl" }}
        ml="auto"
        p="5"
        mt="2"
        fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
        align="left"
        textColor="gray.600"
      >
        Every participant of the program will start by completing the following
        two core courses:
      </Text>

      <SimpleGrid
        mt={{ lg: "-620", md: "-620", base: "0" }}
        spacing={0.2}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <Card m="2">
          <CardHeader>
            <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
              Quarter I (Core) CS-101: Object-Oriented Programming using
              TypeScript
            </Heading>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter>
            <Button
              textColor="blue.500"
              type="button"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("blue.900", "blue.200"),
              }}
            >
              <Link color="teal.500" href="/Q1Detail">
                Detailed Course Syllabus
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card m="2">
          <CardHeader>
            <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
              Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
              Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud
              Development Kit (CDK) for Terraform
            </Heading>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter>
            <Button
              textColor="blue.500"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("blue.900", "blue.200"),
              }}
            >
              <Link color="teal.500" href="/Q2Detail">
                Detailed Course Syllabus
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Text
        size={{ lg: "md", base: "S" }}
        align="left"
        textColor="green.600"
        mt="5"
      >
        Specialized Tracks
      </Text>
      <Text
        boxSize={{ lg: "3xl", md: "1xl" }}
        ml="auto"
        p="5"
        mt="2"
        fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
        align="left"
        textColor="gray.600"
      >
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each:
      </Text>
      <hr />
      {/* /////////// ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box
        boxSize={{ lg: "3xl", md: "2xl" }}
        ml={{ base: "0%" }}
        p="5"
        mt={{ lg: "-960", base: "1" }}
      >
        <Box as="div" mt={{ lg: "96", base: "0" }}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="center"
            textColor="gray.200"
            borderRadius="20"
          >
            Web 3.0 (Blockchain) and Metaverse Specialization
          </Text>
          <Text
            boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            mt={{ lg: "10" }}
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="left"
            textColor="gray.600"
          >
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </Text>

          <SimpleGrid
            mt={{ lg: "-520", md: "-400" }}
            spacing={0.2}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter III W3-351: Developing Smart Contracts and
                  Planet-Scale Web 3.0 Dapps
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/BCQ3">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter IV MV-361: Developing Planet-Scale Open Virtual and
                  Augmented Metaverse Experiences
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/BCQ4">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box
        boxSize={{ lg: "3xl", md: "2xl" }}
        ml={{ base: "0%" }}
        p="5"
        mt={{ lg: "480" }}
      >
        <Box as="div" mt={{ lg: "-48", md: "-20" }}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="center"
            textColor="gray.200"
            borderRadius="20"
          >
            AI and Deep Learning Specialization
          </Text>
          <Text
            boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            mt={{ lg: "10" }}
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="left"
            textColor="gray.600"
          >
            The AI and Deep Learning specialization focuses on building and
            deploying intelligent APIs using OpenAI models and building custom
            Deep Learning Tensorflow models.
          </Text>
          <SimpleGrid
            mt={{ lg: "-500", md: "-500" }}
            spacing={0.2}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter III W3-351: Developing Smart Contracts and
                  Planet-Scale Web 3.0 Dapps
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/AIQ3">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter IV AI-361: Deep Learning and MLOps
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/AIQ4">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>

      {/* {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box
        boxSize={{ lg: "3xl", md: "2xl" }}
        ml={{ base: "0%" }}
        p="5"
        mt={{ lg: "-120", md: "-180" }}
      >
        <Box as="div" mt={{ lg: "-48", md: "-20" }}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="center"
            textColor="gray.200"
            borderRadius="20"
          >
            Cloud-Native Computing Specialization
          </Text>
          <Text
            boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            mt={{ lg: "10" }}
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="left"
            textColor="gray.600"
          >
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>

          <SimpleGrid
            mt={{ lg: "-620", md: "-580" }}
            spacing={0.2}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter III CN-351: Certified Kubernetes Application Developer
                  (CKAD)
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/CNQ3">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for
                  Terraform
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                  textColor="blue.500"
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("blue.900", "blue.200"),
                  }}
                >
                  <Link color="teal.500" href="/CNQ4">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Box
        boxSize={{ lg: "3xl", md: "2xl" }}
        ml={{ base: "0%" }}
        p="5"
        mt={{ lg: "-40", md: "0" }}
      >
        <Box as="div" mt={{ lg: "-48", md: "-80" }}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="center"
            textColor="gray.200"
            borderRadius="20"
          >
            Ambient Computing and IoT Specialization
          </Text>
          <Text

            boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            mt={{ lg: "10" }}
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="left"
            textColor="gray.600"
          >
            The Ambient Computing and IoT Specialization focuses on building
            Smart Homes, Offices, Factories, and Cities using Voice computing,
            Matter and Embedded Devices.
          </Text>

          <SimpleGrid
           mt={{ lg: "-540", md: "-580" }}
            spacing={0.2}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card>
              <CardHeader>
              <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter III CN-351: Certified Kubernetes Application Developer
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button textColor="blue.500">
                  <Link color="teal.500" href="/IOT3">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
              <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  Quarter IV AC-361: Embedded Programming using C and Rust
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button textColor="blue.500">
                  <Link color="teal.500" href="/IOT4">
                    Detailed Course Syllabus
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default ALL;
