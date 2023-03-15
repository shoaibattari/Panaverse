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
import Dummy from "../../../components/Courses/Dummy"

function Q2Detail() {
  return (
    <>
      <Box maxW={1400} ml={{ xl: "4%", lg: "1%", md: "1%", base: "0%" }} p="5">
        <Box bg="linear-gradient(120deg, #155799, #159957)" p={"70px"}>
          <Text
            fontWeight="bold"
            fontSize={{ lg: "6xl", md: "2xl", base: "1xl" }} ////////
            align="center"
            color="white"
            // m="10px"   ////////
          >
            Quarter II (Core)
            <br />
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
            APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
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
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </Text>
          <Text
            fontSize={{ lg: "2xl", md: "1xl", base: "1xl" }} /////////////
            textColor="blue.500"
            p="1" /////////////
            fontWeight="bold"
          >
            Course Outline:
          </Text>

          <Dummy />

          <Box display="flex" justifyContent="space-around" p="2">
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
              <Link color="teal.500" href="/Q1Detail">
                Q1
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

export default Q2Detail;
