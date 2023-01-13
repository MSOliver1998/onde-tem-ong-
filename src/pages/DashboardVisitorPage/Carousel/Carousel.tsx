import noUser from "../../../assets/imgs/noUser.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { iOng } from "../../DashboardLoggedPage/DashboardLoggedPage";

const Carousel = () => {

  const [getOng, setGetOng] = useState([] as iOng[])

  const getOngs = async () => {
    try {
      const response = await api.get<iOng[]>("/ongs");
      setGetOng(response.data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getOngs()
  }, [])

  return (
    <>
      <Swiper 
        breakpoints={{
          966: {
            width: 966,
            slidesPerView: 3,
          },
          757: {
            width: 757,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {getOng?.map((ong, index) => (
          <SwiperSlide virtualIndex={index} key={ong.id}>
            {ong.avatar ? <img src={ong.avatar === "" ? noUser : ong.avatar} alt=""/> : <img src={noUser} alt=""/>}
          </SwiperSlide>
        ))} 
      </Swiper>
    </>
  );
};

export default Carousel;
