import LogosMarquee from "@/components/Home/Hero/Components/LogosMarquee";
import Hero from "@/components/Home/Hero/Hero";
import NewArrivals from "@/components/Home/NewArrivals/NewArrivals";
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
    </>
  );
}
