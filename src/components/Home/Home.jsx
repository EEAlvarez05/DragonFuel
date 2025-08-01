import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import Flavors from "./Flavors/Flavors";
import Testimonials from "./Testimonials/Testimonials";
function Home() {
    return ( 
        <main className="px-6 py-4 md:px-12 md:py-8 lg:max-w-[1440px] lg:mx-auto">
            <Hero />
            <WhyChoose />
            <Flavors />
            <Testimonials />
        </main>
     );
}

export default Home;