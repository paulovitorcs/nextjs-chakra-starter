import React from 'react';
import {
  Center,
  Container,
  Divider,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container maxW="container.md" py="20px">
      <VStack spacing="20px">
        <Divider />
        <Center>
          <Text fontSize="sm">
            v1.0.0 - Desenvolvido por{' '}
            <Link isExternal={true} href="https://paulovitorcs.com/">
              @paulovitorcs
            </Link>
          </Text>
        </Center>
      </VStack>
    </Container>
  );
};

export default Footer;
