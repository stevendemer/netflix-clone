import React from "react";
import { Box, Heading, Text, Container, Flex, Image } from "@chakra-ui/react";

const Section = ({ bg, ...restProps }) => {
  return (
    <Box bg={bg} {...restProps}>
      <Heading>Welcome to netflix</Heading>
    </Box>
  );
};

export default Section;
