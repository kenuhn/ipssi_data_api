import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../img/MicrosoftTeams-image.png'
import img2 from '../../img/MicrosoftTeams-image(1).png'
import img3 from '../../img/MicrosoftTeams-image(2).png'
import img4 from '../../img/MicrosoftTeams-image(3).png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Analyse = () => {
  return (
    <div className='slider_content'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ width: '900px', height: '500px', marginTop: "60px", display: 'flex', justifyContent: "center"}}>
        <SwiperSlide style={{display: "flex", justifyContent: "center"}}> <img style={{ width: '500px', height: '500px' }} src={img1} alt="Image 1" /></SwiperSlide>
        <SwiperSlide style={{display: "flex", justifyContent: "center"}}> <img style={{ width: '500px', height: '500px' }} src={img2} alt="Image 1" /></SwiperSlide>
        <SwiperSlide style={{display: "flex", justifyContent: "center"}}> <img style={{ width: '500px', height: '500px' }} src={img3} alt="Image 1" /></SwiperSlide>
        <SwiperSlide style={{display: "flex", justifyContent: "center"}}> <img style={{ width: '500px', height: '500px' }} src={img4} alt="Image 1" /></SwiperSlide>
      </Swiper>
    </div>


  )
};

export default Analyse;