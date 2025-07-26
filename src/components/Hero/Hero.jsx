function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-6 md:flex-row md:gap-12 pt-[50px]">
      <div className="flex justify-center">
        <div className="bg-accent h-[200px] w-[100px] md:h-[300px] md:w-[150px]"></div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl text-center">Cada sorbo, <br />un update al sistema.</h2>
        <h4 className="text-[20px] text-accent">+50% enfoque. 0% bugs. 100% sabor.</h4>
        <button className="border-2 border-accent text-accent py-2 px-4 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-accent hover:scale-110 hover:text-primary">Explorar Sabores</button>
      </div>
    </section>
  );
}

export default Hero;
