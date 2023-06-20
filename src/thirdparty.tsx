import React, { useEffect } from 'react';
import './index.css';

// interface AddLibraryInstance {
//   urlOfTheLibrary?: string
//   scriptIntegrity?: string | undefined
// }

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