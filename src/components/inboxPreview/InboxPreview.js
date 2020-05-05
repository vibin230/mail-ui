import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { EmailsContext } from "../../data/emails";
import { useRouteMatch } from "react-router-dom";

import "./InboxPreview.scss";

export const InboxPreview = (props) => {
  let { url } = useRouteMatch("/basePage/inbox");
  const [mails, setMails] = useContext(EmailsContext);

  return (
    <ul className="inbox">
      {mails.map((mail, i) => (
        <div className="inbox-style">
          <>
            {!mail.trash && (
              <>
                <Link
                  className="inbox-link"
                  to={`${url}/${mail.id}`}
                  key={`link${mail.id}`}
                  onClick={() => {
                    mail.status = "R";
                  }}
                >
                  <li key={mail.id} className="inbox-item">
                    <div className="inbox-item-status">{mail.status}</div>
                    <div className="inbox-item-name">{mail.name}</div>
                    <div className="inbox-item-msgContainer">
                      <div
                        className="inbox-item-msg"
                        preview={mail.msg.slice(0, 70)}
                      >
                        {mail.msg}
                      </div>
                    </div>
                    <div className="inbox-item-time">{mail.time}</div>
                  </li>
                </Link>
                <div classame="delete">
                  <button onClick={() => (mail.trash = true)}>Delete</button>
                </div>
              </>
            )}
          </>
        </div>
      ))}
    </ul>
  );
};
