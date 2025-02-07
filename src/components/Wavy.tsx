"use client";

import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";

const Wavy = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="container">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Want to Work Together?
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            The PASHANGQU is committed to collaboration, driving innovation,
            sustainability, and efficiency. By working together, we can create a
            stronger, more resilient future for the industry and its
            stakeholders.
          </p>
          <div className="text-center mt-5">
            <Link href={"/contact"}>
              <Button
                borderRadius="1.75rem"
                className="dark:bg-black text-white dark:text-white border-neutral-200 dark:border-red-800"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Wavy;
