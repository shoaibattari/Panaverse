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
          Every participant of the program will start by completing the
          following two core courses:
        </Text>

        <SimpleGrid
          mt="-620"
          spacing={0.2}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading textColor="green.600" size="md">
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
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
        <hr />
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box boxSize="3xl" p="5" mt="-70%">
          <Box as="div" mt="-36">
            <Text
              bg="linear-gradient(120deg, #155799, #159957)"
              fontSize="3xl"
              align="center"
              textColor="gray.200"
              borderRadius="20"
            >
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Text>
            <Text
              boxSize="3xl"
              ml="auto"
              p="5"
              mt="1"
              fontSize="2xl"
              align="left"
              textColor="gray.600"
            >
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </Text>

            <SimpleGrid
              mt="-520"
              spacing={0.2}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card>
                <CardHeader>
                  <Heading textColor="green.600" size="md">
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
                  <Heading size="md" textColor="green.600">
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
                    {" "}
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
        <Box boxSize="3xl" p="5" mt="-20">
          <Box as="div" mt="-48">
            <Text
              bg="linear-gradient(120deg, #155799, #159957)"
              fontSize="3xl"
              align="center"
              textColor="gray.200"
              borderRadius="20"
            >
              AI and Deep Learning Specialization
            </Text>
            <Text
              boxSize="3xl"
              ml="auto"
              p="5"
              mt="1"
              fontSize="2xl"
              align="left"
              textColor="gray.600"
            >
              The AI and Deep Learning specialization focuses on building and
              deploying intelligent APIs using OpenAI models and building custom
              Deep Learning Tensorflow models.
            </Text>

            <SimpleGrid
              mt="-620"
              spacing={0.2}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card>
                <CardHeader>
                  <Heading textColor="green.600" size="md">
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
                  <Heading size="md" textColor="green.600">
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
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box boxSize="3xl" p="5" mt="-20">
          <Box as="div" mt="-72">
            <Text
              bg="linear-gradient(120deg, #155799, #159957)"
              fontSize="3xl"
              align="center"
              textColor="gray.200"
              borderRadius="20"
            >
              Cloud-Native Computing Specialization
            </Text>
            <Text
              boxSize="3xl"
              ml="auto"
              p="5"
              mt="1"
              fontSize="2xl"
              align="left"
              textColor="gray.600"
            >
              The Cloud-Native Computing Specialization focuses on Containers,
              Kubernetes, and CDK for Kubernetes.
            </Text>

            <SimpleGrid
              mt="-620"
              spacing={0.2}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card>
                <CardHeader>
                  <Heading textColor="green.600" size="md">
                    Quarter III CN-351: Certified Kubernetes Application
                    Developer (CKAD)
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
                  <Heading size="md" textColor="green.600">
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
        <Box boxSize="3xl" p="5" mt="-60">
          <Box as="div" mt="-72">
            <Text
              bg="linear-gradient(120deg, #155799, #159957)"
              fontSize="3xl"
              align="center"
              textColor="gray.200"
              borderRadius="20"
            >
              Ambient Computing and IoT Specialization
            </Text>
            <Text
              boxSize="3xl"
              ml="auto"
              p="5"
              mt="1"
              fontSize="2xl"
              align="left"
              textColor="gray.600"
            >
              The Ambient Computing and IoT Specialization focuses on building
              Smart Homes, Offices, Factories, and Cities using Voice computing,
              Matter and Embedded Devices.
            </Text>

            <SimpleGrid
              mt="-620"
              spacing={0.2}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card>
                <CardHeader >
                  <Heading textColor="green.600" size="md">
                    Quarter III CN-351: Certified Kubernetes Application
                    Developer
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
                  <Heading size="md" textColor="green.600">
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
