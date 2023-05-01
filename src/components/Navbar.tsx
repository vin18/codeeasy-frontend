import { Heading, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/react.svg';

const Navbar = () => {
  return (
    <HStack paddingTop="10px">
      <Image src={logo} boxSize="25px" />
      <Heading fontSize={20}>CodeEasy</Heading>
    </HStack>
  );
};

export default Navbar;
