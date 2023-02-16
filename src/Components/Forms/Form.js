import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import emailjs from "@emailjs/browser";
import classes from "./Forms.module.css";
function Form() {
  const form = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const textInputChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_s2byazf",
        "template_o4qasom",
        form.current,
        "qTQ_rS5PVsCpuPrek"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEnteredName("");
    setEnteredEmail("");
    setEnteredText("");
  };

  return (
    <form ref={form} onSubmit={formSubmissionHandler}>
      <div>
        <label className={classes.label}>Name</label>
        <br />

        <input
          type="text"
          id="name"
          name="from_name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <br />

      <div>
        <label className={classes.label}>Email</label>
        <br />

        <input
          type="text"
          id="email"
          name="user_email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
        />
      </div>
      <br />

      <div>
        <label className={classes.label}>Type your message here:</label>
        <br />

        <input
          type="text"
          id="text"
          name="message"
          value={enteredText}
          onChange={textInputChangeHandler}
        />
      </div>
      <br />
      <div>
        <Button type="submit" value="Send">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
