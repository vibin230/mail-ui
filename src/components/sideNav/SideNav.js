import React, { useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./SideNav.scss";

const links = [
  ["/inbox", "Inbox"],
  ["/sent", "Sent"],
  ["/drafts", "Drafts"],
  ["/trash", "Trash"],
];

export const SideNav = (props) => {
  const { showCompose, setShowCompose } = props;
  let { url } = useRouteMatch("/basepage");
  return (
    <ul className="sideNav">
      <button
        className="compose"
        onClick={() => {
          setShowCompose(true);
        }}
      >
        <li className="compose-item">Compose</li>
      </button>
      {links.map(([to, linkName], index) => (
        <NavLink
          to={`${url}${to}`}
          key={`link${index}`}
          activeClassName="sideNav-link activeLink"
          className="sideNav-link"
        >
          <li className="sideNav-link-item">
            <span className="sideNav-link-name">{linkName}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
