import WhyCard from "./WhyCard";
import whyItems from "./whyItems";

function WhyChoose() {
    return ( 
        <section className="flex flex-col gap-10 md:gap-24 py-10">
            <div className="p-3 flex flex-col justify-center items-center gap-8">
                <h2 className="text-3xl md:text-4xl">
                    ¿Por qué elegir DragonFuel?
                </h2>
                <h4 className="text-[20px]">
                    Más que una bebida, <br /> Es energía, enfonque y fuego.
                </h4>
            </div>
            <div className="flex gap-8 flex-wrap justify-center md:gap-14">
                {whyItems.map((item, index)=>(
                    <WhyCard key={index} name={item.name} icon={item.icon} description={item.description} />
                ))}
            </div>
        </section>
     );
}

export default WhyChoose;