import horsehead from "./img/horse-head.png";

function HeaderLink({ href, extraClass, text, children }) {
  return <a className={"header-link " + extraClass} href={href}>{children}</a>
}

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
          <HeaderLink extraClass="aboutUsBtn" href="#aboutUs">
            About
            <img src={horsehead} alt="horsehead" width="40" height="40" onClick={goToTop}/>
          </HeaderLink>
          <HeaderLink extraClass="contactUsBtn" href="#contactText">Contact</HeaderLink>
          <HeaderLink extraClass="helpUsBtn" href="#helpUs">Help</HeaderLink>

          {/* <a className= "aboutUsBtn" href="#aboutUs">About</a>
          <a className= "contactUsBtn" href="#contactText">Contact</a>
          <a className= "helpUsBtn" href="#helpUs">Help Us</a> */}
          
      </div>
    </div>
  );
}
