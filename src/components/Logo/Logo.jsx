import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

const Logo = props => {
  const { hasTitle, size, ...otherProps } = props;

  return (
    <LinkBox {...otherProps}>
      <LinkOverlay href="/">
        <HStack spacing="20px" fontSize={size}>
          <FontAwesomeIcon size="2x" icon={faUserAstronaut} />
          {hasTitle && (
            <Text fontWeight="extrabold">nextjs-chakra-starter</Text>
          )}
        </HStack>
      </LinkOverlay>
    </LinkBox>
  );
};

Logo.propTypes = {
  hasTitle: PropTypes.bool,
  size: PropTypes.string,
};

Logo.defaultProps = {
  hasTitle: true,
  size: '25px',
};

export default Logo;
