import DressStyle from "@/components/Home/DressStyle/DressStyle";
import HappyCustomers from "@/components/Home/HappyCustomers/HappyCustomers";
import LogosMarquee from "@/components/Home/Hero/Components/LogosMarquee";
import Hero from "@/components/Home/Hero/Hero";
import NewArrivals from "@/components/Home/NewArrivals/NewArrivals";
import TopSelling from "@/components/Home/TopSelling/TopSelling";
import TopBanner from "@/components/layout/Banner";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <LogosMarquee />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
    </>
  );
}
