import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ProductSlider extends Component{

    render(){

        const params = {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          };

         const sliderImg = this.props.imgSrc;
        return(
            <div className="rui-2ns2W">
                <div className="rui-2vHTl _1rH9T">
                <Swiper {...params}>
                    {
                         sliderImg && sliderImg.map(img => <div key={img.id}><img src={img.src} /></div>)
                    }   
                </Swiper>                
            </div>
            </div>
        )
    }
}

export default ProductSlider;