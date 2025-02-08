"use client";

import { garments } from "./../../../public/Data/data";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-20 text-3xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Garments
          </h1>
          <p className="my-4 font-normal text-base md:text-lg tex-neutral-300 max-w-xl mx-auto">
            Find a universe of premium quality and style with our great many
            items. From in vogue clothing and rich beauty care products to
            high-grade paper and adaptable writing material, we offer something
            for everybody. Our items are intended to meet your ordinary
            requirements with an ideal mix of usefulness and class, guaranteeing
            fulfillment and worth with each buy.
          </p>
          <div></div>
        </div>
      </div>

      {/* //products */}
      <div className="container py-12 bg-gray-900">
        <div className="my-10 mx-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {garments?.map((product, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900  dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <figure>

                      <Image width={300} height={300} src={product?.image} alt={product.title} />
                    </figure>

                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default page;
