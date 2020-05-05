import React, { useContext } from "react";
import "./TrashPage.scss";
import { EmailsContext } from "../../data/emails";

export const TrashPage = () => {
  const [mails, setMails] = useContext(EmailsContext);

  return (
    <>
      <h1>Trash</h1>
      <ul className="trash">
        {mails.map((mail, i) => (
          <div className="trash-style">
            <>
              {mail.trash && (
                <>
                  <li key={mail.id} className="trash-item">
                    <div className="trash-item-status">{mail.status}</div>
                    <div className="trash-item-name">{mail.name}</div>
                    <div className="trash-item-msgContainer">
                      <div
                        className="trash-item-msg"
                        preview={mail.msg.slice(0, 70)}
                      >
                        {mail.msg}
                      </div>
                    </div>
                    <div className="trash-item-time">{mail.time}</div>
                  </li>
                </>
              )}
            </>
          </div>
        ))}
      </ul>
    </>
  );
};
