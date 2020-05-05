import React, { useState, useContext } from "react";
import "./InboxPage.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { InboxPreview } from "../../components/inboxPreview/InboxPreview";
import { InboxMsg } from "../../components/inboxMsg/InboxMsg";
import { EmailsContext } from "../../data/emails";

export const InboxPage = () => {
  const [mails, setMails] = useContext(EmailsContext);
  let { path } = useRouteMatch("/basePage/inbox");
  const inboxURL = mails.map((mail) => mail.id);
  const [mailIds, setMailIDs] = useState(inboxURL);

  return (
    <>
      <h1>Inbox </h1>
      <Switch>
        <Route exact path={path}>
          <InboxPreview />
        </Route>
        {mailIds.map((mailId, i) => (
          <Route path={`${path}/${mailId}`}>
            <InboxMsg />
          </Route>
        ))}
      </Switch>
    </>
  );
};
