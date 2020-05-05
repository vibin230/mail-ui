import React, { useContext } from "react";
import "./SentPage.scss";
import { SentMailContext } from "../../data/sentMail";
import { Link } from "react-router-dom";

export const SentPage = () => {
  const [sentMails, setSentMails] = useContext(SentMailContext);

  return (
    <>
      <h1>Sent Mails</h1>
      <ul className="sentMail">
        {sentMails.map((sentMail, i) => (
          <Link
            className="sentMail-link"
            // to={`${url}/${sentMail.i}`}
            // key={`link${sentMail.id}`}
          >
            <li key={sentMail.id} className="sentMail-item">
              <div className="sentMail-item-to">{sentMail.to}</div>
              <div className="sentMail-item-from">{sentMail.from}</div>
              <div className="sentMail-item-msgContainer">
                <div
                  className="sentMail-item-msg"
                  preview={sentMail.mail.slice(0, 70)}
                >
                  {sentMail.mail}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
