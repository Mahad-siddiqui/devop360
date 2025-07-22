// LogoContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Create Context
const LogoContext = createContext();

// 2. Create Provider
export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const getLogo = async () => {
      try {
        const response = await axios.get("https://agency.devop360.com/api/get-company-logos");
        setLogo(response.data.data);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    getLogo();
  }, []);

  return (
    <LogoContext.Provider value={logo}>
      {children}
    </LogoContext.Provider>
  );
};

// 3. Custom hook to use logo
export const useLogo = () => {
  return useContext(LogoContext);
};
