import React, { useEffect } from "react";
import { Sparkle } from "lucide-react";
import { animate } from "animejs";

const HeroRightSide = () => {
  useEffect(() => {
    animate(".sparkle", {
      rotate: {
        to: 360,
        duration: 2000,
      },
      easing: "linear",
      loop: true,
    });
  }, []);

  return (
    <div className="hidden lg:flex lg:max-w-1/3 w-full h-[500px] relative ">
      <Sparkle
        size={64}
        fill="black"
        className="absolute top-0 right-0 sparkle"
      />
      <Sparkle
        size={32}
        fill="black"
        className="absolute bottom-5 left-10 sparkle"
      />
    </div>
  );
};

export default HeroRightSide;
