import React, { useState } from "react";
import {
  ConnectMainDiv,
  TextHeader,
  TextDiv,
  ContactFormDiv,
  SendMessageButton,
} from "./styles";
import TextField from "@mui/material/TextField";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setContact((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = () => {
    console.log(contact);
  };
  return (
    <ConnectMainDiv>
      <TextHeader>Let's connect</TextHeader>
      <TextDiv>
        Hey there, hope you are doing good. Drop me a message below. Make it
        interesting, or keep it simple. I'll get back to you soon after I
        receice your message. To connect on a social network, give them a tap.
      </TextDiv>
      <ContactFormDiv>
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          value={contact.name}
          onChange={handleChange}
          name="name"
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          value={contact.email}
          onChange={handleChange}
          name="email"
        />
        <TextField
          id="standard-basic"
          label="Message"
          variant="outlined"
          value={contact.message}
          onChange={handleChange}
          name="message"
        />

        <SendMessageButton onClick={handleSubmit}>
          Send Message
        </SendMessageButton>
      </ContactFormDiv>
      <div>linkedin</div>
      <div>insta</div>
      <div>discord</div>
    </ConnectMainDiv>
  );
}
export default Contact;
