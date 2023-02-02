import { useState, useEffect } from "react";
import { exploreDataAPI } from "../../constant";

const SmallCard = () => {
  const [exploreState, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(exploreDataAPI);
      const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
      const exploreData = await response.json();
      setState(exploreData);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grids-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {exploreState?.map((item) => {
        return (
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            {/* Left Element */}
            <div className="relative h-16 w-16">
              <img src={item.img} className="rounded-lg" alt="explore image" />
            </div>

            {/* Right Element */}
            <div>
              <h2>{item.location}</h2>
              <h3 className="text-gray-500">{item.distance}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard;
