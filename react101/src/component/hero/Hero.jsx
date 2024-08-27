const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 hero-left">
                        <button className="centered-button small-button">Managing Your Telegram Communities</button>
                        <div id='hero_left' className='mt-4'>
                            Your Friendly <span className='text_color2'>AI Assistant</span> for <span className='text_color2'>Instant</span>  Responses and Real-Time<span className='text_color2'> Conversations</span>
                        </div>
                        <div className='mt-4 flex-right'>
                            <button className="nav_btn" style={{ backgroundColor: '#007DA4', borderColor: '#007DA4' }}>
                                <span className="btn_text">TRY BABBLE NOW</span>
                            </button>
                            <button className="nav_btn" style={{ backgroundColor: '#000000', borderColor: '#007DA4' }}>
                                <span className="btn_text">BUY $BABBLE</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-6 hero-right">
                       
                        <img id="hero-img" src="/assets/images/Group 1000003951.png" alt="hero-logo" />
                       
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;