import './whysignup.css';

const Whysignup = () => {
    return (
        <div className="home-container" id="w">
            <h1 className="what-is-title">Why Sign Up?</h1>
            <h3 className="whysub">Cupcake danish tiramisu powder soda ginger cake. Dessert carrot cake tartsweet marzipan for fruitcake.</h3>
            <div className="details-container">
                <div className="left">
                    <div className="details-left">
                        <h1 className="details-left__h1">Engagement at Scale</h1>
                       
                        <p className="details-left__p">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar.</p>
                        
                        <h2 className="details-left__h2"><a href="placeholder">Learn More &#8594;</a></h2>
                    </div>
                    <div className="img-left">
                        <img src="/images/edited_block09_left.png" alt="" width="175" height="200"></img>
                    </div>
                </div>

                <div className="right">
                    <div className="details-right">
                        <h1 className="details-right__h1">Connected with Clients</h1>
                        <p className="details-right__p">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans. Croissant chocolate cake tootsie roll. Cupcake sugar.</p>
                        <h2 className="details-right__h2"><a href="placeholder">Learn More &#8594;</a></h2>
                    </div>
                    <div className="img-right">
                        <img src="/images/edited_block09_right.png" alt="" width="175" height="200"></img>
                    </div> 
                </div>
          </div>
      </div>
    );
};

export default Whysignup;