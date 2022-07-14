import {
  Box,
  Container,
  Flex,
  IconButton,
  Heading,
  Text,
  Icon,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  const boxConfig = {
    paddingTop: "2rem",
    background: "black",
    color: "white",
    paddingBottom: "2rem",
  };

  return (
    <Box sx={boxConfig}>
      <Flex justify="space-between" align="center">
        <Image
          paddingLeft="3rem"
          width="13vw"
          height="9vh"
          src="/logo.svg"
          alt="netflix logo"
        />
        <Flex position="absolute" right="0" align="center">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              aria-label="Locale"
              background="black"
              py={2}
              px={4}
              color="white"
              borderWidth="1px"
              borderRadius="md"
              border="2px solid white"
              marginRight="4rem"
              _hover={{ bg: "black" }}
              _focus={{ bg: "black" }}
              _active={{ bg: "black" }}
            >
              English
            </MenuButton>
            <MenuList background="black">
              <MenuItem
                _hover={{ bg: "red.300" }}
                _focus={{ bg: "red.100" }}
                minH="40px"
              >
                Greek
              </MenuItem>
              <MenuItem
                _focus={{ bg: "red.100" }}
                _hover={{ bg: "red.300" }}
                minH="48px"
              >
                Spanish
              </MenuItem>
              <MenuItem
                _focus={{ bg: "red.100" }}
                _hover={{ bg: "red.300" }}
                minH="40px"
              >
                Italian
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            _hover={{ bg: "red.100" }}
            _focus={{ bg: "red.100" }}
            _toggle={{ bg: "red.100" }}
            mx={8}
            bg="red.100"
            fontWeight="thin"
          >
            Sign in
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
