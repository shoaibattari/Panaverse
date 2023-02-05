"use client";

import React from "react";

import { Box, Heading, LinkBox, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function Q2Detail() {
  return (
    <>
      <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
        <Text
          fontWeight="bold"
          fontSize="3xl"
          align="center"
          color="white"
          m="10px"
        >
          Quarter II (Core)
          <br />
          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
          using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          <br />
          Duration: 13 Weeks
          <br />
          Course Description:
        </Text>
      </Box>
      <Box boxSize="3xl" ml="25%" p="5">
        <Text fontSize="1xl" textColor="green.500" p="3">
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </Text>
        <Text fontSize="2xl" textColor="blue.500" p="3">
          Course Outline:
        </Text>
        <Text fontSize="2xl" align="center" color="green.500">
        Next.js 13 Web Development        </Text>
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading size="md" my="3">
            <Link href="https://beta.nextjs.org/docs">
            Next.js 13 Web Development
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
          <Heading size="md" my="3">
            <Link href="https://beta.reactjs.org/learn">
            Latest Learn React Official Website            </Link>
          </Heading>
        </LinkBox><br />
        <LinkBox
          as="article"
          maxW="3xl"
          p="3"
          textColor="gray.200"
          bg="linear-gradient(120deg, #155799, #159957)"
          borderRadius="20px"
        >
          <Heading size="md" my="3">
            <Link href="https://github.com/panaverse/learn-nextjs">
            Learn Next.js 13 Learning Repo          </Link>
          </Heading>
        </LinkBox>





      </Box>
    </>
  );
}

export default Q2Detail;
