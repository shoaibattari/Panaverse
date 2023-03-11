import React from "react";
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
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { cards } from "../../components/Courses/Database";

function Courses() {
  return (
    <Box
      maxW={1400}
      // boxSize={{ lg: "3xl", md: "2xl" }}
      // ml={{ xl:"25%",lg: "15%", md: "5%", base: "0%" }}
      ml={{ xl: "4%", lg: "1%", md: "1%", base: "0%" }}
      p="5"
      // mt={{ lg: "24", md: "24", base: "1" }}
    >
      {cards.map((elem) => (
        <Box as="div" mt={{ lg: "10", base: "0" }} key={elem.id}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "md" }}
            align="center"
            textColor="gray.200"
            borderRadius="20"
          >
            {elem.heading1}
          </Text>
          <Text
            // boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            fontSize={{ lg: "3xl", md: "lg", base: "lg" }}
            align="left"
            textColor="gray.600"
          >
            {elem.headingText}
          </Text>
          <Flex>
            <SimpleGrid
              // mt={{ lg: "-520", md: "-500", base: "0" }}
              spacing={0.4}
              templateColumns={{
                md: "repeat(auto-fill, minmax(300px, 1fr))",
                lg: "repeat(auto-fill, minmax(400px, 1fr))",
                xl: "repeat(auto-fill, minmax(500px, 1fr))",
              }}
            >
              <Card m="4">
                <CardHeader>
                  <Heading
                    textColor="green.600"
                    size={{ lg: "lg", base: "md" }}
                  >
                    {elem.card1Heading}
                  </Heading>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter>
                  <Button
                    bg="linear-gradient(120deg, #155799, #159957)"
                    colorScheme="blue"
                    textColor="white"
                    type="button"
                  >
                    <Link color="teal.500" href={elem.card1Link}>
                      Detailed Course Syllabus
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card m="4">
                <CardHeader>
                  <Heading
                    textColor="green.600"
                    size={{ lg: "lg", base: "md" }}
                  >
                    {elem.card2Heading}
                  </Heading>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter>
                  <Button
                    bg="linear-gradient(120deg, #155799, #159957)"
                    colorScheme="blue"
                    textColor="white"
                    type="button"
                  >
                    <Link color="teal.500" href={elem.card2Link}>
                      Detailed Course Syllabus
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}

export default Courses;
