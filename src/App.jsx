import Header from "./components/Header";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";
import { useState, useEffect } from "react";

const App = () => {
  const [smCardData, setsmData] = useState([]);
  const [mdCardData, setmdData] = useState([]);
  const [lgCardData, setlgData] = useState([]);

  return (
    <div>
      {/* Header Section*/}
      <Header />
      {/* Banner Section*/}
      <Banner />

      <main className="max-w-6xl mx-auto">
        {/* Explore Section */}
        <section className="pt-4">
          <h2 className="text-4xl font-semibold pb-5 m-2">Explore Nearby</h2>
          <SmallCard />
        </section>

        {/* Live Anywhere Section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* <MediumCard /> */}
        </section>
      </main>
    </div>
  );
};

export default App;
