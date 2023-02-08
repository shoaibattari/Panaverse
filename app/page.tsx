"use client";

import ALL from "@/components/Courses/All";
import Header from "@/components/Header";
import Tagline from "@/components/Tagline";
import { Box } from "@chakra-ui/react";

export default function page() {
  return (<>
    <Box as="div">
      <Header />/
      <Tagline />
      <ALL />
     
    </Box>
    </>
  );
}
