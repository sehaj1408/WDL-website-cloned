import './home.css';

const Home = () => {
    return (
        <div className="home">
            <nav className='nav'>
                <div className='nav__item'><a href="#w">Why Attend</a></div>
                <div className='nav__item'><a href="#t">Timeline</a></div>
                <div className='nav__item'><a href="#p">Partner</a></div>
                <div className='nav__item'><a href="#d">FAQ</a></div>
                <div className='nav__item'><button>Sign Up</button></div>
            </nav>
            <div className="home-content">
                <h1 className="home-maintext">Western <br /> Developer's League</h1>
                <h3 className="home-subtext">Build - Grow - Develop </h3>

                <div className="circles">
                    <span class="left-circle"></span>
                    <span class="right-circle"></span>
                </div>

                <div className='figures'>
                    <img src="/images/home_figure.png" alt="homedab" className='figures__left' />
                    <img src="/images/home_figure.png" alt="homedab" className='figures__right' />
                </div>
                
            </div>
        </div>
    );
};

export default Home