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
  Link
} from "@chakra-ui/react";
import React from "react";

function CloudNativeComputingSpecialization() {
  return (
    <Box boxSize="3xl" ml="25%" p="5" mt="-20">
      <Box as="div" mt="-72">
      <Text bg="linear-gradient(120deg, #155799, #159957)" fontSize="3xl" align="center" textColor="gray.200" borderRadius='20'>
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
                Quarter III CN-351: Certified Kubernetes Application Developer
                (CKAD)
              </Heading>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <Button textColor="blue.500" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }}><Link color="teal.500" href="/CNQ3" >
              Detailed Course Syllabus</Link></Button>
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
              <Button textColor="blue.500" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }}><Link color="teal.500" href="/CNQ4" >
              Detailed Course Syllabus</Link></Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default CloudNativeComputingSpecialization;
