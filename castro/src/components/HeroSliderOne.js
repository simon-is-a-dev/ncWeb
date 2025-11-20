import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class HeroSliderOne extends Component{
    
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            navigation: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'Revolutionizing Patient Care with Smart Software', sliderSubtitle: 'Harnessing the power of innovative software, we streamline patient management, enhance clinical workflows, and improve outcomes. Our solutions empower healthcare providers to deliver faster, more personalized care while giving patients a seamless, connected experience.', btnLink: 'contact-us'},
            {bgImg: 'slider2.jpg', sliderTitle: 'Transforming Healthcare Through Intelligent Technology', sliderSubtitle: 'Our advanced software solutions simplify patient management, optimize clinical processes, and drive better health outcomes. By enabling providers to work smarter and patients to stay connected, we create a healthcare experience that is faster, more efficient, and truly patient-focused.', btnLink: 'contact-us'},
            {bgImg: 'slider1.jpg', sliderTitle: 'Smarter Software for Better Patient Experiences', sliderSubtitle: 'With cutting-edge technology at its core, our platform streamlines care coordination, supports clinical decision-making, and enhances patient engagement. Healthcare teams can deliver personalized, timely care while patients enjoy a seamless, integrated healthcare journey.', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="hero-slider__content">
                                        <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                        <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                        <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> GET START</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <SwiperSlider options={params}>
                        {DataList}
                    </SwiperSlider>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;