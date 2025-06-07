import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const marquees: { img: string; alt: string }[] = [
  {
    img: "/images/adidas.png",
    alt: "adidas logo",
  },
  {
    img: "/images/bershka.png",
    alt: "bershka logo",
  },
  {
    img: "/images/calvin-klein.png",
    alt: "calvin klein logo",
  },
  {
    img: "/images/gucci.png",
    alt: "gucci logo",
  },
  {
    img: "/images/h-m.png",
    alt: "h&m logo",
  },
  {
    img: "/images/hollister.png",
    alt: "hollister logo",
  },
  {
    img: "/images/nike.png",
    alt: "nike logo",
  },
  {
    img: "/images/prada.png",
    alt: "prada logo",
  },
  {
    img: "/images/versace.png",
    alt: "versace logo",
  },
  {
    img: "/images/zara.png",
    alt: "zara logo",
  },
];

const LogosMarquee = () => {
  return (
    <Marquee className="border-b-2">
      {marquees.map((logo, index) => (
        <Image
          key={index}
          src={logo.img}
          width={130}
          height={50}
          alt={logo.alt}
          className="mx-12"
        />
      ))}
    </Marquee>
  );
};

export default LogosMarquee;
