import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./containers/landingPage/LandingPage";
import { BasePage } from "./containers/basePage/BasePage";
import { EmailsProvider } from "./data/emails";
import { SentMailProvider } from "./data/sentMail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SentMailProvider>
        {" "}
        <EmailsProvider>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/basePage">
                <BasePage />
              </Route>
            </Switch>
          </div>
        </EmailsProvider>
      </SentMailProvider>
    </BrowserRouter>
  );
}

export default App;
