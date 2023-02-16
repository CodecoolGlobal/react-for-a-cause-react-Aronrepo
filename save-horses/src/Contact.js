import horseimg from "./img/horses.jpg"
import { useState } from "react"

export default function Contact() {
  const [vmi, setVmi] = useState(ContactText())
  
  function ContactText(){
  return (
    <div id="contactText">
        <h2>Contact Us</h2><br/>
      <form>
        <label for="fname"> First name: </label>
        <input type="text" id="fname" name="fname"></input><br/><br/>

        <label for="lname"> Last name: </label>
        <input type="text" id="lname" name="lname"></input><br/><br/>

        <label for="email"> Email: </label>
        <input type="email" id="email" name="email"></input><br/><br/>

        <label for="subject"> Subject: </label>
        <input type="text" id="subject" name="subject"></input><br/><br/>

        <label for="message"> Message: </label>
        <textarea type="text" id="message" name="message" rows="6"></textarea>
      </form>
      <button id="sendButton" onClick={() => setVmi(ThankYou())}>Send</button>
      </div>
  )
}

function ThankYou(){
  return (<div>
    <h3 id="thxMessage">We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
Have a great day!</h3>
    <button id='okButton' onClick={() => setVmi(ContactText())}>OK</button>
  </div>)
}


  return (
    <div className="contactDiv">
        {vmi}
      <div id="horseImgDiv">
      <img alt="horses"  id="horseImg"src={horseimg}></img>
      </div>
    </div>
  );
}
