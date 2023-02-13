import horsehead from "./horse-head.png";
export default function TodoList() {
  return (
    <div className="header">
      <div className="imagename">
        <div id="image">
          <img src={horsehead} alt="horsehead" width="64" height="64" />
        </div>
        <div id="name"><span id="namespan">Saving America's Horses</span></div>
      </div>
      <div className="aboutcontact">
        <div id="about">About</div>
        <div id="contact">Contact</div>
      </div>
    </div>
  );
}
