import React from 'react';
import Video from '../components/common/Video';

const BusinessSectionAbout = () => {
    return (
        <section class="business-section">
            <div class="image-layer" style={{ backgroundImage: `url(images/background/7.jpg)` }}></div>
            <div class="container">
                {/* <!-- Upper Box --> */}
                <div class="upper-box">
                    <div class="separator"></div>
                    <h1>We <span>consult</span> our clients to <span>strengthen</span> decision making & understanding for their <span>businesses</span> and upcomming <span>ventures</span></h1>
                </div>
                <div class="inner-container">
                    <Video img='images/background/8.jpg' link='https://www.youtube.com/embed/fEErySYqItI' />
                </div>
            </div>
        </section>
    );
};

export default BusinessSectionAbout;