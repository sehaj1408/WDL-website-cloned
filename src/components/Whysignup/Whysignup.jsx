import './whysignup.css';

const Whysignup = () => {
    return (
        <div className="home-container">
            <section className="about">
                <div className="what-is">
                    <h1 className="what-is-title">
                        Why Sign Up?
                    </h1>
                    <h3>Placeholder</h3>
                </div>
          <div className="details-container">
            <div className="left">
              <div className="details-left">
                <h1>Engagement at Scale</h1>
                <br/>
                <p>
                  PlaceHolder
                </p>
                <br/>
                <h2>
                  <a href="placeholder">Learn More &#8594;</a>
                </h2>
                
              </div>
            <div className="img-left">
                <img src="/images/edited_block09_left.png" alt="" width="175" height="200"></img>
            </div>
            </div>
            <div className="right">
              <div className="details-right">
                <h1>Connected with Clients</h1>
                <br/>
                <p>
                  Placeholder
                </p>
                <br/>
                <h2>
                  <a href="placeholder">Learn More &#8594;</a>
                </h2>
                
              </div>
            <div className="img-right">
              <img src="/images/edited_block09_right.png" alt="" width="175" height="200"></img>
            </div> 
            </div>
          </div>
        </section>
      </div>
    );
};

export default Whysignup;