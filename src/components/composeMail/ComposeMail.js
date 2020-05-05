import React, { useState, useContext } from "react";
import { SentMailContext } from "../../data/sentMail";

import "./ComposeMail.scss";

export const Compose = (props) => {
  const { setShowCompose } = props;
  const [sentMail, setSentMail] = useContext(SentMailContext);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [mail, setMail] = useState("");

  const updateTo = (e) => {
    setTo(e.target.value);
  };
  const updateFrom = (e) => {
    setFrom(e.target.value);
  };
  const updateMail = (e) => {
    setMail(e.target.value);
  };
  const addSentMail = (e) => {
    e.preventDefault();
    setShowCompose(false);
    setSentMail((prevMail) => [
      ...prevMail,
      { to: to, from: from, mail, mail },
    ]);
  };

  return (
    <form className="composeMail" onSubmit={addSentMail}>
      <button onClick={() => setShowCompose(false)}>Back</button>
      <div className="composeMail-from">
        <label for="from">From:</label>
        <input type="text" name="from" onChange={updateFrom} />
      </div>
      <div className="composeMail-to">
        <label for="to">To:</label>
        <input type="text" name="to" onChange={updateTo} />
      </div>
      <div className="composeMail-mail">
        <label for="mail">Mail:</label>
        <textarea type="text" name="mail" onChange={updateMail}></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};
