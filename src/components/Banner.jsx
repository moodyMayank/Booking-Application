const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[450px]">
      <img
        className="object-fill h-full w-full"
        src="https://links.papareact.com/0fm"
        alt="Banner Image"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button className="text-purple-500 bg-white my-3 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
