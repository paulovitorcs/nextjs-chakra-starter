import React from 'react';
import PropTypes from 'prop-types';
import { Button, useColorMode } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ToggleColorMode = props => {
  const { size } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button fontSize={size} onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </Button>
  );
};

ToggleColorMode.propTypes = {
  size: PropTypes.string,
};

ToggleColorMode.defaultProps = {
  size: '25px',
};

export default ToggleColorMode;
