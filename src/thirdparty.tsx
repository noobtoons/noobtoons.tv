import React, { useEffect } from 'react';
import './index.css';

interface AddLibraryInstance {
  urlOfTheLibrary?: string
  scriptIntegrity?: string | undefined
}

export function AddLibrary(urlOfTheLibrary?: string, scriptIntegrity?: string | undefined): void {
  useEffect(() => {
    const script: any = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    script.crossOrigin = "anonymous"
    if(scriptIntegrity) script.integrity = scriptIntegrity;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [urlOfTheLibrary]);
}

export default function ThirdpartyLinks() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Ultra&display=swap');
      </style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous" />
    </>
  );
}