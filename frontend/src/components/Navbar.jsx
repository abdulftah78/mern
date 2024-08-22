import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import { GiEvilMoon } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <BsPlusCircleFill fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode == "light" ? (
              <GiEvilMoon size={20} />
            ) : (
              <FaSun size={20} color="#FFD700" />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
