import horsehead from "./horse-head.png";
export default function TodoList() {
  return (
    <div className="header">
      <div className="imagename">
        <div id="image">
          <img src={horsehead} alt="horsehead" width="80" height="80" />
        </div>
        <div id="name"><span id="namespan">Saving America's Horses</span></div>
      </div>
      <div className="aboutContact">
        
          <a className= "aboutUsBtn" href="#aboutUs">About</a>
          <a className= "contactUsBtn" href="#helpUs">Contact</a>
          <a className= "helpUsBtn" href="#helpUs">Help Us</a>
          
        {/* <div id="contact" className="headerButton">Contact</div> */}
        {/* <div id="helpus" className="headerButton">Help us</div> */}
      </div>
    </div>
  );
}
