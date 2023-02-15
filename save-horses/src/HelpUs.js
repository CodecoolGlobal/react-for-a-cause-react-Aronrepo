const HelpUs = () => {
  return (
    <div className="helpUs">
        <img src="./img/peakpx_m.jpg" alt="" />
      <div className="helpUsText">How can You help us?</div>
      <div className="buttons">
        <div className="donatePart">
          <div className="donate">
            Donate
            <a href="http://www.google.com"><span class="donateSpan"></span></a>
            </div>
          <div className="donateText"></div>
        </div>
        <div className="bestMoviePart">
          <div className="bestMovie">
            Whatch the film
          <a href="http://www.google.com"><span class="whatchSpan"></span></a>
          </div>
          <div className="movieText"></div>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
