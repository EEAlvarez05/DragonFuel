function CardTestimonials({name, testimonial}) {
    return ( 
        <div className="bg-card rounded-3xl p-4 flex flex-col justify-between items-start w-[300px] h-[150px] lg:w-[350px] lg:h-[200px]">
            <p className="lg:text-[20px]">"{testimonial}"</p>
            <p>- {name}</p>
        </div>
     );
}

export default CardTestimonials;