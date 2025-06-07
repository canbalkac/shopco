import Image from "next/image";
import React from "react";

const DressStyle = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-8/12 bg-[#F0F0F0] rounded-3xl p-8 flex flex-col items-center gap-10">
        <h1 className="font-extrabold text-center text-5xl">
          BROWSE BY DRESS STYLE
        </h1>

        {/* 1. Satır */}
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="col-span-1 h-[300px] relative rounded-xl overflow-hidden">
            <Image src="/images/casual.png" alt="casual" fill quality={100} />
          </div>
          <div className="col-span-2 h-[300px] relative rounded-xl overflow-hidden">
            <Image src="/images/formal.png" alt="formal" fill quality={100} />
          </div>
        </div>

        {/* 2. Satır */}
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="col-span-2 h-[300px] relative rounded-xl overflow-hidden">
            <Image src="/images/party.png" alt="party" fill quality={100} />
          </div>
          <div className="col-span-1 h-[300px] relative rounded-xl overflow-hidden">
            <Image src="/images/gym.png" alt="gym" fill quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
