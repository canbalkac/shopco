"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DressStyle = () => {
  return (
    <section id="dress-style" className="flex justify-center mt-16">
      <div className="w-8/12 bg-[#F0F0F0] rounded-3xl p-8 flex flex-col items-center gap-10">
        <h1 className="font-extrabold text-center text-5xl">
          BROWSE BY DRESS STYLE
        </h1>

        {/* 1. Satır */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} // %80’i görünmeden başlamaz
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1, // sırayla gelsin
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="col-span-1 h-[300px] relative rounded-xl overflow-hidden"
          >
            <Image src="/images/casual.png" alt="casual" fill quality={100} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="col-span-2 h-[300px] relative rounded-xl overflow-hidden"
          >
            <Image src="/images/formal.png" alt="formal" fill quality={100} />
          </motion.div>
        </motion.div>

        {/* 2. Satır */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} // %80’i görünmeden başlamaz
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1, // sırayla gelsin
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 h-[300px] relative rounded-xl overflow-hidden"
          >
            <Image src="/images/party.png" alt="party" fill quality={100} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="col-span-1 h-[300px] relative rounded-xl overflow-hidden"
          >
            <Image src="/images/gym.png" alt="gym" fill quality={100} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressStyle;
