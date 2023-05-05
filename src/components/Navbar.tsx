import { Button, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const Navbar = () => {
  return (
    <HStack width="100%" paddingTop="10px">
      <Link to="/">
        <Flex alignItems="center">
          <Image src={logo} boxSize="25px" marginRight="5px" />
          <Heading fontSize={20}>CodeEasy</Heading>
        </Flex>
      </Link>

      <Flex justifyContent="end" width="100%">
        <Button fontSize="14px" colorScheme="pink" marginRight="15px">
          Sign Up
        </Button>
        <Button fontSize="14px">Login</Button>
      </Flex>
    </HStack>
  );
};

export default Navbar;
