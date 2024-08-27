import './Header.css';

const Header = () => {
    return (
        <div id="header" className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-3" id="logo_div">
                    <img id="logo" src="/assets/images/LOGO BABBLE-14.png" alt="Babble Logo" />
                    <img className="tiny_logo" src="/assets/images/Link1.png" alt="tiny_logo" />
                        <i className="fa-brands fa-x-twitter" style={{ color: '#ffffff' }}></i>
                    </div>

                    <div className="col-5" id="main_menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-4" id="nav_btn">
                        <button className="nav_btn" style={{ backgroundColor: '#007DA4', borderColor: '#007DA4' }}>
                            <span className="btn_text">TRY BABBLE NOW</span>
                        </button>
                        <button className="nav_btn" style={{ backgroundColor: '#000000', borderColor: '#007DA4' }}>
                            <span className="btn_text">BUY $BABBLE</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
