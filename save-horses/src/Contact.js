import horseimg from "./img/horses.jpg"
import { useState } from "react"




const formArr = [];
export default function Contact() {

 

  const [displayForm, setDisplayForm] = useState(true);

  
  function ContactText(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    let tempObj = {
      
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "subject": subject,
        "message": message
      

    }
    function handleSubmit(e) {
      e.preventDefault();
      if (!firstName || !lastName || !email || !subject || !message) {
        return;
      }
      setDisplayForm(false);
      formArr.push(tempObj);
      console.log(formArr);

      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }


  return (
    <div id="contactText">
        <h2>Contact Us</h2><br/>
      <form onSubmit={
        handleSubmit
        }>
        <label htmlFor="fname"> First name: </label>
        <input type="text" id="fname" name="fname"
        onChange={(event) =>
          setFirstName(event.target.value)}></input><br/><br/>

        <label htmlFor="lname"> Last name: </label>
        <input type="text" id="lname" name="lname"
        onChange={(event) =>
          setLastName(event.target.value)}></input><br/><br/>

        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" value={email}
        onChange={(event) =>
          setEmail(event.target.value)}></input><br/><br/>

        <label htmlFor="subject"> Subject: </label>
        <input type="text" id="subject" name="subject"
        onChange={(event) =>
          setSubject(event.target.value)}></input><br/><br/>

        <label htmlFor="message"> Message: </label>
        <textarea type="text" id="message" name="message" rows="6"
        onChange={(event) =>
          setMessage(event.target.value)}></textarea>
      <button type="submit" id="sendButton" >Send</button>
      </form>
      </div>
  )
  
}

function ThankYou(){
  return (<div>
    <h3 id="thxMessage">We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
Have a great day!</h3>
    <button id='okButton' onClick={() => setDisplayForm(true)}>OK</button>
  </div>)
}

let content = <ContactText />
if(displayForm === false) {
  content = <ThankYou />
}

  return (
    <div className="contactDiv">
        {content}
      <div id="horseImgDiv">
      <img alt="horses"  id="horseImg"src={horseimg}></img>
      </div>
    </div>
  );
}


