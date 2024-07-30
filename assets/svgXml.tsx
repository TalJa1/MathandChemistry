/* eslint-disable prettier/prettier */
import React from 'react';

// style import
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const searchIcon = (w?: any, h?: any) => {
  const xml = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 18L13.8033 13.8033M16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16C12.6421 16 16 12.6421 16 8.5Z" stroke="#7C7C7C" style="stroke:#7C7C7C;stroke:color(display-p3 0.4863 0.4863 0.4863);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const checkIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5L5 7L10.5 1.5" stroke=${
    color ?? '#1B1B1B'
  } style="stroke:#1B1B1B;stroke:color(display-p3 0.1059 0.1059 0.1059);stroke-opacity:1;" stroke-width="1.5"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backArrow = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 9L9 17" stroke=${
    color ?? '#A7A7A7'
  } style="stroke:#A7A7A7;stroke:color(display-p3 0.6547 0.6547 0.6547);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const signInStar = (w?: any, h?: any) => {
  const xml = `<svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 0L23.823 3.36707C25.109 8.62855 25.752 11.2593 27.1233 13.3821C28.336 15.2593 29.9527 16.8418 31.8554 18.0139C34.0071 19.3395 36.651 19.926 41.9388 21.0991L46 22L41.9388 22.9009C36.651 24.074 34.0071 24.6605 31.8554 25.9861C29.9527 27.1582 28.336 28.7407 27.1233 30.6179C25.752 32.7407 25.109 35.3714 23.823 40.6329L23 44L22.177 40.6329C20.891 35.3714 20.248 32.7407 18.8767 30.6179C17.664 28.7407 16.0473 27.1582 14.1446 25.9861C11.9929 24.6605 9.34898 24.074 4.06116 22.9009L0 22L4.06116 21.0991C9.34897 19.926 11.9929 19.3395 14.1446 18.0139C16.0473 16.8418 17.664 15.2593 18.8767 13.3821C20.248 11.2593 20.891 8.62855 22.177 3.36707L23 0Z" fill="#A3A3F2" style="fill:#A3A3F2;fill:color(display-p3 0.6392 0.6392 0.9490);fill-opacity:1;"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
