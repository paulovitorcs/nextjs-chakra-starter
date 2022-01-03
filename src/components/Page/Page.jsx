import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, SlideFade } from '@chakra-ui/react';
import { useScroll } from '../../hooks/useScroll';

const Page = props => {
  const { children, title, ...containerProps } = props;
  const { hasScroll } = useScroll();

  const pageDescription = process.env.APP_DESCRIPTION;
  const pageTitle = title
    ? `${process.env.APP_TITLE} - ${title}`
    : process.env.APP_TITLE;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SlideFade in={true}>
        <Container
          {...containerProps}
          pt={hasScroll ? '100px' : '50px'}
          minH="74vh"
        >
          {children}
        </Container>
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
