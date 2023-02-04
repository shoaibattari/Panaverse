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
import React from "react";

function WebBlockchainandMetaverseSpecialization() {
  return (
    <Box boxSize="3xl" ml="25%" p="5" mt="-20">
      <Box as="div" mt="-48">
      <Text bg="linear-gradient(120deg, #155799, #159957)" fontSize="3xl" align="center" textColor="gray.200" borderRadius='20'>
          Artificial Intelligence (AI) and Deep Learning Specialization
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
              Quarter III W3-351: Developing Smart Contracts and Planet-Scale
                Web 3.0 Dapps
              </Heading>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <Button textColor="blue.500">Detailed Course Syllabus</Button>
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
              <Button textColor="blue.500">Detailed Course Syllabus</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default WebBlockchainandMetaverseSpecialization;
