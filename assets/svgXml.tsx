/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';

// style import
import {SvgXml} from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const xIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L1 15M1.00003 1L15 15" stroke=${
    color ?? 'white'
  } style="stroke:white;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const solutionIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4997 11.6666L12.833 18.3333L9.49954 15M16.2817 29.3325C22.6034 26.3808 26.4418 18.1072 27.5194 10.7705C27.8864 8.27213 26.4062 5.9533 24.1476 4.82402L17.4809 1.49068C15.6041 0.552259 13.3949 0.552259 11.5181 1.49068L4.85143 4.82402C2.59287 5.9533 1.11265 8.27213 1.4796 10.7705C2.55719 18.1072 6.39569 26.3808 12.7173 29.3325C13.8453 29.8592 15.1537 29.8592 16.2817 29.3325Z" stroke=${
    color ?? 'white'
  } style="stroke:white;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const examNext = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 18L9.5 10L1.5 2" stroke=${
    color ?? '#0D0D0D'
  } style="stroke:#0D0D0D;stroke:color(display-p3 0.0510 0.0510 0.0510);stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const examBack = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2L1.5 10L9.5 18" stroke=${
    color ?? '#0D0D0D'
  } style="stroke:#0D0D0D;stroke:color(display-p3 0.0510 0.0510 0.0510);stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const saveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.83341C1 3.14235 4.33333 1.16675 11 1.16675C17.6667 1.16675 21 3.14236 21 7.83342V26.3097C21 27.7946 19.2048 28.5382 18.1548 27.4882L12.1785 21.5119C11.5276 20.8611 10.4724 20.8611 9.82149 21.5119L3.84518 27.4882C2.79524 28.5382 1 27.7946 1 26.3097V7.83341Z" stroke=${
    color ?? '#565CE7'
  } style="stroke:#565CE7;stroke:color(display-p3 0.3373 0.3608 0.9059);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const reCheckIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9V15M6 12H12M12 2.27928V1H6V2.27928M12 2.27928V4H6V2.27928M12 2.27928C15.3745 3.0462 16.5 5.5037 16.5 11C16.5 17.8824 14.7353 20 9 20C3.26471 20 1.5 17.8824 1.5 11C1.5 5.5037 2.62549 3.0462 6 2.27928" stroke=${
    color ?? '#D2FD7C'
  } style="stroke:#D2FD7C;stroke:color(display-p3 0.8235 0.9922 0.4863);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const timeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6V10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke=${
    color ?? '#D2FD7C'
  } style="stroke:#D2FD7C;stroke:color(display-p3 0.8235 0.9922 0.4863);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const finishDocsIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 10L7.29996 14.2L5.50004 12.4M11.5 2.27928V1H5.5V2.27928M11.5 2.27928V4H5.5V2.27928M11.5 2.27928C14.8745 3.0462 16 5.5037 16 11C16 17.8824 14.2353 20 8.5 20C2.76471 20 1 17.8824 1 11C1 5.5037 2.12549 3.0462 5.5 2.27928" stroke=${
    color ?? '#0D0D0D'
  } style="stroke:#0D0D0D;stroke:color(display-p3 0.0510 0.0510 0.0510);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const pendingDocsIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11H10M6 15H12M12 2.27928V1H6V2.27928M12 2.27928V4H6V2.27928M12 2.27928C15.3745 3.0462 16.5 5.5037 16.5 11C16.5 17.8824 14.7353 20 9 20C3.26471 20 1.5 17.8824 1.5 11C1.5 5.5037 2.62549 3.0462 6 2.27928" stroke=${
    color ?? '#0D0D0D'
  } style="stroke:#0D0D0D;stroke:color(display-p3 0.0510 0.0510 0.0510);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const cameraIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 2.99996L13 1.66663V8.33329L9.66667 6.99996M1.66667 0.666626H9C9.36819 0.666626 9.66667 0.965103 9.66667 1.33329V8.66663C9.66667 9.03481 9.36819 9.33329 9 9.33329H1.66667C1.29848 9.33329 1 9.03481 1 8.66663V1.33329C1 0.965103 1.29848 0.666626 1.66667 0.666626Z" stroke=${
    color ?? 'white'
  } style="stroke:white;stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const nextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 5.5L1.33325 5.5M14.6666 5.5L9.66658 10.5M14.6666 5.5L9.66659 0.5" stroke=${
    color ?? '#464646'
  } style="stroke:#464646;stroke:color(display-p3 0.2740 0.2740 0.2740);stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const redBlurDotIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.52" d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" fill="#B65A46" stroke="#B65A46" style="fill:#B65A46;fill:color(display-p3 0.7118 0.3525 0.2736);fill-opacity:1;stroke:#B65A46;stroke:color(display-p3 0.7118 0.3525 0.2736);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9.5C16 13.0899 13.0899 16 9.5 16C5.91015 16 3 13.0899 3 9.5C3 5.91015 5.91015 3 9.5 3C13.0899 3 16 5.91015 16 9.5Z" fill="#B65A46" stroke=${
    color ?? '#B65A46'
  } style="fill:#B65A46;fill:color(display-p3 0.7118 0.3525 0.2736);fill-opacity:1;stroke:#B65A46;stroke:color(display-p3 0.7118 0.3525 0.2736);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const noticeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99994 25.1666V26.8333C8.99994 29.5947 11.2385 31 13.9999 31C16.7614 31 18.9999 29.5947 18.9999 26.8333V25.1666M3.99992 10.1666C3.99992 4.6438 8.47707 1.83331 13.9999 1.83331C19.5228 1.83331 23.9999 4.6438 23.9999 10.1666C23.9999 13.3986 25.175 17.0222 26.3859 19.8982C27.3913 22.2861 25.7036 25.1666 23.1126 25.1666H4.88722C2.29624 25.1666 0.608577 22.2861 1.61396 19.8982C2.82482 17.0222 3.99992 13.3986 3.99992 10.1666Z" stroke=${
    color ?? '#D2FD7C'
  } style="stroke:#D2FD7C;stroke:color(display-p3 0.8235 0.9922 0.4863);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const alignIconSVG = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 3.16667L6.33325 3.16667M6.33325 3.16667C6.33325 4.08714 7.07944 4.83333 7.99992 4.83333C8.92039 4.83333 9.66659 4.08714 9.66659 3.16667M6.33325 3.16667C6.33325 2.24619 7.07944 1.5 7.99992 1.5C8.92039 1.5 9.66659 2.24619 9.66659 3.16667M9.66659 3.16667L14.6666 3.16667M1.33325 9H11.3333M11.3333 9C11.3333 9.92047 12.0794 10.6667 12.9999 10.6667C13.9204 10.6667 14.6666 9.92047 14.6666 9C14.6666 8.07953 13.9204 7.33333 12.9999 7.33333C12.0794 7.33333 11.3333 8.07953 11.3333 9ZM4.66659 14.8333H14.6666M4.66659 14.8333C4.66659 13.9129 3.92039 13.1667 2.99992 13.1667C2.07944 13.1667 1.33325 13.9129 1.33325 14.8333C1.33325 15.7538 2.07944 16.5 2.99992 16.5C3.92039 16.5 4.66659 15.7538 4.66659 14.8333Z" stroke=${
    color ?? '#7C7C7C'
  } style="stroke:#7C7C7C;stroke:color(display-p3 0.4863 0.4863 0.4863);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

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
