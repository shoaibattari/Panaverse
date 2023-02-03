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

function AmbientComputingandIoTSpecialization() {
  return (
    <Box boxSize="3xl" ml="25%" p="5"mt="-60"
    >
      <Box as="div"
      mt="-72">
        <Text fontSize="3xl" align="left" textColor="green.600">
          Ambient Computing and IoT Specialization{" "}
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
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter
          and Embedded Devices.
        </Text>

        <SimpleGrid
          mt="-620"
          spacing={0.2}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading textColor="green.600" size="md">
              Quarter III CN-351: Certified Kubernetes Application Developer
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
              Quarter IV AC-361: Embedded Programming using C and Rust
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

export default AmbientComputingandIoTSpecialization;
