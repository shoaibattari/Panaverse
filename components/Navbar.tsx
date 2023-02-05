import { Box, Link, Button, useColorModeValue,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  } from "@chakra-ui/react";
import React from "react";
import Logo from "../public/red-p-logo-text_dao_croped.png";
import Image from "next/image";

function Navbar() {
  return (
    <Box as="div" display="flex" >
      <Link color="teal.500" href="/">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </Link>
      <Button
        textColor="blue.500"
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("blue.900", "blue.200"),
        }}
      >
        <Link  color="teal.500" href="https://portal.piaic.org/signup">
          Apply
        </Link>
      </Button>



      
    </Box>
  );
}

export default Navbar;
