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
} from "@chakra-ui/react";
import Link from "next/link";
import { cards } from "../../components/Courses/Database";

function Courses() {
  return (
    <Box
      boxSize={{ lg: "3xl", md: "2xl" }}
      ml={{ lg: "25%",md:"5%", base: "0%" }}
      p="5"
      mt={{ lg: "24", md: "24", base: "1" }}
    >
      {cards.map((elem) => (
        <Box as="div" mt={{ lg: "10", base: "0" }} key={elem.id}>
          <Text
            bg="linear-gradient(120deg, #155799, #159957)"
            fontSize={{ lg: "3xl", md: "2xl", base: "sm" }}
            align="center"  
            textColor="gray.200"
            borderRadius="20"
          >
            {elem.heading1}
          </Text>
          <Text
            boxSize={{ lg: "3xl", md: "2xl" }}
            ml="auto"
            p="5"
            fontSize={{ lg: "3xl", md: "lg", base: "sm" }}
            align="left"
            textColor="gray.600"
          >
            {elem.headingText}
          </Text>

          <SimpleGrid
            mt={{ lg: "-520", md: "-500", base: "0" }}
            spacing={0.4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card m="4">
              <CardHeader>
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  {elem.card1Heading}
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                 bg="linear-gradient(120deg, #155799, #159957)"
                   colorScheme='blue'
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
                <Heading textColor="green.600" size={{ lg: "md", base: "S" }}>
                  {elem.card2Heading}
                </Heading>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button
                bg="linear-gradient(120deg, #155799, #159957)"
                colorScheme='blue'
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
        </Box>
      ))}
    </Box>
  );
}

export default Courses;
