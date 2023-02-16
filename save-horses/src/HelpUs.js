const HelpUs = () => {
  return (
    <div className="helpUs" id="helpUs">
      <img src="./img/peakpx_m.jpg" alt="" />
      <div className="helpUsText">How can You help us?</div>
      <div className="buttons">
        
          <div className="donate">
            Donate
            <a href="https://www.paypal.com/hu/home">
              <span className="donateSpan"></span>
            </a>
          </div>
        
        
          <div className="bestMovie">
            Watch the film
            <a href="https://www.savingamericashorses.org/watch.html">
              <span className="whatchSpan"></span>
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default HelpUs;
