import Image from "next/image";
import HeroBadge1 from "../../../../public/assets/hero/hero-badge-1.png"; 
import HeroBadge2 from "../../../../public/assets/hero/hero-badge-2.png"; 
import HeroMain from "../../../../public/assets/hero/hero-main-img.png"; 
import PrimaryButton from "../primary-button/PrimaryButton";
import Link from "next/link";


const highlights = [
  "100% HALAL CERTIFIED",
  "FRESH CUTS DAILY",
  "STRICT HYGIENE",
  "LOCALLY SOURCED"
]

const Hero = () => {



  return (
    <section className="container">
        <div className="flex max-md:flex-col gap-6 items-start py-12 relative">
           <div className="max-md:w-[100px] max-md:h-[100px]">
                <Image src={HeroBadge1} width={200} height={200} alt="Hero badge "/>
            </div>
            <div className="-mt-6 md:mt-6">
                <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-[600px] xl:max-w-4xl ">Fresh Halal Meat Delivered Daily in Derby</h1>
                <p className="font-merriweather text-sm md:text-md lg:text-lg mt-3  max-w-md">From tender chicken and lamb to premium beef, goat, and fish prepared fresh every day.</p>
                <div className="mt-6 ">
                    <PrimaryButton text="Explore our meats" />
                </div>
            </div> 
            <div className="max-md:hidden absolute -bottom-20 right-10">
            <Image src={HeroBadge2} width={200} height={200} alt="Hero badge" className="" />
            </div>
        </div>
        <div className="mt-6  md:mt-12 lg:mt-22">
            <Image src={HeroMain} width={1300} height={680} alt="Meat image" className=" object-cover object-center mx-auto" />
        </div>
        <div className="max-md:grid max-md:grid-cols-2 flex  lg:grid-cols-4 justify-between max-w-[1300px] mx-auto font-lato text-main-color items-center mt-3">
            {
                highlights.map((highlight, index) => (
                        <p key={index} className="text-sm self-center md:text-md lg:text-lg">{highlight}</p>
                ))
            }
        </div>
        
    </section>
  )
}

export default Hero;