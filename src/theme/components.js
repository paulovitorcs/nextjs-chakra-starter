const Heading = {
  sizes: {
    xl: '2xl',
  },
};

const Link = {
  baseStyle: {
    color: 'body.400',
    textDecoration: 'underline',
    _hover: {
      fontWeight: 'bold',
      color: 'body.500',
    },
  },
};

const Button = {
  defaultProps: {
    borderRadius: '100%',
  },
};

const components = {
  Heading,
  Link,
  Button,
};

export default components;
