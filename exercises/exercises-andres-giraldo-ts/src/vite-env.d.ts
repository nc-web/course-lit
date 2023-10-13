// / <reference types="vite/client" />


// Declare Module - File Static
declare module 'react-markup';
declare module '*.svg';
declare module '*.webp';
declare module '*.gif';
// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
declare module '*.pdf';
declare module '*.mp3';


// Declare Module - SASS
declare module '*.scss' {
  const scss: { [key: string]: string }
  export default scss
}
declare module '*.sass' {
  const sass: { [key: string]: string }
  export default sass
}
