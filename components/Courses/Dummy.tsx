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
import { Q1DetailData } from "../../app/(courses)/Q1Detail/Q1DetailData";

function Q1Detail() {
  return (
    <>
      {" "}
      <Box display="flex" flexWrap={"wrap"} justifyContent="space-evenly">
        {Q1DetailData.map((ele) => (
          <Box as="div" mt={{ lg: "2", base: "0" }} key={ele.id}>
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
    </>
  );
}

export default Q1Detail;
