import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      position="sticky"
      w="100%"
      display="flex"
      flexDirection="row-reverse"
      p="5"
      bg="linear-gradient(120deg, #155799, #159957)"
      color="white"
      boxShadow='outline'>
      <Breadcrumb fontWeight="bold" fontSize="2xl" spacing="25px" separator="">
       
        <BreadcrumbItem >
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/COURSES">Courses</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="https://www.piaic.org/">Piaic</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="https://portal.piaic.org/signup">
            Student Portal
          </BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
  
    </Box>
  );
}

export default Navbar;
