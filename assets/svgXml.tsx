/* eslint-disable prettier/prettier */
import React from 'react';

// style import
import {SvgXml} from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const profileIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4167 22.5001H4.58341C2.97258 22.5001 1.66675 21.1943 1.66675 19.5835C1.66675 14.8226 8.66675 14.9168 11.0001 14.9168C13.3334 14.9168 20.3334 14.8226 20.3334 19.5835C20.3334 21.1943 19.0276 22.5001 17.4167 22.5001Z" stroke="#464646" style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0001 10.8333C13.5774 10.8333 15.6667 8.744 15.6667 6.16667C15.6667 3.58934 13.5774 1.5 11.0001 1.5C8.42275 1.5 6.33342 3.58934 6.33342 6.16667C6.33342 8.744 8.42275 10.8333 11.0001 10.8333Z" stroke=${
    color ?? '#464646'
  } style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const netWorkIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5M22.5 12C22.5 6.20101 17.799 1.5 12 1.5M22.5 12H1.5M12 22.5C6.20101 22.5 1.5 17.799 1.5 12M12 22.5C12 22.5 16.6667 19 16.6667 12C16.6667 5 12 1.5 12 1.5M12 22.5C12 22.5 7.33333 19 7.33333 12C7.33333 5 12 1.5 12 1.5M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5" stroke=${
    color ?? '#464646'
  } style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-width="1.5"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const addIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66675 11H20.3334M11.0001 1.66663V20.3333" stroke=${
    color ?? '#464646'
  } style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const docsIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33325 6.33337H15.6666M6.33325 11H15.6666M8.66659 15.6667H13.3333M1.08325 11C1.08325 3.41671 3.41659 1.08337 10.9999 1.08337C18.5833 1.08337 20.9166 3.41671 20.9166 11C20.9166 18.5834 18.5833 20.9167 10.9999 20.9167C3.41659 20.9167 1.08325 18.5834 1.08325 11Z" stroke=${
    color ?? '#464646'
  } style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83315 7.66672C8.26873 5.23113 10.9891 3.36503 12.829 2.23484C14.17 1.41114 15.8296 1.41114 17.1706 2.23484C19.0106 3.36503 21.7309 5.23113 24.1665 7.66672C29.4471 12.9473 29.1665 16 29.1665 21C29.1665 23.3498 28.9825 25.3314 28.7874 26.772C28.5821 28.2877 27.2601 29.3334 25.7306 29.3334H23.3332C21.4922 29.3334 19.9998 27.841 19.9998 26V22.6667C19.9998 21.3406 19.473 20.0689 18.5354 19.1312C17.5977 18.1935 16.3259 17.6667 14.9998 17.6667C13.6737 17.6667 12.402 18.1935 11.4643 19.1312C10.5266 20.0689 9.99982 21.3406 9.99982 22.6667V26C9.99982 27.841 8.50743 29.3334 6.66649 29.3334H4.26908C2.73952 29.3334 1.41757 28.2877 1.21229 26.772C1.01719 25.3314 0.833158 23.3497 0.833158 21C0.833158 16 0.552492 12.9474 5.83315 7.66672Z" fill="#090A0A" style="fill:#090A0A;fill:color(display-p3 0.0353 0.0392 0.0392);fill-opacity:1;"/>
<path d="M5.83315 7.66672C8.26873 5.23113 10.9891 3.36503 12.829 2.23484C14.17 1.41114 15.8296 1.41114 17.1706 2.23484C19.0106 3.36503 21.7309 5.23113 24.1665 7.66672C29.4471 12.9473 29.1665 16 29.1665 21C29.1665 23.3498 28.9825 25.3314 28.7874 26.772C28.5821 28.2877 27.2601 29.3334 25.7306 29.3334H23.3332C21.4922 29.3334 19.9998 27.841 19.9998 26V22.6667C19.9998 21.3406 19.473 20.0689 18.5354 19.1312C17.5977 18.1935 16.3259 17.6667 14.9998 17.6667C13.6737 17.6667 12.402 18.1935 11.4643 19.1312C10.5266 20.0689 9.99982 21.3406 9.99982 22.6667V26C9.99982 27.841 8.50743 29.3334 6.66649 29.3334H4.26908C2.73952 29.3334 1.41757 28.2877 1.21229 26.772C1.01719 25.3314 0.833158 23.3497 0.833158 21C0.833158 16 0.552492 12.9474 5.83315 7.66672Z" stroke=${
    color ?? '#090A0A'
  } style="stroke:#090A0A;stroke:color(display-p3 0.0353 0.0392 0.0392);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

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
