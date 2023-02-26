import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <img src={img} alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2 " />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5" />
            {star}
          </p>
          <div>
            <p>{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
