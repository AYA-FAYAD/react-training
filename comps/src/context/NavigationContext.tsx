import { createContext, useState, useEffect } from "react";

const NavigationContex = createContext({});

function NavigationProvider({ children }: any) {
  const [currentPath, SetCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      SetCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    // clean up code

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: any) => {
    window.history.pushState({}, "", to);
    SetCurrentPath(to);
  };

  return (
    <NavigationContex.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContex.Provider>
  );
}

export { NavigationProvider };

export default NavigationContex;
