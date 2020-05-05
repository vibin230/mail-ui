import React, { useState, createContext } from "react";

export const EmailsContext = createContext();

export const EmailsProvider = (props) => {
  const [email, setEmail] = useState([
    {
      id: 241,
      name: "natoque penatibus",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "4:38PM",
      trash: false,
    },
    {
      id: 723,
      name: "ut faucibus",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "May 2",
      trash: false,
    },
    {
      id: 432,
      name: "quis imperdiet",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "May 1",
      trash: false,
    },
    {
      id: 832,
      name: "neque sodales",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "Apr 30",
      trash: false,
    },
    {
      id: 379,
      name: "donec enim",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "Apr 29",
      trash: false,
    },
    {
      id: 340,
      name: "egestas maecenas",
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet.",
      status: "UR",
      time: "Apr 29",
      trash: false,
    },
  ]);
  return (
    <EmailsContext.Provider value={[email, setEmail]}>
      {props.children}
    </EmailsContext.Provider>
  );
};
