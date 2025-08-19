import Image from "next/image";
import Sectiontitle from "../_components/Sectiontitle";
import { HorizontalLine, PrimaryButton } from "../_components";


const visitUsData = [
    {
        id: 1,
        title: "Visit Us Anytime",
        subtitle: "Fresh Halal Meat, 7 Days a Week",
        description:
            "Drop by our shop at 216 Normanton Rd, Derby, and choose from our wide selection of halal meats including fresh chicken, lamb, beef, goat, fish, wings, drumsticks, and whole sheep & lamb. We’re open every day from 8 AM to 8 PM, ready to serve you with the finest quality and friendly service.",
        buttonText: "Get Directions",
        image: "/assets/cta/cta-img-1.png"
    },
    {
        id: 2,
        title: "Catering & Bulk Orders",
        subtitle: "Bulk Orders & Special Requests",
        description:
            "Planning a big family gathering, community event, or celebration? We can prepare large orders, custom cuts, and specialty meats to your exact needs. Simply visit our shop or call us on 07424 274823 / 07778 228770 to discuss your order.",
        buttonText: "call to order",
        image: "/assets/cta/cta-img-2.png"
    },
    

]


const VisitUs = () => {
  return (
    <section className='container px-12'>
        <div>
            {
                visitUsData.map(item => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className={`${item.id === 2 ? 'order-1' : 'order-0'} text-center max-md:mb-6 flex p-3 flex-col items-center`}>
                            <Sectiontitle title={item.title} />
                            <h3 className="font-cinzel text-xl lg:text-2xl xl:text-4xl max-w-[380px] mt-3 mb-6 font-semibold">{item.subtitle}</h3>
                            <p className="font-lato max-w-xl text-sm md:text-md lg:text-lg mb-10">{item.description}</p>
                            <PrimaryButton text={item.buttonText}  />
                        </div>
                        <div className={`${item.id === 2 ? 'order-0' : 'order-1'} h-[350px] max-md:mt-6 lg:h-[650px] w-full relative`}>
                            <Image src={item.image}  fill alt=" " />
                        </div>
                    </div>
                ))
            }
        </div>
        <HorizontalLine />
    </section>
  )
}

export default VisitUs;