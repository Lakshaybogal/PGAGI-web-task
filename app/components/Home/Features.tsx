import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image3 from "../../assets/Brain.svg";
import image5 from "../../assets/Key.svg";
import image1 from "../../assets/Lightning Bolt.svg";
import image4 from "../../assets/Planned Path.svg";
import image2 from "../../assets/Private.svg";
import image6 from "../../assets/Scale Up.svg";
import image8 from "../../assets/Tools.svg";
import image7 from "../../assets/Tune.svg";
import image9 from "../../assets/Voice.svg";
import "../../utili/Feature.css";
import Card1 from "../Feature/CardType1";
import Card2 from "../Feature/CardType2";
import FinalFeature from "../Feature/FinalComp";

interface ContentItem {
  title: string;
  description: string;
  image: string;
  button: string;
}

const contentItems: ContentItem[] = [
  {
    title: "Ultra-Fast Response",
    description:
      "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
    image: image1,
    button: "Try now",
  },
  {
    title: "Smart Interruption Management",
    description:
      "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations.",
    image: image2,
    button: "Try now",
  },
  {
    title: "Advanced Memory Recall",
    description:
      "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
    image: image3,
    button: "Try now",
  },
  {
    title: "Dynamic Conversational Flows",
    description:
      "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
    image: image4,
    button: "Try now",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
    image: image5,
    button: "Try now",
  },
  {
    title: "Scalability at Your Fingertips",
    description:
      "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
    image: image6,
    button: "Explore more",
  },
];

const card2 = [
  {
    title: "Fine tuning",
    description:
      "Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.",
    image: image7,
  },
  {
    title: "Custom tools",
    description:
      "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    image: image8,
  },
  {
    title: "Dedicated infrastructure",
    description:
      "Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.",
    image: image9,
  },
];
const Features = () => {
  return (
    <div className="flex flex-col gap-28 justify-center items-center">
      <div className="flex overflow-hidden">
        <Swiper
          slidesPerView={1}
          cssMode={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          autoplay={true}
          loop={true}
          speed={1000}
          modules={[Pagination, Autoplay, FreeMode]}
          style={{
            "--swiper-pagination-color": "#FF820E",
          }}
          className="w-80 overflow-hidden"
        >
          {contentItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Card1
                title={item.title}
                button={item.button}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center orange-shadow overflow-hidden rounded-2xl w-80">
        <Swiper
          slidesPerView={1}
          cssMode={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          autoplay={true}
          loop={true}
          speed={1000}
          modules={[Pagination, Autoplay, FreeMode]}
          style={{
            "--swiper-pagination-color": "#FF820E",
          }}
          className="w-80 overflow-hidden "
        >
          {card2.map((item, index) => (
            <SwiperSlide key={index}>
              <Card2
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FinalFeature />
    </div>
  );
};

export default Features;
