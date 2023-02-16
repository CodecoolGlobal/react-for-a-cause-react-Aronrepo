import horsehead from "./img/horse-head.png";

export default function TodoList() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  return (
    <div className="header">
      <div className="imagename">
        <div id="image">
          <img src={horsehead} alt="horsehead" width="80" height="80" onClick={goToTop}/>

        </div>
        <div id="name"><span id="namespan">Saving America's Horses</span></div>
      </div>
      <div className="aboutContact">
        
          <a className= "aboutUsBtn" href="#aboutUs">About</a>
          <a className= "contactUsBtn" href="#contactText">Contact</a>
          <a className= "helpUsBtn" href="#helpUs">Help Us</a>
          
      </div>
    </div>
  );
}
