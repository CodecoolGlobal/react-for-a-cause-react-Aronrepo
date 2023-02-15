import fbLogo from "./img/facebook.png"
import twLogo from "./img/twitter.png"
import igLogo from "./img/instagram.png"
export default function AboutUs(){
    return (
        <div className="aboutUs">
            <div id="aboutUsText">
          <h2>About Us</h2>
          <p><b>SAVING AMERICA'S HORSES</b> is a humane educational multi-media project and lifesaving initiative under The Wild for Life Foundation, (WFLF) a nonprofit 501 c3 charity dedicated to saving, protecting and preserving equines through education, sanctuary, rescue and preservation. <b>We work to ensure the protection of wild equines and the humane treatment</b>, care and well-being of all equines. Through Saving America's Horses WFLF strives to <b>inform, inspire, and empower</b> the public for the greater good in <b>saving, preserving and protecting</b> wild and domestic equines and their significant roles in our world’s society, ecosystem and history; for a better world now and for generations to come.</p>
          <p>Our services and objectives are made possible through donations to our lifesaving mission. Unrestricted general funding allows us to allocate our resources most efficiently and where the needs are greatest. Federal ID No 26-3052458</p>
        </div>
        <div id="aboutUsImg">
        <a href="https://www.facebook.com/savingamericashorses/"><img alt="facebook" className="socialsLogo" src={fbLogo}></img></a> 
          <br/>
          <a href="https://twitter.com/savingamehorses"><img alt="twitter" className="socialsLogo" src={twLogo}></img></a> 
          
          <br/>
          <a href="https://www.instagram.com/wildforlifefoundationsah/"><img alt="instagram"className="socialsLogo" src={igLogo}></img></a> 
          </div>
        </div>
      );
}