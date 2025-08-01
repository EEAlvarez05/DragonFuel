function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-6 md:flex-row md:gap-12 pt-[60px]" id="home">
      <div className="flex justify-center">
        <div className="h-[230px] w-[90px] md:h-[330px] md:w-[140px]">
          <img src="./src/assets/images/Lata.png" className="h-full w-full" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl text-center">Cada sorbo, <br />un update a tu sistema.</h2>
        <h4 className="text-[20px] text-accent">+50% enfoque. 0% bugs. 100% sabor.</h4>
        <button className="button1 py-2 px-4 rounded-3xl cursor-pointer font-semibold">Explorar Sabores</button>
      </div>
    </section>
  );
}

export default Hero;
