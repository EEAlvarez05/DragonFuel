import CardTestimonials from "./CardTestimonials";
import testimonialData from "./testimonialData"; 
function Testimonials() {
    return ( 
        <section className="py-10 flex flex-col gap-16 md:gap-20 lg:gap-24" id="community">
            <h2 className="text-3xl text-center">
                Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-[repeat(1,300px)] md:grid-cols-[repeat(2,300px)] lg:grid-cols-[repeat(2,350px)] gap-4 md:gap-6 lg:gap-8 justify-center items-center">
                {testimonialData.map((item, index)=>(
                    <CardTestimonials key={index} name={item.name} testimonial={item.testimonial} />
                ))}
            </div>
        </section>
     );
}

export default Testimonials;