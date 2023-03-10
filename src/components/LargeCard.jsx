const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative py-8 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <img
          src={img}
          alt=""
          className="h-[100%] w-[100%] rounded-2xl object-cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
