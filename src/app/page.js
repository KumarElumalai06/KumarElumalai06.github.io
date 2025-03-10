import Hero from "@/components/homeSection/hero";
import Categories from "@/components/categories/categories";
import Products from "@/components/products/products";
import Ingredients from "@/components/ingredients/ingredients";
import Discover from "@/components/discover/discover";
import Wedding from "@/components/wedding/wedding";
import Gallery from "@/components/gallery/gallery";
import Community from "@/components/community/community";
import Business from "@/components/community/business/business";



export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Ingredients />
      <Discover />
      <Wedding />
      <Gallery />
      <Community />
      <Business />
    </div>
  );
}
