import React from "react";
import { styled } from "@nextui-org/react"
import { Navbar, Link, Text } from "@nextui-org/react";

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const Layout = ({ children }) => (
  <Box
    css={{ maxW: "100%", px: "$12", mt: "$8", "@xsMax": {px: "$10"} }}
  >
    <Navbar isBordered variant='static'>
      <Navbar.Brand>
        <Link href="/">
          <Text b color="inherit" hideIn="xs">
            Mixer Admin
          </Text>
        </Link>
      </Navbar.Brand>

      <Navbar.Content hideIn="xs">
        <Navbar.Link href="/orders">Orders</Navbar.Link>
        <Navbar.Link isActive href="/users">Users</Navbar.Link>
        <Navbar.Link href="/albums">Albums</Navbar.Link>
        <Navbar.Link href="/tracks">Tracks</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Light Mode
        </Navbar.Link>
      </Navbar.Content>
     </Navbar>
    {children}
  </Box>
);
