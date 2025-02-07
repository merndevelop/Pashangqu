"use client";
import data from "../data/gallery.json";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface Product {
  id: number;
  title: string;
  isFeatured: boolean;
  image: string;
}

const SpecificProducts = () => {
  const testimonials = data.gallery.filter(
    (product: Product) => product.isFeatured
  );

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden dark:bg-grid-white/[0.2] bg-grid-dark/[0.2]">
      <div className="text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Our Products
        </h2>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default SpecificProducts;
