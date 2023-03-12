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
      ml={{ xl: "4%", lg: "1%", md: "1%", base: "0%" }}
      p="5"
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
              spacing={0.4}
              templateColumns={{
                md: "  repeat(2, 1fr)",
                lg: "  repeat(2, 1fr)",
                xl: "  repeat(2, 1fr)",
              }}
            >
              <Card
                m="4"
                border="2px"
                borderColor="green.600"
                borderTopRadius="80"
                boxShadow={"dark-lg"}
              >
                <CardHeader>
                  <Heading
                    textColor="green.600"
                    size={{ lg: "lg", base: "md" }}
                    mt="25"
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
                    borderRadius={100}
                  >
                    <Link color="teal.500" href={elem.card1Link}>
                      Detailed Course Syllabus
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card
                m="4"
                border="2px"
                borderColor="green.600"
                borderTopRadius="80"
                boxShadow={"dark-lg"}
              >
                <CardHeader>
                  <Heading
                    textColor="green.600"
                    size={{ lg: "lg", base: "md" }}
                    mt="25"
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
                    borderRadius={100}
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
