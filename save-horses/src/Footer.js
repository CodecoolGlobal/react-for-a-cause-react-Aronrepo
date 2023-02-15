import badge1 from "./img/2022_GG-topRanked_143w.png"
import badge2 from "./img/2022-GG-effectiveNonprofit_143w.png"
import badge3 from "./img/2022-GG-vetted_143w.png"
import badge4 from "./img/great nonprofits_tr-ribbon-sm.png"
export default function Footer() {
  return (
    <div className="footer">
        <img className="badge" alt="badge" src={badge4}></img>
        <br></br>
        <img className="badge" alt="badge" src={badge1}></img>
        <img className="badge" alt="badge" src={badge2}></img>
        <img className="badge" alt="badge" src={badge3}></img>
        <br></br>
        <p>© 2008-2023 WFLF Humanion Films All Rights Reserved</p>
    </div>
  );
}