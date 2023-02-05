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
  useColorModeValue,Link
} from "@chakra-ui/react";
import React from 'react'

function DevelopingSmartContracts() {
  return (
    <Box boxSize="3xl" ml="25%" p="5" mt="20">
    <Box as="div" mt='-36'>
    <Text bg="linear-gradient(120deg, #155799, #159957)" fontSize="3xl" align="center" textColor="gray.200" borderRadius='20'>
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
      full-stack Web 3.0 and Metaverse experiences for the next generation of
      the internet by specializing in building worlds that merge the best of
      cutting-edge decentralized distributed blockchains with 3D metaverse
      client experiences.
    </Text>

    <SimpleGrid
      mt="-520"
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
          <Button textColor="blue.500" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }}>
                <Link color="teal.500" href="/BCQ3" >
                Detailed Course Syllabus</Link></Button>
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
          <Button textColor="blue.500" _hover={{
                textDecoration: "none",
                bg: useColorModeValue('blue.900', 'blue.200'),
              }}> <Link color="teal.500" href="/BCQ4" >
              Detailed Course Syllabus</Link></Button>
        </CardFooter>
      </Card>
    </SimpleGrid>

   </Box>
   </Box>
  )
}

export default DevelopingSmartContracts