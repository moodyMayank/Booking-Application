import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

import { InfoCardAPI } from "../../constant";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(InfoCardAPI);
      const data = await response.json();
      setSearchData(data);
    };
    fetchDetails();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section>
          <p className="text-xs">300+ stays for 5 Guests</p>
        </section>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
        <div className="flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More Filters</p>
        </div>
        {searchData.map((item) => (
          <InfoCard key={item.img} {...item} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Search;
