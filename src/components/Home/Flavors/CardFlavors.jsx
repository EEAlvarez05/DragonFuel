function CardFlavors({name, image}) {
  return (
    <div className="min-w-full md:min-w-auto">
      <div className="flex flex-col justify-center items-center gap-6 h-[330px] w-[200px] mx-auto">
        <div className="h-[230px] w-[90px]">
          <img
            src={image || "./src/assets/images/Lata.png"}
            className="h-full w-full"
            alt=""
          />
        </div>
        <p className="">{name}</p>
      </div>
    </div>
  );
}

export default CardFlavors;
