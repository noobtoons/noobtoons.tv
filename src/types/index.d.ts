// types/index.ts
/* eslint-disable no-var */

export {};

declare global {
  interface Window {
    bootstrap: () => void;
    Email: any;
    jQuery: any;
    emailjs: any;
  }
}