import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';


const Category = () => {
    return (
      <section>
         <SectionTitle 
         subHeading={"From 11.00 am to 10.00pm"}
         heading={"Order Online"}>
         </SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h2 className="text-4xl text-center uppercase -mt-24 text-white">salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h2 className="text-4xl text-center uppercase -mt-24 text-white">pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h2 className="text-4xl text-center uppercase -mt-24 text-white">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h2 className="text-4xl text-center uppercase -mt-24 text-white">desert</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h2 className="text-4xl text-center uppercase -mt-24 text-white">salad</h2>
        </SwiperSlide>
      </Swiper>
      </section>
    );
};

export default Category;