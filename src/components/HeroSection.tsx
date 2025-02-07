import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";


const HeroSection = () => {
    return (
        <div className="container">
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">

                <h1 className="mt-20 md:mt-20 text-3xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Everyday Essentials</h1>
                <p className="my-4 font-normal text-base md:text-lg tex-neutral-300 max-w-3xl mx-auto">Find a universe of premium quality and style with our great many items. From in vogue clothing and rich beauty care products to high-grade paper and adaptable writing material, we offer something for everybody. Our items are intended to meet your ordinary requirements with an ideal mix of usefulness and class, guaranteeing fulfillment and worth with each buy.</p>
                <div>
                    <Link href={"/product"}>
                        <Button borderRadius="1.75rem" className="dark:bg-black text-white dark:text-white border-neutral-200 dark:border-red-800">Explore Products</Button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
