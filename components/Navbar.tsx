import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

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
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/COURSES">Courses</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link href="https://www.piaic.org/">Piaic</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link href="https://portal.piaic.org/signup">
            Student Portal
          </Link>
        </BreadcrumbItem>
        </Breadcrumb>
  
    </Box>
  );
}

export default Navbar;
