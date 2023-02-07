import { useState, useEffect } from "react";
import {
  exploreDataAPI,
  liveNearByDataAPI,
  largeCardImage,
} from "../../constant";
import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";

const Card = () => {
  const [smCardData, setSmCardData] = useState([]);
  const [mdCardData, setMdCardData] = useState([]);
  const [lgCardData, setLgCardData] = useState([]);

  useEffect(() => {
    Promise.all([fetch(exploreDataAPI), fetch(liveNearByDataAPI)])
      .then(([resExploreData, resLiveNearData]) =>
        Promise.all([resExploreData.json(), resLiveNearData.json()])
      )
      .then(([exploreData, liveNearByData]) => {
        setSmCardData(exploreData);
        setMdCardData(liveNearByData);
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-4">
        <h2 className="text-4xl font-semibold pb-5 m-2">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smCardData?.map((item) => (
            <SmallCard key={item.img} {...item} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {mdCardData?.map((item) => (
            <MediumCard key={item.img} {...item} />
          ))}
        </div>
      </section>
      <LargeCard
        img={largeCardImage}
        title="The Greatest Outdoors"
        description="WishLists curated by Hotel Wallah"
        buttonText="Get Inspired"
      />
    </main>
  );
};

export default Card;
