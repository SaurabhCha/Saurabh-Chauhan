import React, { useState } from "react";
import {
  ConnectMainDiv,
  TextHeader,
  TextDiv,
  ContactFormDiv,
  SendMessageButton,
  ContactDiv,
} from "./styles";
import TextField from "@mui/material/TextField";

function Contact({ theme }) {
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const mandatoryCheck = (value) => {
    if (value && value.trim()) {
      return false;
    }
    return true;
  };

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameError = mandatoryCheck(contact.name);
  const emailError = mandatoryCheck(contact.email);
  const messageError = mandatoryCheck(contact.message);

  const handleChange = (e) => {
    setContact((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    setNameTouched(true);
    setEmailTouched(true);
    setMessageTouched(true);
    if (!nameError && !emailError && !messageError) {
      console.log(contact);
    }
  };

  return (
    <ConnectMainDiv>
      <TextHeader>Let's connect</TextHeader>
      <TextDiv>
        Hey there, hope you are doing good. Drop me a message below. Make it
        interesting, or keep it simple. I'll get back to you soon after I
        receice your message.
      </TextDiv>
      <ContactFormDiv>
        <ContactDiv>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={contact.name}
            onChange={handleChange}
            name="name"
            fullWidth
            onBlur={() => {
              setNameTouched(true);
            }}
            error={nameTouched && nameError}
            helperText={nameTouched && nameError ? "Mandatory Field" : ""}
          />
        </ContactDiv>
        <ContactDiv>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={contact.email}
            onChange={handleChange}
            name="email"
            fullWidth
            onBlur={() => {
              setEmailTouched(true);
            }}
            error={emailTouched && emailError}
            helperText={emailTouched && emailError ? "Mandatory Field" : ""}
          />
        </ContactDiv>
        <ContactDiv>
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            value={contact.message}
            onChange={handleChange}
            name="message"
            multiline
            rows={4}
            fullWidth
            onBlur={() => {
              setMessageTouched(true);
            }}
            error={messageTouched && messageError}
            helperText={messageTouched && messageError ? "Mandatory Field" : ""}
          />
        </ContactDiv>
        <SendMessageButton onClick={handleSubmit}>
          Send Message
        </SendMessageButton>
      </ContactFormDiv>
    </ConnectMainDiv>
  );
}
export default Contact;
