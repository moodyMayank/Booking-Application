import { useState, useEffect } from "react";
import { exploreDataAPI, liveNearByDataAPI } from "../../constant";
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
    <main>
      <section className="pt-4">
        <h2 className="text-4xl font-semibold pb-5 m-2">Explore Nearby</h2>
        <div className="grid grid-cols-2">
          {smCardData?.map((item) => (
            <SmallCard {...item} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        {/* <MediumCard {props}/> */}
      </section>
      <section></section>
    </main>
  );
};

export default Card;
