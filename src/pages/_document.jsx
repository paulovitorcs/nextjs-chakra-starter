import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../theme';
import { getThemeFonts } from '../utils/fonts';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>{getThemeFonts()}</Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
