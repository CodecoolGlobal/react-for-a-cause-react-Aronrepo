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
      <div className="aboutcontact">
        <button id="about">About</button>
        <button id="contact">Contact</button>
      </div>
    </div>
  );
}
