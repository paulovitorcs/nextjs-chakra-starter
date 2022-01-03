import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, SlideFade } from '@chakra-ui/react';
import { useScroll } from '../../hooks/useScroll';

const Page = props => {
  const { children, title, description, ...containerProps } = props;
  const { hasScroll } = useScroll();

  return (
    <>
      <Head title={title} subtitle={description} />
      <SlideFade in={true}>
        <Container {...containerProps} pt={hasScroll ? "100px" : "50px"} minH="74vh">{children}</Container>
      </SlideFade>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Page.defaultProps = {
  paddingBottom: '50px',
};

export default Page;
