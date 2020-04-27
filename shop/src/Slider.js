import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Slider extends React.Component {

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://webface.ie/shop/images/1.jpg"
                            alt="We sell everything eatable"
                        />
                        <Carousel.Caption>
                            <h3>Vegetables and more</h3>
                            <p>We sell everything eatable</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://webface.ie/shop/images/2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Call us to order</h3>
                            <p>Free delivery in 1 hour</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://webface.ie/shop/images/3.jpg"
                            alt="We source the best potatoes"
                        />

                        <Carousel.Caption>
                            <h3>We source the best potatoes</h3>
                            <p>Simply the best...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
    
}

export default Slider;


