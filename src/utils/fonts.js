import React from 'react';
import fonts from '../theme/fonts';

export const getThemeFonts = () => {
  return Object.values(fonts).map((font, index) => {
    return (
      <link
        key={`themeFont${index}`}
        href={`https://fonts.googleapis.com/css2?family=${font}&display=swap`}
        rel="stylesheet"
      />
    );
  });
};
