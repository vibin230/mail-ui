import React, { useState } from "react";
import { SideNav } from "../../components/sideNav/SideNav";
import { Header } from "../../components/header/Header";
import { InboxPage } from "../inboxPage/InboxPage";
import { DraftsPage } from "../draftsPage/DraftsPage";
import { SentPage } from "../sentPage/SentPage";
import { TrashPage } from "../trashPage/TrashPage";
import { Compose } from "../../components/composeMail/ComposeMail";

import "./BasePage.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export const BasePage = () => {
  const [showCompose, setShowCompose] = useState(false);
  let { path } = useRouteMatch("/basePage");

  return (
    <>
      <Header />
      <div className="base">
        <div className="base-nav">
          <SideNav showCompose={showCompose} setShowCompose={setShowCompose} />
        </div>
        <div className="base-content">
          <Switch>
            <Route exact path={`${path}/inbox`}>
              <InboxPage />
            </Route>
            <Route path={`${path}/sent`}>
              <SentPage />
            </Route>
            <Route path={`${path}/drafts`}>
              <DraftsPage />
            </Route>
            <Route path={`${path}/trash`}>
              <TrashPage />
            </Route>
          </Switch>
          {showCompose && <Compose setShowCompose={setShowCompose} />}
        </div>
      </div>
    </>
  );
};
