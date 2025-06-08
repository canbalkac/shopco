"use client";
import ProductReview from "@/components/ui/components/products/product-review";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperNavButton from "@/components/SwiperButton/SwiperNavButton";
import { useState } from "react";

const Reviews: { star: number; name: string; review: string }[] = [
  {
    star: 1,
    name: "Can Balkaç",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 2,
    name: "Mert Balkaç",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 3,
    name: "Firdes Balkaç",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 4,
    name: "Ahmet Cemal Balkaç",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 5,
    name: "Feridun Candan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 0.5,
    name: "Şengül Candan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 1.5,
    name: "Filiz Candan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 2.5,
    name: "Emre Akgüş",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 3.5,
    name: "Kumsal Yeşilçayır",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
  {
    star: 4.5,
    name: "Merve Yeşilçayır",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis accusamus fuga quasi eligendi numquam velit ipsa eum nesciunt commodi?",
  },
];

const HappyCustomers = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  return (
    <section id="happy-customers">
      <div className="flex items-center justify-center lg:justify-between lg:px-64 mt-16 mb-12">
        <p className="text-2xl lg:text-5xl font-extrabold">
          OUR HAPPY CUSTOMER
        </p>
        <SwiperNavButton isLoop={true} swiper={swiperInstance} />
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1430: {
            slidesPerView: 3,
          },
          1900: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper align-middle"
      >
        {Reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ProductReview
              star={review.star}
              name={review.name}
              review={review.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HappyCustomers;
