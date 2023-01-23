
import './Slider.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear"
};
const SliderSlick = () => {
 
  return(
    <div className="slider">
       
        <Slider {...settings}>
          <div className="card">
            <img className='img' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/thunivu-et00340798-1666182985.jpg" alt="thunivu"/>
          </div>
          <div className="card">
            <img className='img' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/varisu-et00332034-1672912293.jpg" alt=""/>
          </div>
          <div className="card">
            <img className='img' src="https://static.toiimg.com/thumb/msid-89728395,width-1280,height-720,resizemode-4/.jpg" alt=""/>
          </div>

          
        </Slider>
      </div>
  )
  
};

export default SliderSlick;