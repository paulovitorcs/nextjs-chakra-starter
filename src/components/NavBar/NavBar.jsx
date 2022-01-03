import React from 'react';
import {
  Box,
  Container,
  HStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useResponsiveness } from '../../hooks/useResponsiveness';
import Logo from '../Logo';
import Menu from '../Menu';
import ToggleColorMode from '../ToggleColorMode';
import { useScroll } from '../../hooks/useScroll';

const NavBar = () => {
  const { isMobile } = useResponsiveness();
  const { hasScroll, isReseted } = useScroll();

  const bgColor = useColorModeValue('white', 'gray.800');
  const size = hasScroll ? '15px' : isMobile ? '15px' : '20px';

  return (
    <Box
      w="100%"
      position={hasScroll ? 'fixed' : null}
      transform={!hasScroll && isReseted ? 'translateY(-100px)' : null}
      bgColor={bgColor}
      pb={hasScroll ? '150px' : null}
      transitionDuration="200ms"
    >
      <Container maxW="container.md" py="20px">
        <Stack
          w="100%"
          direction={{ base: hasScroll ? 'row' : 'column', md: 'row' }}
          justifyContent={{
            base: hasScroll ? 'space-between' : 'center',
            md: 'space-between',
          }}
          alignItems={{
            base: hasScroll ? 'space-between' : 'center',
            md: 'space-between',
          }}
          spacing="20px"
        >
          <Logo size={size} hasTitle={!hasScroll} />
          <HStack spacing="20px">
            <ToggleColorMode size={size} />
            <Menu size={size} />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
