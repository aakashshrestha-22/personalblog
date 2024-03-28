import Image from "next/image";
import Heropage from "@/components/heropage";
import AboutBlog from "@/components/aboutBlog";
import CategoryCard from "@/components/Cateogorycard";
import Philosophy from "@/components/myphilosophy";
import Subscribe from "@/components/subscribe";
export default function Home() {
  return (
    <main className=" flex flex-col  ">
      <Heropage />
      <AboutBlog />
      <CategoryCard />
      <Philosophy />
      <Subscribe />
    </main>
  );
}
