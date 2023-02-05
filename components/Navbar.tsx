import { Box, Link, Button, useColorModeValue,  } from "@chakra-ui/react";
import React from "react";
import Logo from "../public/red-p-logo-text_dao_croped.png";
import Image from "next/image";

function Navbar() {
  return (
    <Box as="div" display="flex" >
      <Link color="teal.500" href="/">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </Link>
     



      
    </Box>
  );
}

export default Navbar;
