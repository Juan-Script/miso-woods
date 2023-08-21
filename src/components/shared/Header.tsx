import { Flex, Icon } from "@chakra-ui/react";
import Navbar from "../shared/Navbar";
import logo from "../../assets/Logos_MisoWoods/logo-blanco.svg";
import { BiCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

import "../../css/styles.css";

export const Header = () => {
  return (
    <Flex>
      <Flex>
        <img src={logo} alt="img/logo" />
      </Flex>
      <Flex>
        <Navbar />
      </Flex>
      <Flex className="icons">
        <Icon as={BiCart} />
        <Icon as={BsFillPersonFill} />
      </Flex>
    </Flex>
  );
};
