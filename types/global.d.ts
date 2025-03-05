/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
      googleTranslateElementInit: () => void;
    }
  
    const google: any;
  }
  
  export {};
  