import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper } from "swiper/types";

type SwiperNavButtonProps = {
  isLoop: boolean;
  swiper: Swiper | null;
};

const SwiperNavButton = ({ isLoop, swiper }: SwiperNavButtonProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (isLoop) return;
    if (!swiper) return;

    const update = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", update);
    update();
    return () => {
      swiper.off("slideChange", update);
    };
  }, [swiper, isLoop]);

  if (!swiper) return null;

  return (
    <div className="hidden md:flex">
      <button
        className={
          "text-2xl flex items-center justify-center w-10 h-10 transition " +
          (isLoop || !isBeginning
            ? "cursor-pointer"
            : "opacity-50 cursor-default")
        }
        onClick={() => swiper.slidePrev()}
        disabled={!isLoop && isBeginning}
      >
        <ArrowLeft />
      </button>
      <button
        className={
          "text-2xl flex items-center justify-center w-10 h-10 transition " +
          (isLoop || !isEnd ? "cursor-pointer" : "opacity-50 cursor-default")
        }
        onClick={() => swiper.slideNext()}
        disabled={!isLoop && isEnd}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default SwiperNavButton;
