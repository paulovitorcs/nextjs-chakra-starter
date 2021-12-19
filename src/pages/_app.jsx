import { ChakraProvider } from '@chakra-ui/react';

const MyApp = props => {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider>
      <header>
        Header Component
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default MyApp;
