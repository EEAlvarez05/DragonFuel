import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import Flavors from "./Flavors/Flavors";
import Testimonials from "./Testimonials/Testimonials";
import CallToAction from "./CallToAction/CallToAction";
import About from "./About/About";
function Home() {
    return ( 
        <main className="px-6 py-4 md:px-12 md:py-8 lg:max-w-[1440px] lg:mx-auto">
            <Hero />
            <WhyChoose />
            <Flavors />
            <Testimonials />
            <About />
            <CallToAction />
        </main>
     );
}

export default Home;