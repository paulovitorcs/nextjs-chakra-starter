import { Heading, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Page from '../components/Page';

const Index = () => {
  return (
    <Page>
      <VStack spacing="30px" alignItems="left">
        <Heading as="h1">Hello World 👋 </Heading>
        <Text>
          Este é apenas um "starter" para projetos com{' '}
          <Link isExternal={true} href="https://nextjs.org/">
            NextJS
          </Link>{' '}
          e{' '}
          <Link isExternal={true} href="https://chakra-ui.com/">
            Chakra UI.
          </Link>
        </Text>
        <Text>
          Para facilitar o desenvolvimento de meus projetos pessoais gosto já de
          ter algo pré preparado. Montei aqui um pequeno exemplo com NextJS,
          Chakra UI, um pouquinho de{' '}
          <Link isExternal={true} href="https://fontawesome.com/">
            NextJS
          </Link>{' '}
          e alguns componentes básicos que provavelmente irei usar.
        </Text>
        <Text>
          Se você chegou até aqui então talvez esse starter te interesse também.
          Fique a vontade para usá-lo e utilizá-lo como template para o seu
          projeto também.
        </Text>
      </VStack>
    </Page>
  );
};

export default Index;
