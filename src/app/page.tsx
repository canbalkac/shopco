import DressStyle from "@/components/Home/DressStyle/DressStyle";
import HappyCustomers from "@/components/Home/HappyCustomers/HappyCustomers";
import LogosMarquee from "@/components/Home/Hero/Components/LogosMarquee";
import Hero from "@/components/Home/Hero/Hero";
import NewArrivals from "@/components/Home/NewArrivals/NewArrivals";
import TopSelling from "@/components/Home/TopSelling/TopSelling";
import { getNewArrivalProducts, getTopSellingProducts } from "@/lib/data";

export default async function Home() {
  const newArrivalsProducts = await getNewArrivalProducts();
  const topSellingProducts = await getTopSellingProducts();
  return (
    <>
      <Hero />
      <LogosMarquee />
      <NewArrivals products={newArrivalsProducts} />
      <TopSelling products={topSellingProducts} />
      <DressStyle />
      <HappyCustomers />
    </>
  );
}
