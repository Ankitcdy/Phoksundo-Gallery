import React from 'react'
import Slider from "react-slick";
import './trending.css'

const Trending = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
                <Slider {...settings}>
                    <div>
                        <img src="/Images/a1.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a2.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a3.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a4.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a5.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a6.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a7.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                    <div>
                        <img src="/Images/a8.jpg" alt="..." className="img-fluid custom-slide" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Trending