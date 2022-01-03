import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faMap } from '@fortawesome/free-regular-svg-icons';

const Menu = props => {
  const { size } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItemsList = [
    {
      icon: faHome,
      label: 'Home',
      link: '/',
      isExternal: false,
    },
    {
      icon: faGithub,
      label: 'Github',
      link: 'https://github.com/paulovitorcs/nextjs-chakra-starter',
      isExternal: true,
    },
    {
      icon: faMap,
      label: 'Roadmap',
      link: 'https://github.com/paulovitorcs/nextjs-chakra-starter/projects/1',
      isExternal: true,
    },
    {
      icon: faFileAlt,
      label: 'Docs',
      link: 'https://github.com/paulovitorcs/nextjs-chakra-starter/blob/main/README.md',
      isExternal: true,
    },
  ];

  const menuItems = menuItemsList.map((item, index) => {
    return (
      <LinkBox key={`menuItemList-${index}-${item.label}`}>
        <HStack spacing="10px">
          <FontAwesomeIcon size="lg" icon={item.icon} />
          <LinkOverlay href={item.link} isExternal={item.isExternal}>
            <Text fontSize="lg" fontWeight="semibold">
              {item.label}
            </Text>
          </LinkOverlay>
        </HStack>
      </LinkBox>
    );
  });

  return (
    <>
      <Button fontSize={size} onClick={onOpen}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt="50px">
            <VStack alignItems="left" spacing="20px" divider={<Divider />}>
              {menuItems}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  size: PropTypes.string,
};

Menu.defaultProps = {
  size: '25px',
};

export default Menu;
