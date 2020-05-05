import React, { useState, createContext } from "react";

export const SentMailContext = createContext();

export const SentMailProvider = (props) => {
  const [sentMail, setSentMail] = useState([]);
  return (
    <SentMailContext.Provider value={[sentMail, setSentMail]}>
      {props.children}
    </SentMailContext.Provider>
  );
};
