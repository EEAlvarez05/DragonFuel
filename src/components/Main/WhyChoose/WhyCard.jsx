function WhyCard({name, icon, description}) {
    return ( 
        <div className="flex flex-col gap-4 p-2 border-2 border-accent w-[350px]">
            <div className="flex gap-4 text-2xl items-center">
                <i className={icon}></i>
                <h5>{name}</h5>
            </div>
            <div className="text-center">
                <p className="whitespace-pre-line">{description}</p>
            </div>
        </div>
     );
}

export default WhyCard;