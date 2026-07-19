import react from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="home">
        <Featured />
        <TrustedBy />
       <Slide
  navigation
  loop
  spaceBetween={20}
  slidesPerView={4}
>
  {cards.map((card) => (
    <CatCard key={card.id} card={card} />
  ))}
</Slide>
    </div>
  );
};

export default Home;
