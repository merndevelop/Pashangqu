'use client'
import Image from "next/image"
import data from "../../src/data/gallery.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Product {
    id: number,
    title: string,
    isFeatured: boolean,
    image: string,
}

const FeaturedProducts = () => {
    const featuredProduct = data.gallery.filter((product:Product) => product.isFeatured)
    return (
        <div className="container py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">Featured Products</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Quality products crafted for you!</p>
                </div>
                <div className="mt-10 flex">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center m-auto">

                        {featuredProduct.map((product: Product) => {
                            return(
                                <div key={product.id} className="flex justify-center ">
                                <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-zinc-900  dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                               <Image src={product.image} alt={product.title} width={350} height={350}/>
                                  <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{product.title}</h2> 
                                </div>
                                </BackgroundGradient>
                                
                            </div>
                            )
                        }
                           
                        )}
                    </div>
                        
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default FeaturedProducts
